import React from 'react';
import { Home, Key, HardHat, Hammer, Building2, BriefcaseBusiness } from 'lucide-react';

const AboutExplore = () => {
  const exploreItems = [
    {
      icon: <Home size={24} strokeWidth={1.5} />,
      title: "Home Purchase",
      desc: "Explore financial solutions for purchasing an eligible residential property."
    },
    {
      icon: <Key size={24} strokeWidth={1.5} />,
      title: "Loan Against Property",
      desc: "Understand secured financing options where an eligible property may be offered as security."
    },
    {
      icon: <HardHat size={24} strokeWidth={1.5} />,
      title: "Construction Finance",
      desc: "Explore financing options for eligible residential construction requirements."
    },
    {
      icon: <Hammer size={24} strokeWidth={1.5} />,
      title: "Home Renovation",
      desc: "Understand financial options that may help with eligible renovation and improvement requirements."
    },
    {
      icon: <Building2 size={24} strokeWidth={1.5} />,
      title: "Commercial Property",
      desc: "Explore financial solutions related to eligible commercial property requirements."
    },
    {
      icon: <BriefcaseBusiness size={24} strokeWidth={1.5} />,
      title: "Business Requirements",
      desc: "Understand property-backed financial options that may be considered for eligible business purposes."
    }
 ;

  return (
    <section className="w-full bg-[#fcfcfc] py-20 px-6 md:px-10 border-t border-b border-gray-100">
      <div className="max-w-7xl mx-auto">
        
        <div className="flex flex-col md:flex-row items-end justify-between gap-6 mb-16">
          <div className="max-w-xl">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What We Help You Explore
            </h2>
            <p className="text-gray-500 text-[15px] leading-relaxed">
              Our platform is designed to provide information and assistance around various property-related financial requirements.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {exploreItems.map((item, index) => (
            <div key={index} className="flex items-start gap-5 p-6 bg-white rounded-2xl border border-gray-100 hover:shadow-lg hover:border-[#0EA5E9] transition-all group">
              <div className="w-12 h-12 bg-[#F8FAFC] border border-[#E0F2FE] rounded-full flex items-center justify-center text-[#0EA5E9] shrink-0 group-hover:bg-[#0EA5E9] group-hover:text-white transition-colors">
                {item.icon}
              </div>
              <div>
                <h4 className="text-gray-900 font-bold text-[16px] mb-2 group-hover:text-[#0EA5E9] transition-colors">{item.title}</h4>
                <p className="text-gray-500 text-[13px] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default AboutExplore;
