import React from 'react';
import { ArrowRight, Send } from 'lucide-react';
import { Link } from 'react-router-dom';

const GetStartedFinalCTA = () => {
  const scrollToForm = () => {
    const formSection = document.getElementById('enquiry-form');
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="w-full bg-[#F0F9FF] py-24 px-6 md:px-10 relative overflow-hidden">
      
      {/* Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#0EA5E9] rounded-full blur-[150px] opacity-10 pointer-events-none"></div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        
        <div className="inline-block bg-[#111814] border border-[#E0F2FE] text-[#0EA5E9] rounded-full px-5 py-2 text-sm font-bold tracking-widest uppercase mb-6">
          Your Property. Your Goals. Let's Get Started.
        </div>
        
        <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
          Take the First Step Toward <span className="text-[#0EA5E9] drop-shadow-[0_0_10px_rgba(91,193,22,0.3)]">Better Financial Decisions</span>
        </h2>
        
        <p className="text-slate-600 text-lg md:text-xl leading-relaxed mb-12 max-w-2xl mx-auto">
          Tell us what you are looking for and explore the appropriate financial information and services for your requirement.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button 
            onClick={scrollToForm}
            className="w-full sm:w-auto bg-[#0EA5E9] text-[#FDFBF7] px-8 py-4 rounded-full font-bold flex items-center justify-center gap-2 hover:bg-[#0369A1] transition-colors group shadow-lg shadow-[#0EA5E9]/20"
          >
            Start My Enquiry <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </button>
          
          <Link 
            to="/services"
            className="w-full sm:w-auto bg-[#E0F2FE] text-slate-900 border border-[#2a3a2c] px-8 py-4 rounded-full font-bold flex items-center justify-center gap-2 hover:bg-[#223025] transition-colors group"
          >
            Explore Our Services <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>

          <Link 
            to="/download-app"
            className="w-full sm:w-auto bg-[#E0F2FE] text-slate-900 border border-[#2a3a2c] px-8 py-4 rounded-full font-bold flex items-center justify-center gap-2 hover:bg-[#223025] transition-colors group"
          >
            Download App <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

      </div>
    </section>
  );
};

export default GetStartedFinalCTA;
