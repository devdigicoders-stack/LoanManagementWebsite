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
          className="bg-[#034488] hover:bg-[#1cf200] text-white hover:text-black p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 flex items-center justify-center border-2 border-transparent hover:border-black"
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
          <div className="bg-white rounded-lg shadow-2xl w-full max-w-2xl relative animate-in fade-in zoom-in duration-200">
            {/* Modal Header */}
            <div className="flex justify-between items-start p-6 border-b border-gray-100">
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-[#034488] mb-1">
                  Welcome to a hassle-free loan journey with NuoG!
                </h3>
                <p className="text-gray-500 text-sm">
                  Tap the link below or scan the QR to connect with us on WhatsApp.
                </p>
              </div>
              <button 
                onClick={() => setIsModalOpen(false)}
                className="text-gray-400 hover:text-red-500 transition-colors p-1"
              >
                <X size={24} />
              </button>
            </div>
            
            {/* Modal Body */}
            <div className="p-8 flex flex-col md:flex-row gap-8 justify-center items-center bg-blue-50/30 rounded-b-lg">
              
              {/* QR 1 */}
              <div className="flex flex-col items-center bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
                <h4 className="font-bold text-lg mb-4 text-center">
                  <span className="text-[#034488]">NuoG</span><span className="text-red-600">One</span>
                </h4>
                <div className="w-44 h-44 bg-white p-2 border border-gray-200 rounded-lg">
                  <img src={`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https://wa.me/919876543210?text=Hi%20NuoG`} alt="NuoG App QR" className="w-full h-full object-contain" />
                </div>
              </div>

              {/* QR 2 */}
              <div className="flex flex-col items-center bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
                <h4 className="font-bold text-lg mb-4 text-center">
                  <span className="text-[#034488]">NuoG</span><span className="text-red-600">One</span> <span className="text-[#034488]">Chatbot</span>
                </h4>
                <div className="w-44 h-44 bg-white p-2 border border-gray-200 rounded-lg">
                  <img src={`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https://wa.me/919876543210?text=Hi%20Chatbot`} alt="NuoG Chatbot QR" className="w-full h-full object-contain" />
                </div>
              </div>

            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FloatingChatButton;
