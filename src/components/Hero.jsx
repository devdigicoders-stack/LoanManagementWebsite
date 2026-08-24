import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Users, Landmark, IndianRupee, Award } from 'lucide-react';
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

  // Autoplay
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
    <section className="relative w-full bg-black text-white pt-16 pb-32 lg:pb-40 overflow-x-clip min-h-[500px]">
      
      {/* Diagonal Split on Right Side */}
      <div className="absolute top-0 right-0 w-full md:w-1/2 h-full z-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -right-[10%] w-[150%] h-[150%] bg-black transform rotate-[25deg] shadow-[-20px_0_40px_rgba(0,0,0,0.8)] hidden md:block">
          {/* Gradient Border replacing border-l */}
          <div className="absolute top-0 left-0 w-[12px] h-full "></div>
          
          {/* Decorative stripes mimicking the screenshots */}
          <div className="absolute top-0 -left-[40px] w-[8px] h-full bg-white opacity-20"></div>
          <div className="absolute top-0 -left-[70px] w-[4px] h-full  opacity-50"></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative w-full h-full px-6 md:px-10 z-10 flex flex-col justify-center min-h-[400px]">
        
        {/* Navigation Arrows */}
        <button onClick={prevSlide} className="absolute left-2 md:-left-4 top-1/2 -translate-y-1/2 z-30 bg-black/40 hover:bg-[#0284C7] border border-white/10 hover:border-transparent p-3 rounded-full text-white hover:text-black transition-all backdrop-blur-md hidden md:flex items-center justify-center">
          <ChevronLeft size={24} />
        </button>
        <button onClick={nextSlide} className="absolute right-2 md:-right-4 top-1/2 -translate-y-1/2 z-30 bg-black/40 hover:bg-[#0284C7] border border-white/10 hover:border-transparent p-3 rounded-full text-white hover:text-black transition-all backdrop-blur-md hidden md:flex items-center justify-center">
          <ChevronRight size={24} />
        </button>

        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="flex flex-col md:flex-row items-center justify-between w-full h-full"
          >
            {/* Left Content */}
            <div className="md:w-[55%] flex flex-col items-start text-left z-30 md:pr-4 py-10 relative">
              
              <h3 className="italic text-gray-200 text-lg md:text-xl lg:text-2xl font-light mb-3 tracking-wide">
                {slides[current].tag}
              </h3>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.1] mb-8 relative z-30 drop-shadow-md">
                {slides[current].title} <br />
                <span className="text-transparent bg-clip-text ">{slides[current].highlight}</span>
              </h1>

              <button className="flex items-center justify-center  hover:] hover:] text-black font-bold py-3 px-8 rounded-lg shadow-[0_4px_20px_rgba(28,242,0,0.4)] transition-transform duration-300 hover:scale-105 z-30 relative">
                Know More
              </button>
            </div>

            {/* Right Content - Hero Image */}
            <div className="md:w-[45%] relative flex justify-center md:justify-end z-10 mt-8 md:mt-0 pointer-events-none">
              <img
                src={slides[current].image}
                alt="Loan Feature"
                className="w-full max-w-[650px] object-contain mix-blend-screen transform scale-100 md:scale-110 origin-right"
              />
            </div>
          </motion.div>
        </AnimatePresence>
        
        {/* Dots Navigation (Square Dots to match screenshots) */}
        <div className="absolute bottom-6 left-6 md:left-10 flex gap-3 z-30">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`h-[6px] transition-all duration-300 rounded-[1px] ${
                current === index ? '  w-6 shadow-[0_0_8px_rgba(28,242,0,0.8)]' : 'bg-gray-500 hover:bg-gray-300 w-[6px]'
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
