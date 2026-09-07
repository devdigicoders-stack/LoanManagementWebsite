import React, { useRef, useEffect } from 'react';

const milestones = [
  { year: "2014", title: "Beginning of Organizational Legacy", desc: "" },
  { year: "2015", title: "Acquired Supportive - NBFC License", desc: "" },
  { year: "2016", title: "Commencement of Small Ticket Size", desc: "Secured and Unsecured Products" },
  { year: "2017", title: "Partnered with True South", desc: "As Investor" },
  { year: "2018", title: "Milestone Achieved", desc: "Rs. 0.15 Mn Loan Book" },
  { year: "2019", title: "Launched Co-Lending Business", desc: "" },
  { year: "2020-21", title: "COVID Faced & Digital Shift", desc: "Stop Working & Initiated Digital Transformation Journey" },
  { year: "2022", title: "Continuing the Journey", desc: "Venture Into Secured, Unsecured & Vehicles Loan" },
  { year: "2023", title: "Recognitions & Awards", desc: "Awarded ISI/IEC 27001:2024 & Great Place to Work" },
  { year: "2024", title: "NuoG's Group Formed", desc: "Merger of AFPL & NGCPL with NuoG's In Oct' 2024" },
  { year: "2025", title: "New Product Launches", desc: "Rental & Societies Management, Multi-Single EMI & Salary Advance Loan" },
  { year: "2026", title: "Expanding Horizons", desc: "17+ Branches and Crossed 45 Mn Loan Book" },
];

const ArrowLeft = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
);

const ArrowRight = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
);

const AboutJourney = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollRef.current) {
        const { current } = scrollRef;
        const maxScrollLeft = current.scrollWidth - current.clientWidth;
        
        // If we reached the end, smoothly scroll back to the start
        if (current.scrollLeft >= maxScrollLeft - 10) {
          current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          // Otherwise keep scrolling right
          current.scrollBy({ left: 350, behavior: 'smooth' });
        }
      }
    }, 3000); // Slide every 3 seconds

    return () => clearInterval(interval);
  }, []);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = direction === 'left' ? -350 : 350;
      current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="w-full bg-[#fcfcfc] py-16 px-4 md:px-10 border-t border-b border-gray-100 overflow-hidden relative group">
      <div className="w-full px-6 lg:px-12 xl:px-16 mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Journey</h2>
          <div className="w-20 h-1.5 bg-[#0EA5E9] mx-auto rounded-full"></div>
          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
            Swipe or use the arrows to explore our milestones and achievements from the beginning to our future horizons.
          </p>
        </div>

        <div className="relative">
          {/* Navigation Buttons */}
          <button 
            onClick={() => scroll('left')} 
            className="absolute left-0 md:-left-4 top-1/2 -translate-y-1/2 z-20 bg-white shadow-lg p-3 rounded-full border border-gray-100 text-[#0EA5E9] hover:bg-[#0EA5E9] hover:text-white transition-all opacity-90 hover:opacity-100 hover:scale-110"
            aria-label="Scroll Left"
          >
            <ArrowLeft />
          </button>
          
          <button 
            onClick={() => scroll('right')} 
            className="absolute right-0 md:-right-4 top-1/2 -translate-y-1/2 z-20 bg-white shadow-lg p-3 rounded-full border border-gray-100 text-[#0EA5E9] hover:bg-[#0EA5E9] hover:text-white transition-all opacity-90 hover:opacity-100 hover:scale-110"
            aria-label="Scroll Right"
          >
            <ArrowRight />
          </button>

          {/* Slider Container */}
          <style dangerouslySetInnerHTML={{__html: `
            .hide-scroll::-webkit-scrollbar { display: none; }
            .hide-scroll { -ms-overflow-style: none; scrollbar-width: none; }
          `}} />
          
          <div className="relative">
            {/* Continuous Line (placed behind dots) */}
            <div className="absolute top-[48px] -translate-y-1/2 left-8 right-8 h-1 bg-gradient-to-r from-gray-100 via-[#0EA5E9] to-gray-100 z-0 opacity-50"></div>

            <div 
              ref={scrollRef} 
              className="flex overflow-x-auto gap-6 md:gap-10 py-6 px-12 snap-x snap-mandatory scroll-smooth hide-scroll"
            >
              {milestones.map((item, index) => (
                <div key={index} className="flex flex-col items-center min-w-[260px] md:min-w-[320px] shrink-0 snap-center relative z-10">
                  
                  {/* Year Dot */}
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center border-4 border-[#0EA5E9] shadow-lg shadow-sky-100 mb-6 transition-transform hover:scale-110 duration-300">
                    <span className="text-[#0284C7] text-sm font-extrabold text-center leading-tight">
                      {item.year}
                    </span>
                  </div>
                  
                  {/* Content Card */}
                  <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300 w-full text-center h-full flex flex-col justify-start">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                    {item.desc && (
                      <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutJourney;
