import React, { useState, useEffect, useRef } from 'react';
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
  Sparkles,
  ArrowRight,
  Info,
  HeartHandshake,
  Compass,
  UserCheck
} from 'lucide-react';

const Header = () => {
  const [active, setActive] = useState('Home');
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const [activeServiceTab, setActiveServiceTab] = useState('financial'); // 'financial' or 'properties'
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const dropdownTimeoutRef = useRef(null);

  const handleMouseEnter = (id) => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setDropdownOpen(id);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setDropdownOpen(null);
    }, 180);
  };

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

  const aboutLinks = [
    { title: "Who We Are", path: "/about#who-we-are", icon: Info, desc: "Our mission, vision, and institutional roots" },
    { title: "Our Values", path: "/about#our-values", icon: HeartHandshake, desc: "Integrity, transparency, and customer centricity" },
    { title: "Our Journey", path: "/about#our-journey", icon: Compass, desc: "Milestones and fintech evolution timeline" },
    { title: "Our Team", path: "/about#our-team", icon: UserCheck, desc: "Leadership driving financial empowerment" },
  ];

  const financialGroups = [
    {
      title: "HAUS Nuo-Pay",
      tagline: "Smart Salary & Consolidated Payments",
      items: [
        { name: "Multi-Single EMI", path: "/services/multi-single-emi", icon: CreditCard, desc: "Consolidate multiple EMIs into one easy monthly payment" },
        { name: "Salary Against Loan", path: "/services/salary-against-loan", icon: Wallet, desc: "Instant advance liquidity against your monthly salary income" },
      ]
    },
    {
      title: "Un-Secured Loans",
      tagline: "Collateral-Free Fast Approvals",
      items: [
        { name: "Business Loan", path: "/services/business-loan", icon: Briefcase, desc: "Working capital & scale-up finance for growing businesses" },
        { name: "Personal Loan", path: "/services/personal-loan", icon: User, desc: "Quick cash liquidity for emergency, travel or medical needs" },
        { name: "Doctor’s Loan", path: "/services/doctors-loan", icon: Stethoscope, desc: "Tailored credit lines for clinics & certified practitioners" },
      ]
    },
    {
      title: "Mortgage Loans",
      tagline: "Asset-Backed High Value Funding",
      items: [
        { name: "Gold Loan", path: "/services/gold-loan", icon: Coins, desc: "Low interest instant loans pledged against gold ornaments" },
        { name: "Home Loan", path: "/services/home-loan", icon: Home, desc: "Affordable housing finance for plot, flat or construction" },
        { name: "Loan Against Property", path: "/services/loan-against-properties", icon: Building2, desc: "High ticket capital leveraging commercial or residential assets" },
        { name: "Loan Against Vehicle", path: "/services/loan-against-vehicle", icon: Car, desc: "Unlock value on your car or commercial vehicle title" },
      ]
    }
  ];

  const propertiesGroups = [
    {
      title: "Rental-Pay",
      tagline: "Seamless Rent & Deposit Management",
      items: [
        { name: "Home-Owner / Landlord", path: "/services/properties/rental-pay-landlord", icon: Building, desc: "Guaranteed on-time rent disbursement & tenancy management" },
        { name: "Renter / Tenant", path: "/services/properties/rental-pay-tenant", icon: KeyRound, desc: "Pay deposits & monthly rent easily with flexible card limits" },
      ]
    },
    {
      title: "Societies Insured",
      tagline: "Residential Community Protection",
      items: [
        { name: "Societies & RWAs", path: "/services/properties/societies-insured", icon: ShieldCheck, desc: "Structural, disaster and common equipment maintenance insurance" },
      ]
    },
    {
      title: "NUO-HAUS Real Estate",
      tagline: "Direct Housing & Developer Support",
      items: [
        { name: "Builder Solutions", path: "/services/properties/nuo-haus-builder", icon: HardHat, desc: "Project financing, escrow pipelines and buyer mortgage tie-ups" },
        { name: "Individual Homebuyer", path: "/services/properties/nuo-haus-individual", icon: Users, desc: "Curated verified properties with pre-approved financing" },
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
              onMouseEnter={() => item.hasDropdown && handleMouseEnter(item.dropdownId)}
              onMouseLeave={() => item.hasDropdown && handleMouseLeave()}
            >
              <Link
                to={item.path}
                onClick={() => {
                  setActive(item.name);
                  setDropdownOpen(null);
                }}
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
              
              {/* COMPACT & ELEGANT DROPDOWN FOR ABOUT US */}
              {item.dropdownId === 'about' && dropdownOpen === 'about' && (
                <div 
                  className="absolute top-full left-0 pt-2 w-[320px] z-50 animate-in fade-in slide-in-from-top-2 duration-150"
                  onMouseEnter={() => handleMouseEnter('about')}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="bg-white rounded-2xl shadow-xl shadow-slate-200/70 border border-slate-100 p-3 ring-1 ring-slate-900/5">
                    <div className="px-3 py-1.5 mb-1.5 flex items-center justify-between border-b border-slate-100 pb-2">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Company Overview</span>
                      <Link 
                        to="/about" 
                        onClick={() => setDropdownOpen(null)}
                        className="text-[11px] font-semibold text-[#0284C7] hover:underline"
                      >
                        Explore all &rarr;
                      </Link>
                    </div>
                    <div className="space-y-1">
                      {aboutLinks.map((sub, sIdx) => {
                        const Icon = sub.icon;
                        return (
                          <Link 
                            key={sIdx}
                            to={sub.path} 
                            onClick={() => setDropdownOpen(null)} 
                            className="group flex items-start gap-3 p-2.5 hover:bg-sky-50/70 rounded-xl transition-colors"
                          >
                            <div className="w-8 h-8 rounded-lg bg-sky-50 text-[#0284C7] group-hover:bg-[#0284C7] group-hover:text-white flex items-center justify-center shrink-0 transition-colors mt-0.5">
                              <Icon size={16} />
                            </div>
                            <div className="min-w-0 flex-1">
                              <div className="flex items-center justify-between">
                                <p className="text-[13px] font-bold text-slate-800 group-hover:text-[#0284C7] transition-colors">
                                  {sub.title}
                                </p>
                                <ArrowRight size={12} className="text-slate-300 group-hover:text-[#0284C7] group-hover:translate-x-0.5 transition-all opacity-0 group-hover:opacity-100 shrink-0" />
                              </div>
                              <p className="text-[11px] text-slate-500 leading-snug line-clamp-1">
                                {sub.desc}
                              </p>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                </div>
              )}

              {/* COMPACT & BALANCED DROPDOWN FOR OUR SERVICES */}
              {item.dropdownId === 'services' && dropdownOpen === 'services' && (
                <div 
                  className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-[640px] z-50 animate-in fade-in slide-in-from-top-2 duration-150"
                  onMouseEnter={() => handleMouseEnter('services')}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="bg-white rounded-2xl shadow-2xl shadow-sky-950/15 border border-sky-100 overflow-hidden ring-1 ring-slate-900/5">
                    
                    {/* Header Tabs: Financial vs Properties */}
                    <div className="px-5 py-2.5 bg-gradient-to-r from-sky-50/90 via-white to-sky-50/60 border-b border-sky-100/70 flex items-center justify-between">
                      <div className="flex items-center gap-1.5 p-1 bg-slate-100/90 rounded-xl border border-slate-200/50">
                        <button
                          type="button"
                          onClick={() => setActiveServiceTab('financial')}
                          className={`flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-bold transition-all duration-200 ${
                            activeServiceTab === 'financial'
                              ? 'bg-gradient-to-r from-[#0284C7] to-[#0369A1] text-white shadow-sm'
                              : 'text-slate-600 hover:text-slate-900'
                          }`}
                        >
                          <CreditCard size={13} />
                          <span>Financial Services</span>
                          <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-bold ${
                            activeServiceTab === 'financial' ? 'bg-white/20 text-white' : 'bg-slate-200 text-slate-600'
                          }`}>9</span>
                        </button>

                        <button
                          type="button"
                          onClick={() => setActiveServiceTab('properties')}
                          className={`flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-bold transition-all duration-200 ${
                            activeServiceTab === 'properties'
                              ? 'bg-gradient-to-r from-[#0284C7] to-[#0369A1] text-white shadow-sm'
                              : 'text-slate-600 hover:text-slate-900'
                          }`}
                        >
                          <Building2 size={13} />
                          <span>Properties</span>
                          <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-bold ${
                            activeServiceTab === 'properties' ? 'bg-white/20 text-white' : 'bg-slate-200 text-slate-600'
                          }`}>5</span>
                        </button>
                      </div>

                      <Link
                        to="/services"
                        onClick={() => setDropdownOpen(null)}
                        className="inline-flex items-center gap-1 text-xs font-bold text-[#0284C7] hover:text-[#0369A1] px-2.5 py-1 rounded-lg hover:bg-sky-50 transition-colors"
                      >
                        All Services <ArrowRight size={12} />
                      </Link>
                    </div>

                    {/* Compact Scrollable Body if needed, max-h-[380px] */}
                    <div className="p-4 max-h-[380px] overflow-y-auto space-y-3.5 divide-y divide-slate-100">
                      {activeServiceTab === 'financial' ? (
                        financialGroups.map((group, gIdx) => (
                          <div key={gIdx} className={gIdx > 0 ? "pt-3 space-y-2" : "space-y-2"}>
                            <div className="flex items-center justify-between">
                              <span className="text-[11px] font-extrabold uppercase tracking-wider text-slate-500">
                                {group.title} <span className="font-normal lowercase text-slate-400">— {group.tagline}</span>
                              </span>
                            </div>

                            <div className="grid grid-cols-2 gap-2">
                              {group.items.map((sub, sIdx) => {
                                const IconComp = sub.icon;
                                return (
                                  <Link
                                    key={sIdx}
                                    to={sub.path}
                                    onClick={() => setDropdownOpen(null)}
                                    className="group flex items-start gap-2.5 p-2 rounded-xl bg-slate-50/50 hover:bg-sky-50/80 border border-transparent hover:border-sky-200 transition-all duration-150"
                                  >
                                    <div className="w-7 h-7 rounded-lg bg-sky-100/70 text-[#0284C7] group-hover:bg-[#0284C7] group-hover:text-white flex items-center justify-center shrink-0 transition-colors mt-0.5">
                                      <IconComp size={14} />
                                    </div>
                                    <div className="min-w-0 flex-1">
                                      <div className="flex items-center justify-between">
                                        <p className="text-[12px] font-bold text-slate-800 group-hover:text-[#0284C7] truncate transition-colors">
                                          {sub.name}
                                        </p>
                                        <ArrowRight size={11} className="text-slate-300 group-hover:text-[#0284C7] opacity-0 group-hover:opacity-100 shrink-0 transition-opacity" />
                                      </div>
                                      <p className="text-[10.5px] text-slate-500 leading-tight line-clamp-1">
                                        {sub.desc}
                                      </p>
                                    </div>
                                  </Link>
                                );
                              })}
                            </div>
                          </div>
                        ))
                      ) : (
                        propertiesGroups.map((group, gIdx) => (
                          <div key={gIdx} className={gIdx > 0 ? "pt-3 space-y-2" : "space-y-2"}>
                            <div className="flex items-center justify-between">
                              <span className="text-[11px] font-extrabold uppercase tracking-wider text-slate-500">
                                {group.title} <span className="font-normal lowercase text-slate-400">— {group.tagline}</span>
                              </span>
                            </div>

                            <div className="grid grid-cols-2 gap-2">
                              {group.items.map((sub, sIdx) => {
                                const IconComp = sub.icon;
                                return (
                                  <Link
                                    key={sIdx}
                                    to={sub.path}
                                    onClick={() => setDropdownOpen(null)}
                                    className="group flex items-start gap-2.5 p-2 rounded-xl bg-slate-50/50 hover:bg-sky-50/80 border border-transparent hover:border-sky-200 transition-all duration-150"
                                  >
                                    <div className="w-7 h-7 rounded-lg bg-sky-100/70 text-[#0284C7] group-hover:bg-[#0284C7] group-hover:text-white flex items-center justify-center shrink-0 transition-colors mt-0.5">
                                      <IconComp size={14} />
                                    </div>
                                    <div className="min-w-0 flex-1">
                                      <div className="flex items-center justify-between">
                                        <p className="text-[12px] font-bold text-slate-800 group-hover:text-[#0284C7] truncate transition-colors">
                                          {sub.name}
                                        </p>
                                        <ArrowRight size={11} className="text-slate-300 group-hover:text-[#0284C7] opacity-0 group-hover:opacity-100 shrink-0 transition-opacity" />
                                      </div>
                                      <p className="text-[10.5px] text-slate-500 leading-tight line-clamp-1">
                                        {sub.desc}
                                      </p>
                                    </div>
                                  </Link>
                                );
                              })}
                            </div>
                          </div>
                        ))
                      )}
                    </div>

                    {/* Bottom Micro Footer */}
                    <div className="px-5 py-2.5 bg-slate-900 text-white flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Sparkles size={13} className="text-sky-400" />
                        <p className="text-[11px] font-medium text-slate-200">Zero Processing Hassle • Instant Eligibility</p>
                      </div>
                      <Link
                        to="/contact"
                        onClick={() => setDropdownOpen(null)}
                        className="inline-flex items-center gap-1 text-[11px] font-bold text-sky-300 hover:text-white transition-colors"
                      >
                        Talk to Expert <ArrowRight size={11} />
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
                              <p className="text-[10px] font-bold text-slate-400 uppercase mt-1">Mortgage</p>
                              <Link to="/services/gold-loan" onClick={() => setIsMobileMenuOpen(false)} className="block py-0.5 text-xs text-slate-700 hover:text-[#0284C7]">Gold Loan</Link>
                              <Link to="/services/home-loan" onClick={() => setIsMobileMenuOpen(false)} className="block py-0.5 text-xs text-slate-700 hover:text-[#0284C7]">Home Loan</Link>
                              <Link to="/services/loan-against-properties" onClick={() => setIsMobileMenuOpen(false)} className="block py-0.5 text-xs text-slate-700 hover:text-[#0284C7]">Loan Against Property</Link>
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
