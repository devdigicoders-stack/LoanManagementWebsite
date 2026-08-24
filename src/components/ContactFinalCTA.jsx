import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Download } from 'lucide-react';

const ContactFinalCTA = () => {
  return (
    <section className="w-full bg-[#F8FAFC] py-24 px-6 md:px-10 relative overflow-hidden">
      <div className="max-w-4xl mx-auto relative z-10 text-center">
        
        <div className="inline-block bg-[#E0F2FE] text-[#0369A1] rounded-full px-4 py-1 text-sm font-bold tracking-wider mb-6 uppercase">
          We're Ready to Hear From You
        </div>

        <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
          Your Property Goals Deserve the <br/>
          <span className="text-[#0EA5E9]">Right Information</span>
        </h2>
        
        <p className="text-gray-600 text-[16px] leading-relaxed mb-10 max-w-2xl mx-auto">
          Whether you are planning your first home, exploring property-backed finance, constructing a property or looking for financial information, we are here to help you take the next step with greater clarity.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          
          <Link 
            to="/services" 
            className="w-full sm:w-auto bg-[#0EA5E9] text-[#FDFBF7] px-8 py-4 rounded-full font-bold flex items-center justify-center gap-2 hover:bg-[#0369A1] transition-colors group shadow-lg shadow-[#0EA5E9]/20"
          >
            Explore Our Services
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          
          <Link 
            to="/download" 
            className="w-full sm:w-auto bg-white text-gray-900 px-8 py-4 rounded-full font-bold flex items-center justify-center gap-2 border border-gray-200 hover:border-[#0EA5E9] hover:text-[#0EA5E9] transition-colors shadow-sm"
          >
            Download Our App
            <Download size={18} />
          </Link>

        </div>

      </div>
    </section>
  );
};

export default ContactFinalCTA;
