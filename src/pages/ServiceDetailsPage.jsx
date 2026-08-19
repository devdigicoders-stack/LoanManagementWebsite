import React, { useEffect } from 'react';
import ServiceDetailsHero from '../components/ServiceDetailsHero';
import ServiceProcess from '../components/ServiceProcess';
import ServiceSuitableFor from '../components/ServiceSuitableFor';
import ServiceBenefits from '../components/ServiceBenefits';
import ServiceCTA from '../components/ServiceCTA';
import { Info } from 'lucide-react';

const ServiceDetailsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#fcfcfc] min-h-screen">
      <ServiceDetailsHero 
        title="Loan Against Property"
        description="Explore secured financing options against eligible residential or commercial property."
        imageUrl="/aboutus/heroimage.png"
        cardData={true}
      />
      <ServiceProcess />
      <ServiceSuitableFor />
      
      {/* Important Information Box */}
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-8">
        <div className="bg-[#fff9eb] border border-[#fde8bc] rounded-2xl p-6 flex items-start gap-4 shadow-sm">
          <div className="text-[#e5a030] mt-0.5 shrink-0">
            <Info size={24} />
          </div>
          <div>
            <h4 className="text-[#e5a030] font-bold text-[15px] mb-1">Important Information</h4>
            <p className="text-[#c18625] text-[13px] leading-relaxed">
              Loan approval, interest rates, loan amount, and other terms depend on the respective lender's policies, applicant eligibility and property assessment.
            </p>
          </div>
        </div>
      </div>

      <ServiceBenefits />
      <ServiceCTA />
    </div>
  );
};

export default ServiceDetailsPage;
