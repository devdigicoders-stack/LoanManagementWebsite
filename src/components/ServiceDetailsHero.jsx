import React from 'react';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ServiceDetailsHero = ({ title, breadcrumbs, description, imageUrl, cardData }) => {
  return (
    <section className="relative w-full h-[auto] min-h-[450px] md:min-h-[550px] bg-[#F0F9FF] flex items-center overflow-hidden py-12 md:py-0">
      
      {/* Background Image */}
      <div 
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: `url(${imageUrl || 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80'})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      ></div>
      
      {/* Dark gradient overlay for perfect readability */}
      <div className="absolute inset-0 bg-slate-900/60"></div>
      <div className="absolute inset-0 bg-slate-900/70 md:hidden"></div>

      <div className="max-w-7xl mx-auto w-full px-6 md:px-10 relative z-30 flex flex-col lg:flex-row items-center justify-between gap-10 mt-10 md:mt-0">
        
        {/* Left Side (Text content) */}
        <div className="w-full lg:w-1/2 flex flex-col">
          
          <div className="flex items-center flex-wrap gap-2 text-[12px] md:text-[14px] font-bold text-[#0284C7] mb-4 uppercase drop-shadow">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight size={14} />
            <Link to="/services" className="hover:text-white transition-colors">Our Services</Link>
            <ChevronRight size={14} />
            <span className="text-white">{title}</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-[56px] font-extrabold text-white mb-6 leading-tight drop-shadow-lg">
            {title}
          </h1>

          <p className="text-gray-200 text-[15px] md:text-lg leading-relaxed mb-8 max-w-lg drop-shadow">
            {description}
          </p>
          
          <div>
            <button className="inline-block bg-[#0284C7] hover:bg-[#0EA5E9] text-black font-bold py-3 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-[0_4px_15px_rgba(28,242,0,0.3)]">
              Apply Now
            </button>
          </div>
        </div>

        {/* Right Side (Card Data if exists) */}
        {cardData && (
          <div className="w-full lg:w-[350px] relative flex justify-center lg:justify-end mt-8 lg:mt-0">
            <div className="bg-[#E0F2FE]/90 backdrop-blur-md rounded-2xl p-8 shadow-2xl border border-[#0284C7]/20 flex flex-col w-full transform transition-all hover:scale-105">
              <h4 className="text-[#0284C7] font-bold text-[20px] mb-3 leading-tight drop-shadow">
                {cardData.title}
              </h4>
              <p className="text-gray-200 text-[14px] leading-relaxed mb-5">
                {cardData.subtitle}
              </p>
              <ul className="space-y-4">
                {cardData.points.map((point, index) => (
                  <li key={index} className="flex items-start gap-3 text-[14px] text-gray-100">
                    <span className="w-2 h-2 rounded-full bg-[#0284C7] mt-1.5 flex-shrink-0 shadow-[0_0_8px_rgba(28,242,0,0.8)]"></span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
        
      </div>
    </section>
  );
};

export default ServiceDetailsHero;
