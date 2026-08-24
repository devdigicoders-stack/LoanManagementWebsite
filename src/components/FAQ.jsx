import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqData = [
  {
    question: "What is a Loan Against Property?",
    answer: "A Loan Against Property (LAP) is a secured loan where you pledge your residential or commercial property as collateral to borrow funds from a lender."
  },
  {
    question: "What documents are generally required?",
    answer: "Common documents include identity proof, address proof, income proof, bank statements, and property-related documents like title deeds and approved plans."
  },
  {
    question: "How is property valuation done?",
    answer: "Lenders usually appoint independent valuers to assess the current market value of your property, which helps determine your loan eligibility."
  },
  {
    question: "How is loan eligibility determined?",
    answer: "Eligibility is typically based on factors such as your income, credit score, age, existing liabilities, and the market value of the property you intend to pledge or purchase."
  },
  {
    question: "Can I use property finance for business?",
    answer: "Yes, loans like Loan Against Property can be used for business expansion, working capital needs, or other legitimate business purposes."
  },
  {
    question: "Are loan approval and interest rates guaranteed?",
    answer: "No, loan approval, interest rates, and loan terms are entirely at the discretion of the lender based on their credit policies and your financial profile."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-[#F8FAFC] py-20 px-6 md:px-10">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-[36px] font-bold text-gray-900 leading-tight">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
          {faqData.map((faq, index) => (
            <div key={index} className="flex flex-col">
              <button 
                onClick={() => toggleAccordion(index)}
                className="w-full bg-white border border-gray-100 rounded-xl p-5 flex items-center justify-between shadow-sm hover:shadow-md transition-all text-left"
              >
                <span className="font-semibold text-gray-800 text-[15px]">{faq.question}</span>
                <ChevronDown 
                  size={18} 
                  className={`text-slate-600 shrink-0 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`} 
                />
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-[200px] mt-2' : 'max-h-0'}`}
              >
                <div className="bg-white border border-gray-100 rounded-xl p-5 text-gray-600 text-[14px] leading-relaxed shadow-inner">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
