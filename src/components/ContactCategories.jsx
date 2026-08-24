import React from 'react';
import { Home, Key, Hammer, Building2 } from 'lucide-react';

const ContactCategories = () => {
  const categories = [
    {
      icon: <Home size={24} strokeWidth={1.5} />,
      title: "Home Loan",
      desc: "Finance your dream home."
    },
    {
      icon: <Key size={24} strokeWidth={1.5} />,
      title: "Loan Against Property",
      desc: "Unlock the value of property."
    },
    {
      icon: <Hammer size={24} strokeWidth={1.5} />,
      title: "Renovation",
      desc: "Upgrade your existing home."
    },
    {
      icon: <Building2 size={24} strokeWidth={1.5} />,
      title: "Commercial",
      desc: "Property financial solutions."
    }
 ;

  return (
    <section className="w-full bg-white py-20 px-6 md:px-10">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
          What Are You Looking For?
        </h2>
        <p className="text-gray-500 text-[14px] mb-12">
          Select a requirement to learn more.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, index) => (
            <div key={index} className="flex flex-col items-center bg-[#fcfcfc] border border-gray-100 p-8 rounded-2xl hover:border-[#0EA5E9] hover:shadow-lg transition-all cursor-pointer group">
              <div className="w-14 h-14 bg-[#F8FAFC] border border-[#E0F2FE] text-[#0EA5E9] rounded-full flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                {cat.icon}
              </div>
              <h4 className="text-gray-900 font-bold text-[15px] mb-1">{cat.title}</h4>
              <p className="text-gray-500 text-[13px]">{cat.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactCategories;
