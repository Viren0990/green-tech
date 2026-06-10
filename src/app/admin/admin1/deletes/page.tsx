import Navbar from '@/src/components/Navbar';
import Footer from '@/src/components/Footer';
import { prisma } from '@/src/lib/prisma';
import { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import DeletePost from '@/src/components/posts/DeletePost';
import AdminAuthGate from '@/src/components/admin/AdminAuthGate';

const headingFont = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
});

export const revalidate = 60; // Revalidate every 60 seconds

export const metadata: Metadata = {
  title: 'E-Waste Projects Gallery - Recycling & Refurbishment Work',
  description: 'Explore DMD Green Tech Revive\'s e-waste recycling and refurbishment projects.',
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
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <AdminAuthGate title="Manage Deletes">
        <main>
          {/* Header Section */}
          <section className="pt-24 pb-12 bg-linear-to-br from-green-50 to-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <div className="inline-block bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                TRANSFORMATION GALLERY
              </div>

              <h1 className={`${headingFont.className} text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight`}>
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
          <DeletePost posts={posts} />
        </main>
        <Footer />
      </AdminAuthGate>
    </div>
  );
}
