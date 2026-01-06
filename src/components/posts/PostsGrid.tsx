import Link from 'next/link';
import Image from 'next/image';
import { Calendar, User } from 'lucide-react';

interface Post {
  id: string;
  title: string;
  content: string;
  images: string[];
  author: string;
  createdAt: Date;
}

interface PostsGridProps {
  posts: Post[];
}

export default function PostsGrid({ posts }: Readonly<PostsGridProps>) {
  if (posts.length === 0) {
    return (
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center py-16">
            <div className="text-6xl mb-4">📦</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              No posts yet
            </h3>
            <p className="text-gray-600">
              Check back soon for our latest e-waste transformation projects!
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Link 
              key={post.id} 
              href={`/posts/${post.id}`}
              className="group"
            >
              <article className="bg-white rounded-2xl overflow-hidden border border-gray-200 hover:shadow-xl hover:border-green-500 transition-all duration-300">
                {/* Featured Image */}
                <div className="relative aspect-video overflow-hidden bg-gray-100">
                  {post.images.length > 0 ? (
                    <Image
                      src={post.images[0]}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-gray-400">
                      <span className="text-6xl">🖼️</span>
                    </div>
                  )}
                  
                  {/* Image count badge */}
                  {post.images.length > 1 && (
                    <div className="absolute top-3 right-3 bg-black/70 text-white px-3 py-1 rounded-full text-sm font-medium">
                      📷 {post.images.length}
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors line-clamp-2">
                    {post.title}
                  </h2>
                  
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3 leading-relaxed">
                    {post.content}
                  </p>

                  {/* Meta info */}
                  <div className="flex items-center gap-4 text-sm text-gray-500 pt-4 border-t border-gray-100">
                    <div className="flex items-center gap-1">
                      <User size={16} />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar size={16} />
                      <span>{new Date(post.createdAt).toLocaleDateString('en-IN')}</span>
                    </div>
                  </div>

                  {/* Read more link */}
                  <div className="mt-4">
                    <span className="text-green-600 font-semibold text-sm group-hover:underline">
                      View Project →
                    </span>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
