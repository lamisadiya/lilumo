'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { HiOutlineMenu, HiX } from 'react-icons/hi';
import { FiShoppingBag } from 'react-icons/fi';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('Home');

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#women', label: 'Women' },
    { href: '#men', label: 'Men' },
    { href: '#blog', label: 'Journal' },
  ];

  // Handle scroll to highlight active section
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 120; // Adjust offset for fixed header
      let current = 'Home';
      navLinks.forEach((link) => {
        const section = document.querySelector(link.href);
        if (section && section.getBoundingClientRect().top + window.scrollY <= scrollPos) {
          current = link.label;
        }
      });
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll behavior when clicking links
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, label: string) => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute('href')!;
    const target = document.querySelector(targetId);
    if (target) {
      window.scrollTo({
        top: (target as HTMLElement).offsetTop - 100, // offset for fixed header
        behavior: 'smooth',
      });
      setActiveSection(label);
      setIsMenuOpen(false); // close mobile menu
    }
  };

  return (
    <header className="bg-white fixed w-full top-0 z-50 shadow-sm">
      <nav className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-5 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="#home"
          onClick={(e) => handleClick(e, 'Home')}
          className="text-3xl sm:text-4xl font-serif font-light tracking-widest text-gray-900 hover:opacity-80 transition-opacity"
        >
          Lilumo
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center space-x-12 text-sm uppercase tracking-wider font-medium text-gray-700">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(e) => handleClick(e, link.label)}
                className={`hover:text-gray-900 transition-colors duration-200 ${
                  activeSection === link.label ? 'text-gray-900 underline underline-offset-4' : ''
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right Icons/Actions */}
        <div className="flex items-center space-x-6 sm:space-x-8">
          {/* Search */}
          <button
            aria-label="Search products"
            className="text-gray-700 hover:text-gray-900 transition-colors"
            onClick={() => alert('Search modal coming soon!')}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </button>

          {/* Account */}
          <Link
            href="/account"
            className="text-sm uppercase tracking-wider text-gray-700 hover:text-gray-900 transition-colors hidden sm:block"
          >
            Account
          </Link>

          {/* Cart */}
          <Link
            href="/cart"
            className="relative flex items-center gap-2 text-gray-700 hover:text-gray-900 transition-colors"
          >
            <FiShoppingBag className="text-xl" />
            <span className="absolute -top-2 -right-2 bg-gray-900 text-white text-xs rounded-full h-5 min-w-5 flex items-center justify-center px-1">
              0
            </span>
          </Link>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden text-gray-700 hover:text-gray-900 transition-colors"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <HiX className="w-7 h-7" /> : <HiOutlineMenu className="w-7 h-7" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Drawer/Overlay */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-white z-40 flex flex-col pt-20 px-6 animate-fade-in">
          <ul className="space-y-8 text-xl uppercase tracking-wider font-light text-gray-800">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => handleClick(e, link.label)}
                  className={`block py-2 hover:text-gray-900 transition-colors ${
                    activeSection === link.label ? 'text-gray-900 font-medium' : ''
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <Link
                href="/account"
                className="block py-2 hover:text-gray-900 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Account
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;