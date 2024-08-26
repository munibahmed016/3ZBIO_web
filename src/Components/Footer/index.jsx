import React from 'react';
import {
  FaFacebookF, FaInstagram, FaYoutube, FaCcVisa, FaCcMastercard, FaCcPaypal
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {/* Help Section */}
        <div>
          <h4 className="font-bold text-lg mb-4">HERE TO HELP</h4>
          <ul className="space-y-2">
            <li><a href="/order-status" className="hover:text-teal-400">Order Status</a></li>
            <li><a href="/shipping" className="hover:text-teal-400">Shipping & Delivery</a></li>
            <li><a href="/returns" className="hover:text-teal-400">Return Policy</a></li>
            <li><a href="/payment-methods" className="hover:text-teal-400">Payment Methods</a></li>
          </ul>
        </div>
        {/* Store Policies Section */}
        <div>
          <h4 className="font-bold text-lg mb-4">STORE POLICIES</h4>
          <ul className="space-y-2">
            <li><a href="/delivery-information" className="hover:text-teal-400">Delivery Information</a></li>
            <li><a href="/refunds-returns" className="hover:text-teal-400">Refunds & Returns</a></li>
            <li><a href="/careers" className="hover:text-teal-400">Careers</a></li>
            <li><a href="/our-policies" className="hover:text-teal-400">Our Policies</a></li>
          </ul>
        </div>
        {/* Newsletter Section */}
        <div>
          <h4 className="font-bold text-lg mb-4">NEWSLETTER</h4>
          <p>Sign up and get 15% off your first order</p>
          <form className="flex flex-col mt-4 space-y-2">
            <input
              type="email"
              className="bg-gray-800 text-white p-2  focus:outline-none"
              placeholder="Enter your mail..."
            />
            <button type="submit" className="bg-teal-600 text-white py-2 hover:bg-teal-500">
              SUBSCRIBE
            </button>
          </form>
          {/* Social Media Icons */}
          <div className="flex space-x-4 mt-4">
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="hover:text-teal-400">
              <FaFacebookF />
            </a>
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="hover:text-teal-400">
              <FaInstagram />
            </a>
            <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer" className="hover:text-teal-400">
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>
      
      {/* Payment Methods Section */}
      <div className="container mx-auto mt-8 px-4">
        <div className="border-t border-gray-800 pt-4 flex justify-center space-x-4">
          <a href="https://www.visa.com" target="_blank" rel="noopener noreferrer" className="hover:text-teal-400">
            <FaCcVisa className="text-4xl" />
          </a>
          <a href="https://www.mastercard.com" target="_blank" rel="noopener noreferrer" className="hover:text-teal-400">
            <FaCcMastercard className="text-4xl" />
          </a>
          <a href="https://www.paypal.com" target="_blank" rel="noopener noreferrer" className="hover:text-teal-400">
            <FaCcPaypal className="text-4xl" />
          </a>
        </div>
      </div>

      <div className="container mx-auto mt-8 px-4 ">
        <p className="text-center text-sm">&copy; 2024 3Z Bio All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
