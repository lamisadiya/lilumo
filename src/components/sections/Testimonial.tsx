'use client';
import React from 'react';

const Testimonial: React.FC = () => {
  return (
    <section className="bg-white py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
          {/* Left: Text Content */}
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-light uppercase tracking-wide mb-6">
              WHAT CUSTOMERS SAY ABOUT US
            </h2>

            <div className="text-yellow-400 text-3xl md:text-4xl mb-6">
              ★★★★★
            </div>

            <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-6 max-w-lg mx-auto md:mx-0">
              Best purchase I&apos;ve made this winter! The color and<br />
              knitting are exquisite and it&apos;s so comfy! Went from NYC<br />
              to Miami without ever taking it off. Super cute!!
            </p>

            <p className="text-gray-500 text-base italic">
              — Christina M. / From Canada
            </p>
          </div>

          {/* Right: Large Image */}
          <div className="md:w-1/2">
            <img
              src="/images/blog1.webp" // Replace with your actual image path
              alt="Customer wearing cozy pink knit sweater"
              className="w-full h-auto md:h-150 object-cover rounded-lg shadow-md"
            />
          </div>
        </div>

        {/* Optional: Simple carousel arrows (static for now - add real slider library like Swiper if needed) */}
        <div className="flex justify-center mt-8 space-x-8 text-gray-400 text-2xl">
          <button className="hover:text-gray-700 transition">&lt;</button>
          <button className="hover:text-gray-700 transition">&gt;</button>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;