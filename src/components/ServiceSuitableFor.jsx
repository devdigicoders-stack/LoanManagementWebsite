import React from 'react';
import { Briefcase, GraduationCap, Stethoscope, Landmark, HeartHandshake } from 'lucide-react';

const ServiceSuitableFor = () => {
  const categories = [
    { icon: <Briefcase size={24} strokeWidth={1.5} />, title: "Business Expansion" },
    { icon: <GraduationCap size={24} strokeWidth={1.5} />, title: "Education" },
    { icon: <Stethoscope size={24} strokeWidth={1.5} />, title: "Medical Emergency" },
    { icon: <Landmark size={24} strokeWidth={1.5} />, title: "Property Renovation" },
    { icon: <HeartHandshake size={24} strokeWidth={1.5} />, title: "Working Capital" }
 ;

  return (
    <section className="w-full bg-[#fcfcfc] py-20 px-6 md:px-10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            Suitable For
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {categories.map((item, index) => (
            <div key={index} className="flex flex-col items-center bg-white border border-gray-100 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow min-w-[140px] w-full sm:w-auto">
              <div className="w-14 h-14 bg-[#fff9eb] text-[#e5a030] rounded-full flex items-center justify-center mb-4">
                {item.icon}
              </div>
              <h4 className="text-gray-900 font-semibold text-[14px] text-center">
                {item.title}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSuitableFor;
