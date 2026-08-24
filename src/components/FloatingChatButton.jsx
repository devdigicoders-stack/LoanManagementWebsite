import React, { useState } from 'react';
import { MessageSquareText, X } from 'lucide-react';

const FloatingChatButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="fixed bottom-20 right-6 z-50">
        {/* Fixed Floating Button */}
        <button 
          onClick={() => setIsModalOpen(true)}
          className="bg-[#034488] hover:bg-[#0284C7] text-white hover:text-black p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 flex items-center justify-center border-2 border-transparent hover:border-black"
          aria-label="Open Chat"
        >
          <MessageSquareText size={32} />
          {/* Notification Dot */}
          <span className="absolute top-0 right-0 w-3 h-3 bg-red-500 rounded-full border-2 border-white"></span>
        </button>
      </div>

      {/* WhatsApp QR Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm transition-opacity">
          <div className="bg-white rounded-3xl w-full max-w-2xl overflow-y-auto max-h-[90vh] relative shadow-2xl animate-fade-in-up">
            
            {/* Close Button */}
            <button 
              onClick={() => setIsModalOpen(false)}
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
                  <MessageSquareText size={24} />
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
                  <MessageSquareText size={24} />
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

export default FloatingChatButton;
