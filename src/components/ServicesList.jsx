import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Key, HardHat, Hammer, Building2, BriefcaseBusiness, ArrowRight, CheckCircle2 } from 'lucide-react';

const ServicesList = () => {
  const services = [
    {
      icon: <Home size={32} strokeWidth={1.5} />,
      title: "Home Loan",
      subtitle: "Turn your dream of owning a home into a well-planned financial goal.",
      desc: "Home loans can help eligible customers finance the purchase or construction of a residential property. We provide useful information to help you understand the key aspects of home financing.",
      bullets: ["Home purchase financing", "New property purchase", "Resale property financing", "Home construction", "Loan tenure", "EMI and repayment planning", "Eligibility requirements", "Documentation requirements", "Applicable charges"],
      link: "/services/home-loan"
    },
    {
      icon: <Key size={32} strokeWidth={1.5} />,
      title: "Loan Against Property",
      subtitle: "Unlock the financial potential of an eligible property.",
      desc: "A Loan Against Property (LAP) is a secured financing option where an eligible residential or commercial property may be offered as security for the loan. Depending on the lender's policies and eligibility criteria, such financing may be considered for various personal or business requirements.",
      bullets: ["Business expansion", "Working capital", "Education expenses", "Medical expenses", "Property-related requirements", "Debt management", "Other eligible financial requirements"],
      link: "/services/loan-against-property"
    },
    {
      icon: <HardHat size={32} strokeWidth={1.5} />,
      title: "Property Construction Finance",
      subtitle: "Build your property with a structured financial plan.",
      desc: "Property construction may involve significant expenses, from materials and labour to approvals and other development costs. Eligible customers may explore construction-related financing based on their requirements and applicable lender policies.",
      bullets: ["Property ownership", "Construction plan", "Approved building plan", "Estimated construction cost", "Applicant income", "Property valuation", "Required documentation", "Repayment capacity"],
      link: "/services/construction-finance"
    },
    {
      icon: <Hammer size={32} strokeWidth={1.5} />,
      title: "Home Renovation Finance",
      subtitle: "Give your existing property a new beginning.",
      desc: "Renovating or improving a home can involve expenses for repairs, interiors, extensions and structural improvements. Eligible customers can explore financial options available for home renovation requirements.",
      bullets: ["Home repairs", "Interior improvements", "Kitchen renovation", "Bathroom renovation", "Home extension", "Structural improvements", "Electrical and plumbing work"],
      link: "/services/renovation-finance"
    },
    {
      icon: <Building2 size={32} strokeWidth={1.5} />,
      title: "Commercial Property Finance",
      subtitle: "Financial solutions for eligible commercial property requirements.",
      desc: "Commercial property can play an important role in business growth. Customers and businesses may explore financing options for eligible commercial property-related requirements, subject to lender policies and property assessment.",
      bullets: ["Commercial property purchase", "Business premises", "Office space", "Shop or commercial unit", "Property development", "Business expansion", "Other eligible commercial requirements"],
      link: "/services/commercial-finance"
    },
    {
      icon: <BriefcaseBusiness size={32} strokeWidth={1.5} />,
      title: "Property-Backed Business Finance",
      subtitle: "Use eligible property-backed financing to support your business goals.",
      desc: "Businesses may require funds for expansion, working capital, equipment, inventory or other operational requirements. Depending on eligibility and lender policies, property-backed financial solutions may be considered.",
      bullets: ["Business expansion", "Working capital", "Inventory", "Equipment", "Infrastructure", "Business development", "Cash-flow requirements"],
      link: "/services/business-finance"
    }
  ];

  return (
    <section className="w-full bg-[#fcfcfc] py-24 px-6 md:px-10 border-b border-gray-100">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Explore Our <span className="text-[#5bc116]">Financial Services</span>
          </h2>
          <div className="w-20 h-1 bg-[#5bc116] mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-8 md:p-10 rounded-3xl border border-gray-100 shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-xl transition-all duration-300 group flex flex-col h-full">
              
              <div className="w-16 h-16 bg-[#f4fdf5] border border-[#e8fbe9] text-[#5bc116] rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300 shrink-0">
                {service.icon}
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-[#5bc116] font-semibold text-[15px] mb-4">{service.subtitle}</p>
              <p className="text-gray-500 text-[14px] leading-relaxed mb-8 flex-grow">
                {service.desc}
              </p>

              <div className="mb-8">
                <h4 className="text-gray-900 font-bold text-[14px] mb-4 uppercase tracking-wider">Key Considerations:</h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {service.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="text-[#5bc116] shrink-0 mt-0.5" size={16} />
                      <span className="text-gray-600 text-[13px]">{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link 
                to={service.link}
                className="inline-flex items-center gap-2 text-[#5bc116] font-bold hover:text-[#4a9b12] transition-colors mt-auto"
              >
                Learn More <ArrowRight size={20} />
              </Link>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ServicesList;
