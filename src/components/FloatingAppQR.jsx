import React, { useState } from 'react';
import { QrCode, X, Smartphone, Users } from 'lucide-react';

const FloatingAppQR = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-24 right-6 md:right-8 z-50 bg-[#0284C7] hover:bg-[#0EA5E9] text-slate-900 w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-transform hover:scale-110"
        title="Download Apps"
      >
        <QrCode size={26} className="animate-pulse" />
      </button>

      {/* Modal Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl w-full max-w-2xl overflow-hidden relative shadow-2xl animate-fade-in-up">
            
            {/* Close Button */}
            <button 
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-red-500 bg-gray-100 hover:bg-red-50 rounded-full p-2 transition-colors z-10"
            >
              <X size={20} />
            </button>

            <div className="p-8 md:p-10 text-center border-b border-gray-100">
              <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-2">
                Download <span className="text-[#0EA5E9]">HAUS NUO-Pay</span> Apps
              </h2>
              <p className="text-gray-500 text-sm md:text-base max-w-md mx-auto">
                Scan the QR code below or tap to download our apps directly from the Google Play Store.
              </p>
            </div>

            <div className="flex flex-col md:flex-row divide-y md:divide-y-0 md:divide-x divide-gray-100 bg-[#f8fcf5]">
              
              {/* User App Section */}
              <div className="flex-1 p-8 flex flex-col items-center text-center group hover:bg-white transition-colors cursor-pointer">
                <div className="w-12 h-12 bg-[#eaf7e3] text-[#0EA5E9] rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Smartphone size={24} />
                </div>
                <h3 className="font-bold text-gray-900 text-lg mb-1">Customer App</h3>
                <p className="text-gray-500 text-[13px] mb-6">Manage loans, EMIs & more</p>
                
                <div className="bg-white p-3 rounded-2xl shadow-sm border border-gray-200 mb-6">
                  {/* Placeholder QR for User App */}
                  <img 
                    src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://play.google.com/store/apps/details?id=com.hausnuopay.customer" 
                    alt="User App QR Code" 
                    className="w-32 h-32 object-contain"
                  />
                </div>

                <a 
                  href="https://play.google.com/store/apps/details?id=com.hausnuopay.customer" 
                  target="_blank" 
                  rel="noreferrer"
                  className="bg-black hover:bg-gray-800 text-slate-900 text-sm font-semibold py-2 px-6 rounded-full flex items-center gap-2 transition-colors w-full justify-center"
                >
                  <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" className="h-6" />
                </a>
              </div>

              {/* Employee App Section */}
              <div className="flex-1 p-8 flex flex-col items-center text-center group hover:bg-white transition-colors cursor-pointer">
                <div className="w-12 h-12 bg-gray-100 text-gray-700 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Users size={24} />
                </div>
                <h3 className="font-bold text-gray-900 text-lg mb-1">Employee App</h3>
                <p className="text-gray-500 text-[13px] mb-6">Internal portal for NuoG Staff</p>
                
                <div className="bg-white p-3 rounded-2xl shadow-sm border border-gray-200 mb-6">
                  {/* Placeholder QR for Employee App */}
                  <img 
                    src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://play.google.com/store/apps/details?id=com.hausnuopay.employee" 
                    alt="Employee App QR Code" 
                    className="w-32 h-32 object-contain"
                  />
                </div>

                <a 
                  href="https://play.google.com/store/apps/details?id=com.hausnuopay.employee" 
                  target="_blank" 
                  rel="noreferrer"
                  className="bg-black hover:bg-gray-800 text-slate-900 text-sm font-semibold py-2 px-6 rounded-full flex items-center gap-2 transition-colors w-full justify-center"
                >
                  <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" className="h-6" />
                </a>
              </div>

            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FloatingAppQR;
