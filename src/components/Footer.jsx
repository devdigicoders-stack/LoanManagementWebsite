import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="w-full bg-[#0b0f0e] border-t border-[#1a241c] pt-16 pb-6 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        
        {/* Top Section - Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Column 1: Logo & Info */}
          <div className="flex flex-col pr-4 lg:border-r border-[#1a241c]">
            <Link to="/">
              <img 
                src="/loanlogo.png" 
                alt="NGM Housing Payment's Limited" 
                className="h-16 w-auto object-contain mb-6 self-start"
              />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-8 pr-4">
              Your trusted partner for secure and reliable housing payment solutions.
            </p>
            
            {/* Social Icons */}
            <div className="flex items-center gap-3">
              <a href="#" className="w-9 h-9 rounded-full border border-[#2d3a30] flex items-center justify-center text-gray-400 hover:text-[#5bc116] hover:border-[#5bc116] transition-colors">
                <svg viewBox="0 0 320 512" fill="currentColor" className="w-4 h-4">
                  <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path>
                </svg>
              </a>
              <a href="#" className="w-9 h-9 rounded-full border border-[#2d3a30] flex items-center justify-center text-gray-400 hover:text-[#5bc116] hover:border-[#5bc116] transition-colors">
                <svg viewBox="0 0 512 512" fill="currentColor" className="w-4 h-4">
                  <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.6 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"></path>
                </svg>
              </a>
              <a href="#" className="w-9 h-9 rounded-full border border-[#2d3a30] flex items-center justify-center text-gray-400 hover:text-[#5bc116] hover:border-[#5bc116] transition-colors">
                <svg viewBox="0 0 448 512" fill="currentColor" className="w-4 h-4">
                  <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/nuog-housing-payment-s-limited-188bbb42a" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-full border border-[#2d3a30] flex items-center justify-center text-gray-400 hover:text-[#5bc116] hover:border-[#5bc116] transition-colors" title="NUOG Housing Payment's Limited on LinkedIn">
                <svg viewBox="0 0 448 512" fill="currentColor" className="w-4 h-4">
                  <path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z"></path>
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col lg:pl-8">
            <h4 className="text-white font-semibold text-lg mb-6">Quick Links</h4>
            <ul className="flex flex-col gap-4">
              <li><Link to="/" className="text-gray-400 hover:text-[#5bc116] transition-colors text-sm">Home</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-[#5bc116] transition-colors text-sm">About Us</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-[#5bc116] transition-colors text-sm">Our Services</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-[#5bc116] transition-colors text-sm">Contact Us</Link></li>
              <li><Link to="/download-app" className="text-gray-400 hover:text-[#5bc116] transition-colors text-sm">Download App</Link></li>
            </ul>
          </div>

          {/* Column 3: Important Links */}
          <div className="flex flex-col">
            <h4 className="text-white font-semibold text-lg mb-6">Important Links</h4>
            <ul className="flex flex-col gap-4">
              <li><Link to="/terms" className="text-gray-400 hover:text-[#5bc116] transition-colors text-sm">Terms &amp; Conditions</Link></li>
              <li><Link to="/privacy" className="text-gray-400 hover:text-[#5bc116] transition-colors text-sm">Privacy &amp; Policies</Link></li>
              <li><Link to="/refund-policy" className="text-gray-400 hover:text-[#5bc116] transition-colors text-sm">Refund &amp; Cancellation Policy</Link></li>
              <li><Link to="/enach-cancellation" className="text-gray-400 hover:text-[#5bc116] transition-colors text-sm">eNACH Cancellation</Link></li>
              <li><Link to="/disclaimer" className="text-gray-400 hover:text-[#5bc116] transition-colors text-sm">Disclaimer</Link></li>
              <li><Link to="/advisory" className="text-gray-400 hover:text-[#5bc116] transition-colors text-sm">Advisory Note</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact Us */}
          <div className="flex flex-col">
            <h4 className="text-white font-semibold text-lg mb-6">Contact Us</h4>
            <ul className="flex flex-col gap-5">
              <li className="flex items-start gap-4">
                <Phone className="text-[#5bc116] mt-0.5 shrink-0" size={18} />
                <span className="text-gray-400 text-sm">+91 1234567890</span>
              </li>
              <li className="flex items-start gap-4">
                <Mail className="text-[#5bc116] mt-0.5 shrink-0" size={18} />
                <span className="text-gray-400 text-sm">info@ngmhousing.com</span>
              </li>
              <li className="flex items-start gap-4">
                <MapPin className="text-[#5bc116] mt-0.5 shrink-0" size={18} />
                <span className="text-gray-400 text-sm leading-relaxed">
                  123, New Street, City,<br />Country - 000000
                </span>
              </li>
            </ul>
          </div>

        </div>

        {/* Legal Disclaimer & Registered Office */}
        <div className="border-t border-[#1a241c] pt-8 mb-6 space-y-5">
          
          {/* Disclaimer Text */}
          <p className="text-gray-400 text-[12px] leading-relaxed">
            <span className="text-[#5bc116] font-bold">HAUS NUO-Pay</span> — Use of the Technologies Digital Partner Platform Journey Built By, Operated &amp; Managed Under the Trade Name &amp; Brand Owned by{' '}
            <span className="text-white font-semibold">NuoG Housing Payment's Limited &amp; NuoG Softech Limited.</span>{' '}
            We Partner with Multiple Private Banks &amp; NBFCs Including Our NBFC Subsidiary{' '}
            <span className="text-white font-semibold">Aadi Fincash Private Limited,</span>{' '}
            to Help Fulfill the Loan Requirements of Our Customers. Please Visit{' '}
            <a href="https://hausnuo.com" target="_blank" rel="noreferrer" className="text-[#5bc116] hover:underline font-medium">https://hausnuo.com</a>{' '}
            for Details.
          </p>

          {/* Registered Office */}
          <div className="bg-[#0e1712] border border-[#1a241c] rounded-xl px-5 py-4 flex flex-col md:flex-row md:items-start gap-4">
            <div className="shrink-0">
              <span className="text-[10px] font-bold tracking-widest uppercase text-[#5bc116] border border-[#5bc116]/30 bg-[#5bc116]/10 px-2 py-1 rounded">Registered Office</span>
            </div>
            <div className="text-[12px] text-gray-400 leading-relaxed">
              <span className="text-white font-semibold">NuoG Housing Payment's Limited </span>
              <span className="text-[#5bc116]">(HAUS NUO-Pay)</span>
              <br />
              Srinivas Nagar, Kapra, Dr. AS Rao Nagar, Medchal-Malkajgiri, Secunderabad, Hyderabad – 500 062, TG, India
              <br />
              <span className="inline-flex flex-wrap gap-x-4 mt-2 gap-y-1">
                <span><span className="text-gray-300 font-semibold">M:</span> <a href="tel:+919755766018" className="text-[#5bc116] hover:underline">+91 9755 766 018</a></span>
                <span className="text-[#1a241c]">|</span>
                <span><span className="text-gray-300 font-semibold">e-M:</span> <a href="mailto:haustouch@hausnuo.com" className="text-[#5bc116] hover:underline">haustouch@hausnuo.com</a></span>
                <span className="text-[#1a241c]">|</span>
                <span><span className="text-gray-300 font-semibold">CIN:</span> <span className="text-gray-300">U70200TS2025PLC202763</span></span>
              </span>
            </div>
          </div>

        </div>

        {/* Bottom Section - Copyright */}
        <div className="border-t border-[#1a241c] pt-6 flex flex-col gap-4">
          
          {/* CIN & GSTIN Row */}
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs border-b border-[#1e2e21] pb-4">
            <span className="text-white font-bold">NUOG HOUSING PAYMENTS LIMITED <span className="text-[#5bc116]">(HAUS NUO-Pay)</span></span>
            <span className="hidden md:inline text-[#3a5040]">|</span>
            <span className="text-gray-300"><span className="text-[#5bc116] font-semibold">CIN:</span> U70200TS2025PLC202763</span>
            <span className="hidden md:inline text-[#3a5040]">|</span>
            <span className="text-gray-300"><span className="text-[#5bc116] font-semibold">GSTIN:</span> 22AAKCN7722G1ZJ</span>
          </div>

          {/* Copyright & Links Row */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-xs text-center md:text-left">
              © 2026 NGM Housing Payment's Limited. All Rights Reserved. Crafted with ❤️ by <span className="text-[#5bc116] hover:underline font-bold"><a href='https://digicoders.in' target='_blank'>Team Digicoders</a></span>
            </p>
            <div className="flex items-center gap-6">
              <Link to="/terms" className="text-gray-500 hover:text-[#5bc116] transition-colors text-xs">Terms &amp; Conditions</Link>
              <Link to="/privacy" className="text-gray-500 hover:text-[#5bc116] transition-colors text-xs">Privacy &amp; Policies</Link>
            </div>
          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;
