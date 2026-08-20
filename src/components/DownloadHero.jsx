import React from 'react';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const DownloadHero = () => {
  return (
    <section className="relative w-full h-[auto] min-h-[500px] md:min-h-[600px] bg-[#050b06] flex items-center overflow-hidden py-12 md:py-0">
      
      {/* Background Image */}
      <div 
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1600&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      ></div>
      
      {/* Dark gradient overlay for perfect readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#030706] via-[#030706]/90 to-[#030706]/60"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-[#030706] via-transparent to-transparent md:hidden"></div>

      <div className="max-w-7xl mx-auto w-full px-6 md:px-10 relative z-30 flex flex-col lg:flex-row items-center gap-10">
        
        {/* Left Side */}
        <div className="w-full lg:w-1/2 flex flex-col pt-4">
          
          <div className="text-[#1cf200] font-bold text-[12px] tracking-widest mb-4 uppercase drop-shadow">
            DOWNLOAD APP
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-[56px] font-extrabold text-white mb-6 leading-[1.1] drop-shadow-lg">
            Your Financial Journey, <br />
            <span className="text-[#1cf200]">In Your Pocket</span>
          </h1>

          <p className="text-gray-300 text-[15px] md:text-lg leading-relaxed mb-10 max-w-lg drop-shadow">
            Access customized financial and property-related services through our mobile application.
          </p>

          {/* Download Buttons */}
          <div className="flex items-center gap-4">
            <button className="transition-transform hover:scale-105 shadow-lg">
              <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Get it on Google Play" className="h-12" />
            </button>
            <button className="transition-transform hover:scale-105 shadow-lg">
              <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="Download on the App Store" className="h-12" />
            </button>
          </div>
        </div>

        {/* Right Side (Phone Mockup) */}
        <div className="w-full lg:w-1/2 relative flex justify-center lg:justify-end mt-12 lg:mt-0 opacity-90 drop-shadow-2xl">
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
