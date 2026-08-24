import React from 'react';
import { Smartphone, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const HomeCTA = () => {
  return (
    <section className="w-full bg-[#FDFBF7] py-20 px-6 md:px-10">
      <div className="max-w-6xl mx-auto  rounded-[40px] p-10 md:p-16 border border-[#BAE6FD] shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between">
        
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute -top-24 -left-24 w-64 h-64 bg-[#0369A1] rounded-full mix-blend-screen filter blur-[120px] opacity-20"></div>
          <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-[#0369A1] rounded-full mix-blend-screen filter blur-[120px] opacity-20"></div>
        </div>

        <div className="relative z-10 md:w-2/3 mb-10 md:mb-0">
          <div className="flex items-center gap-3 mb-4">
            <Smartphone className="text-[#0284C7]" size={32} />
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 leading-tight">
              Manage Your Loans <br />
              <span className="text-transparent bg-clip-text ">On The Go</span>
            </h2>
          </div>
          
          <p className="text-slate-700 text-lg md:text-xl max-w-2xl mb-8 leading-relaxed">
            Download the HAUS NUO-Pay app to easily track your EMI payments, apply for new loans, and manage your account anytime, anywhere.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <div className="flex items-center gap-2 text-slate-700">
              <CheckCircle className="text-[#0EA5E9]" size={20} />
              <span>Instant Approvals</span>
            </div>
            <div className="flex items-center gap-2 text-slate-700">
              <CheckCircle className="text-[#0EA5E9]" size={20} />
              <span>Easy EMI Tracking</span>
            </div>
            <div className="flex items-center gap-2 text-slate-700">
              <CheckCircle className="text-[#0EA5E9]" size={20} />
              <span>24/7 Support</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            <Link to="/download-app" className="bg-white hover:bg-gray-100 text-black font-bold py-3 px-6 rounded-lg transition-colors flex items-center gap-2">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.523 15.3414c-.0352-2.7303 2.2227-4.0416 2.327-4.1033-1.2612-1.8492-3.2185-2.1158-3.9213-2.148-1.666-.171-3.2536.9855-4.105.9855-.8516 0-2.1558-1.0028-3.5284-.9753-1.7828.0267-3.4243 1.0366-4.3418 2.6393-1.854 3.23-.4734 8.01 1.3323 10.6385.8824 1.2828 1.9168 2.73 3.2662 2.678 1.2983-.053 1.8028-.8414 3.272-.8414 1.469 0 1.9218.8414 3.2986.8155 1.4287-.027 2.33-1.3094 3.208-2.5936 1.0182-1.4925 1.4363-2.94 1.4552-3.0163-.0333-.012-2.8277-1.085-2.8628-4.0789zM15.115 6.3045c.7126-.867 1.1925-2.072 1.0617-3.2713-1.031.042-2.2858.6874-3.02 1.543-.6583.754-1.233 1.986-1.0772 3.167 1.1492.089 2.3218-.57 3.0355-1.4387z" />
              </svg>
              App Store
            </Link>
            <Link to="/download-app" className="bg-white hover:bg-gray-100 text-black font-bold py-3 px-6 rounded-lg transition-colors flex items-center gap-2">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.523 15.3414c-.0352-2.7303 2.2227-4.0416 2.327-4.1033-1.2612-1.8492-3.2185-2.1158-3.9213-2.148-1.666-.171-3.2536.9855-4.105.9855-.8516 0-2.1558-1.0028-3.5284-.9753-1.7828.0267-3.4243 1.0366-4.3418 2.6393-1.854 3.23-.4734 8.01 1.3323 10.6385.8824 1.2828 1.9168 2.73 3.2662 2.678 1.2983-.053 1.8028-.8414 3.272-.8414 1.469 0 1.9218.8414 3.2986.8155 1.4287-.027 2.33-1.3094 3.208-2.5936 1.0182-1.4925 1.4363-2.94 1.4552-3.0163-.0333-.012-2.8277-1.085-2.8628-4.0789zM15.115 6.3045c.7126-.867 1.1925-2.072 1.0617-3.2713-1.031.042-2.2858.6874-3.02 1.543-.6583.754-1.233 1.986-1.0772 3.167 1.1492.089 2.3218-.57 3.0355-1.4387z" className="hidden"/>
                <path d="M3.195 21.056c-.328-.323-.5-.778-.5-1.332V4.276c0-.554.172-1.01.5-1.332L11.5 12l-8.305 9.056z" fill="#00f076"/>
                <path d="M15.719 16.273l-4.219-4.273 4.219-4.273 4.962 2.863c1.171.677 1.171 1.776 0 2.453l-4.962 2.863z" fill="#ffc900"/>
                <path d="M3.195 21.056l12.524-7.276-4.219-4.273L3.195 21.056z" fill="#ff3a44"/>
                <path d="M3.195 2.944l12.524 7.276-4.219 4.273L3.195 2.944z" fill="#00a0ff"/>
              </svg>
              Google Play
            </Link>
          </div>
        </div>
        
        {/* Mockup area (simulated) */}
        <div className="relative z-10 md:w-1/3 flex justify-center mt-8 md:mt-0">
          <div className="w-48 h-96 border-4 border-gray-800 rounded-[2.5rem] bg-[#F0F9FF] relative overflow-hidden shadow-2xl flex items-center justify-center">
             <span className="text-[#0EA5E9] font-bold text-2xl">HAUS NUO-Pay App</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default HomeCTA;
