import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const ContactFAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: "How can I contact NGM Housing Payments Limited?",
      a: "You can contact us through phone, email or the enquiry form available on this page."
    },
    {
      q: "Can I enquire about a Home Loan?",
      a: "Yes. You can select \"Home Loan\" in the enquiry form and provide your basic requirement."
    },
    {
      q: "Can I enquire about a Loan Against Property?",
      a: "Yes. Select \"Loan Against Property\" and provide the relevant property and financial details."
    },
    {
      q: "What information should I provide in my enquiry?",
      a: "You may provide your name, contact details, property type, property location, financial requirement and approximate loan requirement."
    },
    {
      q: "Do I need to provide property documents when making an enquiry?",
      a: "Generally, basic information may be sufficient for an initial enquiry. Additional documents may be requested later depending on the financial product and applicable process."
    },
    {
      q: "Is loan approval guaranteed after contacting you?",
      a: "No. An enquiry does not guarantee loan approval. Eligibility, loan amount, interest rate and final terms are subject to the respective lender's assessment, policies and approval process."
    },
    {
      q: "How long does it take to receive a response?",
      a: "Response times may vary depending on the nature of the enquiry and the information provided. Our team will make reasonable efforts to respond through the available support channels."
    }
  ];

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="w-full bg-[#F8FAFC] py-24 px-6 md:px-10 border-t border-[#E0F2FE]">
      <div className="max-w-4xl mx-auto">
        
        <div className="text-center mb-16">
          <div className="inline-block bg-[#E0F2FE] text-[#0369A1] rounded-full px-4 py-1 text-sm font-bold tracking-wider mb-4 uppercase">
            FAQ
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Frequently Asked <span className="text-[#0EA5E9]">Questions</span>
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`bg-white rounded-2xl border ${openIndex === index ? 'border-[#0EA5E9] shadow-md' : 'border-gray-100 shadow-sm'} overflow-hidden transition-all duration-300`}
            >
              <button 
                className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                onClick={() => toggleFaq(index)}
              >
                <span className={`font-bold text-[16px] pr-4 ${openIndex === index ? 'text-[#0EA5E9]' : 'text-gray-900'}`}>
                  {faq.q}
                </span>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${openIndex === index ? 'bg-[#0EA5E9] text-slate-900' : 'bg-[#F8FAFC] text-[#0EA5E9]'}`}>
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

export default ContactFAQ;
