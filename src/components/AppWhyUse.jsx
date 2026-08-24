import React from 'react';
import { Clock, MousePointer2, ThumbsUp, Home, MessageCircleHeart } from 'lucide-react';

const AppWhyUse = () => {
  const reasons = [
    {
      icon: <Clock size={24} strokeWidth={1.5} />,
      title: "Anytime Access",
      desc: "Access supported services and information whenever you need them."
    },
    {
      icon: <MousePointer2 size={24} strokeWidth={1.5} />,
      title: "Digital Convenience",
      desc: "Reduce unnecessary paperwork and manage supported activities digitally."
    },
    {
      icon: <ThumbsUp size={24} strokeWidth={1.5} />,
      title: "User-Friendly Design",
      desc: "Enjoy a simple interface designed for easy navigation."
    },
    {
      icon: <Home size={24} strokeWidth={1.5} />,
      title: "Property-Focused Services",
      desc: "Explore financial information related to your property and financial goals."
    },
    {
      icon: <MessageCircleHeart size={24} strokeWidth={1.5} />,
      title: "Better Communication",
      desc: "Stay connected through notifications and available customer support channels."
    }
 ;

  return (
    <section className="w-full bg-[#fcfcfc] py-24 px-6 md:px-10 border-b border-gray-100">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-start">
        
        {/* Left Content */}
        <div className="w-full lg:w-1/3 sticky top-32">
          <div className="inline-block bg-[#E0F2FE] text-[#0369A1] rounded-full px-4 py-1 text-sm font-bold tracking-wider mb-6 uppercase">
            Why Use The HAUS NUO-Pay App?
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Financial Information <br className="hidden lg:block"/>
            <span className="text-[#0EA5E9]">Made Convenient</span>
          </h2>
        </div>

        {/* Right Content - List */}
        <div className="w-full lg:w-2/3">
          <div className="space-y-6">
            {reasons.map((item, index) => (
              <div key={index} className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm flex flex-col md:flex-row gap-6 items-start hover:border-[#0EA5E9] hover:shadow-md transition-all group">
                <div className="w-16 h-16 bg-[#F8FAFC] border border-[#E0F2FE] text-[#0EA5E9] rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-[#0EA5E9] group-hover:text-white transition-colors">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#0EA5E9] transition-colors">{item.title}</h3>
                  <p className="text-gray-500 text-[15px] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default AppWhyUse;
