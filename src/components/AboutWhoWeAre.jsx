import { Users, ShieldCheck, Rocket, Target } from 'lucide-react';

const AboutWhoWeAre = () => {
  return (
    <section className="w-full bg-white pt-10 pb-20 px-6 md:px-10">
      <div className="w-full px-6 lg:px-12 xl:px-16 mx-auto flex flex-col lg:flex-row gap-16 items-center">
        
        {/* Left Side - Content */}
        <div className="w-full lg:w-[55%] flex flex-col">

          {/* Heading */}
          <h2 className="text-3xl md:text-4xl lg:text-[40px] font-bold text-gray-900 mb-6 leading-[1.25]">
            Who We Are
          </h2>
          
          {/* Paragraphs */}
          <p className="text-gray-600 text-sm md:text-[15px] leading-relaxed mb-4 pr-4">
            HAUS NUO-Pay is an Indian Multinational Financial Institution’s, Real Estate’s Management, Start-Up Growth Registration, Online Deliveries and Digital Payments Transaction Technology of Establishing a Domestic, Open and Multilateral System of Payments Company Headquartered in Bengaluru, Karnataka, India.
          </p>
          <p className="text-gray-600 text-sm md:text-[15px] leading-relaxed mb-4 pr-4">
            It was Founded in October 2014, By Aaditya Raj Singh, Shewlee Paul and Binay Kumar Paul. The NuoG Growth App, That Provides at Mobile Phone Based on the Unified Payments Interface System and Digital Wallet, Went Live in August 2025.
          </p>
          <p className="text-gray-600 text-sm md:text-[15px] leading-relaxed mb-4 pr-4">
            The Reserve Bank of India Authorized the Company’s Use of the HAUS NUO-Pay Wallet and In April 2025 the Company Began Providing Small Loans to Consumers as Part of Its Services.
          </p>
          <p className="text-gray-600 text-sm md:text-[15px] leading-relaxed mb-10 pr-4">
            HAUS NUO-Pay was Founded with the Mission to Create a Digital ECOSYSTEM of Financial Services Accessible to Anyone. We are a Leading Fintech Company and A Wholly 100% Owned Subsidiary of NuoG Housing Payment’s Limited. Some of Our Products Include Digital Payments Accepting Online & Offline Payments from their Consumers.
          </p>
        </div>

        {/* Right Side - List */}
        <div className="w-full lg:w-[45%] flex flex-col gap-4">
          <div className="bg-white border border-gray-100 p-5 rounded-2xl shadow-sm flex items-start gap-4">
            <div className="w-12 h-12 bg-[#f4fbf0] rounded-xl flex items-center justify-center text-[#0EA5E9] shrink-0">
              <ShieldCheck size={24} strokeWidth={2} />
            </div>
            <div>
              <h4 className="text-black font-bold text-base mb-1">Property Finance</h4>
              <p className="text-gray-500 text-[13px] leading-relaxed">Solutions around your property goals.</p>
            </div>
          </div>

          <div className="bg-white border border-gray-100 p-5 rounded-2xl shadow-sm flex items-start gap-4">
            <div className="w-12 h-12 bg-[#f4fbf0] rounded-xl flex items-center justify-center text-[#0EA5E9] shrink-0">
              <Target size={24} strokeWidth={2} />
            </div>
            <div>
              <h4 className="text-black font-bold text-base mb-1">Financial Information</h4>
              <p className="text-gray-500 text-[13px] leading-relaxed">Transparent and easy to understand.</p>
            </div>
          </div>

          <div className="bg-white border border-gray-100 p-5 rounded-2xl shadow-sm flex items-start gap-4">
            <div className="w-12 h-12 bg-[#f4fbf0] rounded-xl flex items-center justify-center text-[#0EA5E9] shrink-0">
              <Rocket size={24} strokeWidth={2} />
            </div>
            <div>
              <h4 className="text-black font-bold text-base mb-1">Digital Experience</h4>
              <p className="text-gray-500 text-[13px] leading-relaxed">Simple, secure and convenient.</p>
            </div>
          </div>

          <div className="bg-white border border-gray-100 p-5 rounded-2xl shadow-sm flex items-start gap-4">
            <div className="w-12 h-12 bg-[#f4fbf0] rounded-xl flex items-center justify-center text-[#0EA5E9] shrink-0">
              <Users size={24} strokeWidth={2} />
            </div>
            <div>
              <h4 className="text-black font-bold text-base mb-1">Customer First</h4>
              <p className="text-gray-500 text-[13px] leading-relaxed">Your goals, our priority.</p>
            </div>
          </div>

          
        </div>
      </div>
    </section>
  );
};

export default AboutWhoWeAre;


