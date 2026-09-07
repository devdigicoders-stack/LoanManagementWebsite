import React from 'react';
import { Headphones, CheckCircle2, AlertCircle } from 'lucide-react';

const ContactSupport = () => {
  const supportItems = [
    "Our financial services",
    "Property-related financial information",
    "Loan enquiry process",
    "Required documentation",
    "Application-related information",
    "Digital platform assistance",
    "Mobile application support",
    "General feedback and complaints"
  ];

  return (
    <section className="w-full bg-[#FAFAFA] py-24 px-6 md:px-10 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-50 rounded-full blur-[120px] pointer-events-none transform translate-x-1/3 -translate-y-1/3"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-cyan-50 rounded-full blur-[100px] pointer-events-none transform -translate-x-1/2 translate-y-1/3"></div>

      <div className="w-full px-6 lg:px-12 xl:px-16 mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24 items-center relative z-10">
        
        {/* Left Side */}
        <div className="w-full lg:w-[45%]">
          <div className="inline-flex items-center gap-2.5 bg-blue-50 text-blue-600 border border-blue-100 px-4 py-2 rounded-full text-xs font-bold tracking-widest uppercase mb-8 shadow-sm">
            <Headphones size={16} strokeWidth={2.5} /> Customer Support
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-6 leading-[1.1] tracking-tight">
            Need Assistance With <br className="hidden lg:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Our Services?</span>
          </h2>
          <p className="text-slate-500 text-lg md:text-xl leading-relaxed mb-10 font-medium">
            Our expert support team is here to help with general questions related to our platform, loans, and services. We are committed to providing you with clear and helpful information.
          </p>

          <div className="bg-gradient-to-br from-blue-50 to-white border border-blue-100 p-8 rounded-[2rem] flex flex-col sm:flex-row gap-5 shadow-[0_10px_40px_-10px_rgba(59,130,246,0.1)] relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-100/50 rounded-bl-full opacity-50 transition-transform group-hover:scale-110"></div>
            <div className="w-14 h-14 rounded-2xl bg-blue-600 text-white flex items-center justify-center shrink-0 shadow-lg relative z-10">
              <AlertCircle size={28} strokeWidth={2.5} />
            </div>
            <div className="relative z-10">
              <h4 className="text-slate-900 font-bold text-lg mb-2">Important Note</h4>
              <p className="text-slate-600 text-[15px] leading-relaxed">
                For matters related to a specific loan application, please keep your application or reference details handy when contacting our support team.
              </p>
            </div>
          </div>
        </div>

        {/* Right Side - List */}
        <div className="w-full lg:w-[55%]">
          <div className="bg-slate-900 rounded-[3rem] p-10 md:p-14 relative overflow-hidden shadow-2xl">
            
            <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500 rounded-full blur-[100px] opacity-20 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-500 rounded-full blur-[100px] opacity-20 pointer-events-none"></div>

            <h3 className="text-2xl md:text-3xl font-black text-white mb-10 relative z-10">Our support team can help with:</h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 relative z-10">
              {supportItems.map((item, index) => (
                <div key={index} className="flex items-start gap-4 bg-white/5 backdrop-blur-md p-5 rounded-2xl border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 group">
                  <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-blue-500 group-hover:scale-110 transition-all">
                    <CheckCircle2 className="text-blue-400 group-hover:text-white transition-colors" size={14} strokeWidth={3} />
                  </div>
                  <span className="text-slate-300 text-[15px] font-medium leading-relaxed group-hover:text-white transition-colors">{item}</span>
                </div>
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default ContactSupport;
