import React, { useEffect } from 'react';
import { AlertCircle, CheckCircle2, Phone, Mail } from 'lucide-react';

const NachCancellationPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#fcfcfc] min-h-screen pt-32 pb-20 px-6 md:px-10 text-gray-800">
      <div className="max-w-4xl mx-auto">
        <div className="mb-10 text-center">
          <h1 className="text-3xl md:text-5xl font-extrabold text-[#FDFBF7] mb-4">
            NACH/eNACH Cancellation
          </h1>
          <p className="text-gray-500 text-lg">
            For NuoG Money &amp; NUO-Pay Loans
          </p>
        </div>

        <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-200">
          <p className="text-gray-600 leading-relaxed mb-6 text-[15px]">
            National Payments Corporation of India (NPCI) introduced centralized National Automated Clearing House (NACH) debit payment system, which is regulated by the Reserve Bank of India under the Payments and Settlement Act 2007.
          </p>
          <p className="text-gray-600 leading-relaxed mb-10 text-[15px]">
            NuoG Housing Payments Limited offers all its MSME customers’ digital payment mandate registration option through Electronic NACH (eNACH), this helps customers to make their emi payments hassle free.
          </p>

          <div className="mb-10">
            <h2 className="text-xl font-bold text-[#FDFBF7] mb-4 flex items-center gap-2">
              <CheckCircle2 className="text-[#0EA5E9]" /> eNACH Mandate Registration Process
            </h2>
            <p className="text-gray-600 mb-4 text-[15px]">
              To register eNACH mandate, customers are requested to contact concerned relationship officers of NuoG Housing Payments Limited Branch / send email request to <a href="mailto:enach.support@nuobnk.com" className="text-[#0EA5E9] hover:underline font-semibold">“enach.support@nuobnk.com”</a> with the following details:
            </p>
            <ul className="list-decimal pl-5 space-y-2 text-gray-600 text-[15px] marker:text-[#0EA5E9] marker:font-bold">
              <li>Your Application Number/Loan Account Number</li>
              <li>Registered Mobile Number</li>
              <li>Debit Bank Account Number &amp; IFSC code</li>
              <li>Mandate Approval option - Via Debit OR Net Banking</li>
            </ul>
          </div>

          <div className="mb-10">
            <h2 className="text-xl font-bold text-[#FDFBF7] mb-4 flex items-center gap-2">
              <AlertCircle className="text-[#0EA5E9]" /> eNACH Mandate Cancellation Process
            </h2>
            <p className="text-gray-600 mb-4 text-[15px]">
              As per directions issued by NPCI vide circular NPCI/2025-26/NACH/Circular No. 025 dated 08/11/2025 &amp; NPCI/2025-26/NACH/Circular No. 028 dated 08/11/, NuoG Provides the NACH Cancellation facility for its customers as per the below process:
            </p>
            <ul className="list-decimal pl-5 space-y-2 text-gray-600 text-[15px] marker:text-[#0EA5E9] marker:font-bold">
              <li>For cancellation of registered eNACH, the customer can contact their relationship officers of NuoG Branch for the same or send e-Mail to <a href="mailto:enach.support@nuobnk.com" className="text-[#0EA5E9] hover:underline font-semibold">“enach.support@nuobnk.com”</a> with the following details:</li>
              <li>Your Application Number/Loan Account Number</li>
              <li>Registered Mobile Number</li>
              <li>Reason for NACH Cancellation Request</li>
              <li>NuoG has the discretion to consider the eNACH Mandate Cancellation request based on customers loan repayment terms and conditions.</li>
              <li>Confirmation on the final status of Mandate Cancellation will be provided to customer via SMS.</li>
            </ul>
          </div>

          <div className="bg-[#F8FAFC] border border-[#BAE6FD] rounded-2xl p-6">
            <h2 className="text-lg font-bold text-[#0369A1] mb-3">Customer Grievance Mechanism</h2>
            <p className="text-[#0284C7] mb-4 text-[14px]">
              For any query on eNACH, please write to <a href="mailto:enach.support@nuobnk.com" className="font-bold hover:underline">“enach.support@nuobnk.com”</a> or call us on <strong className="font-bold">9755 766 018</strong> (Monday to Friday - 10 AM to 06 PM) or visit your nearest NuoG Branch.
            </p>
            <p className="text-[13px] text-[#0369A1] italic font-medium">
              *Please note above process is applicable only for NuoG Housing Payments Limited Customers.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default NachCancellationPage;
