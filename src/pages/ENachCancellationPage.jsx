import React, { useEffect } from 'react';
import { FileText, CheckCircle2, XCircle, AlertCircle } from 'lucide-react';

const ENachCancellationPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sections = [
    '01 Introduction',
    '02 Registration Process',
    '03 Cancellation Process',
    '04 Grievance Mechanism'
  ];

  return (
    <div className="w-full bg-[#fcfcfc] min-h-screen pt-32 pb-20 px-6 md:px-10 text-gray-800">
      <div className="max-w-7xl mx-auto">
        
        {/* Page Header */}
        <div className="mb-10 border-b border-gray-200 pb-8">
          <div className="inline-flex items-center gap-2 bg-[#e8fbe9] text-[#4a9b12] px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-4">
            <FileText size={14} /> Official Documentation
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold text-[#0b0f0e] mb-3">
            NACH / eNACH Cancellation
          </h1>
          <p className="text-gray-500 text-base">Guidelines and processes for eNACH Mandate Registration and Cancellation for NuoG Money &amp; NUO-Pay Loans.</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-10 relative items-start">
          
          {/* Sidebar Navigation */}
          <div className="w-full lg:w-[25%] shrink-0 sticky top-28">
            <div className="bg-white border border-gray-100 p-6 rounded-2xl shadow-sm">
              <h3 className="text-sm font-bold text-gray-900 mb-4 uppercase tracking-wider">Quick Navigation</h3>
              <ul className="flex flex-col gap-1 max-h-[60vh] overflow-y-auto pr-2 custom-scrollbar">
                {sections.map((item, index) => (
                  <li key={index}>
                    <a href={`#section-${index+1}`} className="flex items-start gap-3 py-2 px-3 text-gray-600 hover:text-[#5bc116] hover:bg-[#f4fdf5] rounded-lg transition-colors text-[13px] font-medium leading-tight">
                      <span className="text-[#5bc116] font-bold shrink-0">{String(index + 1).padStart(2, '0')}</span>
                      {item.substring(3)}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="w-full lg:w-[75%] bg-white p-8 md:p-12 rounded-3xl shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-[#e8f5e9]">
            <div className="prose prose-green max-w-none prose-p:text-gray-600 prose-p:text-[15px] prose-p:leading-relaxed prose-li:text-gray-600 prose-li:text-[15px] prose-li:mb-2">
              
              {/* Section 1 */}
              <h2 id="section-1" className="scroll-mt-32 mt-0 mb-4 flex items-center gap-3 text-2xl font-extrabold text-[#0b0f0e] border-l-4 border-[#5bc116] pl-4">1. INTRODUCTION</h2>
              <p>
                National Payments Corporation of India (NPCI) introduced the centralized National Automated Clearing House (NACH) debit payment system, which is regulated by the Reserve Bank of India under the Payments and Settlement Act 2007.
              </p>
              <p>
                NuoG Housing Payments Limited offers all its MSME customers' digital payment mandate registration option through Electronic NACH (eNACH). This helps customers to make their EMI payments hassle free.
              </p>

              {/* Section 2 */}
              <h2 id="section-2" className="scroll-mt-32 mt-12 mb-4 flex items-center gap-3 text-2xl font-extrabold text-[#0b0f0e] border-l-4 border-[#5bc116] pl-4">2. eNACH MANDATE REGISTRATION PROCESS</h2>
              <div className="bg-[#fcfcfc] border border-gray-200 p-6 rounded-2xl mb-6">
                <p className="font-semibold text-[#0b0f0e] mb-4 mt-0">
                  To register an eNACH mandate, customers are requested to contact the concerned relationship officers of NuoG Housing Payments Limited Branch or send an email request to <a href="mailto:enach.support@nuobnk.com" className="text-[#5bc116] hover:underline">enach.support@nuobnk.com</a> with the following details:
                </p>
                <ul className="space-y-3 pl-0 list-none mt-0 mb-0">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 size={20} className="text-[#5bc116] shrink-0 mt-0.5" />
                    <span>Your Application Number / Loan Account Number</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 size={20} className="text-[#5bc116] shrink-0 mt-0.5" />
                    <span>Registered Mobile Number</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 size={20} className="text-[#5bc116] shrink-0 mt-0.5" />
                    <span>Debit Bank Account Number &amp; IFSC code</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 size={20} className="text-[#5bc116] shrink-0 mt-0.5" />
                    <span>Mandate Approval option - Via Debit OR Net Banking</span>
                  </li>
                </ul>
              </div>

              {/* Section 3 */}
              <h2 id="section-3" className="scroll-mt-32 mt-12 mb-4 flex items-center gap-3 text-2xl font-extrabold text-[#0b0f0e] border-l-4 border-[#5bc116] pl-4">3. eNACH MANDATE CANCELLATION PROCESS</h2>
              <p>
                As per directions issued by NPCI vide circular NPCI/2025-26/NACH/Circular No. 025 dated 08/11/2025 &amp; NPCI/2025-26/NACH/Circular No. 028 dated 08/11/2025, NuoG Provides the NACH Cancellation facility for its customers as per the below process:
              </p>
              
              <div className="bg-[#fff9f9] border border-[#ffe0e0] p-6 rounded-2xl my-6">
                <ul className="space-y-4 pl-0 list-none mt-0 mb-0">
                  <li className="flex items-start gap-3">
                    <XCircle size={20} className="text-red-500 shrink-0 mt-0.5" />
                    <span>For cancellation of registered eNACH, the customer can contact their relationship officers of NuoG Branch for the same or send an e-Mail to <a href="mailto:enach.support@nuobnk.com" className="text-red-600 hover:underline font-medium">enach.support@nuobnk.com</a>.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <XCircle size={20} className="text-red-500 shrink-0 mt-0.5" />
                    <span>Provide Your Application Number / Loan Account Number.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <XCircle size={20} className="text-red-500 shrink-0 mt-0.5" />
                    <span>Provide Your Registered Mobile Number.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <XCircle size={20} className="text-red-500 shrink-0 mt-0.5" />
                    <span>Provide the Reason for NACH Cancellation Request.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <AlertCircle size={20} className="text-orange-500 shrink-0 mt-0.5" />
                    <span>NuoG has the discretion to consider the eNACH Mandate Cancellation request based on customers' loan repayment terms and conditions.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 size={20} className="text-[#5bc116] shrink-0 mt-0.5" />
                    <span>Confirmation on the final status of Mandate Cancellation will be provided to the customer via SMS.</span>
                  </li>
                </ul>
              </div>

              {/* Section 4 */}
              <h2 id="section-4" className="scroll-mt-32 mt-12 mb-4 flex items-center gap-3 text-2xl font-extrabold text-[#0b0f0e] border-l-4 border-[#5bc116] pl-4">4. CUSTOMER GRIEVANCE MECHANISM</h2>
              
              <div className="bg-[#f4fdf5] border border-[#e8fbe9] p-6 rounded-2xl mt-4">
                <p className="font-medium text-gray-800 mb-3 mt-0">For any query on eNACH, please write to us or visit your nearest NuoG Branch.</p>
                <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8 mb-4">
                  <div className="flex items-center gap-2 text-[#0b0f0e]">
                    <span className="font-bold text-[14px]">Email:</span> 
                    <a href="mailto:enach.support@nuobnk.com" className="text-[#5bc116] hover:underline font-bold tracking-wide">enach.support@nuobnk.com</a>
                  </div>
                  <div className="flex items-center gap-2 text-[#0b0f0e]">
                    <span className="font-bold text-[14px]">Call us on:</span> 
                    <a href="tel:+919755766018" className="text-[#5bc116] hover:underline font-bold tracking-wide">+91 9755 766 018</a>
                  </div>
                </div>
                <p className="text-sm text-gray-500 italic mb-0">
                  (Monday to Friday - 10 AM to 06 PM)
                </p>
                <div className="mt-6 pt-4 border-t border-[#d4f0d4]">
                  <p className="text-xs font-semibold text-[#4a9b12] uppercase tracking-wide mb-0">
                    Please note above process is applicable only for NuoG Housing Payments Limited Customers.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ENachCancellationPage;
