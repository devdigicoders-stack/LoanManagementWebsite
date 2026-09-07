import React from 'react';
import { Link } from 'react-router-dom';
import { Briefcase, MousePointerClick, Smartphone, PhoneCall, MapPin, MessageSquareWarning } from 'lucide-react';

const QuickActions = ({ onPayEmiClick }) => {
  const actions = [
    {
      icon: Briefcase,
      title: "Our Products",
      subtitle: "& Services",
      link: "/services"
    },
    {
      icon: MousePointerClick,
      title: "Apply",
      subtitle: "Loan Online",
      link: "/services"
    },
    {
      icon: Smartphone,
      title: "Pay EMI",
      subtitle: "Online",
      link: "#",
      onClick: (e) => {
        e.preventDefault();
        if (onPayEmiClick) onPayEmiClick();
      }
    },
    {
      icon: PhoneCall,
      title: "Request",
      subtitle: "a Call Back",
      link: "/contact"
    },
    {
      icon: MapPin,
      title: "Find",
      subtitle: "Nearest Branch",
      link: "/contact"
    },
    {
      icon: MessageSquareWarning,
      title: "Share Your",
      subtitle: "Grievance",
      link: "/contact"
    }
 ];

  return (
    <div className="w-full flex flex-col z-40 bg-white border-b border-gray-200">
      {/* Marquee Section */}
      <div className="w-full bg-[#fff5f5] text-[#d32f2f] py-1.5 px-4 text-xs md:text-sm font-medium border-b border-[#ffeaea] overflow-hidden">
        <div className="w-full px-6 lg:px-12 xl:px-16 mx-auto flex items-center">
          <span className="font-bold whitespace-nowrap mr-2">Beware of Frauds!</span>
          <marquee scrollamount="5" className="flex-1">
            NuoG never asks you to pay cash or transfer money to the bank accounts of any 3rd party for providing loans or jobs.
          </marquee>
        </div>
      </div>

      {/* Action Cards Section */}
      <div className="w-full shadow-sm overflow-x-auto no-scrollbar">
        <div className="w-full px-6 lg:px-12 xl:px-16 mx-auto flex items-center justify-between min-w-max md:min-w-0">
          {actions.map((action, idx) => (
            <Link 
              to={action.link} 
              key={idx}
              onClick={action.onClick}
              className="flex items-center gap-3 py-4 px-6 md:px-4 lg:px-6 hover:bg-gray-50 transition-all duration-150 active:scale-95 group min-w-[200px] md:min-w-0 flex-1 justify-center border-r border-gray-100 last:border-r-0 cursor-pointer"
            >
              <div className="text-[#034488] group-hover:text-[#0284C7] transition-colors">
                <action.icon size={28} strokeWidth={1.5} />
              </div>
              <div className="flex flex-col text-[#034488] leading-tight">
                <span className="font-bold text-[13px] md:text-[14px]">{action.title}</span>
                <span className="text-[11px] md:text-[12px] opacity-80">{action.subtitle}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuickActions;
