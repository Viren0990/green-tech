import { pageMetadata, breadcrumbJsonLd } from '@/src/lib/seo';
import JsonLd from '@/src/components/JsonLd';
import Navbar from '@/src/components/Navbar';
import Footer from '@/src/components/Footer';
import PostsGrid from '@/src/components/posts/PostsGrid';
import { prisma } from '@/src/lib/prisma';
import { Playfair_Display } from 'next/font/google';
import GalleryHero from './GalleryHero';

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['700', '800'],
});

export const revalidate = 60; // Revalidate every 60 seconds

export const metadata = pageMetadata({
  title: "E-Waste Collection Drives & Projects",
  description: "Photos and updates from DMD Green Tech Revive's e-waste collection drives, recycling and refurbishment work with Pune societies, schools and companies.",
  path: "/posts",
});

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
      <JsonLd data={breadcrumbJsonLd('Gallery', '/posts')} />
      <main>
        <GalleryHero postCount={posts.length} />

        {/* Posts Grid */}
        <PostsGrid posts={posts} />
      </main>
      <Footer />
    </>
  );
}
