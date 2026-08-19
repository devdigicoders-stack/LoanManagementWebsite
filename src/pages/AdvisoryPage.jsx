import React, { useEffect } from 'react';
import { AlertOctagon, CheckCircle2 } from 'lucide-react';

const AdvisoryPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sections = [
    '01 Advisory',
    '02 Purpose',
    '03 Modus Operandi',
    '04 Steps to Take'
  ];

  return (
    <div className="w-full bg-[#fcfcfc] min-h-screen pt-32 pb-20 px-6 md:px-10 text-gray-800">
      <div className="max-w-7xl mx-auto">
        
        {/* Page Header */}
        <div className="mb-10 border-b border-gray-200 pb-8">
          <div className="inline-flex items-center gap-2 bg-[#fee2e2] text-[#dc2626] px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-4">
            <AlertOctagon size={14} /> Important Notice
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold text-[#0b0f0e] mb-3">
            Advisory Note
          </h1>
          <p className="text-gray-500 text-base">Public Interest Caution Against Fraudulent Activities and Misleading Advertisements.</p>
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
            <div className="prose prose-green max-w-none prose-p:text-gray-600 prose-p:text-[15px] prose-p:leading-relaxed">
              
              {/* Section 1 */}
              <h2 id="section-1" className="scroll-mt-32 mt-0 mb-4 flex items-center gap-3 text-2xl font-extrabold text-[#0b0f0e] border-l-4 border-[#dc2626] pl-4">1. ADVISORY</h2>
              <div className="bg-[#fff4f4] border border-[#ffcdcd] p-6 rounded-2xl mb-8">
                <p className="font-semibold text-[#dc2626] m-0">
                  This Advisory is Issued in the Public Interest and to Caution the General Public Against Fraudulent Activities and Misleading Advertisements which Intend to Defraud Gullible Individuals who wish to Avail Loan Facilities.
                </p>
              </div>

              {/* Section 2 */}
              <h2 id="section-2" className="scroll-mt-32 mt-12 mb-4 flex items-center gap-3 text-2xl font-extrabold text-[#0b0f0e] border-l-4 border-[#5bc116] pl-4">2. PURPOSE</h2>
              <p>
                It has come to our notice that certain fraudsters make fictitious loan offers (through advertisements or e-mails) at attractive terms so as to defraud gullible loan seekers by inducing them to pay to the fraudsters processing fees, stamp duty charges, etc. for such loans. These payments are sought to be made in cash, cheque or into bank accounts controlled by the fraudsters and are misappropriated by the fraudsters who then abscond with the same. Anyone dealing with such fraudster will be doing so at his/her own risk and company will not be held responsible for such loss or damage suffered directly or indirectly.
              </p>
              <p>
                For the purpose of illustration, we have identified the few of the modus operandi under which such activities usually take place or might take place.
              </p>

              {/* Section 3 */}
              <h2 id="section-3" className="scroll-mt-32 mt-12 mb-4 flex items-center gap-3 text-2xl font-extrabold text-[#0b0f0e] border-l-4 border-[#5bc116] pl-4">3. MODUS OPERANDI</h2>
              <ul className="list-disc pl-6 space-y-4 text-gray-600 text-[15px]">
                <li>
                  A fraudster might post classified short advertisements in webpage, adblocker pages or other print or digital media. The contents of such advertisements generally communicate to the reader (by using false and misleading suffixes or prefixes along with the name NuoG Housing Payments Limited, Bee Secure Home Finance Pvt. Ltd., NuoG Softech Limited conducting their business activities under the brand name of “NuoG Money” (hereinafter collectively referred to as “NuoG Money”), NuoG Money is offering loans to individuals, companies, partnership firm at a very low interest rate or with easy repayment options or without any security requirement, etc. and that interested persons should contact the fraudster at the phone number or e-mail id indicated in the advertisement. It is pertinent to note that such phone numbers or e-mail Ids are not of NuoG or of any other company run by NuoG.
                </li>
                <li>
                  In another scenario, a person may receive an e-mail or SMS from a fraudster individual or company which claims itself to be DSA, Agents and will be providing loans at cheap rates of interest or easy repayment options or without security. The e-mail would use false and misleading suffixes or prefixes or designations along with the name of NuoG, so as to induce the reader into believing that the sender is a NuoG official and would request interested individuals to contact the sender either on phone or via e-mail. Upon contacting the fraudster, the individual is required to provide his/her details and may be asked to pay money towards processing fees, charges, application fees, etc. This money may be asked to be paid either in cash or into the account of the fraudster. Once the money is paid, the fraudster absconds with the same, leaving the individual with very little recourse for getting it back.
                </li>
              </ul>

              {/* Section 4 */}
              <h2 id="section-4" className="scroll-mt-32 mt-12 mb-4 flex items-center gap-3 text-2xl font-extrabold text-[#0b0f0e] border-l-4 border-[#5bc116] pl-4">4. STEPS TO BE TAKEN IN CASE OF RECEIPT OF ANY SUCH COMMUNICATION</h2>
              <div className="bg-[#f4fdf5] border border-[#e8fbe9] p-6 rounded-2xl mt-6">
                <ul className="space-y-4 pl-0 list-none mt-0 mb-0">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 size={20} className="text-[#5bc116] shrink-0 mt-0.5" />
                    <span>Check if the name of the company is genuine. If the name of the company in such advertisement is not by NuoG, it is likely to be fraudulent.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 size={20} className="text-[#5bc116] shrink-0 mt-0.5" />
                    <span>Check whether the e-mail address given is genuine.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 size={20} className="text-[#5bc116] shrink-0 mt-0.5" />
                    <span>Check the e-mail id of the sender.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 size={20} className="text-[#5bc116] shrink-0 mt-0.5" />
                    <span>Check whether the bank accounts into which the amount is asked to be credited are in individual names. If yes, it is not a genuine NuoG account.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 size={20} className="text-[#5bc116] shrink-0 mt-0.5" />
                    <span>Once you are sure as to the fraudulent nature of the advertisement, report the same to the police and intimate us of the same by e-mail at <a href="mailto:support@nuobnk.com" className="text-[#5bc116] font-bold hover:underline">support@nuobnk.com</a>.</span>
                  </li>
                </ul>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvisoryPage;
