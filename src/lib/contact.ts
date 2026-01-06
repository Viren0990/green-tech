'use server'

import { prisma } from '@/src/lib/prisma';

export async function submitContactForm(formData: FormData) {
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const phone = formData.get('phone') as string;
  const message = formData.get('message') as string;

  try {
    await prisma.contactForm.create({
      data: { name, email, phone, message }
    });

    return { success: true, message: 'Form submitted successfully!' };
  } catch (error) {
    return { success: false, error: 'Failed to submit form' };
  }
}
