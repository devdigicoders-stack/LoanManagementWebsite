import React from 'react';
import { Home, IndianRupee, Clock, ShieldCheck } from 'lucide-react';
import ServiceDetailsLayout from '../components/ServiceDetailsLayout';

const HomeLoanPage = () => {
  return (
    <ServiceDetailsLayout 
      icon={Home}
      tagline="Morgatage"
      title="Step Into Your Own House with a"
      highlight="Home Loan"
      description="Turn your dream of owning a home into a reality. We offer home loans with attractive interest rates, flexible tenures, and a simplified documentation process."
      image="https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1973&auto=format&fit=crop"
      badgeIcon={Home}
      badgeTitle="Loan Tenure"
      badgeValue="Up To"
      badgeSubtitle="30 Years"
      features={[
        {
          icon: IndianRupee,
          title: "Competitive Interest Rates",
          desc: "Enjoy some of the best interest rates in the market tailored to your credit profile."
        },
        {
          icon: Clock,
          title: "Long Repayment Tenure",
          desc: "Spread out your EMIs comfortably over a period of up to 30 years."
        },
        {
          icon: ShieldCheck,
          title: "Doorstep Service",
          desc: "Our executives will visit you to collect documents and assist with the application."
        }
     ]}
      eligibility={[
        "Salaried individuals and self-employed professionals.",
        "Age between 21 and 65 years.",
        "Stable income source and good CIBIL score.",
        "Clear property title and approvals."
     ]}
      documents={[
        "Property Documents (Agreement to Sale, Title Deeds)",
        "KYC Documents (PAN, Aadhaar)",
        "Income Proof (Salary Slips/ITR)",
        "Last 6 months Bank Statements"
     ]}
    />
  );
};

export default HomeLoanPage;
