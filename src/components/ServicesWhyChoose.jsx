import React from 'react';
import { Target, Eye, MonitorSmartphone, ThumbsUp, ShieldCheck, Zap } from 'lucide-react';

const ServicesWhyChoose = () => {
  const reasons = [
    {
      icon: <Target size={24} strokeWidth={1.5} />,
      title: "Property Focused",
      desc: "Our services are designed around residential, commercial and property-backed financial requirements."
    },
    {
      icon: <Eye size={24} strokeWidth={1.5} />,
      title: "Transparent",
      desc: "We believe important financial information should be presented clearly and understandably."
    },
    {
      icon: <MonitorSmartphone size={24} strokeWidth={1.5} />,
      title: "Digital",
      desc: "Access supported services and information through a convenient digital experience."
    },
    {
      icon: <ThumbsUp size={24} strokeWidth={1.5} />,
      title: "Simple",
      desc: "We simplify complex financial concepts so customers can understand them better."
    },
    {
      icon: <ShieldCheck size={24} strokeWidth={1.5} />,
      title: "Responsible",
      desc: "We encourage customers to evaluate their financial situation and repayment capacity before borrowing."
    },
    {
      icon: <Zap size={24} strokeWidth={1.5} />,
      title: "Convenient",
      desc: "Explore services, submit enquiries and access support through digital channels."
    }
 ];

  return (
    <section className="w-full bg-[#FDFBF7] py-24 px-6 md:px-10 border-t border-[#E0F2FE]">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-20">
        
        {/* Left Side */}
        <div className="w-full lg:w-1/3">
          <div className="inline-flex items-center gap-2 text-[#0EA5E9] mb-6">
            <span className="text-sm font-bold tracking-widest uppercase">Why Choose Our Services?</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            Financial Information With a <span className="text-[#0EA5E9]">Customer-First Approach</span>
          </h2>
          <p className="text-slate-600 text-[15px] leading-relaxed mb-8">
            We are committed to providing a reliable platform where you can explore and understand property-focused financial solutions with clarity and confidence.
          </p>
        </div>

        {/* Right Side - Grid */}
        <div className="w-full lg:w-2/3">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {reasons.map((item, index) => (
              <div key={index} className="bg-[#111814] p-8 rounded-2xl border border-[#E0F2FE] hover:border-[#2a3a2c] transition-colors group">
                <div className="w-12 h-12 bg-[#FDFBF7] border border-[#E0F2FE] text-[#0EA5E9] rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#0EA5E9] group-hover:text-white transition-colors">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-600 text-[14px] leading-relaxed">
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

export default ServicesWhyChoose;
