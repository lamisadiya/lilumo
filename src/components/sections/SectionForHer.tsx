// components/sections/SectionForHer.tsx  (or wherever it lives)
'use client';
import React from 'react';
import Link from 'next/link';
import ProductCard from '../product/ProductCard';
import { products } from '@/lib/products';

const SectionForHer: React.FC = () => {
  

  return (
    <section className="bg-white py-16 md:py-24" id='women'>
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-light tracking-wide text-gray-900">
            Curated for Her
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Timeless minimalist essentials in organic fabrics — perfect for effortless layering from late winter into spring 2026.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-10">
          {products.map((prod) => (
            <ProductCard key={prod.slug} {...prod} />
          ))}
        </div>

        <div className="text-center mt-12 md:mt-16">
          <Link
            href="/products"
            className="inline-block bg-gray-900 text-white px-10 py-4 text-sm uppercase tracking-wider font-medium hover:bg-black transition duration-300 shadow-md hover:shadow-lg"
          >
            View Full Collection
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SectionForHer;