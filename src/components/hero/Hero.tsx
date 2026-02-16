'use client';
// components/Hero.tsx
import React from 'react';

const Hero: React.FC = () => {
  // In a real app, pull these from props / CMS / state for easy updates
  const heroImages = {
    model: '/images/blog1.webp',      // Lifestyle shot: model in natural light, layered minimally
    product: '/images/blog1.webp',    // Clean hanger shot with subtle details visible
  };

  return (
    <section className="pt-28 pb-20 md:pt-40 md:pb-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10 lg:gap-16 items-center">
        
        {/* LEFT: Model Image - subtle upward drift for depth */}
        <div className="relative aspect-4/5 md:aspect-auto md:h-162.5 overflow-hidden rounded-xl shadow-lg">
          <div className="absolute inset-0 animate-subtle-slide-up">
            <img
              src={heroImages.model}
              alt="Model in timeless oversized denim jacket – relaxed, minimalist layering for Spring 2026"
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              loading="eager"
            />
          </div>
        </div>

        {/* RIGHT: Product + Text – clean, focused, premium feel */}
        <div className="space-y-8 md:space-y-10 text-center md:text-left flex flex-col justify-center">
          <div className="relative aspect-square md:aspect-4/5 max-w-md mx-auto md:mx-0 overflow-hidden rounded-xl bg-gray-50 shadow-md">
            <div className="absolute inset-0 animate-subtle-slide-down flex items-center justify-center p-6">
              <img
                src={heroImages.product}
                alt="Oversized washed denim jacket on hanger – metal hardware, flap pockets, adjustable cuffs"
                className="w-full h-full object-contain transition-transform duration-700 hover:scale-105"
              />
            </div>
          </div>

          <div className="space-y-6">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-light tracking-tight leading-tight text-gray-900">
              Oversized Denim Jacket
            </h1>
            <p className="text-gray-600 text-lg sm:text-xl leading-relaxed max-w-lg mx-auto md:mx-0">
              Effortless oversized silhouette in premium washed denim. Dropped shoulders, flap chest pockets, snap buttons, and adjustable cuffs — built for layering from late winter into spring. Timeless, comfortable, and endlessly versatile.
            </p>
            <button className="mt-6 inline-flex items-center justify-center bg-black text-white px-10 py-5 text-base sm:text-lg uppercase tracking-widest font-medium hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-500 transition-all duration-300 shadow-md hover:shadow-lg">
              Shop Now
            </button>
          </div>
        </div>
      </div>

  
    </section>
  );
};

export default Hero;