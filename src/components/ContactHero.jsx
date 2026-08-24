import React from 'react';
import { PhoneCall } from 'lucide-react';

const ContactHero = () => {
  return (
    <section className="relative w-full h-[350px] md:h-[450px] lg:h-[500px] bg-[#F0F9FF] flex items-center overflow-hidden">
      
      {/* Background Image */}
      <div 
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1516387938699-a93567ec168e?auto=format&fit=crop&w=1600&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      ></div>
      
      {/* Dark gradient overlay for perfect readability */}
      <div className="absolute inset-0 bg-slate-900/60"></div>
      <div className="absolute inset-0 bg-slate-900/70 md:hidden"></div>

      <div className="max-w-7xl mx-auto w-full px-6 md:px-10 relative z-30 flex flex-col justify-center">
        
        <div className="inline-flex items-center gap-2 bg-[#E0F2FE]/80 border border-[#0284C7]/30 text-[#0284C7] px-4 py-2 rounded-full mb-6 backdrop-blur-sm self-start">
          <PhoneCall size={16} />
          <span className="text-sm font-bold tracking-widest uppercase">Contact Us</span>
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-[56px] font-extrabold text-white mb-6 leading-tight max-w-4xl drop-shadow-lg">
          Let's Talk About Your <br className="hidden md:block"/> <span className="text-[#0284C7]">Financial Goals</span>
        </h1>
        
        <p className="text-gray-200 text-[15px] md:text-lg leading-relaxed max-w-2xl mb-8 drop-shadow">
          Have questions about property finance, home loans, Loan Against Property, construction finance, renovation finance or our digital services? The NGM Housing Payments Limited team is here to help you understand our services and provide assistance with your enquiries.
        </p>

      </div>
    </section>
  );
};

export default ContactHero;
