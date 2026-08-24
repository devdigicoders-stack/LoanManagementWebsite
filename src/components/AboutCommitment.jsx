import React from 'react';
import { Target, CheckCircle2 } from 'lucide-react';

const AboutCommitment = () => {
  return (
    <section className="w-full bg-[#FDFBF7] py-20 px-6 md:px-10 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#0EA5E9] rounded-full blur-[150px] opacity-10"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#0EA5E9] rounded-full blur-[120px] opacity-5"></div>

      <div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row items-center gap-12 lg:gap-20">
        
        {/* Left Side - Content */}
        <div className="w-full md:w-1/2">
          <div className="flex items-center gap-2 mb-6">
            <Target className="text-[#0EA5E9]" size={24} />
            <span className="text-[#0EA5E9] font-bold tracking-widest uppercase text-sm">Our Commitment</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
            Clear Information & <span className="text-[#0EA5E9]">Simple Financing</span>
          </h2>
          <p className="text-slate-600 text-[15px] leading-relaxed mb-6">
            At NGM Housing Payments Limited, we believe that property financing should be simple, transparent and easy to understand. Our commitment is to provide customers with clear information and a convenient digital experience while they explore financial solutions for their property and personal requirements.
          </p>
          <p className="text-slate-600 text-[15px] leading-relaxed">
            We aim to help customers understand the important aspects of financing before they make a decision — including eligibility, documentation, repayment, interest rates, tenure and applicable charges.
          </p>
        </div>

        {/* Right Side - List */}
        <div className="w-full md:w-1/2">
          <div className="bg-[#111814] border border-[#E0F2FE] p-8 rounded-3xl shadow-xl">
            <h3 className="text-xl font-bold text-slate-900 mb-6">What We Focus On</h3>
            <ul className="space-y-4">
              {[
                "Simple, transparent and easy to understand financing",
                "Clear information on eligibility and documentation",
                "Detailed breakdown of repayment and interest rates",
                "Full transparency on tenure and applicable charges",
                "Convenient digital experience for all customers"
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-4 p-4 rounded-xl hover:bg-[#E0F2FE] transition-colors group border border-transparent hover:border-[#2a3a2c]">
                  <CheckCircle2 className="text-[#0EA5E9] shrink-0 mt-0.5 group-hover:scale-110 transition-transform" size={20} />
                  <span className="text-slate-700 text-[14px] leading-relaxed group-hover:text-slate-900 transition-colors">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutCommitment;
