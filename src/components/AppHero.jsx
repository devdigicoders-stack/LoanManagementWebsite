import React from 'react';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const AppHero = () => {
  return (
    <div className="relative w-full h-[250px] md:h-[300px] lg:h-[350px] bg-[#041424] overflow-hidden font-sans shadow-sm">
      <div className="w-full h-full relative flex items-center overflow-hidden">
        
        {/* 1. Right Side Image */}
        <div className="absolute top-0 right-0 w-[80%] md:w-[70%] lg:w-[65%] h-full z-0">
          <img
            src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1600&q=80"
            alt="Download HAUS NUO-Pay App"
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* 2. Cyan Accent Line (Diagonal) */}
        <div className="absolute top-0 left-0 w-full h-full bg-[#0EA5E9] z-10 hero-clip-accent"></div>

        {/* 3. Main Dark Blue Diagonal Background */}
        <div className="absolute top-0 left-0 w-full h-full bg-[#041424] z-20 hero-clip-bg">
          {/* Subtle Geometric Triangles Pattern Overlay */}
          <div 
            className="absolute inset-0 opacity-[0.03] pointer-events-none" 
            style={{ 
              backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M30 0l30 60H0L30 0z\' fill=\'%23ffffff\' fill-rule=\'evenodd\'/%3E%3C/svg%3E")', 
              backgroundSize: '60px 60px' 
            }}
          ></div>
        </div>
        
        {/* 4. Left Content */}
        <div className="relative z-30 w-[72%] sm:w-[65%] lg:w-[55%] px-5 sm:px-8 lg:px-12 xl:px-16 flex flex-col justify-center h-full">
          <div className="inline-block text-[#0EA5E9] font-bold text-xs tracking-wider uppercase mb-1">
            DOWNLOAD APP
          </div>
          
          <h1 className="font-display text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2 lg:mb-3 leading-tight drop-shadow-md">
            Your Financial Journey, <br />
            <span className="text-[#0EA5E9]">Right In Your Hands</span>
          </h1>
          
          <p className="text-gray-300 text-xs md:text-sm lg:text-base mb-4 max-w-md leading-relaxed hidden sm:block">
            Access your property-related financial information and track EMI payments anytime, anywhere.
          </p>
          
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 text-xs md:text-sm font-medium">
            <Link to="/" className="text-gray-400 hover:text-white transition-colors">Home</Link>
            <ChevronRight className="text-gray-500" size={14} strokeWidth={2.5} />
            <span className="text-[#0EA5E9] font-semibold">Download App</span>
          </div>
        </div>

      </div>
    </div>
  );
};

export default AppHero;
