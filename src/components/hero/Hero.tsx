'use client';
// components/Hero.tsx
import React from 'react';

const Hero: React.FC = () => {
  // You can add more images for a real carousel later
  const modelImages = [
    '/images/blog1.webp',
    '/images/blog1.webp', // optional second for variety
  ];

  const productImages = [
    '/images/oversized-denim-hanger-1.jpg',
    '/images/oversized-denim-hanger-2.jpg', // optional
  ];

  return (
    <section className="pt-32 pb-24 md:pb-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 lg:gap-16 items-center relative">
        {/* LEFT: Model Image - slides UP */}
        <div className="relative h-125 md:h-175 overflow-hidden rounded-lg">
          <div className="absolute inset-0 animate-slide-up">
            <img
              src="/images/blog1.webp" // Replace with your path
              alt="Model wearing oversized denim jacket with floral details"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* RIGHT: Product on Hanger + Text - slides DOWN */}
        <div className="space-y-8 md:space-y-10 text-center md:text-left">
          <div className="relative h-125 md:h-175 overflow-hidden rounded-lg">
            <div className="absolute inset-0 animate-slide-down">
              <img
                src="/images/blog1.webp" // Replace with your path
                alt="Oversized denim jacket on hanger"
                className="w-full h-full object-contain bg-white p-8"
              />
            </div>
          </div>

          <div>
            <h1 className="text-4xl md:text-5xl font-serif font-light tracking-wide leading-tight text-gray-800 mb-4">
              OVERSIZED DENIM JACKET
            </h1>

            <p className="text-gray-600 max-w-md mx-auto md:mx-0 text-lg leading-relaxed">
              Oversized jacket in washed denim with distinctive details. Collar, pockets at front, metal dropped shoulders. Chest pockets with flap and snap buttons, side buttons, adjustable cuffs.
            </p>

            <button className="mt-8 inline-block bg-black text-white px-12 py-4 text-sm uppercase tracking-wider font-medium hover:bg-gray-800 transition-colors duration-300">
              SHOP NOW
            </button>
          </div>
        </div>
      </div>

      {/* Add these Tailwind animations to your global CSS or tailwind.config */}
      {/* Example: in globals.css or tailwind.config.js extend theme */}
      {/*
        @keyframes slide-up {
          0% { transform: translateY(0); }
          100% { transform: translateY(-20%); }   // Adjust % for more/less movement
        }
        @keyframes slide-down {
          0% { transform: translateY(0); }
          100% { transform: translateY(20%); }
        }
        .animate-slide-up {
          animation: slide-up 20s linear infinite alternate;
        }
        .animate-slide-down {
          animation: slide-down 20s linear infinite alternate;
        }
      */}
    </section>
  );
};

export default Hero;