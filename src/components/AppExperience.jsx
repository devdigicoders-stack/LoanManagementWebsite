import React from 'react';
import { LayoutDashboard, Briefcase, FileText, FolderOpen, Bell, User } from 'lucide-react';

const AppExperience = () => {
  const experiences = [
    {
      icon: <LayoutDashboard size={24} strokeWidth={1.5} />,
      title: "Home",
      desc: "Get a quick overview of available services and important updates."
    },
    {
      icon: <Briefcase size={24} strokeWidth={1.5} />,
      title: "Services",
      desc: "Explore home loans, Loan Against Property, construction finance, renovation finance and other available financial solutions."
    },
    {
      icon: <FileText size={24} strokeWidth={1.5} />,
      title: "Applications",
      desc: "Access supported information related to your submitted enquiries or applications."
    },
    {
      icon: <FolderOpen size={24} strokeWidth={1.5} />,
      title: "Documents",
      desc: "View or access supported digital documents."
    },
    {
      icon: <Bell size={24} strokeWidth={1.5} />,
      title: "Notifications",
      desc: "Receive relevant service updates and important communications."
    },
    {
      icon: <User size={24} strokeWidth={1.5} />,
      title: "Profile",
      desc: "Manage supported account information and preferences."
    }
  ];

  return (
    <section className="w-full bg-[#030706] py-24 px-6 md:px-10 relative overflow-hidden border-t border-[#1a241c]">
      
      {/* Background Gradients */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#5bc116] rounded-full blur-[200px] opacity-5 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto flex flex-col items-center">
        
        <div className="text-center mb-20 relative z-10">
          <div className="inline-block bg-[#0b150e] border border-[#1a2e1d] text-[#71d924] rounded-full px-5 py-2 text-sm font-bold tracking-widest uppercase mb-6 shadow-[0_0_15px_rgba(91,193,22,0.1)]">
            App Experience
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
            Everything in <span className="text-[#5bc116] drop-shadow-[0_0_10px_rgba(91,193,22,0.3)]">One Place</span>
          </h2>
        </div>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
          {experiences.map((item, index) => (
            <div key={index} className="bg-[#0b0f0e] p-8 rounded-3xl border border-[#1a241c] hover:border-[#5bc116] hover:shadow-[0_0_25px_rgba(91,193,22,0.1)] transition-all duration-300 group">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-[#111814] text-[#5bc116] rounded-xl flex items-center justify-center shrink-0 border border-[#1a241c] group-hover:bg-[#5bc116] group-hover:text-[#0b0f0e] transition-colors">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-white group-hover:text-[#5bc116] transition-colors">{item.title}</h3>
              </div>
              <p className="text-gray-400 text-[14px] leading-relaxed group-hover:text-gray-300 transition-colors">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default AppExperience;
