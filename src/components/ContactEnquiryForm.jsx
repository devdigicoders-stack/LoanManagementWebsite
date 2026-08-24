import React from 'react';
import { Send, User, Phone, Mail, MapPin, MessageSquare, Briefcase, ShieldCheck } from 'lucide-react';

const ContactEnquiryForm = () => {
  return (
    <section className="w-full bg-white py-24 px-6 md:px-10 border-b border-gray-100">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-20">
        
        {/* Left Side - Text Content */}
        <div className="w-full lg:w-5/12">
          <div className="inline-flex items-center gap-2 text-[#0EA5E9] mb-6">
            <span className="text-sm font-bold tracking-widest uppercase">Send Us An Enquiry</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            How can we <br className="hidden lg:block"/> help <span className="text-[#0EA5E9]">you?</span>
          </h2>
          <p className="text-gray-600 text-[16px] leading-relaxed mb-8">
            Fill out the form below and our team will get back to you shortly with the best financial solutions tailored for you.
          </p>

          <div className="bg-[#F8FAFC] border border-[#E0F2FE] p-8 rounded-3xl mt-10">
            <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
              <ShieldCheck size={20} className="text-[#0EA5E9]" /> 
              Secure & Confidential
            </h4>
            <p className="text-gray-600 text-[14px] leading-relaxed">
              Your details are completely safe with us. We ensure the highest standards of data privacy.
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
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-600" size={18} />
                    <input type="text" placeholder="Enter your full name" className="w-full pl-11 pr-4 py-3 bg-[#fcfcfc] border border-gray-200 rounded-xl text-gray-900 placeholder:text-slate-600 focus:outline-none focus:border-[#0EA5E9] focus:ring-1 focus:ring-[#0EA5E9] transition-all" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[14px] font-bold text-gray-700 ml-1">Mobile Number</label>
                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-600" size={18} />
                    <input type="tel" placeholder="Enter your mobile number" className="w-full pl-11 pr-4 py-3 bg-[#fcfcfc] border border-gray-200 rounded-xl text-gray-900 placeholder:text-slate-600 focus:outline-none focus:border-[#0EA5E9] focus:ring-1 focus:ring-[#0EA5E9] transition-all" />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[14px] font-bold text-gray-700 ml-1">Email Address</label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-600" size={18} />
                    <input type="email" placeholder="Enter your email address" className="w-full pl-11 pr-4 py-3 bg-[#fcfcfc] border border-gray-200 rounded-xl text-gray-900 placeholder:text-slate-600 focus:outline-none focus:border-[#0EA5E9] focus:ring-1 focus:ring-[#0EA5E9] transition-all" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-[14px] font-bold text-gray-700 ml-1">City / Location</label>
                  <div className="relative">
                    <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-600" size={18} />
                    <input type="text" placeholder="Enter your city" className="w-full pl-11 pr-4 py-3 bg-[#fcfcfc] border border-gray-200 rounded-xl text-gray-900 placeholder:text-slate-600 focus:outline-none focus:border-[#0EA5E9] focus:ring-1 focus:ring-[#0EA5E9] transition-all" />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[14px] font-bold text-gray-700 ml-1">Service / Product Enquiry</label>
                <div className="relative">
                  <Briefcase className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-600" size={18} />
                  <select defaultValue="" className="w-full pl-11 pr-4 py-3 bg-[#fcfcfc] border border-gray-200 rounded-xl focus:outline-none focus:border-[#0EA5E9] focus:ring-1 focus:ring-[#0EA5E9] transition-all appearance-none text-gray-600">
                    <option value="" disabled>Select a service</option>
                    <option value="Vehicle Loan">Vehicle Loan</option>
                    <option value="Home Loan">Home Loan</option>
                    <option value="SME/Business Loan">SME/Business Loan</option>
                    <option value="Other">Other Query</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[14px] font-bold text-gray-700 ml-1">Message</label>
                <div className="relative">
                  <MessageSquare className="absolute left-4 top-4 text-slate-600" size={18} />
                  <textarea rows="4" placeholder="How can we help you?" className="w-full pl-11 pr-4 py-3 bg-[#fcfcfc] border border-gray-200 rounded-xl text-gray-900 placeholder:text-slate-600 focus:outline-none focus:border-[#0EA5E9] focus:ring-1 focus:ring-[#0EA5E9] transition-all resize-none"></textarea>
                </div>
              </div>

              <button type="button" className="w-full bg-[#FDFBF7] text-[#0EA5E9] font-bold text-[16px] py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-[#E0F2FE] transition-colors mt-4">
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
