import React from 'react';
import { AlertTriangle } from 'lucide-react';

const AppDisclaimer = () => {
  return (
    <section className="w-full bg-[#fcfcfc] py-16 px-6 md:px-10 border-b border-gray-100">
      <div className="max-w-4xl mx-auto">
        <div className="bg-[#fff9f2] border border-[#ffe0b2] rounded-2xl p-6 md:p-8 flex flex-col md:flex-row gap-6">
          <div className="shrink-0">
            <div className="w-12 h-12 bg-[#ffe0b2] text-[#f57c00] rounded-full flex items-center justify-center">
              <AlertTriangle size={24} strokeWidth={2} />
            </div>
          </div>
          <div>
            <h3 className="text-[#e65100] font-bold text-lg mb-4 uppercase tracking-wider text-[14px]">Important Information</h3>
            <div className="space-y-4 text-gray-700 text-[14px] leading-relaxed">
              <p>
                The availability of specific features and services within the application may vary depending on the user's profile, applicable financial product, lender policies and service availability.
              </p>
              <p>
                The application provides access to supported digital services and information. Downloading or using the application does not guarantee loan approval, a specific loan amount, interest rate or any other financial outcome.
              </p>
              <p>
                Loan approval, eligibility, interest rates, tenure, charges and other terms are determined by the respective lender or financial institution according to its applicable policies and assessment process.
              </p>
              <p className="font-semibold text-gray-900">
                Users are advised to carefully review all applicable terms and conditions before accepting any financial product.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppDisclaimer;
