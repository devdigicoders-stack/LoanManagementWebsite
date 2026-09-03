import React from 'react';
import { MousePointerClick, FileEdit, Eye, ShieldCheck, FileSearch, Gavel } from 'lucide-react';

const GetStartedProcess = () => {
  const steps = [
    {
      num: "01",
      title: "Choose",
      desc: "Select the financial solution that matches your requirement.",
      icon: MousePointerClick
    },
    {
      num: "02",
      title: "Share",
      desc: "Provide your basic personal, property and financial information.",
      icon: FileEdit
    },
    {
      num: "03",
      title: "Review",
      desc: "Review the information you have submitted before continuing.",
      icon: Eye
    },
    {
      num: "04",
      title: "Verification",
      desc: "Where applicable, the relevant lender or financial institution may verify the information and documents provided.",
      icon: ShieldCheck
    },
    {
      num: "05",
      title: "Assessment",
      desc: "Your financial profile and property details may be assessed according to the applicable lender's policies.",
      icon: FileSearch
    },
    {
      num: "06",
      title: "Decision",
      desc: "The respective lender determines eligibility, loan amount, interest rate, tenure and final terms.",
      icon: Gavel
    }
 ;

  return (
    <section className="w-full bg-[#F0F9FF] py-24 px-6 md:px-10 relative overflow-hidden">
      
      {/* Glow Effects */}
      <div className="absolute top-[30%] right-[-10%] w-[500px] h-[500px] bg-[#0EA5E9] rounded-full blur-[150px] opacity-10 pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        <div className="text-center mb-20">
          <div className="inline-block bg-[#F0F9FF] border border-[#0EA5E9]/20 text-[#0EA5E9] rounded-full shadow-sm px-5 py-2 text-sm font-bold tracking-widest uppercase mb-6 shadow-sm">
            How It Works
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
            Getting Started Is <span className="text-[#0EA5E9] drop-shadow-[0_0_10px_rgba(91,193,22,0.3)]">Simple</span>
          </h2>
        </div>

        <div className="relative">
          {/* Vertical Neon Line */}
          <div className="absolute left-[28px] md:left-1/2 top-4 bottom-4 w-1 bg-[#E0F2FE] transform md:-translate-x-1/2 rounded-full hidden sm:block">
            <div className="absolute top-0 left-0 right-0 h-3/4 rounded-full opacity-50 blur-[2px]"></div>
          </div>

          <div className="space-y-12">
            {steps.map((step, index) => {
              const isEven = index % 2 !== 0;
              return (
                <div key={index} className={`flex flex-col sm:flex-row items-center gap-8 sm:gap-0 ${isEven ? 'sm:flex-row-reverse' : ''} group`}>
                  
                  {/* Content Card */}
                  <div className={`w-full sm:w-1/2 ${isEven ? 'sm:pl-16' : 'sm:pr-16 text-left sm:text-right'}`}>
                    <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:border-[#0EA5E9] hover:shadow-xl hover:-translate-y-1 transition-all relative overflow-hidden">
                      <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#0EA5E9] rounded-full blur-[60px] opacity-0 group-hover:opacity-10 transition-opacity"></div>
                      
                      <div className={`text-5xl font-black text-transparent bg-clip-text   mb-4 group-hover:] group-hover:] transition-all ${!isEven ? 'sm:ml-auto' : ''}`}>{step.num}</div>
                      <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-[#0EA5E9] transition-colors">{step.title}</h3>
                      <p className="text-slate-600 text-[15px] leading-relaxed group-hover:text-slate-700 transition-colors">{step.desc}</p>
                    </div>
                  </div>

                  {/* Center Node */}
                  <div className="relative z-10 hidden sm:flex items-center justify-center shrink-0 mx-auto w-16">
                    <div className="w-14 h-14 bg-[#FDFBF7] rounded-full border-4 border-slate-100 text-gray-500 flex items-center justify-center group-hover:border-[#0EA5E9] group-hover:text-[#0EA5E9] group-hover:shadow-[0_0_15px_rgba(91,193,22,0.5)] transition-all duration-300 relative z-20">
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

export default GetStartedProcess;

