import React from 'react';
import { Home, Key, HardHat, Wrench, Building2, BriefcaseBusiness, ArrowRight } from 'lucide-react';

const GetStartedOptions = () => {
  const options = [
    {
      icon: <Home size={32} strokeWidth={1.5} />,
      title: "Home Loan",
      desc: "Planning to purchase or construct your dream home?",
      link: "Select Home Loan"
    },
    {
      icon: <Key size={32} strokeWidth={1.5} />,
      title: "Loan Against Property",
      desc: "Looking to explore financing against an eligible residential or commercial property?",
      link: "Select Loan Against Property"
    },
    {
      icon: <HardHat size={32} strokeWidth={1.5} />,
      title: "Construction Finance",
      desc: "Planning to construct a new residential property?",
      link: "Select Construction Finance"
    },
    {
      icon: <Wrench size={32} strokeWidth={1.5} />,
      title: "Home Renovation",
      desc: "Looking for financial options for eligible home repairs or renovation?",
      link: "Select Renovation Finance"
    },
    {
      icon: <Building2 size={32} strokeWidth={1.5} />,
      title: "Commercial Property Finance",
      desc: "Exploring financial solutions for an eligible commercial property?",
      link: "Select Commercial Finance"
    },
    {
      icon: <BriefcaseBusiness size={32} strokeWidth={1.5} />,
      title: "Business Finance",
      desc: "Looking for financial support for eligible business requirements?",
      link: "Select Business Finance"
    }
  ];

  const scrollToForm = () => {
    const formSection = document.getElementById('enquiry-form');
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="w-full bg-[#f4fdf5] py-24 px-6 md:px-10 border-b border-[#e8fbe9]">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center mb-16">
          <div className="inline-block bg-[#e8fbe9] text-[#4a9b12] rounded-full px-5 py-2 text-sm font-bold tracking-widest uppercase mb-6">
            What Are You Looking For?
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Select Your <span className="text-[#5bc116]">Financial Requirement</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {options.map((option, index) => (
            <div 
              key={index} 
              onClick={scrollToForm}
              className="bg-white p-8 rounded-3xl border border-[#e8fbe9] hover:border-[#5bc116] shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer group flex flex-col"
            >
              <div className="w-16 h-16 bg-[#f0fbf0] text-[#5bc116] rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#5bc116] group-hover:text-white transition-colors">
                {option.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{option.title}</h3>
              <p className="text-gray-600 text-[15px] leading-relaxed mb-8 flex-grow">
                {option.desc}
              </p>
              <div className="inline-flex items-center gap-2 text-[#5bc116] font-bold group-hover:text-[#4a9b12] transition-colors">
                {option.link} <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default GetStartedOptions;
