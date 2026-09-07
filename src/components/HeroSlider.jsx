import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    { 
      id: 1, 
      src: '/home_loan.jpg', 
      title: 'Build Your Dream Home', 
      desc: 'Get fast approval and competitive interest rates for your new home or property extension.',
      btnText: 'Know More',
      link: '/services/home-loan'
    },
    { 
      id: 2, 
      src: '/car_loan.jpg', 
      title: 'Drive Your Success', 
      desc: 'Upgrade your vehicle with flexible repayment options and minimal documentation.',
      btnText: 'Know More',
      link: '/services/car-loan'
    },
    { 
      id: 3, 
      src: '/financial_loan.jpg', 
      title: 'Empower Your Business', 
      desc: 'Fuel your business growth with our tailored financial solutions designed for entrepreneurs.',
      btnText: 'Know More',
      link: '/services/sme-msme-loan'
    },
    { 
      id: 4, 
      src: '/health_loan.jpg', 
      title: 'Your Health, Our Priority', 
      desc: 'Instant financial support for medical emergencies so you can focus on what matters most.',
      btnText: 'Know More',
      link: '/services'
    }
  ];

  const numSlides = slides.length;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % numSlides);
    }, 5000); 
    return () => clearInterval(timer);
  }, [numSlides]);

  return (
    <div className="relative w-full h-[250px] md:h-[300px] lg:h-[350px] bg-[#041424] overflow-hidden font-sans shadow-sm">
      
      {/* Slides Container */}
      <div 
        className="absolute inset-0 z-30 flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide) => (
          <div 
            key={slide.id}
            className="w-full h-full flex-shrink-0 relative flex items-center overflow-hidden"
          >
            {/* 1. Right Side: The Slide Image positioned to show the subject */}
            <div className="absolute top-0 right-0 w-[75%] sm:w-[70%] lg:w-[65%] h-full z-0">
              <img
                src={slide.src}
                alt={slide.title}
                className="w-full h-full object-cover object-center"
              />
            </div>

            {/* 2. Cyan Accent Line (Diagonal) */}
            <div className="absolute top-0 left-0 w-full h-full bg-[#0EA5E9] z-10 hero-clip-accent"></div>

            {/* 3. Main Dark Blue Diagonal Background (Website Theme) */}
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
            
            {/* 4. Left Content (Text & Button) */}
            <div className="relative z-30 w-[72%] sm:w-[65%] lg:w-[55%] px-5 sm:px-8 lg:px-12 xl:px-16 flex flex-col justify-center h-full">
              <h1 className="font-display text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2 lg:mb-4 leading-tight drop-shadow-md">
                {slide.title}
              </h1>
              
              <p className="text-gray-300 text-xs md:text-sm lg:text-base mb-3 lg:mb-6 max-w-md leading-relaxed hidden sm:block">
                {slide.desc}
              </p>
              
              <Link 
                to={slide.link} 
                className="inline-block bg-[#0EA5E9] hover:bg-[#0284C7] text-white font-bold py-1.5 px-4 sm:py-2 sm:px-6 lg:py-2.5 lg:px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-[0_4px_15px_rgba(14,165,233,0.3)] text-xs lg:text-sm w-max"
              >
                {slide.btnText}
              </Link>
            </div>

          </div>
        ))}
      </div>

      {/* Specific Square Pagination Dots (Bottom Left inside the Blue area) */}
      <div className="absolute bottom-3 left-5 lg:bottom-5 lg:left-12 xl:left-16 z-40 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-1.5 transition-all duration-300 ${index === currentSlide ? 'w-4 bg-[#0EA5E9]' : 'w-1.5 bg-slate-600 hover:bg-slate-400'}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

    </div>
  );
};

export default HeroSlider;
