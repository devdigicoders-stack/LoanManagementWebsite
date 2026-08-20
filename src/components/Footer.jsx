import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="w-full bg-[#0b0f0e] border-t border-[#1a241c] pt-16 pb-6 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        
        {/* Top Section - Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Column 1: Logo & Info */}
          <div className="flex flex-col lg:border-r border-[#1a241c] pr-4">
            <Link to="/">
              <img 
                src="/loanlogo.png" 
                alt="NGM Housing Payment's Limited" 
                className="h-16 w-auto object-contain mb-6 self-start"
              />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6 pr-4">
              Your trusted partner for secure and reliable housing payment solutions. Empowering your financial journey.
            </p>
            
            {/* Social Icons */}
            <div className="flex items-center gap-3 mb-8">
              <a href="#" className="w-9 h-9 rounded-full border border-[#2d3a30] flex items-center justify-center text-gray-400 hover:text-[#5bc116] hover:border-[#5bc116] transition-colors">
                <svg viewBox="0 0 320 512" fill="currentColor" className="w-4 h-4"><path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path></svg>
              </a>
              <a href="#" className="w-9 h-9 rounded-full border border-[#2d3a30] flex items-center justify-center text-gray-400 hover:text-[#5bc116] hover:border-[#5bc116] transition-colors">
                <svg viewBox="0 0 512 512" fill="currentColor" className="w-4 h-4"><path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.6 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"></path></svg>
              </a>
              <a href="#" className="w-9 h-9 rounded-full border border-[#2d3a30] flex items-center justify-center text-gray-400 hover:text-[#5bc116] hover:border-[#5bc116] transition-colors">
                <svg viewBox="0 0 448 512" fill="currentColor" className="w-4 h-4"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path></svg>
              </a>
              <a href="https://www.linkedin.com/in/nuog-housing-payment-s-limited-188bbb42a" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-full border border-[#2d3a30] flex items-center justify-center text-gray-400 hover:text-[#5bc116] hover:border-[#5bc116] transition-colors" title="NUOG Housing Payment's Limited on LinkedIn">
                <svg viewBox="0 0 448 512" fill="currentColor" className="w-4 h-4"><path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z"></path></svg>
              </a>
            </div>

            {/* App Download Links */}
            <div>
              <p className="text-white font-semibold text-sm mb-3">Download Our App</p>
              <div className="flex gap-3">
                <Link to="/download-app" className="bg-[#1a241c] hover:bg-[#2d3a30] border border-[#2d3a30] text-white rounded-lg p-2 flex items-center justify-center transition-colors">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M17.523 15.3414c-.0352-2.7303 2.2227-4.0416 2.327-4.1033-1.2612-1.8492-3.2185-2.1158-3.9213-2.148-1.666-.171-3.2536.9855-4.105.9855-.8516 0-2.1558-1.0028-3.5284-.9753-1.7828.0267-3.4243 1.0366-4.3418 2.6393-1.854 3.23-.4734 8.01 1.3323 10.6385.8824 1.2828 1.9168 2.73 3.2662 2.678 1.2983-.053 1.8028-.8414 3.272-.8414 1.469 0 1.9218.8414 3.2986.8155 1.4287-.027 2.33-1.3094 3.208-2.5936 1.0182-1.4925 1.4363-2.94 1.4552-3.0163-.0333-.012-2.8277-1.085-2.8628-4.0789zM15.115 6.3045c.7126-.867 1.1925-2.072 1.0617-3.2713-1.031.042-2.2858.6874-3.02 1.543-.6583.754-1.233 1.986-1.0772 3.167 1.1492.089 2.3218-.57 3.0355-1.4387z" /></svg>
                </Link>
                <Link to="/download-app" className="bg-[#1a241c] hover:bg-[#2d3a30] border border-[#2d3a30] text-white rounded-lg p-2 flex items-center justify-center transition-colors">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.523 15.3414c-.0352-2.7303 2.2227-4.0416 2.327-4.1033-1.2612-1.8492-3.2185-2.1158-3.9213-2.148-1.666-.171-3.2536.9855-4.105.9855-.8516 0-2.1558-1.0028-3.5284-.9753-1.7828.0267-3.4243 1.0366-4.3418 2.6393-1.854 3.23-.4734 8.01 1.3323 10.6385.8824 1.2828 1.9168 2.73 3.2662 2.678 1.2983-.053 1.8028-.8414 3.272-.8414 1.469 0 1.9218.8414 3.2986.8155 1.4287-.027 2.33-1.3094 3.208-2.5936 1.0182-1.4925 1.4363-2.94 1.4552-3.0163-.0333-.012-2.8277-1.085-2.8628-4.0789zM15.115 6.3045c.7126-.867 1.1925-2.072 1.0617-3.2713-1.031.042-2.2858.6874-3.02 1.543-.6583.754-1.233 1.986-1.0772 3.167 1.1492.089 2.3218-.57 3.0355-1.4387z" className="hidden"/>
                    <path d="M3.195 21.056c-.328-.323-.5-.778-.5-1.332V4.276c0-.554.172-1.01.5-1.332L11.5 12l-8.305 9.056z" fill="#00f076"/>
                    <path d="M15.719 16.273l-4.219-4.273 4.219-4.273 4.962 2.863c1.171.677 1.171 1.776 0 2.453l-4.962 2.863z" fill="#ffc900"/>
                    <path d="M3.195 21.056l12.524-7.276-4.219-4.273L3.195 21.056z" fill="#ff3a44"/>
                    <path d="M3.195 2.944l12.524 7.276-4.219 4.273L3.195 2.944z" fill="#00a0ff"/>
                  </svg>
                </Link>
              </div>
            </div>

          </div>
          
          {/* Column 2: Products */}
          <div className="flex flex-col lg:pl-8">
            <h4 className="text-white font-semibold text-lg mb-6">Our Products</h4>
            <ul className="flex flex-col gap-4">
              <li><Link to="/services/home-loan" className="text-gray-400 hover:text-[#5bc116] transition-colors text-sm">Home Loan</Link></li>
              <li><Link to="/services/car-loan" className="text-gray-400 hover:text-[#5bc116] transition-colors text-sm">Car Loan</Link></li>
              <li><Link to="/services/sme-loan" className="text-gray-400 hover:text-[#5bc116] transition-colors text-sm">SME / MSME Loan</Link></li>
              <li><Link to="/services/loan-against-property" className="text-gray-400 hover:text-[#5bc116] transition-colors text-sm">Loan Against Property</Link></li>
              <li><Link to="/services/two-wheeler" className="text-gray-400 hover:text-[#5bc116] transition-colors text-sm">Two Wheeler Loan</Link></li>
              <li><Link to="/services/commercial-vehicle" className="text-gray-400 hover:text-[#5bc116] transition-colors text-sm">Commercial Vehicle</Link></li>
            </ul>
          </div>

          {/* Column 3: Quick Links & Important Links */}
          <div className="flex flex-col">
            <h4 className="text-white font-semibold text-lg mb-6">Quick Links</h4>
            <ul className="flex flex-col gap-4">
              <li><Link to="/about" className="text-gray-400 hover:text-[#5bc116] transition-colors text-sm">About Us</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-[#5bc116] transition-colors text-sm">Contact Us</Link></li>
              <li><Link to="/terms" className="text-gray-400 hover:text-[#5bc116] transition-colors text-sm">Terms &amp; Conditions</Link></li>
              <li><Link to="/privacy" className="text-gray-400 hover:text-[#5bc116] transition-colors text-sm">Privacy Policy</Link></li>
              <li><Link to="/disclaimer" className="text-gray-400 hover:text-[#5bc116] transition-colors text-sm">Disclaimer</Link></li>
              <li><Link to="/advisory" className="text-gray-400 hover:text-[#5bc116] transition-colors text-sm">Advisory Note</Link></li>
              <li><Link to="/cancellation" className="text-gray-400 hover:text-[#5bc116] transition-colors text-sm">NACH/eNACH Cancellation</Link></li>
              <li><Link to="/refund" className="text-gray-400 hover:text-[#5bc116] transition-colors text-sm">Refund Policy</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact Us */}
          <div className="flex flex-col">
            <h4 className="text-white font-semibold text-lg mb-6">Contact Us</h4>
            <ul className="flex flex-col gap-5">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-[#11240c] flex items-center justify-center text-[#1cf200] shrink-0">
                  <Phone size={18} />
                </div>
                <span className="text-gray-400 text-sm">+91 9755 766 018</span>
              </div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-[#11240c] flex items-center justify-center text-[#1cf200] shrink-0">
                  <Mail size={18} />
                </div>
                <span className="text-gray-400 text-sm">haustouch@hausnuo.com</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-[#11240c] flex items-center justify-center text-[#1cf200] shrink-0 mt-1">
                  <MapPin size={18} />
                </div>
                <span className="text-gray-400 text-sm leading-relaxed">
                  Srinivas Nagar, Kapra, Dr. AS Rao Nagar, Medchal-Malkajgiri, Secunderabad, Hyderabad – 500 062, TG, India
                </span>
              </div>
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
              Srinivas Nagar, Kapra, Dr. AS Rao Nagar, Medchal-Malkajgiri, Secunderabad, Hyderabad – 500 062, TG, India<br/>
              CIN: U70200TS2025PLC202763
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-4 text-sm mt-3 md:mt-0">
              <span><span className="text-gray-300 font-semibold">M:</span> <a href="tel:+919755766018" className="text-[#1cf200] hover:underline">+91 9755 766 018</a></span>
              <span className="hidden sm:block text-gray-700">|</span>
              <span><span className="text-gray-300 font-semibold">e-M:</span> <a href="mailto:haustouch@hausnuo.com" className="text-[#1cf200] hover:underline">haustouch@hausnuo.com</a></span>
            </div>
          </div>

        </div>

        {/* Bottom Section - CIN & GSTIN Row */}
        <div className="border-t border-[#1a241c] pt-6 pb-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-6 gap-y-2 text-xs">
            <span className="text-white font-bold">NUOG HOUSING PAYMENTS LIMITED <span className="text-[#5bc116]">(HAUS NUO-Pay)</span></span>
            <span className="hidden lg:inline text-[#3a5040]">|</span>
            <span className="text-gray-300"><span className="text-[#5bc116] font-semibold">CIN:</span> U70200TS2025PLC202763</span>
            <span className="hidden lg:inline text-[#3a5040]">|</span>
            <span className="text-gray-300"><span className="text-[#5bc116] font-semibold">GSTIN:</span> 22AAKCN7722G1ZJ</span>
          </div>
          <p className="text-gray-500 text-xs text-center md:text-right">
            Crafted with ❤️ by <span className="text-[#5bc116] hover:underline font-bold"><a href='https://digicoders.in' target='_blank'>Team Digicoders</a></span>
          </p>
        </div>

      </div>

      {/* Full Width Copyright & Links Row (Black Bar) */}
      <div className="w-full bg-[#050806] border-t border-[#1a2e1d] py-4 px-6 md:px-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white text-sm text-center md:text-left">
            Copyright © {new Date().getFullYear()} NuoG Housing Payment's Limited.
          </p>
          <div className="flex items-center flex-wrap justify-center gap-3 text-white text-sm font-medium">
            <Link to="/privacy" className="hover:text-[#1cf200] transition-colors">Privacy Policy</Link>
            <span className="text-white/50">|</span>
            <Link to="/disclaimer" className="hover:text-[#1cf200] transition-colors">Disclaimer</Link>
            <span className="text-white/50">|</span>
            <Link to="/sitemap" className="hover:text-[#1cf200] transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
