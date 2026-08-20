import React from 'react';

const FloatingAppButtons = () => {
  return (
    <div className="fixed left-0 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-4 pl-3">
      {/* Apple App Store */}
      <a 
        href="#"
        className="group relative flex items-center justify-center transition-all duration-300 hover:scale-110 hover:translate-x-1"
        title="Download on App Store"
      >
        <img src="/apple-logo.png" alt="Apple Store" className="w-10 h-10 object-contain drop-shadow-lg" />
      </a>

      {/* Google Play Store */}
      <a 
        href="#"
        className="group relative flex items-center justify-center transition-all duration-300 hover:scale-110 hover:translate-x-1"
        title="Get it on Google Play"
      >
        <img src="/google-play-logo.png" alt="Google Play" className="w-10 h-10 object-contain drop-shadow-lg scale-[1.15]" />
      </a>
    </div>
  );
};

export default FloatingAppButtons;
