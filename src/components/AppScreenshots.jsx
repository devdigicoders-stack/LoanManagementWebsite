import React from 'react';

const AppScreenshots = () => {
  return (
    <section className="w-full bg-[#fcfcfc] py-20 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            App Screenshots
          </h2>
        </div>

        <div className="flex flex-nowrap overflow-x-auto justify-start md:justify-center gap-6 pb-8 snap-x">
          {[1, 2, 3, 4, 5].map((item) => (
            <div key={item} className="shrink-0 snap-center relative w-[220px] h-[450px] bg-black rounded-[2rem] border-[6px] border-gray-900 shadow-xl flex flex-col overflow-hidden">
              {/* Notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-5 bg-gray-900 rounded-b-xl z-20"></div>
              
              {/* Screen Content Placeholder */}
              <div className="flex-1 bg-white w-full flex flex-col pt-10 px-4">
                <div className="w-1/2 h-4 bg-gray-200 rounded mb-6"></div>
                <div className="w-full h-24 bg-[#f0fbf0] rounded-xl mb-4"></div>
                <div className="w-full h-12 bg-gray-100 rounded-lg mb-2"></div>
                <div className="w-full h-12 bg-gray-100 rounded-lg mb-2"></div>
                <div className="w-full h-12 bg-gray-100 rounded-lg mb-2"></div>
                <div className="w-full h-12 bg-gray-100 rounded-lg mb-2"></div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Bottom Banner */}
        <div className="mt-10 w-full bg-[#FDFBF7] rounded-[2rem] py-12 px-6 text-center shadow-2xl">
          <h3 className="text-2xl font-bold text-slate-900 mb-6">
            Download the App and Simplify<br />Your Financial Journey
          </h3>
          <div className="flex items-center justify-center gap-4">
            <button className="transition-transform hover:scale-105">
              <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" className="h-10" />
            </button>
            <button className="transition-transform hover:scale-105">
              <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="App Store" className="h-10" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppScreenshots;
