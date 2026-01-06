'use server'

import { prisma } from '@/src/lib/prisma';

export async function submitContactForm(formData: FormData) {
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const phone = formData.get('phone') as string | null;
  const message = formData.get('message') as string;

  // Basic validation
  if (!name || !email || !message) {
    return { success: false, error: 'Please fill in all required fields.' };
  }

  try {
    await prisma.contactForm.create({
      data: {
        name: name.trim(),
        email: email.trim(),
        phone: phone?.trim() || null,
        message: message.trim()
      }
    });

    return { success: true, message: 'Form submitted successfully!' };
  } catch (error) {
    console.error('Contact form error:', error);
    return { success: false, error: 'Failed to submit form. Please try again.' };
  }
}
