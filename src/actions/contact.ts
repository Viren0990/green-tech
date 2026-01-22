'use server'

import { prisma } from '@/src/lib/prisma';
import nodemailer from 'nodemailer'; // 1. Import Nodemailer

export async function submitContactForm(formData: FormData) {
  const name = formData.get('name') as string;
  const phone = formData.get('phone') as string;
  const address = formData.get('address') as string;
  const message = formData.get('message') as string;

  // Basic validation
  if (!name || !address || !message) {
    return { success: false, error: 'Please fill in all required fields.' };
  }

  try {
    // 2. Save to Database (Prisma)
    // We do this first to ensure data integrity
    await prisma.contactForm.create({
      data: {
        name: name.trim(),
        phone: phone?.trim(),
        address: address.trim(),
        message: message.trim()
      }
    });

    // 3. Configure Email Transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,      // Your Gmail address
        pass: process.env.GMAIL_APP_PASSWORD // The App Password
      },
    });

    // 4. Send Email Notification
    await transporter.sendMail({
      from: `"Website Form" <${process.env.GMAIL_USER}>`, // Note: Added ${} wrapper
      to: process.env.DEPT_EMAIL,
      subject: `🚀 New Lead: ${name}`, // Catchy subject line
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
        </head>
        <body style="margin: 0; padding: 0; background-color: #f4f4f5; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
          
          <div style="max-width: 600px; margin: 40px auto; background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
            
            <div style="background-color: #2563eb; padding: 24px; text-align: center;">
              <h1 style="color: #ffffff; margin: 0; font-size: 24px; font-weight: 600;">New Inquiry Received</h1>
              <p style="color: #e0e7ff; margin: 8px 0 0 0; font-size: 14px;">Submitted via Corporate Website</p>
            </div>

            <div style="padding: 32px;">
              
              <h2 style="color: #1f2937; font-size: 18px; margin-top: 0; border-bottom: 2px solid #f3f4f6; padding-bottom: 10px;">Contact Details</h2>
              
              <table style="width: 100%; border-collapse: collapse; margin-top: 16px;">
                <tr>
                  <td style="padding: 8px 0; color: #6b7280; width: 120px;"><strong>Name:</strong></td>
                  <td style="padding: 8px 0; color: #111827;">${name}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; color: #6b7280;"><strong>Phone:</strong></td>
                  <td style="padding: 8px 0; color: #111827;">
                    <a href="tel:${phone}" style="color: #2563eb; text-decoration: none;">${phone || 'N/A'}</a>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; color: #6b7280;"><strong>Address:</strong></td>
                  <td style="padding: 8px 0; color: #111827;">${address}</td>
                </tr>
              </table>

              <h2 style="color: #1f2937; font-size: 18px; margin-top: 32px; border-bottom: 2px solid #f3f4f6; padding-bottom: 10px;">Message</h2>
              
              <div style="background-color: #f9fafb; border-left: 4px solid #2563eb; padding: 16px; margin-top: 16px; color: #374151; line-height: 1.6;">
                ${message.replace(/\n/g, '<br>')}
              </div>

            </div>

            <div style="background-color: #f3f4f6; padding: 16px; text-align: center; border-top: 1px solid #e5e7eb;">
              <p style="margin: 0; color: #6b7280; font-size: 12px;">
                This is an automated notification. Please do not reply directly to this email.
              </p>
            </div>

          </div>
        </body>
        </html>
      `,
    });

    return { success: true, message: 'Form submitted successfully!' };

  } catch (error) {
    console.error('Contact form error:', error);
    return { success: false, error: 'Failed to submit form. Please try again.' };
  }
}