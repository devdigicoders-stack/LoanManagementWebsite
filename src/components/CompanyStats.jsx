import React from 'react';
import { Award, Map, Users, Building2, Landmark, Smile, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const CompanyStats = () => {
  const stats = [
    {
      icon: Award,
      value: "14yr+",
      label: "Years of Excellence"
    },
    {
      icon: Map,
      value: "32",
      label: "States & Union Territories"
    },
    {
      icon: Users,
      value: "374+",
      label: "Strong Workforce"
    },
    {
      icon: Building2,
      value: "21",
      label: "Branches"
    },
    {
      icon: Landmark,
      value: "₹0.74+ lakh Cr",
      label: "Assets Under Management"
    },
    {
      icon: Smile,
      value: "14.79lakh+",
      label: "Happy Customers"
    }
 ];

  return (
    <section className="w-full bg-[#fcfcfc] py-16 px-6 md:px-10">
      <div className="w-full px-6 lg:px-12 xl:px-16 mx-auto flex flex-col lg:flex-row shadow-lg border border-gray-200">
        
        {/* Left Section (Brand) */}
        <div className="lg:w-1/3 bg-[#FDFBF7] text-slate-900 p-10 md:p-14 flex flex-col justify-center relative overflow-hidden">
          {/* Accent decoration */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#0284C7] opacity-10 rounded-full blur-[40px] -translate-y-1/2 translate-x-1/2"></div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-4 z-10 leading-tight">
            Why <br /> NuoG?
          </h2>
          <p className="text-slate-600 text-lg mb-10 z-10 font-light max-w-[200px]">
            There's more than one reason to be confident
          </p>
          
          <Link to="/about" className="inline-flex items-center gap-2 text-sm font-medium hover:text-[#0284C7] transition-colors w-max z-10 group">
            Know More 
            <span className="bg-[#0284C7] text-black p-1 rounded-sm group-hover:bg-[#0EA5E9] transition-colors">
              <ArrowRight size={14} strokeWidth={3} />
            </span>
          </Link>
        </div>

        {/* Right Section (Grid) */}
        <div className="lg:w-2/3 bg-[#eef1f4] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {stats.map((stat, idx) => (
            <div 
              key={idx} 
              className={`p-8 flex items-start gap-4 border-gray-300
                ${idx < 3 ? 'lg:border-b' : ''} 
                ${(idx + 1) % 3 !== 0 ? 'lg:border-r' : ''}
                md:border-b border-r
                hover:bg-white transition-colors duration-300 cursor-default
              `}
            >
              <div className="text-[#034488] shrink-0 mt-1">
                <stat.icon size={36} strokeWidth={1.5} />
              </div>
              <div className="flex flex-col">
                <span className="text-[#034488] text-[22px] font-extrabold leading-none mb-1">{stat.value}</span>
                <span className="text-gray-600 text-sm font-medium leading-snug">{stat.label}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default CompanyStats;
