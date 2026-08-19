import { MapPinned, UserCheck, Atom, FileSearch } from 'lucide-react';

const WhyChooseUs = () => {
  return (
    <section className="w-full bg-[#fafdf9] py-16 px-6 md:px-10">
      <div className="max-w-7xl mx-auto bg-[#0a0f0a] rounded-[40px] overflow-hidden flex flex-col lg:flex-row shadow-2xl">
        
        {/* Left Content */}
        <div className="lg:w-1/2 p-6 md:p-8 lg:px-12 lg:py-8 flex flex-col justify-center relative z-10">
          <div className="inline-block bg-[#132a13] border border-[#2d5a27] text-[#71d924] rounded-full px-4 py-1.5 text-[10px] font-bold tracking-wider mb-5 w-max">
            WHY CHOOSE US
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-[40px] font-bold text-white mb-8 leading-tight">
            Why Thousands Trust <span className="text-[#5bc116]">NGM</span>
          </h2>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4">
            
            {/* Feature 1 */}
            <div className="flex flex-col">
              <div className="w-12 h-12 rounded-xl border border-[#5bc116] flex items-center justify-center text-[#7ce225] shadow-[inset_0_0_12px_rgba(91,193,22,0.2),0_0_12px_rgba(91,193,22,0.4)] mb-4">
                <MapPinned size={22} strokeWidth={1.5} />
              </div>
              <h4 className="text-white font-bold text-[15px] mb-2">Transparent Information</h4>
              <p className="text-gray-400 text-[11px] lg:text-xs leading-relaxed">
                Understand loan-related terms, costs, eligibility, and repayment responsibilities before making a decision.
              </p>
            </div>
            
            {/* Feature 2 */}
            <div className="flex flex-col">
              <div className="w-12 h-12 rounded-xl border border-[#5bc116] flex items-center justify-center text-[#7ce225] shadow-[inset_0_0_12px_rgba(91,193,22,0.2),0_0_12px_rgba(91,193,22,0.4)] mb-4">
                <UserCheck size={22} strokeWidth={1.5} />
              </div>
              <h4 className="text-white font-bold text-[15px] mb-2">Property-Focused Solutions</h4>
              <p className="text-gray-400 text-[11px] lg:text-xs leading-relaxed">
                Explore financial options specifically related to residential and commercial properties.
              </p>
            </div>
            
            {/* Feature 3 */}
            <div className="flex flex-col">
              <div className="w-12 h-12 rounded-xl border border-[#5bc116] flex items-center justify-center text-[#7ce225] shadow-[inset_0_0_12px_rgba(91,193,22,0.2),0_0_12px_rgba(91,193,22,0.4)] mb-4">
                <Atom size={22} strokeWidth={1.5} />
              </div>
              <h4 className="text-white font-bold text-[15px] mb-2">Digital Convenience</h4>
              <p className="text-gray-400 text-[11px] lg:text-xs leading-relaxed">
                Access information and supported services through our website and mobile application.
              </p>
            </div>
            
            {/* Feature 4 */}
            <div className="flex flex-col">
              <div className="w-12 h-12 rounded-xl border border-[#5bc116] flex items-center justify-center text-[#7ce225] shadow-[inset_0_0_12px_rgba(91,193,22,0.2),0_0_12px_rgba(91,193,22,0.4)] mb-4">
                <FileSearch size={22} strokeWidth={1.5} />
              </div>
              <h4 className="text-white font-bold text-[15px] mb-2">Simple Process</h4>
              <p className="text-gray-400 text-[11px] lg:text-xs leading-relaxed">
                We aim to make the financial journey easier to understand by presenting important information in a clear format.
              </p>
            </div>
            
          </div>
        </div>

        {/* Right Content - Image */}
        <div className="lg:w-1/2 relative min-h-[250px] lg:min-h-[300px]">
          <img 
            src="/home/why.png" 
            alt="Family holding glowing house" 
            className="absolute inset-0 w-full h-full object-contain object-right-bottom"
          />
        </div>
        
      </div>
    </section>
  );
};

export default WhyChooseUs;
