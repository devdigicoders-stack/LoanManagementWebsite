import React from 'react';
import { ShieldAlert, Check } from 'lucide-react';

const AboutBorrowing = () => {
  const checklist = [
    "Loan amount",
    "Interest rate",
    "Loan tenure",
    "Monthly repayment/EMI",
    "Processing fees",
    "Applicable charges",
    "Prepayment or foreclosure conditions",
    "Other terms and conditions"
 ;

  return (
    <section className="w-full bg-white py-20 px-6 md:px-10">
      <div className="w-full px-6 lg:px-12 xl:px-16 mx-auto flex flex-col lg:flex-row items-start gap-12 lg:gap-20">
        
        {/* Left Side */}
        <div className="w-full lg:w-1/2">
          <div className="flex items-center gap-2 mb-6">
            <ShieldAlert className="text-[#0EA5E9]" size={24} />
            <span className="text-[#0EA5E9] font-bold tracking-widest uppercase text-sm">Responsible Borrowing</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
            Our Approach to <br />
            <span className="text-[#0EA5E9]">Responsible Borrowing</span>
          </h2>
          <p className="text-gray-600 text-[16px] leading-relaxed mb-6">
            Taking a loan is an important financial commitment. We believe customers should make borrowing decisions after carefully considering their financial situation and repayment capacity.
          </p>
          <div className="bg-[#f0fbf0] border border-[#d3ecd3] p-6 rounded-2xl">
            <p className="text-gray-700 text-[14px] leading-relaxed font-medium">
              Loan approval and final terms are always subject to the applicable lender's eligibility criteria, assessment and policies.
            </p>
          </div>
        </div>

        {/* Right Side - Checklist */}
        <div className="w-full lg:w-1/2">
          <div className="bg-[#fcfcfc] border border-gray-100 rounded-3xl p-8 shadow-sm">
            <h3 className="text-lg font-bold text-gray-900 mb-6">Before proceeding with any financial product, customers should understand:</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {checklist.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#F8FAFC] border border-[#E0F2FE] flex items-center justify-center shrink-0">
                    <Check className="text-[#0EA5E9]" size={14} strokeWidth={3} />
                  </div>
                  <span className="text-gray-700 font-medium text-[14px]">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutBorrowing;
