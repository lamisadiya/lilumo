// src/app/men/[slug]/ClientProduct.tsx
'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

type ThumbnailLayout = 'horizontal-slider' | 'grid' | 'vertical-slider' | 'stacked';
const thumbnailLayout: ThumbnailLayout = 'horizontal-slider';

export default function ClientProduct({
  hisproduct,
}: {
  hisproduct: {
    slug: string;
    name: string;
    price: string;
    originalPrice?: string;
    stars?: number;
    isNew?: boolean;
    description: string;
    material: string;
    care: string;
    sizes: string[];
    colors: string[];
    images: string[];
  };
}) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedColor, setSelectedColor] = useState(hisproduct.colors[0] || '');
  const [selectedSize, setSelectedSize] = useState(hisproduct.sizes[0] || '');

  const currentImage = hisproduct.images[currentImageIndex];

  const nextImage = () => setCurrentImageIndex((prev) => (prev + 1) % hisproduct.images.length);
  const prevImage = () => setCurrentImageIndex((prev) => (prev - 1 + hisproduct.images.length) % hisproduct.images.length);
  return (
    <div className="bg-white min-h-screen pt-20 md:pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10 lg:gap-16">
          {/* Image Gallery */}
          <div className="space-y-6">
            <div className="relative aspect-3/4 overflow-hidden rounded-xl shadow-xl group">
              <Image
                src={currentImage}
                alt={`${hisproduct.name} - view ${currentImageIndex + 1}`}
                fill
                className="object-cover object-center transition-transform duration-700 group-hover:scale-110"
                priority
              />
              {hisproduct.images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 p-3 rounded-full shadow hover:bg-white transition"
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 p-3 rounded-full shadow hover:bg-white transition"
                    aria-label="Next image"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </>
              )}
            </div>

            {/* Thumbnails */}
            {hisproduct.images.length > 1 && (
              <div>
                {thumbnailLayout === 'horizontal-slider' && (
                  <div className="flex gap-3 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
                    {hisproduct.images.map((img, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentImageIndex(idx)}
                        className={`shrink-0 w-24 h-32 rounded-lg overflow-hidden border-2 transition ${
                          idx === currentImageIndex ? 'border-gray-900' : 'border-transparent'
                        }`}
                      >
                        <Image src={img} alt={`Thumbnail ${idx + 1}`} width={96} height={128} className="object-cover" />
                      </button>
                    ))}
                  </div>
                )}

                {thumbnailLayout === 'grid' && (
                  <div className="grid grid-cols-4 gap-3">
                    {hisproduct.images.map((img, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentImageIndex(idx)}
                        className={`aspect-square rounded-lg overflow-hidden border-2 transition ${
                          idx === currentImageIndex ? 'border-gray-900' : 'border-transparent'
                        }`}
                      >
                        <Image src={img} alt={`Thumbnail ${idx + 1}`} fill className="object-cover" />
                      </button>
                    ))}
                  </div>
                )}

                {/* Add vertical-slider / stacked cases here later */}
              </div>
            )}
          </div>

          {/* Product Summary */}
          <div className="flex flex-col space-y-8 md:sticky md:top-24 self-start">
            {/* All the rest of your UI: name, price, stars, description, swatches, sizes, add to bag, trust info */}
            {hisproduct.isNew && (
              <span className="inline-block bg-black text-white text-xs uppercase tracking-wider px-4 py-1.5 rounded-full mb-4">
                New
              </span>
            )}
            <h1 className="text-4xl md:text-5xl font-serif font-light text-gray-900 tracking-wide">
              {hisproduct.name}
            </h1>

            <div className="mt-4 flex items-center gap-4">
              <p className="text-3xl font-medium text-gray-900">{hisproduct.price}</p>
              {hisproduct.originalPrice && (
                <p className="text-xl text-gray-500 line-through">{hisproduct.originalPrice}</p>
              )}
            </div>

            {hisproduct.stars !== undefined && (
              <div className="mt-2 text-yellow-500 text-2xl">
                {'★'.repeat(hisproduct.stars)}
                {'☆'.repeat(5 - hisproduct.stars)}
              </div>
            )}

            <p className="text-lg text-gray-700 leading-relaxed">{hisproduct.description}</p>

            {/* Color Swatches */}
            {hisproduct.colors.length > 0 && (
              <div>
                <h3 className="text-sm uppercase tracking-wider font-medium text-gray-900 mb-3">Color</h3>
                <div className="flex flex-wrap gap-3">
                  {hisproduct.colors.map((color) => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`w-10 h-10 rounded-full border-2 transition ${
                        selectedColor === color ? 'border-gray-900 scale-110' : 'border-gray-300 hover:border-gray-600'
                      }`}
                      style={{
                        backgroundColor:
                          color.toLowerCase() === 'black'
                            ? '#000'
                            : color.toLowerCase() === 'off-white'
                            ? '#f5f5f5'
                            : color.toLowerCase() === 'sage'
                            ? '#a8caba'
                            : color.toLowerCase(),
                      }}
                      title={color}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Size Selector */}
            {hisproduct.sizes.length > 0 && (
              <div>
                <h3 className="text-sm uppercase tracking-wider font-medium text-gray-900 mb-3">Size</h3>
                <div className="flex flex-wrap gap-3">
                  {hisproduct.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-6 py-2.5 border text-sm font-medium transition ${
                        selectedSize === size
                          ? 'border-gray-900 bg-gray-900 text-white'
                          : 'border-gray-300 hover:border-gray-900 hover:bg-gray-50'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <button className="w-full bg-gray-900 text-white py-5 text-base uppercase tracking-wider font-medium hover:bg-black transition duration-300 shadow-md">
              Add to Bag
            </button>

            <div className="text-sm text-gray-600 space-y-3 border-t pt-6">
              <p><strong>Material:</strong> {hisproduct.material}</p>
              <p><strong>Care:</strong> {hisproduct.care}</p>
              <p>Free shipping on orders over $75</p>
              <p>30-day easy returns</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}