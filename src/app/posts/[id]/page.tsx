import Navbar from '@/src/components/Navbar';
import Footer from '@/src/components/Footer';
import PostDetail from '@/src/components/posts/PostDetail';
import { prisma } from '@/src/lib/prisma';
import { notFound } from 'next/navigation';
import { cache } from 'react';
import type { Metadata } from 'next';
import JsonLd from '@/src/components/JsonLd';
import { SITE_URL } from '@/src/lib/business';
import { pageMetadata } from '@/src/lib/seo';

export const revalidate = 60;

// cache() so generateMetadata and the page share one database query per request.
const getPost = cache(async (id: string) => {
  try {
    const post = await prisma.post.findUnique({
      where: { id }
    });
    return post;
  } catch (error) {
    console.error('Error fetching post:', error);
    return null;
  }
});

interface PageProps {
  params: Promise<{ id: string }>;
}

function summarise(text: string, max = 150) {
  const plain = text.replace(/\s+/g, ' ').trim();
  return plain.length <= max ? plain : `${plain.slice(0, max - 1).trimEnd()}…`;
}

export async function generateMetadata({ params }: Readonly<PageProps>): Promise<Metadata> {
  const { id } = await params;
  const post = await getPost(id);
  if (!post) return { title: 'Post not found', robots: { index: false } };

  // Long post titles drop the brand suffix so the full title stays within ~60 characters.
  return pageMetadata({
    title: post.title,
    absoluteTitle: post.title.length > 36,
    description: summarise(post.content),
    path: `/posts/${post.id}`,
    image: post.mainImage || undefined,
  });
}

export default async function PostPage({ params }: Readonly<PageProps>) {
  const { id } = await params; // Await params in Next.js 15+
  const post = await getPost(id);

  if (!post) {
    notFound();
  }

  // Serialize Date objects for client component
  const serializedPost = {
    ...post,
    createdAt: post.createdAt.toISOString(),
    updatedAt: post.updatedAt.toISOString(),
  };

  return (
    <>
      <Navbar />
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
            { '@type': 'ListItem', position: 2, name: 'Gallery', item: `${SITE_URL}/posts` },
            { '@type': 'ListItem', position: 3, name: post.title, item: `${SITE_URL}/posts/${post.id}` },
          ],
        }}
      />
      <main>
        <PostDetail post={serializedPost} />
      </main>
      <Footer />
    </>
  );
}
