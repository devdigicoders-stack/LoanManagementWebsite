import React from 'react';
import { Phone, Mail, Clock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const AppSupport = () => {
  return (
    <section className="w-full bg-[#fcfcfc] py-24 px-6 md:px-10 border-b border-gray-100">
      <div className="max-w-4xl mx-auto">
        
        <div className="bg-[#FDFBF7] rounded-3xl p-8 md:p-12 relative overflow-hidden">
          
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#0EA5E9] rounded-full blur-[100px] opacity-10"></div>
          
          <div className="relative z-10 flex flex-col md:flex-row gap-12 items-center">
            
            <div className="w-full md:w-1/2 text-center md:text-left">
              <div className="inline-block bg-[#F0F9FF] border border-[#0EA5E9]/20 text-[#0EA5E9] rounded-full px-4 py-1 text-sm font-bold tracking-wider mb-4 uppercase shadow-sm">
                Need Help?
              </div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">We're Here for You</h2>
              <p className="text-slate-600 text-[15px] leading-relaxed mb-6">
                If you experience any difficulty while downloading, installing or using our mobile application, our support team is available to assist you.
              </p>
              <Link 
                to="/contact" 
                className="inline-flex items-center gap-2 bg-[#0EA5E9] text-slate-900 px-6 py-3 rounded-full font-bold hover:bg-[#0369A1] transition-colors group"
              >
                Contact Support <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <div className="w-full md:w-1/2">
              <div className="bg-white border border-slate-100 shadow-sm rounded-2xl p-6 space-y-5">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-[#F8FAFC] text-[#0EA5E9] rounded-lg flex items-center justify-center shrink-0 border border-slate-100">
                    <Phone size={18} />
                  </div>
                  <div>
                    <div className="text-slate-500 text-[12px] font-bold uppercase tracking-wider mb-1">Phone</div>
                    <div className="text-slate-900 font-medium">+91 9755 766 018</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-[#F8FAFC] text-[#0EA5E9] rounded-lg flex items-center justify-center shrink-0 border border-slate-100">
                    <Mail size={18} />
                  </div>
                  <div>
                    <div className="text-slate-500 text-[12px] font-bold uppercase tracking-wider mb-1">Email</div>
                    <a href="mailto:haustouch@hausnuo.com" className="text-slate-900 font-medium hover:text-[#0EA5E9] transition-colors">haustouch@hausnuo.com</a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-[#F8FAFC] text-[#0EA5E9] rounded-lg flex items-center justify-center shrink-0 border border-slate-100">
                    <Clock size={18} />
                  </div>
                  <div>
                    <div className="text-slate-500 text-[12px] font-bold uppercase tracking-wider mb-1">Customer Support</div>
                    <div className="text-slate-900 font-medium">Monday — Saturday<br/>9:00 AM — 6:00 PM</div>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default AppSupport;
