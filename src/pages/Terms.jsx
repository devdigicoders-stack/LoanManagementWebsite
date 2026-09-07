import React from 'react';
import { FileText, AlertTriangle } from 'lucide-react';

const Terms = () => {
  return (
    <div className="w-full bg-[#fcfcfc] min-h-screen pt-32 pb-20 px-6 md:px-10 text-gray-800">
      <div className="w-full px-6 lg:px-12 xl:px-16 mx-auto">
        <div className="mb-10 border-b border-gray-200 pb-8">
          <div className="inline-flex items-center gap-2 bg-[#E0F2FE] text-[#0369A1] px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-4">
            <FileText size={14} /> Official Documentation
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-3">Terms & Conditions</h1>
          <p className="text-gray-500 text-base">Important information about using our website, applications and services.</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-10">

          {/* Sidebar */}
          <div className="w-full lg:w-[30%] shrink-0 sticky top-28 hidden lg:block">
            <div className="bg-white border border-gray-200 p-6 rounded-2xl shadow-sm">
              <h3 className="text-sm font-bold text-gray-900 mb-4 uppercase tracking-wider">Quick Navigation</h3>
              <ul className="flex flex-col gap-1 max-h-[60vh] overflow-y-auto pr-2 custom-scrollbar">
                {['01 Introduction', '02 Using the Website/Services', '03 Grant of Authority', '04 Proprietary Rights', '05 Prohibited Conduct', '06 Display/Advertisements/Web Links', '07 Inaccuracies', '08 Security', '09 Disclaimer of Warranty', '10 Limitation of Liability', '11 Use Information on this Services', '12 Governing Law and Jurisdiction', '13 Details of Grievance Officer', '14 Breach of the Terms', '15 Feedback', '16 Miscellaneous', '17 NACH/eNACH Cancellation'].map((item, index) => (
                  <li key={index}>
                    <a href={`#section-${index + 1}`} className="flex items-start gap-3 py-2 px-3 text-gray-600 hover:text-[#0EA5E9] hover:bg-[#F8FAFC] rounded-lg transition-colors text-[13px] font-medium leading-tight">
                      <span className="text-[#0EA5E9] font-bold shrink-0">{String(index + 1).padStart(2, '0')}</span>
                      {item.substring(3)}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Main Content */}
          <div className="w-full lg:w-[70%] bg-white p-8 md:p-12 rounded-3xl shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-[#e8f5e9]">
            <div className="prose prose-green max-w-none prose-headings:text-slate-900 prose-h2:text-xl prose-h2:font-bold prose-h2:mt-10 prose-h2:mb-4 prose-p:text-gray-500 prose-p:text-[14px] prose-p:leading-relaxed prose-li:text-gray-500 prose-li:text-[14px]">

              <p className="font-semibold text-slate-900">
                THIS WEBSITE <a href="http://https://hausnuo.com" className="text-[#0EA5E9] hover:underline font-bold">https://hausnuo.com</a> AND OTHER RELATED INTERNET BASED APPLICATIONS (COLLECTIVELY REFERRED TO AS "WEBSITE" OR "SERVICES") OWNED AND OPERATED BY NUOG HOUSING PAYMENT&apos;S LIMITED, A COMPANY INCORPORATED UNDER THE LAWS OF REPUBLIC OF INDIA HAVING ITS REGISTERED OFFICE AT SRINIVAS NAGAR, KAPRA, DR. AS RAO NAGAR, MEDCHAL-MALKAJGIRI, SECUNDERABAD, HYDERABAD - 500062, TG, INDIA (HEREINAFTER REFERRED TO AS "WE", OR "US" OR "OUR").
              </p>

              <p>
                THESE GENERAL TERMS OF USE (HEREINAFTER REFERRED TO AS THE "TERMS") SHALL CONSTITUTE A VALID AND BINDING LEGAL AGREEMENT BETWEEN US AND THE USER OF OUR WEBSITE/SERVICES (HEREINAFTER, WHERE THE CONTEXT SO REQUIRES, "YOU" OR "USER" ARE REFERRED TO INTERCHANGEABLY).
              </p>

              <p>
                USERS OF THIS WEBSITE OR SERVICES OFFERED BY US ARE REQUESTED TO READ THESE TERMS BEFORE REGISTERING, ACCESSING, BROWSING, DOWNLOADING OR USING ANYTHING FROM THE WEBSITE BY ACCESSING OR WHILE USING THE WEBSITE OR THE SERVICES.
              </p>

              <p className="font-semibold text-red-600 bg-red-50 p-4 rounded-lg my-6 border border-red-100">
                YOU UNDERSTAND AND AGREE THAT NUOG WILL TREAT YOUR USE OF THE WEBSITE OR SERVICES AS ACCEPTANCE OF THESE TERMS OF USE. USERS, PLEASE TAKE NOTE THAT ANY STATEMENTS MADE ON OUR WEBSITE SHALL NOT BE CONSTRUED AS A PROMISE FOR GRANT OF ANY SERVICES.
              </p>

              {/* Section 1 */}
              <h2 id="section-1" className="scroll-mt-32 mt-12 mb-4 flex items-center gap-3 text-2xl font-extrabold text-slate-900 border-l-4 border-[#0EA5E9] pl-4">1. INTRODUCTION</h2>
              <p>The Terms are Governed by the Provisions of the Applicable Indian Laws, the Rules, Regulations, Guidelines, and Clarifications Framed Thereunder, Including but Not Limited to:</p>
              <ul className="list-disc pl-6 space-y-2 mb-6 text-gray-600">
                <li>The Indian Contract Act, 1872;</li>
                <li>The Information Technology Act, 2000;</li>
                <li>The Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Information) Rules, 2011; and</li>
                <li>The Information Technology (Intermediaries Guidelines) Rules, 2011.</li>
              </ul>

              <p>These Terms and Your Activity Under these Terms are an Electronic Record as Per the (Indian) Information Technology Act, 2000 and these Terms Being Electronically Generated by a Computer System Does Not Require any Physical or Digital Signatures.</p>
              <p>NuoG Reserves the Right to Modify these Terms and Other Policies Applicable in General and to Specific Areas of Our Services or to a Particular Service which shall also be Considered as Part of these Terms, at any time without giving you any Prior Notice and Such Changes Shall be Binding on You.</p>
              <p>You shall Revisit these Terms from time to time to Stay Abreast of any Changes that we may Introduce to these Terms. Your Use of Our Website or Services Pursuant to any Such Modification Shall be Treated as Your Acceptance to follow the Modified Terms as Applicable.</p>

              <p>By Using our Website, You Agree to these Terms. Further You Represent and Warrant to us that:</p>
              <ul className="list-disc pl-6 space-y-2 mb-6 text-gray-600">
                <li>You are a Person who is Not Barred or Otherwise Legally Prohibited from Receiving or Using the Website or Services Under the laws of the country in which you are resident or from which you access or use the Services;</li>
                <li>You are a resident of the Republic of India.</li>
                <li>You shall not impersonate any person or entity or falsely state or otherwise misrepresent age, identity or affiliation with any individual or entity.</li>
              </ul>

              <p>Notwithstanding anything contained herein you agree that:</p>
              <ul className="list-disc pl-6 space-y-2 mb-6 text-gray-600">
                <li>NuoG Reserves the right to deny your registration/access as a User and deny Services without assigning any reason whatsoever;</li>
                <li>The information contained in this Website or Services does not constitute any advice or recommendation with respect to such financial instruments. You understand that the objective is to give you information for making informed decisions and to compare with similar Services. Any and all information provided is therefore for general information purposes only.</li>
              </ul>

              <p>You have also understood we advise that independent professional advice is obtained before you purchase any product and Service.</p>
              <p>By using the Website or Services, you grant consent to NuoG to the use of your information as outlined by NuoG in its Privacy Policy. You understand that this Website uses cookies; by using this Website, you agree to these Terms and consent to NuoG’s use of cookies in accordance with the terms of NuoG’s Privacy Policy.</p>
              <p>NuoG may translate these Terms into other languages for your convenience. Nevertheless, the English version governs your relationship with NuoG, and any inconsistencies among the different versions will be resolved as per the English version.</p>

              {/* Section 2 */}
              <h2 id="section-2" className="scroll-mt-32 mt-12 mb-4 flex items-center gap-3 text-2xl font-extrabold text-slate-900 border-l-4 border-[#0EA5E9] pl-4">2. USING THE WEBSITE/ SERVICES</h2>
              <p><strong>Acceptance:</strong> By using the Services you agree to unconditionally accept and agree to comply with and be bound by these Terms. Subject to the aforesaid NuoG grant you permission to use the Website or Services subject to the restrictions in these Terms. Your use of the Services is at your risk.</p>
              <p><strong>User Account:</strong> You may create a User Account (“Account” or “User Account”) and provide certain information about yourself to use some of the features of the Services that are offered through the Website or Services. You agree that you are solely responsible for maintaining the secrecy of your passwords, login and account information for using the Services. You are also responsible for all activities that occur in connection with your Account. You agree to notify NuoG immediately of any unauthorized use of your Account. NuoG reserves the right to close your Account at any time for any or no reason. Also, you shall not create multiple Accounts. You agree not to use the Services for any purpose that is unlawful, illegal or forbidden by these Terms, or any local laws that might apply to you. When you create a User Account, you will be additionally required to accept the specific terms and conditions for expressing your interest to for availing various services.</p>
              <p><strong>Submission of Information:</strong> While creating your User Account you will be asked to provide certain information, which is mandatory. Also, there will be other details, which you can provide at your discretion. In both cases, we may ask you to provide complete and accurate information about yourself to bolster your credibility. You confirm and warrant to NuoG that the details submitted by you are accurate and correct and NuoG can rely on it for providing the Services sought by you through the Services.</p>
              <p><strong>Communications:</strong> If you create a User Account, you agree to receive certain communications in connection with the Website or the Services. By using the Services and/or registering yourself at NuoG's Services you Authorize NuoG, NuoG's affiliates, NuoG's Associates, Partners to contact you via email or phone call or SMS and offer you their services for the product you have opted for, imparting product knowledge, offer promotional offers running on website & offers offered by the associated third parties, for which reasons, as well as web aggregation. Irrespective of the fact if also you have registered yourself under DND or DNC or NCPR service, you still authorize NuoG to give you a call from us, NuoG’s affiliates, NuoG’s associates, partners for the purposes mentioned above. NuoG may also pass your information to third party financial services companies for the purpose of them, tell you about their services or products.</p>
              <p><strong>Service Fee:</strong> You agree that you shall pay a fee for the Services as per terms of the specific services provided by the Services. The fee once paid shall be non-refundable, unless agreed by NuoG in writing. The payment of fee or application made in Services does not assure you a grant of a loan or other Services mentioned on our Website; the same will be subject to the satisfaction of other formalities required for the specific Services.</p>
              <p><strong>Availability of Website or any Services:</strong> NuoG’s Website or Services may be modified, updated, interrupted, suspended or discontinued at any time without notice or liability.</p>

              {/* Section 3 */}
              <h2 id="section-3" className="scroll-mt-32 mt-12 mb-4 flex items-center gap-3 text-2xl font-extrabold text-slate-900 border-l-4 border-[#0EA5E9] pl-4">3. GRANT OF AUTHORITY</h2>
              <p>NuoG may as a result of your interaction with the Services hold and process personal information obtained about you. When you access the Services and provide information the same will be deemed as your authorisation to NuoG (i) to use it for making lending decisions or decision to provide any Services (ii) to other service providers for offer various products and services which you may need (iii) for fraud prevention and debt collection (iv) to understand your financial needs (v) servicing NuoG relationship with you and to conduct NuoG’s business and to provide you with better customer services and products.</p>
              <p>You grant NuoG authority to pass such information to other agents as permitted by law so that they may do the same and they may pass information held by them about you to NuoG so that NuoG may do the same.</p>
              <p>NuoG will not disclose any such information outside of NuoG except as mentioned above other than for fraud prevention purposes and/or if required/obliged by law or Governmental or judicial bodies or agencies or to NuoG’s regulators under proper authority, or under a strict code of secrecy to sub-contractors or persons acting as NuoG’s agents or where NuoG have your consent or have previously informed you.</p>
              <p>By consenting to these Terms, You hereby grant NuoG authority, power and also authorize NuoG or NuoG’s authorized representatives to do all acts on your behalf as may be necessary for the purpose of providing the Services sought by you through the options available in NuoG’s Services.</p>

              {/* Section 4 */}
              <h2 id="section-4" className="scroll-mt-32 mt-12 mb-4 flex items-center gap-3 text-2xl font-extrabold text-slate-900 border-l-4 border-[#0EA5E9] pl-4">4. PROPRIETARY RIGHTS</h2>
              <p>You do not have the right to use any of NuoG's trade names, trademarks, service marks, logos, domain names, and other distinctive brand features. You do not have the right to copy and use the software, text, images, graphics, video, and audio used on this Services (“Content”). You do not have the right to remove, obscure, or alter any proprietary rights notices (including trademark and copyright notices), which may be affixed to or contained within the Services. You will not copy or transmit any of the Services.</p>
              <p>NuoG neither represents nor warrants that your use of materials displayed on the Website/Services will not infringe rights of third parties.</p>

              {/* Section 5 */}
              <h2 id="section-5" className="scroll-mt-32 mt-12 mb-4 flex items-center gap-3 text-2xl font-extrabold text-slate-900 border-l-4 border-[#0EA5E9] pl-4">5. PROHIBITED CONDUCT</h2>
              <p>By using NuoG’s Services you agree that you shall not:</p>
              <ul className="list-disc pl-6 space-y-2 mb-6 text-gray-600">
                <li>use NuoG's Services and Services for spamming or any other illegal purposes;</li>
                <li>infringe NuoG’s or any third party's intellectual property rights, rights of publicity or privacy;</li>
                <li>post or transmit any message which is libelous, defamatory or which discloses private or personal matters concerning any person;</li>
                <li>post or transmit any message, data, image or program which violates any law;</li>
                <li>refuse to cooperate in an investigation or provide confirmation of your identity or any other information you provide to NuoG;</li>
                <li>remove, circumvent, disable, damage or otherwise interfere with security related features of the NuoG's Services or features that enforce limitations on the use of NuoG's Services and Website;</li>
                <li>upload any content that constitutes negligent advice or contains any negligent statement, an incitement to commit a crime or contains instructions for the commission of a crime or the promotion of criminal activity; or any content which is in contempt of any court, or in breach of any court order; or discriminates on the basis of age, sex, religion, race, gender; harassing, invasive of another's privacy, blasphemous; in breach of any contractual obligations or depicts violence or is pornographic, paedophilic, obscene, suggestive or sexually explicit; or consists of or contains any instructions, advice or other information which may be acted upon and could, if acted upon, cause illness, injury or death, or any other loss or damage; or constitutes spam; or is grossly harmful, offensive, deceptive, fraudulent, threatening, abusive, hateful, harassing, anti-social, menacing, hateful, discriminatory or inflammatory; or causes annoyance, inconvenience or needless anxiety to any person; or racially, ethnically objectionable, disparaging, relating or encouraging money laundering or gambling, or harm minors in any way or otherwise unlawful in any manner whatever;</li>
                <li>upload any content that threatens the unity, integrity, defence, security or sovereignty of any country, or public order or causes incitement to the commission of any cognizable offence or prevents investigation of any offence or is insulting any nation;</li>
                <li>upload any content that contains software viruses or any other computer code, files or programs designed to interrupt, destroy or limit the functionality of any computer resource;</li>
                <li>reverse engineer, decompile, disassemble or otherwise attempt to discover the source code of NuoG's Services and Services or any part thereof or infringe any patent, trademark, copyright or other proprietary rights;</li>
                <li>use NuoG's Services and Services in any manner that could damage, disable, overburden, or impair, including, without limitation, using NuoG's Services and Services in an automated manner;</li>
                <li>modify, adapt, translate or create derivative works based upon NuoG's Services and Services or any part thereof;</li>
                <li>intentionally interfere with or damage operation of NuoG's Services and Services or any other User’s use of NuoG’s Services and Website, by any means, including uploading or otherwise disseminating viruses, adware, spyware, worms, or other malicious code or file with contaminating or destructive features;</li>
                <li>use any robot, spider, other automatic devices, or manual process to monitor or copy NuoG’s Services and Services without prior written permission of NuoG;</li>
                <li>interfere or disrupt NuoG’s Services and Services or networks connected in addition to that;</li>
                <li>take any action that imposes an unreasonably or disproportionately large load on NuoG’s infrastructure/network;</li>
                <li>use any device, software or routine to bypass NuoG’s Services and Services robot exclusion headers, or interfere or attempt to interfere, with NuoG’s Services and Website;</li>
                <li>forge headers or manipulate identifiers or other data to disguise the origin of any content transmitted through NuoG’s Services and Services or to manipulate your presence on NuoG’s Services and Website;</li>
                <li>use the facilities and capabilities of NuoG’s Services and Services to conduct any activity or solicit the performance of any illegal activity or other activity which infringes the rights of others;</li>
                <li>breach these Terms or any other policies of NuoG;</li>
                <li>provide false, inaccurate or misleading information to NuoG’s Services and Website; and</li>
                <li>use NuoG’s Services and Services to collect or obtain personal information, including without limitation, personal information about other Users of NuoG’s Services and Website.</li>
              </ul>
              <p>Although NuoG may from time to time monitor or review postings, transmissions, and the like on the Website, NuoG is under no obligation to do so and assumes no responsibility or liability arising from the content of any such locations nor for any error, defamation, libel, slander, omission, falsehood, obscenity, pornography, profanity, danger, or inaccuracy contained in any information within such locations on the Website.</p>
              <p>You are prohibited from posting or transmitting any unlawful, threatening, libelous, defamatory, obscene, scandalous, inflammatory, pornographic, or profane material or any material that could constitute or encourage conduct that would be considered a criminal offense, give rise to civil liability, or otherwise violate any law.</p>
              <p>NuoG retains the right to remove any such posting and will fully cooperate with any law enforcement authorities or court order requesting or directing NuoG to disclose the identity of anyone posting any such information or materials.</p>

              {/* Section 6 */}
              <h2 id="section-6" className="scroll-mt-32 mt-12 mb-4 flex items-center gap-3 text-2xl font-extrabold text-slate-900 border-l-4 border-[#0EA5E9] pl-4">6. DISPLAY/ ADVERTISEMENTS/ WEB LINKS</h2>
              <p>NuoG has not reviewed any sites that may be linked to the Services and is not responsible for the content of any off-site pages or any other sites linked to the Website. Your linking to any other off-site pages or other sites is at your risk.</p>
              <p>NuoG’s display on or through the Services of various services or product options offered by third parties does not in any way imply, suggest, or constitute any sponsorship, recommendation or approval or advise of NuoG of any such third parties or their products.</p>
              <p>You agree that NuoG is in no way responsible for the accuracy, timeliness or completeness of information it may obtain from these third parties. Your interaction with any third party accessed through the Services is at your risk, and NuoG will have no liability with respect to the acts, omissions, errors, representations, warranties, breaches or negligence of any such third parties or for any personal injuries, death, property damage, or other damages or expenses resulting from your interactions with the third parties.</p>
              <p>You agree that you may need to agree with terms and condition of such third parties by accessing their Services and the same will be at your sole risk and responsibility. Further, the obligations that may arise</p>

              {/* Section 7 */}
              <h2 id="section-7" className="scroll-mt-32 mt-12 mb-4 flex items-center gap-3 text-2xl font-extrabold text-slate-900 border-l-4 border-[#0EA5E9] pl-4">7. INACCURACIES</h2>
              <p>While NuoG uses reasonable efforts to include accurate and up to date information at the Website, NuoG makes no warranties or representations as to the Websites accuracy. NuoG disclaims any and all liability for the accuracy, completeness, or correctness of such information.</p>

              {/* Section 8 */}
              <h2 id="section-8" className="scroll-mt-32 mt-12 mb-4 flex items-center gap-3 text-2xl font-extrabold text-slate-900 border-l-4 border-[#0EA5E9] pl-4">8. SECURITY</h2>
              <p>While NuoG uses reasonable efforts to safeguard the security of the Website, there can be no guaranty that such safeguards will successfully prevent unauthorized alterations in the content or functionality of the Site. NuoG assumes no liability or responsibility for any unauthorized changes in the content or functionality of the Website/Services.</p>

              {/* Section 9 */}
              <h2 id="section-9" className="scroll-mt-32 mt-12 mb-4 flex items-center gap-3 text-2xl font-extrabold text-slate-900 border-l-4 border-[#0EA5E9] pl-4">9. DISCLAIMER OF WARRANTY</h2>
              <p>The Services and all content and services provided on the Services are provided on an as-is and as-available basis. NuoG expressly disclaims all warranties of any kind, whether express or implied, including, but not limited to, the implied warranties of merchantability, fitness for a particular purpose, title, non-infringement, and security and accuracy, as well as all warranties arising by usage of trade, course of dealing, or course of performance. NuoG makes no warranty, and expressly disclaims any obligation, that:</p>
              <ul className="list-disc pl-6 space-y-2 mb-6 text-gray-600">
                <li>the content will be up-, complete, comprehensive, accurate or applicable to your circumstances;</li>
                <li>the Services will meet your requirements or will be available on an uninterrupted, timely, secure, or error-free basis;</li>
                <li>the results that may be obtained from the use of the Services or any services offered through the site will be accurate or reliable; or</li>
                <li>the quality of any products, services, information, or other material obtained by you through the Services will meet your expectations.</li>
              </ul>

              {/* Section 10 */}
              <h2 id="section-10" className="scroll-mt-32 mt-12 mb-4 flex items-center gap-3 text-2xl font-extrabold text-slate-900 border-l-4 border-[#0EA5E9] pl-4">10. LIMITATION OF LIABILITY</h2>
              <p>NuoG (including its officers, directors, employees, representatives, affiliates, and providers) will not be responsible or liable for:</p>
              <ul className="list-disc pl-6 space-y-2 mb-6 text-gray-600">
                <li>any injury, death, loss, claim, act of god, accident, delay, or any direct, special, exemplary, punitive, indirect, incidental or consequential damages of any kind (including without limitation lost profits or lost savings), whether based in contract, tort, strict liability or otherwise, that arise out of or is in any way connected with (i) any failure or delay (including without limitation the use of or inability to use any component of the Website), or (ii) any use of the Services or content, or (iii) the performance or non-performance by NuoG or any provider, even if NuoG have been advised of the possibility of damages to such parties or any other party, or</li>
                <li>any damages to or viruses that may infect your computer equipment or other property as the result of your access to the Services or your downloading of any content from the Services.</li>
              </ul>

              {/* Section 11 */}
              <h2 id="section-11" className="scroll-mt-32 mt-12 mb-4 flex items-center gap-3 text-2xl font-extrabold text-slate-900 border-l-4 border-[#0EA5E9] pl-4">11. USE INFORMATION ON THIS SERVICES</h2>
              <p>Except as expressly permitted by these Terms, no portion of the information on this Website may be reproduced in any form, or by any means, without NuoG’s prior written permission.</p>

              {/* Section 12 */}
              <h2 id="section-12" className="scroll-mt-32 mt-12 mb-4 flex items-center gap-3 text-2xl font-extrabold text-slate-900 border-l-4 border-[#0EA5E9] pl-4">12. GOVERNING LAW AND JURISDICTION</h2>
              <p>The laws of the India, without regard to its conflict of laws rules, will govern these Terms, as well as your and NuoG’s observance of them.</p>
              <p>If you take any legal action relating to your use of the Services or these Terms, you agree to file such action only in the courts located in Mumbai, India.</p>

              {/* Section 13 */}
              <h2 id="section-13" className="scroll-mt-32 mt-12 mb-4 flex items-center gap-3 text-2xl font-extrabold text-slate-900 border-l-4 border-[#0EA5E9] pl-4">13. DETAILS OF GRIEVANCE OFFICER</h2>
              <p>In accordance with Information Technology Act, 2000 and rules made there under, the name and contact details of the Grievance Officer of NuoG are as provided below:</p>
              <div className="bg-[#f0fbf0] p-6 rounded-xl border border-[#d3ecd3] my-6 text-slate-900">
                <p className="mb-2"><strong>Name:</strong> Yashtika Singh Chouhan</p>
                <p className="mb-2"><strong>Address:</strong> Srinivas Nagar, Kapra, Dr. AS Rao Nagar, Medchal-Malkajgiri, Secunderabad, Hyderabad – 500 062, TG, India</p>
                <p className="mb-2"><strong>Phone No:</strong> 022-42101749</p>
                <p className="mb-0"><strong>e-Mail id:</strong> <a href="#" className="text-[#0EA5E9] hover:underline">chouhan.yashtika@hausnuo.com</a></p>
              </div>
              <p>If the matter is not resolved at the first instance by the Grievance Officer, then the same may then be settled by arbitration by a single Arbitrator appointed by NuoG. The arbitration shall be held, in Delhi, in accordance with the provisions of the Arbitration and Conciliation Act, 1996. The language of Arbitration shall be in English.</p>

              {/* Section 14 */}
              <h2 id="section-14" className="scroll-mt-32 mt-12 mb-4 flex items-center gap-3 text-2xl font-extrabold text-slate-900 border-l-4 border-[#0EA5E9] pl-4">14. BREACH OF THE TERMS</h2>
              <p>Without prejudice to NuoG’s other rights under these Terms, if you breach these Terms in any way, or if NuoG suspect that you have breached these Terms in any way, NuoG may:</p>
              <ul className="list-disc pl-6 space-y-2 mb-6 text-gray-600">
                <li>send you one or more formal warnings;</li>
                <li>temporarily suspend your access to NuoG’s Services and Services;</li>
                <li>permanently prohibit you from accessing NuoG’s Services and Services;</li>
                <li>block computers using your IP address from accessing NuoG’s Services and Services;</li>
                <li>contact any or all of your internet service providers and request that they block your access to NuoG’s Services and Services;</li>
                <li>commence legal action against you, whether for breach of contract or recovery of amounts due or damages or otherwise; and</li>
                <li>suspend or delete your account on NuoG’s Services and Services.</li>
              </ul>

              {/* Section 15 */}
              <h2 id="section-15" className="scroll-mt-32 mt-12 mb-4 flex items-center gap-3 text-2xl font-extrabold text-slate-900 border-l-4 border-[#0EA5E9] pl-4">15. FEEDBACK</h2>
              <p>Your feedback makes use of NuoG’s Services and Services better; please feel free to share it with NuoG on <a href="mailto:support@HAUS NUO-Paypl.com" className="text-[#0EA5E9] hover:underline font-medium">support@hausnuo.com </a>. Unless specifically admitted by NuoG or as required by law all feedback shall be non-confidential in nature.</p>
              <p>NuoG will assume no responsibility for reviewing unsolicited ideas and will not incur any liability as a result of any similarities between those ideas and materials that may appear in future programs of NuoG.</p>
              <p>Please do not reveal trade secrets or other confidential information in your messages to NuoG. Any and all rights to materials submitted to NuoG become the exclusive property of NuoG.</p>

              {/* Section 16 */}
              <h2 id="section-16" className="scroll-mt-32 mt-12 mb-4 flex items-center gap-3 text-2xl font-extrabold text-slate-900 border-l-4 border-[#0EA5E9] pl-4">16. MISCELLANEOUS</h2>
              <p>You hereby agree that NuoG may assign, transfer, sub-contract or otherwise deal with NuoG’s rights and obligations under these Terms. You may not, without NuoG’s prior written consent, assign, transfer, sub-contract or otherwise deal with any of your rights and obligations under these Terms.</p>
              <p>If NuoG fails to act on your breach or anyone else's breach on any occasion, NuoG is not waiving NuoG’s right to act with respect to future or similar breaches.</p>
              <p>If any of these Terms is found to unenforceable or invalid by a court, that Term will be enforced to the fullest extent permitted by applicable law and the other Terms will continue to remain valid and enforceable.</p>
              <p>These Terms, together with those agreements made a part of these Terms by reference, make up the entire agreement between NuoG and you relating to your use of the Services, and replace any prior understandings or agreements (whether oral or written) regarding your use of the Website/Services.</p>
              <p>In any such action or for any action NuoG may initiate, NuoG will be entitled to recover all legal expenses incurred in connection with the legal action, including but not limited to costs, both taxable and non-taxable, and reasonable attorney fees.</p>
            </div>
          </div>
        </div>


      </div>
    </div>
  );
};

export default Terms;


