import React from 'react';
import { AlertTriangle } from 'lucide-react';

const AboutDisclaimer = () => {
  return (
    <section className="w-full bg-[#fcfcfc] py-16 px-6 md:px-10 border-t border-gray-100">
      <div className="max-w-4xl mx-auto">
        <div className="bg-[#fff9f2] border border-[#ffe0b2] rounded-2xl p-6 md:p-8 flex flex-col md:flex-row gap-6">
          <div className="shrink-0">
            <div className="w-12 h-12 bg-[#ffe0b2] text-[#f57c00] rounded-full flex items-center justify-center">
              <AlertTriangle size={24} strokeWidth={2} />
            </div>
          </div>
          <div>
            <h3 className="text-[#e65100] font-bold text-lg mb-4">Important Disclaimer</h3>
            <div className="space-y-4 text-gray-700 text-[14px] leading-relaxed">
              <p>
                The information provided on this website is for general informational purposes and should not be considered financial, legal, tax or investment advice.
              </p>
              <p>
                Loan approval, interest rates, loan amount, tenure, eligibility, property valuation, charges and other terms are subject to the policies, assessment and approval of the respective lender or financial institution.
              </p>
              <p className="font-semibold text-gray-900">
                Customers are advised to carefully review all applicable terms and conditions and independently assess their repayment capacity before proceeding with any financial product.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutDisclaimer;
