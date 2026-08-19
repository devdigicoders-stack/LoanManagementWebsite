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
  ];

  return (
    <section className="w-full bg-[#0b0f0e] py-20 px-6 md:px-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 lg:gap-20">
        
        {/* Left Side */}
        <div className="w-full md:w-1/3">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Built on <span className="text-[#5bc116]">Trust</span>
          </h2>
          <p className="text-gray-400 text-[15px] leading-relaxed mb-6">
            Financial decisions require trust.
          </p>
          <p className="text-gray-400 text-[15px] leading-relaxed">
            We work toward building that trust through clear policies, secure platforms, and a customer-first approach to communication.
          </p>
        </div>

        {/* Right Side - Grid */}
        <div className="w-full md:w-2/3">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {trustPoints.map((item, index) => (
              <div key={index} className="bg-[#111814] p-8 rounded-2xl border border-[#1a241c] hover:border-[#2a3a2c] transition-colors">
                <div className="w-12 h-12 bg-[#0b0f0e] border border-[#1a241c] text-[#5bc116] rounded-xl flex items-center justify-center mb-6">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-3">{item.title}</h3>
                <p className="text-gray-400 text-[14px] leading-relaxed">
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
