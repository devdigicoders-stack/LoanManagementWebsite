import React from 'react';
import { FileText, AlertTriangle, ShieldCheck, CheckCircle2 } from 'lucide-react';

const AdvisoryNotePage = () => {
  return (
    <div className="w-full bg-[#fcfcfc] min-h-screen pt-32 pb-20 px-6 md:px-10 text-gray-800">
      <div className="w-full px-6 lg:px-12 xl:px-16 mx-auto">
        <div className="mb-10 border-b border-gray-200 pb-8">
          <div className="inline-flex items-center gap-2 bg-[#E0F2FE] text-[#0369A1] px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-4">
            <FileText size={14} /> Official Documentation
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-3">Advisory Note</h1>
          <p className="text-gray-500 text-base">This Advisory is issued in the public interest to caution the general public against fraudulent activities.</p>
        </div>

        <div className="w-full bg-white p-8 md:p-12 rounded-3xl shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-[#e8f5e9]">
          <div className="prose prose-green max-w-none prose-p:text-gray-500 prose-p:text-[14px] prose-p:leading-relaxed">

            <div className="bg-red-50 p-6 rounded-xl border border-red-100 mb-8 flex gap-4 items-start">
              <div className="shrink-0 mt-1">
                <AlertTriangle className="text-red-500" size={24} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-red-900 mb-2">Public Interest Advisory</h3>
                <p className="text-sm text-red-700 m-0">This Advisory is Issued in the Public Interest and to Caution the General Public Against Fraudulent Activities and Misleading Advertisements which Intend to Defraud Gullible Individuals who wish to Avail Loan Facilities.</p>
              </div>
            </div>

            <h2 className="mt-8 mb-4 flex items-center gap-3 text-xl font-extrabold text-slate-900 border-l-4 border-[#0EA5E9] pl-4">Purpose</h2>
            <p>It has Come to Our Notice that Certain Fraudsters Make Fictitious Loan Offers (through Advertisements or e-Mails) at Attractive Terms So as to Defraud Gullible Loan Seekers by Inducing them to Pay to the Fraudsters Processing Fees, Stamp Duty Charges, etc. for Such Loans.</p>
            <p>These Payments are Sought to be Made in Cash, Cheque or into Bank Accounts Controlled by the Fraudsters and are Misappropriated by the Fraudsters who then Abscond with the Same. Anyone Dealing with Such Fraudster will be Doing so at his/her Own Risk and Company will Not be Held Responsible for Such Loss or Damage Suffered Directly or Indirectly.</p>
            <p>For the Purpose of Illustration, we have Identified the few of the Modus Operandi Under which Such Activities Usually take Place or Might take Place.</p>

            <h2 className="mt-8 mb-4 flex items-center gap-3 text-xl font-extrabold text-slate-900 border-l-4 border-[#0EA5E9] pl-4">Modus Operandi</h2>
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 mb-6">
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <ShieldCheck className="text-slate-600 shrink-0 mt-1" size={20} />
                  <p className="m-0 text-sm text-gray-600">A Fraudster Might Post Classified Short Advertisements in Webpage, Adblocker Pages or Other Print or Digital Media. The Contents of Such Advertisements Generally Communicate to the Reader (by Using False and Misleading Suffixes or Prefixes Along with the Name NuoG Housing Payments Limited, Bee Secure Home Finance Pvt. Ltd., NuoG Softech Limited Conducting their Business Activities Under the Brand Name of “NuoG Money” (Hereinafter Collectively Referred to as “NuoG Money”), NuoG Money is Offering Loans to Individuals, Companies, Partnership Firm at a Very Low Interest Rate or with Easy Repayment Options or Without Any Security Requirement, etc. and that Interested Persons Should Contact the Fraudster at the Phone Number or e-Mail id Indicated in the Advertisement. It is Pertinent to Note that Such Phone Numbers or e-Mail Ids are Not of NuoG or of any other Company Run by NuoG.</p>
                </li>
                <li className="flex gap-3">
                  <ShieldCheck className="text-slate-600 shrink-0 mt-1" size={20} />
                  <p className="m-0 text-sm text-gray-600">In Another Scenario, a Person May Receive an e-Mail or SMS from a Fraudster Individual or Company which Claims Itself to be DSA, Agents and will be Providing Loans at Cheap Rates of Interest or Easy Repayment Options or without Security. The e-Mail would Use False and Misleading Suffixes or Prefixes or Designations Along with the Name of NuoG, So as to Induce the Reader into Believing that the Sender is a NuoG Official and Would Request Interested Individuals to Contact the Sender Either on Phone or Via e-Mail. Upon Contacting the Fraudster, the Individual is Required to Provide his/her Details and May be Asked to Pay Money towards Processing Fees, Charges, Application Fees, etc. This Money May be Asked to be Paid either in Cash or into the Account of the Fraudster. Once the Money is Paid, the Fraudster Absconds with the Same, Leaving the Individual with Very little Recourse for Getting it Back.</p>
                </li>
              </ul>
            </div>

            <h2 className="mt-8 mb-4 flex items-center gap-3 text-xl font-extrabold text-slate-900 border-l-4 border-[#0EA5E9] pl-4">Steps to be taken in Case of Receipt of Any Such Communication</h2>
            <div className="bg-[#F8FAFC] p-6 rounded-xl border border-[#BAE6FD] mt-6">
              <ul className="space-y-4">
                <li className="flex gap-3 items-start">
                  <CheckCircle2 className="text-[#0EA5E9] shrink-0 mt-0.5" size={18} />
                  <span className="text-[#0369A1] font-medium text-sm">Check if the Name of the Company is Genuine. If the Name of the Company in Such Advertisement is Not by NuoG, it is Likely to be Fraudulent.</span>
                </li>
                <li className="flex gap-3 items-start">
                  <CheckCircle2 className="text-[#0EA5E9] shrink-0 mt-0.5" size={18} />
                  <span className="text-[#0369A1] font-medium text-sm">Check whether the e-Mail Address given is Genuine.</span>
                </li>
                <li className="flex gap-3 items-start">
                  <CheckCircle2 className="text-[#0EA5E9] shrink-0 mt-0.5" size={18} />
                  <span className="text-[#0369A1] font-medium text-sm">Check the e-Mail id of the Sender.</span>
                </li>
                <li className="flex gap-3 items-start">
                  <CheckCircle2 className="text-[#0EA5E9] shrink-0 mt-0.5" size={18} />
                  <span className="text-[#0369A1] font-medium text-sm">Check whether the Bank Accounts into which the Amount is Asked to be Credited are in Individual Names. If yes, it is Not a Genuine NuoG Account.</span>
                </li>
                <li className="flex gap-3 items-start">
                  <CheckCircle2 className="text-[#0EA5E9] shrink-0 mt-0.5" size={18} />
                  <span className="text-[#0369A1] font-medium text-sm">Once You are Sure as to the Fraudulent Nature of the Advertisement, Report the Same to the Police and Intimate us of the Same by e-Mail at <a href="mailto:support@hausnuo.com " className="font-bold underline hover:text-[#1a380b]">support@hausnuo.com </a>.</span>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvisoryNotePage;

