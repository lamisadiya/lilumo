'use client';
import React from 'react';

const Banner: React.FC = () => {
  return (
    <section className="relative h-screen min-h-150 flex items-center justify-center overflow-hidden text-white text-center">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="https://cdn.shopify.com/s/files/1/0256/4594/0810/files/video.mp4?v=1614659458" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl px-6">
        <p className="text-sm md:text-base uppercase tracking-widest mb-3 font-light">
          MINI ANNOUNCE
        </p>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-light leading-tight mb-6">
          Autumn is Coming
        </h1>
        
        <p className="text-lg md:text-xl lg:text-2xl font-light mb-10 max-w-2xl mx-auto">
          The Biggest Autumn/Winter 2021 Trends
        </p>

        <a
          href="/collections/autumn-winter"
          className="inline-block bg-white text-black uppercase tracking-wider font-medium px-10 py-4 text-sm md:text-base hover:bg-gray-200 transition duration-300"
        >
          VIEW MORE
        </a>
      </div>
    </section>
  );
};

export default Banner;