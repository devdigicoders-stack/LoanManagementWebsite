import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [active, setActive] = useState('Home');
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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
    { name: 'About Us', path: '/about', hasDropdown: true, dropdownId: 'about' },
    { name: 'Our Services', path: '/services', hasDropdown: true, dropdownId: 'services' },
    { name: 'Contact Us', path: '/contact' },
    { name: 'Download App', path: '/download-app' },
  ];

  return (
    <header className="w-full bg-[#030706] text-white border-b border-gray-800 shadow-sm sticky top-0 z-50">

      {/* Main Navigation */}
      <div className="max-w-7xl mx-auto py-4 px-6 md:px-10 flex items-center justify-between relative">
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
            <div 
              key={item.name} 
              className="relative group"
              onMouseEnter={() => item.hasDropdown && setDropdownOpen(item.dropdownId)}
              onMouseLeave={() => item.hasDropdown && setDropdownOpen(null)}
            >
              <Link
                to={item.path}
                onClick={() => setActive(item.name)}
                className={`transition-all duration-300 px-3 py-2 rounded-md flex items-center gap-1 ${
                  active === item.name || (item.hasDropdown && dropdownOpen === item.dropdownId)
                    ? 'bg-[#0f1f13] text-[#1cf200] border-b-2 border-[#1cf200]'
                    : 'text-gray-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {item.name}
                {item.hasDropdown && (
                  <svg className={`w-4 h-4 transition-transform ${dropdownOpen === item.dropdownId ? 'rotate-180 text-[#1cf200]' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                )}
              </Link>
              
              {/* Dropdown for About Us */}
              {item.dropdownId === 'about' && dropdownOpen === 'about' && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-1 w-[200px] z-50">
                  <div className="bg-[#0a110d] border border-gray-800 rounded-lg shadow-2xl p-3">
                    <ul className="space-y-1">
                      <li><Link to="/about#who-we-are" onClick={() => setDropdownOpen(null)} className="text-gray-300 hover:text-white flex items-center gap-2 px-3 py-2 hover:bg-white/10 rounded-md transition-colors"><span className="w-1.5 h-1.5 rounded-full bg-[#1cf200]"></span>Who We Are</Link></li>
                      <li><Link to="/about#our-values" onClick={() => setDropdownOpen(null)} className="text-gray-300 hover:text-white flex items-center gap-2 px-3 py-2 hover:bg-white/10 rounded-md transition-colors"><span className="w-1.5 h-1.5 rounded-full bg-[#1cf200]"></span>Our Values</Link></li>
                      <li><Link to="/about#our-journey" onClick={() => setDropdownOpen(null)} className="text-gray-300 hover:text-white flex items-center gap-2 px-3 py-2 hover:bg-white/10 rounded-md transition-colors"><span className="w-1.5 h-1.5 rounded-full bg-[#1cf200]"></span>Our Journey</Link></li>
                      <li><Link to="/about#our-team" onClick={() => setDropdownOpen(null)} className="text-gray-300 hover:text-white flex items-center gap-2 px-3 py-2 hover:bg-white/10 rounded-md transition-colors"><span className="w-1.5 h-1.5 rounded-full bg-[#1cf200]"></span>Our Team</Link></li>
                    </ul>
                  </div>
                </div>
              )}

              {/* Mega Menu for Services */}
              {item.dropdownId === 'services' && dropdownOpen === 'services' && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-1 w-[600px] z-50">
                  <div className="bg-[#0a110d] border border-gray-800 rounded-lg shadow-2xl p-6 grid grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-[#1cf200] font-semibold mb-3 border-b border-gray-800 pb-2">Vehicle Loans</h3>
                      <ul className="space-y-2">
                        <li><Link to="/services/commercial-vehicle" onClick={() => setDropdownOpen(null)} className="text-gray-300 hover:text-white flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#1cf200]"></span>Commercial Vehicle</Link></li>
                        <li><Link to="/services/car-loan" onClick={() => setDropdownOpen(null)} className="text-gray-300 hover:text-white flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#1cf200]"></span>Car Loans</Link></li>
                        <li><Link to="/services/two-wheeler-loan" onClick={() => setDropdownOpen(null)} className="text-gray-300 hover:text-white flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#1cf200]"></span>Two Wheeler Loans</Link></li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-[#1cf200] font-semibold mb-3 border-b border-gray-800 pb-2">Home & SME Loans</h3>
                      <ul className="space-y-2">
                        <li><Link to="/services/self-construction" onClick={() => setDropdownOpen(null)} className="text-gray-300 hover:text-white flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#1cf200]"></span>Self-Construction</Link></li>
                        <li><Link to="/services/home-extension" onClick={() => setDropdownOpen(null)} className="text-gray-300 hover:text-white flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#1cf200]"></span>Home Extension</Link></li>
                        <li><Link to="/services/sme-msme-loan" onClick={() => setDropdownOpen(null)} className="text-gray-300 hover:text-white flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#1cf200]"></span>SME / MSME Loans</Link></li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>



        {/* Mobile Menu Button (Hamburger) */}
        <div className="lg:hidden">
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-gray-300 hover:text-[#1cf200] focus:outline-none transition-colors"
          >
            {isMobileMenuOpen ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-[#0a110d] border-b border-gray-800">
          <nav className="flex flex-col px-4 py-4 space-y-2">
            {navItems.map((item) => (
              <div key={item.name}>
                <Link
                  to={item.path}
                  onClick={() => {
                    setActive(item.name);
                    if (!item.hasDropdown) setIsMobileMenuOpen(false);
                    else setDropdownOpen(dropdownOpen === item.dropdownId ? null : item.dropdownId);
                  }}
                  className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                    active === item.name
                      ? 'bg-[#0f1f13] text-[#1cf200]'
                      : 'text-gray-300 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  <div className="flex justify-between items-center">
                    {item.name}
                    {item.hasDropdown && (
                      <svg className={`w-4 h-4 transition-transform ${dropdownOpen === item.dropdownId ? 'rotate-180 text-[#1cf200]' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    )}
                  </div>
                </Link>
                
                {/* Mobile Sub-menus */}
                {item.hasDropdown && dropdownOpen === item.dropdownId && (
                  <div className="mt-2 ml-4 pl-4 border-l border-gray-800 space-y-2">
                    {item.dropdownId === 'about' && (
                      <>
                        <Link to="/about#who-we-are" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-sm text-gray-400 hover:text-[#1cf200]">Who We Are</Link>
                        <Link to="/about#our-values" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-sm text-gray-400 hover:text-[#1cf200]">Our Values</Link>
                        <Link to="/about#our-journey" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-sm text-gray-400 hover:text-[#1cf200]">Our Journey</Link>
                        <Link to="/about#our-team" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-sm text-gray-400 hover:text-[#1cf200]">Our Team</Link>
                      </>
                    )}
                    {item.dropdownId === 'services' && (
                      <>
                        <div className="py-2 text-xs font-bold text-gray-500 uppercase tracking-wider">Vehicle Loans</div>
                        <Link to="/services/commercial-vehicle" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-sm text-gray-400 hover:text-[#1cf200]">Commercial Vehicle</Link>
                        <Link to="/services/car-loan" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-sm text-gray-400 hover:text-[#1cf200]">Car Loans</Link>
                        <Link to="/services/two-wheeler-loan" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-sm text-gray-400 hover:text-[#1cf200]">Two Wheeler</Link>
                        <div className="py-2 text-xs font-bold text-gray-500 uppercase tracking-wider mt-2">Home & SME Loans</div>
                        <Link to="/services/self-construction" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-sm text-gray-400 hover:text-[#1cf200]">Self-Construction</Link>
                        <Link to="/services/home-extension" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-sm text-gray-400 hover:text-[#1cf200]">Home Extension</Link>
                        <Link to="/services/sme-msme-loan" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-sm text-gray-400 hover:text-[#1cf200]">SME / MSME Loans</Link>
                      </>
                    )}
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
