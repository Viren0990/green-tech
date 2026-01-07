import Image from 'next/image';
import Link from 'next/link';
import { Calendar, User, ArrowLeft } from 'lucide-react';

interface Post {
  id: string;
  title: string;
  content: string;
  images: string[];
  author: string;
  createdAt: Date;
  updatedAt: Date;
}

interface PostDetailProps {
  post: Post;
}

export default function PostDetail({ post }: Readonly<PostDetailProps>) {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-linear-to-br from-green-50 to-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back button */}
          <Link 
            href="/posts"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-green-600 mb-8 transition"
          >
            <ArrowLeft size={20} />
            <span>Back to Gallery</span>
          </Link>

          {/* Title and Meta */}
          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-gray-600">
              <div className="flex items-center gap-2">
                <User size={18} />
                <span className="font-medium">{post.author}</span>
              </div>
              <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
              <div className="flex items-center gap-2">
                <Calendar size={18} />
                <span>{new Date(post.createdAt).toLocaleDateString('en-IN', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main/Featured Image */}
          {post.images.length > 0 && (
            <div className="mb-12">
              <div className="relative aspect-video rounded-2xl overflow-hidden bg-gray-100 shadow-xl">
                <Image
                  src={post.images[0]}
                  alt={post.title}
                  fill
                  style={{objectFit: "contain"}}
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          )}

          {/* Post Content */}
          <div className="prose prose-lg max-w-none mb-12">
            <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">
              {post.content}
            </p>
          </div>

          {/* Additional Images Gallery */}
          {post.images.length > 1 && (
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Project Gallery
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {post.images.slice(1).map((image, index) => (
                  <div 
                    key={index}
                    className="relative aspect-video rounded-xl overflow-hidden bg-gray-100 shadow-lg hover:shadow-xl transition-shadow"
                  >
                    <Image
                      src={image}
                      alt={`${post.title} - Image ${index + 2}`}
                      fill
                      style={{objectFit: "contain"}}
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Share/CTA Section */}
          <div className="border-t border-gray-200 pt-8">
            <div className="bg-linear-to-br from-green-50 to-gray-50 rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Inspired by our work?
              </h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Join us in making a difference. Schedule a pickup for your e-waste or explore our refurbished products.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact"
                  className="bg-green-500 text-white px-8 py-3 rounded-lg hover:bg-green-600 transition font-semibold"
                >
                  Schedule Pickup
                </Link>
                <Link 
                  href="/posts"
                  className="bg-white border-2 border-gray-300 px-8 py-3 rounded-lg hover:border-green-500 hover:text-green-500 transition font-semibold"
                >
                  View More Projects
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
