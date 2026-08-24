import React from 'react';
import { Ear, Info, Zap, LifeBuoy } from 'lucide-react';

const AboutPhilosophy = () => {
  const principles = [
    {
      icon: <Ear size={32} strokeWidth={1.5} />,
      title: "Listen",
      desc: "Understand the customer's actual financial requirement."
    },
    {
      icon: <Info size={32} strokeWidth={1.5} />,
      title: "Inform",
      desc: "Provide relevant and understandable information."
    },
    {
      icon: <Zap size={32} strokeWidth={1.5} />,
      title: "Simplify",
      desc: "Make the digital journey easy to navigate."
    },
    {
      icon: <LifeBuoy size={32} strokeWidth={1.5} />,
      title: "Support",
      desc: "Remain available through appropriate customer support channels."
    }
 ;

  return (
    <section className="w-full bg-[#fcfcfc] py-20 px-6 md:px-10 border-b border-gray-100">
      <div className="max-w-7xl mx-auto text-center">
        
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          Our Customer-First Philosophy
        </h2>
        <p className="text-gray-500 text-[15px] max-w-2xl mx-auto leading-relaxed mb-16">
          We believe that financial services should be built around people, not complicated processes. That's why we focus on four simple principles.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {principles.map((item, index) => (
            <div key={index} className="flex flex-col items-center p-8 bg-white rounded-2xl border border-gray-100 shadow-sm hover:-translate-y-2 transition-transform duration-300">
              <div className="w-20 h-20 bg-[#F8FAFC] border border-[#E0F2FE] text-[#0EA5E9] rounded-full flex items-center justify-center mb-6">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
              <p className="text-gray-500 text-[14px] leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 inline-block bg-[#FDFBF7] text-slate-900 px-8 py-4 rounded-full font-semibold shadow-lg shadow-green-900/10 border border-[#E0F2FE]">
          Better information leads to better financial decisions.
        </div>

      </div>
    </section>
  );
};

export default AboutPhilosophy;
