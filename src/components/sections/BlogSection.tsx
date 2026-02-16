'use client';
import React from 'react';
import Link from 'next/link';

interface BlogPost {
  image: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  slug?: string; // For linking to full post
}

const BlogSection: React.FC = () => {
  const blogs: BlogPost[] = [
    {
      image: '/images/blog1.webp', // Replace with real asset
      title: 'Building a Timeless Capsule Wardrobe for Spring 2026',
      excerpt: 'As seasons shift, focus on versatile, high-quality essentials in organic fabrics. Discover how to curate pieces that transition effortlessly from winter layers to summer ease — sustainable, intentional, and endlessly wearable.',
      author: 'Lilumo Editorial',
      date: 'February 1, 2026',
      slug: 'capsule-wardrobe-spring-2026',
    },
    {
      image: '/images/blog1.webp',
      title: 'Finding Your Personal Style in a Trend-Driven World',
      excerpt: '2026 is about self-expression over fleeting micro-trends. Learn how minimalist brands are embracing individuality through thoughtful textures, neutral palettes with subtle pops, and pieces that tell your story — no fast fashion required.',
      author: 'Lilumo Editorial',
      date: 'January 28, 2026',
      slug: 'personal-style-2026',
    },
    {
      image: '/images/blog1.webp',
      title: 'Why Ethical Minimalism Is the Defining Aesthetic of 2026',
      excerpt: 'From quiet luxury roots to a balanced embrace of subtle maximalism, ethical production and durable design are leading the way. Explore how investing in fewer, better pieces supports both your wardrobe and the planet this year.',
      author: 'Lilumo Editorial',
      date: 'January 15, 2026',
      slug: 'ethical-minimalism-2026',
    },
  ];

  return (
    <section className="bg-white py-16 md:py-24" id='blog'>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-serif font-light text-center mb-16 tracking-wide text-gray-900">
          From Our Journal
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-12">
          {blogs.map((blog) => (
            <Link
              key={blog.slug}
              href={blog.slug ? `/blog/${blog.slug}` : '#'}
              className="group block overflow-hidden rounded-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-gray-400"
            >
              {/* Image */}
              <div className="relative aspect-4/3 overflow-hidden bg-gray-100">
                <img
                  src={blog.image}
                  alt={`${blog.title} – minimalist fashion inspiration`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </div>

              {/* Content */}
              <div className="p-6 md:p-8 text-center space-y-4">
                <h3 className="text-xl md:text-2xl font-serif font-light leading-tight text-gray-900 group-hover:text-gray-700 transition-colors">
                  {blog.title}
                </h3>

                <p className="text-gray-600 text-base leading-relaxed line-clamp-3">
                  {blog.excerpt}
                </p>

                <div className="text-xs text-gray-500 uppercase tracking-wider">
                  {blog.author} • {blog.date}
                </div>

                <div className="pt-4 text-gray-400 text-2xl font-light opacity-70 group-hover:opacity-100 transition-opacity">
                  ———
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Optional CTA */}
        <div className="text-center mt-16">
          <Link
            href="/blog"
            className="inline-block bg-gray-900 text-white px-10 py-4 text-sm uppercase tracking-wider font-medium hover:bg-black transition duration-300"
          >
            View All Posts
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;