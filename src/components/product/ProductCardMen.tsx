'use client';
import React from 'react';
import Link from 'next/link'; // Assuming Next.js for product links

interface ProductCardProps {
  image: string;
  name: string;
  price: string;
  originalPrice?: string; // For sales/discounts
  stars?: number;         // 0–5; optional
  slug?: string;          // For linking to product page
  isNew?: boolean;        // Optional "New" badge
}

const ProductCardMen: React.FC<ProductCardProps> = ({
  image,
  name,
  price,
  originalPrice,
  stars = 0,
  slug = '#',
  isNew = false,
}) => {
  return (
    <Link 
      href={`/men/${slug}`} 
      className="group block overflow-hidden rounded-lg bg-white transition-all duration-300 hover:shadow-xl hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-gray-400"
    >
      <div className="relative aspect-3/4 overflow-hidden">
        <img
          src={image}
          alt={`${name} – minimalist fashion piece`}
          className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
          <span className="bg-white text-gray-900 px-6 py-3 text-sm font-medium uppercase tracking-wider rounded-full shadow-md transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
            View Details
          </span>
        </div>

        {/* Badges */}
        {isNew && (
          <span className="absolute top-3 left-3 bg-black text-white text-xs font-medium px-3 py-1 rounded-full uppercase tracking-wider">
            New
          </span>
        )}
        {originalPrice && (
          <span className="absolute top-3 right-3 bg-red-600 text-white text-xs font-medium px-3 py-1 rounded-full uppercase tracking-wider">
            Sale
          </span>
        )}
      </div>

      <div className="p-5 text-center space-y-3">
        <h3 className="text-lg font-serif font-light text-gray-900 tracking-wide group-hover:text-gray-700 transition-colors">
          {name}
        </h3>

        <div className="flex items-center justify-center space-x-3">
          <p className="text-xl font-medium text-gray-900">
            {price}
          </p>
          {originalPrice && (
            <p className="text-base text-gray-500 line-through">
              {originalPrice}
            </p>
          )}
        </div>

        {/* Optional rating – use ★ or SVG icons for better look */}
        {stars > 0 && (
          <div className="text-yellow-500 text-sm">
            {'★'.repeat(stars)}
            {'☆'.repeat(5 - stars)}
          </div>
        )}
      </div>
    </Link>
  );
};

export default ProductCardMen;