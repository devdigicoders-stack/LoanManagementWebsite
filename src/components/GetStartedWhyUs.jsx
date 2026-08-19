import React from 'react';
import { Target, SearchCheck, Laptop, Headset, HeartHandshake } from 'lucide-react';

const GetStartedWhyUs = () => {
  const reasons = [
    {
      icon: <Target size={32} strokeWidth={1.5} />,
      title: "Property Focused",
      desc: "Explore financial solutions designed around residential and commercial property requirements."
    },
    {
      icon: <SearchCheck size={32} strokeWidth={1.5} />,
      title: "Transparent Information",
      desc: "Understand important financial factors before making a decision."
    },
    {
      icon: <Laptop size={32} strokeWidth={1.5} />,
      title: "Digital Experience",
      desc: "Submit your enquiry conveniently through our digital platform."
    },
    {
      icon: <Headset size={32} strokeWidth={1.5} />,
      title: "Customer Support",
      desc: "Get assistance through available customer support channels."
    },
    {
      icon: <HeartHandshake size={32} strokeWidth={1.5} />,
      title: "Responsible Approach",
      desc: "We encourage customers to consider their financial situation and repayment capacity before borrowing."
    }
  ];

  return (
    <section className="w-full bg-[#f4fdf5] py-24 px-6 md:px-10 border-t border-[#e8fbe9]">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center mb-16">
          <div className="inline-block bg-[#e8fbe9] text-[#4a9b12] rounded-full px-5 py-2 text-sm font-bold tracking-widest uppercase mb-6">
            Why Start With Us?
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            A Simpler Way to Explore <span className="text-[#5bc116]">Property Finance</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {reasons.map((reason, index) => (
            <div 
              key={index}
              className={`bg-white p-8 rounded-3xl border border-[#e8fbe9] hover:border-[#5bc116] shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group flex flex-col ${index === reasons.length - 1 ? 'md:col-span-2 lg:col-span-1 lg:col-start-2' : ''}`}
            >
              <div className="w-16 h-16 bg-[#0b0f0e] text-[#5bc116] rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#5bc116] group-hover:text-white transition-colors">
                {reason.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{reason.title}</h3>
              <p className="text-gray-600 text-[15px] leading-relaxed flex-grow">
                {reason.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default GetStartedWhyUs;
