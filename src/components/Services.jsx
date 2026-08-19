import { ArrowRight, Home, Building, Hammer, Wrench, Briefcase } from 'lucide-react';

const services = [
  {
    title: "Home Loan",
    description: "Finance your dream home with a structured loan solution designed for property purchase, construction, or other eligible housing requirements.",
    icon: Home
  },
  {
    title: "Loan Against Property",
    description: "Use the value of an eligible residential or commercial property to explore secured financing options for personal or business requirements.",
    icon: Building
  },
  {
    title: "Property Construction Loan",
    description: "Explore financing options for constructing a residential property according to your requirements and applicable lender policies.",
    icon: Hammer
  },
  {
    title: "Home Renovation Loan",
    description: "Plan improvements, repairs, extensions, or renovation of your existing property with suitable financing options.",
    icon: Wrench
  },
  {
    title: "Commercial Property Finance",
    description: "Explore financial solutions related to eligible commercial properties, subject to lender eligibility and property assessment.",
    icon: Briefcase
  }
];

const Services = () => {
  return (
    <section className="relative w-full bg-[#fafdf9] py-24 px-6 md:px-10 overflow-hidden">
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
      <div className="absolute top-10 right-0 w-32 md:w-64 h-full opacity-40 pointer-events-none">
        <svg width="100%" height="100%">
          <defs>
            <pattern id="dots-right" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
              <circle fill="#d1e8c9" cx="2" cy="2" r="2"></circle>
            </pattern>
          </defs>
          <rect x="0" y="0" width="100%" height="100%" fill="url(#dots-right)"></rect>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Section Header */}
        <div className="text-center mb-16 flex flex-col items-center">
          <div className="inline-block bg-[#f0fbf0] text-[#5bc116] rounded-full px-4 py-1.5 text-xs font-bold tracking-wider mb-6">
            OUR SERVICES
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-[42px] font-bold text-black leading-[1.3]">
            Our Key <br />
            <span className="text-[#4b9b22]">Financial Solutions</span>
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-6 md:p-8 shadow-[0_5px_30px_rgba(0,0,0,0.03)] border border-[#f0f5ef] hover:shadow-[0_15px_40px_rgba(91,193,22,0.08)] transition-all duration-300 group"
            >
              <div className="flex gap-5 h-full">
                {/* Left side icons */}
                <div className="flex flex-col justify-between items-center shrink-0">
                  <div className="w-14 h-14 bg-[#419822] rounded-full flex items-center justify-center text-white shadow-md group-hover:bg-[#5bc116] transition-colors duration-300">
                    <service.icon size={26} strokeWidth={1.5} />
                  </div>
                  <div className="w-8 h-8 bg-[#e1f5d8] rounded-full flex items-center justify-center text-[#419822] mt-6 group-hover:bg-[#5bc116] group-hover:text-white transition-colors duration-300">
                    <ArrowRight size={16} strokeWidth={2.5} />
                  </div>
                </div>

                {/* Right side text */}
                <div className="flex flex-col">
                  <h3 className="text-[19px] font-bold text-black mb-2">{service.title}</h3>
                  <p className="text-gray-500 text-[14px] leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;
