import React from 'react';
import { Check } from 'lucide-react';

const ServiceBenefits = () => {
  const benefits = [
    "Access higher loan amounts compared to personal loans.",
    "Lower interest rates due to property collateral.",
    "Flexible repayment tenure up to 15 years.",
    "Multiple end-use options for personal or business needs.",
    "Simple and transparent process with quick approval."
 ;

  return (
    <section className="w-full bg-white py-20 px-6 md:px-10">
      <div className="w-full px-6 lg:px-12 xl:px-16 mx-auto flex flex-col lg:flex-row items-center gap-16">
        
        {/* Left Side - Content */}
        <div className="w-full lg:w-1/2 flex flex-col">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Key Benefits
          </h2>
          <div className="flex flex-col gap-5">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-[#0EA5E9] text-white flex items-center justify-center shrink-0 mt-0.5 shadow-md shadow-[#0EA5E9]/30">
                  <Check size={14} strokeWidth={3} />
                </div>
                <p className="text-gray-700 text-[15px] md:text-base leading-relaxed">
                  {benefit}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
          <div className="relative">
            {/* Background decorative square */}
            <div className="absolute top-4 -right-4 md:top-6 md:-right-6 w-full h-full border-2 border-[#0EA5E9]/20 rounded-3xl z-0"></div>
            <img 
              src="/aboutus/unity.png" 
              alt="Property Benefits" 
              className="w-full max-w-[450px] h-auto rounded-3xl object-cover relative z-10 shadow-lg"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default ServiceBenefits;
