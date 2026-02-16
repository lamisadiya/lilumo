'use client';
import React from 'react';
import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react'; // or react-icons

const testimonials = [
  {
    quote: "Obsessed with the oversized denim jacket — the washed black is perfect for Dhaka's weather right now. Wore it non-stop from morning coffee runs to late dinners. Best quality I've found at this price point.",
    author: "Ayesha K.",
    location: "Dhaka, Bangladesh",
    product: "Oversized Washed Denim Jacket",
    rating: 5,
    date: "January 2026",
    verified: true,
  },
  {
    quote: "Finally found minimalist essentials that actually fit tall frames perfectly. The organic cotton feels luxurious and the stitching is impeccable. Already ordered three more pieces.",
    author: "Rahim S.",
    location: "Toronto, Canada",
    product: "Lightweight Layering Jumper",
    rating: 5,
    date: "February 2026",
    verified: true,
  },
  {
    quote: "The carrot pants are my new work-from-home uniform. Super comfortable but still look polished on Zoom calls. Love that everything is ethically made too.",
    author: "Lamisa T.",
    location: "Dhaka, Bangladesh",
    product: "Carrot Pants with Pockets",
    rating: 5,
    date: "February 2026",
    verified: true,
  },
];

const Testimonial: React.FC = () => {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  const testimonial = testimonials[current];

  return (
    <section className="bg-gray-50 py-20 md:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="text-center text-4xl md:text-5xl font-serif font-light tracking-wide text-gray-900 mb-16">
          Loved by Our Community
        </h2>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Testimonial Text */}
          <div className="order-2 md:order-1 space-y-8">
            <div className="flex items-center gap-2 text-yellow-500 text-2xl">
              {'★'.repeat(testimonial.rating)}
            </div>

            <blockquote className="text-xl md:text-2xl leading-relaxed text-gray-800 font-light italic">
              "{testimonial.quote}"
            </blockquote>

            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <p className="font-medium text-gray-900">{testimonial.author}</p>
                {testimonial.verified && (
                  <span className="text-xs bg-black text-white px-2 py-1 rounded-full uppercase tracking-wider">
                    Verified Buyer
                  </span>
                )}
              </div>
              <p className="text-sm text-gray-600">
                {testimonial.location} • {testimonial.product}
              </p>
              <p className="text-xs text-gray-500">{testimonial.date}</p>
            </div>
          </div>

          {/* Right: Customer Photo (UGC style) */}
          <div className="order-1 md:order-2 relative">
            <div className="aspect-4/5 overflow-hidden rounded-xl shadow-xl">
              <img
                src={`/images/products-${current + 1}.webp`} // e.g., testimonial-1.webp
                alt={`Happy customer ${testimonial.author} wearing ${testimonial.product}`}
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                loading="lazy"
              />
            </div>

            {/* Optional Instagram-style frame */}
            <div className="absolute -bottom-4 -left-4 bg-white p-4 rounded-lg shadow-lg hidden lg:block">
              <span className="text-2xl">📸</span>
            </div>
          </div>
        </div>

        {/* Navigation Arrows + Dots */}
        <div className="flex justify-center items-center gap-8 mt-12">
          <button
            onClick={prev}
            aria-label="Previous testimonial"
            className="text-gray-400 hover:text-gray-900 transition"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>

          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2 h-2 rounded-full transition ${
                  i === current ? 'bg-gray-900 w-8' : 'bg-gray-300'
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>

          <button
            onClick={next}
            aria-label="Next testimonial"
            className="text-gray-400 hover:text-gray-900 transition"
          >
            <ChevronRight className="w-8 h-8" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;