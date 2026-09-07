import React from 'react';
import { Smartphone, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const HomeCTA = () => {
  return (
    <section className="w-full bg-transparent py-24 px-6 md:px-10 overflow-hidden relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#0EA5E9]/10 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="w-full px-6 lg:px-12 xl:px-16 mx-auto bg-white border border-[#BAE6FD] rounded-[3rem] p-10 md:p-16 lg:p-20 shadow-xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-12">
        
        {/* Decorative elements */}
        <div className="absolute inset-0 w-full h-full pointer-events-none">
          <div className="absolute -top-32 -left-32 w-80 h-80 bg-[#0EA5E9] rounded-full blur-[120px] opacity-10"></div>
          <div className="absolute -bottom-32 -right-32 w-80 h-80 bg-[#38BDF8] rounded-full blur-[120px] opacity-10"></div>
        </div>

        <div className="relative z-10 md:w-3/5 mb-10 md:mb-0">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-[#F0F9FF] flex items-center justify-center border border-[#BAE6FD]">
              <Smartphone className="text-[#0EA5E9]" size={24} />
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 leading-[1.1] tracking-tight">
              Manage Your Loans <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0EA5E9] to-[#0284C7]">On The Go</span>
            </h2>
          </div>
          
          <p className="text-slate-600 text-lg md:text-xl max-w-xl mb-10 leading-relaxed font-medium">
            Download the HAUS NUO-Pay app to easily track your EMI payments, apply for new loans, and manage your account anytime, anywhere.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 mb-12">
            <div className="flex items-center gap-3 text-slate-700">
              <CheckCircle className="text-[#0EA5E9]" size={24} />
              <span className="font-semibold text-[15px]">Instant Approvals</span>
            </div>
            <div className="flex items-center gap-3 text-slate-700">
              <CheckCircle className="text-[#0EA5E9]" size={24} />
              <span className="font-semibold text-[15px]">Easy EMI Tracking</span>
            </div>
            <div className="flex items-center gap-3 text-slate-700">
              <CheckCircle className="text-[#0EA5E9]" size={24} />
              <span className="font-semibold text-[15px]">24/7 Support</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-5">
            <Link to="/download-app" className="bg-[#0EA5E9] hover:bg-[#0284C7] text-white font-bold py-4 px-8 rounded-2xl transition-transform transform hover:-translate-y-1 hover:shadow-xl shadow-[0_4px_20px_rgba(14,165,233,0.3)] flex items-center gap-3 group">
              <svg className="w-7 h-7 transition-transform group-hover:scale-110" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.523 15.3414c-.0352-2.7303 2.2227-4.0416 2.327-4.1033-1.2612-1.8492-3.2185-2.1158-3.9213-2.148-1.666-.171-3.2536.9855-4.105.9855-.8516 0-2.1558-1.0028-3.5284-.9753-1.7828.0267-3.4243 1.0366-4.3418 2.6393-1.854 3.23-.4734 8.01 1.3323 10.6385.8824 1.2828 1.9168 2.73 3.2662 2.678 1.2983-.053 1.8028-.8414 3.272-.8414 1.469 0 1.9218.8414 3.2986.8155 1.4287-.027 2.33-1.3094 3.208-2.5936 1.0182-1.4925 1.4363-2.94 1.4552-3.0163-.0333-.012-2.8277-1.085-2.8628-4.0789zM15.115 6.3045c.7126-.867 1.1925-2.072 1.0617-3.2713-1.031.042-2.2858.6874-3.02 1.543-.6583.754-1.233 1.986-1.0772 3.167 1.1492.089 2.3218-.57 3.0355-1.4387z" />
              </svg>
              <div className="flex flex-col text-left">
                <span className="text-[10px] font-medium leading-none text-blue-100">Download on the</span>
                <span className="text-[15px] font-black leading-tight">App Store</span>
              </div>
            </Link>
            
            <Link to="/download-app" className="bg-white hover:bg-slate-50 border border-slate-200 text-slate-900 font-bold py-4 px-8 rounded-2xl transition-transform transform hover:-translate-y-1 hover:shadow-xl shadow-sm flex items-center gap-3 group">
              <svg className="w-7 h-7 transition-transform group-hover:scale-110" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3.195 21.056c-.328-.323-.5-.778-.5-1.332V4.276c0-.554.172-1.01.5-1.332L11.5 12l-8.305 9.056z" fill="#00f076"/>
                <path d="M15.719 16.273l-4.219-4.273 4.219-4.273 4.962 2.863c1.171.677 1.171 1.776 0 2.453l-4.962 2.863z" fill="#ffc900"/>
                <path d="M3.195 21.056l12.524-7.276-4.219-4.273L3.195 21.056z" fill="#ff3a44"/>
                <path d="M3.195 2.944l12.524 7.276-4.219 4.273L3.195 2.944z" fill="#00a0ff"/>
              </svg>
              <div className="flex flex-col text-left">
                <span className="text-[10px] font-medium leading-none text-slate-500">GET IT ON</span>
                <span className="text-[15px] font-black leading-tight text-slate-900">Google Play</span>
              </div>
            </Link>
          </div>
        </div>
        
        {/* Mockup area */}
        <div className="relative z-10 md:w-2/5 flex justify-center mt-12 md:mt-0">
          <div className="w-[280px] h-[520px] border-[8px] border-slate-200 rounded-[3rem] bg-gradient-to-b from-[#F0F9FF] to-white relative shadow-2xl flex items-center justify-center transform -rotate-6 hover:rotate-0 transition-all duration-700">
            {/* Phone Notch */}
            <div className="absolute top-0 w-32 h-6 bg-slate-200 rounded-b-xl z-20"></div>
            <div className="text-center px-6 relative z-10">
              <div className="w-16 h-16 bg-[#0EA5E9] text-white rounded-2xl mx-auto mb-6 flex items-center justify-center shadow-lg shadow-[#0EA5E9]/30 transform rotate-12">
                 <Smartphone size={32} />
              </div>
              <span className="text-slate-900 font-black text-2xl tracking-wide leading-tight">HAUS<br/><span className="text-[#0EA5E9]">NUO-Pay</span><br/>App</span>
            </div>
            
            {/* Glass reflection */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/30 to-transparent rounded-[2.5rem] pointer-events-none"></div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default HomeCTA;
