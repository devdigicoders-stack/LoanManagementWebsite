import { Apple, Play, QrCode } from 'lucide-react';

const DownloadApp = () => {
  return (
    <section className="w-full bg-white py-16 px-6 md:px-10">
      <div className="max-w-7xl mx-auto rounded-[40px] relative overflow-hidden bg-[#F8FAFC] flex flex-col lg:flex-row shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-[#e8f5e9]">
        
        {/* Background Decorative Shapes */}
        <div className="absolute inset-0 w-full h-full pointer-events-none">
          <svg className="absolute top-0 right-0 h-full w-full lg:w-[70%]" preserveAspectRatio="none" viewBox="0 0 100 100">
            {/* Light Green Diagonal */}
            <polygon points="35,100 100,100 100,0 75,0" fill="#68d617" />
            {/* Darker Green Overlapping Diagonal */}
            <polygon points="65,100 100,100 100,35" fill="#4ea50d" opacity="0.9" />
          </svg>
        </div>
        
        {/* Left Content */}
        <div className="lg:w-1/2 p-8 md:p-12 lg:px-14 lg:py-12 flex flex-col justify-center relative z-10">
          <div className="inline-block bg-[#e4f6db] text-[#0EA5E9] rounded-full px-4 py-1.5 text-[11px] font-bold tracking-wider mb-6 w-max">
            DOWNLOAD OUR APP
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-[40px] font-bold text-black mb-6 leading-[1.15]">
            Manage Your Payments <br />
            <span className="text-[#0EA5E9]">On The Go</span>
          </h2>
          
          <p className="text-gray-500 text-[14px] md:text-[15px] leading-relaxed mb-10 max-w-md">
            Download the NGM App and enjoy a smooth, secure and convenient payment experience.
          </p>

          <div className="flex flex-wrap lg:flex-nowrap items-center gap-3 lg:gap-4">
            
            {/* Google Play Button */}
            <button className="bg-black hover:bg-gray-900 text-slate-900 rounded-xl px-4 py-2 flex items-center gap-3 transition-transform hover:scale-105 duration-300">
              <div className="text-slate-900 flex items-center justify-center w-6 h-6">
                <svg viewBox="0 0 512 512" fill="currentColor" className="w-full h-full">
                  <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"></path>
                </svg>
              </div>
              <div className="text-left">
                <div className="text-[9px] font-medium uppercase tracking-widest text-slate-700">GET IT ON</div>
                <div className="text-[15px] font-semibold leading-tight tracking-wide">Google Play</div>
              </div>
            </button>
            
            {/* App Store Button */}
            <button className="bg-black hover:bg-gray-900 text-slate-900 rounded-xl px-4 py-2 flex items-center gap-3 transition-transform hover:scale-105 duration-300">
              <div className="text-slate-900 flex items-center justify-center w-6 h-6 mb-1">
                <svg viewBox="0 0 384 512" fill="currentColor" className="w-full h-full">
                  <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"></path>
                </svg>
              </div>
              <div className="text-left">
                <div className="text-[9px] font-medium uppercase tracking-widest text-slate-700">Download on the</div>
                <div className="text-[15px] font-semibold leading-tight tracking-wide">App Store</div>
              </div>
            </button>
            
            {/* QR Code */}
            <div className="hidden sm:flex bg-white p-1.5 rounded-xl shadow-lg border border-gray-100 items-center justify-center relative ml-1 lg:ml-2 group cursor-pointer transition-transform hover:scale-105 duration-300 shrink-0">
              <QrCode size={44} strokeWidth={1.5} className="text-black" />
              {/* Little green icon in center of QR */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white p-0.5 rounded-[2px]">
                  <div className="w-3 h-3 bg-[#0EA5E9] rounded-[2px]"></div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Right Content - Phone Mockup */}
        <div className="lg:w-1/2 relative min-h-[350px] lg:min-h-[400px] flex items-end justify-center lg:justify-end z-10 pt-10 lg:pt-0 lg:pr-16">
          <img 
            src="/home/phone.png" 
            alt="NGM Mobile App" 
            className="w-auto h-[350px] md:h-[400px] lg:h-[480px] object-contain object-bottom transform -rotate-6 lg:-rotate-12 translate-y-6 drop-shadow-2xl"
          />
        </div>

      </div>
    </section>
  );
};

export default DownloadApp;
