import React from 'react';
import { ExternalLink, Building2, FileText, AlertTriangle } from 'lucide-react';

const PrivacyPolicyPage = () => {

  const sections = [
    '01 Consent', 
    '02 Information Collected and Used', 
    '03 Purpose of Information Collected', 
    '04 Data Retention and Deletion', 
    '05 Procedure for Data Destruction', 
    '06 Specific Consent', 
    '07 Sharing of Information', 
    '08 Standards for Handling Data Breaches', 
    '09 Procedure for Correcting Inaccuracies',
    '10 Changes in Privacy Policy',
    '11 Incorporation of Privacy Policy',
    '12 Grievance Redressal',
    '13 Reporting to CICs',
    '14 Website Disclosures',
    '15 List of Third Parties'
 ];

  return (
    <div className="w-full bg-[#fcfcfc] min-h-screen pt-32 pb-20 px-6 md:px-10 text-gray-800">
      <div className="max-w-7xl mx-auto">
        {/* Privacy Policy Page Header */}
        <div className="mb-10 border-b border-gray-200 pb-8">
          <div className="inline-flex items-center gap-2 bg-[#E0F2FE] text-[#0369A1] px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-4">
            <FileText size={14} /> Official Documentation
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-3">
            Privacy Policy
          </h1>
          <p className="text-gray-500 text-base">Please read this policy carefully to understand our practices regarding your information.</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-10 relative items-start">
          
          {/* Sidebar Navigation */}
          <div className="w-full lg:w-[30%] shrink-0 sticky top-28 hidden lg:block">
            <div className="bg-white border border-gray-200 p-6 rounded-2xl shadow-sm">
              <h3 className="text-sm font-bold text-gray-900 mb-4 uppercase tracking-wider">Quick Navigation</h3>
              <ul className="flex flex-col gap-1 max-h-[60vh] overflow-y-auto pr-2 custom-scrollbar">
                {sections.map((item, index) => (
                  <li key={index}>
                    <a href={`#section-${index+1}`} className="flex items-start gap-3 py-2 px-3 text-gray-600 hover:text-[#0EA5E9] hover:bg-[#F8FAFC] rounded-lg transition-colors text-[13px] font-medium leading-tight">
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
            <div className="max-w-none text-[15px] text-gray-600 leading-relaxed [&>p]:mb-5 [&>ul]:mb-5 [&>ol]:mb-5 [&>ul]:pl-5 [&>ol]:pl-5 [&>ul>li]:mb-2 [&>ol>li]:mb-2 [&>ul>li]:list-disc [&>ol>li]:list-decimal [&>ul]:list-disc [&>ol]:list-decimal">
              
              {/* SectionHeading reusable style applied inline via className on h2 */}
              {/* Introduction Text */}
              <p>
                This website <a href="http://www.HAUS NUO-Paypl.com" target="_blank" rel="noreferrer" className="text-[#0EA5E9] no-underline hover:underline font-semibold">(www.HAUS NUO-Paypl.com)</a>, the HAUS Money & NUO-Pay Mobile Application and other related/associated internet based applications (collectively referred to as “Website” or “App”) is owned and operated by <strong>NuoG Housing Payment&apos;s Limited (HAUS NUO-Pay)</strong>, (hereinafter referred to as “We”, or “Us” or “Our”), a company incorporated under Companies Act, 1956 and having its registered office at Srinivas Nagar, Kapra, Dr. AS Rao Nagar, Medchal-Malkajgiri, Secunderabad, Hyderabad - 500 062, TG, India.
              </p>
              <p>
                This Privacy Policy gives you (“You” or “Your” or “User” or “Customer”), the user of the Website details behind the collection of Your information and its usage as well as the manner in which We collect, use, store and share information about You. You are advised to read this privacy policy along with and in conjunction with the Terms of Use and other information in the Website/App.
              </p>
              <p>
                You are also advised to please take note that any statements made on the HAUS Money & NUO-Pay Website/App shall not be construed as an offer or promise for grant of any financial services/products.
              </p>
              <p>This Privacy Policy has been prepared in compliance with:</p>
              <ol>
                <li>Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011</li>
                <li>Information Technology (Intermediary Guidelines and Digital Media Ethics Code) Rules, 2021</li>
                <li>Reserve Bank of India (Digital Lending) Directions, 2025;</li>
                <li>Other applicable acts, regulations and rules which require the publishing of a privacy policy for handling of or dealing in personal information including sensitive personal data or information and all applicable laws, regulations, guidelines provided by applicable regulatory authorities including but not limited to the RBI.</li>
              </ol>

              {/* Section 1 */}
              <h2 id="section-1" className="scroll-mt-32 mt-12 mb-4 flex items-center gap-3 text-2xl font-extrabold text-slate-900 border-l-4 border-[#0EA5E9] pl-4">1. CONSENT</h2>
              <p>
                You hereby explicitly consent to provide the information that may be required in relation to the Services (as defined below) being rendered by us. You acknowledge that We shall collect the information detailed under this Privacy Policy to facilitate lending & non-lending services by partnering with various financial lenders, third parties, service providers, etc based on your requirement to avail such Services ("Services"). HAUS Money & NUO-Pay will only be using the information for providing the Services to you.
              </p>
              <p>
                In order to avail any Services being provided by HAUS Money & NUO-Pay by itself or in partnership with other third parties it is important that YOU READ, UNDERSTAND, ACKNOWLEDGE AND UNCONDITIONALLY AGREE TO BE BOUND BY THE TERMS AND CONDITIONS OF THIS PRIVACY POLICY. IF YOU DO NOT AGREE TO THIS POLICY OR ANY PART THEREOF, PLEASE DO NOT USE/ ACCESS/ DOWNLOAD/ INSTALL THE APPLICATION OR ANY PART THEREOF.
              </p>
              <p>
                For the users consenting and continue to access the Website and avail the Services we offer, this Privacy Policy explains our policies and practices regarding the collection, use, deletion and disclosure of Your information.
              </p>

              {/* Section 2 */}
              <h2 id="section-2" className="scroll-mt-32 mt-12 mb-4 flex items-center gap-3 text-2xl font-extrabold text-slate-900 border-l-4 border-[#0EA5E9] pl-4">2. INFORMATION COLLECTED AND USED BY HAUS Money &amp; NUO-Pay</h2>
              <p>This section describes the information we may collect about you and how we use that information and is divided into two sections - a) Data provided by you and b) Information we collect with your explicit consent in order to render our services.</p>
              
              <h3 className="mt-6 mb-3 text-base font-bold text-slate-900 uppercase tracking-wide">Data provided by you</h3>
              <ol>
                <li>Data provided by You by filling in forms on the Website.</li>
                <li>Data provided by corresponding with Us (for example, by e-mail or chat or call).</li>
                <li>Data and information, You provide when You register to use the Website, subscribe to any of our Services (such as applying for a loan), search for a Service, and when You report a problem with our App, our Services, or any of our sites.</li>
                <li>Data including Your name, address, gender, date of birth, e-mail address, phone number, username, password and other registration information.</li>
                <li>Identity Proof, Address Proof, PAN Card, proof of possession of Aadhaar Card (with Aadhaar number duly redacted or blocked out), financial information such as employer name, monthly salary, bank account no., bank statements, credit information, copies of identification documents.</li>
                <li>Data generated by Your usage of our Website.</li>
              </ol>

              <h3 className="mt-6 mb-3 text-base font-bold text-slate-900 uppercase tracking-wide">Information we collect about you and how we use that information</h3>
              <ul>
                <li><strong>With Your consent :</strong> Information /data from credit information companies and third party service providers to help HAUS Money & NUO-Pay with customer verification, underwriting and diligence required for HAUS Money & NUO-Pay and its partners.</li>
                <li><strong>Device type :</strong> With Your permission, we may collect and monitor the type of device (including storage, hardware model, operating system and version, WiFi, mobile network) You use, information pertaining to your device including the list of accounts on your device for the purposes of credit profile enrichment. The information we collect and its usage depends on how You manage Your privacy controls on Your device.</li>
                <li><strong>Device Information :</strong> When You install the App, we store the information we collect with unique identifiers tied to the device You are using. We collect information from the device when You download and install the Application and explicitly seek permissions from You to get the required information from the device. Additionally, we also collect metadata (via the domain server through which the User accesses the App, search queries, IP address, crashes, date & time) for the purpose of improvising the App functionality Further we expressly state that we do not access any phone call logs data. In addition to the above, we also track and collect the data related to the performance of the Application and other diagnostic data for identifying and resolving any technical glitches that may be identified from such data and also for improving the overall functionality of the App. We collect information about Your device to provide automatic updates and additional security so that Your account is not used in other peoples devices. In addition, the information provides us valuable feedback on Your identity as a device holder as well as Your device behaviour, thereby allowing us to improve Our products interaction, quality of services and provide a personalised user experience to You.</li>
                <li><strong>Installed Application Data :</strong> We collect and transmit a list of specific installed applications metadata information which includes the application name, package name, installed time, updated time, version name and version code of each installed application on Your device. This data may be collected even when the App is closed or not in use. We use this information for enriching Your credit profile with Your explicit consent.</li>
                <li><strong>SMS :</strong> With your permission, we may send SMS to verify your registered mobile number and collect and monitor only financial transactional/promotional messages sent by 6 - digit alphanumeric senders for the purpose of credit risk assessment. No other SMS data is accessed.</li>
                <li><strong>Camera & Microphone :</strong> With your permission, We may request camera access to a) capture your selfie for the purpose of identity verification and b) scan and capture the required KYC documents in accordance with applicable laws. We may also request microphone permissions to enable a two-way communication between our authorised agents and you for the purpose of performing and completing your Video KYC for the lending Services. Your audio shall be recorded for regulatory purposes. These accesses are only required for the purpose of on-boarding/ KYC (know your customer) requirements.</li>
                <li><strong>Location :</strong> With your permission, we may receive, collect and analyse your location information which may be accessed through a variety of methods including, inter alia, GPS, IP address, and cell tower location and, your precise location based on GPS data. In the event of IP detection failure, we will collect the last cached location as your current location. We may collect location information for validating your address and to increase the chances of your loan approval, even when the application is closed or not in use. These accesses are for the purpose of on-boarding/ KYC (know your customer) requirements.</li>
                <li><strong>Local storage :</strong> Browser web storage, application data caches of our own application in order to improve the performance of the application and render our services to you faster.</li>
                <li><strong>Cookies and similar technologies :</strong> Cookies are small data files that a Website stores on Your computer. We will use cookies on our Website similar to other lending websites / apps and online marketplace websites / apps. Use of this information helps Us identify You in order to make our Website more user friendly. Most browsers will permit You to decline cookies but if You choose to do this it might affect service on some parts of Our Website.</li>
                <li><strong>Record and/or monitor calls :</strong> If You call in for a query, HAUS Money & NUO-Pay might for the purposes of quality checks and ongoing staff training record Your call. Such recordings may also be used to help HAUS Money & NUO-Pay combat fraud.</li>
                <li><strong>Third-party advertisements :</strong> HAUS Money & NUO-Pay may use third-party advertising companies to serve ads when You visit Our Website/App. These companies may use information about Your usage preferences (but not Your name, address, email address, or telephone number) about Your visits to this and other websites in order to provide advertisements about goods and services of interest to You. HAUS Money & NUO-Pay is not responsible for product and services of such websites and is also not responsible for their privacy practices, which HAUS Money & NUO-Pay does not own, manage or control.</li>
              </ul>
              <p>We ask visitors to our site to use their social media logins (Facebook, Twitter, GMail) to provide customer reviews and feedback on our site.</p>
              <p>It is expressly stated that we are not accessing mobile phone resources like file and media, contact list, call logs, telephony functions, etc.</p>

              {/* Section 3 */}
              <h2 id="section-3" className="scroll-mt-32 mt-12 mb-4 flex items-center gap-3 text-2xl font-extrabold text-slate-900 border-l-4 border-[#0EA5E9] pl-4">3. PURPOSE OF INFORMATION COLLECTED BY HAUS Money &amp; NUO-Pay</h2>
              <p>Apart from section 2 where we describe the information we collect and how we use the information we collect, we may also use the information we collect for the following purposes :</p>
              <ul>
                <li>To provide products or services You have requested.</li>
                <li>To provide information to Our partners to assist in making credit decisions about You.</li>
                <li>To help investigate violations of Our Terms of Use or to defend against legal claims.</li>
                <li>To disclose the information under special circumstances such as compliance with the applicable local law, court summons, court orders, requests/order from legal authorities or law enforcement agencies requiring such disclosure.</li>
                <li>Search credit bureaus, generate credit reports and fraud prevention agencies.</li>
                <li>To get in touch with You when necessary and contact You by email, SMS, letter, telephone or in any other way about Our products and services.</li>
                <li>To identify, prevent, detect or tackle fraud, money laundering, terrorism and other crimes.</li>
                <li>To form a view of Your credit worthiness, as per HAUS Money & NUO-Pay policies and to identify, develop or improve products that may be of interest to You.</li>
                <li>Provide information to independent external bodies such as governmental departments and agencies, universities and similar to carry out research.</li>
                <li>Perform other administrative and operational actions including the testing of systems.</li>
                <li>Trace Your whereabouts for the purpose of on-boarding / KYC (know your customer) requirements.</li>
                <li>Recover any payments You owe to HAUS Money & NUO-Pay or partners.</li>
                <li>To show You advertisements.</li>
                <li>Contact You as a survey respondent.</li>
                <li>To maintain records under applicable law or a may apply to pursuant to agreements executed by HAUS Money & NUO-Pay.</li>
                <li>Carry out, monitor and analyse our business, Carry out market research, business, and statistical analysis and also direct our efforts for product improvement.</li>
                <li>Carry out process review and audits under regulatory framework.</li>
                <li>Details required for administration or services and product improvement.</li>
                <li>Record and/or monitor calls if HAUS Money & NUO-Pay feel necessary for quality checks and staff training. Such recordings may also be used to help HAUS Money & NUO-Pay combat fraud.</li>
                <li>Location information – for validating your address and to increase the chances of your loan approval. These accesses are for the purpose of on-boarding/ KYC (know your customer) requirements.</li>
                <li>Information about Apps and Accounts – for credit profile enrichment.</li>
              </ul>

              {/* Section 4 */}
              <h2 id="section-4" className="scroll-mt-32 mt-12 mb-4 flex items-center gap-3 text-2xl font-extrabold text-slate-900 border-l-4 border-[#0EA5E9] pl-4">4. DATA RETENTION AND DELETION</h2>
              <p>
                <strong>Retention of information collected:</strong> The information collected from You will be retained during the (i) validity of Your Account and for the purpose of submission of such information, (ii) As consented by You while creating Your User Account (iii) As required by any regulatory norms including but not limited to the norms prescribed under Prevention of Money Laundering Act, 2002, as per Directions/Circulars/Notifications of RBI, and Reserve Bank of India (Digital Lending) Directions, 2025 prescribed by the RBI, as amended from time to time/any statutory modification thereto, or re-enactment thereof.
              </p>
              <p>
                We at HAUS Money & NUO-Pay, promise to protect Your personal data from unauthorised access, misuse, and disclosure using the right security measures based on the type of data and how we are processing the same. We retain information about You to provide a seamless experience, to contact You in case of support required and about Your account, to detect, mitigate, prevent, and investigate fraudulent or illegal activities during the course of the Services. We retain Your data for as long as necessary based on statutory requirements and to provide You with Our services. We may also retain and use Your basic personal information inter alia as name, contact number, transactional details and address details as necessary to comply with our legal obligations, resolve disputes, send You notifications about dues or past dues that You owe to HAUS Money & NUO-Pay and enforce Our agreements which shall always be in accordance with applicable laws.
              </p>
              <p>
                HAUS Money & NUO-Pay's Data retention and archival policy applies to all business applications that store, process, or maintain customer and transactional information. Key principles of the policy include data classification based on sensitivity, specified retention periods, and secure archival procedures. The policy also includes procedures for data return and deletion upon termination of services, ensuring secure and irreversible removal in alignment with HAUS Money & NUO-Pay's Standard Operating Procedure for Data Purge. Access to archived data is restricted, and disposal methods shall comply with applicable laws.
              </p>
              <p>
                Data retention periods are based purely on legal, regulatory, and business requirements, with specific durations listed in the policy. System/Application Audit Trails and Audit Logs shall be maintained for at least 8 years or as prescribed by the Reserve Bank of India.
              </p>

              {/* Section 5 */}
              <h2 id="section-5" className="scroll-mt-32 mt-12 mb-4 flex items-center gap-3 text-2xl font-extrabold text-slate-900 border-l-4 border-[#0EA5E9] pl-4">5. PROCEDURE FOR DATA DESTRUCTION AND REMOVAL OF USER DETAILS FROM THE RECORD</h2>
              <p>
                User desirous of having his/her name and other details removed from the records of HAUS Money & NUO-Pay, on receiving the User's request in the HAUS Money & NUO-Pay app, HAUS Money & NUO-Pay shall, subject to the terms mentioned in section 4 and extant acts, rules, regulations, supervisory body/ies guidelines, directions, circulars, notification, as amended from time to time/any statutory modification thereto, or re-enactment thereof, modify, remove and/delete such information. Once the requested action has been taken, HAUS Money & NUO-Pay will inform You via email or call, as per the user's preference. However, You may not be able to use our services after deletion.
              </p>
              <p>
                You can also login to Our mobile application or website and provide such requests in order to modify/delete data.
              </p>
              <p>
                All such requests of deletion of personal data shall be processed through the internal process of HAUS Money & NUO-Pay's Standard Operating Procedure for Data Purge ( 30 - 90 days subject to internal compliance checks and validation as per data deletion process of HAUS Money & NUO-Pay)
              </p>

              {/* Section 6 */}
              <h2 id="section-6" className="scroll-mt-32 mt-12 mb-4 flex items-center gap-3 text-2xl font-extrabold text-slate-900 border-l-4 border-[#0EA5E9] pl-4">6. SPECIFIC CONSENT</h2>
              <p>
                You consent and grant Us authority to share Your information with third parties to a.) provide the product or service You have requested; b.) to enable them to contact You or to certain service partners in order to respond to Your queries / comments or to resolve service issues and to serve You better and c.) to collect information about You as mentioned in section 2 of this Privacy Policy and use the same for those purposes mentioned in sections 2 & 3 of this Privacy Policy.
              </p>
              <p>
                By using the Website/Services You authorise Us, Our affiliates & Our associate partners to contact You via email or phone call or sms and offer You their services/ product, imparting product knowledge, offer promotional offers running on their websites & offers offered by the associated third parties. Irrespective of the fact if You have also registered Yourself under DND or DNC or NCPR service, You still authorise Us to give You a call from HAUS Money & NUO-Pay & its associates/partners for the above-mentioned purposes.
              </p>
              <p>
                By providing information, You agree, or promise that the owner of such information has expressly agreed to allow or licence, as the case may be, Us to use the information in the manner set out in this Privacy Policy, without the payment of any fees, to the extent permitted by law, also use, licence, reproduce, distribute disclose, and aggregate, non-personally identifiable information that is derived through Your use of the App and You hereby provide consent for the same.
              </p>
              <p>
                You can revoke consent already granted to collect personal data at any point in time on Your device by using the privacy controls available to You. Please note however that this might impact our ability to render Our services to You.
              </p>

              {/* Section 7 */}
              <h2 id="section-7" className="scroll-mt-32 mt-12 mb-4 flex items-center gap-3 text-2xl font-extrabold text-slate-900 border-l-4 border-[#0EA5E9] pl-4">7. SHARING OF INFORMATION</h2>
              <p>
                HAUS Money & NUO-Pay shall not will not rent, sell or share User information and will not disclose any of the User’s personally identifiable information to third parties (apart from the third parties whose details are mentioned in the links provided herein. Click here and here for a full list), except when the disclosure is:
              </p>
              <ul>
                <li>pursuant to obtaining the Users permission</li>
                <li>in connection with disclosure to financial institutions and banks</li>
                <li>in connection with the Services being rendered through the App</li>
                <li>help investigate, prevent or take action regarding unlawful and illegal activities</li>
                <li>special circumstances such as compliance with court orders.</li>
                <li>to enforce Your contractual obligations to us.</li>
              </ul>

              {/* Section 8 */}
              <h2 id="section-8" className="scroll-mt-32 mt-12 mb-4 flex items-center gap-3 text-2xl font-extrabold text-slate-900 border-l-4 border-[#0EA5E9] pl-4">8. STANDARDS FOR HANDLING DATA BREACHES</h2>
              <p>
                HAUS Money & NUO-Pay intends to protect your information and to maintain its accuracy as confirmed by you. We implement reasonable physical, administrative and technical safeguards to help us protect your information from unauthorised access, use and disclosure. For example, we encrypt all information when we transmit over the internet. We also require that our registered third-party service providers protect such information from unauthorised access, use and disclosure.
              </p>
              <p>
                HAUS Money & NUO-Pay has stringent security measures in place to protect the loss, misuse and alteration of information under control. We endeavour to safeguard and ensure the security of the information provided by you. We use Secure Sockets Layers (SSL) based encryption, for the transmission of the information, which is currently the required level of encryption in India as per applicable law.
              </p>
              <p>We aim to protect from unauthorised access, alteration, disclosure or destruction of information we hold, including :</p>
              <ul>
                <li>We use encryption to keep Your data private while in transit;</li>
                <li>We offer security feature like an OTP verification to help You protect Your account;</li>
                <li>We regularly review our information collection, storage, and processing practices, including physical security measures, to prevent unauthorised access to Our systems;</li>
                <li>We restrict access to personal information to our employees, contractors, and agents who need that information in order to process it. Anyone with this access is subject to strict contractual confidentiality obligations and may be disciplined or terminated if they fail to meet these obligations;</li>
                <li>Compliance & Cooperation with Regulations and applicable laws;</li>
                <li>We regularly review this Privacy Policy and make sure that we process Your information in ways that comply with it.</li>
              </ul>
              <p>
                However, we do not warrant that such User information may not be misused in the event our safeguards and protocols are breached by a malicious third-party. Your use of the App is at your sole risk and discretion. You shall be the custodian of your password and comply with the applicable terms mentioned in the Website/Application in this regard., We are not liable to actions of other users with whom you may choose to share your information. The collection, usage, and sharing of User information are in compliance with the Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011 and other applicable laws.
              </p>
              <p>
                While HAUS Money & NUO-Pay invests in best in class Data Safety and Security Standards, in the improbable event of a data breach; HAUS Money & NUO-Pay will activate its Incident Management protocol to mitigate and safeguard our user’s data. Furthermore, HAUS Money & NUO-Pay shall inform and update its users as prescribed by the prevalent guidelines at the time.
              </p>

              {/* Section 9 */}
              <h2 id="section-9" className="scroll-mt-32 mt-12 mb-4 flex items-center gap-3 text-2xl font-extrabold text-slate-900 border-l-4 border-[#0EA5E9] pl-4">9. PROCEDURE FOR CORRECTING INACCURACIES IN YOUR INFORMATION</h2>
              <p>
                In the event that any Personal Information provided by You is inaccurate, incomplete or outdated then You shall have the right to provide Us with the accurate, complete and up to date data and have Us rectify such data at Our end immediately. We urge You to ensure that You always provide Us with accurate and correct information/data to ensure Your use of Our Services is uninterrupted. In case of modification of Personal Information, Users will be required to furnish supporting documents relating to change in Personal Information for the purpose of verification by HAUS Money & NUO-Pay.
              </p>

              {/* Section 10 */}
              <h2 id="section-10" className="scroll-mt-32 mt-12 mb-4 flex items-center gap-3 text-2xl font-extrabold text-slate-900 border-l-4 border-[#0EA5E9] pl-4">10. CHANGES IN PRIVACY POLICY</h2>
              <p>
                Our Privacy Policy might change from time to time, and HAUS Money & NUO-Pay will provide notice of it on your email address linked to your Account or can be seen by you in our Website.
              </p>

              {/* Section 11 */}
              <h2 id="section-11" className="scroll-mt-32 mt-12 mb-4 flex items-center gap-3 text-2xl font-extrabold text-slate-900 border-l-4 border-[#0EA5E9] pl-4">11. INCORPORATION OF PRIVACY POLICY TO THE TERMS OF USE</h2>
              <p>
                This Privacy Policy is incorporated to the Terms of use (Terms) and other specific terms of this Website/Services/Account.
              </p>

              {/* Section 12 */}
              <h2 id="section-12" className="scroll-mt-32 mt-12 mb-4 flex items-center gap-3 text-2xl font-extrabold text-slate-900 border-l-4 border-[#0EA5E9] pl-4">12. GRIEVANCE REDRESSAL</h2>
              <p>
                In the event that Your complaint is not resolved within 30 days of its submission, You have the right to lodge a complaint on the Complaint Management System (CMS) portal under the Reserve Bank-Integrated Ombudsman Scheme (RB-IOS). The full escalation matrix for grievance redressal will be clearly communicated on Our Website.
              </p>

              {/* Section 13 */}
              <h2 id="section-13" className="scroll-mt-32 mt-12 mb-4 flex items-center gap-3 text-2xl font-extrabold text-slate-900 border-l-4 border-[#0EA5E9] pl-4">13. REPORTING TO CREDIT INFORMATION COMPANIES (CICS)</h2>
              <p>
                In accordance with the regulations set forth by the Reserve Bank of India (RBI), We are committed to promoting responsible lending and financial transparency.
              </p>
              <p>
                To this end, all credit facilities availed through Our Websites/App, irrespective of their nature, amount, or tenor (duration), will be reported to all four licensed Credit Information Companies (CICs) in India: TransUnion CIBIL Limited, Experian Credit Information Company of India Private Limited, CRIF High Mark Credit Information Services Private Limited and Equifax.
              </p>
              <p>
                This reporting includes, but is not limited to, the timely repayment of dues, as well as any defaults or delays in payment. Your loan performance data becomes part of Your credit history, which can impact Your ability to avail of future credit facilities from any lender.
              </p>

              {/* Section 14 */}
              <h2 id="section-14" className="scroll-mt-32 mt-12 mb-4 flex items-center gap-3 text-2xl font-extrabold text-slate-900 border-l-4 border-[#0EA5E9] pl-4">14. WEBSITE DISCLOSURES</h2>
              <ul>
                <li>All digital lending products and its Digital Lending Applications - <a href="https://www.HAUS NUO-Paypl.com/" target="_blank" rel="noreferrer" className="text-[#0EA5E9] hover:underline">https://www.HAUS NUO-Paypl.com/</a></li>
                <li>Lending Service Providers (LSPs) and details of the Digital Lendings Applications of LSPs - <a href="https://www.HAUS NUO-Paypl.com/partnership/" target="_blank" rel="noreferrer" className="text-[#0EA5E9] hover:underline">https://www.HAUS NUO-Paypl.com/partnership/</a></li>
                <li>Customer care particulars and internal grievance redressal mechanism - <a href="https://www.HAUS NUO-Paypl.com/contact-us/" target="_blank" rel="noreferrer" className="text-[#0EA5E9] hover:underline">https://www.HAUS NUO-Paypl.com/contact-us/</a> or <a href="https://www.HAUS NUO-Paypl.com/ombudsman/" target="_blank" rel="noreferrer" className="text-[#0EA5E9] hover:underline">https://www.HAUS NUO-Paypl.com/ombudsman/</a></li>
                <li>Link to RBI's Complaint Management System (CMS) - <a href="https://cms.rbi.org.in/cms/indexpage.html#eng" target="_blank" rel="noreferrer" className="text-[#0EA5E9] hover:underline">https://cms.rbi.org.in/cms/indexpage.html#eng</a></li>
                <li>RBI's Sachet Portal for consumer protection - <a href="https://sachet.rbi.org.in/" target="_blank" rel="noreferrer" className="text-[#0EA5E9] hover:underline">https://sachet.rbi.org.in/</a></li>
              </ul>

              {/* Section 15 */}
              <h2 id="section-15" className="scroll-mt-32 mt-12 mb-4 flex items-center gap-3 text-2xl font-extrabold text-slate-900 border-l-4 border-[#0EA5E9] pl-4">15. LIST OF THIRD PARTIES</h2>
              <p className="font-semibold mb-2">Third party service providers:</p>
              <ul>
                <li>Equifax Credit Information Services Private Limited</li>
                <li>TransUnion CIBIL Limited</li>
                <li>Software Solutions Private Limited</li>
                <li>Digitap.AI Enterprise Solutions Private Limited</li>
                <li>Razorpay Software Private Limited</li>
                <li>Baldor Technologies Private Limited</li>
                <li>Delhivery Limited</li>
                <li>Truecaller India Private Limited</li>
                <li>NuoG Softech Limited</li>
              </ul>

            </div>
          </div>

        </div>


      </div>
    </div>
  );
};

export default PrivacyPolicyPage;

