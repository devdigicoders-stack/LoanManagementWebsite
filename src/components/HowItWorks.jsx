import React from 'react';
import { Search, BookOpen, Send, ShieldCheck, CheckCircle } from 'lucide-react';

const steps = [
  {
    num: "01",
    title: "Explore",
    desc: "Choose the financial solution that matches your requirement.",
    icon: Search
  },
  {
    num: "02",
    title: "Understand",
    desc: "Review eligibility, documentation, repayment, interest, and applicable charges.",
    icon: BookOpen
  },
  {
    num: "03",
    title: "Apply / Enquire",
    desc: "Submit your details through the available digital process.",
    icon: Send
  },
  {
    num: "04",
    title: "Verification",
    desc: "The relevant lender or financial institution evaluates your application and documents.",
    icon: ShieldCheck
  },
  {
    num: "05",
    title: "Decision",
    desc: "Loan approval and final terms are determined according to the applicable lender's policies.",
    icon: CheckCircle
  }
];

const HowItWorks = () => {
  return (
    <section className="w-full bg-transparent py-16 md:py-24 px-6 md:px-10 relative overflow-hidden">
      
      {/* Glow Effects */}
      <div className="absolute top-[20%] left-[-10%] w-[400px] h-[400px] bg-[#0EA5E9] rounded-full blur-[150px] opacity-10 pointer-events-none"></div>

      <div className="w-full px-6 lg:px-12 xl:px-16 mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-[#F0F9FF] border border-[#0EA5E9]/30 text-[#0EA5E9] rounded-full px-5 py-2 text-sm font-bold tracking-wider mb-6">
            PROCESS
          </div>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-slate-900 leading-tight">
            How It <span className="text-[#0EA5E9]">Works</span>
          </h2>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {steps.map((step, index) => (
            <div key={index} className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-200 hover:border-[#0EA5E9]/50 hover:-translate-y-2 flex flex-col items-center text-center group">
              <div className="w-16 h-16 rounded-2xl bg-[#F0F9FF] border border-[#E0F2FE] text-[#0EA5E9] flex items-center justify-center mb-6 group-hover:bg-[#0EA5E9] group-hover:text-white group-hover:border-[#0EA5E9] group-hover:shadow-md transition-all duration-300 transform group-hover:scale-110">
                <step.icon size={32} strokeWidth={1.5} />
              </div>
              <div className="text-3xl font-extrabold text-slate-200 mb-4 group-hover:text-[#0EA5E9] transition-colors">{step.num}</div>
              <h3 className="font-display text-xl font-bold text-slate-900 mb-3 group-hover:text-[#0EA5E9] transition-colors">{step.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed group-hover:text-slate-700 transition-colors">{step.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default HowItWorks;
