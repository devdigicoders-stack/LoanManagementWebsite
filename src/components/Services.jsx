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
    <section className="relative w-full bg-transparent py-20 px-6 md:px-10 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#0EA5E9] opacity-10 blur-[100px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-[#0EA5E9] opacity-5 blur-[80px] rounded-full pointer-events-none"></div>

      <div className="w-full px-6 lg:px-12 xl:px-16 mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 flex flex-col items-center">
          <h2 className="font-display text-3xl md:text-5xl font-bold text-slate-900 leading-[1.3] mb-6">
            Explore Our <span className="text-[#0EA5E9]">Loan Products</span>
          </h2>
          <p className="text-slate-600 max-w-2xl text-center text-lg">
            Find the perfect financial solution tailored to your personal and business needs with our comprehensive range of loans.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200 hover:border-[#0EA5E9]/50 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group flex flex-col h-full"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-[#F0F9FF] text-[#0EA5E9] rounded-xl flex items-center justify-center border border-[#E0F2FE] group-hover:bg-[#0EA5E9] group-hover:text-white group-hover:border-[#0EA5E9] group-hover:shadow-md transition-all duration-300 transform group-hover:scale-110">
                  <service.icon size={28} strokeWidth={2} />
                </div>
                <h3 className="font-display text-xl lg:text-2xl font-bold text-slate-900 group-hover:text-[#0EA5E9] transition-colors">{service.title}</h3>
              </div>
              
              <p className="text-slate-600 text-base leading-relaxed mb-8 flex-grow group-hover:text-slate-700 transition-colors">
                {service.description}
              </p>

              <div className="flex items-center justify-between border-t border-slate-100 pt-5 mt-auto">
                <Link to={service.link} className="text-slate-500 font-semibold hover:text-slate-900 transition-colors text-sm flex items-center gap-1">
                  Know More
                </Link>
                <Link to="/contact" className="text-[#0EA5E9] font-bold hover:text-[#0284C7] transition-colors text-sm flex items-center gap-2 group/btn">
                  Apply Now <ArrowRight size={16} className="transform group-hover/btn:translate-x-1 transition-transform" />
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
