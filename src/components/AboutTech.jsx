import React from 'react';
import { Smartphone, MonitorPlay, Zap, ArrowRight } from 'lucide-react';

const AboutTech = () => {
  return (
    <section className="w-full bg-[#f4fdf5] pt-20 pb-4 px-6 md:px-10 relative overflow-hidden">
      
      {/* Decorative shapes */}
      <div className="absolute top-10 left-10 w-20 h-20 border-4 border-[#5bc116] rounded-full opacity-20 hidden md:block"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 border-4 border-[#5bc116] rounded-full opacity-20 hidden md:block"></div>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        
        {/* Left Content */}
        <div className="w-full lg:w-1/2">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Technology That Makes <span className="text-[#5bc116]">Finance Simpler</span>
          </h2>
          <p className="text-gray-600 text-[16px] leading-relaxed mb-6">
            Technology is at the heart of our digital experience. Our platform is designed to make financial information accessible through modern web and mobile experiences, helping customers explore available services without unnecessary complexity.
          </p>
          <p className="text-gray-600 text-[16px] leading-relaxed mb-10">
            From digital enquiries to application updates and customer communication, we continuously work toward creating a smoother and more convenient experience.
          </p>
          
          <div className="bg-white border border-[#e8fbe9] shadow-sm rounded-2xl p-6 mb-8 inline-block">
            <h4 className="text-gray-900 font-bold mb-4 uppercase tracking-wider text-[12px]">Digital First. Customer Focused.</h4>
            <div className="flex flex-wrap items-center gap-2 text-[#5bc116] font-semibold text-[14px]">
              <span>Simple Interface</span>
              <ArrowRight size={16} />
              <span>Easy Access</span>
              <ArrowRight size={16} />
              <span>Clear Information</span>
              <ArrowRight size={16} />
              <span>Better Experience</span>
            </div>
          </div>
        </div>

        {/* Right Content - Visual Representation */}
        <div className="w-full lg:w-1/2">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
            
            <div className="bg-white p-8 rounded-3xl shadow-xl shadow-green-900/5 border border-gray-100 flex flex-col items-center text-center transform md:translate-y-8">
              <div className="w-16 h-16 bg-[#0b0f0e] rounded-2xl flex items-center justify-center text-[#5bc116] mb-6">
                <Smartphone size={32} />
              </div>
              <h4 className="text-gray-900 font-bold text-lg mb-3">Mobile Ready</h4>
              <p className="text-gray-500 text-[14px] leading-relaxed">
                Access information and track updates directly from your smartphone, anywhere, anytime.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-xl shadow-green-900/5 border border-gray-100 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-[#0b0f0e] rounded-2xl flex items-center justify-center text-[#5bc116] mb-6">
                <MonitorPlay size={32} />
              </div>
              <h4 className="text-gray-900 font-bold text-lg mb-3">Web Experience</h4>
              <p className="text-gray-500 text-[14px] leading-relaxed">
                A seamless and intuitive web platform built for faster loading and easy navigation.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-xl shadow-green-900/5 border border-gray-100 flex flex-col items-center text-center transform md:-translate-y-8 md:col-span-2 md:mx-16">
              <div className="w-16 h-16 bg-[#0b0f0e] rounded-2xl flex items-center justify-center text-[#5bc116] mb-6">
                <Zap size={32} />
              </div>
              <h4 className="text-gray-900 font-bold text-lg mb-3">Faster Enquiries</h4>
              <p className="text-gray-500 text-[14px] leading-relaxed">
                Digital processes that reduce waiting times and provide quick preliminary information.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutTech;
