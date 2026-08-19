import React, { useEffect } from 'react';
import { FileText } from 'lucide-react';

const RefundPolicyPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sections = [
    '01 Terms & Conditions',
    '02 Cancellation Policy',
    '03 Refund Policy',
    '04 Privacy Policy',
    '05 Information We Collect',
    '06 Usage of Information',
    '07 Security',
    '08 Use of Cookies',
    '09 Links to Other Websites',
    '10 Controlling Your Information',
    '11 Contacting Us'
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
            Privacy &amp; Refund Policy
          </h1>
          <p className="text-gray-500 text-base">Important information regarding your transactions, refunds, and privacy with HAUS Money &amp; NUO-Pay.</p>
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
              <h2 id="section-1" className="scroll-mt-32 mt-0 mb-4 flex items-center gap-3 text-2xl font-extrabold text-[#0b0f0e] border-l-4 border-[#5bc116] pl-4">1. TERMS &amp; CONDITIONS</h2>
              <p>
                Welcome to HAUS Money &amp; NUO-Pay. HAUS Money &amp; NUO-Pay is owned and managed by NuoG Housing Payments Limited (hereinafter referred to as HAUS Money &amp; NUO-Pay). If you continue to browse and use this website you are agreeing to comply with and be bound by the following terms and conditions of use, which together with our privacy policy govern HAUS Money &amp; NUO-Pay's relationship with you in relation to this website.
              </p>
              <p>
                The term 'HAUS Money &amp; NUO-Pay' or 'us' or 'we' refers to the owner of the website whose registered office is UNIT NO. 260, SRINIVAS NAGAR, KAPRA, DR. AS RAO NAGAR, SECUNDRABAD, HYDERABAD - 500062. Our registration is U70200TS2025PLC202763, India. The term 'you' refers to the user or viewer of our website.
              </p>
              <p className="font-semibold mt-6 mb-2 text-[#0b0f0e]">The use of this website is subject to the following terms of use:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>The content of the pages of this website is for your general information and use only. It is subject to change without notice.</li>
                <li>Neither we nor any third parties provide any warranty or guarantee as to the accuracy, timeliness, performance, completeness or suitability of the information and materials found or offered on this website for any particular purpose. You acknowledge that such information and materials may contain inaccuracies or errors and we expressly exclude liability for any such inaccuracies or errors to the fullest extent permitted by law.</li>
                <li>Your use of any information or materials on this website is entirely at your own risk, for which we shall not be liable. It shall be your own responsibility to ensure that any products, services or information available through this website meet your specific requirements.</li>
                <li>This website contains material which is owned by or licensed to us. This material includes, but is not limited to, the design, layout, look, appearance and graphics. Reproduction is prohibited other than in accordance with the copyright notice, which forms part of these terms and conditions. All trademarks reproduced in this website which are not the property of, or licensed to HAUS Money &amp; NUO-Pay are acknowledged on the website.</li>
                <li>Unauthorised use of this website may give rise to a claim for damages and/or be a criminal offence. From time to time this website may also include links to other websites. These links are provided for your convenience to provide further information. They do not signify that we endorse the website(s). We have no responsibility for the content of the linked website(s).</li>
                <li>You may not create a link to this website from another website or document without HAUS Money &amp; NUO-Pay's prior written consent. Your use of this website and any dispute arising out of such use of the website is subject to the laws of India or regulatory authority within the country of India.</li>
              </ul>

              {/* Section 2 */}
              <h2 id="section-2" className="scroll-mt-32 mt-12 mb-4 flex items-center gap-3 text-2xl font-extrabold text-[#0b0f0e] border-l-4 border-[#5bc116] pl-4">2. CANCELLATION POLICY</h2>
              <p>HAUS Money &amp; NUO-Pay believes in helping its customers as far as possible, and has therefore a liberal cancellation policy. Under this policy:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Cancellations will be considered only if the request is made within 24 hours of placing an order. However, the cancellation request will not be entertained if the orders have been communicated to the operational team and Operations team has initiated the process of assignment. Cancellation and refund of fees or charges will be strictly governed by the Company Refund Policy of the company informed and declared from time to time.</li>
                <li>There is no cancellation of orders placed under the Same day delivery category.</li>
                <li>No cancellations are entertained for those products/services that the HAUS Money &amp; NUO-Pay marketing team has obtained on special discounts and offers on occasions like New Year, Pongal, Diwali, Independence Day, Foundation Day etc. These are limited occasion offers and therefore cancellations are not possible.</li>
              </ul>

              {/* Section 3 */}
              <h2 id="section-3" className="scroll-mt-32 mt-12 mb-4 flex items-center gap-3 text-2xl font-extrabold text-[#0b0f0e] border-l-4 border-[#5bc116] pl-4">3. REFUND POLICY</h2>
              <div className="bg-[#e8fbe9] border border-[#b2e7b8] text-[#0b0f0e] p-6 rounded-2xl my-6">
                <p className="m-0 leading-relaxed font-medium">
                  When you buy our products/services, your purchase is covered by our 24 hours money back guarantee. If you are, for any reason, not entirely happy with your purchase, we will cheerfully issue a full refund, subject to deductions for legal documents or services provided. To request a refund under this guarantee, you must contact us within the first 24 hours of your payment. Just send an email to <a href="mailto:enquiry@nuobnk.com" className="text-[#4a9b12] hover:underline font-bold">enquiry@nuobnk.com</a>. We'll gladly refund you 100% of your fees within 24-72 hours of your refund request.
                </p>
              </div>

              {/* Section 4 */}
              <h2 id="section-4" className="scroll-mt-32 mt-12 mb-4 flex items-center gap-3 text-2xl font-extrabold text-[#0b0f0e] border-l-4 border-[#5bc116] pl-4">4. PRIVACY POLICY</h2>
              <p>This privacy policy sets out how HAUS Money &amp; NUO-Pay uses and protects any information that you provide to HAUS Money &amp; NUO-Pay when you use this website.</p>
              <p>HAUS Money &amp; NUO-Pay is committed to ensuring that your privacy is protected. Should we ask you to provide certain information by which you can be identified when using this website, then you can be assured that it will only be used in accordance with this privacy statement.</p>
              <p>HAUS Money &amp; NUO-Pay may change this policy from time to time by updating this page. You should check this page from time to time to ensure that you are happy with any changes. This policy is revised and effective from 01/08/2026.</p>

              {/* Section 5 */}
              <h2 id="section-5" className="scroll-mt-32 mt-12 mb-4 flex items-center gap-3 text-2xl font-extrabold text-[#0b0f0e] border-l-4 border-[#5bc116] pl-4">5. INFORMATION WE COLLECT</h2>
              <p className="font-semibold mb-2 text-[#0b0f0e]">We may collect the following information:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Name and Job title</li>
                <li>Contact Information including email address &amp; phone number</li>
                <li>Demographic Information such as City, postcode, preferences and interests</li>
                <li>Other Information relevant to service enquiry, customer surveys and/or offers</li>
              </ul>

              {/* Section 6 */}
              <h2 id="section-6" className="scroll-mt-32 mt-12 mb-4 flex items-center gap-3 text-2xl font-extrabold text-[#0b0f0e] border-l-4 border-[#5bc116] pl-4">6. USAGE OF INFORMATION</h2>
              <p className="font-semibold mb-2 text-[#0b0f0e]">We require this information to understand your needs and provide you with a best service, and in particular for the following reasons:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Internal record keeping.</li>
                <li>We may use the information to improve our products and services.</li>
                <li>We may periodically send promotional emails about new products, special offers or other information which we think you may find interesting using the email address which you have provided.</li>
                <li>From time to time, we may also use your information to contact you for feedback, market research purposes. We may contact you by email, phone, fax or mail. We may use the information to customise the website according to your interests.</li>
              </ul>

              {/* Section 7 */}
              <h2 id="section-7" className="scroll-mt-32 mt-12 mb-4 flex items-center gap-3 text-2xl font-extrabold text-[#0b0f0e] border-l-4 border-[#5bc116] pl-4">7. SECURITY</h2>
              <p>We are committed to ensuring that your information is secure. In order to prevent unauthorised access or disclosure we have put in place suitable physical, electronic and managerial procedures to safeguard and secure the information we collect online.</p>

              {/* Section 8 */}
              <h2 id="section-8" className="scroll-mt-32 mt-12 mb-4 flex items-center gap-3 text-2xl font-extrabold text-[#0b0f0e] border-l-4 border-[#5bc116] pl-4">8. HOW WE USE COOKIES</h2>
              <p>A cookie is a small file which asks permission to be placed on your computer's hard drive. Once you agree, the file is added and the cookie helps analyse web traffic or lets you know when you visit a particular site. Cookies allow web applications to respond to you as an individual. The web application can tailor its operations to your needs, likes and dislikes by gathering and remembering information about your preferences.</p>
              <p>We use traffic log cookies to identify which pages are being used. This helps us analyse data about webpage traffic and improve our website in order to tailor it to customer needs. We only use this information for statistical analysis purposes and then the data is removed from the system.</p>
              <p>Overall, cookies help us provide you with a better website, by enabling us to monitor which pages you find useful and which you do not. A cookie in no way gives us access to your computer or any information about you, other than the data you choose to share with us. You can choose to accept or decline cookies. Most web browsers automatically accept cookies, but you can usually modify your browser setting to decline cookies if you prefer. This may prevent you from taking full advantage of the website.</p>

              {/* Section 9 */}
              <h2 id="section-9" className="scroll-mt-32 mt-12 mb-4 flex items-center gap-3 text-2xl font-extrabold text-[#0b0f0e] border-l-4 border-[#5bc116] pl-4">9. LINKS TO OTHER WEBSITES</h2>
              <p>Our website may contain links to other websites of interest. However, once you have used these links to leave our site, you should note that we do not have any control over that other website. Therefore, we cannot be responsible for the protection and privacy of any information which you provide whilst visiting such sites and such sites are not governed by this privacy statement. You should exercise caution and look at the privacy statement applicable to the website in question.</p>

              {/* Section 10 */}
              <h2 id="section-10" className="scroll-mt-32 mt-12 mb-4 flex items-center gap-3 text-2xl font-extrabold text-[#0b0f0e] border-l-4 border-[#5bc116] pl-4">10. CONTROLLING YOUR INFORMATION</h2>
              <p className="font-semibold mb-2 text-[#0b0f0e]">You may choose to restrict the collection or use of your personal information in the following ways:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>whenever you are asked to fill in a form on the website, look for the box that you can click to indicate that you do not want the information to be used by anybody for promotional purposes. If such box is not available, you may choose not to fill such form. However, by submitting the filled enquiry form, you will be construed to have foregone your right and Company may choose to send promotional emails and materials from time to time.</li>
                <li>if you have previously agreed to us using your personal information for promotional purposes, you may change your mind at any time by writing to or emailing us at <a href="mailto:enquiry@nuobnk.com" className="text-[#5bc116] hover:underline font-medium">enquiry@nuobnk.com</a></li>
              </ul>
              <p>We will not sell, distribute or lease your personal information to third parties unless we have your permission or are required by law to do so. We may use your personal information to send you promotional information about third parties which we think you may find interesting.</p>

              {/* Section 11 */}
              <h2 id="section-11" className="scroll-mt-32 mt-12 mb-4 flex items-center gap-3 text-2xl font-extrabold text-[#0b0f0e] border-l-4 border-[#5bc116] pl-4">11. CONTACTING US</h2>
              <p>If there are any questions regarding this privacy policy you may contact us using the information below:</p>
              
              <div className="bg-[#fcfcfc] border border-gray-200 p-6 rounded-2xl mt-6 shadow-sm max-w-md">
                <p className="font-bold text-lg text-[#0b0f0e] mb-2">NuoG Housing Payments Limited</p>
                <p className="text-[14px] text-gray-500 leading-relaxed mb-4">
                  UNIT NO. 260, SRINIVAS NAGAR, KAPRA,<br />
                  DR. AS RAO NAGAR, SECUNDRABAD,<br />
                  HYDERABAD - 500062
                </p>
                <div className="flex items-center gap-2 text-[#0b0f0e]">
                  <span className="font-bold text-[14px]">Tel:</span> 
                  <a href="tel:+919755766018" className="text-[#5bc116] hover:underline font-bold text-lg tracking-wide">+91 9755 766 018</a>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RefundPolicyPage;
