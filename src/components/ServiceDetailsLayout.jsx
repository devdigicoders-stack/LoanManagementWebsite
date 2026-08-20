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
    <div className="bg-[#fcfcfc] min-h-screen pb-20 font-sans text-gray-800 overflow-hidden">
      
      {/* Hero Section */}
      <section className="relative w-full h-[auto] min-h-[450px] md:min-h-[550px] bg-[#050b06] flex items-center overflow-hidden py-12 md:py-0">
        
        {/* Background Image */}
        <div 
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        ></div>
        
        {/* Dark gradient overlay for perfect readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#030706] via-[#030706]/90 to-[#030706]/40"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#030706] via-transparent to-transparent md:hidden"></div>

        <div className="max-w-7xl mx-auto w-full px-6 md:px-10 lg:px-20 relative z-30 flex flex-col lg:flex-row items-center justify-between gap-10 mt-10 md:mt-0">
          
          {/* Left Side (Text content) */}
          <div className="lg:w-1/2 text-left">
            <div className="inline-flex items-center gap-2 bg-[#0b150e]/80 text-[#1cf200] border border-[#1cf200]/30 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-6 backdrop-blur-sm drop-shadow">
              {Icon && <Icon size={14} />} {tagline}
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight text-white drop-shadow-lg">
              {title} <br/>
              <span className="text-[#1cf200]">{highlight}</span>
            </h1>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed max-w-xl drop-shadow">
              {description}
            </p>
            <div className="flex gap-4">
              <button className="bg-[#1cf200] hover:bg-[#5bc116] text-black font-bold px-8 py-3.5 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-[0_4px_15px_rgba(28,242,0,0.3)]">
                Apply Now
              </button>
            </div>
          </div>
          
          {/* Right Side (Floating Badge) */}
          <div className="lg:w-1/2 relative flex justify-center lg:justify-end mt-12 lg:mt-0">
            <div className="bg-[#0b150e]/90 backdrop-blur-md border border-[#1cf200]/20 p-6 rounded-2xl shadow-2xl flex items-center gap-5 z-20 transform transition-all hover:scale-105 w-max">
              <div className="w-14 h-14 bg-[#1cf200]/10 rounded-full flex items-center justify-center text-[#1cf200]">
                {BadgeIcon && <BadgeIcon size={28} strokeWidth={2.5}/>}
              </div>
              <div>
                <p className="text-gray-400 text-sm font-medium mb-1">{badgeTitle}</p>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-extrabold text-white">{badgeValue}</span>
                  <span className="text-[#1cf200] font-bold">{badgeSubtitle}</span>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#0b0f0e] mb-4">Why Choose Our {highlight}?</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">We offer competitive terms, fast processing, and flexible repayment options to ensure you get the best financing experience.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, idx) => (
              <ScrollReveal key={idx}>
                <div className="bg-white p-8 rounded-3xl shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-gray-100 hover:border-[#1cf200] transition-colors duration-300 group h-full">
                  <div className="w-14 h-14 bg-[#f4fdf5] rounded-2xl flex items-center justify-center text-[#5bc116] mb-6 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{feature.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility & Documents */}
      <section className="py-20 px-6 md:px-10 bg-[#f4fdf5]">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16">
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-extrabold text-[#0b0f0e] mb-8 border-l-4 border-[#5bc116] pl-4">Eligibility Criteria</h2>
            <ul className="space-y-4">
              {eligibility.map((item, idx) => (
                <li key={idx} className="flex gap-4 p-4 bg-white rounded-xl shadow-sm border border-gray-100 items-start">
                  <CheckCircle2 className="text-[#5bc116] shrink-0 mt-0.5" size={20} />
                  <span className="text-gray-600 font-medium text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-extrabold text-[#0b0f0e] mb-8 border-l-4 border-[#5bc116] pl-4">Required Documents</h2>
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 h-full">
              <ul className="space-y-4 text-gray-600 text-sm">
                {documents.map((doc, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#1cf200] shrink-0"></div> 
                    <span>{doc}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <ScrollReveal><CompanyStats /></ScrollReveal>
      <ScrollReveal><HappyClients /></ScrollReveal>
      <ScrollReveal><NewsAndPress /></ScrollReveal>

      {/* Final CTA */}
      <section className="py-20 px-6 md:px-10">
        <div className="max-w-4xl mx-auto bg-[#0b0f0e] rounded-[40px] p-10 md:p-16 text-center relative overflow-hidden">
          <div className="absolute inset-0 w-full h-full opacity-20 pointer-events-none">
             <div className="absolute top-0 right-0 w-64 h-64 bg-[#1cf200] rounded-full blur-[80px]"></div>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6 relative z-10">Ready to Get Started?</h2>
          <p className="text-gray-400 mb-10 max-w-xl mx-auto relative z-10">Apply online in minutes and get a quick decision. Our experts are ready to assist you in choosing the best financing plan.</p>
          <button className="relative z-10 bg-[#1cf200] hover:bg-[#5bc116] text-black font-bold px-10 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 flex items-center gap-3 mx-auto">
            Start Your Application <ArrowRight size={20} />
          </button>
        </div>
      </section>
      
    </div>
  );
};

export default ServiceDetailsLayout;
