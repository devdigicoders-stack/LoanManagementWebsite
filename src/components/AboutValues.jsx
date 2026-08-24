import React from 'react';
import { Handshake, Award, Lightbulb, User, Users, ShieldCheck } from 'lucide-react';

const AboutValues = () => {
  const values = [
    {
      icon: <Award size={28} strokeWidth={1.5} />,
      title: "Execution Excellence",
      description: "It’s Not Just Our Standard, But Our Culture. From Planing to Delivery, We Ensure Every Detail is Aligned to Achieve Meaningful Outcomes."
    },
    {
      icon: <User size={28} strokeWidth={1.5} />,
      title: "People Focus",
      description: "We Prioritize employees' growth and well-being. Our people-centric approach drives innovation and productivity. We value diversity and inclusion."
    },
    {
      icon: <ShieldCheck size={28} strokeWidth={1.5} />,
      title: "Integrity",
      description: "We Operate With integrity, upholding high ethical standards. Our actions are guided by honesty and accountability. We build trust through consistent behavior."
    },
    {
      icon: <Users size={28} strokeWidth={1.5} />,
      title: "Customer Centricity",
      description: "It Our Promise to listen, understand and deliver what truly matters. We build lasting relationships by consistently putting customer needs first."
    }
 ];

  return (
    <section className="w-full bg-white pb-20 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="bg-[#f8fcf5] rounded-[2rem] py-8 px-6 md:px-12 relative border border-[#eaf7e3]">
          
          {/* Header */}
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-[34px] font-bold text-gray-900 leading-tight mb-4">
              Our Vision
            </h2>
            <h3 className="text-xl md:text-2xl font-semibold text-[#0EA5E9] mb-4">
              EMPOWERING EMERGING INDIA WITH EASY ACCESS TO LOANS
            </h3>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-3xl mx-auto mb-8">
              In the dynamic world of lending, HAUS NUO-Pay stands resolute at the crossroads of growth and opportunities. Anchored to our vision, we adeptly navigate economic change, tapping into underserved markets and bridging crucial credit gaps. Our expansion across the length and breadth of India and focus on the aspiring self-employed segment signifies not just growth but a commitment to accessibility and empowerment.
            </p>
            <h2 className="text-3xl md:text-[34px] font-bold text-gray-900 leading-tight">
              Our Values
            </h2>
          </div>
          
          {/* Values Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
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
