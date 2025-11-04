// This is a NEW file: src/components/Footer.jsx
// This is the large footer at the bottom of the page.

import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300 pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          
          {/* Column 1: About */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">B K N & CO LLP</h3>
            <p className="mb-4">
              Building trust through expertise, compliance, and innovation.
            </p>
            {/* can add social icons here too(for Future) */}
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-1.5">
              <li><Link to="/about" className="hover:text-white">About Us</Link></li>
              <li><Link to="/" className="hover:text-white">Our Team</Link></li>
              <li><Link to="/" className="hover:text-white">Careers</Link></li>
              <li><Link to="/" className="hover:text-white">Contact Us</Link></li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-1.5">
              <li><Link to="/" className="hover:text-white">Taxation</Link></li>
              <li><Link to="/" className="hover:text-white">Regulatory Advisory</Link></li>
              <li><Link to="/" className="hover:text-white">Risk Advisory </Link></li>
              <li><Link to="/" className="hover:text-white">CFO Services </Link></li>
              <li><Link to="/" className="hover:text-white">Audit & Assurance</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Get in Touch</h4>
            <ul className="space-y-1.5">
              <li> 603, Om Shankheshwar Tower, Padmavati Nagar, Near Maxus Mall, Bhayandar West 401101</li>
              <li>info@bknco.com</li>
              <li>+91 977 367 5665 </li>
              <li>+91 701 405 3583 </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} B K N & CO LLP - Chartered Accountants.<br/> All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;