import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [active, setActive] = useState('Home');
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/about') {
      setActive('About Us');
    } else if (location.pathname.startsWith('/services')) {
      setActive('Our Services');
    } else if (location.pathname === '/contact') {
      setActive('Contact Us');
    } else if (location.pathname === '/download-app') {
      setActive('Download App');
    } else if (location.pathname === '/') {
      setActive('Home');
    }
  }, [location.pathname]);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Our Services', path: '/services' },
    { name: 'Contact Us', path: '/contact' },
    { name: 'Download App', path: '/download-app' },
  ];

  return (
    <header className="w-full bg-[#030706] text-white border-b border-gray-800 shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto py-4 px-6 md:px-10 flex items-center justify-between">
      {/* Logo */}
      <div className="flex-shrink-0 cursor-pointer">
        <Link to="/" onClick={() => setActive('Home')}>
          <img 
            src="/loanlogo.png" 
            alt="NGM Logo" 
            className="h-12 object-contain"
          />
        </Link>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden lg:flex items-center space-x-6 text-sm font-medium">
        {navItems.map((item) => (
          <Link
            key={item.name}
            to={item.path}
            onClick={() => setActive(item.name)}
            className={`transition-all duration-300 px-3 py-2 rounded-md ${
              active === item.name
                ? 'bg-[#0f1f13] text-[#71d924] border-b-2 border-[#71d924]'
                : 'text-gray-300 hover:text-white hover:bg-white/5'
            }`}
          >
            {item.name}
          </Link>
        ))}
      </nav>

      {/* Action Button */}
      <div className="hidden lg:block flex-shrink-0">
        <Link 
          to="/get-started" 
          onClick={() => setActive('')}
          className="bg-[#7ce225] hover:bg-[#68c61e] text-black font-semibold py-2.5 px-6 rounded-lg shadow-[0_0_15px_rgba(124,226,37,0.3)] transition-all duration-300 hover:scale-105 inline-block"
        >
          Get Started
        </Link>
      </div>

      {/* Mobile Menu Button (Hamburger) */}
      <div className="lg:hidden">
        <button className="text-gray-300 hover:text-white focus:outline-none">
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      </div>
    </header>
  );
};

export default Header;
