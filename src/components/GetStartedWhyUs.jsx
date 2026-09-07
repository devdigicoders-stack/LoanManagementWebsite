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
 ;

  return (
    <section className="w-full bg-[#F8FAFC] py-24 px-6 md:px-10 border-t border-[#E0F2FE]">
      <div className="w-full px-6 lg:px-12 xl:px-16 mx-auto">
        
        <div className="text-center mb-16">
          <div className="inline-block bg-[#E0F2FE] text-[#0369A1] rounded-full px-5 py-2 text-sm font-bold tracking-widest uppercase mb-6">
            Why Start With Us?
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            A Simpler Way to Explore <span className="text-[#0EA5E9]">Property Finance</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {reasons.map((reason, index) => (
            <div 
              key={index}
              className={`bg-white p-8 rounded-3xl border border-[#E0F2FE] hover:border-[#0EA5E9] shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group flex flex-col ${index === reasons.length - 1 ? 'md:col-span-2 lg:col-span-1 lg:col-start-2' : ''}`}
            >
              <div className="w-16 h-16 bg-[#FDFBF7] text-[#0EA5E9] rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#0EA5E9] group-hover:text-white transition-colors">
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
