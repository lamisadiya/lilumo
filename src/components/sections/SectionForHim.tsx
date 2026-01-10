'use client'
import React from 'react';
import ProductCard from '../product/ProductCard';
const SectionForHim: React.FC = () => {
  const products = [
    { image: '/images/blog1.webp', name: 'Basic Denim Jacket', price: '$60.00' },
    { image: '/images/blog1.webp', name: 'Black Denim Jacket', price: '$70.00' },
    { image: '/images/blog1.webp', name: 'T-Shirt with Slogan', price: '$25.00' },
    { image: '/images/blog1.webp', name: 'Blended Wool Sweat', price: '$50.00' },
    // Add more: Black Bomber, Lightweight Bomber, etc.
    { image: '/images/blog1.webp', name: 'Black Bomber Jacket', price: '$90.00' },
    { image: '/images/blog1.webp', name: 'Lightweight Bomber Jacket', price: '$80.00' },
    { image: '/images/blog1.webp', name: 'Transitional Jacket with Hood', price: '$100.00' },
    { image: '/images/blog1.webp', name: 'Classic Shirt Pocket Shirt', price: '$40.00' },
  ];

  return (
    <section className="bg-white py-8">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl text-center mb-4">FOR HIM</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {products.map((prod, idx) => (
            <ProductCard key={idx} {...prod} />
          ))}
        </div>
        <div className="text-center mt-4">View All Collection</div>
      </div>
    </section>
  );
};

export default SectionForHim;