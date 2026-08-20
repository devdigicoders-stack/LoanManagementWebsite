import React from 'react';
import { Home, Paintbrush, IndianRupee, Clock } from 'lucide-react';
import ServiceDetailsLayout from '../components/ServiceDetailsLayout';

const HomeExtensionLoanPage = () => {
  return (
    <ServiceDetailsLayout 
      icon={Home}
      tagline="Home Loans"
      title="Upgrade Your Living Space with a"
      highlight="Home Extension Loan"
      description="Need an extra bedroom for your growing family or a quiet study room? Our home extension loans provide the perfect financial support to add more space and value to your existing home."
      image="https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=2074&auto=format&fit=crop"
      badgeIcon={Paintbrush}
      badgeTitle="Renovation & Extension"
      badgeValue="100%"
      badgeSubtitle="Support"
      features={[
        {
          icon: Paintbrush,
          title: "Multi-Purpose Use",
          desc: "Use the funds for adding a floor, expanding rooms, or even significant structural renovations and upgrades."
        },
        {
          icon: IndianRupee,
          title: "Existing Customer Benefits",
          desc: "If you already have a home loan with us, get expedited approvals and preferential interest rates on your extension loan."
        },
        {
          icon: Clock,
          title: "Long Tenure",
          desc: "Spread the cost of your home upgrades over a long tenure of up to 20 years, making EMIs easily manageable."
        }
      ]}
      eligibility={[
        "Individuals owning a residential property in their name.",
        "Age between 21 and 65 years at loan maturity.",
        "Clear and marketable title of the existing property.",
        "Stable income to support the additional EMI burden.",
        "Estimate of extension work from a qualified civil engineer."
      ]}
      documents={[
        "Standard KYC (Aadhaar, PAN, Voter ID)",
        "Proof of income and employment",
        "Original title deeds of the existing property",
        "Approved plan for the proposed extension (if required by local laws)",
        "Detailed cost estimate from an architect/engineer"
      ]}
    />
  );
};

export default HomeExtensionLoanPage;
