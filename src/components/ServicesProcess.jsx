import React from 'react';
import { Search, PenLine, BookOpen, ShieldCheck, FileSearch, CheckCircle, ArrowRightCircle } from 'lucide-react';

const ServicesProcess = () => {
  const steps = [
    {
      num: "01",
      title: "Explore",
      desc: "Choose the financial solution that best matches your requirement.",
      icon: Search
    },
    {
      num: "02",
      title: "Share Your Requirement",
      desc: "Provide basic information about your financial or property requirement.",
      icon: PenLine
    },
    {
      num: "03",
      title: "Understand",
      desc: "Review relevant eligibility factors, documents, repayment considerations and applicable charges.",
      icon: BookOpen
    },
    {
      num: "04",
      title: "Verification",
      desc: "Where applicable, the relevant lender or financial institution evaluates the information and documents provided.",
      icon: ShieldCheck
    },
    {
      num: "05",
      title: "Assessment",
      desc: "The lender may assess the applicant's financial profile and, where applicable, the property and related documents.",
      icon: FileSearch
    },
    {
      num: "06",
      title: "Decision",
      desc: "Loan approval, loan amount, interest rate and final terms are determined by the respective lender according to its policies.",
      icon: CheckCircle
    },
    {
      num: "07",
      title: "Further Process",
      desc: "If approved, the customer proceeds according to the applicable sanction, agreement and disbursement terms.",
      icon: ArrowRightCircle
    }
 ];

  return (
    <section className="w-full bg-[#F0F9FF] py-24 px-6 md:px-10 relative overflow-hidden">
      
      {/* Background glowing orbs for premium feel */}
      <div className="absolute top-[20%] left-[-10%] w-[500px] h-[500px] bg-[#0EA5E9] rounded-full blur-[200px] opacity-10 pointer-events-none"></div>
      <div className="absolute bottom-[20%] right-[-10%] w-[500px] h-[500px] bg-[#0EA5E9] rounded-full blur-[200px] opacity-10 pointer-events-none"></div>

      <div className="max-w-5xl mx-auto relative z-10">
        
        <div className="text-center mb-24">
          <div className="inline-block bg-[#E0F2FE] border border-[#E0F2FE] text-[#0369A1] rounded-full px-5 py-2 text-sm font-bold tracking-widest uppercase mb-6 shadow-[0_0_15px_rgba(91,193,22,0.1)]">
            A Simple & Transparent Journey
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight tracking-wide">
            How Our Services <span className="text-[#0EA5E9] drop-shadow-[0_0_15px_rgba(91,193,22,0.4)]">Work</span>
          </h2>
        </div>

        <div className="relative">
          {/* Neon Vertical Line */}
          <div className="absolute left-8 md:left-1/2 top-4 bottom-4 w-[2px transform md:-translate-x-1/2 hidden md:block opacity-30 shadow-[0_0_10px_#0EA5E9]"></div>

          <div className="space-y-16">
            {steps.map((step, index) => {
              const isEven = index % 2 !== 0;
              return (
                <div key={index} className={`flex flex-col md:flex-row items-center gap-8 md:gap-0 ${isEven ? 'md:flex-row-reverse' : ''} group`}>
                  
                  {/* Left/Right Content Card */}
                  <div className={`w-full md:w-1/2 ${isEven ? 'md:pl-16' : 'md:pr-16 text-left md:text-right'}`}>
                    <div className="bg-[#FDFBF7] p-8 rounded-3xl border border-[#E0F2FE] shadow-lg group-hover:border-[#0EA5E9] group-hover:shadow-[0_0_25px_rgba(91,193,22,0.15)] transition-all duration-500 relative z-10 overflow-hidden">
                      
                      {/* Subtle hover gradient inside card */}
                      <div className="absolute top-0 right-0 w-32 h-32 bg-[#0EA5E9] rounded-full blur-[80px] opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none"></div>

                      <div className={`text-5xl font-black text-[#E0F2FE] mb-4 group-hover:text-[#0EA5E9]/20 transition-colors duration-500 tracking-tighter ${!isEven ? 'md:ml-auto' : ''}`}>{step.num}</div>
                      <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-[#0EA5E9] transition-colors duration-500">{step.title}</h3>
                      <p className="text-slate-600 text-[15px] leading-relaxed group-hover:text-slate-700 transition-colors duration-500">{step.desc}</p>
                    </div>
                  </div>

                  {/* Center Icon */}
                  <div className="relative z-20 flex items-center justify-center shrink-0 mx-auto hidden md:flex">
                    <div className="w-16 h-16 bg-[#F0F9FF] rounded-full border-2 border-[#E0F2FE] text-[#0EA5E9] flex items-center justify-center shadow-xl group-hover:border-[#0EA5E9] group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(91,193,22,0.4)] group-hover:bg-[#E0F2FE] transition-all duration-500">
                      <step.icon size={26} strokeWidth={2} className="group-hover:drop-shadow-[0_0_8px_#0EA5E9]" />
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

export default ServicesProcess;
