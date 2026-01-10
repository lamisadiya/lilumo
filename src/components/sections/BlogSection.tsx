'use client';
import React from 'react';

const BlogSection: React.FC = () => {
  const blogs = [
    {
      image: '/images/blog1.webp', // Replace with your actual image path or URL
      title: "5 Sweet Outfit Ideas You'll Wear Well Beyond Valentine's Day",
      excerpt: "Valentine's Day 2021 has no choice but to unfold rather differently than usual, so we already know it will be one to remember. Lorem ipsum dolor sit amet...",
      author: 'BY VINOVA THEME',
      date: '03 MAR 2021',
    },
    {
      image: '/images/blog1.webp',
      title: 'How To "Be Good With Money" According To 4 Female Financial Experts',
      excerpt: "Valentine's Day 2021 has no choice but to unfold rather differently than usual, so we already know it will be one to remember. Lorem ipsum dolor sit amet...",
      author: 'BY VINOVA THEME',
      date: '03 MAR 2021',
    },
    {
      image: '/images/blog1.webp',
      title: "This Scandi Influencer's Shoe Collaboration Is The Gift That Keeps On Giving",
      excerpt: "Valentine's Day 2021 has no choice but to unfold rather differently than usual, so we already know it will be one to remember. Lorem ipsum dolor sit amet...",
      author: 'BY VINOVA THEME',
      date: '03 MAR 2021',
    },
  ];

  return (
    <section className="bg-white py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-light text-center mb-10 tracking-wide">
          FROM OUR BLOG
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {blogs.map((blog, index) => (
            <div key={index} className="group cursor-pointer">
              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-95 md:h-105 object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="mt-6 text-center px-2">
                <h3 className="text-xl md:text-2xl font-medium leading-tight mb-3">
                  {blog.title}
                </h3>

                <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-4">
                  {blog.excerpt}
                </p>

                <div className="text-xs text-gray-500 uppercase tracking-wider mb-2">
                  {blog.author} • {blog.date}
                </div>

                <div className="text-gray-400 text-xl font-light">———</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;