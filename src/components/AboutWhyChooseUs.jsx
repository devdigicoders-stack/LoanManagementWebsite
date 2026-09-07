import React from 'react';
import { Home, Eye, Smartphone, HeartHandshake, ShieldCheck } from 'lucide-react';

const AboutWhyChooseUs = () => {
  const features = [
    {
      icon: <Home size={24} strokeWidth={1.5} />,
      title: "Property-Focused Approach",
      desc: "We focus on financial solutions connected with residential and commercial properties, helping customers explore options based on their specific requirements."
    },
    {
      icon: <Eye size={24} strokeWidth={1.5} />,
      title: "Clear & Transparent Information",
      desc: "We believe customers should understand the financial product they are considering. That's why we focus on presenting important information in a simple and easy- manner."
    },
    {
      icon: <Smartphone size={24} strokeWidth={1.5} />,
      title: "Digital Convenience",
      desc: "Our digital-first approach allows customers to explore services, submit enquiries and access relevant information conveniently."
    },
    {
      icon: <HeartHandshake size={24} strokeWidth={1.5} />,
      title: "Customer-Centric Experience",
      desc: "Every customer's financial requirement is different. We aim to provide a smooth and user-friendly experience throughout the journey."
    },
    {
      icon: <ShieldCheck size={24} strokeWidth={1.5} />,
      title: "Responsible Financial Approach",
      desc: "We encourage customers to understand their repayment obligations, applicable charges and financial commitments before proceeding with any loan or financial product."
    }
 ;

  return (
    <section className="w-full bg-white py-20 px-6 md:px-10">
      <div className="w-full px-6 lg:px-12 xl:px-16 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose HAUS NUO-Pay?
          </h2>
          <div className="w-20 h-1 bg-[#0EA5E9] mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((item, index) => (
            <div key={index} className="flex flex-col bg-[#fcfcfc] p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow group">
              <div className="w-14 h-14 bg-[#F8FAFC] border border-[#E0F2FE] text-[#0EA5E9] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
              <p className="text-gray-500 text-[14px] leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutWhyChooseUs;
