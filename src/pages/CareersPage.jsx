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
      <section className="pt-28 pb-20 px-6 md:px-12 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8 lg:gap-12 overflow-hidden">
        <div className="w-full md:w-[55%] text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl md:text-[2.8rem] lg:text-6xl xl:text-[4rem] font-extrabold tracking-tight text-slate-900 mb-8 leading-[1.1] whitespace-nowrap">
            Unleash your potential.
          </h1>
          <p className="text-xl text-gray-500 mb-10 max-w-2xl mx-auto md:mx-0 pr-4">
            Come build a new-age financial experience that challenges the status quo and makes life epic.
          </p>
          <a 
            href="#open-positions" 
            className="inline-block bg-[#0EA5E9] hover:bg-[#0284C7] text-white text-lg font-bold px-10 py-4 rounded-full transition-all duration-300 transform hover:-translate-y-1 shadow-lg"
          >
            See all open positions
          </a>
        </div>
        <div className="w-full md:w-[45%] shrink-0">
          <div className="relative rounded-[2rem] overflow-hidden shadow-2xl">
            <div className="absolute inset-0 mix-blend-overlay z-10"></div>
            <img 
              src="/careers-hero.jpg" 
              alt="HAUS NUO-Pay Team" 
              className="w-full h-[400px] md:h-[500px] object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>
      </section>

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
        <div className="max-w-7xl mx-auto">
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
        <div className="max-w-7xl mx-auto">
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
