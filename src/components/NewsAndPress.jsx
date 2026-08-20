import React, { useRef } from 'react';
import { Calendar, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const NewsAndPress = () => {
  const scrollRef = useRef(null);

  const newsData = [
    {
      date: "15 Aug 2026",
      category: "Press Release",
      title: "NuoG Announces New SME Lending Initiatives",
      excerpt: "NuoG expands its footprint in the MSME sector by launching collateral-free business loans tailored for emerging tier-2 cities."
    },
    {
      date: "02 Jul 2026",
      category: "News",
      title: "Awarded 'Best Digital Lender of the Year'",
      excerpt: "NuoG has been recognized for its innovative, 100% paperless loan approval system at the prestigious Annual FinTech Awards."
    },
    {
      date: "18 Jun 2026",
      category: "Corporate",
      title: "NuoG Crosses Historic Growth Milestone",
      excerpt: "Our unwavering commitment to customer-centric financing has helped us achieve record-breaking growth this financial quarter."
    },
    {
      date: "24 May 2026",
      category: "Launch",
      title: "New Mobile App For Instant Loan Disbursals",
      excerpt: "Get your loan approved and disbursed directly into your bank account within 10 minutes using the new NuoG Mobile App."
    },
    {
      date: "10 Apr 2026",
      category: "Press Release",
      title: "Partnership with Top Educational Institutes",
      excerpt: "We have partnered with 50+ top universities to provide zero-cost EMI education loans for deserving students."
    }
  ];

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -350, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 350, behavior: 'smooth' });
    }
  };

  return (
    <section className="w-full bg-[#fafdf9] py-20 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <div className="inline-block bg-[#1cf200]/10 border border-[#1cf200]/30 text-[#15a300] rounded-full px-4 py-1.5 text-xs font-bold tracking-wider mb-4">
              LATEST UPDATES
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-[#0b0f0e]">
              News & <span className="text-[#1cf200]">Press Releases</span>
            </h2>
          </div>
          
          <div className="flex items-center gap-6">
            {/* Slider Controls */}
            <div className="flex gap-2">
              <button 
                onClick={scrollLeft}
                className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-[#1cf200] hover:text-black hover:border-transparent transition-all"
              >
                <ChevronLeft size={20} />
              </button>
              <button 
                onClick={scrollRight}
                className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-[#1cf200] hover:text-black hover:border-transparent transition-all"
              >
                <ChevronRight size={20} />
              </button>
            </div>
            
            <Link to="#" className="hidden md:flex items-center gap-2 text-sm font-bold text-[#0b0f0e] hover:text-[#1cf200] transition-colors group">
              View All News
              <ArrowRight size={18} className="transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* News Slider Container */}
        <div 
          ref={scrollRef}
          className="flex gap-8 overflow-x-auto snap-x snap-mandatory hide-scrollbar pb-6"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {newsData.map((news, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-shadow duration-300 group flex flex-col min-w-[320px] md:min-w-[380px] max-w-[380px] shrink-0 snap-start relative overflow-hidden"
            >
              {/* Top Accent Line */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gray-200 to-gray-200 group-hover:from-[#1cf200] group-hover:to-[#5bc116] transition-all duration-300"></div>
              
              {/* Meta Data */}
              <div className="flex items-center gap-4 mb-5 text-sm">
                <span className="flex items-center gap-1.5 text-gray-500 font-medium">
                  <Calendar size={14} className="text-[#1cf200]" />
                  {news.date}
                </span>
                <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                <span className="text-[#1cf200] font-semibold">{news.category}</span>
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-[#0b0f0e] mb-4 group-hover:text-[#1cf200] transition-colors leading-snug">
                {news.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-8 flex-grow">
                {news.excerpt}
              </p>

              {/* Read More Link */}
              <a href="#" className="inline-flex items-center gap-2 text-[#0b0f0e] font-bold text-sm mt-auto group-hover:text-[#1cf200] transition-colors w-max">
                Read Article
                <span className="w-6 h-6 rounded-full bg-gray-100 group-hover:bg-[#1cf200]/10 flex items-center justify-center transition-colors">
                  <ArrowRight size={12} />
                </span>
              </a>
            </div>
          ))}
        </div>
        
        {/* Mobile View All Button */}
        <div className="mt-8 flex justify-center md:hidden">
          <Link to="#" className="flex items-center gap-2 text-sm font-bold text-[#0b0f0e] hover:text-[#1cf200] transition-colors group">
            View All News
            <ArrowRight size={18} className="transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

      </div>
    </section>
  );
};

export default NewsAndPress;
