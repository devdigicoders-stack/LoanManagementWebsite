import { Zap, FileText, Banknote, ShieldCheck } from 'lucide-react';

const WhyChooseUs = () => {
  return (
    <section className="w-full bg-[#fafdf9] py-16 px-6 md:px-10">
      <div className="w-full px-6 lg:px-12 xl:px-16 mx-auto bg-[#FDFBF7] rounded-[40px] overflow-hidden flex flex-col lg:flex-row shadow-2xl">
        
        {/* Left Content */}
        <div className="lg:w-1/2 p-8 md:p-12 flex flex-col justify-center relative z-10">
          <div className="inline-block bg-[#E0F2FE] border border-[#BAE6FD] text-[#0369A1] rounded-full px-4 py-1.5 text-xs font-bold tracking-wider mb-6 w-max">
            WHY CHOOSE US
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-10 leading-tight">
            Experience the <span className="text-[#0EA5E9]">HAUS NUO-Pay Advantage</span>
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            
            {/* Feature 1 */}
            <div className="flex flex-col group">
              <div className="w-14 h-14 rounded-2xl border border-[#BAE6FD] bg-[#F0F9FF] flex items-center justify-center text-[#0EA5E9] shadow-sm mb-5 transition-all">
                <Zap size={26} strokeWidth={1.5} />
              </div>
              <h4 className="text-slate-900 font-bold text-lg mb-2">Fast Processing</h4>
              <p className="text-slate-600 text-sm leading-relaxed">
                Experience quick approvals and speedy disbursals to meet your financial needs without delay.
              </p>
            </div>
            
            {/* Feature 2 */}
            <div className="flex flex-col group">
              <div className="w-14 h-14 rounded-2xl border border-[#BAE6FD] bg-[#F0F9FF] flex items-center justify-center text-[#0EA5E9] shadow-sm mb-5 transition-all">
                <FileText size={26} strokeWidth={1.5} />
              </div>
              <h4 className="text-slate-900 font-bold text-lg mb-2">Minimum Documentation</h4>
              <p className="text-slate-600 text-sm leading-relaxed">
                Hassle-free application process with minimal paperwork required for loan approval.
              </p>
            </div>
            
            {/* Feature 3 */}
            <div className="flex flex-col group">
              <div className="w-14 h-14 rounded-2xl border border-[#BAE6FD] bg-[#F0F9FF] flex items-center justify-center text-[#0EA5E9] shadow-sm mb-5 transition-all">
                <Banknote size={26} strokeWidth={1.5} />
              </div>
              <h4 className="text-slate-900 font-bold text-lg mb-2">Flexible Repayment</h4>
              <p className="text-slate-600 text-sm leading-relaxed">
                Choose from customized EMI options and tenures that best suit your budget and cash flow.
              </p>
            </div>
            
            {/* Feature 4 */}
            <div className="flex flex-col group">
              <div className="w-14 h-14 rounded-2xl border border-[#BAE6FD] bg-[#F0F9FF] flex items-center justify-center text-[#0EA5E9] shadow-sm mb-5 transition-all">
                <ShieldCheck size={26} strokeWidth={1.5} />
              </div>
              <h4 className="text-slate-900 font-bold text-lg mb-2">100% Transparency</h4>
              <p className="text-slate-600 text-sm leading-relaxed">
                No hidden charges. We maintain complete transparency throughout your loan journey.
              </p>
            </div>
            
          </div>
        </div>

        {/* Right Content - Image */}
        <div className="lg:w-1/2 flex items-end justify-center pt-8 lg:pt-12 bg-gradient-to-t from-[#E0F2FE]/50 to-transparent px-4">
          <img 
            src="/home/why.png" 
            alt="Family holding glowing house" 
            className="w-full max-w-[350px] lg:max-w-full h-auto object-contain object-bottom drop-shadow-xl"
          />
        </div>
        
      </div>
    </section>
  );
};

export default WhyChooseUs;
