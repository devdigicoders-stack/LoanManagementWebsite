import React from 'react';
import { Settings, IndianRupee, Clock, ShieldCheck } from 'lucide-react';
import ServiceDetailsLayout from '../components/ServiceDetailsLayout';

const EquipmentLoanPage = () => {
  return (
    <ServiceDetailsLayout 
      icon={Settings}
      tagline="Un-Secured"
      title="Upgrade Your Business Capabilities with an"
      highlight="Equipment Loan"
      description="Finance the purchase of new machinery, technology, or specialized equipment to enhance your operational efficiency and stay ahead of the competition."
      image="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop"
      badgeIcon={ShieldCheck}
      badgeTitle="Finance"
      badgeValue="Up To"
      badgeSubtitle="90% Cost"
      features={[
        {
          icon: IndianRupee,
          title: "High Funding",
          desc: "Get funding up to 90% of the equipment value to preserve your working capital."
        },
        {
          icon: Clock,
          title: "Quick Deployment",
          desc: "Fast processing ensures you can acquire the equipment and put it to work immediately."
        },
        {
          icon: Settings,
          title: "Customized Tenure",
          desc: "Repayment tenures structured around the economic life and revenue generation of the equipment."
        }
     ]}
      eligibility={[
        "Businesses operating for at least 3 years.",
        "Positive net worth and profitable operations.",
        "The equipment must be used for business/commercial purposes.",
        "Satisfactory credit history."
     ]}
      documents={[
        "Proforma Invoice of the equipment to be purchased",
        "Business Registration documents",
        "Last 2 years Audited Financials",
        "Last 6 months Bank Statements",
        "KYC of Business Owners"
     ]}
    />
  );
};

export default EquipmentLoanPage;
