import React from 'react';
import { FileText } from 'lucide-react';

const RefundPolicyPage = () => {
  return (
    <div className="w-full bg-[#fcfcfc] min-h-screen pt-32 pb-20 px-6 md:px-10 text-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10 border-b border-gray-200 pb-8">
          <div className="inline-flex items-center gap-2 bg-[#E0F2FE] text-[#0369A1] px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-4">
            <FileText size={14} /> Official Documentation
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-3">Refund Policy</h1>
          <p className="text-gray-500 text-base">Important information regarding refunds for payments and services.</p>
        </div>

        <div className="w-full bg-white p-8 md:p-12 rounded-3xl shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-[#e8f5e9]">
          <div className="prose prose-green max-w-none prose-p:text-gray-500 prose-p:text-[14px] prose-p:leading-relaxed">
            <h2 className="mt-4 mb-4 flex items-center gap-3 text-2xl font-extrabold text-slate-900 border-l-4 border-[#0EA5E9] pl-4">REFUND &amp; CANCELLATION POLICY</h2>
            <p>Welcome to NuoG Housing Payments Limited.</p>
            <p>Please read our Refund Policy carefully. By using our website, services, and making any payments to NuoG Housing Payments Limited, you agree to this policy.</p>
            
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 my-8">
              <h3 className="font-bold text-gray-900 mb-4 text-lg">1. Non-Refundable Fees</h3>
              <p className="mb-4 text-gray-500 text-[14px]">You agree that any fee paid for the Services, including but not limited to application fees, processing fees, or service fees, is strictly non-refundable unless explicitly agreed otherwise by NuoG Housing Payments Limited in writing.</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600 text-[14px]">
                <li>The payment of a fee or an application made in our Services does not guarantee the approval or grant of a loan or other Services.</li>
                <li>Approval of any loan or service is subject to the satisfaction of documentation, verification, and other internal formalities.</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 my-8">
              <h3 className="font-bold text-gray-900 mb-4 text-lg">2. Erroneous Deductions / Double Payments</h3>
              <p className="mb-4 text-gray-500 text-[14px]">In the event of an erroneous deduction or double payment caused by a technical glitch or banking error:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600 text-[14px]">
                <li>Customers must report the discrepancy within 3 working days by contacting our support.</li>
                <li>Refunds for genuine duplicate transactions will be processed back to the original source of payment within 7-10 working days, subject to bank clearance.</li>
              </ul>
            </div>

            <div className="bg-[#F8FAFC] p-6 rounded-xl border border-[#BAE6FD] my-8">
              <h3 className="font-bold text-[#0369A1] mb-2 text-lg">Contact for Refund Queries</h3>
              <p className="text-[#0284C7] mb-2 text-[14px]">For any query regarding refunds or payments, please write to <a href="mailto:haustouch@hausnuo.com" className="font-bold hover:underline">haustouch@hausnuo.com</a> or call us on <strong className="font-bold">9755 766 018</strong> (Monday to Friday - 10 AM to 06 PM).</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RefundPolicyPage;
