import React from 'react';
import { Link } from 'react-router-dom';
// 1. Import your services data
import { servicesData } from '../data/services';

function Header() {
  return (
    <header className="bg-brand-blue text-white shadow-md sticky top-0 z-50">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold">
          B K N & CO LLP
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-6 items-center">
          <Link to="/about" className="hover:text-gray-300">About Us</Link>
          
          {/* Services Dropdown */}
          <div className="relative group">
            {/* Main "Services" link that also acts as the hover trigger */}
            <Link to="/services" className="hover:text-gray-300 relative pl-4 z-10">
              Services
                <span className="absolute left-0 top-1/2 -translate-y-1/2 h-4 w-0.5 bg-gray-300 scale-y-0 group-hover:scale-y-100 transition-transform duration-300 ease-out origin-center"></span>
            </Link>

            {/* The Dropdown Menu */}
            <div className="absolute left-0 top-full mt-0 pt-4 w-64 bg-white text-gray-800 shadow-lg rounded-b-md hidden group-hover:block transition-all duration-300">
              <ul className="py-2">
                {/* Automatically create links from the data file */}
                {servicesData.map((service) => (
                  <li key={service.slug}>
                    <Link
                      to={`/services/${service.slug}`}
                      className="block px-5 py-2 text-sm hover:bg-gray-100"
                    >
                      {service.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <Link to="/" className="hover:text-gray-300">Industries</Link>
          <Link to="/" className="hover:text-gray-300">Insights</Link>
          <Link to="/contactus" className="hover:text-gray-300">Contact Us</Link>
        </div>

        {/* Mobile Menu Button (for later) */}
        <div className="md:hidden">
          <button className="text-white focus:outline-none">
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

