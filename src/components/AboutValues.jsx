import React from 'react';
import { Handshake, Award, Lightbulb, User, Users } from 'lucide-react';

const AboutValues = () => {
  const values = [
    {
      icon: <Award size={28} strokeWidth={1.5} />,
      title: "Our Mission",
      description: "To make property finance simple, transparent and accessible for everyone."
    },
    {
      icon: <Lightbulb size={28} strokeWidth={1.5} />,
      title: "Our Vision",
      description: "To build a trusted digital ecosystem for property financing in India."
    },
    {
      icon: <Users size={28} strokeWidth={1.5} />,
      title: "Our Values",
      description: "Transparency, trust, technology, simplicity and responsibility."
    }
  ];

  return (
    <section className="w-full bg-white pb-20 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="bg-[#f8fcf5] rounded-[2rem] py-8 px-6 md:px-12 relative border border-[#eaf7e3]">
          
          {/* Header */}
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-[34px] font-bold text-gray-900 leading-tight">
              Our Mission, Vision & Values
            </h2>
          </div>
          
          {/* Values Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-[#fffdf9] p-8 rounded-2xl flex flex-col items-center text-center shadow-sm border border-[#fbf3e5]">
                
                {/* Icon */}
                <div className="w-16 h-16 bg-[#fcf2df] rounded-2xl flex items-center justify-center text-[#e5a030] mb-6">
                  {value.icon}
                </div>
                
                {/* Content */}
                <h4 className="text-gray-900 font-bold text-[18px] mb-3">{value.title}</h4>
                <p className="text-gray-600 text-[14px] leading-relaxed max-w-[220px]">
                  {value.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutValues;
