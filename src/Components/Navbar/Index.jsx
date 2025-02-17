import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  FaBars, FaTimes, FaPhoneAlt, FaEnvelope, FaFacebookF,
  FaInstagram, FaYoutube, FaSearch, FaShoppingCart
} from 'react-icons/fa';
import NavLinks from './NavLinks';

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
    console.log("Search query:", searchQuery);
  };

  return (
    <header className="bg-[#022636]">
      {/* Top Bar for Mobile */}
      <div className="md:hidden bg-gradient-to-r from-[#022636] to-[#349E64] text-white">
        <div className="container mx-auto flex justify-between items-center py-2 px-4">
          <a href="tel:+021 111-326-111" className="flex items-center space-x-1 hover:text-teal-400">
            <FaPhoneAlt />
            <span>(021)111-326-111</span>
          </a>
        
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
      </div>

      {/* Top Bar for Desktop */}
      <div className="hidden md:flex bg-gradient-to-r from-[#022636] to-[#349E64] text-white">
        <div className="container mx-auto flex justify-between items-center py-2 px-4">
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
      </div>

      <nav className="bg-[#071A2B]">
        <div className="container mx-auto flex text-white justify-between items-center px-4 md:px-10 sm:py-0 py-3">
          <Link to="/" className="text-3xl font-bold flex items-center">
            <span className="text-teal-400">3</span><span className="text-green-400">Z</span>BIO
          </Link>

          <ul className="hidden md:flex items-center space-x-6">
            <li><Link to="/" className="hover:text-teal-400">Home</Link></li>
            <NavLinks />
            <li><Link to="/news" className="hover:text-teal-400">News</Link></li>
            <li><Link to="/contact" className="hover:text-teal-400">Contact</Link></li>
            <li className="relative">
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
            </li>
            <li>
              <Link to="/cart" className="hover:text-teal-400 flex items-center">
                <FaShoppingCart />
                <span className="ml-1">My Cart (0)</span>
              </Link>
            </li>
          </ul>

          <div className="md:hidden">
            <button onClick={toggleMenu}>
              {isOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <ul className="md:hidden bg-[#071A2B] px-4 py-2">
            <li><Link to="/" className="block py-2 hover:text-teal-400">Home</Link></li>
            <NavLinks />
            <li><Link to="/news" className="block py-2 hover:text-teal-400">News</Link></li>
            <li><Link to="/contact" className="block py-2 hover:text-teal-400">Contact</Link></li>
            <li className="relative">
              <button onClick={toggleSearch} className="block py-2 hover:text-teal-400">
                <FaSearch />
              </button>
              {isSearchOpen && (
                <form onSubmit={handleSearchSubmit} className="mt-2">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={handleSearchChange}
                    className="bg-gray-800 text-white px-2 py-1 rounded-lg w-full focus:outline-none"
                    placeholder="Search..."
                  />
                </form>
              )}
            </li>
            <li>
              <Link to="/cart" className="block py-2 hover:text-teal-400 flex items-center">
                <FaShoppingCart />
                <span className="ml-1">My Cart (0)</span>
              </Link>
            </li>
          </ul>
        )}
        
      </nav>
    </header>
  );
};

export default Navbar;
