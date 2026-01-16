'use server'

import { prisma } from '@/src/lib/prisma';
import { revalidatePath } from 'next/cache';

export async function createPost(formData: FormData) {
  const password = formData.get('password') as string;

  // Verify password
  if (password !== process.env.ADMIN_PASSWORD) {
    return { success: false, error: 'Invalid password. Access denied.' };
  }

  const title = formData.get('title') as string;
  const content = formData.get('content') as string;
  const author = formData.get('author') as string;
  const mainImage = formData.get('mainImage') as string;
  const imagesJson = formData.get('images') as string;

  // Validation
  if (!title || !content || !author || !mainImage || !imagesJson) {
    return { success: false, error: 'Please fill in all required fields.' };
  }

  let images: string[];
  try {
    images = JSON.parse(imagesJson);
    if (!Array.isArray(images) || images.length === 0) {
      return { success: false, error: 'Please upload at least one gallery image.' };
    }

    if (images.length > 15) {
      return { success: false, error: 'Maximum 15 gallery images allowed per post.' };
    }
  } catch (error) {
    return { success: false, error: 'Invalid image data.' };
  }

  try {
    const post = await prisma.post.create({
      data: {
        title: title.trim(),
        content: content.trim(),
        mainImage: mainImage,
        images: images,
        author: author.trim()
      }
    });

    // Revalidate posts page to show new post
    revalidatePath('/posts');

    return { success: true, post };
  } catch (error) {
    console.error('Create post error:', error);
    return { success: false, error: 'Failed to create post. Please try again.' };
  }
}
