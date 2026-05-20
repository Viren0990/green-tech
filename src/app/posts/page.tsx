import Navbar from '@/src/components/Navbar';
import Footer from '@/src/components/Footer';
import PostsGrid from '@/src/components/posts/PostsGrid';
import { prisma } from '@/src/lib/prisma';
import { Metadata } from 'next';
import { Playfair_Display } from 'next/font/google';
import GalleryHero from './GalleryHero';

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['700', '800'],
});

export const revalidate = 60; // Revalidate every 60 seconds

export const metadata: Metadata = {
  title: 'E-Waste Projects Gallery - Recycling & Refurbishment Work',
  description: 'Explore DMD Green Tech Revive\'s e-waste recycling and refurbishment projects. See how we transform old electronics into resources and extend device lifecycles across India.',
  keywords: [
    'e-waste projects India',
    'recycling gallery',
    'refurbishment work',
    'laptop repair projects',
    'electronics restoration',
    'DMD Green Tech projects',
    'e-waste projects Pune'
  ],
  openGraph: {
    title: 'E-Waste Projects Gallery - DMD Green Tech Revive',
    description: 'Our latest e-waste recycling and refurbishment projects. Transforming technology for a sustainable future.',
  },
  alternates: {
    canonical: 'https://dmdgreentechrevive.com/posts',
  },
};

async function getPosts() {
  try {
    const posts = await prisma.post.findMany({
      orderBy: {
        createdAt: 'asc'
      }
    });
    return posts;
  } catch (error) {
    console.error('Error fetching posts:', error);
    return [];
  }
}

export default async function PostsPage() {
  const posts = await getPosts();

  return (
    <>
      <Navbar />
      <main>
        <GalleryHero postCount={posts.length} />

        {/* Posts Grid */}
        <PostsGrid posts={posts} />
      </main>
      <Footer />
    </>
  );
}
