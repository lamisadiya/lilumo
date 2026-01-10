'use client'
import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm fixed w-full z-50 top-0">
      <nav className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
        <Link href="/" className="text-3xl font-serif tracking-wider font-medium">
          Lilumo
        </Link>

        <ul className="hidden md:flex space-x-10 text-sm uppercase tracking-wider">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/women">Women</Link></li>
          <li><Link href="/men">Men</Link></li>
          <li><Link href="/blog">Journal</Link></li>
        </ul>

        <div className="flex items-center space-x-6">
          <button aria-label="Search">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
          <Link href="/account">Account</Link>
          <Link href="/cart" className="relative">
            Bag (0)
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;