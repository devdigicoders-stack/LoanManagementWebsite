import React from 'react';
import { FileText } from 'lucide-react';

const CancellationPolicyPage = () => {
  return (
    <div className="w-full bg-[#fcfcfc] min-h-screen pt-32 pb-20 px-6 md:px-10 text-gray-800">
      <div className="w-full px-6 lg:px-12 xl:px-16 mx-auto">
        <div className="mb-10 border-b border-gray-200 pb-8">
          <div className="inline-flex items-center gap-2 bg-[#E0F2FE] text-[#0369A1] px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-4">
            <FileText size={14} /> Official Documentation
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-3">NACH/eNACH Cancellation</h1>
          <p className="text-gray-500 text-base">Important information about mandate registration and cancellation processes.</p>
        </div>

        <div className="w-full bg-white p-8 md:p-12 rounded-3xl shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-[#e8f5e9]">
          <div className="prose prose-green max-w-none prose-p:text-gray-500 prose-p:text-[14px] prose-p:leading-relaxed">
            <h2 className="mt-4 mb-4 flex items-center gap-3 text-2xl font-extrabold text-slate-900 border-l-4 border-[#0EA5E9] pl-4">NACH/eNACH CANCELLATION FOR NUOG MONEY &amp; NUO-PAY LOANS</h2>
            <p>National Payments Corporation of India (NPCI) introduced centralized National Automated Clearing House (NACH) debit payment system, which is regulated by the Reserve Bank of India under the Payments and Settlement Act 2007.</p>
            <p>NuoG Housing Payments Limited offers all its MSME customers’ digital payment mandate registration option through Electronic NACH (eNACH), this helps customers to make their emi payments hassle free.</p>

            <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 my-8">
              <h3 className="font-bold text-gray-900 mb-4 text-lg">eNACH Mandate Registration Process</h3>
              <p className="mb-4 text-gray-500 text-[14px]">To register eNACH mandate, customers are requested to contact concerned relationship officers of NuoG Housing Payments Limited Branch / send email request to <a href="mailto:enach.support@hausnuo.com " className="text-[#0EA5E9] hover:underline font-semibold">enach.support@hausnuo.com </a> with the following details:</p>
              <ul className="list-decimal pl-6 space-y-2 text-gray-600 font-medium text-[14px]">
                <li>Your Application Number/Loan Account Number</li>
                <li>Registered Mobile Number</li>
                <li>Debit Bank Account Number &amp; IFSC code</li>
                <li>Mandate Approval option - Via Debit OR Net Banking</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 my-8">
              <h3 className="font-bold text-gray-900 mb-4 text-lg">eNACH Mandate Cancellation Process</h3>
              <p className="mb-4 text-gray-500 text-[14px]">As per directions issued by NPCI vide circular NPCI/2025-26/NACH/Circular No. 025 dated 08/11/2025 &amp; NPCI/2025-26/NACH/Circular No. 028 dated 08/11/, NuoG Provides the NACH Cancellation facility for its customers as per the below process:</p>
              <ul className="list-decimal pl-6 space-y-2 text-gray-600 text-[14px]">
                <li>For cancellation of registered eNACH, the customer can contact their relationship officers of NuoG Branch for the same or send e-Mail to <a href="mailto:enach.support@hausnuo.com " className="text-[#0EA5E9] hover:underline font-semibold">enach.support@hausnuo.com </a> with the following details:</li>
                <li>Your Application Number/Loan Account Number</li>
                <li>Registered Mobile Number</li>
                <li>Reason for NACH Cancellation Request</li>
                <li>NuoG has the discretion to consider the eNACH Mandate Cancellation request based on customers loan repayment terms and conditions.</li>
                <li>Confirmation on the final status of Mandate Cancellation will be provided to customer via SMS.</li>
              </ul>
            </div>

            <div className="bg-[#F8FAFC] p-6 rounded-xl border border-[#BAE6FD] my-8">
              <h3 className="font-bold text-[#0369A1] mb-2 text-lg">Customer Grievance Mechanism</h3>
              <p className="text-[#0284C7] mb-2 text-[14px]">For any query on eNACH, please write to <a href="mailto:enach.support@hausnuo.com " className="font-bold hover:underline">enach.support@hausnuo.com </a> or call us on <strong className="font-bold">9755 766 018</strong> (Monday to Friday - 10 AM to 06 PM) or visit your nearest NuoG Branch.</p>
              <p className="text-sm text-[#0369A1] italic">*Please note above process is applicable only for NuoG Housing Payments Limited Customers.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CancellationPolicyPage;
