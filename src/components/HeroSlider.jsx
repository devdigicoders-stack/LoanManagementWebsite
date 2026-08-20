import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    { 
      id: 1, 
      src: '/home_loan.jpg', 
      title: 'Build Your Dream Home', 
      subtitle: 'NuoG Home & Property Loans',
      desc: 'Get fast approval and competitive interest rates for your new home or property extension.',
      btnText: 'Apply Now',
      link: '/services/home-loan'
    },
    { 
      id: 2, 
      src: '/car_loan.jpg', 
      title: 'Drive Your Success', 
      subtitle: 'New & Used Car Loans',
      desc: 'Upgrade your vehicle with flexible repayment options and minimal documentation.',
      btnText: 'Know More',
      link: '/services/car-loan'
    },
    { 
      id: 3, 
      src: '/financial_loan.jpg', 
      title: 'Empower Your Business', 
      subtitle: 'SME & MSME Loans',
      desc: 'Fuel your business growth with our tailored financial solutions designed for entrepreneurs.',
      btnText: 'Explore Options',
      link: '/services/sme-msme-loan'
    },
    { 
      id: 4, 
      src: '/health_loan.jpg', 
      title: 'Your Health, Our Priority', 
      subtitle: 'Medical & Emergency Loans',
      desc: 'Instant financial support for medical emergencies so you can focus on what matters most.',
      btnText: 'Get Assistance',
      link: '/services'
    },
    { 
      id: 5, 
      src: 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=1600&q=80', 
      title: 'Hit the Road Faster', 
      subtitle: 'Two Wheeler Loans',
      desc: 'Finance your dream bike or scooter with minimal down payment and easy EMIs.',
      btnText: 'Apply Now',
      link: '/services/two-wheeler'
    },
    { 
      id: 6, 
      src: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=80', 
      title: 'Unlock Your Property’s Value', 
      subtitle: 'Loan Against Property',
      desc: 'Leverage your residential or commercial property to meet big financial goals.',
      btnText: 'Know More',
      link: '/services/loan-against-property'
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
    <div className="relative w-full h-[450px] md:h-[550px] bg-[#050806] overflow-hidden group">
      
      {/* Slides Container */}
      {slides.map((slide, index) => {
        const isActive = index === currentSlide;
        
        return (
          <div 
            key={slide.id}
            className={`absolute inset-0 w-full h-full transition-all duration-1000 ease-in-out ${isActive ? 'opacity-100 z-20 scale-100' : 'opacity-0 z-0 scale-105'}`}
          >
            {/* Background Image */}
            <div 
              className="absolute inset-0 w-full h-full"
              style={{
                backgroundImage: `url('${slide.src}')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            ></div>
            
            {/* Dark Gradient Overlay for perfect readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#030706] via-[#030706]/80 to-transparent"></div>
            {/* Mobile bottom gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#030706] via-transparent to-transparent md:hidden"></div>

            {/* Text Content */}
            <div className="relative z-30 w-full h-full max-w-7xl mx-auto px-6 md:px-10 flex flex-col justify-center">
              <div className="max-w-2xl mt-8 md:mt-0">
                <p className="text-[#1cf200] font-bold tracking-wider uppercase text-sm md:text-base mb-3 drop-shadow">
                  {slide.subtitle}
                </p>
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 leading-tight drop-shadow-lg">
                  {slide.title}
                </h1>
                <p className="text-gray-300 text-sm md:text-lg mb-8 max-w-xl drop-shadow">
                  {slide.desc}
                </p>
                <div>
                  <Link to={slide.link} className="inline-block bg-[#1cf200] hover:bg-[#5bc116] text-black font-bold py-3 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-[0_4px_15px_rgba(28,242,0,0.3)]">
                    {slide.btnText}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        );
      })}

      {/* Manual Navigation Arrows (Visible on hover) */}
      <button 
        onClick={(e) => {
          e.stopPropagation();
          setCurrentSlide((prev) => (prev - 1 + numSlides) % numSlides);
        }}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-40 w-12 h-12 bg-[#0b150e]/60 hover:bg-[#1cf200] text-white hover:text-black rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-sm"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
      </button>

      <button 
        onClick={(e) => {
          e.stopPropagation();
          setCurrentSlide((prev) => (prev + 1) % numSlides);
        }}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-40 w-12 h-12 bg-[#0b150e]/60 hover:bg-[#1cf200] text-white hover:text-black rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-sm"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
      </button>

      {/* Custom Pagination Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-40 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={(e) => {
              e.stopPropagation();
              setCurrentSlide(index);
            }}
            className={`h-2 transition-all duration-300 rounded-full shadow-lg ${index === currentSlide ? 'w-10 bg-[#1cf200]' : 'w-2 bg-gray-500 hover:bg-white'}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

    </div>
  );
};

export default HeroSlider;
