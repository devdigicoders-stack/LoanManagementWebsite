import React from 'react';
import { AlertCircle } from 'lucide-react';

const GetStartedDisclaimer = () => {
  return (
    <section className="w-full bg-[#F8FAFC] py-16 px-6 md:px-10 border-t border-[#E0F2FE]">
      <div className="max-w-4xl mx-auto">
        <div className="bg-[#fff9e6] border border-[#ffecb3] rounded-2xl p-6 md:p-8 flex gap-4 md:gap-6 items-start shadow-sm">
          <div className="text-[#f59e0b] mt-1 shrink-0">
            <AlertCircle size={28} />
          </div>
          <div>
            <h3 className="text-[#92400e] font-bold text-lg mb-2">Important Information</h3>
            <p className="text-[#92400e] text-[14px] leading-relaxed mb-4">
              Submitting this form is an enquiry and does not constitute loan approval, sanction or a commitment to provide any financial product.
            </p>
            <p className="text-[#92400e] text-[14px] leading-relaxed mb-4">
              Loan approval, eligibility, loan amount, interest rate, tenure, property valuation, processing fees and other applicable terms are determined by the respective lender or financial institution based on its policies, assessment and applicable requirements.
            </p>
            <p className="text-[#92400e] text-[14px] leading-relaxed mb-4">
              HAUS NUO-Pay does not guarantee approval or any specific financial terms unless expressly stated in the applicable agreement.
            </p>
            <p className="text-[#92400e] text-[14px] leading-relaxed font-semibold">
              Customers are advised to carefully review all applicable terms and conditions before accepting any financial product.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetStartedDisclaimer;
