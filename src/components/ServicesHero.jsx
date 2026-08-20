import React from 'react';
import { Building2 } from 'lucide-react';

const ServicesHero = () => {
  return (
    <section className="relative w-full h-[350px] md:h-[450px] lg:h-[500px] bg-[#050b06] flex items-center overflow-hidden">
      
      {/* Background Image */}
      <div 
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      ></div>
      
      {/* Dark gradient overlay for perfect readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#030706] via-[#030706]/80 to-transparent"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-[#030706] via-transparent to-transparent md:hidden"></div>

      <div className="max-w-7xl mx-auto w-full px-6 md:px-10 relative z-30 flex flex-col justify-center">
        
        <div className="inline-flex items-center gap-2 bg-[#0b150e]/80 border border-[#1cf200]/30 text-[#1cf200] px-4 py-2 rounded-full mb-6 backdrop-blur-sm self-start">
          <Building2 size={16} />
          <span className="text-sm font-bold tracking-widest uppercase">Our Services</span>
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-[56px] font-extrabold text-white mb-6 leading-tight max-w-4xl drop-shadow-lg">
          Property & Financial Solutions Designed <br className="hidden md:block"/> Around <span className="text-[#1cf200]">Your Goals</span>
        </h1>
        
        <p className="text-gray-300 text-[15px] md:text-lg leading-relaxed max-w-3xl mb-8 drop-shadow">
          At NGM Housing Payments Limited, we aim to make property-related financial information easier to understand and access. Whether you are planning to purchase a home, construct a property, renovate your existing home, or explore financing against an eligible property, our platform helps you understand available financial solutions and important considerations.
        </p>

      </div>
    </section>
  );
};

export default ServicesHero;
