import Navbar from '@/src/components/Navbar';
import Footer from '@/src/components/Footer';
import PostDetail from '@/src/components/posts/PostDetail';
import { prisma } from '@/src/lib/prisma';
import { notFound } from 'next/navigation';

export const revalidate = 60;

async function getPost(id: string) {
  try {
    const post = await prisma.post.findUnique({
      where: { id }
    });
    return post;
  } catch (error) {
    console.error('Error fetching post:', error);
    return null;
  }
}

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function PostPage({ params }: Readonly<PageProps>) {
  const { id } = await params; // Await params in Next.js 15+
  const post = await getPost(id);

  if (!post) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <main>
        <PostDetail post={post} />
      </main>
      <Footer />
    </>
  );
}
