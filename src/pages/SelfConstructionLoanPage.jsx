import React from 'react';
import { Home, Hammer, TrendingUp, HandCoins } from 'lucide-react';
import ServiceDetailsLayout from '../components/ServiceDetailsLayout';

const SelfConstructionLoanPage = () => {
  return (
    <ServiceDetailsLayout 
      icon={Home}
      tagline="Home Loans"
      title="Build It Your Way with a"
      highlight="Self-Construction Loan"
      description="Don't just buy a house, build a home. Our self-construction loans offer tranche-based disbursements aligned with your construction progress, ensuring you always have funds when you need them."
      image="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2071&auto=format&fit=crop"
      badgeIcon={Hammer}
      badgeTitle="Max Loan Amount"
      badgeValue="₹5 Cr"
      badgeSubtitle="+"
      features={[
        {
          icon: HandCoins,
          title: "Tranche Disbursal",
          desc: "Receive funds in stages based on the completion of construction milestones, reducing your immediate interest burden."
        },
        {
          icon: TrendingUp,
          title: "Extended Tenures",
          desc: "Repay comfortably over a period of up to 30 years, keeping your monthly EMIs highly affordable."
        },
        {
          icon: Home,
          title: "Plot + Construction",
          desc: "We offer composite loans that cover both the purchase of a residential plot and the construction cost."
        }
      ]}
      eligibility={[
        "Indian residents or NRIs aged 21 to 65 years.",
        "Stable source of income (Salaried or Self-employed).",
        "Clear title of the plot in the applicant's name.",
        "Approved construction plan from local municipal authorities.",
        "Estimate of construction cost from a certified architect/engineer."
      ]}
      documents={[
        "Standard KYC and Income Proof documents",
        "Sale deed or allotment letter of the plot",
        "Approved building plan and layout",
        "Detailed construction cost estimate",
        "No Objection Certificate (NOC) from builder/society",
        "Title search report and encumbrance certificate"
      ]}
    />
  );
};

export default SelfConstructionLoanPage;
