import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const ContactForm = () => {
  return (
    <section className="w-full bg-[#fcfcfc] py-16 px-6 md:px-10">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-16 items-start">
        
        {/* Left Side - Info */}
        <div className="w-full lg:w-[40%] flex flex-col">
          <h1 className="text-3xl md:text-[40px] font-bold text-gray-900 mb-6 leading-tight">
            Contact Us
          </h1>
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            Let's Talk About Your Financial Goals
          </h2>
          <p className="text-gray-500 text-[14px] leading-relaxed mb-10 max-w-[280px]">
            We are here to help you understand your financial solutions. Connect with us.
          </p>

          <div className="flex flex-col gap-8 mb-10">
            <div>
              <p className="text-gray-400 font-semibold text-[12px] uppercase tracking-wider mb-3">GET IN TOUCH</p>
              
              <div className="flex flex-col gap-5">
                <div className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-full bg-[#f4fdf5] border border-[#e8fbe9] flex items-center justify-center text-[#5bc116] group-hover:bg-[#5bc116] group-hover:text-white transition-colors shrink-0">
                    <Phone size={18} />
                  </div>
                  <span className="text-gray-700 font-medium text-[15px]">+91 98765 43210</span>
                </div>
                
                <div className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-full bg-[#f4fdf5] border border-[#e8fbe9] flex items-center justify-center text-[#5bc116] group-hover:bg-[#5bc116] group-hover:text-white transition-colors shrink-0">
                    <Mail size={18} />
                  </div>
                  <span className="text-gray-700 font-medium text-[15px]">support@finprop.com</span>
                </div>
                
                <div className="flex items-start gap-4 group">
                  <div className="w-10 h-10 rounded-full bg-[#f4fdf5] border border-[#e8fbe9] flex items-center justify-center text-[#5bc116] group-hover:bg-[#5bc116] group-hover:text-white transition-colors shrink-0 mt-1">
                    <MapPin size={18} />
                  </div>
                  <span className="text-gray-700 font-medium text-[15px] leading-relaxed max-w-[200px]">
                    123, Finance Street, Lucknow, Uttar Pradesh - 226001
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div>
            <p className="text-gray-400 font-semibold text-[12px] uppercase tracking-wider mb-4">FOLLOW US</p>
            <div className="flex items-center gap-3">
              <Link to="#" className="w-9 h-9 rounded-full bg-[#0b0f0e] flex items-center justify-center text-white hover:bg-[#5bc116] transition-colors">
                <svg viewBox="0 0 320 512" fill="currentColor" className="w-4 h-4">
                  <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path>
                </svg>
              </Link>
              <Link to="#" className="w-9 h-9 rounded-full bg-[#0b0f0e] flex items-center justify-center text-white hover:bg-[#5bc116] transition-colors">
                <svg viewBox="0 0 512 512" fill="currentColor" className="w-4 h-4">
                  <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.6 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"></path>
                </svg>
              </Link>
              <Link to="#" className="w-9 h-9 rounded-full bg-[#0b0f0e] flex items-center justify-center text-white hover:bg-[#5bc116] transition-colors">
                <svg viewBox="0 0 448 512" fill="currentColor" className="w-4 h-4">
                  <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
                </svg>
              </Link>
              <Link to="#" className="w-9 h-9 rounded-full bg-[#0b0f0e] flex items-center justify-center text-white hover:bg-[#5bc116] transition-colors">
                <svg viewBox="0 0 448 512" fill="currentColor" className="w-4 h-4">
                  <path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z"></path>
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="w-full lg:w-[60%]">
          <form className="bg-white rounded-3xl p-8 md:p-10 shadow-lg border border-gray-100 flex flex-col gap-6">
            
            <div className="flex flex-col md:flex-row gap-6">
              <div className="w-full">
                <label className="block text-gray-600 text-[13px] font-medium mb-2">First Name</label>
                <input type="text" placeholder="Enter First Name" className="w-full bg-[#f9f9f9] border border-gray-200 rounded-xl px-4 py-3 text-[14px] focus:outline-none focus:border-[#5bc116] focus:ring-1 focus:ring-[#5bc116] transition-all" />
              </div>
              <div className="w-full">
                <label className="block text-gray-600 text-[13px] font-medium mb-2">Last Name</label>
                <input type="text" placeholder="Enter Last Name" className="w-full bg-[#f9f9f9] border border-gray-200 rounded-xl px-4 py-3 text-[14px] focus:outline-none focus:border-[#5bc116] focus:ring-1 focus:ring-[#5bc116] transition-all" />
              </div>
            </div>

            <div className="w-full">
              <label className="block text-gray-600 text-[13px] font-medium mb-2">Email Address</label>
              <input type="email" placeholder="Enter Email Address" className="w-full bg-[#f9f9f9] border border-gray-200 rounded-xl px-4 py-3 text-[14px] focus:outline-none focus:border-[#5bc116] focus:ring-1 focus:ring-[#5bc116] transition-all" />
            </div>

            <div className="w-full">
              <label className="block text-gray-600 text-[13px] font-medium mb-2">Property Type</label>
              <select className="w-full bg-[#f9f9f9] border border-gray-200 rounded-xl px-4 py-3 text-[14px] text-gray-600 focus:outline-none focus:border-[#5bc116] focus:ring-1 focus:ring-[#5bc116] transition-all appearance-none cursor-pointer">
                <option>Select Property Type</option>
                <option>Residential</option>
                <option>Commercial</option>
              </select>
            </div>

            <div className="w-full">
              <label className="block text-gray-600 text-[13px] font-medium mb-2">Financial Requirement</label>
              <select className="w-full bg-[#f9f9f9] border border-gray-200 rounded-xl px-4 py-3 text-[14px] text-gray-600 focus:outline-none focus:border-[#5bc116] focus:ring-1 focus:ring-[#5bc116] transition-all appearance-none cursor-pointer">
                <option>Select Requirement</option>
                <option>Home Loan</option>
                <option>Loan Against Property</option>
                <option>Construction Finance</option>
              </select>
            </div>

            <div className="w-full">
              <label className="block text-gray-600 text-[13px] font-medium mb-2">Message</label>
              <textarea rows="4" placeholder="Type your message here..." className="w-full bg-[#f9f9f9] border border-gray-200 rounded-xl px-4 py-3 text-[14px] focus:outline-none focus:border-[#5bc116] focus:ring-1 focus:ring-[#5bc116] transition-all resize-none"></textarea>
            </div>

            <button type="button" className="w-full bg-[#0b0f0e] hover:bg-gray-800 text-white font-bold py-3.5 rounded-xl transition-all shadow-md mt-2">
              Submit Enquiry
            </button>
            
          </form>
        </div>

      </div>
    </section>
  );
};

export default ContactForm;
