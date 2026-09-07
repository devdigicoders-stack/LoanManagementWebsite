import React from 'react';
import { Search, Monitor, Cpu, ShieldCheck } from 'lucide-react';

const AboutStats = () => {
  const principles = [
    {
      icon: <Search size={24} strokeWidth={2} />,
      title: "Transparency",
      desc: "We believe in clarity and openness."
    },
    {
      icon: <Monitor size={24} strokeWidth={2} />,
      title: "Simplicity",
      desc: "We make complex things easy."
    },
    {
      icon: <Cpu size={24} strokeWidth={2} />,
      title: "Technology",
      desc: "We use technology to create better experiences."
    },
    {
      icon: <ShieldCheck size={24} strokeWidth={2} />,
      title: "Responsibility",
      desc: "We promote informed and responsible borrowing."
    }
 ;

  return (
    <section className="w-full">
      {/* Dark Banner */}
      <div className="bg-[#FDFBF7] w-full py-20 px-6 text-center border-t border-b border-[#E0F2FE]">
        <h2 className="text-2xl md:text-4xl font-bold text-slate-900 leading-relaxed max-w-4xl mx-auto">
          Because Financial Decisions <br className="hidden md:block" />
          <span className="text-[#0EA5E9]">Become Easier When Information Is Clear.</span>
        </h2>
      </div>

      {/* Principles Section underneath */}
      <div className="w-full bg-[#fcfcfc] py-20 px-6 md:px-10">
        <div className="w-full px-6 lg:px-12 xl:px-16 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {principles.map((p, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-[#f0fbf0] text-[#0EA5E9] flex items-center justify-center mb-6">
                {p.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">{p.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed max-w-[200px]">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutStats;
