import React from 'react';
import { BookOpen, FileText, Calculator, Home } from 'lucide-react';

const ServicesGuidance = () => {
  const guidanceItems = [
    {
      icon: <BookOpen size={24} strokeWidth={1.5} />,
      title: "Eligibility",
      desc: "Understand the general factors that may influence loan eligibility, including income, age, employment or business profile, credit history, existing obligations and property-related factors."
    },
    {
      icon: <FileText size={24} strokeWidth={1.5} />,
      title: "Documentation",
      desc: "Learn about commonly required documents such as identity proof, address proof, income documents, bank statements and property-related documents."
    },
    {
      icon: <Calculator size={24} strokeWidth={1.5} />,
      title: "Interest & Repayment",
      desc: "Understand how interest rates, loan tenure, EMI, total repayment and other costs can affect your financial commitment."
    },
    {
      icon: <Home size={24} strokeWidth={1.5} />,
      title: "Property Valuation",
      desc: "Understand why property valuation may be required and how property characteristics can influence the assessment of a secured financial product."
    }
  ];

  return (
    <section className="w-full bg-[#0b0f0e] py-24 px-6 md:px-10 border-b border-[#1a241c]">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-20">
        
        {/* Left Side */}
        <div className="w-full lg:w-1/3">
          <div className="inline-flex items-center gap-2 text-[#5bc116] mb-6">
            <span className="text-sm font-bold tracking-widest uppercase">Financial Information & Guidance</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Understand Before <br className="hidden lg:block"/> You <span className="text-[#5bc116]">Borrow</span>
          </h2>
          <p className="text-gray-400 text-[15px] leading-relaxed mb-8">
            A loan is more than just the amount you receive. Understanding the complete financial commitment is important before making a decision.
          </p>
          <div className="bg-[#111814] border border-[#1a241c] p-6 rounded-2xl">
            <p className="text-gray-400 text-[14px]">
              Our platform provides information around the key areas that lenders typically evaluate.
            </p>
          </div>
        </div>

        {/* Right Side - Grid */}
        <div className="w-full lg:w-2/3">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {guidanceItems.map((item, index) => (
              <div key={index} className="bg-[#111814] p-8 rounded-2xl border border-[#1a241c] hover:border-[#2a3a2c] transition-colors group">
                <div className="w-12 h-12 bg-[#0b0f0e] border border-[#1a241c] text-[#5bc116] rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#5bc116] group-hover:text-white transition-colors">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-gray-400 text-[14px] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default ServicesGuidance;
