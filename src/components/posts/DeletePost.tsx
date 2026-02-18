'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Calendar, User, Trash2, AlertTriangle, X } from 'lucide-react';
import { useState, useTransition } from 'react';
import { deletePost } from '@/src/actions/posts';

interface Post {
  id: string;
  title: string;
  content: string;
  mainImage: string;
  images: string[];
  author: string;
  createdAt: Date;
}

interface PostsGridProps {
  posts: Post[];
}

export default function PostsGrid({ posts }: Readonly<PostsGridProps>) {
  const [isPending, startTransition] = useTransition();
  const [postToDelete, setPostToDelete] = useState<Post | null>(null);
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleDelete = async () => {
    if (!postToDelete) return;
    if (!password) {
      setError('Please enter the admin password');
      return;
    }

    startTransition(async () => {
      const result = await deletePost(postToDelete.id, password);
      if (result.success) {
        setPostToDelete(null);
        setPassword('');
        setError(null);
      } else {
        setError(result.error || 'Failed to delete post');
      }
    });
  };

  const handleClose = () => {
    setPostToDelete(null);
    setPassword('');
    setError(null);
  };

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
              <article className="bg-white rounded-2xl overflow-hidden border border-gray-200 hover:shadow-xl hover:border-green-500 transition-all duration-300 h-full flex flex-col">
                {/* Featured Image */}
                <div className="relative w-full aspect-video overflow-hidden bg-gray-100">
                  <Image
                    src={post.mainImage}
                    alt={post.title}
                    fill
                    style={{ objectFit: "contain" }}
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                    priority={false}
                  />

                  {/* Image count badge (for gallery) */}
                  {post.images.length > 0 && (
                    <div className="absolute top-3 right-3 bg-black/70 text-white px-3 py-1 rounded-full text-sm font-medium">
                      + {post.images.length}
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6 flex-grow">
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
                <div className="p-4 pt-0">
                  <button 
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      setPostToDelete(post);
                    }}
                    className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-4 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg active:scale-95 flex items-center justify-center gap-2"
                  >
                    <Trash2 size={18} />
                    Delete Post
                  </button>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>

      {/* Confirmation Modal */}
      {postToDelete && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div 
            className="bg-white rounded-3xl shadow-2xl max-w-md w-full overflow-hidden animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-8">
              <div className="flex justify-between items-start mb-6">
                <div className="bg-red-100 p-3 rounded-2xl text-red-600">
                  <AlertTriangle size={32} />
                </div>
                <button 
                  onClick={handleClose}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <X size={24} />
                </button>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Delete Project?
              </h3>
              <p className="text-gray-600 mb-6">
                Are you sure you want to delete <span className="font-semibold text-gray-900">"{postToDelete.title}"</span>? This action cannot be undone.
              </p>

              {/* Password Input */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Admin Password
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    if (error) setError(null);
                  }}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') handleDelete();
                  }}
                  placeholder="Enter password to confirm"
                  className="w-full px-4 py-3 rounded-2xl border border-gray-200 focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all"
                  autoFocus
                />
                {error && (
                  <p className="mt-2 text-sm text-red-600 animate-in slide-in-from-top-1">
                    {error}
                  </p>
                )}
              </div>

              <div className="flex flex-col gap-3">
                <button
                  onClick={handleDelete}
                  disabled={isPending}
                  className="w-full bg-red-600 hover:bg-red-700 disabled:bg-red-400 text-white font-bold py-4 rounded-2xl transition-all shadow-lg shadow-red-200 flex items-center justify-center gap-2"
                >
                  {isPending ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Deleting...
                    </>
                  ) : (
                    <>
                      <Trash2 size={20} />
                      Yes, Delete Post
                    </>
                  )}
                </button>
                <button
                  onClick={handleClose}
                  disabled={isPending}
                  className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold py-4 rounded-2xl transition-all"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
