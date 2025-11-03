// This is a NEW file. You must create it.
// Make a new folder: src/components
// Inside that folder, create this file: Header.jsx

import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    // This is a simple header using Tailwind classes and YOUR brand color
    <header className="bg-brand-blue text-white shadow-md sticky top-0 z-50">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold">
          B K N & CO LLP
        </Link>

        {/* Navigation Links */}
        {/* We will make these links work later with React Router */}
        <div className="hidden md:flex space-x-6">
          <Link to="/about" className="hover:text-gray-300">About Us</Link>
          <Link to="/services" className="hover:text-gray-300">Services</Link>
          <Link to="/" href="#" className="hover:text-gray-300">Industries</Link>
          <Link to="/" className="hover:text-gray-300">Insights</Link>
          <Link to="/" className="hover:text-gray-300">Contact Us</Link>
        </div>

        {/* Mobile Menu Button (for later) */}
        <div className="md:hidden">
          <button className="text-white focus:outline-none">
            {/* SVG for a hamburger icon */}
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>

      </nav>
    </header>
  );
}

export default Header;
