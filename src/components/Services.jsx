import { ArrowRight, Car, Home, Briefcase, Truck, Tractor, Bike } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    title: "Vehicle Loans",
    description: "Finance your new or used car, commercial vehicle, or two-wheeler with quick processing.",
    icon: Car,
    link: "/services"
  },
  {
    title: "Home Loans",
    description: "Purchase, construct, or renovate your dream home with flexible repayment options.",
    icon: Home,
    link: "/services"
  },
  {
    title: "SME & Business Loans",
    description: "Empower your business growth with secured term loans and supply chain finance.",
    icon: Briefcase,
    link: "/services"
  },
  {
    title: "Commercial Vehicle",
    description: "Tailored financing solutions for heavy and light commercial vehicles.",
    icon: Truck,
    link: "/services"
  },
  {
    title: "Tractor & Farm Equipment",
    description: "Specialized loans to mechanize and grow your agricultural operations.",
    icon: Tractor,
    link: "/services"
  },
  {
    title: "Two Wheeler Loans",
    description: "Get on the road faster with easy financing for your dream bike or scooter.",
    icon: Bike,
    link: "/services"
  }
];

const Services = () => {
  return (
    <section className="relative w-full bg-[#fafdf9] py-16 px-6 md:px-10 overflow-hidden">
      {/* Background Dotted Patterns */}
      <div className="absolute top-10 left-0 w-32 md:w-64 h-full opacity-40 pointer-events-none">
        <svg width="100%" height="100%">
          <defs>
            <pattern id="dots-left" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
              <circle fill="#d1e8c9" cx="2" cy="2" r="2"></circle>
            </pattern>
          </defs>
          <rect x="0" y="0" width="100%" height="100%" fill="url(#dots-left)"></rect>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 flex flex-col items-center">
          <h2 className="text-3xl md:text-4xl font-bold text-black leading-[1.3] mb-4">
            Explore Our <span className="text-[#4b9b22]">Loan Products</span>
          </h2>
          <p className="text-gray-600 max-w-2xl text-center">
            Find the perfect financial solution tailored to your personal and business needs with our comprehensive range of loans.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-[0_5px_20px_rgba(0,0,0,0.04)] border border-[#f0f5ef] hover:shadow-[0_15px_30px_rgba(91,193,22,0.1)] transition-all duration-300 group flex flex-col h-full"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 bg-[#f0fbf0] text-[#0EA5E9] rounded-xl flex items-center justify-center group-hover:bg-[#0EA5E9] group-hover:text-white transition-colors duration-300">
                  <service.icon size={28} strokeWidth={2} />
                </div>
                <h3 className="text-xl font-bold text-black">{service.title}</h3>
              </div>
              
              <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-grow">
                {service.description}
              </p>

              <div className="flex items-center justify-between border-t border-gray-100 pt-4 mt-auto">
                <Link to={service.link} className="text-black font-semibold hover:text-[#0EA5E9] transition-colors text-sm flex items-center gap-1">
                  Know More
                </Link>
                <Link to="/get-started" className="text-[#0EA5E9] font-semibold hover:text-[#419822] transition-colors text-sm flex items-center gap-1">
                  Apply Now <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;
