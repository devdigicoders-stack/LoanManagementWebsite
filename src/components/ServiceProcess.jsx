import React from 'react';
import { Settings, FileCheck, Search, Landmark, FileSignature, CheckCircle } from 'lucide-react';

const ServiceProcess = () => {
  const steps = [
    {
      icon: <Settings size={24} strokeWidth={2} />,
      title: "Property Evaluation",
      desc: "To assess eligible property value."
    },
    {
      icon: <FileCheck size={24} strokeWidth={2} />,
      title: "Eligibility Check",
      desc: "Based on income and documents."
    },
    {
      icon: <Search size={24} strokeWidth={2} />,
      title: "Document Verification",
      desc: "Technical & legal verification."
    },
    {
      icon: <Landmark size={24} strokeWidth={2} />,
      title: "Loan Sanction",
      desc: "Subject to credit approval."
    },
    {
      icon: <FileSignature size={24} strokeWidth={2} />,
      title: "Lender Disbursement",
      desc: "Based on final loan details."
    },
    {
      icon: <CheckCircle size={24} strokeWidth={2} />,
      title: "Final Verification",
      desc: "Post-disbursement review."
    }
 ;

  return (
    <section className="w-full bg-white py-20 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            How Loan Against Property Works
          </h2>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4 relative w-full overflow-x-auto pb-8 snap-x">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-10 left-[5%] right-[5%] h-[1px] border-t-2 border-dashed border-gray-200 z-0"></div>
          
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center relative z-10 snap-center shrink-0 w-[160px]">
              <div className="w-20 h-20 bg-[#F8FAFC] border border-[#E0F2FE] rounded-2xl flex items-center justify-center text-[#0EA5E9] mb-5 shadow-sm group hover:scale-105 transition-transform">
                {step.icon}
              </div>
              <h4 className="text-gray-900 font-bold text-[14px] mb-2">{step.title}</h4>
              <p className="text-gray-500 text-[12px] leading-relaxed max-w-[140px]">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceProcess;
