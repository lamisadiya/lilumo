'use client';
import React from 'react';
import Link from 'next/link';
import ProductCardMen from '../product/ProductCardMen';
import { hisproducts } from '@/lib/products';
const SectionForHim: React.FC = () => {
  

  return (
    <section className="bg-white py-16 md:py-24" id='men'>
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-light tracking-wide text-gray-900">
            Curated for Him
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Elevated essentials in durable fabrics — ideal for layering through late winter into spring 2026, with timeless denim, bombers, and relaxed staples.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-10">
          {hisproducts.map((prod) => (
            <ProductCardMen key={prod.slug} {...prod} />
          ))}
        </div>

        <div className="text-center mt-12 md:mt-16">
          <Link
            href="/men"
            className="inline-block bg-gray-900 text-white px-10 py-4 text-sm uppercase tracking-wider font-medium hover:bg-black transition duration-300 shadow-md hover:shadow-lg"
          >
            View Full Collection
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SectionForHim;