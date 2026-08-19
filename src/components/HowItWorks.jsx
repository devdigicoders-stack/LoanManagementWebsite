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
    <section className="w-full bg-[#f4fdf5] py-24 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-[#e8f8e8] text-[#4b9b22] rounded-full px-5 py-2 text-sm font-bold tracking-wider mb-6">
            PROCESS
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-black leading-tight">
            How It <span className="text-[#5bc116]">Works</span>
          </h2>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {steps.map((step, index) => (
            <div key={index} className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col items-center text-center group">
              <div className="w-16 h-16 rounded-2xl bg-[#f0fbf0] text-[#5bc116] flex items-center justify-center mb-6 group-hover:bg-[#5bc116] group-hover:text-white transition-colors duration-300">
                <step.icon size={32} strokeWidth={1.5} />
              </div>
              <div className="text-3xl font-extrabold text-gray-200 mb-4 group-hover:text-[#d1e8c9] transition-colors">{step.num}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default HowItWorks;
