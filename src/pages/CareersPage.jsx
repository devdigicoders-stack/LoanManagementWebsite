import React, { useEffect } from 'react';
import { HeartPulse, Clock, CalendarHeart, Trophy, TrendingUp, Users, MapPin, Building2, TrendingUp as StatsIcon } from 'lucide-react';
import OpenPositions from '../components/OpenPositions';

const CareersPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full bg-[#fcfcfc] min-h-screen text-gray-900 font-sans">
      
      {/* Hero Section */}
      <div className="relative w-full h-[250px] md:h-[300px] lg:h-[350px] bg-[#041424] overflow-hidden font-sans shadow-sm">
        <div className="w-full h-full relative flex items-center overflow-hidden">
          
          {/* 1. Right Side Image */}
          <div className="absolute top-0 right-0 w-[75%] sm:w-[70%] lg:w-[65%] h-full z-0">
            <img
              src="/careers-hero.jpg"
              alt="HAUS NUO-Pay Careers"
              className="w-full h-full object-cover object-center"
            />
          </div>

          {/* 2. Cyan Accent Line (Diagonal) */}
          <div className="absolute top-0 left-0 w-full h-full bg-[#0EA5E9] z-10 hero-clip-accent"></div>

          {/* 3. Main Dark Blue Diagonal Background */}
          <div className="absolute top-0 left-0 w-full h-full bg-[#041424] z-20 hero-clip-bg">
            {/* Subtle Geometric Triangles Pattern Overlay */}
            <div 
              className="absolute inset-0 opacity-[0.03] pointer-events-none" 
              style={{ 
                backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M30 0l30 60H0L30 0z\' fill=\'%23ffffff\' fill-rule=\'evenodd\'/%3E%3C/svg%3E")', 
                backgroundSize: '60px 60px' 
              }}
            ></div>
          </div>
          
          {/* 4. Left Content */}
          <div className="relative z-30 w-[72%] sm:w-[65%] lg:w-[55%] px-5 sm:px-8 lg:px-12 xl:px-16 flex flex-col justify-center h-full">
            <div className="inline-block text-[#0EA5E9] font-bold text-xs tracking-wider uppercase mb-1">
              CAREERS AT NUO-PAY
            </div>
            
            <h1 className="font-display text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2 lg:mb-3 leading-tight drop-shadow-md">
              Unleash Your <span className="text-[#0EA5E9]">Potential</span>
            </h1>
            
            <p className="text-gray-300 text-xs md:text-sm lg:text-base mb-3 max-w-md leading-relaxed hidden sm:block">
              Come build a new-age financial experience with a passionate team. Explore open opportunities today.
            </p>
            
            <div className="flex items-center gap-4">
              <a 
                href="#open-positions" 
                className="inline-block bg-[#0EA5E9] hover:bg-[#0284C7] text-white font-bold py-2 px-6 lg:py-2.5 lg:px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-[0_4px_15px_rgba(14,165,233,0.3)] text-xs lg:text-sm w-max"
              >
                See Open Positions
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* Mission Section */}
      <section className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-8 text-slate-900">Our mission</h2>
          <p className="text-xl md:text-2xl text-gray-500 font-medium leading-relaxed max-w-3xl">
            We aim to build an ecosystem for the youth that solves all their financial needs and make their lives epic!
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 px-6 md:px-12 bg-[#F8FAFC]">
        <div className="w-full px-6 lg:px-12 xl:px-16 mx-auto">
          <h2 className="text-3xl md:text-5xl font-extrabold text-center mb-16 text-cyan-500">
            We go big. We go beyond.
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            <div className="bg-white p-10 rounded-[2rem] shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-[#e8f5e9] text-center hover:-translate-y-2 transition-transform duration-300">
              <div className="w-20 h-20 mx-auto bg-[#E0F2FE] text-[#0EA5E9] rounded-full flex items-center justify-center mb-6">
                <Users size={36} strokeWidth={2.5} />
              </div>
              <h3 className="text-2xl font-bold mb-2 text-gray-800">14.79 Lakh+</h3>
              <p className="text-gray-500 text-lg">registered customers</p>
            </div>
            
            <div className="bg-white p-10 rounded-[2rem] shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-[#e8f5e9] text-center hover:-translate-y-2 transition-transform duration-300">
              <div className="w-20 h-20 mx-auto bg-[#E0F2FE] text-[#0EA5E9] rounded-full flex items-center justify-center mb-6">
                <MapPin size={36} strokeWidth={2.5} />
              </div>
              <h3 className="text-2xl font-bold mb-2 text-gray-800">21 branches</h3>
              <p className="text-gray-500 text-lg">across India &amp; expanding</p>
            </div>
            
            <div className="bg-white p-10 rounded-[2rem] shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-[#e8f5e9] text-center hover:-translate-y-2 transition-transform duration-300">
              <div className="w-20 h-20 mx-auto bg-[#E0F2FE] text-[#0EA5E9] rounded-full flex items-center justify-center mb-6">
                <Building2 size={36} strokeWidth={2.5} />
              </div>
              <h3 className="text-2xl font-bold mb-2 text-gray-800">374+ workforce</h3>
              <p className="text-gray-500 text-lg">and many more to join</p>
            </div>
            
            <div className="bg-white p-10 rounded-[2rem] shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-[#e8f5e9] text-center hover:-translate-y-2 transition-transform duration-300">
              <div className="w-20 h-20 mx-auto bg-[#E0F2FE] text-[#0EA5E9] rounded-full flex items-center justify-center mb-6">
                <StatsIcon size={36} strokeWidth={2.5} />
              </div>
              <h3 className="text-2xl font-bold mb-2 text-gray-800">₹0.74 Lakh Cr+</h3>
              <p className="text-gray-500 text-lg">Assets Under Management</p>
            </div>
          </div>
        </div>
      </section>

      {/* Perks Section */}
      <section className="py-24 px-6 md:px-12 bg-white">
        <div className="w-full px-6 lg:px-12 xl:px-16 mx-auto">
          <h2 className="text-3xl md:text-5xl font-extrabold text-center mb-16 text-gray-900">
            We take care of you
          </h2>
          
          <div className="flex flex-wrap justify-center gap-6 md:gap-8">
            <div className="bg-[#fcfcfc] p-8 md:p-10 rounded-[2rem] border border-gray-100 text-center w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)] hover:shadow-lg transition-shadow duration-300">
              <HeartPulse size={48} className="mx-auto text-[#0EA5E9] mb-6" strokeWidth={1.5} />
              <h3 className="text-xl font-bold mb-3 text-slate-900">Health comes first</h3>
              <p className="text-gray-500">Extensive medical insurance for you &amp; your family</p>
            </div>
            
            <div className="bg-[#fcfcfc] p-8 md:p-10 rounded-[2rem] border border-gray-100 text-center w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)] hover:shadow-lg transition-shadow duration-300">
              <Clock size={48} className="mx-auto text-[#0EA5E9] mb-6" strokeWidth={1.5} />
              <h3 className="text-xl font-bold mb-3 text-slate-900">Flexible working hours</h3>
              <p className="text-gray-500">Define your own schedule to maximise productivity</p>
            </div>
            
            <div className="bg-[#fcfcfc] p-8 md:p-10 rounded-[2rem] border border-gray-100 text-center w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)] hover:shadow-lg transition-shadow duration-300">
              <CalendarHeart size={48} className="mx-auto text-[#0EA5E9] mb-6" strokeWidth={1.5} />
              <h3 className="text-xl font-bold mb-3 text-slate-900">Take time off</h3>
              <p className="text-gray-500">Tailored leave policies for all your important moments</p>
            </div>
            
            <div className="bg-[#fcfcfc] p-8 md:p-10 rounded-[2rem] border border-gray-100 text-center w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)] hover:shadow-lg transition-shadow duration-300">
              <Trophy size={48} className="mx-auto text-[#0EA5E9] mb-6" strokeWidth={1.5} />
              <h3 className="text-xl font-bold mb-3 text-slate-900">Rewards</h3>
              <p className="text-gray-500">A reward system to celebrate your hard work &amp; impact</p>
            </div>
            
            <div className="bg-[#fcfcfc] p-8 md:p-10 rounded-[2rem] border border-gray-100 text-center w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)] hover:shadow-lg transition-shadow duration-300">
              <TrendingUp size={48} className="mx-auto text-[#0EA5E9] mb-6" strokeWidth={1.5} />
              <h3 className="text-xl font-bold mb-3 text-slate-900">Learn and grow</h3>
              <p className="text-gray-500">Fuelling your growth with impactful learning opportunities</p>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions Section */}
      <OpenPositions />

    </div>
  );
};

export default CareersPage;
