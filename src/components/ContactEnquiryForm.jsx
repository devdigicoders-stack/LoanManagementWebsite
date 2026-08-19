import React from 'react';
import { Send, User, Phone, Mail, MapPin, IndianRupee, MessageSquare, Briefcase, Home, ShieldCheck } from 'lucide-react';

const ContactEnquiryForm = () => {
  return (
    <section className="w-full bg-white py-24 px-6 md:px-10 border-b border-gray-100">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-20">
        
        {/* Left Side - Text Content */}
        <div className="w-full lg:w-5/12">
          <div className="inline-flex items-center gap-2 text-[#5bc116] mb-6">
            <span className="text-sm font-bold tracking-widest uppercase">Send Us An Enquiry</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Tell Us What <br className="hidden lg:block"/> You <span className="text-[#5bc116]">Need</span>
          </h2>
          <p className="text-gray-600 text-[16px] leading-relaxed mb-8">
            Fill out the enquiry form and share some basic information about your requirement. Our team can review your enquiry and assist you through the appropriate process.
          </p>

          <div className="bg-[#f4fdf5] border border-[#e8fbe9] p-8 rounded-3xl mt-10">
            <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
              <ShieldCheck size={20} className="text-[#5bc116]" /> 
              Secure & Confidential
            </h4>
            <p className="text-gray-600 text-[14px] leading-relaxed">
              Your details are secure with us. We use this information only to evaluate your requirement and connect you with the right financial solutions.
            </p>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="w-full lg:w-7/12">
          <div className="bg-white p-8 md:p-10 rounded-3xl border border-gray-100 shadow-[0_8px_30px_rgba(0,0,0,0.04)]">
            <form className="space-y-6">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[14px] font-bold text-gray-700 ml-1">Full Name</label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                    <input type="text" placeholder="Enter your full name" className="w-full pl-11 pr-4 py-3 bg-[#fcfcfc] border border-gray-200 rounded-xl focus:outline-none focus:border-[#5bc116] focus:ring-1 focus:ring-[#5bc116] transition-all" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[14px] font-bold text-gray-700 ml-1">Mobile Number</label>
                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                    <input type="tel" placeholder="Enter your mobile number" className="w-full pl-11 pr-4 py-3 bg-[#fcfcfc] border border-gray-200 rounded-xl focus:outline-none focus:border-[#5bc116] focus:ring-1 focus:ring-[#5bc116] transition-all" />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[14px] font-bold text-gray-700 ml-1">Email Address</label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                  <input type="email" placeholder="Enter your email address" className="w-full pl-11 pr-4 py-3 bg-[#fcfcfc] border border-gray-200 rounded-xl focus:outline-none focus:border-[#5bc116] focus:ring-1 focus:ring-[#5bc116] transition-all" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[14px] font-bold text-gray-700 ml-1">Property Type</label>
                  <div className="relative">
                    <Home className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                    <select defaultValue="" className="w-full pl-11 pr-4 py-3 bg-[#fcfcfc] border border-gray-200 rounded-xl focus:outline-none focus:border-[#5bc116] focus:ring-1 focus:ring-[#5bc116] transition-all appearance-none text-gray-600">
                      <option value="" disabled>Select your property type</option>
                      <option value="Residential Property">Residential Property</option>
                      <option value="Commercial Property">Commercial Property</option>
                      <option value="Plot / Land">Plot / Land</option>
                      <option value="Under Construction Property">Under Construction Property</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[14px] font-bold text-gray-700 ml-1">Financial Requirement</label>
                  <div className="relative">
                    <Briefcase className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                    <select defaultValue="" className="w-full pl-11 pr-4 py-3 bg-[#fcfcfc] border border-gray-200 rounded-xl focus:outline-none focus:border-[#5bc116] focus:ring-1 focus:ring-[#5bc116] transition-all appearance-none text-gray-600">
                      <option value="" disabled>Select your requirement</option>
                      <option value="Home Loan">Home Loan</option>
                      <option value="Loan Against Property">Loan Against Property</option>
                      <option value="Property Purchase">Property Purchase</option>
                      <option value="Construction Finance">Construction Finance</option>
                      <option value="Home Renovation">Home Renovation</option>
                      <option value="Commercial Property Finance">Commercial Property Finance</option>
                      <option value="Business Finance">Business Finance</option>
                      <option value="General Enquiry">General Enquiry</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[14px] font-bold text-gray-700 ml-1">Property Location</label>
                <div className="relative">
                  <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                  <input type="text" placeholder="Enter the city or location of your property" className="w-full pl-11 pr-4 py-3 bg-[#fcfcfc] border border-gray-200 rounded-xl focus:outline-none focus:border-[#5bc116] focus:ring-1 focus:ring-[#5bc116] transition-all" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[14px] font-bold text-gray-700 ml-1">Estimated Property Value</label>
                  <div className="relative">
                    <IndianRupee className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                    <input type="text" placeholder="Approximate value" className="w-full pl-11 pr-4 py-3 bg-[#fcfcfc] border border-gray-200 rounded-xl focus:outline-none focus:border-[#5bc116] focus:ring-1 focus:ring-[#5bc116] transition-all" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[14px] font-bold text-gray-700 ml-1">Required Loan Amount</label>
                  <div className="relative">
                    <IndianRupee className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                    <input type="text" placeholder="Approximate amount" className="w-full pl-11 pr-4 py-3 bg-[#fcfcfc] border border-gray-200 rounded-xl focus:outline-none focus:border-[#5bc116] focus:ring-1 focus:ring-[#5bc116] transition-all" />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[14px] font-bold text-gray-700 ml-1">Message</label>
                <div className="relative">
                  <MessageSquare className="absolute left-4 top-4 text-gray-400" size={18} />
                  <textarea rows="4" placeholder="Tell us more about your requirement or question" className="w-full pl-11 pr-4 py-3 bg-[#fcfcfc] border border-gray-200 rounded-xl focus:outline-none focus:border-[#5bc116] focus:ring-1 focus:ring-[#5bc116] transition-all resize-none"></textarea>
                </div>
              </div>

              <button type="button" className="w-full bg-[#0b0f0e] text-[#5bc116] font-bold text-[16px] py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-[#1a241c] transition-colors mt-4">
                Submit Enquiry <Send size={18} />
              </button>

            </form>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ContactEnquiryForm;
