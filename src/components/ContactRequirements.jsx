import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Key, HardHat, Hammer, Building2, ArrowRight } from 'lucide-react';

const ContactRequirements = () => {
  const reqs = [
    {
      icon: <Home size={28} strokeWidth={1.5} />,
      title: "Home Purchase",
      desc: "Planning to purchase your dream home? Get information about applicable home financing options.",
      link: "/services/home-loan",
      linkText: "Explore Home Loans"
    },
    {
      icon: <Key size={28} strokeWidth={1.5} />,
      title: "Loan Against Property",
      desc: "Looking to explore financing against an eligible property?",
      link: "/services/loan-against-property",
      linkText: "Explore LAP"
    },
    {
      icon: <HardHat size={28} strokeWidth={1.5} />,
      title: "Construction",
      desc: "Planning to construct a residential property?",
      link: "/services/construction-finance",
      linkText: "Explore Construction Finance"
    },
    {
      icon: <Hammer size={28} strokeWidth={1.5} />,
      title: "Renovation",
      desc: "Planning repairs, improvements or renovation?",
      link: "/services/renovation-finance",
      linkText: "Explore Renovation Finance"
    },
    {
      icon: <Building2 size={28} strokeWidth={1.5} />,
      title: "Commercial Property",
      desc: "Looking for financing related to an eligible commercial property?",
      link: "/services/commercial-finance",
      linkText: "Explore Commercial Finance"
    }
 ;

  return (
    <section className="w-full bg-[#F8FAFC] py-24 px-6 md:px-10 border-b border-[#E0F2FE]">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center mb-16">
          <div className="inline-block bg-[#E0F2FE] text-[#0369A1] rounded-full px-4 py-1 text-sm font-bold tracking-wider mb-4 uppercase">
            How Can We Help You?
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Choose Your <span className="text-[#0EA5E9]">Requirement</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reqs.map((item, index) => (
            <div key={index} className="bg-white p-8 rounded-3xl border border-[#E0F2FE] shadow-[0_4px_20px_rgba(0,0,0,0.03)] flex flex-col h-full hover:-translate-y-1 transition-transform duration-300">
              <div className="w-14 h-14 bg-[#f0fbf0] text-[#0EA5E9] rounded-2xl flex items-center justify-center mb-6 shrink-0">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
              <p className="text-gray-500 text-[14px] leading-relaxed mb-8 flex-grow">{item.desc}</p>
              
              <Link 
                to={item.link}
                className="inline-flex items-center gap-2 text-[#0EA5E9] font-bold text-[14px] hover:text-[#0369A1] transition-colors mt-auto group"
              >
                {item.linkText} <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ContactRequirements;
