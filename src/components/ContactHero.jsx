import React from 'react';
import { PhoneCall } from 'lucide-react';

const ContactHero = () => {
  return (
    <section className="w-full bg-[#030706] pt-32 pb-20 px-6 md:px-10 relative overflow-hidden">
      
      {/* Decorative Gradients */}
      <div className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] bg-[#5bc116] rounded-full blur-[180px] opacity-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10 flex flex-col items-center text-center">
        
        <div className="inline-flex items-center gap-2 bg-[#0b150e] border border-[#1a2e1d] text-[#71d924] px-5 py-2 rounded-full mb-8">
          <PhoneCall size={16} />
          <span className="text-sm font-bold tracking-widest uppercase">Contact Us</span>
        </div>

        <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight max-w-4xl">
          Let's Talk About Your <br className="hidden md:block"/> <span className="text-[#5bc116]">Financial Goals</span>
        </h1>
        
        <p className="text-gray-400 text-[16px] md:text-lg leading-relaxed max-w-3xl mb-8">
          Have questions about property finance, home loans, Loan Against Property, construction finance, renovation finance or our digital services?
        </p>

        <p className="text-gray-400 text-[16px] md:text-lg leading-relaxed max-w-3xl mb-8">
          The NGM Housing Payments Limited team is here to help you understand our services and provide assistance with your enquiries.
        </p>

        <div className="bg-[#0b0f0e] border border-[#1a241c] p-6 rounded-2xl max-w-3xl mx-auto">
          <p className="text-[#5bc116] text-[15px] font-medium leading-relaxed">
            Whether you are planning to purchase a property, looking for financing against an eligible property, or simply want to understand your available options, feel free to get in touch with us.
          </p>
        </div>

      </div>
    </section>
  );
};

export default ContactHero;
