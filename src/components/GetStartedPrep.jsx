import React from 'react';
import { CheckCircle2, FileText, Map, Briefcase, IndianRupee, Home, ClipboardList, Info } from 'lucide-react';

const GetStartedPrep = () => {
  const documents = [
    { name: "Identity Proof", icon: <CheckCircle2 size={18} className="text-[#0EA5E9]" /> },
    { name: "Address Proof", icon: <Map size={18} className="text-[#0EA5E9]" /> },
    { name: "Income Proof", icon: <IndianRupee size={18} className="text-[#0EA5E9]" /> },
    { name: "Bank Statements", icon: <FileText size={18} className="text-[#0EA5E9]" /> },
    { name: "Employment / Business Documents", icon: <Briefcase size={18} className="text-[#0EA5E9]" /> },
    { name: "Property Documents", icon: <Home size={18} className="text-[#0EA5E9]" /> },
    { name: "Property Valuation Details", icon: <ClipboardList size={18} className="text-[#0EA5E9]" /> },
    { name: "Other Applicable Documents", icon: <Info size={18} className="text-[#0EA5E9]" /> }
 ;

  return (
    <section className="w-full bg-[#fcfcfc] py-24 px-6 md:px-10 border-t border-[#E0F2FE]">
      <div className="max-w-4xl mx-auto">
        
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Before You <span className="text-[#0EA5E9]">Submit</span>
          </h2>
          <p className="text-gray-600 text-[16px] leading-relaxed max-w-2xl mx-auto mb-4">
            Please make sure the information provided in your enquiry is accurate and complete.
          </p>
          <p className="text-gray-600 text-[16px] leading-relaxed max-w-2xl mx-auto">
            You may be asked to provide additional documents or information during the applicable verification process. Depending on the financial product, this may include:
          </p>
        </div>

        <div className="bg-white p-8 md:p-10 rounded-3xl border border-[#E0F2FE] shadow-sm">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
            {documents.map((doc, index) => (
              <div key={index} className="flex items-center gap-4 bg-[#fcfcfc] p-4 rounded-xl border border-gray-100 hover:border-[#0EA5E9] hover:shadow-md transition-all">
                <div className="w-10 h-10 bg-[#E0F2FE] rounded-lg flex items-center justify-center shrink-0">
                  {doc.icon}
                </div>
                <span className="font-semibold text-gray-800">{doc.name}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default GetStartedPrep;
