import React from 'react';
import { Building2 } from 'lucide-react';

const ServicesHero = () => {
  return (
    <section className="w-full bg-[#030706] pt-32 pb-20 px-6 md:px-10 relative overflow-hidden">
      
      {/* Decorative Gradients */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#5bc116] rounded-full blur-[180px] opacity-10"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#5bc116] rounded-full blur-[150px] opacity-10"></div>

      <div className="max-w-7xl mx-auto relative z-10 flex flex-col items-center text-center">
        
        <div className="inline-flex items-center gap-2 bg-[#0b150e] border border-[#1a2e1d] text-[#71d924] px-4 py-2 rounded-full mb-8">
          <Building2 size={16} />
          <span className="text-sm font-bold tracking-widest uppercase">Our Services</span>
        </div>

        <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight max-w-4xl">
          Property & Financial Solutions Designed <br className="hidden md:block"/> Around <span className="text-[#5bc116]">Your Goals</span>
        </h1>
        
        <p className="text-gray-400 text-[16px] md:text-lg leading-relaxed max-w-3xl mb-8">
          At NGM Housing Payments Limited, we aim to make property-related financial information easier to understand and access. Whether you are planning to purchase a home, construct a property, renovate your existing home, or explore financing against an eligible property, our platform helps you understand available financial solutions and important considerations.
        </p>

        <p className="text-gray-400 text-[16px] md:text-lg leading-relaxed max-w-3xl">
          From exploring loan options to understanding eligibility, documentation, repayment and applicable charges, we provide a simple digital experience to help you make informed financial decisions.
        </p>

      </div>
    </section>
  );
};

export default ServicesHero;
