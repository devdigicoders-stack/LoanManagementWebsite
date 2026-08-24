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
    <section className="w-full bg-[#FDFBF7] py-24 px-6 md:px-10 border-t border-b border-[#E0F2FE]">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
        
        {/* Left Side */}
        <div className="w-full lg:w-5/12">
          <div className="inline-flex items-center gap-2 text-[#0EA5E9] mb-6">
            <span className="text-sm font-bold tracking-widest uppercase">Customer Support</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
            Need Assistance With <br className="hidden lg:block"/>
            <span className="text-[#0EA5E9]">Our Services?</span>
          </h2>
          <p className="text-slate-600 text-[16px] leading-relaxed mb-8">
            Our support team can help with general questions related to our platform and services. We are committed to providing you with clear and helpful information.
          </p>

          <div className="bg-[#111814] border border-[#E0F2FE] p-6 rounded-2xl flex gap-4">
            <div className="text-[#0EA5E9] shrink-0 mt-1">
              <AlertCircle size={24} />
            </div>
            <div>
              <h4 className="text-white font-bold text-[15px] mb-2">Important Note</h4>
              <p className="text-gray-600 text-[13px] leading-relaxed">
                For matters related to a specific loan application, please keep your application or reference details available when contacting our support team.
              </p>
            </div>
          </div>
        </div>

        {/* Right Side - List */}
        <div className="w-full lg:w-7/12">
          <div className="bg-[#111814] border border-[#E0F2FE] rounded-3xl p-8 md:p-10 relative overflow-hidden">
            
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#0EA5E9] rounded-full blur-[150px] opacity-10 pointer-events-none"></div>

            <h3 className="text-xl font-bold text-white mb-8">Our support team can help with:</h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 relative z-10">
              {supportItems.map((item, index) => (
                <div key={index} className="flex items-center gap-3 bg-[#FDFBF7] p-4 rounded-xl border border-[#E0F2FE] hover:border-[#2a3a2c] transition-colors">
                  <CheckCircle2 className="text-[#0EA5E9] shrink-0" size={18} />
                  <span className="text-slate-700 text-[14px]">{item}</span>
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
