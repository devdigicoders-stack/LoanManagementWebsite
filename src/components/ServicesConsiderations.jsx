import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const ServicesConsiderations = () => {
  const items = [
    {
      title: "Loan Amount",
      desc: "Determine how much financing you actually require based on your financial requirement."
    },
    {
      title: "Interest Rate",
      desc: "Understand the applicable interest rate and how it affects your overall repayment."
    },
    {
      title: "Loan Tenure",
      desc: "Consider the repayment period and its impact on your periodic payment and overall cost."
    },
    {
      title: "EMI / Repayment",
      desc: "Make sure the repayment amount fits comfortably within your financial capacity."
    },
    {
      title: "Processing Charges",
      desc: "Review applicable processing fees and other service-related charges."
    },
    {
      title: "Property Requirements",
      desc: "For secured financing, understand applicable property eligibility, valuation and documentation requirements."
    },
    {
      title: "Prepayment & Foreclosure",
      desc: "Review applicable terms and charges before planning early repayment or foreclosure."
    },
    {
      title: "Total Financial Cost",
      desc: "Look beyond the loan amount and understand the overall repayment obligation."
    }
  ];

  return (
    <section className="w-full bg-white py-24 px-6 md:px-10">
      <div className="max-w-4xl mx-auto">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            What You Should Consider <br className="hidden md:block"/>
            <span className="text-[#5bc116]">Before Taking a Loan</span>
          </h2>
          <p className="text-gray-600 text-[16px] leading-relaxed max-w-2xl mx-auto">
            Before choosing a financial product, consider the following key aspects:
          </p>
        </div>

        <div className="bg-[#fcfcfc] border border-gray-100 rounded-3xl p-8 md:p-10 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
            {items.map((item, index) => (
              <div key={index} className="flex gap-4">
                <div className="mt-1">
                  <CheckCircle2 className="text-[#5bc116]" size={20} strokeWidth={2} />
                </div>
                <div>
                  <h4 className="text-gray-900 font-bold text-[16px] mb-2">{item.title}</h4>
                  <p className="text-gray-500 text-[14px] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default ServicesConsiderations;
