import React from 'react';
import { MonitorPlay, Info, FileStack, RefreshCcw, HeadphonesIcon, Smartphone } from 'lucide-react';

const ServicesDigital = () => {
  const services = [
    {
      icon: <MonitorPlay size={24} strokeWidth={1.5} />,
      title: "Digital Enquiry",
      desc: "Submit your requirement through our digital platform and access the appropriate enquiry process."
    },
    {
      icon: <Info size={24} strokeWidth={1.5} />,
      title: "Financial Information",
      desc: "Explore information about different property and loan-related financial solutions."
    },
    {
      icon: <FileStack size={24} strokeWidth={1.5} />,
      title: "Document Guidance",
      desc: "Understand the types of documents that may be required for different financial products."
    },
    {
      icon: <RefreshCcw size={24} strokeWidth={1.5} />,
      title: "Application Updates",
      desc: "Access supported updates related to your enquiry or application."
    },
    {
      icon: <HeadphonesIcon size={24} strokeWidth={1.5} />,
      title: "Customer Support",
      desc: "Connect with our support team for service-related assistance and general queries."
    },
    {
      icon: <Smartphone size={24} strokeWidth={1.5} />,
      title: "Mobile Experience",
      desc: "Access supported services and information through the HAUS NUO-Pay mobile application."
    }
 ;

  return (
    <section className="w-full bg-[#F8FAFC] py-20 px-6 md:px-10 border-b border-[#E0F2FE]">
      <div className="w-full px-6 lg:px-12 xl:px-16 mx-auto">
        
        <div className="text-center mb-16">
          <div className="inline-block bg-[#E0F2FE] text-[#0369A1] rounded-full px-4 py-1 text-sm font-bold tracking-wider mb-4 uppercase">
            Our Digital Services
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            A Simpler Way to Explore <br className="hidden md:block"/>
            <span className="text-[#0EA5E9]">Financial Solutions</span>
          </h2>
          <p className="text-gray-600 text-[16px] leading-relaxed max-w-2xl mx-auto">
            Our digital platform is designed to make property finance information accessible and convenient.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((item, index) => (
            <div key={index} className="bg-white p-8 rounded-3xl border border-[#E0F2FE] shadow-sm hover:shadow-md transition-shadow group flex items-start gap-5">
              <div className="w-12 h-12 rounded-full bg-[#f0fbf0] text-[#0EA5E9] flex items-center justify-center shrink-0 group-hover:bg-[#0EA5E9] group-hover:text-white transition-colors duration-300">
                {item.icon}
              </div>
              <div>
                <h4 className="text-gray-900 font-bold text-[16px] mb-2">{item.title}</h4>
                <p className="text-gray-500 text-[14px] leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ServicesDigital;
