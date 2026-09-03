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
      <section className="relative pt-32 pb-24 px-6 md:px-12 bg-gradient-to-br from-[#0c1f3d] via-[#0f2e5a] to-[#0c1f3d] overflow-hidden rounded-b-[3rem] shadow-2xl">
        {/* Decorative Gradients */}
        <div className="absolute top-[-10%] left-[-5%] w-[400px] h-[400px] bg-[#0EA5E9] rounded-full blur-[150px] opacity-20 pointer-events-none" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[400px] h-[400px] bg-[#38BDF8] rounded-full blur-[150px] opacity-10 pointer-events-none" />

        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-16 relative z-10">
          
          <div className="w-full lg:w-[55%] text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-[#0EA5E9]/10 border border-[#0EA5E9]/20 text-[#38BDF8] px-4 py-1.5 rounded-full mb-6">
              <span className="w-2 h-2 rounded-full bg-[#38BDF8] animate-pulse"></span>
              <span className="text-sm font-bold tracking-widest uppercase">Join Our Team</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-[4.5rem] font-black tracking-tight text-white mb-8 leading-[1.1]">
              Unleash your <br className="hidden md:block"/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38BDF8] to-[#0EA5E9]">potential.</span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light">
              Come build a new-age financial experience that challenges the status quo and makes life epic. Be a part of our incredible journey.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <a 
                href="#open-positions" 
                className="w-full sm:w-auto inline-flex items-center justify-center bg-[#0EA5E9] hover:bg-[#0284C7] text-white text-lg font-bold px-8 py-4 rounded-full transition-all duration-300 transform hover:-translate-y-1 shadow-[0_10px_30px_rgba(14,165,233,0.3)]"
              >
                See all open positions
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
              </a>
            </div>

            {/* Quick Stats */}
            <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 gap-6 pt-8 border-t border-white/10">
              <div>
                <div className="text-3xl font-black text-white">50+</div>
                <div className="text-sm text-gray-400 font-medium mt-1">Team Members</div>
              </div>
              <div>
                <div className="text-3xl font-black text-white">4.8★</div>
                <div className="text-sm text-gray-400 font-medium mt-1">Glassdoor Rating</div>
              </div>
              <div className="hidden sm:block">
                <div className="text-3xl font-black text-white">4</div>
                <div className="text-sm text-gray-400 font-medium mt-1">Office Locations</div>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-[45%] shrink-0 relative mt-10 lg:mt-0">
            {/* Image Container with Glow */}
            <div className="relative z-10 rounded-[2.5rem] overflow-hidden border-[8px] border-white/5 shadow-2xl group">
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c1f3d] via-transparent to-transparent opacity-60 z-10"></div>
              <img 
                src="/careers-hero.jpg" 
                alt="HAUS NUO-Pay Team" 
                className="w-full h-[450px] lg:h-[550px] object-cover group-hover:scale-110 transition-transform duration-1000 ease-out"
              />
              <div className="absolute bottom-6 left-6 z-20 bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-2xl flex items-center gap-4">
                <div className="w-12 h-12 bg-[#0EA5E9] rounded-xl flex items-center justify-center">
                  <Trophy className="text-white" size={24} />
                </div>
                <div>
                  <div className="text-white font-bold">Great Place to Work</div>
                  <div className="text-gray-300 text-sm">Certified 2026</div>
                </div>
              </div>
            </div>
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
