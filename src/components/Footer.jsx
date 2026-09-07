import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="w-full bg-[#FDFBF7] border-t border-[#E0F2FE] pt-16 pb-6 px-6 md:px-10">
      <div className="w-full px-6 lg:px-12 xl:px-16 mx-auto">

        {/* Top Section - Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">

          {/* Column 1: Logo & Info */}
          <div className="flex flex-col lg:border-r border-[#E0F2FE] pr-4">
            <Link to="/">
              <img
                src="/loanlogo.png"
                alt="HAUS NUO-Pay"
                className="h-16 w-auto object-contain mb-6 self-start"
              />
            </Link>
            <p className="text-slate-600 text-sm leading-relaxed mb-6 pr-4">
              Your trusted partner for secure and reliable housing payment solutions. Empowering your financial journey.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 mb-8">
              <a href="#" className="w-9 h-9 rounded-full border border-[#BAE6FD] flex items-center justify-center text-slate-600 hover:text-[#0EA5E9] hover:border-[#0EA5E9] transition-colors">
                <svg viewBox="0 0 320 512" fill="currentColor" className="w-4 h-4"><path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path></svg>
              </a>
              <a href="#" className="w-9 h-9 rounded-full border border-[#BAE6FD] flex items-center justify-center text-slate-600 hover:text-[#0EA5E9] hover:border-[#0EA5E9] transition-colors">
                <svg viewBox="0 0 512 512" fill="currentColor" className="w-4 h-4"><path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.6 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"></path></svg>
              </a>
              <a href="#" className="w-9 h-9 rounded-full border border-[#BAE6FD] flex items-center justify-center text-slate-600 hover:text-[#0EA5E9] hover:border-[#0EA5E9] transition-colors">
                <svg viewBox="0 0 448 512" fill="currentColor" className="w-4 h-4"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path></svg>
              </a>
              <a href="https://www.linkedin.com/in/nuog-housing-payment-s-limited-188bbb42a" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-full border border-[#BAE6FD] flex items-center justify-center text-slate-600 hover:text-[#0EA5E9] hover:border-[#0EA5E9] transition-colors" title="NUOG Housing Payment's Limited on LinkedIn">
                <svg viewBox="0 0 448 512" fill="currentColor" className="w-4 h-4"><path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z"></path></svg>
              </a>
              <a href="#" className="w-9 h-9 rounded-full border border-[#BAE6FD] flex items-center justify-center text-slate-600 hover:text-[#0EA5E9] hover:border-[#0EA5E9] transition-colors" title="YouTube">
                <svg viewBox="0 0 576 512" fill="currentColor" className="w-4 h-4"><path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"></path></svg>
              </a>
            </div>

            {/* App Download Links */}
            <div>
              <p className="text-slate-900 font-semibold text-sm mb-3">Download Our App</p>
              <div className="flex gap-3">
                <Link to="/download-app" className="bg-[#E0F2FE] hover:bg-[#BAE6FD] border border-[#BAE6FD] text-slate-900 rounded-lg p-2 flex items-center justify-center transition-colors">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M17.523 15.3414c-.0352-2.7303 2.2227-4.0416 2.327-4.1033-1.2612-1.8492-3.2185-2.1158-3.9213-2.148-1.666-.171-3.2536.9855-4.105.9855-.8516 0-2.1558-1.0028-3.5284-.9753-1.7828.0267-3.4243 1.0366-4.3418 2.6393-1.854 3.23-.4734 8.01 1.3323 10.6385.8824 1.2828 1.9168 2.73 3.2662 2.678 1.2983-.053 1.8028-.8414 3.272-.8414 1.469 0 1.9218.8414 3.2986.8155 1.4287-.027 2.33-1.3094 3.208-2.5936 1.0182-1.4925 1.4363-2.94 1.4552-3.0163-.0333-.012-2.8277-1.085-2.8628-4.0789zM15.115 6.3045c.7126-.867 1.1925-2.072 1.0617-3.2713-1.031.042-2.2858.6874-3.02 1.543-.6583.754-1.233 1.986-1.0772 3.167 1.1492.089 2.3218-.57 3.0355-1.4387z" /></svg>
                </Link>
                <Link to="/download-app" className="bg-[#E0F2FE] hover:bg-[#BAE6FD] border border-[#BAE6FD] text-slate-900 rounded-lg p-2 flex items-center justify-center transition-colors">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.523 15.3414c-.0352-2.7303 2.2227-4.0416 2.327-4.1033-1.2612-1.8492-3.2185-2.1158-3.9213-2.148-1.666-.171-3.2536.9855-4.105.9855-.8516 0-2.1558-1.0028-3.5284-.9753-1.7828.0267-3.4243 1.0366-4.3418 2.6393-1.854 3.23-.4734 8.01 1.3323 10.6385.8824 1.2828 1.9168 2.73 3.2662 2.678 1.2983-.053 1.8028-.8414 3.272-.8414 1.469 0 1.9218.8414 3.2986.8155 1.4287-.027 2.33-1.3094 3.208-2.5936 1.0182-1.4925 1.4363-2.94 1.4552-3.0163-.0333-.012-2.8277-1.085-2.8628-4.0789zM15.115 6.3045c.7126-.867 1.1925-2.072 1.0617-3.2713-1.031.042-2.2858.6874-3.02 1.543-.6583.754-1.233 1.986-1.0772 3.167 1.1492.089 2.3218-.57 3.0355-1.4387z" className="hidden" />
                    <path d="M3.195 21.056c-.328-.323-.5-.778-.5-1.332V4.276c0-.554.172-1.01.5-1.332L11.5 12l-8.305 9.056z" fill="#00f076" />
                    <path d="M15.719 16.273l-4.219-4.273 4.219-4.273 4.962 2.863c1.171.677 1.171 1.776 0 2.453l-4.962 2.863z" fill="#ffc900" />
                    <path d="M3.195 21.056l12.524-7.276-4.219-4.273L3.195 21.056z" fill="#ff3a44" />
                    <path d="M3.195 2.944l12.524 7.276-4.219 4.273L3.195 2.944z" fill="#00a0ff" />
                  </svg>
                </Link>
              </div>
            </div>

          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col">
            <h4 className="text-slate-900 font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="flex flex-col gap-3">
              <li><Link to="/about" className="text-slate-600 hover:text-[#0EA5E9] transition-colors text-sm">About Us</Link></li>
              <li><Link to="/careers" className="text-slate-600 hover:text-[#0EA5E9] transition-colors text-sm">Careers</Link></li>
              <li><Link to="/contact" className="text-slate-600 hover:text-[#0EA5E9] transition-colors text-sm">Contact Us</Link></li>
              <li><Link to="/terms" className="text-slate-600 hover:text-[#0EA5E9] transition-colors text-sm">Terms &amp; Conditions</Link></li>
              <li><Link to="/privacy" className="text-slate-600 hover:text-[#0EA5E9] transition-colors text-sm">Privacy Policy</Link></li>
              <li><Link to="/disclaimer" className="text-slate-600 hover:text-[#0EA5E9] transition-colors text-sm">Disclaimer</Link></li>
              <li><Link to="/terminated-vendors" className="text-slate-600 hover:text-[#0EA5E9] transition-colors text-sm">Terminated Vendors</Link></li>
              <li><Link to="/nach-cancellation" className="text-slate-600 hover:text-[#0EA5E9] transition-colors text-sm">NACH/eNACH Cancellation</Link></li>
            </ul>
          </div>

          {/* Column 3: Help & Support */}
          <div className="flex flex-col">
            <h4 className="text-slate-900 font-semibold text-lg mb-4">Help &amp; Support</h4>
            <ul className="flex flex-col gap-3">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-full bg-[#7DD3FC] flex items-center justify-center text-[#0284C7] shrink-0">
                  <Phone size={18} />
                </div>
                <span className="text-slate-600 text-sm">+91 9755 766 018</span>
              </div>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-full bg-[#7DD3FC] flex items-center justify-center text-[#0284C7] shrink-0">
                  <Mail size={18} />
                </div>
                <span className="text-slate-600 text-sm">haustouch@hausnuo.com</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-[#7DD3FC] flex items-center justify-center text-[#0284C7] shrink-0 mt-1">
                  <MapPin size={18} />
                </div>
                <div className="flex flex-col">
                  <span className="text-[#0EA5E9] text-xs font-bold uppercase mb-1">Registered Office</span>
                  <span className="text-slate-600 text-sm leading-relaxed">
                    Srinivas Nagar, Kapra, Dr. AS Rao Nagar, Medchal-Malkajgiri, Secunderabad, Hyderabad – 500 062, TG, India
                  </span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-[#7DD3FC] flex items-center justify-center text-[#0284C7] shrink-0 mt-1">
                  <MapPin size={18} />
                </div>
                <div className="flex flex-col">
                  <span className="text-[#0EA5E9] text-xs font-bold uppercase mb-1">Head Office</span>
                  <span className="text-slate-600 text-sm leading-relaxed">
                    2nd Floor, Main Road, South End, Ragigudda Circle, Jayanagara, 4th Block, Jayanagar, Bangaluru - 42, KR, India
                  </span>
                </div>
              </div>
            </ul>
          </div>

        </div>

          {/* Legal Disclaimer */}
          <div className="border-t border-[#E0F2FE] pt-8 mb-6 space-y-5">
            <p className="text-slate-600 text-[12px] leading-relaxed">
              <span className="text-[#0EA5E9] font-bold">HAUS NUO-Pay</span> — Use of the Technologies Digital Partner Platform Journey Built By, Operated &amp; Managed Under the Trade Name &amp; Brand Owned by{' '}
              <span className="text-slate-900 font-semibold">NuoG Housing Payment's Limited &amp; NuoG Softech Limited.</span>{' '}
              We Partner with Multiple Private Banks &amp; NBFCs Including Our NBFC Subsidiary{' '}
              <span className="text-slate-900 font-semibold">Aadi Fincash Private Limited,</span>{' '}
              to Help Fulfill the Loan Requirements of Our Customers. Please Visit{' '}
              <a href="https://hausnuo.com" target="_blank" rel="noreferrer" className="text-[#0EA5E9] hover:underline font-medium">https://hausnuo.com</a>{' '}
              for Details.
            </p>
          </div>

        {/* Bottom Section - CIN & GSTIN Row */}
        <div className="border-t border-[#E0F2FE] pt-6 pb-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-6 gap-y-2 text-xs">
            <span className="text-slate-900 font-bold">NUOG HOUSING PAYMENTS LIMITED</span>
            <span className="hidden lg:inline text-[#3a5040]">|</span>
            <span className="text-slate-700"><span className="text-[#0EA5E9] font-semibold">CIN:</span> U70200TS2025PLC202763</span>
          </div>
          <p className="text-gray-500 text-xs text-center md:text-right">
            Crafted with ❤️ by <span className="text-[#0EA5E9] hover:underline font-bold"><a href='https://digicoders.in' target='_blank'>Team Digicoders</a></span>
          </p>
        </div>

      </div>

      {/* Full Width Copyright & Links Row (Black Bar) */}
      <div className="w-full bg-[#F0F9FF] border-t border-[#E0F2FE] py-4 px-6 md:px-10">
        <div className="w-full px-6 lg:px-12 xl:px-16 mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-900 text-sm text-center md:text-left">
            Copyright © {new Date().getFullYear()} NuoG Housing Payment's Limited.
          </p>
          <div className="flex items-center flex-wrap justify-center gap-3 text-slate-900 text-sm font-medium">
            <Link to="/privacy" className="hover:text-[#0284C7] transition-colors">Privacy Policy</Link>
            <span className="text-slate-900/50">|</span>
            <Link to="/disclaimer" className="hover:text-[#0284C7] transition-colors">Disclaimer</Link>
            <span className="text-slate-900/50">|</span>
            <Link to="/sitemap" className="hover:text-[#0284C7] transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
