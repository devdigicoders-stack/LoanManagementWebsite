import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const HomeCTA = () => {
  return (
    <section className="w-full bg-[#0a0f0a] py-20 px-6 md:px-10">
      <div className="max-w-5xl mx-auto bg-gradient-to-r from-[#112211] to-[#1a331a] rounded-[40px] p-10 md:p-16 text-center border border-[#2d5a27] shadow-2xl relative overflow-hidden">
        
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute -top-24 -left-24 w-64 h-64 bg-[#71d924] rounded-full mix-blend-screen filter blur-[120px] opacity-20"></div>
          <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-[#71d924] rounded-full mix-blend-screen filter blur-[120px] opacity-20"></div>
        </div>

        <div className="relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Your Property. <br className="md:hidden" />
            <span className="text-[#7ce225]">Your Financial Goals.</span>
          </h2>
          
          <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto mb-10 leading-relaxed">
            A property can represent both a place to live and a valuable financial asset. With the right information and responsible planning, you can explore financial solutions that align with your long-term goals.
          </p>

          <Link to="/about" className="inline-flex items-center justify-center gap-3 bg-[#7ce225] hover:bg-[#68c61e] text-black font-bold py-4 px-10 rounded-xl shadow-[0_0_20px_rgba(124,226,37,0.3)] transition-all duration-300 hover:scale-105 text-lg">
            Explore Property Finance Today <ArrowRight size={22} />
          </Link>
        </div>

      </div>
    </section>
  );
};

export default HomeCTA;
