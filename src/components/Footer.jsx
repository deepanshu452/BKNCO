import { Link } from 'react-router-dom';

export default function Footer() {

  const phoneNumbers = [
  "+91 977 367 5665",
  "+91 701 405 3583",
  "+91 865 510 5483"
];

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
              <li className="flex items-center gap-2">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 21c4.97-4.35 8-8.13 8-11.5A8 8 0 1 0 4 9.5c0 3.37 3.03 7.15 8 11.5z"
                    />
                    <circle cx="12" cy="9.5" r="2.5" />
                  </svg>
                </span>
                603, Om Shankheshwar Tower, Padmavati Nagar, Near Maxus Mall, Bhayandar West 401101</li>
              <li className="flex items-center gap-2">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6l8 5 8-5m-16 0h16v12H4z"
                    />
                  </svg>
                </span>                
                bknco2810@gmail.com</li>
               {phoneNumbers.map((num) => (
                  <li key={num} className="flex items-center gap-2">
                     <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3 5c.2 7.06 8 15 15 15 1.1 0 2-.9 2-2v-3a1 1 0 0 0-1-1h-3l-2 2c-2.5-1-4.5-3-5.5-5.5l2-2V5a1 1 0 0 0-1-1H5C3.9 4 3 4.9 3 6z"
                        />
                      </svg>
                    </span>
                    <span>{num}</span>
                  </li>
                ))}
              
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
