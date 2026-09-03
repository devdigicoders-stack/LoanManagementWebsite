import React from 'react';
import { Smartphone, CheckCircle2, Shield, Zap, Bell, Clock, ChevronRight, Home, FileText, User, Wallet, Activity, Search } from 'lucide-react';
import { Link } from 'react-router-dom';

const AppHero = () => {
  return (
    <section className="w-full bg-slate-50 pt-28 pb-20 px-6 md:px-10 relative overflow-hidden">
      
      {/* Decorative Gradients */}
      <div className="absolute top-[-10%] left-[-5%] w-[400px] h-[400px] bg-sky-200 rounded-full blur-[120px] opacity-60 pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-5%] w-[350px] h-[350px] bg-blue-200 rounded-full blur-[120px] opacity-60 pointer-events-none" />

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 relative z-10">
        
        {/* Left Content */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 bg-sky-100 border border-sky-200 text-sky-700 px-4 py-1.5 rounded-full mb-6 shadow-sm">
            <Smartphone size={14} />
            <span className="text-xs font-bold tracking-widest uppercase">Download App</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-5 leading-tight">
            Your Property Finance Journey,{' '}
            <span className="text-blue-600 block mt-2">Right in Your Hands</span>
          </h1>
          
          <p className="text-slate-600 text-base md:text-lg leading-relaxed mb-4 max-w-xl mx-auto lg:mx-0">
            Access your property-related financial information and supported services anytime, anywhere with the HAUS NUO-Pay mobile application.
          </p>
          <p className="text-slate-500 text-sm md:text-base leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
            Designed with simplicity, convenience and accessibility in mind, our mobile app provides a seamless digital experience for exploring financial solutions, managing supported services and staying updated.
          </p>

          {/* Feature Pills */}
          <div className="flex flex-wrap gap-3 mb-10 justify-center lg:justify-start">
            {[
              { icon: Shield, text: 'Bank-level Security' },
              { icon: Zap, text: 'Instant Updates' },
              { icon: Bell, text: 'Smart Alerts' },
            ].map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-2 bg-white border border-slate-200 text-slate-700 px-4 py-2 rounded-full text-xs font-bold shadow-sm">
                <Icon size={14} className="text-blue-500" />
                {text}
              </div>
            ))}
          </div>

          {/* Download Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
            <Link
              to="#"
              className="w-full sm:w-auto inline-flex items-center justify-center bg-slate-900 text-white rounded-xl px-6 py-3 hover:bg-black transition-all border border-slate-800 shadow-xl hover:shadow-2xl group transform hover:-translate-y-1"
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
                <div className="text-[10px] uppercase tracking-wider font-medium leading-tight text-slate-300">GET IT ON</div>
                <div className="text-lg font-bold leading-tight">Google Play</div>
              </div>
            </Link>
            <Link
              to="#"
              className="w-full sm:w-auto inline-flex items-center justify-center bg-slate-900 text-white rounded-xl px-6 py-3 hover:bg-black transition-all border border-slate-800 shadow-xl hover:shadow-2xl group transform hover:-translate-y-1"
            >
              <div className="mr-3">
                <svg viewBox="0 0 384 512" width="28" height="28" fill="currentColor">
                  <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/>
                </svg>
              </div>
              <div className="text-left">
                <div className="text-[10px] tracking-wider font-medium leading-tight text-slate-300">Download on the</div>
                <div className="text-lg font-bold leading-tight">App Store</div>
              </div>
            </Link>
          </div>
        </div>

        {/* Right Content - Phone Mockup */}
        <div className="w-full lg:w-1/2 flex justify-center relative mt-16 lg:mt-0 items-center">
          <div className="relative">
            {/* Glow behind phone */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-64 h-64 bg-blue-400 rounded-full blur-[100px] opacity-30" />
            </div>
            
            {/* Phone Case */}
            <div className="relative w-[280px] h-[580px] bg-slate-900 rounded-[3rem] p-[8px] shadow-2xl flex flex-col transform lg:rotate-[-2deg] transition-transform hover:rotate-0 duration-500 border border-slate-700">
              
              {/* Phone Screen Container */}
              <div className="w-full h-full bg-slate-50 rounded-[2.5rem] flex flex-col overflow-hidden relative">
                
                {/* iPhone Notch */}
                <div className="absolute top-0 inset-x-0 flex justify-center z-30">
                  <div className="w-[120px] h-[25px] bg-slate-900 rounded-b-3xl relative">
                    <div className="absolute top-2 right-6 w-[8px] h-[8px] rounded-full bg-slate-800 border border-slate-700"></div>
                    <div className="absolute top-2 right-12 w-[35px] h-[6px] rounded-full bg-slate-800"></div>
                  </div>
                </div>
                
                {/* Status bar */}
                <div className="h-10 bg-slate-50 w-full flex items-center justify-between px-6 pt-2 z-20">
                  <span className="text-[10px] font-bold text-slate-900">9:41</span>
                  <div className="flex items-center gap-1">
                    <div className="w-3 h-2.5 flex items-end gap-[1px]">
                      <div className="w-[2px] h-1 bg-slate-900 rounded-sm"></div>
                      <div className="w-[2px] h-1.5 bg-slate-900 rounded-sm"></div>
                      <div className="w-[2px] h-2 bg-slate-900 rounded-sm"></div>
                      <div className="w-[2px] h-2.5 bg-slate-900 rounded-sm"></div>
                    </div>
                    <div className="text-[10px] ml-1">
                      <svg width="14" height="10" viewBox="0 0 24 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="0.5" y="0.5" width="20" height="13" rx="3.5" stroke="#0f172a" strokeWidth="1"/>
                        <rect x="2" y="2" width="14" height="10" rx="2" fill="#0f172a"/>
                        <path d="M22 5V9" stroke="#0f172a" strokeWidth="1" strokeLinecap="round"/>
                      </svg>
                    </div>
                  </div>
                </div>

                {/* App Screen Content */}
                <div className="flex-1 bg-slate-50 flex flex-col px-5 overflow-hidden">
                  
                  {/* Header */}
                  <div className="flex items-center justify-between mb-5 mt-2">
                    <div>
                      <div className="text-[11px] text-slate-500 font-medium">Good Morning</div>
                      <div className="text-base font-extrabold text-slate-900">Welcome back ??</div>
                    </div>
                    <div className="w-9 h-9 rounded-full bg-blue-600 flex items-center justify-center shadow-md">
                      <span className="text-white text-sm font-bold">N</span>
                    </div>
                  </div>

                  {/* Status Card */}
                  <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-[1.5rem] p-5 mb-6 shadow-xl relative overflow-hidden flex justify-between items-center group cursor-pointer border border-blue-500/50">
                    <div className="z-10 flex flex-col justify-center">
                      <div className="text-blue-100 text-[9px] font-bold uppercase tracking-widest mb-1.5">Your Enquiry Status</div>
                      <div className="text-white font-extrabold text-lg mb-4">Under Review</div>
                      <div className="flex items-center gap-2 bg-black/20 w-fit px-2.5 py-1 rounded-full text-white/90 text-[10px] font-medium backdrop-blur-sm">
                        <Clock size={12} strokeWidth={2.5} />
                        Details Submitted
                      </div>
                    </div>
                    
                    {/* Illustration placeholder */}
                    <div className="relative z-10 w-[55px] h-[65px] bg-white rounded-xl flex items-center justify-center shadow-inner">
                      <div className="w-[34px] h-[5px] bg-slate-200 absolute top-3 rounded-full"></div>
                      <div className="w-[24px] h-[5px] bg-slate-200 absolute top-5 rounded-full"></div>
                      <div className="w-[34px] h-[5px] bg-slate-200 absolute top-7 rounded-full"></div>
                      <Search size={28} strokeWidth={3} className="text-blue-600 absolute -bottom-3 -right-3 bg-white rounded-full p-1.5 shadow-lg" />
                    </div>
                    
                    <ChevronRight size={14} strokeWidth={3} className="text-white/70 absolute bottom-5 right-4" />
                    
                    {/* Background decorations */}
                    <div className="absolute -right-10 -top-10 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
                    <div className="absolute -left-10 -bottom-10 w-24 h-24 bg-black/10 rounded-full blur-xl" />
                  </div>

                  {/* Quick Options */}
                  <div className="text-[10px] font-bold text-slate-500 mb-3 uppercase tracking-widest">Explore Options</div>
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {[
                      { title: 'Home Loan', icon: Home },
                      { title: 'LAP', icon: FileText },
                      { title: 'Personal', icon: User },
                      { title: 'Balance TR', icon: Wallet },
                    ].map((item, idx) => (
                      <div key={item.title} className="bg-white rounded-[14px] p-3 border border-slate-200 shadow-sm flex items-center justify-between cursor-pointer hover:shadow-md hover:border-slate-300 transition-all">
                        <div className="flex items-center gap-2.5">
                          <div className="w-[28px] h-[28px] rounded-lg bg-blue-50 flex items-center justify-center shrink-0">
                            <item.icon size={14} strokeWidth={2.5} className="text-blue-600" />
                          </div>
                          <div className="text-[11px] font-bold text-slate-800">{item.title}</div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Recent Activity */}
                  <div className="text-[10px] font-bold text-slate-500 mb-3 uppercase tracking-widest">Recent Activity</div>
                  <div className="space-y-3 flex-1 overflow-y-auto pb-6 hide-scrollbar relative">
                    <div className="absolute left-[13px] top-4 bottom-8 w-[2px] bg-slate-200"></div>
                    
                    {[
                      { label: 'Application Submitted', date: 'Today, 10:30 AM', status: 'Done', statusColor: 'bg-emerald-100 text-emerald-700', icon: FileText, iconColor: 'text-emerald-600', iconBg: 'bg-emerald-50' },
                      { label: 'Document Verified', date: 'Yesterday', status: 'Done', statusColor: 'bg-blue-100 text-blue-700', icon: Shield, iconColor: 'text-blue-600', iconBg: 'bg-blue-50' },
                    ].map((item) => (
                      <div key={item.label} className="bg-white rounded-2xl p-3 border border-slate-100 shadow-sm flex items-center justify-between relative z-10">
                        <div className="flex items-center gap-3">
                          <div className={`w-[28px] h-[28px] rounded-full ${item.iconBg} border border-slate-200 flex items-center justify-center relative shrink-0 shadow-sm`}>
                            <item.icon size={13} strokeWidth={2.5} className={item.iconColor} />
                          </div>
                          <div>
                            <div className="text-[11px] font-bold text-slate-900 tracking-tight">{item.label}</div>
                            <div className="text-[9px] font-medium text-slate-500 mt-0.5">{item.date}</div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Nav */}
                <div className="h-[65px] bg-white border-t border-slate-200 flex items-center justify-around px-3 pb-3 pt-2 shadow-[0_-10px_30px_rgba(0,0,0,0.05)] rounded-b-[2.5rem] z-20">
                  {[
                    { name: 'Home', icon: Home },
                    { name: 'Loans', icon: FileText },
                    { name: 'Track', icon: Activity },
                    { name: 'Profile', icon: User }
                  ].map((nav) => {
                    const isActive = nav.name === 'Home';
                    return (
                      <button key={nav.name} className={`flex flex-col items-center justify-center gap-1.5 ${isActive ? 'text-blue-600' : 'text-slate-400 hover:text-slate-600'} transition-colors w-14`}>
                        <nav.icon size={18} strokeWidth={isActive ? 2.5 : 2} />
                        <span className="text-[9px] font-bold tracking-wide">{nav.name}</span>
                      </button>
                    );
                  })}
                </div>
                
                {/* Home Indicator */}
                <div className="absolute bottom-2 inset-x-0 flex justify-center z-30">
                  <div className="w-[100px] h-[4px] bg-slate-900 rounded-full opacity-30"></div>
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
