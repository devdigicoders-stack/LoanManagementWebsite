import React from 'react';
import { ArrowRight, ShieldCheck, Cpu, UserCheck } from 'lucide-react';

const AboutUs = () => {
  return (
    <section className="w-full bg-white pt-48 pb-24 px-6 md:px-10">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-16">

        {/* Left Content */}
        <div className="lg:w-1/2 flex flex-col items-start text-left">
          <div className="inline-block bg-[#f0fbf0] text-[#5bc116] rounded-full px-4 py-1.5 text-xs font-bold tracking-wider mb-6">
            ABOUT US
          </div>

          <h2 className="text-4xl md:text-[44px] font-bold leading-[1.2] mb-6 text-black">
            Financial Solutions <br />
            for Your <span className="text-[#5bc116]">Property Goals</span>
          </h2>

          <p className="text-gray-500 text-[15px] md:text-base mb-4 leading-relaxed max-w-[480px]">
            Whether you are planning to purchase a property, construct your dream home, renovate an existing property, or need funds against your property, understanding the right financial solution is the first step.
          </p>

          <p className="text-gray-500 text-[15px] md:text-base mb-10 leading-relaxed max-w-[480px]">
            At NGM Housing Payment's Limited, we help you explore property-focused financial solutions and understand important aspects such as eligibility, documentation, repayment, interest, tenure, and applicable charges.
          </p>

          <button className="flex items-center justify-center gap-2 bg-[#7ce225] hover:bg-[#68c61e] text-white font-semibold py-3 px-6 rounded-md shadow-md transition-all duration-300">
            Know More About Us <ArrowRight size={18} />
          </button>
        </div>

        {/* Right Content - Image and Floating Feature Card */}
        <div className="lg:w-1/2 relative w-full mt-12 lg:mt-0 lg:ml-8">
          <img
            src="/aboutus/image.jpg"
            alt="Modern Skyscrapers"
            className="w-full rounded-3xl shadow-xl object-cover h-[400px] md:h-[500px]"
          />

          {/* Floating features card */}
          <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 bg-white rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.08)] py-5 px-5 md:px-8 flex flex-col sm:flex-row justify-center sm:justify-between items-center gap-4 md:gap-6 border border-gray-100 w-[95%] md:w-max max-w-[95%]">

            <div className="flex items-center gap-3">
              <div className="bg-[#f0fbf0] p-2.5 rounded-full text-[#5bc116] shrink-0">
                <ShieldCheck size={24} strokeWidth={2} />
              </div>
              <p className="font-bold text-[13px] text-black leading-tight whitespace-nowrap">Licensed & <br />Regulated</p>
            </div>

            <div className="flex items-center gap-3">
              <div className="bg-[#f0fbf0] p-2.5 rounded-full text-[#5bc116] shrink-0">
                <Cpu size={24} strokeWidth={2} />
              </div>
              <p className="font-bold text-[13px] text-black leading-tight whitespace-nowrap">Advanced <br />Technology</p>
            </div>

            <div className="flex items-center gap-3">
              <div className="bg-[#f0fbf0] p-2.5 rounded-full text-[#5bc116] shrink-0">
                <UserCheck size={24} strokeWidth={2} />
              </div>
              <p className="font-bold text-[13px] text-black leading-tight whitespace-nowrap">Customer <br />First Approach</p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
