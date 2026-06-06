'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Calendar, User, ArrowLeft, Share2, ExternalLink } from 'lucide-react';
import { Playfair_Display } from 'next/font/google';
import { useState } from 'react';

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['700', '800'],
  style: ['normal', 'italic'],
});

interface Post {
  id: string;
  title: string;
  content: string;
  mainImage: string;
  images: string[];
  author: string;
  createdAt: string;
  updatedAt: string;
}

interface PostDetailProps {
  post: Post;
}

export default function PostDetail({ post }: Readonly<PostDetailProps>) {
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  return (
    <>
      {/* ── Hero Section ── */}
      <section className="relative pt-28 pb-16 min-h-[50vh] flex flex-col justify-end overflow-hidden bg-gray-900">
        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />

        {/* Gradient blobs */}
        <div className="absolute -top-20 left-[15%] w-[500px] h-[500px] bg-emerald-600/15 rounded-full blur-[120px]" />
        <div className="absolute -bottom-32 right-[10%] w-[400px] h-[400px] bg-green-500/10 rounded-full blur-[100px]" />

        {/* Corner accents */}
        <div className="absolute top-24 left-8 w-20 h-20 border-l-2 border-t-2 border-emerald-500/20 rounded-tl-2xl" />
        <div className="absolute bottom-8 right-8 w-20 h-20 border-r-2 border-b-2 border-emerald-500/20 rounded-br-2xl" />

        {/* Floating dots */}
        <div className="absolute top-32 right-[20%] w-2 h-2 bg-emerald-400/40 rounded-full" />
        <div className="absolute top-48 left-[12%] w-1.5 h-1.5 bg-green-400/30 rounded-full" />
        <div className="absolute bottom-24 left-[30%] w-2.5 h-2.5 bg-emerald-300/25 rounded-full" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          {/* Back button */}
          <Link
            href="/posts"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-emerald-400 mb-8 transition-colors group"
          >
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm font-medium tracking-wide uppercase">Back to Gallery</span>
          </Link>

          {/* Title */}
          <h1
            className={`${playfair.className} text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-[1.1] tracking-tight`}
          >
            {post.title}
          </h1>

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-5 text-gray-400" style={{ fontFamily: 'system-ui, sans-serif' }}>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center">
                <User size={14} className="text-emerald-400" />
              </div>
              <span className="font-medium text-gray-300">{post.author}</span>
            </div>
            <div className="w-1 h-1 bg-gray-600 rounded-full" />
            <div className="flex items-center gap-2">
              <Calendar size={16} className="text-emerald-400/60" />
              <span>
                {new Date(post.createdAt).toLocaleDateString('en-IN', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Content Section (Light Theme) ── */}
      <section className="py-16 bg-white">

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
          {/* Main / Featured Image */}
          <div className="mb-14">
            <div
              className="relative aspect-video rounded-2xl overflow-hidden bg-gray-50 border border-gray-200 shadow-xl cursor-pointer group"
              onClick={() => setLightboxImage(post.mainImage)}
            >
              <Image
                src={post.mainImage}
                alt={post.title}
                fill
                style={{ objectFit: 'contain' }}
                className="transition-transform duration-500 group-hover:scale-[1.02]"
                priority
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
                <ExternalLink
                  size={32}
                  className="text-gray-700 opacity-0 group-hover:opacity-80 transition-opacity duration-300 drop-shadow-md"
                />
              </div>
            </div>
          </div>

          {/* Post Content */}
          <div className="mb-14">
            <div className="bg-gray-50 border border-gray-100 rounded-2xl p-8 md:p-10">
              <p
                className="text-gray-700 text-lg leading-relaxed whitespace-pre-wrap"
                style={{ fontFamily: 'system-ui, sans-serif' }}
              >
                {post.content}
              </p>
            </div>
          </div>

          {/* Additional Images Gallery */}
          {post.images.length > 0 && (
            <div className="mb-14">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-1 h-8 bg-gradient-to-b from-emerald-400 to-green-600 rounded-full" />
                <h2 className={`${playfair.className} text-3xl font-bold text-gray-900`}>
                  Project Gallery
                </h2>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {post.images.map((image, index) => (
                  <div
                    key={index}
                    className="relative aspect-video rounded-xl overflow-hidden bg-gray-50 border border-gray-200 shadow-md hover:shadow-xl hover:border-emerald-400 transition-all duration-300 cursor-pointer group"
                    onClick={() => setLightboxImage(image)}
                  >
                    <Image
                      src={image}
                      alt={`${post.title} - Gallery Image ${index + 1}`}
                      fill
                      style={{ objectFit: 'contain' }}
                      className="transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                    {/* Index badge */}
                    <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-gray-600 text-xs font-medium px-2.5 py-1 rounded-full border border-gray-200 shadow-sm">
                      {index + 1} / {post.images.length}
                    </div>
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
                      <ExternalLink
                        size={24}
                        className="text-gray-700 opacity-0 group-hover:opacity-80 transition-opacity duration-300 drop-shadow-md"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* CTA Section */}
          <div className="border-t border-gray-200 pt-10">
            <div className="rounded-2xl overflow-hidden bg-gradient-to-br from-emerald-50 via-green-50 to-white border border-emerald-100">
              <div className="p-8 md:p-10 text-center">
                <h3 className={`${playfair.className} text-2xl md:text-3xl font-bold text-gray-900 mb-4`}>
                  Inspired by our work?
                </h3>
                <p
                  className="text-gray-600 mb-8 max-w-2xl mx-auto text-lg leading-relaxed"
                  style={{ fontFamily: 'system-ui, sans-serif' }}
                >
                  Join us in making a difference. Schedule a pickup for your e-waste or explore our refurbished products.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center" style={{ fontFamily: 'system-ui, sans-serif' }}>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-500 to-green-600 text-white px-8 py-3.5 rounded-xl hover:from-emerald-400 hover:to-green-500 transition-all duration-300 font-semibold shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/30 hover:-translate-y-0.5"
                  >
                    Schedule Pickup
                  </Link>
                  <Link
                    href="/posts"
                    className="inline-flex items-center justify-center gap-2 bg-white border-2 border-gray-200 text-gray-700 px-8 py-3.5 rounded-xl hover:border-emerald-500 hover:text-emerald-600 transition-all duration-300 font-semibold hover:-translate-y-0.5 shadow-sm"
                  >
                    View More Projects
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Lightbox ── */}
      {lightboxImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 cursor-pointer"
          onClick={() => setLightboxImage(null)}
        >
          <div className="relative max-w-5xl w-full max-h-[90vh] aspect-video">
            <Image
              src={lightboxImage}
              alt="Full size preview"
              fill
              style={{ objectFit: 'contain' }}
              className="rounded-lg"
            />
          </div>
          <button
            className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors text-lg font-medium tracking-wide"
            onClick={() => setLightboxImage(null)}
          >
            ✕ Close
          </button>
        </div>
      )}
    </>
  );
}
