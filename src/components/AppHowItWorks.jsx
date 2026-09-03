import React from 'react';
import { Download, UserPlus, Search, Send, BellRing } from 'lucide-react';

const AppHowItWorks = () => {
  const steps = [
    {
      num: "01",
      title: "Download",
      desc: "Download the HAUS NUO-Pay application from the appropriate app store.",
      icon: Download
    },
    {
      num: "02",
      title: "Register",
      desc: "Create your account using the required information.",
      icon: UserPlus
    },
    {
      num: "03",
      title: "Explore",
      desc: "Explore available property and financial services according to your requirements.",
      icon: Search
    },
    {
      num: "04",
      title: "Submit an Enquiry",
      desc: "Provide the required information for the financial service you are interested in.",
      icon: Send
    },
    {
      num: "05",
      title: "Stay Updated",
      desc: "Access supported application information and receive relevant updates through the app.",
      icon: BellRing
    }
 ];

  return (
    <section className="w-full bg-[#FDFBF7] py-24 px-6 md:px-10 relative overflow-hidden border-t border-[#E0F2FE]">
      
      {/* Glow Effects */}
      <div className="absolute top-[20%] left-0 w-[400px] h-[400px] bg-[#0EA5E9] rounded-full blur-[150px] opacity-10 pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        <div className="text-center mb-20">
          <div className="inline-block bg-[#F0F9FF] border border-[#0EA5E9]/20 text-[#0EA5E9] rounded-full px-5 py-2 text-sm font-bold tracking-widest uppercase mb-6 shadow-sm">
            How The App Works
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
            A Simple <span className="text-[#0EA5E9] drop-shadow-[0_0_10px_rgba(91,193,22,0.3)]">Digital Journey</span>
          </h2>
        </div>

        <div className="relative">
          {/* Vertical Neon Line */}
          <div className="absolute left-[28px] md:left-1/2 top-4 bottom-4 w-1 bg-[#E0F2FE] transform md:-translate-x-1/2 rounded-full hidden sm:block">
            {/* Glowing inner line */}
            <div className="absolute top-0 left-0 right-0 h-1/2 rounded-full opacity-50 blur-[2px]"></div>
          </div>

          <div className="space-y-12">
            {steps.map((step, index) => {
              const isEven = index % 2 !== 0;
              return (
                <div key={index} className={`flex flex-col sm:flex-row items-center gap-8 sm:gap-0 ${isEven ? 'sm:flex-row-reverse' : ''} group`}>
                  
                  {/* Content Card */}
                  <div className={`w-full sm:w-1/2 ${isEven ? 'sm:pl-16' : 'sm:pr-16 text-left sm:text-right'}`}>
                    <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:-translate-y-1 hover:border-[#0EA5E9]/30 hover:shadow-xl transition-all duration-300 relative overflow-hidden group/card">
                      <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#0EA5E9]/10 rounded-full blur-[40px] opacity-0 group-hover/card:opacity-100 transition-opacity"></div>
                      
                      <div className={`text-5xl font-black text-transparent bg-clip-text bg-gradient-to-br from-gray-200 to-gray-300 mb-4 group-hover/card:from-[#0EA5E9] group-hover/card:to-[#38BDF8] transition-all ${!isEven ? 'sm:ml-auto' : ''}`}>{step.num}</div>
                      <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover/card:text-[#0EA5E9] transition-colors">{step.title}</h3>
                      <p className="text-slate-500 text-[15px] leading-relaxed group-hover/card:text-slate-700 transition-colors">{step.desc}</p>
                    </div>
                  </div>

                  {/* Center Node */}
                  <div className="relative z-10 hidden sm:flex items-center justify-center shrink-0 mx-auto w-16">
                    <div className="w-14 h-14 bg-[#FDFBF7] rounded-full border-4 border-[#E0F2FE] text-gray-500 flex items-center justify-center group-hover:border-[#0EA5E9] group-hover:text-[#0EA5E9] group-hover:shadow-[0_0_15px_rgba(91,193,22,0.5)] transition-all duration-300 relative z-20">
                      <step.icon size={22} strokeWidth={2} />
                    </div>
                  </div>

                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

export default AppHowItWorks;
