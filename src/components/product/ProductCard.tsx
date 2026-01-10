'use client'
import React from 'react';

interface ProductCardProps {
  image: string;
  name: string;
  price: string;
  stars?: number;
}

const ProductCard: React.FC<ProductCardProps> = ({ image, name, price, stars = 5 }) => {
  return (
    <div className="text-center">
      <img src={image} alt={name} className="w-full h-64 object-cover" />
      <h3 className="mt-2">{name}</h3>
      <div className="text-yellow-500">{'★'.repeat(stars)}</div>
      <p>{price}</p>
    </div>
  );
};

export default ProductCard;