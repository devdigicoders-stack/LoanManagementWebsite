import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  CreditCard, 
  Wallet, 
  Briefcase, 
  User, 
  Stethoscope, 
  Coins, 
  Home, 
  Building2, 
  Car, 
  Building, 
  KeyRound, 
  ShieldCheck, 
  HardHat, 
  Users,
  ChevronRight,
  Sparkles,
  ArrowRight
} from 'lucide-react';

const Header = () => {
  const [active, setActive] = useState('Home');
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const [activeServiceTab, setActiveServiceTab] = useState('financial'); // 'financial' or 'properties'
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

  const financialGroups = [
    {
      title: "HAUS Nuo-Pay",
      tagline: "Smart Salary & Consolidated Payments",
      badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
      items: [
        { name: "Multi-Single EMI", path: "/services/multi-single-emi", icon: CreditCard, desc: "Consolidate multiple loans into one convenient single EMI" },
        { name: "Salary Against Loan", path: "/services/salary-against-loan", icon: Wallet, desc: "Instant advance liquidity against your monthly salary income" },
      ]
    },
    {
      title: "Un-Secured Loans",
      tagline: "Collateral-Free Fast Approvals",
      badgeColor: "bg-blue-50 text-blue-700 border-blue-200",
      items: [
        { name: "Business Loan", path: "/services/business-loan", icon: Briefcase, desc: "Working capital & scale-up finance for enterprises" },
        { name: "Personal Loan", path: "/services/personal-loan", icon: User, desc: "Flexible instant funds for medical, travel or personal needs" },
        { name: "Doctor’s Loan", path: "/services/doctors-loan", icon: Stethoscope, desc: "Exclusive tailored credit for healthcare practitioners & clinics" },
      ]
    },
    {
      title: "Morgatage Loans",
      tagline: "Asset-Backed High Value Funding",
      badgeColor: "bg-amber-50 text-amber-700 border-amber-200",
      items: [
        { name: "Gold Loan", path: "/services/gold-loan", icon: Coins, desc: "Instant cash liquidity against gold jewelry with lowest ROI" },
        { name: "Home Loan", path: "/services/home-loan", icon: Home, desc: "Affordable housing finance for purchase & construction" },
        { name: "Loan Against Properties", path: "/services/loan-against-properties", icon: Building2, desc: "High-value loans leveraging residential or commercial real estate" },
        { name: "Loan Against Vehicle", path: "/services/loan-against-vehicle", icon: Car, desc: "Unlock liquidity against vehicle equity while you keep driving" },
      ]
    }
  ];

  const propertiesGroups = [
    {
      title: "Rental-Pay",
      tagline: "Seamless Rent & Deposit Management",
      badgeColor: "bg-indigo-50 text-indigo-700 border-indigo-200",
      items: [
        { name: "Home-Owner / Landlord", path: "/services/properties/rental-pay-landlord", icon: Building, desc: "Guaranteed on-time monthly rent disbursement & tenant management" },
        { name: "Renter / Tenant", path: "/services/properties/rental-pay-tenant", icon: KeyRound, desc: "Pay rental deposits & monthly rents via cards with flexible credit terms" },
      ]
    },
    {
      title: "Societies Insured",
      tagline: "Residential Community Protection",
      badgeColor: "bg-teal-50 text-teal-700 border-teal-200",
      items: [
        { name: "Societies", path: "/services/properties/societies-insured", icon: ShieldCheck, desc: "Comprehensive structural and common maintenance insurance coverage" },
      ]
    },
    {
      title: "NUO-HAUS",
      tagline: "Real Estate & Direct Housing Solutions",
      badgeColor: "bg-sky-50 text-sky-700 border-sky-200",
      items: [
        { name: "Builder's", path: "/services/properties/nuo-haus-builder", icon: HardHat, desc: "Project financing, sales enablement and buyer mortgage tie-ups" },
        { name: "Individual", path: "/services/properties/nuo-haus-individual", icon: Users, desc: "End-to-end guidance for individual land and flat purchasers" },
      ]
    }
  ];

  return (
    <header className="w-full bg-[#F0F9FF] text-slate-900 border-b border-[#E0F2FE] shadow-sm sticky top-0 z-[100]">

      {/* Main Navigation */}
      <div className="w-full px-6 lg:px-12 xl:px-16 mx-auto py-3.5 flex items-center justify-between relative">
        {/* Logo */}
        <div className="flex-shrink-0 cursor-pointer">
          <Link to="/" onClick={() => setActive('Home')}>
            <img 
              src="/loanlogo.png" 
              alt="HAUS NUO-Pay Logo" 
              className="h-12 w-auto object-contain hover:scale-105 transition-transform"
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-1">
          {navItems.map((item) => (
            <div 
              key={item.name} 
              className="relative"
              onMouseEnter={() => item.hasDropdown && setDropdownOpen(item.dropdownId)}
              onMouseLeave={() => setDropdownOpen(null)}
            >
              <Link
                to={item.path}
                onClick={() => setActive(item.name)}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                  active === item.name 
                    ? 'bg-white text-[#0284C7] shadow-sm' 
                    : 'text-slate-700 hover:text-[#0284C7] hover:bg-white/60'
                }`}
              >
                <span>{item.name}</span>
                {item.hasDropdown && (
                  <svg className={`w-3.5 h-3.5 transition-transform duration-300 ${dropdownOpen === item.dropdownId ? 'rotate-180 text-[#0284C7]' : 'text-slate-400'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                  </svg>
                )}
              </Link>
              
              {/* Dropdown for About Us */}
              {item.dropdownId === 'about' && dropdownOpen === 'about' && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-[220px] z-50">
                  <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-2.5">
                    <ul className="space-y-1">
                      <li><Link to="/about#who-we-are" onClick={() => setDropdownOpen(null)} className="text-slate-700 hover:text-[#0284C7] flex items-center gap-2.5 px-3 py-2 hover:bg-slate-50 rounded-xl transition-colors font-medium text-sm"><span className="w-1.5 h-1.5 rounded-full bg-[#0284C7]"></span>Who We Are</Link></li>
                      <li><Link to="/about#our-values" onClick={() => setDropdownOpen(null)} className="text-slate-700 hover:text-[#0284C7] flex items-center gap-2.5 px-3 py-2 hover:bg-slate-50 rounded-xl transition-colors font-medium text-sm"><span className="w-1.5 h-1.5 rounded-full bg-[#0284C7]"></span>Our Values</Link></li>
                      <li><Link to="/about#our-journey" onClick={() => setDropdownOpen(null)} className="text-slate-700 hover:text-[#0284C7] flex items-center gap-2.5 px-3 py-2 hover:bg-slate-50 rounded-xl transition-colors font-medium text-sm"><span className="w-1.5 h-1.5 rounded-full bg-[#0284C7]"></span>Our Journey</Link></li>
                      <li><Link to="/about#our-team" onClick={() => setDropdownOpen(null)} className="text-slate-700 hover:text-[#0284C7] flex items-center gap-2.5 px-3 py-2 hover:bg-slate-50 rounded-xl transition-colors font-medium text-sm"><span className="w-1.5 h-1.5 rounded-full bg-[#0284C7]"></span>Our Team</Link></li>
                    </ul>
                  </div>
                </div>
              )}

              {/* MODERN FLOATING GLASSMORPHISM CARD-GRID DRAWER FOR OUR SERVICES */}
              {item.dropdownId === 'services' && dropdownOpen === 'services' && (
                <div className="absolute top-full right-[-80px] xl:right-[-40px] pt-3 w-[840px] z-50 animate-in fade-in zoom-in-95 duration-200">
                  <div className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-[0_20px_60px_-15px_rgba(2,132,199,0.25)] border border-sky-100/80 overflow-hidden ring-1 ring-slate-900/5">
                    
                    {/* Top Control Bar: Category Switcher & Direct Apply Action */}
                    <div className="px-6 py-4 bg-gradient-to-r from-sky-50/80 via-white to-sky-50/50 border-b border-sky-100/60 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Browse:</span>
                        <div className="inline-flex p-1 bg-slate-100/90 rounded-2xl border border-slate-200/60">
                          <button
                            type="button"
                            onClick={() => setActiveServiceTab('financial')}
                            className={`flex items-center gap-2 px-4 py-1.5 rounded-xl text-xs font-bold transition-all duration-200 ${
                              activeServiceTab === 'financial'
                                ? 'bg-gradient-to-r from-[#0284C7] to-[#0369A1] text-white shadow-md shadow-sky-500/20'
                                : 'text-slate-600 hover:text-slate-900'
                            }`}
                          >
                            <CreditCard size={14} />
                            <span>Financial Services</span>
                            <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-bold ${
                              activeServiceTab === 'financial' ? 'bg-white/25 text-white' : 'bg-slate-200 text-slate-600'
                            }`}>9</span>
                          </button>

                          <button
                            type="button"
                            onClick={() => setActiveServiceTab('properties')}
                            className={`flex items-center gap-2 px-4 py-1.5 rounded-xl text-xs font-bold transition-all duration-200 ${
                              activeServiceTab === 'properties'
                                ? 'bg-gradient-to-r from-[#0284C7] to-[#0369A1] text-white shadow-md shadow-sky-500/20'
                                : 'text-slate-600 hover:text-slate-900'
                            }`}
                          >
                            <Building2 size={14} />
                            <span>Properties Management</span>
                            <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-bold ${
                              activeServiceTab === 'properties' ? 'bg-white/25 text-white' : 'bg-slate-200 text-slate-600'
                            }`}>5</span>
                          </button>
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        <Link
                          to="/services"
                          onClick={() => setDropdownOpen(null)}
                          className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0284C7] hover:text-[#0369A1] px-3 py-1.5 rounded-xl hover:bg-sky-50 transition-colors"
                        >
                          View Catalog <ArrowRight size={13} />
                        </Link>
                      </div>
                    </div>

                    {/* Cards Grid Body */}
                    <div className="p-6">
                      {activeServiceTab === 'financial' ? (
                        <div className="space-y-5">
                          {financialGroups.map((group, gIdx) => (
                            <div key={gIdx} className="space-y-2.5">
                              {/* Section Title with Badge */}
                              <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                  <div className="w-2 h-2 rounded-full bg-[#0284C7]"></div>
                                  <h4 className="text-[13px] font-extrabold text-slate-800 tracking-tight">{group.title}</h4>
                                  <span className="text-[11px] text-slate-400 font-medium">— {group.tagline}</span>
                                </div>
                              </div>

                              {/* Card Items Grid */}
                              <div className="grid grid-cols-3 gap-3">
                                {group.items.map((sub, sIdx) => {
                                  const IconComp = sub.icon;
                                  return (
                                    <Link
                                      key={sIdx}
                                      to={sub.path}
                                      onClick={() => setDropdownOpen(null)}
                                      className="group relative flex flex-col justify-between p-3.5 rounded-2xl bg-white hover:bg-gradient-to-br hover:from-sky-50/70 hover:to-white border border-slate-100 hover:border-sky-300 shadow-sm hover:shadow-md transition-all duration-200"
                                    >
                                      <div className="flex items-start gap-3">
                                        <div className="w-9 h-9 rounded-xl bg-sky-50 text-[#0284C7] group-hover:bg-[#0284C7] group-hover:text-white flex items-center justify-center shrink-0 transition-colors duration-200 shadow-sm">
                                          <IconComp size={18} />
                                        </div>
                                        <div className="min-w-0 flex-1">
                                          <div className="flex items-center justify-between">
                                            <p className="text-[12.5px] font-bold text-slate-800 group-hover:text-[#0284C7] transition-colors truncate">
                                              {sub.name}
                                            </p>
                                            <ArrowRight size={12} className="text-slate-300 group-hover:text-[#0284C7] group-hover:translate-x-1 transition-all opacity-0 group-hover:opacity-100 shrink-0" />
                                          </div>
                                          <p className="text-[11px] text-slate-500 mt-1 line-clamp-2 leading-relaxed">
                                            {sub.desc}
                                          </p>
                                        </div>
                                      </div>
                                    </Link>
                                  );
                                })}
                              </div>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div className="space-y-5">
                          {propertiesGroups.map((group, gIdx) => (
                            <div key={gIdx} className="space-y-2.5">
                              {/* Section Title with Badge */}
                              <div className="flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-[#0284C7]"></div>
                                <h4 className="text-[13px] font-extrabold text-slate-800 tracking-tight">{group.title}</h4>
                                <span className="text-[11px] text-slate-400 font-medium">— {group.tagline}</span>
                              </div>

                              {/* Card Items Grid */}
                              <div className="grid grid-cols-2 gap-3">
                                {group.items.map((sub, sIdx) => {
                                  const IconComp = sub.icon;
                                  return (
                                    <Link
                                      key={sIdx}
                                      to={sub.path}
                                      onClick={() => setDropdownOpen(null)}
                                      className="group relative flex flex-col justify-between p-3.5 rounded-2xl bg-white hover:bg-gradient-to-br hover:from-sky-50/70 hover:to-white border border-slate-100 hover:border-sky-300 shadow-sm hover:shadow-md transition-all duration-200"
                                    >
                                      <div className="flex items-start gap-3">
                                        <div className="w-9 h-9 rounded-xl bg-sky-50 text-[#0284C7] group-hover:bg-[#0284C7] group-hover:text-white flex items-center justify-center shrink-0 transition-colors duration-200 shadow-sm">
                                          <IconComp size={18} />
                                        </div>
                                        <div className="min-w-0 flex-1">
                                          <div className="flex items-center justify-between">
                                            <p className="text-[12.5px] font-bold text-slate-800 group-hover:text-[#0284C7] transition-colors truncate">
                                              {sub.name}
                                            </p>
                                            <ArrowRight size={12} className="text-slate-300 group-hover:text-[#0284C7] group-hover:translate-x-1 transition-all opacity-0 group-hover:opacity-100 shrink-0" />
                                          </div>
                                          <p className="text-[11px] text-slate-500 mt-1 line-clamp-2 leading-relaxed">
                                            {sub.desc}
                                          </p>
                                        </div>
                                      </div>
                                    </Link>
                                  );
                                })}
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Bottom Floating Glass Footer */}
                    <div className="px-6 py-3 bg-gradient-to-r from-slate-900 via-sky-950 to-slate-900 text-white flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-6 h-6 rounded-lg bg-sky-500/20 text-sky-400 flex items-center justify-center">
                          <Sparkles size={13} />
                        </div>
                        <div>
                          <p className="text-[11.5px] font-semibold text-sky-100">Zero Processing Hassle • Instant Eligibility Check</p>
                        </div>
                      </div>
                      <Link
                        to="/contact"
                        onClick={() => setDropdownOpen(null)}
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-sky-300 hover:text-white transition-colors"
                      >
                        Talk to Loan Expert <ArrowRight size={12} />
                      </Link>
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
            className="text-slate-700 hover:text-[#0284C7] focus:outline-none transition-colors p-1"
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

      {/* Mobile Navigation Drawer */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 shadow-xl">
          <nav className="px-5 pt-3 pb-6 space-y-1">
            {navItems.map((item) => (
              <div key={item.name}>
                <div className="flex items-center justify-between py-2 border-b border-slate-100">
                  <Link
                    to={item.path}
                    onClick={() => {
                      if (!item.hasDropdown) {
                        setIsMobileMenuOpen(false);
                        setActive(item.name);
                      }
                    }}
                    className={`text-sm font-bold ${
                      active === item.name ? 'text-[#0284C7]' : 'text-slate-800'
                    }`}
                  >
                    {item.name}
                  </Link>
                  {item.hasDropdown && (
                    <button
                      onClick={() => setDropdownOpen(dropdownOpen === item.dropdownId ? null : item.dropdownId)}
                      className="p-1 text-slate-500 hover:text-[#0284C7]"
                    >
                      <svg className={`w-4 h-4 transition-transform duration-200 ${dropdownOpen === item.dropdownId ? 'rotate-180 text-[#0284C7]' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                  )}
                </div>
                
                {/* Mobile Sub-menus */}
                {item.hasDropdown && dropdownOpen === item.dropdownId && (
                  <div className="mt-2 ml-3 pl-3 border-l-2 border-[#0284C7]/30 space-y-3 py-1">
                    {item.dropdownId === 'about' && (
                      <div className="space-y-1.5">
                        <Link to="/about#who-we-are" onClick={() => setIsMobileMenuOpen(false)} className="block py-1 text-xs text-slate-600 hover:text-[#0284C7]">Who We Are</Link>
                        <Link to="/about#our-values" onClick={() => setIsMobileMenuOpen(false)} className="block py-1 text-xs text-slate-600 hover:text-[#0284C7]">Our Values</Link>
                        <Link to="/about#our-journey" onClick={() => setIsMobileMenuOpen(false)} className="block py-1 text-xs text-slate-600 hover:text-[#0284C7]">Our Journey</Link>
                        <Link to="/about#our-team" onClick={() => setIsMobileMenuOpen(false)} className="block py-1 text-xs text-slate-600 hover:text-[#0284C7]">Our Team</Link>
                      </div>
                    )}
                    {item.dropdownId === 'services' && (
                      <div className="space-y-4">
                        <div>
                          <div className="text-[11px] font-black text-[#0284C7] uppercase tracking-wider mb-1.5">Financial Services</div>
                          
                          <div className="ml-2 space-y-2">
                            <div>
                              <p className="text-[10px] font-bold text-slate-400 uppercase">HAUS Nuo-Pay</p>
                              <Link to="/services/multi-single-emi" onClick={() => setIsMobileMenuOpen(false)} className="block py-0.5 text-xs text-slate-700 hover:text-[#0284C7]">Multi-Single EMI</Link>
                              <Link to="/services/salary-against-loan" onClick={() => setIsMobileMenuOpen(false)} className="block py-0.5 text-xs text-slate-700 hover:text-[#0284C7]">Salary Against Loan</Link>
                            </div>

                            <div>
                              <p className="text-[10px] font-bold text-slate-400 uppercase mt-1">Un-Secured</p>
                              <Link to="/services/business-loan" onClick={() => setIsMobileMenuOpen(false)} className="block py-0.5 text-xs text-slate-700 hover:text-[#0284C7]">Business Loan</Link>
                              <Link to="/services/personal-loan" onClick={() => setIsMobileMenuOpen(false)} className="block py-0.5 text-xs text-slate-700 hover:text-[#0284C7]">Personal Loan</Link>
                              <Link to="/services/doctors-loan" onClick={() => setIsMobileMenuOpen(false)} className="block py-0.5 text-xs text-slate-700 hover:text-[#0284C7]">Doctor’s Loan</Link>
                            </div>

                            <div>
                              <p className="text-[10px] font-bold text-slate-400 uppercase mt-1">Morgatage</p>
                              <Link to="/services/gold-loan" onClick={() => setIsMobileMenuOpen(false)} className="block py-0.5 text-xs text-slate-700 hover:text-[#0284C7]">Gold Loan</Link>
                              <Link to="/services/home-loan" onClick={() => setIsMobileMenuOpen(false)} className="block py-0.5 text-xs text-slate-700 hover:text-[#0284C7]">Home Loan</Link>
                              <Link to="/services/loan-against-properties" onClick={() => setIsMobileMenuOpen(false)} className="block py-0.5 text-xs text-slate-700 hover:text-[#0284C7]">Loan Against Properties</Link>
                              <Link to="/services/loan-against-vehicle" onClick={() => setIsMobileMenuOpen(false)} className="block py-0.5 text-xs text-slate-700 hover:text-[#0284C7]">Loan Against Vehicle</Link>
                            </div>
                          </div>
                        </div>

                        <div>
                          <div className="text-[11px] font-black text-[#0284C7] uppercase tracking-wider mb-1.5">Properties Management</div>
                          
                          <div className="ml-2 space-y-2">
                            <div>
                              <p className="text-[10px] font-bold text-slate-400 uppercase">Rental-Pay</p>
                              <Link to="/services/properties/rental-pay-landlord" onClick={() => setIsMobileMenuOpen(false)} className="block py-0.5 text-xs text-slate-700 hover:text-[#0284C7]">Home-Owner / Landlord</Link>
                              <Link to="/services/properties/rental-pay-tenant" onClick={() => setIsMobileMenuOpen(false)} className="block py-0.5 text-xs text-slate-700 hover:text-[#0284C7]">Renter / Tenant</Link>
                            </div>

                            <div>
                              <p className="text-[10px] font-bold text-slate-400 uppercase mt-1">Societies Insured</p>
                              <Link to="/services/properties/societies-insured" onClick={() => setIsMobileMenuOpen(false)} className="block py-0.5 text-xs text-slate-700 hover:text-[#0284C7]">Societies</Link>
                            </div>

                            <div>
                              <p className="text-[10px] font-bold text-slate-400 uppercase mt-1">NUO-HAUS</p>
                              <Link to="/services/properties/nuo-haus-builder" onClick={() => setIsMobileMenuOpen(false)} className="block py-0.5 text-xs text-slate-700 hover:text-[#0284C7]">Builder's</Link>
                              <Link to="/services/properties/nuo-haus-individual" onClick={() => setIsMobileMenuOpen(false)} className="block py-0.5 text-xs text-slate-700 hover:text-[#0284C7]">Individual</Link>
                            </div>
                          </div>
                        </div>
                      </div>
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
