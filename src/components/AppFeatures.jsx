import React from 'react';
import { Home, PieChart, FileText, BellRing, MessageCircle, UserCircle2 } from 'lucide-react';

const AppFeatures = () => {
  const features = [
    {
      icon: <Home size={28} strokeWidth={1.5} />,
      title: "Property Finance",
      desc: "Explore information about home loans, property finance, Loan Against Property and other supported financial solutions."
    },
    {
      icon: <PieChart size={28} strokeWidth={1.5} />,
      title: "Loan Information",
      desc: "Understand important aspects of your financial product, including applicable loan information and repayment details where available."
    },
    {
      icon: <FileText size={28} strokeWidth={1.5} />,
      title: "Digital Documents",
      desc: "Access supported documents and information through your mobile device."
    },
    {
      icon: <BellRing size={28} strokeWidth={1.5} />,
      title: "Real-Time Updates",
      desc: "Stay informed about relevant service and application updates."
    },
    {
      icon: <MessageCircle size={28} strokeWidth={1.5} />,
      title: "Customer Support",
      desc: "Get access to available support channels for your questions and service-related assistance."
    },
    {
      icon: <UserCircle2 size={28} strokeWidth={1.5} />,
      title: "Profile Management",
      desc: "Manage supported account and personal information conveniently through the application."
    }
  ];

  return (
    <section className="w-full bg-[#0b0f0e] py-24 px-6 md:px-10 border-t border-[#1a241c] relative overflow-hidden">
      
      {/* Background Element */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#5bc116] rounded-full blur-[200px] opacity-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        <div className="text-center mb-16">
          <div className="inline-block bg-[#111814] border border-[#1a241c] text-[#5bc116] rounded-full px-5 py-2 text-sm font-bold tracking-widest uppercase mb-6">
            Our App Features
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Designed Around Your <span className="text-[#5bc116]">Financial Needs</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-[#111814] p-8 rounded-3xl border border-[#1a241c] hover:border-[#5bc116] transition-colors group">
              <div className="w-14 h-14 bg-[#0b0f0e] text-[#5bc116] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[#5bc116] group-hover:text-[#0b0f0e] transition-all duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-[#5bc116] transition-colors">{feature.title}</h3>
              <p className="text-gray-400 text-[15px] leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default AppFeatures;
