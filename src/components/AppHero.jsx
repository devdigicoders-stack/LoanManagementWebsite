import React from 'react';
import { Smartphone, Download, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const AppHero = () => {
  return (
    <section className="w-full bg-[#F0F9FF] pt-32 pb-24 px-6 md:px-10 relative overflow-hidden">
      
      {/* Decorative Gradients */}
      <div className="absolute top-[10%] left-[-10%] w-[500px] h-[500px] bg-[#0EA5E9] rounded-full blur-[150px] opacity-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 relative z-10">
        
        {/* Left Content */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 bg-[#E0F2FE] border border-[#E0F2FE] text-[#0369A1] px-5 py-2 rounded-full mb-6 shadow-[0_0_15px_rgba(91,193,22,0.1)]">
            <Smartphone size={16} />
            <span className="text-sm font-bold tracking-widest uppercase">Download App</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight tracking-wide">
            Your Property Finance Journey, <br className="hidden md:block"/>
            <span className="text-[#0EA5E9] drop-shadow-[0_0_15px_rgba(91,193,22,0.4)]">Right in Your Hands</span>
          </h1>
          
          <p className="text-gray-300 text-[16px] md:text-lg leading-relaxed mb-8">
            Access your property-related financial information and supported services anytime, anywhere with the NGM Housing Payments Limited mobile application.
          </p>
          <p className="text-gray-300 text-[16px] md:text-lg leading-relaxed mb-10">
            Designed with simplicity, convenience and accessibility in mind, our mobile app provides a seamless digital experience for exploring financial solutions, managing supported services and staying updated.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
            <Link 
              to="#"
              className="w-full sm:w-auto inline-flex items-center justify-center bg-black text-white rounded-xl px-5 py-2.5 hover:bg-gray-900 transition-colors border border-gray-800 shadow-lg shadow-black/20 group"
            >
              <div className="mr-3">
                <svg viewBox="0 0 512 512" width="28" height="28" fill="currentColor">
                  <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1z" fill="#FF3333"/>
                  <path d="M47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0z" fill="#33CCFF"/>
                  <path d="M425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8z" fill="#FFCC00"/>
                  <path d="M104.6 499l280.8-161.2-60.1-60.1L104.6 499z" fill="#00CC66"/>
                </svg>
              </div>
              <div className="text-left">
                <div className="text-[10px] uppercase tracking-wide font-medium leading-tight text-gray-200">GET IT ON</div>
                <div className="text-xl font-semibold leading-tight tracking-tight font-sans">Google Play</div>
              </div>
            </Link>
            <Link 
              to="#"
              className="w-full sm:w-auto inline-flex items-center justify-center bg-black text-white rounded-xl px-5 py-2.5 hover:bg-gray-900 transition-colors border border-gray-800 shadow-lg shadow-black/20 group"
            >
              <div className="mr-3">
                <svg viewBox="0 0 384 512" width="30" height="30" fill="currentColor">
                  <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/>
                </svg>
              </div>
              <div className="text-left">
                <div className="text-[10px] tracking-wide font-medium leading-tight text-gray-200">Download on the</div>
                <div className="text-xl font-semibold leading-tight tracking-tight font-sans">App Store</div>
              </div>
            </Link>
          </div>
        </div>

        {/* Right Content - Phone Mockup Graphic */}
        <div className="w-full lg:w-1/2 flex justify-center relative">
          <div className="relative w-72 h-[600px] bg-[#FDFBF7] rounded-[3rem] border-8 border-[#E0F2FE] shadow-2xl flex flex-col overflow-hidden">
            <div className="absolute top-0 inset-x-0 h-6 bg-[#E0F2FE] rounded-b-3xl mx-16 z-20"></div>
            
            {/* Fake App Screen */}
            <div className="flex-1 bg-[#F8FAFC] flex flex-col relative z-10 pt-10 px-5">
              <div className="text-xl font-bold text-gray-900 mb-6">Welcome back,</div>
              
              <div className="bg-[#FDFBF7] rounded-2xl p-5 mb-6 shadow-lg shadow-[#0EA5E9]/10 relative overflow-hidden">
                <div className="absolute right-0 top-0 w-24 h-24 bg-[#0EA5E9] rounded-full blur-2xl opacity-20"></div>
                <div className="text-gray-300 text-sm mb-1">Your Enquiry Status</div>
                <div className="text-white font-bold text-2xl mb-4">Under Review</div>
                <div className="flex items-center gap-2 text-[#0EA5E9] text-sm font-bold">
                  <CheckCircle2 size={16} /> Details Submitted
                </div>
              </div>

              <div className="text-sm font-bold text-gray-900 mb-4">Explore Options</div>
              <div className="grid grid-cols-2 gap-3 mb-6">
                <div className="bg-white rounded-xl p-4 border border-[#E0F2FE] shadow-sm">
                  <div className="w-8 h-8 rounded-full bg-[#f0fbf0] text-[#0EA5E9] flex items-center justify-center mb-2">
                    <Smartphone size={14} />
                  </div>
                  <div className="text-xs font-bold text-gray-900">Home Loan</div>
                </div>
                <div className="bg-white rounded-xl p-4 border border-[#E0F2FE] shadow-sm">
                  <div className="w-8 h-8 rounded-full bg-[#f0fbf0] text-[#0EA5E9] flex items-center justify-center mb-2">
                    <Smartphone size={14} />
                  </div>
                  <div className="text-xs font-bold text-gray-900">LAP</div>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AppHero;
