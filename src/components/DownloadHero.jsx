import React from 'react';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const DownloadHero = () => {
  return (
    <section className="w-full bg-[#fcfcfc] py-10 px-6 md:px-10 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10">
        
        {/* Left Side */}
        <div className="w-full lg:w-1/2 flex flex-col pt-4">
          {/* Breadcrumbs */}
          <div className="flex items-center flex-wrap gap-2 text-[13px] md:text-[14px] font-medium text-gray-500 mb-8">
            <Link to="/" className="hover:text-[#5bc116] transition-colors">Home</Link>
            <ChevronRight size={14} />
            <span className="text-[#5bc116]">Download App</span>
          </div>

          <h1 className="text-3xl md:text-5xl lg:text-[46px] font-bold text-gray-900 mb-5 leading-[1.2]">
            Your Financial Journey, <br />
            In Your Pocket
          </h1>

          <p className="text-gray-500 text-[15px] md:text-base leading-relaxed mb-10 max-w-md">
            Access customized financial and property-related services through our mobile application.
          </p>

          {/* Download Buttons */}
          <div className="flex items-center gap-4">
            <button className="transition-transform hover:scale-105">
              <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Get it on Google Play" className="h-12" />
            </button>
            <button className="transition-transform hover:scale-105">
              <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="Download on the App Store" className="h-12" />
            </button>
          </div>
        </div>

        {/* Right Side (Phone Mockup) */}
        <div className="w-full lg:w-1/2 relative flex justify-center lg:justify-end mt-12 lg:mt-0">
          <div className="relative w-full max-w-[400px]">
            {/* Background Blob/Circle */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-[#f0fbf0] rounded-full blur-3xl z-0"></div>
            
            {/* Phone Mockup Placeholder */}
            <div className="relative z-10 w-[280px] h-[580px] bg-black rounded-[2.5rem] border-[8px] border-gray-900 shadow-2xl mx-auto flex flex-col overflow-hidden">
              {/* Notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-gray-900 rounded-b-2xl z-20"></div>
              
              {/* Screen Content */}
              <div className="flex-1 bg-gradient-to-br from-[#0b0f0e] to-[#132015] w-full flex flex-col items-center justify-center p-6 text-center">
                <img src="/loanlogo.png" alt="Logo" className="h-8 mb-8" />
                <h3 className="text-white font-bold text-xl mb-2">Welcome Back</h3>
                <p className="text-gray-400 text-sm mb-8">Login to manage your loans</p>
                <div className="w-full h-12 bg-white/10 rounded-xl mb-4 backdrop-blur-md"></div>
                <div className="w-full h-12 bg-white/10 rounded-xl mb-6 backdrop-blur-md"></div>
                <div className="w-full h-12 bg-[#5bc116] rounded-xl text-white font-bold flex items-center justify-center">Login</div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default DownloadHero;
