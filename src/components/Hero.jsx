import { ArrowRight, ShieldCheck, Clock, Headphones, Users, Landmark, IndianRupee, Award } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative w-full bg-[#030706] text-white pt-12 pb-24 lg:pb-32 px-6 md:px-10 overflow-x-clip">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#71d924] rounded-full mix-blend-screen filter blur-[200px] opacity-10"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#71d924] rounded-full mix-blend-screen filter blur-[200px] opacity-10"></div>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between z-10 relative w-full mb-8">

        {/* Left Content */}
        <div className="lg:w-1/2 flex flex-col items-start text-left mb-16 lg:mb-0 lg:pr-8">
          <div className="inline-block bg-[#132a13] border border-[#2d5a27] text-[#71d924] rounded-full px-5 py-2 text-sm font-medium mb-6">
            Welcome to NGM
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-[44px] font-bold leading-[1.2] mb-6">
            Turn Your Property Into <br />
            <span className="text-[#7ce225]">Financial Opportunity</span>
          </h1>

          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mb-10 leading-relaxed">
            Explore smart financial solutions for your property needs with simple information, transparent guidance, and a convenient digital experience.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 mb-14">
            <button className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#7ce225] hover:bg-[#68c61e] text-black font-semibold py-3.5 px-8 rounded-lg shadow-[0_0_20px_rgba(124,226,37,0.3)] transition-all duration-300 hover:scale-105">
              Explore Loan Solutions <ArrowRight size={20} />
            </button>
            <button className="w-full sm:w-auto flex items-center justify-center gap-2 bg-transparent border border-gray-600 hover:border-[#7ce225] text-white py-3.5 px-8 rounded-lg transition-all duration-300 group">
              Download App <ArrowRight size={20} className="text-[#7ce225] group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 md:gap-10">
            <div className="flex items-center gap-4">
              <div className="text-[#7ce225]">
                <ShieldCheck size={32} strokeWidth={2} />
              </div>
              <div>
                <h4 className="font-semibold text-lg text-white">Secure</h4>
                <p className="text-gray-400 text-sm whitespace-nowrap">100% Safe & Reliable</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="text-[#7ce225]">
                <Clock size={32} strokeWidth={2} />
              </div>
              <div>
                <h4 className="font-semibold text-lg text-white">Fast</h4>
                <p className="text-gray-400 text-sm whitespace-nowrap">Instant Transactions</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="text-[#7ce225]">
                <Headphones size={32} strokeWidth={2} />
              </div>
              <div>
                <h4 className="font-semibold text-lg text-white">Support</h4>
                <p className="text-gray-400 text-sm whitespace-nowrap">24/7 Customer Care</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Content - Hero Image */}
        <div className="lg:w-1/2 relative flex justify-center lg:justify-end">
          <img
            src="/home/image.png"
            alt="NGM Housing Solutions"
            className="w-full max-w-[700px] object-contain"
          />
        </div>
      </div>

      {/* Floating Bottom Stats Card */}
      <div className="absolute bottom-0 left-0 right-0 transform translate-y-1/2 px-4 md:px-10 z-20 flex justify-center">
        <div className="bg-white rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.08)] flex flex-col md:flex-row justify-between items-center py-6 px-6 md:px-8 w-full max-w-7xl mx-auto border border-gray-100">

          {/* Stat 1 */}
          <div className="flex flex-col md:flex-row items-center gap-3 w-full md:w-1/4 mb-6 md:mb-0 justify-center border-b md:border-b-0 md:border-r border-gray-200 pb-6 md:pb-0 last:border-0 last:pb-0">
            <div className="bg-[#f0fbf0] p-3 rounded-full text-[#5bc116] mb-2 md:mb-0">
              <Users size={28} strokeWidth={2} />
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-black font-bold text-2xl md:text-3xl">25K+</h3>
              <p className="text-gray-500 text-xs font-medium mt-0.5">Happy Customers</p>
            </div>
          </div>

          {/* Stat 2 */}
          <div className="flex flex-col md:flex-row items-center gap-3 w-full md:w-1/4 mb-6 md:mb-0 justify-center border-b md:border-b-0 md:border-r border-gray-200 pb-6 md:pb-0 last:border-0 last:pb-0">
            <div className="bg-[#f0fbf0] p-3 rounded-full text-[#5bc116] mb-2 md:mb-0">
              <Landmark size={28} strokeWidth={2} />
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-black font-bold text-2xl md:text-3xl">10K+</h3>
              <p className="text-gray-500 text-xs font-medium mt-0.5">Transactions Daily</p>
            </div>
          </div>

          {/* Stat 3 */}
          <div className="flex flex-col md:flex-row items-center gap-3 w-full md:w-1/4 mb-6 md:mb-0 justify-center border-b md:border-b-0 md:border-r border-gray-200 pb-6 md:pb-0 last:border-0 last:pb-0">
            <div className="bg-[#f0fbf0] p-3 rounded-full text-[#5bc116] mb-2 md:mb-0">
              <IndianRupee size={28} strokeWidth={2} />
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-black font-bold text-2xl md:text-3xl">500Cr+</h3>
              <p className="text-gray-500 text-xs font-medium mt-0.5">Payments Processed</p>
            </div>
          </div>

          {/* Stat 4 */}
          <div className="flex flex-col md:flex-row items-center gap-3 w-full md:w-1/4 justify-center">
            <div className="bg-[#f0fbf0] p-3 rounded-full text-[#5bc116] mb-2 md:mb-0">
              <Award size={28} strokeWidth={2} />
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-black font-bold text-2xl md:text-3xl">99.99%</h3>
              <p className="text-gray-500 text-xs font-medium mt-0.5">Success Rate</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
