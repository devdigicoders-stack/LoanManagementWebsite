import React, { useEffect } from 'react';
import { AlertTriangle } from 'lucide-react';

const DisclaimerPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sections = [
    '01 General Information',
    '02 Content Updates',
    '03 Accuracy & Reliability',
    '04 Limitation of Liability',
    '05 External Links',
    '06 Service Availability'
  ];

  return (
    <div className="w-full bg-[#fcfcfc] min-h-screen pt-32 pb-20 px-6 md:px-10 text-gray-800">
      <div className="max-w-7xl mx-auto">
        
        {/* Page Header */}
        <div className="mb-10 border-b border-gray-200 pb-8">
          <div className="inline-flex items-center gap-2 bg-[#fff4e5] text-[#d97706] px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-4">
            <AlertTriangle size={14} /> Legal Disclaimer
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold text-[#0b0f0e] mb-3">
            Website Disclaimer
          </h1>
          <p className="text-gray-500 text-base">Important legal disclosures and limitations of liability regarding the use of NuoG Housing Payments Limited services.</p>
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
              <h2 id="section-1" className="scroll-mt-32 mt-0 mb-4 flex items-center gap-3 text-2xl font-extrabold text-[#0b0f0e] border-l-4 border-[#5bc116] pl-4">1. GENERAL INFORMATION</h2>
              <p>
                This website is the online portal for NuoG Housing Payments Limited and is to be used for personal information purposes only. All the information displayed, transmitted or carried by the website including, but not limited to guides, news articles, external links, opinions, text, photographs, images, illustrations, trademarks, service marks and the like are provided on an "as is" basis without warranties of any kind and stand protected by the copyright and other intellectual property laws. Any of the content published on the website shall not be reproduced, distributed, transmitted, modified, reused or published in whole or in part by the recipient hereof or any other person for any purpose without the prior written approval of the company.
              </p>

              {/* Section 2 */}
              <h2 id="section-2" className="scroll-mt-32 mt-12 mb-4 flex items-center gap-3 text-2xl font-extrabold text-[#0b0f0e] border-l-4 border-[#5bc116] pl-4">2. CONTENT UPDATES</h2>
              <p>
                While the content of the website may be updated periodically, we do not guarantee that it reflects the latest amendments/ information at any time.
              </p>

              {/* Section 3 */}
              <h2 id="section-3" className="scroll-mt-32 mt-12 mb-4 flex items-center gap-3 text-2xl font-extrabold text-[#0b0f0e] border-l-4 border-[#5bc116] pl-4">3. ACCURACY &amp; RELIABILITY</h2>
              <p>
                All text, data, graphs and other pieces of information are presented with the best possible attempts to maintaining integrity, consistency and reliability of the same. However, none of the employees, directors, consultants, agents, representatives stand guarantors to any kind about the completeness, accuracy, reliability, suitability or availability with respect to the website or the information, products, services, or related graphics contained on the website for any purpose. Any reliance you place on such information is therefore strictly at your own risk. In the event that an inaccuracy or discrepancy is noticed by anyone who accesses the website, we would like you to inform us so that it can be corrected.
              </p>

              {/* Section 4 */}
              <h2 id="section-4" className="scroll-mt-32 mt-12 mb-4 flex items-center gap-3 text-2xl font-extrabold text-[#0b0f0e] border-l-4 border-[#5bc116] pl-4">4. LIMITATION OF LIABILITY</h2>
              <p>
                None of the company representative stands liable for any direct or indirect loss of profit or consequential damages that are alleged to have resulted from the use and/or inability to access or use the website features or misinterpretation or misrepresentation of information of any kind. The company does not become liable for any technical failure or malfunctioning of the software or the performance of any of our services. We are also not responsible for non-receipt of registration details or e-mails. Users shall bear all responsibility of keeping the password secure and we are not responsible for the loss or misuse of the same.
              </p>

              {/* Section 5 */}
              <h2 id="section-5" className="scroll-mt-32 mt-12 mb-4 flex items-center gap-3 text-2xl font-extrabold text-[#0b0f0e] border-l-4 border-[#5bc116] pl-4">5. EXTERNAL LINKS</h2>
              <p>
                This website provides some link to other websites which are not under our direct control. The inclusion of any links does not necessarily imply a recommendation or endorse the views expressed within them and they are presented without any prior screening or review. While attempts are made at delivering only the relevant information to our users, no representative of the company holds any kind of liability as to the use of such content made available through those sites.
              </p>

              {/* Section 6 */}
              <h2 id="section-6" className="scroll-mt-32 mt-12 mb-4 flex items-center gap-3 text-2xl font-extrabold text-[#0b0f0e] border-l-4 border-[#5bc116] pl-4">6. SERVICE AVAILABILITY</h2>
              <p>
                We strive at keeping the website up and running smoothly along with all its features and services. However, technical issues beyond our control may arise when the website becomes temporarily unavailable or some of the features may not work as they are expected to. The company does not take responsibility for such events and will not be liable for any financial or non-tangible losses arising due to the same. We do not warrant that the use of services, software or any other features available on the website will be uninterrupted, secure or error free or that any such defects in the services will be corrected.
              </p>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DisclaimerPage;
