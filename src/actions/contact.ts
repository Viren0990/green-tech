'use server'

import { prisma } from '@/src/lib/prisma';

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
    await prisma.contactForm.create({
      data: {
        name: name.trim(),
        phone: phone?.trim(),
        address: address.trim(),
        message: message.trim()
      }
    });

    return { success: true, message: 'Form submitted successfully!' };
  } catch (error) {
    console.error('Contact form error:', error);
    return { success: false, error: 'Failed to submit form. Please try again.' };
  }
}
