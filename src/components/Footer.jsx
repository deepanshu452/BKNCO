import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300 pt-12 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">B K N &amp; CO LLP</h3>
            <p className="mb-4">Building trust through expertise, compliance, and innovation.</p>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-1.5">
              <li><Link to="/about" className="hover:text-white transition">About Us</Link></li>
              {/* <li><Link to="/ourteam" className="hover:text-white transition">Our Team</Link></li> */}
              {/* <li><Link to="/" className="hover:text-white transition">Careers</Link></li> */}
              <li><Link to="/contactus" className="hover:text-white transition">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-1.5">
              <li><Link to="/services/audit" className="hover:text-white transition">Audit &amp; Assurance</Link></li>
              <li><Link to="/services/taxation" className="hover:text-white transition">Taxation</Link></li>
              <li><Link to="/services/ipo-services" className="hover:text-white transition">IPO Services</Link></li>
              <li><Link to="/services/risk-advisory" className="hover:text-white transition">Risk Advisory</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Get in Touch</h4>
            <ul className="space-y-1.5 text-sm">
              <li>603, Om Shankheshwar Tower, Padmavati Nagar, Near Maxus Mall, Bhayandar West 401101</li>
              <li>bknco2810@gmail.com</li>
              <li>+91 977 367 5665</li>
              <li>+91 701 405 3583</li>
              <li>+91 865 510 5483</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-6 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} B K N &amp; CO LLP - Chartered Accountants. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
