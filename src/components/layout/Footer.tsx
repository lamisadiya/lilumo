'use client'
import React from 'react';
import { FaFacebookF, FaTwitter, FaPinterestP, FaVimeoV, FaInstagram } from 'react-icons/fa';
const Footer: React.FC = () => {
  return (
    <footer className="bg-white py-12 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-8">
          {/* Column 1 - About The Store */}
          <div>
            <h4 className="text-lg font-semibold mb-4 uppercase tracking-wide">About The Store</h4>
            <p className="text-gray-600 text-sm leading-relaxed">
              We are design and product obsessed.<br />
              Uncompromising in the style, quality and performance of every product we create.<br /><br />
              This is a demonstration of the Symmetry theme for Shopify. Essentials, Outerwear & Activewear kindly donated by Varley.
            </p>
          </div>

          {/* Column 2 - Customer Support */}
          <div>
            <h4 className="text-lg font-semibold mb-4 uppercase tracking-wide">Customer Support</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="/pages/customer-service" className="hover:text-black transition">Customer Service</a></li>
              <li><a href="/policies/shipping-policy" className="hover:text-black transition">Shipping and Delivery</a></li>
              <li><a href="/policies/returns" className="hover:text-black transition">Returns</a></li>
              <li><a href="/pages/size-charts" className="hover:text-black transition">Size Charts</a></li>
              <li><a href="/pages/email-signup" className="hover:text-black transition">Email Signup</a></li>
              <li><a href="/pages/contact" className="hover:text-black transition">Contact Us</a></li>
            </ul>
          </div>

          {/* Column 3 - Newsletter + Social Icons */}
          <div className="lg:col-span-2 lg:pl-8">
            <h4 className="text-lg font-semibold mb-4 uppercase tracking-wide">Newsletter</h4>
            <p className="text-gray-600 text-sm mb-5 leading-relaxed">
              Get 15% off your first purchase!<br />
              Plus, be the first to know about sales, new product launches and exclusive offers!
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md">
              <input
                type="email"
                placeholder="Email address"
                className="flex-1 border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:border-black focus:ring-1 focus:ring-black"
              />
              <button
                type="submit"
                className="bg-black text-white px-6 py-3 text-sm uppercase tracking-wider hover:bg-gray-900 transition"
              >
                →
              </button>
            </form>

            {/* Social Icons */}
            <div className="flex space-x-6 mt-8 text-gray-600">
              <a href="https://facebook.com/yourstore" target="_blank" rel="noopener noreferrer"   className ="hover:text-black transition text-xl"><FaFacebookF/></a>
              <a href="https://twitter.com/yourstore" target="_blank" rel="noopener noreferrer" className="hover:text-black transition text-xl"><FaTwitter/></a>
              <a href="https://pinterest.com/yourstore" target="_blank" rel="noopener noreferrer" className="hover:text-black transition text-xl"><FaPinterestP/></a>
              <a href="https://vimeo.com/yourstore" target="_blank" rel="noopener noreferrer" className="hover:text-black transition text-xl"><FaVimeoV/></a>
              <a href="https://instagram.com/yourstore" target="_blank" rel="noopener noreferrer" className="hover:text-black transition text-xl"><FaInstagram/></a>
            </div>
          </div>
        </div>

        {/* Bottom Policy Links & Copyright */}
        <div className="mt-16 pt-8 border-t border-gray-200 text-center text-sm text-gray-500">
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-4">
            <a href="/policies/privacy-policy" className="hover:text-black transition">Privacy Policy</a>
            <a href="/policies/cookie-policy" className="hover:text-black transition">Cookie Policy</a>
            <a href="/policies/terms-of-use" className="hover:text-black transition">Terms of Use</a>
            <a href="/pages/about-us" className="hover:text-black transition">About Us</a>
            <a href="/pages/contact" className="hover:text-black transition">Contact Us</a>
          </div>
          <p>Copyright © {new Date().getFullYear()} Your Store Name. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;