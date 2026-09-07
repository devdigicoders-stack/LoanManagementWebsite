import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const slides = [
  {
    id: 1,
    tag: "Shift from holding your dreams to unlocking your success!",
    title: "Build Your Dream Home With",
    highlight: "Easy Property Finance",
    image: "/home/property_loan.jpg"
  },
  {
    id: 2,
    tag: "Switch from borrowed vehicle to your OWN vehicle!",
    title: "Drive Your Dream Car With",
    highlight: "Instant Vehicle Loans",
    image: "/home/car_loan.jpg"
  },
  {
    id: 3,
    tag: "Don't let finances compromise your health",
    title: "Prioritize Care With",
    highlight: "Medical Emergency Loans",
    image: "/home/health_loan.jpg"
  },
  {
    id: 4,
    tag: "Achieve Your Goals With",
    title: "Achieve Your Goals With",
    highlight: "Flexible Personal Loans",
    image: "/home/financial_loan.jpg"
  }
];

const Hero = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrent(current === slides.length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? slides.length - 1 : current - 1);
  };

  return (
    <section className="relative w-full bg-gradient-to-br from-[#F0F9FF] to-[#E0F2FE] pt-16 pb-24 lg:pt-24 lg:pb-32 overflow-hidden">
      
      {/* Background Decorative Shapes */}
      <div className="absolute top-0 right-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-[10%] -right-[5%] w-[600px] h-[600px] rounded-full bg-[#BAE6FD] opacity-30 blur-3xl"></div>
        <div className="absolute bottom-[10%] -left-[5%] w-[400px] h-[400px] rounded-full bg-[#7DD3FC] opacity-20 blur-3xl"></div>
      </div>

      <div className="w-full px-6 lg:px-12 xl:px-16 mx-auto relative z-10">
        
        {/* Navigation Arrows */}
        <button onClick={prevSlide} className="absolute left-0 md:left-4 top-1/2 -translate-y-1/2 z-30 bg-white/50 hover:bg-white border border-[#BAE6FD] hover:border-[#0284C7] p-3 rounded-full text-[#0284C7] shadow-sm transition-all hidden lg:flex items-center justify-center group">
          <ChevronLeft size={24} className="group-hover:-translate-x-0.5 transition-transform" />
        </button>
        <button onClick={nextSlide} className="absolute right-0 md:right-4 top-1/2 -translate-y-1/2 z-30 bg-white/50 hover:bg-white border border-[#BAE6FD] hover:border-[#0284C7] p-3 rounded-full text-[#0284C7] shadow-sm transition-all hidden lg:flex items-center justify-center group">
          <ChevronRight size={24} className="group-hover:translate-x-0.5 transition-transform" />
        </button>

        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8"
          >
            {/* Left Content (50%) */}
            <div className="w-full lg:w-1/2 flex flex-col items-start text-left z-30 pt-2 lg:pt-0 lg:pr-8">
              
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 backdrop-blur-sm border border-[#BAE6FD] text-[#0284C7] text-sm font-semibold mb-6 shadow-sm">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0284C7] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#0284C7]"></span>
                </span>
                Trusted by 50,000+ Happy Customers
              </div>

              <h3 className="text-slate-600 text-base md:text-lg lg:text-xl font-medium mb-3 uppercase tracking-wider">
                {slides[current].tag}
              </h3>

              <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-extrabold text-slate-900 leading-[1.1] mb-6">
                {slides[current].title} <br className="hidden md:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0284C7] to-[#0EA5E9]">
                  {slides[current].highlight}
                </span>
              </h1>
              
              <p className="text-slate-600 text-base md:text-lg mb-6 max-w-xl leading-relaxed">
                Experience seamless and secure financial solutions tailored specifically to your needs. Get the funds you need with fast approvals, highly competitive interest rates, and dedicated 24/7 customer support.
              </p>

              {/* Feature Checkmarks to make content richer */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 mb-8 w-full">
                <div className="flex items-center gap-2 text-slate-700 font-medium text-sm md:text-base">
                  <div className="w-5 h-5 rounded-full bg-[#E0F2FE] flex items-center justify-center text-[#0284C7]">✓</div>
                  No Hidden Charges
                </div>
                <div className="flex items-center gap-2 text-slate-700 font-medium text-sm md:text-base">
                  <div className="w-5 h-5 rounded-full bg-[#E0F2FE] flex items-center justify-center text-[#0284C7]">✓</div>
                  Instant Approval
                </div>
                <div className="flex items-center gap-2 text-slate-700 font-medium text-sm md:text-base">
                  <div className="w-5 h-5 rounded-full bg-[#E0F2FE] flex items-center justify-center text-[#0284C7]">✓</div>
                  Minimal Documentation
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <button className="flex w-full sm:w-auto items-center justify-center gap-2 bg-[#0284C7] hover:bg-[#0369A1] text-white font-semibold py-3.5 px-8 rounded-full shadow-lg shadow-blue-500/30 transition-all duration-300 hover:shadow-blue-500/50 hover:-translate-y-0.5">
                  Get Started Now
                  <ArrowRight size={18} />
                </button>
                <button className="flex w-full sm:w-auto items-center justify-center bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 hover:border-slate-300 font-semibold py-3.5 px-8 rounded-full shadow-sm transition-all duration-300">
                  Calculate EMI
                </button>
              </div>

              {/* Trust Indicators */}
              <div className="mt-8 flex items-center gap-4 border-t border-slate-200/60 pt-6 w-full">
                <div className="flex -space-x-3">
                  <img src="https://i.pravatar.cc/100?img=1" alt="User" className="w-10 h-10 rounded-full border-2 border-white object-cover shadow-sm" />
                  <img src="https://i.pravatar.cc/100?img=2" alt="User" className="w-10 h-10 rounded-full border-2 border-white object-cover shadow-sm" />
                  <img src="https://i.pravatar.cc/100?img=3" alt="User" className="w-10 h-10 rounded-full border-2 border-white object-cover shadow-sm" />
                  <div className="w-10 h-10 rounded-full border-2 border-white bg-slate-100 flex items-center justify-center text-xs font-bold text-slate-600 shadow-sm">10k+</div>
                </div>
                <div className="flex flex-col">
                  <div className="flex text-yellow-400 text-sm">
                    ★★★★★
                  </div>
                  <span className="text-xs text-slate-500 font-medium">4.9/5 Average Rating</span>
                </div>
              </div>

            </div>

            {/* Right Content - Hero Image (50%) */}
            <div className="w-full lg:w-1/2 relative flex justify-center lg:justify-end z-10 mt-8 lg:mt-0">
              <div className="relative w-full max-w-lg aspect-square lg:aspect-auto lg:h-[500px]">
                {/* Decorative background for image */}
                <div className="absolute inset-0 bg-gradient-to-tr from-[#BAE6FD] to-[#E0F2FE] rounded-[2rem] transform rotate-3 scale-105 -z-10 shadow-inner"></div>
                
                <img
                  src={slides[current].image}
                  alt={slides[current].highlight}
                  className="w-full h-full object-cover rounded-[2rem] shadow-2xl border-4 border-white transform transition-transform duration-700 hover:scale-[1.02]"
                />
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
        
        {/* Dots Navigation */}
        <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 flex gap-3 z-30">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`h-2.5 transition-all duration-300 rounded-full ${
                current === index ? 'w-8 bg-[#0284C7] shadow-md' : 'bg-slate-300 hover:bg-slate-400 w-2.5'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Hero;
