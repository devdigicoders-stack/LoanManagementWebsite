import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Phone, Download } from 'lucide-react';

const ServicesCTA = () => {
  return (
    <section className="w-full bg-[#FDFBF7] py-24 px-6 md:px-10 relative overflow-hidden">
      
      {/* Decorative Gradients */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#0EA5E9] rounded-full blur-[200px] opacity-10 pointer-events-none"></div>

      <div className="max-w-4xl mx-auto relative z-10 text-center">
        
        <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
          Your Property. Your Plans. <br/>
          <span className="text-[#0EA5E9]">Your Financial Journey.</span>
        </h2>
        
        <p className="text-slate-600 text-[16px] leading-relaxed mb-10 max-w-2xl mx-auto">
          Whether you're buying, building, renovating or exploring finance against an eligible property, the right information can help you take a more informed approach.
        </p>

        <h3 className="text-xl font-bold text-slate-900 mb-8">Explore Your Financial Options Today</h3>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          
          <Link 
            to="/services" 
            className="w-full sm:w-auto bg-[#0EA5E9] text-[#FDFBF7] px-8 py-4 rounded-full font-bold flex items-center justify-center gap-2 hover:bg-[#0369A1] transition-colors group"
          >
            Explore Loan Solutions
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          
          <Link 
            to="/contact-us" 
            className="w-full sm:w-auto bg-[#E0F2FE] text-slate-900 px-8 py-4 rounded-full font-bold flex items-center justify-center gap-2 border border-[#2a3a2c] hover:bg-[#223025] transition-colors"
          >
            Contact Us
            <Phone size={18} />
          </Link>

          <Link 
            to="/download" 
            className="w-full sm:w-auto bg-transparent text-slate-900 px-8 py-4 rounded-full font-bold flex items-center justify-center gap-2 border border-white hover:bg-white hover:text-black transition-colors"
          >
            Download App
            <Download size={18} />
          </Link>

        </div>

      </div>
    </section>
  );
};

export default ServicesCTA;
