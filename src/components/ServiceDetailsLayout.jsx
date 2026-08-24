import React from 'react';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import CompanyStats from './CompanyStats';
import HappyClients from './HappyClients';
import NewsAndPress from './NewsAndPress';
import ScrollReveal from './ScrollReveal';

const ServiceDetailsLayout = ({ 
  icon: Icon, 
  tagline, 
  title, 
  highlight, 
  description, 
  image, 
  badgeIcon: BadgeIcon,
  badgeTitle,
  badgeValue,
  badgeSubtitle,
  features,
  eligibility,
  documents
}) => {
  return (
    <div className="bg-[#FAFAFA] min-h-screen font-sans text-gray-800 overflow-hidden">
      
      {/* Hero Section */}
      <section className="relative w-full min-h-[500px] md:min-h-[650px] flex items-center overflow-hidden pt-24 pb-16 md:py-24">
        
        {/* Background Image with modern gradient overlay */}
        <div className="absolute inset-0 z-0">
          <div 
            className="absolute inset-0 w-full h-full scale-105 transform origin-center animate-[kenburns_20s_ease-out_infinite_alternate]"
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          ></div>
          {/* Stunning gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/80 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto w-full px-6 md:px-10 lg:px-20 relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12 mt-10 md:mt-0">
          
          {/* Left Side (Text content) */}
          <div className="lg:w-[55%] text-left">
            <ScrollReveal>
              <div className="inline-flex items-center gap-2.5 bg-white/10 text-blue-300 border border-white/20 px-4 py-2 rounded-full text-xs font-bold tracking-widest uppercase mb-8 backdrop-blur-md shadow-lg">
                {Icon && <Icon size={16} strokeWidth={2.5} />} {tagline}
              </div>
            </ScrollReveal>
            <ScrollReveal>
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-black mb-6 leading-[1.1] text-white drop-shadow-lg tracking-tight">
                {title} <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">{highlight}</span>
              </h1>
            </ScrollReveal>
            <ScrollReveal>
              <p className="text-slate-300 text-lg md:text-xl mb-10 leading-relaxed max-w-xl font-medium">
                {description}
              </p>
            </ScrollReveal>
            <ScrollReveal>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white font-bold px-8 py-4 rounded-xl transition-all duration-300 transform hover:-translate-y-1 hover:shadow-[0_10px_30px_-10px_rgba(59,130,246,0.6)] flex items-center justify-center gap-2 group">
                  Apply Now <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold px-8 py-4 rounded-xl transition-all duration-300 backdrop-blur-md">
                  Check Eligibility
                </button>
              </div>
            </ScrollReveal>
          </div>
          
          {/* Right Side (Floating Badge) */}
          <div className="lg:w-[45%] relative flex justify-center lg:justify-end mt-8 lg:mt-0">
            <ScrollReveal>
              <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-3xl shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] flex items-center gap-6 z-20 transform transition-all duration-500 hover:scale-105 hover:bg-white/15 hover:border-white/30 group">
                <div className="w-16 h-16 bg-blue-500/20 rounded-2xl flex items-center justify-center text-blue-300 group-hover:bg-blue-500/30 transition-colors">
                  {BadgeIcon && <BadgeIcon size={32} strokeWidth={2.5}/>}
                </div>
                <div>
                  <p className="text-slate-300 text-sm font-semibold mb-1 tracking-wide uppercase">{badgeTitle}</p>
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl md:text-5xl font-black text-white">{badgeValue}</span>
                    <span className="text-blue-300 font-bold text-lg">{badgeSubtitle}</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
          
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-6 md:px-10 bg-white relative">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-50 rounded-full blur-[120px] opacity-60 pointer-events-none transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <ScrollReveal>
              <span className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-3 block">Premium Features</span>
              <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6">Why Choose Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">{highlight}</span>?</h2>
              <p className="text-slate-500 max-w-2xl mx-auto text-lg leading-relaxed">We offer competitive terms, fast processing, and flexible repayment options to ensure you get the best financing experience tailored to your exact needs.</p>
            </ScrollReveal>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, idx) => (
              <ScrollReveal key={idx}>
                <div className="bg-white p-10 rounded-[2rem] shadow-[0_10px_40px_-10px_rgba(0,0,0,0.05)] border border-slate-100 hover:border-blue-200 transition-all duration-500 group h-full hover:shadow-[0_20px_50px_-10px_rgba(59,130,246,0.1)] hover:-translate-y-2 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-50 to-transparent rounded-bl-full opacity-50 transition-transform group-hover:scale-110"></div>
                  <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mb-8 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 shadow-sm relative z-10">
                    <feature.icon size={28} strokeWidth={2} />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4 relative z-10">{feature.title}</h3>
                  <p className="text-slate-500 text-[15px] leading-relaxed relative z-10">{feature.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility & Documents */}
      <section className="py-24 px-6 md:px-10 bg-slate-50 relative overflow-hidden">
        <div className="absolute left-0 bottom-0 w-[600px] h-[600px] bg-blue-100/40 rounded-full blur-[100px] pointer-events-none transform -translate-x-1/2 translate-y-1/2"></div>
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-16 relative z-10">
          <div className="lg:w-1/2">
            <ScrollReveal>
              <div className="bg-white p-10 rounded-[2rem] shadow-[0_10px_40px_-10px_rgba(0,0,0,0.05)] border border-slate-100 h-full">
                <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-600 mb-6">
                  <CheckCircle2 size={24} />
                </div>
                <h2 className="text-3xl font-black text-slate-900 mb-8">Eligibility Criteria</h2>
                <ul className="space-y-5">
                  {eligibility.map((item, idx) => (
                    <li key={idx} className="flex gap-4 items-start group">
                      <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 shrink-0 mt-0.5 group-hover:bg-emerald-500 group-hover:text-white transition-colors">
                        <CheckCircle2 size={14} strokeWidth={3} />
                      </div>
                      <span className="text-slate-600 font-medium text-[15px] leading-relaxed group-hover:text-slate-900 transition-colors">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          </div>
          <div className="lg:w-1/2">
            <ScrollReveal>
              <div className="bg-slate-900 p-10 rounded-[2rem] shadow-2xl relative overflow-hidden h-full">
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600 rounded-full blur-[100px] opacity-20 pointer-events-none"></div>
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-blue-400 mb-6 border border-white/10">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><line x1="10" y1="9" x2="8" y2="9"/></svg>
                </div>
                <h2 className="text-3xl font-black text-white mb-8">Required Documents</h2>
                <ul className="space-y-6">
                  {documents.map((doc, idx) => (
                    <li key={idx} className="flex items-center gap-4 group">
                      <div className="w-2.5 h-2.5 rounded-full bg-blue-500 shrink-0 group-hover:scale-150 transition-transform"></div> 
                      <span className="text-slate-300 font-medium text-[15px] group-hover:text-white transition-colors">{doc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <ScrollReveal><CompanyStats /></ScrollReveal>
      <ScrollReveal><HappyClients /></ScrollReveal>
      <ScrollReveal><NewsAndPress /></ScrollReveal>

      {/* Final CTA */}
      <section className="py-24 px-6 md:px-10 bg-white">
        <ScrollReveal>
          <div className="max-w-5xl mx-auto bg-gradient-to-br from-slate-900 to-slate-800 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl">
            <div className="absolute inset-0 w-full h-full pointer-events-none">
              <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-500 rounded-full blur-[120px] opacity-40"></div>
              <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-cyan-500 rounded-full blur-[120px] opacity-30"></div>
            </div>
            
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">Ready to Get Started?</h2>
              <p className="text-slate-300 mb-10 max-w-2xl mx-auto text-lg leading-relaxed font-medium">Apply online in minutes and get a quick decision. Our experts are ready to assist you in choosing the best financing plan tailored to you.</p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <button className="bg-gradient-to-r from-blue-500 to-blue-400 hover:from-blue-400 hover:to-blue-300 text-white font-bold px-10 py-5 rounded-2xl transition-all duration-300 transform hover:-translate-y-1 shadow-[0_10px_30px_-10px_rgba(59,130,246,0.6)] flex items-center justify-center gap-3 text-lg group">
                  Start Your Application <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
                </button>
                <button className="bg-white/10 hover:bg-white/20 text-white font-bold border border-white/20 px-10 py-5 rounded-2xl transition-all duration-300 backdrop-blur-md text-lg">
                  Speak to an Expert
                </button>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>
      
    </div>
  );
};

export default ServiceDetailsLayout;
