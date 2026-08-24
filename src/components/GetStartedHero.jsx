import React from 'react';
import { Play } from 'lucide-react';
import { Link } from 'react-router-dom';

const GetStartedHero = () => {
  return (
    <section className="w-full bg-[#F0F9FF] pt-32 pb-24 px-6 md:px-10 relative overflow-hidden">
      
      {/* Decorative Gradients */}
      <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-[#0EA5E9] rounded-full blur-[180px] opacity-15 pointer-events-none"></div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        
        <div className="inline-flex items-center gap-2 bg-[#E0F2FE] border border-[#E0F2FE] text-[#0369A1] px-5 py-2 rounded-full mb-6 shadow-[0_0_15px_rgba(91,193,22,0.1)]">
          <Play size={16} fill="currentColor" />
          <span className="text-sm font-bold tracking-widest uppercase">Get Started</span>
        </div>
        
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-white mb-6 leading-tight tracking-wide">
          Start Your Property <br/>
          <span className="text-[#0EA5E9] drop-shadow-[0_0_20px_rgba(91,193,22,0.3)]">Finance Journey</span>
        </h1>
        
        <p className="text-gray-300 text-[16px] md:text-lg leading-relaxed mb-8 max-w-3xl mx-auto">
          Take the first step toward understanding your property and financial requirements.
        </p>
        <p className="text-gray-300 text-[16px] md:text-lg leading-relaxed mb-10 max-w-3xl mx-auto">
          Whether you are planning to purchase a home, construct a property, renovate your existing property, or explore financing against an eligible property, NGM Housing Payments Limited provides a simple digital experience to help you get started.
        </p>
        
        <div className="text-xl md:text-2xl font-bold text-white mb-12">
          Explore Your Options. <span className="text-[#0EA5E9]">Share Your Requirement.</span> Take an Informed Step.
        </div>
        
      </div>
    </section>
  );
};

export default GetStartedHero;
