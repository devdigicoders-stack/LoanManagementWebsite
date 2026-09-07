import React from 'react';
import { Lock, FileText, Headphones, Lightbulb } from 'lucide-react';

const AboutTrust = () => {
  const trustPoints = [
    {
      icon: <Lock size={24} strokeWidth={1.5} />,
      title: "Secure Digital Experience",
      desc: "Protecting customer information through appropriate security practices."
    },
    {
      icon: <FileText size={24} strokeWidth={1.5} />,
      title: "Transparent Communication",
      desc: "Providing clear and understandable information."
    },
    {
      icon: <Headphones size={24} strokeWidth={1.5} />,
      title: "Customer Support",
      desc: "Helping customers navigate their enquiries and service-related concerns."
    },
    {
      icon: <Lightbulb size={24} strokeWidth={1.5} />,
      title: "Financial Awareness",
      desc: "Encouraging customers to understand their financial commitments before proceeding."
    }
 ;

  return (
    <section className="w-full bg-[#FDFBF7] py-20 px-6 md:px-10">
      <div className="w-full px-6 lg:px-12 xl:px-16 mx-auto flex flex-col md:flex-row gap-12 lg:gap-20">
        
        {/* Left Side */}
        <div className="w-full md:w-1/3">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            Built on <span className="text-[#0EA5E9]">Trust</span>
          </h2>
          <p className="text-slate-600 text-[15px] leading-relaxed mb-6">
            Financial decisions require trust.
          </p>
          <p className="text-slate-600 text-[15px] leading-relaxed">
            We work toward building that trust through clear policies, secure platforms, and a customer-first approach to communication.
          </p>
        </div>

        {/* Right Side - Grid */}
        <div className="w-full md:w-2/3">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {trustPoints.map((item, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl border border-slate-100 hover:border-[#0EA5E9]/30 hover:shadow-xl transition-colors">
                <div className="w-12 h-12 bg-[#FDFBF7] border border-slate-100 text-[#0EA5E9] rounded-xl flex items-center justify-center mb-6">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-300 text-[14px] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutTrust;

