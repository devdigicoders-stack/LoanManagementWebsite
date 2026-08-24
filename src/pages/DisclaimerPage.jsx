import React from 'react';
import { FileText, AlertTriangle } from 'lucide-react';

const DisclaimerPage = () => {
  return (
    <div className="w-full bg-[#fcfcfc] min-h-screen pt-32 pb-20 px-6 md:px-10 text-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10 border-b border-gray-200 pb-8">
          <div className="inline-flex items-center gap-2 bg-[#E0F2FE] text-[#0369A1] px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-4">
            <FileText size={14} /> Official Documentation
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold text-[#FDFBF7] mb-3">Disclaimer</h1>
          <p className="text-gray-500 text-base">Important limitations of liability and usage warnings regarding our website and services.</p>
        </div>

        <div className="w-full bg-white p-8 md:p-12 rounded-3xl shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-[#e8f5e9]">
          <div className="prose prose-green max-w-none prose-p:text-gray-500 prose-p:text-[14px] prose-p:leading-relaxed">
            
            <div className="bg-red-50 p-6 rounded-xl border border-red-100 mb-8 flex gap-4 items-start">
              <div className="shrink-0 mt-1">
                <AlertTriangle className="text-red-500" size={24} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-red-900 mb-2">Important Notice</h3>
                <p className="text-sm text-red-700 m-0">This website is the online portal for NuoG Housing Payments Limited and is to be used for personal information purposes only.</p>
              </div>
            </div>

            <p>All the information displayed, transmitted or carried by the website including, but not limited to guides, news articles, external links, opinions, text, photographs, images, illustrations, trademarks, service marks and the like are provided on an "as is" basis without warranties of any kind and stand protected by the copyright and other intellectual property laws.</p>
            <p>Any of the content published on the website shall not be reproduced, distributed, transmitted, modified, reused or published in whole or in part by the recipient hereof or any other person for any purpose without the prior written approval of the company.</p>
            <p>While the content of the website may be updated periodically, we do not guarantee that it reflects the latest amendments/ information at any time.</p>
            
            <h2 className="mt-8 mb-4 flex items-center gap-3 text-xl font-extrabold text-[#FDFBF7] border-l-4 border-[#0EA5E9] pl-4">Completeness and Accuracy</h2>
            <p>All text, data, graphs and other pieces of information are presented with the best possible attempts to maintaining integrity, consistency and reliability of the same. However, none of the employees, directors, consultants, agents, representatives stand guarantors to any kind about the completeness, accuracy, reliability, suitability or availability with respect to the website or the information, products, services, or related graphics contained on the website for any purpose.</p>
            <p>Any reliance you place on such information is therefore strictly at your own risk. In the event that an inaccuracy or discrepancy is noticed by anyone who accesses the website, we would like you to inform us so that it can be corrected.</p>

            <h2 className="mt-8 mb-4 flex items-center gap-3 text-xl font-extrabold text-[#FDFBF7] border-l-4 border-[#0EA5E9] pl-4">Limitation of Liability</h2>
            <p>None of the company representative stands liable for any direct or indirect loss of profit or consequential damages that are alleged to have resulted from the use and/or inability to access or use the website features or misinterpretation or misrepresentation of information of any kind. The company does not become liable for any technical failure or malfunctioning of the software or the performance of any of our services.</p>
            <p>We are also not responsible for non-receipt of registration details or e-mails. Users shall bear all responsibility of keeping the password secure and we are not responsible for the loss or misuse of the same.</p>

            <h2 className="mt-8 mb-4 flex items-center gap-3 text-xl font-extrabold text-[#FDFBF7] border-l-4 border-[#0EA5E9] pl-4">External Links &amp; Third-Party Sites</h2>
            <p>This website provides some link to other websites which are not under our direct control. The inclusion of any links does not necessarily imply a recommendation or endorse the views expressed within them and they are presented without any prior screening or review. While attempts are made at delivering only the relevant information to our users, no representative of the company holds any kind of liability as to the use of such content made available through those sites.</p>

            <h2 className="mt-8 mb-4 flex items-center gap-3 text-xl font-extrabold text-[#FDFBF7] border-l-4 border-[#0EA5E9] pl-4">Website Availability</h2>
            <p>We strive at keeping the website up and running smoothly along with all its features and services. However, technical issues beyond our control may arise when the website becomes temporarily unavailable or some of the features may not work as they are expected to.</p>
            <p>The company does not take responsibility for such events and will not be liable for any financial or non-tangible losses arising due to the same. We do not warrant that the use of services, software or any other features available on the website will be uninterrupted, secure or error free or that any such defects in the services will be corrected.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DisclaimerPage;
