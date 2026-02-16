'use client';
import React from 'react';
import { 
  FaInstagram, 
  FaTiktok, 
  FaYoutube, 
  FaFacebookF, 
  FaTwitter 
} from 'react-icons/fa';

import { PaymentIcon } from 'react-svg-credit-card-payment-icons';
import Mastercard from 'react-svg-credit-card-payment-icons/mastercard';
import Paypal from 'react-svg-credit-card-payment-icons/paypal';
import Visa from 'react-svg-credit-card-payment-icons/visa';


const Footer: React.FC = () => {
  return (
    <footer className="bg-white pt-16 pb-10 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-10">
          
          {/* Column 1 - About */}
          <div>
            <h4 className="text-lg font-medium mb-5 uppercase tracking-wider text-gray-900">
              About Us
            </h4>
            <p className="text-gray-600 text-sm leading-relaxed">
              Design and quality obsessed. We craft timeless minimalist essentials
              with uncompromising attention to style, comfort, and durability.
              <br /><br />
              Organic fabrics, ethical production, built to last — because true
              style never goes out of season.
            </p>
          </div>

          {/* Column 2 - Support */}
          <div>
            <h4 className="text-lg font-medium mb-5 uppercase tracking-wider text-gray-900">
              Support
            </h4>
            <ul className="space-y-3 text-sm text-gray-600">
              <li><a href="/pages/customer-service" className="hover:text-gray-900">Customer Service</a></li>
              <li><a href="/policies/shipping-policy" className="hover:text-gray-900">Shipping & Delivery</a></li>
              <li><a href="/policies/returns" className="hover:text-gray-900">Returns & Exchanges</a></li>
              <li><a href="/pages/size-charts" className="hover:text-gray-900">Size Guides</a></li>
              <li><a href="/pages/contact" className="hover:text-gray-900">Contact Us</a></li>
            </ul>
          </div>

          {/* Column 3 - Newsletter */}
          <div>
            <h4 className="text-lg font-medium mb-5 uppercase tracking-wider text-gray-900">
              Stay Updated
            </h4>
            <p className="text-gray-600 text-sm mb-6 leading-relaxed">
              Join our newsletter for 15% off your first order, exclusive launches,
              and insider styling tips.
            </p>
            <form className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Your email address"
                required
                className="flex-1 border border-gray-300 px-5 py-3.5 text-sm focus:outline-none focus:border-gray-900 focus:ring-1 focus:ring-gray-900"
              />
              <button
                type="submit"
                className="bg-gray-900 text-white px-8 py-3.5 text-sm uppercase tracking-wider font-medium hover:bg-black"
              >
                Subscribe
              </button>
            </form>
          </div>

          {/* Column 4 - Social + Payments */}
          <div>
            <h4 className="text-lg font-medium mb-5 uppercase tracking-wider text-gray-900">
              Connect
            </h4>

            {/* Social Icons */}
            <div className="flex space-x-5 mb-8 text-gray-600 text-2xl">
              <FaInstagram className="hover:text-gray-900" />
              <FaTiktok className="hover:text-gray-900" />
              <FaYoutube className="hover:text-gray-900" />
              <FaFacebookF className="hover:text-gray-900" />
              <FaTwitter className="hover:text-gray-900" />
            </div>

            {/* Payment Icons (npm-based) */}
            <div className="flex flex-wrap items-center gap-4 opacity-80">
              <Visa style={{ width: 40 }} />
              <Mastercard style={{ width: 40 }} />
              <Paypal style={{ width: 40 }} />
              
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-10 border-t border-gray-100 text-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Lilumo. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
