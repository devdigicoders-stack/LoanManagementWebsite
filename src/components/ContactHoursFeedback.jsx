import React from 'react';
import { Clock, MessageSquareHeart, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ContactHoursFeedback = () => {
  return (
    <section className="w-full bg-[#fcfcfc] py-20 px-6 md:px-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Business Hours */}
        <div className="bg-white border border-gray-100 rounded-3xl p-8 md:p-10 shadow-sm flex flex-col hover:shadow-md transition-shadow">
          <div className="inline-flex items-center gap-2 text-gray-500 mb-6">
            <span className="text-sm font-bold tracking-widest uppercase">Business Hours</span>
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Our Support <span className="text-[#0EA5E9]">Availability</span>
          </h2>
          
          <div className="flex-grow space-y-6">
            <div className="flex items-start gap-4">
              <Clock className="text-[#0EA5E9] shrink-0 mt-1" size={24} />
              <div>
                <p className="font-bold text-gray-900 text-[16px] mb-1">Monday – Saturday</p>
                <p className="text-[#0EA5E9] font-bold text-lg">9:00 AM – 6:00 PM</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-6 shrink-0"></div>
              <div>
                <p className="font-bold text-gray-900 text-[16px] mb-1">Sunday & Public Holidays</p>
                <p className="text-gray-500 font-bold">Closed</p>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-gray-100">
            <p className="text-gray-500 text-[13px] leading-relaxed">
              Digital services and website information may remain accessible outside support hours.
            </p>
          </div>
        </div>

        {/* Customer Feedback */}
        <div className="bg-[#F8FAFC] border border-[#E0F2FE] rounded-3xl p-8 md:p-10 shadow-sm flex flex-col hover:shadow-md transition-shadow">
          <div className="inline-flex items-center gap-2 text-[#0369A1] mb-6">
            <span className="text-sm font-bold tracking-widest uppercase">Customer Feedback</span>
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Your Feedback <span className="text-[#0EA5E9]">Matters</span>
          </h2>
          
          <div className="flex-grow space-y-4">
            <p className="text-gray-700 text-[15px] leading-relaxed font-medium">
              We continuously work to improve our services and digital experience.
            </p>
            <p className="text-gray-600 text-[14px] leading-relaxed">
              If you have a suggestion, concern or feedback about your experience with NGM Housing Payments Limited, we encourage you to share it with us.
            </p>
            <p className="text-gray-600 text-[14px] leading-relaxed">
              Your feedback helps us understand what is working well and where we can improve.
            </p>
          </div>

          <div className="mt-8">
            <Link 
              to="/feedback" 
              className="inline-flex items-center gap-2 bg-[#0EA5E9] text-slate-900 px-6 py-3 rounded-full font-bold hover:bg-[#0369A1] transition-colors group"
            >
              <MessageSquareHeart size={18} />
              Share Your Feedback
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ContactHoursFeedback;
