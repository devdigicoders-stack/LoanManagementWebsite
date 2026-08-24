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
          <div className="w-20 h-1 bg-[#0EA5E9] mx-auto rounded-full"></div>
        </div>

        <div className="relative">
          {/* Central Line for Desktop */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 -translate-x-1/2"></div>

          <div className="space-y-12">
            {[
              { year: "2014", title: "Beginning of Organizational Legacy", desc: "" },
              { year: "2018", title: "Achieved a Milestone of Rs. 0.15 Mn Loan Book", desc: "" },
              { year: "2022", title: "Continuing the Journey", desc: "Venture Into Secured, Unsecured & Vehicles Loan" },
              { year: "2024", title: "NuoG’s Group", desc: "Merger of AFPL & NGCPL with NuoG’s In Oct’ 2024" },
              { year: "2026", title: "17+ Branches and Crossed 45 Mn Loan Book", desc: "" }
            ].map((item, index) => {
              const isEven = index % 2 === 0;

              return (
                <div key={index} className="relative flex flex-col md:flex-row items-center justify-between w-full md:min-h-[100px]">
                  
                  {/* Center Icon (Absolute on Desktop) */}
                  <div className="z-10 flex items-center justify-center w-16 h-16 bg-[#FDFBF7] rounded-full text-[#0EA5E9] shadow-lg shrink-0 my-4 md:my-0 md:absolute md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2">
                    <MapPin size={28} />
                  </div>

                  {/* Left Side Content (Placeholder for odd, Card for even) */}
                  <div className="hidden md:flex w-full md:w-[calc(50%-4rem)] justify-end text-right">
                    {isEven && (
                      <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm w-full">
                        <h3 className="text-[#0EA5E9] font-bold text-[13px] uppercase tracking-wider mb-2">{item.year}</h3>
                        <h4 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h4>
                        {item.desc && <p className="text-gray-500 text-[15px] leading-relaxed">{item.desc}</p>}
                      </div>
                    )}
                  </div>

                  {/* Mobile Only Line */}
                  <div className="md:hidden absolute left-8 top-16 bottom-[-3rem] w-1 opacity-20"></div>

                  {/* Right Side Content (Card for odd on desktop & all on mobile) */}
                  <div className="flex w-full md:w-[calc(50%-4rem)] justify-start text-left">
                    {(!isEven) ? (
                      // Odd items: show on desktop right side, and mobile
                      <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm w-full ml-16 md:ml-0">
                        <h3 className="text-[#0EA5E9] font-bold text-[13px] uppercase tracking-wider mb-2">{item.year}</h3>
                        <h4 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h4>
                        {item.desc && <p className="text-gray-500 text-[15px] leading-relaxed">{item.desc}</p>}
                      </div>
                    ) : (
                      // Even items: hide on desktop (handled by left side), show on mobile
                      <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm w-full block md:hidden ml-16 md:ml-0">
                        <h3 className="text-[#0EA5E9] font-bold text-[13px] uppercase tracking-wider mb-2">{item.year}</h3>
                        <h4 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h4>
                        {item.desc && <p className="text-gray-500 text-[15px] leading-relaxed">{item.desc}</p>}
                      </div>
                    )}
                  </div>

                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutJourney;
