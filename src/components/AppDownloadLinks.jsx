import React from 'react';
import { Download, Smartphone, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const AppDownloadLinks = () => {
  return (
    <section className="w-full bg-[#F8FAFC] py-24 px-6 md:px-10 border-b border-[#E0F2FE]">
      <div className="max-w-5xl mx-auto text-center">
        
        <div className="inline-block bg-[#E0F2FE] text-[#0369A1] rounded-full px-4 py-1 text-sm font-bold tracking-wider mb-6 uppercase">
          Download The App
        </div>
        
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
          Start Your Digital <br className="hidden md:block"/>
          <span className="text-[#0EA5E9]">Financial Journey Today</span>
        </h2>
        
        <p className="text-gray-600 text-[16px] leading-relaxed mb-12 max-w-2xl mx-auto">
          Take control of your property finance information with the HAUS NUO-Pay mobile application.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          
          {/* Android */}
          <div className="bg-white p-8 rounded-3xl border border-[#E0F2FE] shadow-sm hover:-translate-y-2 transition-transform duration-300">
            <div className="w-16 h-16 bg-[#FDFBF7] text-[#0EA5E9] rounded-2xl flex items-center justify-center mx-auto mb-6">
              <svg viewBox="0 0 512 512" width="32" height="32" fill="currentColor">
                <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"/>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Available on Android</h3>
            <p className="text-gray-500 text-[14px] mb-8">Download from Google Play</p>
            <Link 
              to="#"
              className="inline-flex items-center bg-black text-slate-900 rounded-xl px-5 py-2.5 hover:bg-gray-900 transition-colors border border-gray-800"
            >
              <div className="mr-3">
                <svg viewBox="0 0 512 512" width="28" height="28" fill="currentColor">
                  <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z" fill="url(#play-gradient)"/>
                  <defs>
                    <linearGradient id="play-gradient" x1="0" y1="0" x2="0" y2="1">
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
                <div className="text-[10px] uppercase tracking-wide font-medium leading-tight">GET IT ON</div>
                <div className="text-xl font-semibold leading-tight tracking-tight font-sans">Google Play</div>
              </div>
            </Link>
          </div>

          {/* iOS */}
          <div className="bg-white p-8 rounded-3xl border border-[#E0F2FE] shadow-sm hover:-translate-y-2 transition-transform duration-300">
            <div className="w-16 h-16 bg-[#FDFBF7] text-slate-900 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <svg viewBox="0 0 384 512" width="32" height="32" fill="currentColor">
                <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Available on iOS</h3>
            <p className="text-gray-500 text-[14px] mb-8">Download from the App Store</p>
            <Link 
              to="#"
              className="inline-flex items-center bg-black text-slate-900 rounded-xl px-5 py-2.5 hover:bg-gray-900 transition-colors border border-gray-800"
            >
              <div className="mr-3">
                <svg viewBox="0 0 384 512" width="30" height="30" fill="currentColor">
                  <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/>
                </svg>
              </div>
              <div className="text-left">
                <div className="text-[10px] tracking-wide font-medium leading-tight">Download on the</div>
                <div className="text-xl font-semibold leading-tight tracking-tight font-sans">App Store</div>
              </div>
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
};

export default AppDownloadLinks;
