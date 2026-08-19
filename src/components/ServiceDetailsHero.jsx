import React from 'react';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ServiceDetailsHero = ({ title, breadcrumbs, description, imageUrl, cardData }) => {
  return (
    <section className="w-full bg-[#fcfcfc] py-10 px-6 md:px-10">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10">
        
        {/* Left Side */}
        <div className="w-full lg:w-1/2 flex flex-col">
          {/* Breadcrumbs */}
          <div className="flex items-center flex-wrap gap-2 text-[13px] md:text-[14px] font-medium text-gray-500 mb-8">
            <Link to="/" className="hover:text-[#5bc116] transition-colors">Home</Link>
            <ChevronRight size={14} />
            <Link to="/services" className="hover:text-[#5bc116] transition-colors">Our Services</Link>
            <ChevronRight size={14} />
            <span className="text-[#5bc116]">{title}</span>
          </div>

          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            {title}
          </h1>

          <p className="text-gray-600 text-[15px] md:text-base leading-relaxed mb-8 max-w-lg">
            {description}
          </p>
        </div>

        {/* Right Side (Image and Card) */}
        <div className="w-full lg:w-1/2 relative flex justify-center lg:justify-end">
          <div className="relative w-full max-w-[500px]">
            <img 
              src={imageUrl || "/aboutus/heroimage.png"} 
              alt={title} 
              className="w-full h-auto rounded-3xl object-cover shadow-xl"
            />
            {cardData && (
              <div className="absolute -bottom-8 -left-8 md:-bottom-10 md:-left-12 bg-white rounded-2xl p-6 shadow-2xl border border-gray-100 flex flex-col w-[280px]">
                <h4 className="text-black font-bold text-[18px] mb-2 leading-tight">
                  Unlock the Financial<br/>Potential of Your Property
                </h4>
                <p className="text-gray-500 text-[13px] leading-relaxed mb-5">
                  Explore secured financing options against eligible residential or commercial property.
                </p>
                <button className="bg-[#0b0f0e] hover:bg-gray-800 text-white text-[13px] font-bold py-2.5 px-6 rounded-lg transition-colors w-max">
                  Check Your Requirement →
                </button>
              </div>
            )}
          </div>
        </div>

      </div>
    </section>
  );
};

export default ServiceDetailsHero;
