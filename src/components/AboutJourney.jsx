import React from 'react';

const milestones = [
  { year: "2014", title: "Beginning of Organizational Legacy", desc: "" },
  { year: "2018", title: "Achieved Rs. 0.15 Mn Loan Book", desc: "" },
  { year: "2022", title: "Continuing the Journey", desc: "Venture Into Secured, Unsecured & Vehicles Loan" },
  { year: "2024", title: "NuoG's Group", desc: "Merger of AFPL & NGCPL with NuoG's In Oct' 2024" },
  { year: "2026", title: "17+ Branches & 45 Mn Loan Book", desc: "" },
];

const AboutJourney = () => {
  return (
    <section className="w-full bg-[#fcfcfc] py-12 px-6 md:px-10 border-t border-b border-gray-100">
      <div className="max-w-5xl mx-auto">

        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">Our Journey</h2>
          <div className="w-16 h-1 bg-[#0EA5E9] mx-auto rounded-full"></div>
        </div>

        {/* Horizontal timeline — scrollable on mobile */}
        <div className="relative">
          {/* Connector line */}
          <div className="absolute top-7 left-0 right-0 h-0.5 bg-gray-200 hidden md:block"></div>

          <div className="flex flex-col md:flex-row md:justify-between gap-6 md:gap-0 relative">
            {milestones.map((item, index) => (
              <div key={index} className="flex md:flex-col items-start md:items-center gap-4 md:gap-0 md:flex-1">

                {/* Dot */}
                <div className="relative z-10 shrink-0">
                  <div className="w-14 h-14 md:w-12 md:h-12 bg-[#E0F2FE] rounded-full flex items-center justify-center border-4 border-white shadow-md mx-auto">
                    <span className="text-[#0284C7] text-xs font-extrabold leading-none text-center">{item.year}</span>
                  </div>
                </div>

                {/* Card content */}
                <div className="md:text-center md:px-3 md:mt-4">
                  <p className="text-gray-900 font-bold text-sm leading-snug">{item.title}</p>
                  {item.desc && (
                    <p className="text-gray-500 text-xs mt-1 leading-relaxed">{item.desc}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutJourney;
