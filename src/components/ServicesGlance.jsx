import React from 'react';
import { Home, Key, HardHat, Hammer, Building2, BriefcaseBusiness, ArrowRight } from 'lucide-react';

const ServicesGlance = () => {
  const glanceItems = [
    {
      icon: <Home size={20} strokeWidth={1.5} />,
      title: "Home Purchase",
      desc: "Explore home loan options for purchasing an eligible residential property."
    },
    {
      icon: <HardHat size={20} strokeWidth={1.5} />,
      title: "Property Construction",
      desc: "Understand financing options for eligible construction requirements."
    },
    {
      icon: <Hammer size={20} strokeWidth={1.5} />,
      title: "Home Renovation",
      desc: "Explore financial options for eligible repair and renovation requirements."
    },
    {
      icon: <Key size={20} strokeWidth={1.5} />,
      title: "Loan Against Property",
      desc: "Understand secured financing options against an eligible property."
    },
    {
      icon: <Building2 size={20} strokeWidth={1.5} />,
      title: "Commercial Property",
      desc: "Explore financial solutions related to eligible commercial property requirements."
    },
    {
      icon: <BriefcaseBusiness size={20} strokeWidth={1.5} />,
      title: "Business Requirements",
      desc: "Understand property-backed financial options that may be considered for eligible business purposes."
    }
  ];

  return (
    <section className="w-full bg-[#f4fdf5] py-20 px-6 md:px-10 border-b border-[#e8fbe9]">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start gap-12 lg:gap-20">
        
        {/* Left Side */}
        <div className="w-full lg:w-1/3 sticky top-32">
          <div className="inline-flex items-center gap-2 text-[#5bc116] mb-6">
            <span className="text-sm font-bold tracking-widest uppercase">Property Finance At a Glance</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
            One Platform. <br/>
            <span className="text-[#5bc116]">Multiple Financial Possibilities.</span>
          </h2>
          <button className="hidden lg:inline-flex items-center gap-2 bg-[#0b0f0e] text-white px-6 py-3 rounded-full font-bold hover:bg-[#1a241c] transition-colors group">
            Explore All <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Right Side - Grid */}
        <div className="w-full lg:w-2/3">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {glanceItems.map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:border-[#5bc116] transition-colors">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 rounded-full bg-[#f0fbf0] text-[#5bc116] flex items-center justify-center shrink-0">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">{item.title}</h3>
                </div>
                <p className="text-gray-500 text-[14px] leading-relaxed pl-14">
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

export default ServicesGlance;
