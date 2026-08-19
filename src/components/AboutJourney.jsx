import React from 'react';
import { MapPin, Route, Mountain } from 'lucide-react';

const AboutJourney = () => {
  return (
    <section className="w-full bg-[#fcfcfc] py-20 px-6 md:px-10 border-t border-b border-gray-100">
      <div className="max-w-4xl mx-auto">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Journey
          </h2>
          <div className="w-20 h-1 bg-[#5bc116] mx-auto rounded-full"></div>
        </div>

        <div className="space-y-12">
          
          {/* Today */}
          <div className="flex flex-col md:flex-row gap-6 md:gap-10">
            <div className="flex flex-col items-center shrink-0">
              <div className="w-16 h-16 bg-[#0b0f0e] rounded-full flex items-center justify-center text-[#5bc116] shadow-lg">
                <MapPin size={28} />
              </div>
              <div className="w-1 h-full bg-gradient-to-b from-[#0b0f0e] to-transparent mt-4 hidden md:block opacity-20"></div>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm flex-1">
              <h3 className="text-[#5bc116] font-bold text-[13px] uppercase tracking-wider mb-2">Today</h3>
              <h4 className="text-xl font-bold text-gray-900 mb-4">Where We Are Today</h4>
              <p className="text-gray-500 text-[15px] leading-relaxed">
                We are building a digital platform focused on simplifying property-related financial information and connecting customers with suitable financial solutions.
              </p>
            </div>
          </div>

          {/* Tomorrow */}
          <div className="flex flex-col md:flex-row gap-6 md:gap-10">
            <div className="flex flex-col items-center shrink-0">
              <div className="w-16 h-16 bg-white border border-gray-200 rounded-full flex items-center justify-center text-gray-400 shadow-sm">
                <Route size={28} />
              </div>
              <div className="w-1 h-full bg-gradient-to-b from-gray-200 to-transparent mt-4 hidden md:block opacity-50"></div>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm flex-1">
              <h3 className="text-gray-400 font-bold text-[13px] uppercase tracking-wider mb-2">Tomorrow</h3>
              <h4 className="text-xl font-bold text-gray-900 mb-4">Where We Are Going</h4>
              <p className="text-gray-500 text-[15px] leading-relaxed">
                Our goal is to continuously improve our technology, services and customer experience while expanding access to reliable and understandable property-finance information.
              </p>
            </div>
          </div>

          {/* Vision */}
          <div className="flex flex-col md:flex-row gap-6 md:gap-10">
            <div className="flex flex-col items-center shrink-0">
              <div className="w-16 h-16 bg-[#f4fdf5] border border-[#e8fbe9] rounded-full flex items-center justify-center text-[#5bc116] shadow-sm">
                <Mountain size={28} />
              </div>
            </div>
            <div className="bg-[#f0fbf0] p-8 rounded-2xl border border-[#d3ecd3] shadow-sm flex-1">
              <h3 className="text-[#5bc116] font-bold text-[13px] uppercase tracking-wider mb-2">Our Vision</h3>
              <h4 className="text-xl font-bold text-[#0b0f0e] mb-2">A Trusted Property Finance Ecosystem</h4>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default AboutJourney;
