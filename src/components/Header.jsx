import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { servicesData } from '../data/services';

export default function Header() {
  const [open, setOpen] = useState(false);         // desktop dropdown
  const [mobileOpen, setMobileOpen] = useState(false); // mobile nav
  const timerRef = useRef(null);

  // avoid flicker on desktop hover
  const openMenu = () => {
    clearTimeout(timerRef.current);
    setOpen(true);
  };
  const closeMenu = () => {
    clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => setOpen(false), 120);
  };

  const toggleMobile = () => {
    setMobileOpen((s) => !s);
  };

  const closeMobile = () => setMobileOpen(false);

  return (
    <header className="bg-brand-blue text-white shadow-md sticky top-0 z-50">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold header-link">
          B K N & CO LLP
        </Link>

        {/* Logo */}
        {/* <Link to="/" className="header-link" aria-label="B K N & CO LLP Homepage">
          <img 
            src="/logo2.svg" 
            alt="B K N & CO LLP " 
            className="h-10 w-auto" 
          />
        </Link> */}

        {/* Desktop nav */}
        <div className="hidden md:flex space-x-6 items-center">
          <Link to="/about" className="hover:text-gray-300 header-link">About Us</Link>

          {/* Services dropdown — controlled by state, keyboard-friendly */}
          <div
            className="relative"
            onMouseEnter={openMenu}
            onMouseLeave={closeMenu}
            onFocus={openMenu}
            onBlur={closeMenu}
          >
            <Link to="/services"
              className="relative pl-4 z-10 hover:text-gray-300 header-link focus:outline-none"
              aria-haspopup="true"
              aria-expanded={open}
              onClick={() => setOpen((s) => !s)}
            >
              Services
            </Link>

            <div
              className={`absolute left-0 top-full mt-1 w-64 bg-white text-gray-800 shadow-lg rounded-b-md transition-all duration-150 origin-top ${
                open ? 'opacity-100 pointer-events-auto scale-100 z-50' : 'opacity-0 pointer-events-none scale-95 -translate-y-1'
              }`}
              role="menu"
              aria-hidden={!open}
            >
              <ul className="py-2">
                {servicesData.map((service) => (
                  <li key={service.slug}>
                    <Link
                      to={`/services/${service.slug}`}
                      className="block px-5 py-2 text-sm hover:bg-gray-100 dropdown-link"
                      role="menuitem"
                      onClick={() => setOpen(false)}
                    >
                      {service.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* <Link to="/" className="hover:text-gray-300 header-link">Industries</Link> */}
          <Link to="/insights" className="hover:text-gray-300 header-link">Insights</Link>
          <Link to="/contactus" className="hover:text-gray-300 header-link">Contact Us</Link>

        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            className="text-white focus:outline-none p-2"
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
            onClick={toggleMobile}
          >
            {/* Animated Hamburger / Close Icon */}
          <svg
            className={`w-6 h-6 transition-transform duration-300 ease-in-out ${
              mobileOpen ? "rotate-180" : "rotate-0"
            }`}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {mobileOpen ? (
              <>
                <line x1="6" y1="6" x2="18" y2="18" className="transition-all duration-300" />
                <line x1="6" y1="18" x2="18" y2="6" className="transition-all duration-300" />
              </>
            ) : (
              <>
                <line x1="3" y1="6" x2="21" y2="6" className="transition-all duration-300" />
                <line x1="3" y1="12" x2="21" y2="12" className="transition-all duration-300" />
                <line x1="3" y1="18" x2="21" y2="18" className="transition-all duration-300" />
              </>
            )}
          </svg>

          </button>
        </div>
      </nav>

      {/* Mobile menu (slide down) */}
      <div
        className={`md:hidden bg-brand-blue text-white transition-maxh duration-300 ease-in-out overflow-hidden ${
          mobileOpen ? 'max-h-[600px] py-4' : 'max-h-0'
        }`}
      >
        <div className="container mx-auto px-6 space-y-3">
          <Link to="/about" onClick={closeMobile} className="block header-link">About Us</Link>

          {/* mobile services - expand/collapse simple (clickable list) */}
          <details className="bg-transparent" open={false}>
            <summary className="cursor-pointer py-2 list-none header-link">Services</summary>
            <div className="pl-4">
              {servicesData.map((s) => (
                <Link key={s.slug} to={`/services/${s.slug}`} onClick={closeMobile} className="block py-1 dropdown-link">
                  {s.title}
                </Link>
              ))}
            </div>
          </details>

          <Link to="/" onClick={closeMobile} className="block header-link">Industries</Link>
          <Link to="/" onClick={closeMobile} className="block header-link">Insights</Link>
          <Link to="/contactus" onClick={closeMobile} className="block header-link">Contact Us</Link>

          <div className="pt-2">
            <Link to="/contactus" onClick={closeMobile} className="inline-block bg-white text-brand-blue px-4 py-2 rounded-full font-semibold header-link">
              Get in touch
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
