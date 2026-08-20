import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Home, Car, Truck, Tractor, Bike, Briefcase, ArrowRight, CheckCircle2 } from 'lucide-react';

const ServicesList = () => {
  const [activeTab, setActiveTab] = useState('All');

  const services = [
    {
      category: 'Vehicle',
      icon: <Car size={32} strokeWidth={1.5} />,
      title: "Car Loan",
      subtitle: "Finance your dream car today.",
      desc: "Get easy financing options for new or pre-owned cars with fast approvals and attractive interest rates.",
      bullets: ["Up to 100% financing", "Flexible tenure up to 7 years", "Minimal documentation", "Quick disbursal"],
      link: "/services/car-loan"
    },
    {
      category: 'Vehicle',
      icon: <Truck size={32} strokeWidth={1.5} />,
      title: "Commercial Vehicle",
      subtitle: "Drive your business forward.",
      desc: "Tailored financing solutions for purchasing new or used light and heavy commercial vehicles.",
      bullets: ["Customized EMI options", "Funding for all types of CVs", "Quick loan processing", "Top-up loans available"],
      link: "/services/commercial-vehicle"
    },
    {
      category: 'Vehicle',
      icon: <Bike size={32} strokeWidth={1.5} />,
      title: "Two Wheeler Loan",
      subtitle: "Hit the road faster.",
      desc: "Finance your dream bike or scooter with minimal paperwork and instant approval processes.",
      bullets: ["Instant approvals", "Low down payment", "Flexible EMI options", "No hidden charges"],
      link: "/services/two-wheeler"
    },
    {
      category: 'Home',
      icon: <Home size={32} strokeWidth={1.5} />,
      title: "Home Loan",
      subtitle: "Turn your dream home into reality.",
      desc: "Home loans can help eligible customers finance the purchase or construction of a residential property.",
      bullets: ["Competitive interest rates", "Long tenure options", "Balance transfer facility", "Top-up loan availability"],
      link: "/services/home-loan"
    },
    {
      category: 'SME',
      icon: <Briefcase size={32} strokeWidth={1.5} />,
      title: "SME & MSME Loan",
      subtitle: "Fuel your business growth.",
      desc: "Comprehensive financial solutions designed to meet the diverse needs of small and medium enterprises.",
      bullets: ["Working capital finance", "Equipment finance", "Supply chain finance", "Customized repayment"],
      link: "/services/sme-loan"
    }
  ];

  const filteredServices = activeTab === 'All' ? services : services.filter(s => s.category === activeTab);

  return (
    <section className="w-full bg-[#fcfcfc] py-24 px-6 md:px-10 border-b border-gray-100">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Explore Our <span className="text-[#5bc116]">Loan Products</span>
          </h2>
          
          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {['All', 'Vehicle', 'Home', 'SME'].map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                  activeTab === tab 
                  ? 'bg-[#5bc116] text-white shadow-lg'
                  : 'bg-white text-gray-600 border border-gray-200 hover:border-[#5bc116] hover:text-[#5bc116]'
                }`}
              >
                {tab} Loans
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service, index) => {
            const cardId = service.title.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-').replace(/[^a-z0-9-]/g, '');
            return (
            <div id={cardId} key={index} className="bg-white p-8 rounded-3xl border border-gray-100 shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_15px_40px_rgba(91,193,22,0.1)] transition-all duration-300 group flex flex-col h-full">
              
              <div className="w-16 h-16 bg-[#f4fdf5] border border-[#e8fbe9] text-[#5bc116] rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#5bc116] group-hover:text-white transition-colors duration-300 shrink-0">
                {service.icon}
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-[#5bc116] font-semibold text-sm mb-4">{service.subtitle}</p>
              <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-grow">
                {service.desc}
              </p>

              <div className="mb-6 pt-4 border-t border-gray-50">
                <ul className="space-y-2">
                  {service.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="text-[#5bc116] shrink-0 mt-0.5" size={16} />
                      <span className="text-gray-600 text-xs font-medium">{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex items-center justify-between mt-auto">
                 <Link 
                  to={service.link}
                  className="inline-flex items-center gap-1 text-gray-500 font-semibold hover:text-[#5bc116] transition-colors text-sm"
                >
                  Know More
                </Link>
                <Link 
                  to="/get-started"
                  className="inline-flex items-center gap-1 text-[#5bc116] font-bold hover:text-[#4a9b12] transition-colors text-sm"
                >
                  Apply Now <ArrowRight size={16} />
                </Link>
              </div>
            </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default ServicesList;
