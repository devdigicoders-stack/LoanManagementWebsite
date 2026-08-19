import React from 'react';
import { Smartphone, Layout, Edit3, Bell, FileText, Settings, Headphones, ShieldCheck } from 'lucide-react';

const AppAccess = () => {
  const accessItems = [
    {
      icon: <Smartphone size={24} strokeWidth={1.5} />,
      title: "Easy Access",
      desc: "Access supported financial services and property-related information directly from your smartphone."
    },
    {
      icon: <Layout size={24} strokeWidth={1.5} />,
      title: "Simple Experience",
      desc: "Navigate through a clean and user-friendly interface designed for a smooth digital experience."
    },
    {
      icon: <Edit3 size={24} strokeWidth={1.5} />,
      title: "Digital Enquiries",
      desc: "Submit your financial or property-related enquiry conveniently through the application."
    },
    {
      icon: <Bell size={24} strokeWidth={1.5} />,
      title: "Application Updates",
      desc: "Stay informed about relevant updates related to your enquiry or application, where supported."
    },
    {
      icon: <FileText size={24} strokeWidth={1.5} />,
      title: "Document Access",
      desc: "Access supported documents and important information digitally whenever available."
    },
    {
      icon: <Settings size={24} strokeWidth={1.5} />,
      title: "Notifications",
      desc: "Receive important service-related notifications and updates through the application."
    },
    {
      icon: <Headphones size={24} strokeWidth={1.5} />,
      title: "Customer Support",
      desc: "Connect with available customer support channels whenever you need assistance."
    },
    {
      icon: <ShieldCheck size={24} strokeWidth={1.5} />,
      title: "Secure Experience",
      desc: "We use appropriate technical and organizational measures designed to help protect your information."
    }
  ];

  return (
    <section className="w-full bg-white py-24 px-6 md:px-10 border-b border-gray-100">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-start">
        
        {/* Left Content */}
        <div className="w-full lg:w-1/3 sticky top-32">
          <div className="inline-block bg-[#e8fbe9] text-[#4a9b12] rounded-full px-4 py-1 text-sm font-bold tracking-wider mb-6 uppercase">
            Smarter Financial Access
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Everything You Need, <br className="hidden lg:block"/>
            <span className="text-[#5bc116]">Right From Your Mobile</span>
          </h2>
          <p className="text-gray-600 text-[16px] leading-relaxed mb-8">
            Our mobile application is designed to make your financial journey more convenient and accessible.
          </p>
        </div>

        {/* Right Content - Grid */}
        <div className="w-full lg:w-2/3">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {accessItems.map((item, index) => (
              <div key={index} className="bg-[#fcfcfc] p-6 rounded-3xl border border-gray-100 hover:border-[#5bc116] hover:shadow-md transition-all duration-300 group">
                <div className="w-12 h-12 bg-[#f0fbf0] text-[#5bc116] rounded-xl flex items-center justify-center mb-5 group-hover:bg-[#5bc116] group-hover:text-white transition-colors">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-500 text-[14px] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default AppAccess;
