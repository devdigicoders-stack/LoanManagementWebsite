import React from 'react';
import { Home, Key, Building2, Hammer, Building, Briefcase, FileSearch, FileText } from 'lucide-react';

const AllServices = () => {
  const servicesData = [
    {
      icon: <Home size={28} strokeWidth={2} />,
      title: "Home Loan",
      description: "Explore financing options for your dream home."
    },
    {
      icon: <Key size={28} strokeWidth={2} />,
      title: "Loan Against Property",
      description: "Unlock the value of your property."
    },
    {
      icon: <Building2 size={28} strokeWidth={2} />,
      title: "Construction Finance",
      description: "Finance your property construction."
    },
    {
      icon: <Hammer size={28} strokeWidth={2} />,
      title: "Home Renovation",
      description: "Finance your home improvement needs."
    },
    {
      icon: <Building size={28} strokeWidth={2} />,
      title: "Commercial Property Finance",
      description: "Solutions for commercial properties."
    },
    {
      icon: <Briefcase size={28} strokeWidth={2} />,
      title: "Business Finance",
      description: "Financial support for your business needs."
    },
    {
      icon: <FileSearch size={28} strokeWidth={2} />,
      title: "Financial Guidance",
      description: "Understand your loan options better."
    },
    {
      icon: <FileText size={28} strokeWidth={2} />,
      title: "Documentation Support",
      description: "We help you with documentation."
    }
 ;

  return (
    <section className="w-full bg-[#fcfcfc] py-16 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="mb-14 text-left">
          <div className="text-[#0EA5E9] font-bold text-[12px] tracking-widest mb-4 uppercase">
            OUR SERVICES
          </div>
          <h1 className="text-3xl md:text-5xl lg:text-[50px] font-bold text-gray-900 mb-6 leading-[1.2]">
            Property & Financial Solutions
          </h1>
          <p className="text-gray-600 text-[15px] md:text-base leading-relaxed max-w-2xl">
            Explore solutions designed around your financial and property requirements.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicesData.map((service, index) => (
            <div 
              key={index} 
              className="bg-white border border-gray-100 p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col"
            >
              <div className="w-14 h-14 bg-[#f4fbf0] group-hover:bg-[#0EA5E9] rounded-2xl flex items-center justify-center text-[#0EA5E9] group-hover:text-white transition-colors duration-300 mb-6">
                {service.icon}
              </div>
              <h3 className="text-black font-bold text-[18px] mb-3 leading-snug">
                {service.title}
              </h3>
              <p className="text-gray-500 text-[14px] leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default AllServices;
