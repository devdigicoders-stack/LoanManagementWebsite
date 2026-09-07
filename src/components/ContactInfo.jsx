import React, { useState } from 'react';
import { Phone, Mail, MapPin, Building, Clock, Briefcase, HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';

const ContactInfo = () => {
  const [openBranchIdx, setOpenBranchIdx] = useState(null);

  const branches = [
    { city: "Ahmedabad", address: "ABC -3, Unit No. 302, Opp. Hotel Regenta, Nr. Girish Cold Drinks, Uma Shankar Joshi Marg, Off CG Road, Navrangpura, Ahmedabad-380009, Gujarat." },
    { city: "Bengaluru", address: "G V Towers, First Floor, No. 68 - 72, 1st Floor, Kodigehalli Main Road, Sahakarnagar, Bengaluru-560092, Karnataka." },
    { city: "Bhubaneswar", address: "1st Floor, Block-A, MIG-140, Ruchika Market, Baramunda, Bhubaneswar-751003, Orissa." },
    { city: "Chennai", address: "402, Prakash Presidium, 2nd Floor, A1, 11O Mahatma Gandhi Road, Nungambakkam, Chennai–600034, Tamil Nadu." },
    { city: "Dehradun", address: "3rd floor, Unit No: 311, Mussoorie Development Dehradun Authority (MDDA) Complex, Clock Tower, Rajpur Road, Dehradun-248001, Uttarakhand." },
    { city: "Delhi NCR", address: "2nd Floor, Plot No-A260/1, Road No-7, Overseas Logistics, Block RZ, Mahipalpur Village, Mahipalpur, New Delhi-110037, Delhi NCR." },
    { city: "Gurugram", address: "Unit 208, 2nd Floor, ABW Tower, IFFCO Chowk, Gurugram-122001, Haryana." },
    { city: "Guwahati", address: "1st Floor, Room No, H M Market, 5 TR Phookan Road, Sree Nagar, Guwahati-781005, Assam." },
    { city: "Hyderabad", address: "1st Floor, Aditya Trade Center, 103, Satyam Theatre Rd, opp. Aster Prime Hospital, Kumar Basti, Srinivasa Nagar, Ameerpet, Hyderabad- 500009, Telangana." },
    { city: "Indore", address: "402, Khandelwal Business Center. 9/1/1 M G Road, Indore-452001, Madhya Pradesh." },
    { city: "Jaipur", address: "3rd Floor,Plot, Main Upasana Plaza Unit No, 301-304, Sardar Patel Marg, C Scheme, Ashok Nagar, Jaipur-302001, Rajasthan." },
    { city: "Kolkata", address: "7th Floor, Astra Tower, Rajarhat Main Road, AA-II, Rajarhat Gopalpur, North 24 Parganas-700136, West Bengal." },
    { city: "Lucknow", address: "Unit no 607, 6th Floor, Urbanac Business Park, Vijaipur Colony, Vibhuti Khand, Gomti Nagar, Lucknow-226010, Uttar Pradesh." },
    { city: "Navi Mumbai", address: "Munoth Empress, Office No 306, 3rd Floor, F.P. 189, Opposite Panvel Depot, Behind Dr Babasaheb Ambedkar Statue, Panvel, Raigad–410206, Maharashtra." },
    { city: "Patna", address: "3rd Floor, Commercial Building, 3031, 1495A/21/229, Main Road, Near FAB INDIA, Sri Krishna Puri, Patna-800001, Bihar." },
    { city: "Ranchi", address: "4th Floor, Eastern Mall, Circular Road, Dangratoli Chowk, Lalpur, Ranchi-834001, Jharkhand." },
    { city: "Raipur", address: "Golden Trade Centre, Sector 2, Priyadarshini Nagar Colony, New Rajendra Nagar, Raipur, Tikrapara-492001, Chhattisgarh." },
    { city: "Vijayawada", address: "4th Floor, B Block, M&M Mall, D. No 40-139/5, MG Rd, Chandra Mouli Puram, Sriram Nagar, Vijayawada-520010, Andhra Pradesh." }
 ];

  const toggleBranch = (idx) => {
    setOpenBranchIdx(openBranchIdx === idx ? null : idx);
  };

  return (
    <section className="w-full bg-[#fcfcfc] py-20 px-6 md:px-10 border-b border-gray-100">
      <div className="w-full px-6 lg:px-12 xl:px-16 mx-auto space-y-16">

        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-[#E0F2FE] text-[#0369A1] rounded-full px-4 py-1 text-sm font-bold tracking-wider mb-4 uppercase">
            Get In Touch
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Contact <span className="text-[#0EA5E9]">HAUS NUO-Pay</span>
          </h2>
          <p className="text-gray-600 text-[16px] leading-relaxed max-w-2xl mx-auto">
            Our customer support team is available to assist with general enquiries, service-related questions and information about our platform.
          </p>
        </div>

        {/* Queries Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Customer Query */}
          <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-[#F8FAFC] border border-[#E0F2FE] text-[#0EA5E9] rounded-2xl flex items-center justify-center mb-6">
              <HelpCircle size={28} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">For Customer Query</h3>
            <p className="text-gray-800 font-bold text-[15px] mb-4">HAUS NUO-Pay</p>
            <p className="text-[#0EA5E9] font-bold text-lg mb-2">
              <a href="tel:+919755766018">+91 9755 766 018</a>
            </p>
            <p className="text-gray-500 text-[14px] mb-4">
              <a href="mailto:customercare@hausnuo.com" className="hover:text-[#0EA5E9]">customercare@hausnuo.com</a>
            </p>
            <div className="bg-[#f8fcf5] px-4 py-3 rounded-xl border border-[#eaf7e3] w-full">
              <p className="text-[13px] text-gray-600 font-semibold">Mon - Sat: 10:00 AM to 07:30 PM</p>
              <p className="text-[12px] text-gray-500">(Except Sunday & National Holidays)</p>
            </div>
          </div>

          {/* Investor Query */}
          <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-[#F8FAFC] border border-[#E0F2FE] text-[#0EA5E9] rounded-2xl flex items-center justify-center mb-6">
              <Briefcase size={28} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">For Investor Query</h3>
            <p className="text-gray-800 font-bold text-[15px] mb-1">HAUS NUO-Pay</p>
            <p className="text-gray-600 text-[13px] mb-4">Authorized Person/Nodal Officer Under SEBI: <strong>Mrs. Sonal Singh</strong></p>
            
            <p className="text-[#0EA5E9] font-bold text-lg mb-2">
              <a href="tel:+919942402055">+91 9942 402 055</a>
            </p>
            <p className="text-gray-500 text-[14px] mb-4">
              <a href="mailto:nuo.secretarial@hausnuo.com" className="hover:text-[#0EA5E9]">nuo.secretarial@hausnuo.com</a>
            </p>
          </div>
        </div>

        {/* Head Offices */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Registered Office */}
          <div className="bg-[#FDFBF7] text-slate-900 p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <Building size={120} />
            </div>
            <div className="relative z-10">
              <div className="w-12 h-12 bg-[#0EA5E9]/20 border border-[#0EA5E9]/30 text-[#0EA5E9] rounded-xl flex items-center justify-center mb-6">
                <MapPin size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Registered Office</h3>
              <p className="text-[#0EA5E9] font-semibold text-[13px] mb-4 uppercase tracking-wider">(Hyderabad, Telangana)</p>
              
              <p className="font-bold text-[15px] mb-2">NuoG Housing Payment’s Limited</p>
              <p className="text-slate-600 text-[14px] leading-relaxed mb-6">
                Srinivas Nagar, Kapra, Dr. AS Rao Nagar,<br />
                Medchal-Malkajgiri, Secunderabad,<br />
                Hyderabad - 62, TG, India
              </p>

              <div className="space-y-2">
                <p className="text-slate-700 text-sm"><span className="text-gray-500">M:</span> +91 9755 766 018</p>
                <p className="text-slate-700 text-sm"><span className="text-gray-500">E:</span> haustouch@hausnuo.com</p>
              </div>
            </div>
          </div>

          {/* Operationally Headquarter Office */}
          <div className="bg-[#f0fbf0] border border-[#d3ecd3] p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-5">
              <Building size={120} />
            </div>
            <div className="relative z-10">
              <div className="w-12 h-12 bg-white border border-[#0EA5E9]/30 text-[#0EA5E9] rounded-xl flex items-center justify-center mb-6">
                <MapPin size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Operationally Headquarter Office</h3>
              <p className="text-[#0EA5E9] font-semibold text-[13px] mb-4 uppercase tracking-wider">(Bangaluru, Karnataka)</p>
              
              <p className="font-bold text-gray-800 text-[15px] mb-2">NuoG Housing Payment’s Limited</p>
              <p className="text-gray-600 text-[14px] leading-relaxed mb-6">
                2nd Floor, Main Road, South End, Ragigudda Circle,<br />
                Jayanagara, 4th Block, Jayanagar,<br />
                Bangaluru - 42, KR, India
              </p>

              <div className="space-y-2">
                <p className="text-gray-700 text-sm"><span className="text-slate-600">M:</span> +91 9755 766 018</p>
                <p className="text-gray-700 text-sm"><span className="text-slate-600">E:</span> haustouch@hausnuo.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Working Timings */}
        <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm text-center">
          <div className="w-16 h-16 bg-[#F8FAFC] border border-[#E0F2FE] text-[#0EA5E9] rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Clock size={28} />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">HAUS NUO-Pay -- Officially Working Timings</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 max-w-4xl mx-auto">
            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
              <h4 className="font-bold text-gray-900 mb-2">Registered & Head Office</h4>
              <p className="text-[#0EA5E9] font-semibold mb-1">Mon - Sat: 10:30 AM to 08:00 PM</p>
              <p className="text-gray-500 text-[13px]">(Except Sunday & National Holidays)</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
              <h4 className="font-bold text-gray-900 mb-2">Branch Office</h4>
              <p className="text-[#0EA5E9] font-semibold mb-1">Mon - Sat: 10:00 AM to 06:30 PM</p>
              <p className="text-gray-500 text-[13px]">(Except Sunday & National Holidays)</p>
            </div>
          </div>
        </div>

        {/* Branches */}
        <div>
          <div className="text-center mb-10">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Our <span className="text-[#0EA5E9]">Branches</span></h3>
            <div className="w-16 h-1 bg-[#0EA5E9] mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
            {branches.map((branch, idx) => (
              <div 
                key={idx} 
                onClick={() => toggleBranch(idx)}
                className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all cursor-pointer overflow-hidden"
              >
                <div className="p-6 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <MapPin size={20} className="text-[#0EA5E9]" />
                    <h4 className={`font-bold text-lg transition-colors ${openBranchIdx === idx ? 'text-[#0EA5E9]' : 'text-gray-900'}`}>{branch.city}</h4>
                  </div>
                  <div className="text-slate-600">
                    {openBranchIdx === idx ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                  </div>
                </div>
                {openBranchIdx === idx && (
                  <div className="px-6 pb-6 pt-2 border-t border-gray-50 bg-gray-50">
                    <p className="text-gray-600 text-[14px] leading-relaxed">
                      {branch.address}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default ContactInfo;


