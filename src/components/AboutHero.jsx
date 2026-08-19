import React from 'react';
import { ChevronRight } from 'lucide-react';

const AboutHero = () => {
  return (
    <section className="relative w-full h-[350px] md:h-[400px] lg:h-[450px] bg-[#050b06] flex items-center overflow-hidden">
      
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 w-full h-full flex justify-end">
        <img 
          src="/aboutus/heroimage.png" 
          alt="About Us Background" 
          className="w-full lg:w-[80%] h-full object-contain object-right lg:object-right"
        />
        {/* Dark gradient overlay to blend the image into the background */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#050b06] via-[#050b06]/95 to-transparent lg:w-[70%]"></div>
      </div>

      <div className="max-w-7xl mx-auto w-full px-6 md:px-10 relative z-10">
        <div className="max-w-2xl">
          
          <div className="text-[#5bc116] font-bold text-[12px] tracking-widest mb-4 uppercase">
            ABOUT US
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-[56px] font-bold text-white mb-6 leading-[1.1]">
            Building Financial Confidence <br />
            <span className="text-[#5bc116]">Through Better Information</span>
          </h1>
          
          <p className="text-gray-300 text-[15px] md:text-base leading-relaxed mb-10 max-w-lg">
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
