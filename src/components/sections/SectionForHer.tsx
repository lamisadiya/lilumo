'use client'
import React from 'react';
import ProductCard from '../product/ProductCard';
const SectionForHer: React.FC = () => {
  const products = [
    { image: '/images/blog1.webp', name: 'Eco Aura Organic Top', price: '$35.00' },
    { image: '/images/blog1.webp', name: 'Embossed Knit Jumper', price: '$50.00' },
    { image: '/images/blog1.webp', name: 'Lightweight Fjord Jumper', price: '$45.00' },
    { image: '/images/blog1.webp', name: 'High Turtleneck Jumper', price: '$40.00' },
    // Add more from screenshot: Basic Jogger, etc.
    { image: '/images/blog1.webp', name: 'Basic Jogger for Women', price: '$30.00' },
    { image: '/images/blog1.webp', name: 'Coat with Wool Collar', price: '$80.00' },
    { image: '/images/blog1.webp', name: 'Carrot Pants with Pockets', price: '$55.00' },
  ];

  return (
    <section className="bg-white py-8">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl text-center mb-4">FOR HER</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {products.map((prod, idx) => (
            <ProductCard key={idx} {...prod} />
          ))}
        </div>
        <div className="text-center mt-4">View Collection</div>
      </div>
    </section>
  );
};

export default SectionForHer;