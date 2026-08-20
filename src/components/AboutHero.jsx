import React from 'react';
import { ChevronRight } from 'lucide-react';

const AboutHero = () => {
  return (
    <section className="relative w-full h-[350px] md:h-[450px] lg:h-[500px] bg-[#050b06] flex items-center overflow-hidden">
      
      {/* Background Image */}
      <div 
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      ></div>
      
      {/* Dark gradient overlay for perfect readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#030706] via-[#030706]/80 to-transparent"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-[#030706] via-transparent to-transparent md:hidden"></div>

      <div className="max-w-7xl mx-auto w-full px-6 md:px-10 relative z-30 pt-10">
        <div className="max-w-2xl">
          
          <div className="text-[#1cf200] font-bold text-[12px] tracking-widest mb-4 uppercase drop-shadow">
            ABOUT US
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-[56px] font-extrabold text-white mb-6 leading-[1.1] drop-shadow-lg">
            Building Financial Confidence <br />
            <span className="text-[#1cf200]">Through Better Information</span>
          </h1>
          
          <p className="text-gray-300 text-[15px] md:text-lg leading-relaxed mb-10 max-w-xl drop-shadow">
            We are committed to making property-related financial information easier to understand and access.
          </p>

          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 text-[15px] font-medium">
            <a href="#" className="text-white hover:text-gray-300 transition-colors">Home</a>
            <ChevronRight className="text-gray-500 mt-0.5" size={14} strokeWidth={3} />
            <span className="text-[#5bc116]">About Us</span>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
