import React from 'react';
import { Search, Info, Scale, MousePointerClick, BellRing } from 'lucide-react';

const AboutPromise = () => {
  const promises = [
    {
      icon: <Search size={20} strokeWidth={2} />,
      title: "Explore",
      desc: "Available financial solutions."
    },
    {
      icon: <Info size={20} strokeWidth={2} />,
      title: "Understand",
      desc: "Important loan-related information."
    },
    {
      icon: <Scale size={20} strokeWidth={2} />,
      title: "Compare",
      desc: "Relevant factors before making decisions."
    },
    {
      icon: <MousePointerClick size={20} strokeWidth={2} />,
      title: "Enquire",
      desc: "Conveniently through digital channels."
    },
    {
      icon: <BellRing size={20} strokeWidth={2} />,
      title: "Stay Informed",
      desc: "Throughout your financial journey."
    }
 ;

  return (
    <section className="w-full bg-[#fcfcfc] py-20 px-6 md:px-10 border-b border-gray-100">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        
        {/* Left Side */}
        <div className="w-full lg:w-1/2">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Our Promise: <br/>
            <span className="text-[#0EA5E9]">We Promise to Keep Things Simple.</span>
          </h2>
          <p className="text-gray-500 text-[16px] leading-relaxed mb-8">
            We aim to provide a digital experience where customers can confidently navigate their property financing needs.
          </p>
        </div>

        {/* Right Side - Steps */}
        <div className="w-full lg:w-1/2">
          <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
            <div className="flex flex-col gap-6">
              {promises.map((item, index) => (
                <div key={index} className="flex items-center gap-5 group">
                  <div className="w-12 h-12 rounded-full bg-[#F8FAFC] border border-[#E0F2FE] text-[#0EA5E9] flex items-center justify-center shrink-0 group-hover:bg-[#0EA5E9] group-hover:text-white transition-colors">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-gray-900 font-bold text-[16px]">{item.title}</h4>
                    <p className="text-gray-500 text-[14px]">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutPromise;
