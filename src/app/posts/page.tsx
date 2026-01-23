import Navbar from '@/src/components/Navbar';
import Footer from '@/src/components/Footer';
import PostsGrid from '@/src/components/posts/PostsGrid';
import { prisma } from '@/src/lib/prisma';
import { Metadata } from 'next';
import { Bodoni_Moda } from 'next/font/google';

const bodoni = Bodoni_Moda({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
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
        {/* Header Section */}
        <section className="pt-24 pb-12 bg-linear-to-br from-green-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-block bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              TRANSFORMATION GALLERY
            </div>

            <h1 className={`${bodoni.className} text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight`}>
              Our E-Waste Projects
            </h1>

            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Explore our latest e-waste recycling and refurbishment projects.
              See how we're giving technology a second life and contributing to a greener future.
            </p>

            <div className="mt-8 flex items-center justify-center gap-4 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <span className="text-2xl">📦</span>
                <span><strong>{posts.length}</strong> Projects</span>
              </div>
              <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">♻️</span>
                <span>Recycling & Refurbishing</span>
              </div>
            </div>
          </div>
        </section>
        <div className="h-0.5 w-full bg-gray-200"></div>

        {/* Posts Grid */}
        <PostsGrid posts={posts} />
      </main>
      <Footer />
    </>
  );
}
