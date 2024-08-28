import React, { useState } from 'react';
import {
  FaBars, FaTimes, FaPhoneAlt, FaEnvelope, FaFacebookF,
  FaInstagram, FaYoutube, FaSearch, FaShoppingCart
} from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    // Handle the search action, like redirecting to a search results page
    console.log("Search query:", searchQuery);
  };

  return (
    <header className="bg-gradient-to-r from-[#022636] to-[#349E64] text-white">
    <div className="container mx-auto flex justify-between items-center py-2 px-4 w-full max-w-full">        {/* Contact Information */}
        <div className="flex items-center space-x-2">
          <a href="tel:+9221111326111" className="flex items-center space-x-1 hover:text-teal-400">
            <FaPhoneAlt />
            <span>021 111-326-111</span>
          </a>
          <a href="mailto:contact@3zbio.pk" className="flex items-center space-x-1 hover:text-teal-400">
            <FaEnvelope />
            <span>contact@3zbio.pk</span>
          </a>
        </div>
        <div className="flex items-center space-x-3">
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
      <nav className="bg-[#071A2B]">
        <div className="container mx-auto flex justify-between items-center py-3 px-4">
          <div className="flex items-center">
            <a href="/" className="text-3xl font-bold flex items-center">
              <span className="text-teal-400">3</span><span className="text-green-400">Z</span>BIO
            </a>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <a href="/" className="hover:text-teal-400">Home</a>
            <a href="/categories" className="hover:text-teal-400">Categories</a>
            <a href="/brands" className="hover:text-teal-400">Brands</a>
            <a href="/news" className="hover:text-teal-400">News</a>
            <a href="/about" className="hover:text-teal-400">About Us</a>
            <a href="/contact" className="hover:text-teal-400">Contact</a>
            {/* Search Icon and Input Field */}
            <div className="relative">
              <button onClick={toggleSearch} className="hover:text-teal-400">
                <FaSearch />
              </button>
              {isSearchOpen && (
                <form onSubmit={handleSearchSubmit} className="absolute right-0 mt-2">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={handleSearchChange}
                    className="bg-gray-800 text-white px-2 py-1 rounded-lg focus:outline-none"
                    placeholder="Search..."
                  />
                </form>
              )}
            </div>
            {/* Cart Button */}
            <a href="/cart" className="hover:text-teal-400 flex items-center">
              <FaShoppingCart />
              <span className="ml-1">My Cart (0)</span>
            </a>
          </div>
          <div className="md:hidden">
            <button onClick={toggleMenu}>
              {isOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
            </button>
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden bg-gray-800 px-4 py-2 w-full">
            <a href="/" className="block py-2 hover:text-teal-400">Home</a>
            <a href="/categories" className="block py-2 hover:text-teal-400">Categories</a>
            <a href="/brands" className="block py-2 hover:text-teal-400">Brands</a>
            <a href="/news" className="block py-2 hover:text-teal-400">News</a>
            <a href="/about" className="block py-2 hover:text-teal-400">About Us</a>
            <a href="/contact" className="block py-2 hover:text-teal-400">Contact</a>
            <a href="/cart" className="block py-2 hover:text-teal-400 flex items-center">
              <FaShoppingCart />
              <span className="ml-1">My Cart (0)</span>
            </a>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
