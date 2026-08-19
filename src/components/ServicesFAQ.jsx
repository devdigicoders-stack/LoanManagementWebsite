import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const ServicesFAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: "What types of property finance do you provide information about?",
      a: "Our platform provides information about home loans, Loan Against Property, construction finance, renovation finance, commercial property finance and other property-related financial solutions."
    },
    {
      q: "What is a Loan Against Property?",
      a: "Loan Against Property is a secured financing facility where an eligible property may be offered as security, subject to the lender's policies, assessment and approval."
    },
    {
      q: "Can property finance be used for business purposes?",
      a: "Depending on the financial product and lender's policies, eligible property-backed financing may be considered for certain business requirements."
    },
    {
      q: "What documents are generally required?",
      a: "Requirements vary depending on the product and lender. Common documents may include identity proof, address proof, income documents, bank statements and relevant property documents."
    },
    {
      q: "How is my property evaluated?",
      a: "For secured financing, the lender may arrange or require property valuation and document verification as part of its assessment process."
    },
    {
      q: "Is loan approval guaranteed?",
      a: "No. Loan approval is subject to the respective lender's eligibility criteria, verification, credit assessment, property assessment where applicable and internal policies."
    },
    {
      q: "Can I apply for more than one financial solution?",
      a: "The availability of multiple applications or products depends on your circumstances and the policies of the respective lender. Customers should consider their repayment capacity before taking multiple financial commitments."
    }
  ];

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="w-full bg-[#f4fdf5] py-24 px-6 md:px-10 border-t border-[#e8fbe9]">
      <div className="max-w-4xl mx-auto">
        
        <div className="text-center mb-16">
          <div className="inline-block bg-[#e8fbe9] text-[#4a9b12] rounded-full px-4 py-1 text-sm font-bold tracking-wider mb-4 uppercase">
            FAQ
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Frequently Asked <span className="text-[#5bc116]">Questions</span>
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`bg-white rounded-2xl border ${openIndex === index ? 'border-[#5bc116] shadow-md' : 'border-gray-100 shadow-sm'} overflow-hidden transition-all duration-300`}
            >
              <button 
                className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                onClick={() => toggleFaq(index)}
              >
                <span className={`font-bold text-[16px] pr-4 ${openIndex === index ? 'text-[#5bc116]' : 'text-gray-900'}`}>
                  {faq.q}
                </span>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${openIndex === index ? 'bg-[#5bc116] text-white' : 'bg-[#f4fdf5] text-[#5bc116]'}`}>
                  {openIndex === index ? <Minus size={18} strokeWidth={2.5} /> : <Plus size={18} strokeWidth={2.5} />}
                </div>
              </button>
              
              <div 
                className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-96 pb-5 opacity-100' : 'max-h-0 pb-0 opacity-0'}`}
              >
                <p className="text-gray-600 text-[15px] leading-relaxed pt-2 border-t border-gray-50">
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ServicesFAQ;
