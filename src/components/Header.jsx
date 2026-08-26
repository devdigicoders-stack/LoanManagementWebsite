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
    } else if (location.pathname === '/careers') {
      setActive('Careers');
    } else if (location.pathname === '/') {
      setActive('Home');
    }
  }, [location.pathname]);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about', hasDropdown: true, dropdownId: 'about' },
    { name: 'Our Services', path: '/services', hasDropdown: true, dropdownId: 'services' },
    { name: 'Careers', path: '/careers' },
    { name: 'Contact Us', path: '/contact' },
    { name: 'Download App', path: '/download-app' },
 ];

  return (
    <header className="w-full bg-[#F0F9FF] text-slate-900 border-b border-gray-800 shadow-sm sticky top-0 z-[100]">

      {/* Main Navigation */}
      <div className="max-w-7xl mx-auto py-4 px-6 md:px-10 flex items-center justify-between relative">
        {/* Logo */}
        <div className="flex-shrink-0 cursor-pointer">
          <Link to="/" onClick={() => setActive('Home')}>
            <img 
              src="/loanlogo.png" 
              alt="HAUS NUO-Pay Logo" 
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
                    ? 'bg-[#BAE6FD] text-[#0284C7] border-b-2 border-[#0284C7]'
                    : 'text-slate-700 hover:text-slate-900 hover:bg-white/5'
                }`}
              >
                {item.name}
                {item.hasDropdown && (
                  <svg className={`w-4 h-4 transition-transform ${dropdownOpen === item.dropdownId ? 'rotate-180 text-[#0284C7]' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                )}
              </Link>
              
              {/* Dropdown for About Us */}
              {item.dropdownId === 'about' && dropdownOpen === 'about' && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-1 w-[200px] z-50">
                  <div className="bg-[#F0F9FF] border border-gray-800 rounded-lg shadow-2xl p-3">
                    <ul className="space-y-1">
                      <li><Link to="/about#who-we-are" onClick={() => setDropdownOpen(null)} className="text-slate-700 hover:text-slate-900 flex items-center gap-2 px-3 py-2 hover:bg-white/10 rounded-md transition-colors"><span className="w-1.5 h-1.5 rounded-full bg-[#0284C7]"></span>Who We Are</Link></li>
                      <li><Link to="/about#our-values" onClick={() => setDropdownOpen(null)} className="text-slate-700 hover:text-slate-900 flex items-center gap-2 px-3 py-2 hover:bg-white/10 rounded-md transition-colors"><span className="w-1.5 h-1.5 rounded-full bg-[#0284C7]"></span>Our Values</Link></li>
                      <li><Link to="/about#our-journey" onClick={() => setDropdownOpen(null)} className="text-slate-700 hover:text-slate-900 flex items-center gap-2 px-3 py-2 hover:bg-white/10 rounded-md transition-colors"><span className="w-1.5 h-1.5 rounded-full bg-[#0284C7]"></span>Our Journey</Link></li>
                      <li><Link to="/about#our-team" onClick={() => setDropdownOpen(null)} className="text-slate-700 hover:text-slate-900 flex items-center gap-2 px-3 py-2 hover:bg-white/10 rounded-md transition-colors"><span className="w-1.5 h-1.5 rounded-full bg-[#0284C7]"></span>Our Team</Link></li>
                    </ul>
                  </div>
                </div>
              )}

              {/* Mega Menu for Services */}
              {item.dropdownId === 'services' && dropdownOpen === 'services' && (
                <div className="absolute top-full right-0 pt-1 w-[800px] z-50">
                  <div className="bg-[#F0F9FF] border border-gray-800 rounded-lg shadow-2xl p-6 max-h-[85vh] overflow-y-auto no-scrollbar">
                    
                    <div className="mb-6">
                      <h2 className="text-[#0284C7] font-bold text-lg mb-4 border-b border-gray-800 pb-2">Financial Services</h2>
                      <div className="grid grid-cols-3 gap-6">
                        {/* HAUS Nuo-Pay */}
                        <div>
                          <h3 className="text-slate-900 font-semibold mb-3">HAUS Nuo-Pay</h3>
                          <ul className="space-y-2">
                            <li><Link to="/services/multi-single-emi" onClick={() => setDropdownOpen(null)} className="text-slate-700 hover:text-slate-900 flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#0284C7]"></span>Multi-Single EMI</Link></li>
                            <li><Link to="/services/salary-against-loan" onClick={() => setDropdownOpen(null)} className="text-slate-700 hover:text-slate-900 flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#0284C7]"></span>Salary Against Loan</Link></li>
                            <li><Link to="/services/top-up-bt-loan" onClick={() => setDropdownOpen(null)} className="text-slate-700 hover:text-slate-900 flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#0284C7]"></span>Top-Up & BT Loan</Link></li>
                            <li><Link to="/services/hospfinsure-loan" onClick={() => setDropdownOpen(null)} className="text-slate-700 hover:text-slate-900 flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#0284C7]"></span>Hospfinsure Loan ("हॉस्पिफाइन्श्योर")</Link></li>
                          </ul>
                        </div>
                        
                        {/* Un-Secured */}
                        <div>
                          <h3 className="text-slate-900 font-semibold mb-3">Un-Secured</h3>
                          <ul className="space-y-2">
                            <li><Link to="/services/business-loan" onClick={() => setDropdownOpen(null)} className="text-slate-700 hover:text-slate-900 flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#0284C7]"></span>Business Loan</Link></li>
                            <li><Link to="/services/personal-loan" onClick={() => setDropdownOpen(null)} className="text-slate-700 hover:text-slate-900 flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#0284C7]"></span>Personal Loan</Link></li>
                            <li><Link to="/services/doctors-loan" onClick={() => setDropdownOpen(null)} className="text-slate-700 hover:text-slate-900 flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#0284C7]"></span>Doctor’s Loan</Link></li>
                            <li><Link to="/services/equipment-loan" onClick={() => setDropdownOpen(null)} className="text-slate-700 hover:text-slate-900 flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#0284C7]"></span>Equipment’s Loan</Link></li>
                          </ul>
                        </div>

                        {/* Morgatage */}
                        <div>
                          <h3 className="text-slate-900 font-semibold mb-3">Morgatage</h3>
                          <ul className="space-y-2">
                            <li><Link to="/services/gold-loan" onClick={() => setDropdownOpen(null)} className="text-slate-700 hover:text-slate-900 flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#0284C7]"></span>Gold Loan</Link></li>
                            <li><Link to="/services/home-loan" onClick={() => setDropdownOpen(null)} className="text-slate-700 hover:text-slate-900 flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#0284C7]"></span>Home Loan</Link></li>
                            <li><Link to="/services/loan-against-properties" onClick={() => setDropdownOpen(null)} className="text-slate-700 hover:text-slate-900 flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#0284C7]"></span>Loan Against Properties</Link></li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h2 className="text-[#0284C7] font-bold text-lg mb-4 border-b border-gray-800 pb-2">Properties Management</h2>
                      <div className="grid grid-cols-3 gap-6">
                        {/* Rental-Pay */}
                        <div>
                          <h3 className="text-slate-900 font-semibold mb-3">Rental-Pay</h3>
                          <ul className="space-y-2">
                            <li><Link to="/services/properties/rental-pay-landlord" onClick={() => setDropdownOpen(null)} className="text-slate-700 hover:text-slate-900 flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#0284C7]"></span>Home-Owner / Landlord</Link></li>
                            <li><Link to="/services/properties/rental-pay-tenant" onClick={() => setDropdownOpen(null)} className="text-slate-700 hover:text-slate-900 flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#0284C7]"></span>Renter / Tenant</Link></li>
                          </ul>
                        </div>

                        {/* Societies Insured */}
                        <div>
                          <h3 className="text-slate-900 font-semibold mb-3">Societies Insured</h3>
                          <ul className="space-y-2">
                            <li><Link to="/services/properties/societies-insured" onClick={() => setDropdownOpen(null)} className="text-slate-700 hover:text-slate-900 flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#0284C7]"></span>Societies</Link></li>
                          </ul>
                        </div>

                        {/* NUO-HAUS */}
                        <div>
                          <h3 className="text-slate-900 font-semibold mb-3">NUO-HAUS</h3>
                          <ul className="space-y-2">
                            <li><Link to="/services/properties/nuo-haus-builder" onClick={() => setDropdownOpen(null)} className="text-slate-700 hover:text-slate-900 flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#0284C7]"></span>Builder's</Link></li>
                            <li><Link to="/services/properties/nuo-haus-individual" onClick={() => setDropdownOpen(null)} className="text-slate-700 hover:text-slate-900 flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#0284C7]"></span>Individual</Link></li>
                          </ul>
                        </div>
                      </div>
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
            className="text-slate-700 hover:text-[#0284C7] focus:outline-none transition-colors"
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
        <div className="lg:hidden bg-[#F0F9FF] border-b border-gray-800">
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
                      ? 'bg-[#BAE6FD] text-[#0284C7]'
                      : 'text-slate-700 hover:bg-white/5 hover:text-slate-900'
                  }`}
                >
                  <div className="flex justify-between items-center">
                    {item.name}
                    {item.hasDropdown && (
                      <svg className={`w-4 h-4 transition-transform ${dropdownOpen === item.dropdownId ? 'rotate-180 text-[#0284C7]' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
                        <Link to="/about#who-we-are" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-sm text-slate-600 hover:text-[#0284C7]">Who We Are</Link>
                        <Link to="/about#our-values" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-sm text-slate-600 hover:text-[#0284C7]">Our Values</Link>
                        <Link to="/about#our-journey" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-sm text-slate-600 hover:text-[#0284C7]">Our Journey</Link>
                        <Link to="/about#our-team" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-sm text-slate-600 hover:text-[#0284C7]">Our Team</Link>
                      </>
                    )}
                    {item.dropdownId === 'services' && (
                      <>
                        <div className="py-2 text-xs font-bold text-gray-500 uppercase tracking-wider">Financial Services</div>
                        
                        <div className="mt-2">
                          <div className="py-1 text-[11px] font-bold text-gray-600 uppercase tracking-wider">HAUS Nuo-Pay</div>
                          <Link to="/services/multi-single-emi" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-sm text-slate-600 hover:text-[#0284C7] ml-2">Multi-Single EMI</Link>
                          <Link to="/services/salary-against-loan" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-sm text-slate-600 hover:text-[#0284C7] ml-2">Salary Against Loan</Link>
                          <Link to="/services/top-up-bt-loan" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-sm text-slate-600 hover:text-[#0284C7] ml-2">Top-Up & BT Loan</Link>
                          <Link to="/services/hospfinsure-loan" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-sm text-slate-600 hover:text-[#0284C7] ml-2">Hospfinsure Loan ("हॉस्पिफाइन्श्योर")</Link>
                        </div>

                        <div className="mt-2">
                          <div className="py-1 text-[11px] font-bold text-gray-600 uppercase tracking-wider">Un-Secured</div>
                          <Link to="/services/business-loan" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-sm text-slate-600 hover:text-[#0284C7] ml-2">Business Loan</Link>
                          <Link to="/services/personal-loan" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-sm text-slate-600 hover:text-[#0284C7] ml-2">Personal Loan</Link>
                          <Link to="/services/doctors-loan" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-sm text-slate-600 hover:text-[#0284C7] ml-2">Doctor’s Loan</Link>
                          <Link to="/services/equipment-loan" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-sm text-slate-600 hover:text-[#0284C7] ml-2">Equipment’s Loan</Link>
                        </div>

                        <div className="mt-2">
                          <div className="py-1 text-[11px] font-bold text-gray-600 uppercase tracking-wider">Morgatage</div>
                          <Link to="/services/gold-loan" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-sm text-slate-600 hover:text-[#0284C7] ml-2">Gold Loan</Link>
                          <Link to="/services/home-loan" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-sm text-slate-600 hover:text-[#0284C7] ml-2">Home Loan</Link>
                          <Link to="/services/loan-against-properties" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-sm text-slate-600 hover:text-[#0284C7] ml-2">Loan Against Properties</Link>
                        </div>

                        <div className="py-2 text-xs font-bold text-gray-500 uppercase tracking-wider mt-4">Properties Management</div>
                        
                        <div className="mt-2">
                          <div className="py-1 text-[11px] font-bold text-gray-600 uppercase tracking-wider">Rental-Pay</div>
                          <Link to="/services/properties/rental-pay-landlord" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-sm text-slate-600 hover:text-[#0284C7] ml-2">Home-Owner / Landlord</Link>
                          <Link to="/services/properties/rental-pay-tenant" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-sm text-slate-600 hover:text-[#0284C7] ml-2">Renter / Tenant</Link>
                        </div>

                        <div className="mt-2">
                          <div className="py-1 text-[11px] font-bold text-gray-600 uppercase tracking-wider">Societies Insured</div>
                          <Link to="/services/properties/societies-insured" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-sm text-slate-600 hover:text-[#0284C7] ml-2">Societies</Link>
                        </div>

                        <div className="mt-2">
                          <div className="py-1 text-[11px] font-bold text-gray-600 uppercase tracking-wider">NUO-HAUS</div>
                          <Link to="/services/properties/nuo-haus-builder" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-sm text-slate-600 hover:text-[#0284C7] ml-2">Builder's</Link>
                          <Link to="/services/properties/nuo-haus-individual" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-sm text-slate-600 hover:text-[#0284C7] ml-2">Individual</Link>
                        </div>
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
