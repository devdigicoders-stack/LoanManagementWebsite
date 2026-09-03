import React from 'react';
import { Download, Smartphone, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const AppDownloadLinks = () => {
  return (
    <section className="w-full bg-[#FDFBF7] py-24 px-6 md:px-10 border-t border-[#E0F2FE]">
      <div className="max-w-4xl mx-auto text-center">
        
        <div className="inline-block bg-[#F0F9FF] border border-[#0EA5E9]/20 text-[#0EA5E9] rounded-full px-5 py-2 text-sm font-bold tracking-widest uppercase mb-6 shadow-sm">
          Download The App
        </div>
        
        <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
          Start Your Digital <br className="hidden md:block"/>
          <span className="text-[#0EA5E9]">Financial Journey Today</span>
        </h2>
        
        <p className="text-slate-600 text-[16px] leading-relaxed mb-12 max-w-2xl mx-auto">
          Take control of your property finance information with the HAUS NUO-Pay mobile application.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          
          {/* Android */}
          <Link 
            to="#"
            className="flex items-center gap-4 bg-white text-slate-900 px-8 py-5 rounded-2xl hover:bg-slate-50 transition-all duration-300 border border-slate-200 hover:border-[#0EA5E9]/50 shadow-sm hover:shadow-lg hover:-translate-y-1 w-full sm:w-auto min-w-[280px] group"
          >
            <div className="w-12 h-12 bg-slate-50 border border-slate-100 rounded-full flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
              <svg viewBox="0 0 512 512" width="24" height="24" fill="currentColor">
                <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z" fill="url(#play-gradient-2)"/>
                <defs>
                  <linearGradient id="play-gradient-2" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#00ff00"/>
                    <stop offset="100%" stopColor="#0099ff"/>
                  </linearGradient>
                </defs>
                <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1z" fill="#FF3333"/>
                <path d="M47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0z" fill="#33CCFF"/>
                <path d="M425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8z" fill="#FFCC00"/>
                <path d="M104.6 499l280.8-161.2-60.1-60.1L104.6 499z" fill="#00CC66"/>
              </svg>
            </div>
            <div className="text-left">
              <div className="text-[11px] uppercase tracking-wider font-bold text-slate-500">GET IT ON</div>
              <div className="text-xl font-bold leading-tight text-slate-900">Google Play</div>
            </div>
          </Link>

          {/* iOS */}
          <Link 
            to="#"
            className="flex items-center gap-4 bg-white text-slate-900 px-8 py-5 rounded-2xl hover:bg-slate-50 transition-all duration-300 border border-slate-200 hover:border-[#0EA5E9]/50 shadow-sm hover:shadow-lg hover:-translate-y-1 w-full sm:w-auto min-w-[280px] group"
          >
            <div className="w-12 h-12 bg-slate-50 border border-slate-100 rounded-full flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
              <svg viewBox="0 0 384 512" width="26" height="26" fill="currentColor">
                <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/>
              </svg>
            </div>
            <div className="text-left">
              <div className="text-[11px] uppercase tracking-wider font-bold text-slate-500">Download on the</div>
              <div className="text-xl font-bold leading-tight text-slate-900">App Store</div>
            </div>
          </Link>

        </div>

      </div>
    </section>
  );
};

export default AppDownloadLinks;
