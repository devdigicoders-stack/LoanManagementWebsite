import { Zap, FileText, Banknote, ShieldCheck } from 'lucide-react';

const WhyChooseUs = () => {
  return (
    <section className="w-full bg-[#fafdf9] py-16 px-6 md:px-10">
      <div className="max-w-7xl mx-auto bg-[#0a0f0a] rounded-[40px] overflow-hidden flex flex-col lg:flex-row shadow-2xl">
        
        {/* Left Content */}
        <div className="lg:w-1/2 p-8 md:p-12 flex flex-col justify-center relative z-10">
          <div className="inline-block bg-[#132a13] border border-[#2d5a27] text-[#71d924] rounded-full px-4 py-1.5 text-xs font-bold tracking-wider mb-6 w-max">
            WHY CHOOSE US
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-10 leading-tight">
            Experience the <span className="text-[#5bc116]">NGM Advantage</span>
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            
            {/* Feature 1 */}
            <div className="flex flex-col">
              <div className="w-14 h-14 rounded-xl border border-[#2af500] flex items-center justify-center text-[#1cf200] shadow-[inset_0_0_15px_rgba(42,245,0,0.2),0_0_15px_rgba(42,245,0,0.3)] mb-5">
                <Zap size={26} strokeWidth={1.5} />
              </div>
              <h4 className="text-white font-bold text-lg mb-2">Fast Processing</h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                Experience quick approvals and speedy disbursals to meet your financial needs without delay.
              </p>
            </div>
            
            {/* Feature 2 */}
            <div className="flex flex-col">
              <div className="w-14 h-14 rounded-xl border border-[#2af500] flex items-center justify-center text-[#1cf200] shadow-[inset_0_0_15px_rgba(42,245,0,0.2),0_0_15px_rgba(42,245,0,0.3)] mb-5">
                <FileText size={26} strokeWidth={1.5} />
              </div>
              <h4 className="text-white font-bold text-lg mb-2">Minimum Documentation</h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                Hassle-free application process with minimal paperwork required for loan approval.
              </p>
            </div>
            
            {/* Feature 3 */}
            <div className="flex flex-col">
              <div className="w-14 h-14 rounded-xl border border-[#2af500] flex items-center justify-center text-[#1cf200] shadow-[inset_0_0_15px_rgba(42,245,0,0.2),0_0_15px_rgba(42,245,0,0.3)] mb-5">
                <Banknote size={26} strokeWidth={1.5} />
              </div>
              <h4 className="text-white font-bold text-lg mb-2">Flexible Repayment</h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                Choose from customized EMI options and tenures that best suit your budget and cash flow.
              </p>
            </div>
            
            {/* Feature 4 */}
            <div className="flex flex-col">
              <div className="w-14 h-14 rounded-xl border border-[#2af500] flex items-center justify-center text-[#1cf200] shadow-[inset_0_0_15px_rgba(42,245,0,0.2),0_0_15px_rgba(42,245,0,0.3)] mb-5">
                <ShieldCheck size={26} strokeWidth={1.5} />
              </div>
              <h4 className="text-white font-bold text-lg mb-2">100% Transparency</h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                No hidden charges. We maintain complete transparency throughout your loan journey.
              </p>
            </div>
            
          </div>
        </div>

        {/* Right Content - Image */}
        <div className="lg:w-1/2 relative min-h-[300px] lg:min-h-full">
          <img 
            src="/home/why.png" 
            alt="Family holding glowing house" 
            className="absolute inset-0 w-full h-full object-cover lg:object-contain object-right-bottom"
          />
        </div>
        
      </div>
    </section>
  );
};

export default WhyChooseUs;
