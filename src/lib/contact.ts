'use server'

import { prisma } from '@/src/lib/prisma';
import nodemailer from 'nodemailer'; // 1. Import Nodemailer

export async function submitContactForm(formData: FormData) {
  const name = formData.get('name') as string;
  const address = formData.get('address') as string;
  const phone = formData.get('phone') as string;
  const message = formData.get('message') as string;

  // Basic validation
  if (!name || !address || !message) {
    return { success: false, error: 'Please fill in all required fields.' };
  }

  try {
    // 2. Save to Database (Do this first so data is never lost)
    await prisma.contactForm.create({
      data: {
        name: name.trim(),
        phone: phone.trim(),
        address: address.trim(),
        message: message.trim()
      }
    });

    // 3. Send Email Notification (The new part)
    try {
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.GMAIL_USER,      // Your Gmail
          pass: process.env.GMAIL_APP_PASSWORD // The App Password
        }
      });

      const mailOptions = {
        from: `"Website Form" <${process.env.GMAIL_USER}>`,
        to: process.env.DEPT_EMAIL, // The Department's Email
        subject: `🔔 New Inquiry from ${name}`,
        html: `
                <div style="font-family: Arial, sans-serif; padding: 20px; border: 1px solid #e0e0e0;">
                    <h2 style="color: #333;">New Contact Form Submission</h2>
                    <p><strong>Name:</strong> ${name}</p>
                    <p><strong>Phone:</strong> <a href="tel:${phone}">${phone}</a></p>
                    <p><strong>Address/Location:</strong> ${address}</p>
                    <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;" />
                    <p><strong>Message:</strong></p>
                    <p style="background-color: #f9f9f9; padding: 15px; border-radius: 5px;">${message}</p>
                </div>
            `
      };

      await transporter.sendMail(mailOptions);
      console.log('Email notification sent successfully');

    } catch (emailError) {
      // We log the error but DO NOT throw it. 
      // We still want to return success:true because the DB save worked.
      console.error('Email failed to send, but data is safe in DB:', emailError);
    }

    return { success: true };

  } catch (error) {
    console.error('Contact form error:', error);
    return { success: false, error: 'Failed to submit form. Please try again.' };
  }
}