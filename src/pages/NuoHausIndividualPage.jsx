import React from 'react';
import { UserCircle, IndianRupee, Clock, ShieldCheck } from 'lucide-react';
import ServiceDetailsLayout from '../components/ServiceDetailsLayout';

const NuoHausIndividualPage = () => {
  return (
    <ServiceDetailsLayout 
      icon={UserCircle}
      tagline="NUO-HAUS"
      title="Premium Property Solutions for"
      highlight="Individual Buyers"
      description="NUO-HAUS provides end- property solutions for individuals. From tailored home search and legal verification to customized home finance, we make buying a home effortless."
      image="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop"
      badgeIcon={ShieldCheck}
      badgeTitle="Support"
      badgeValue="End-"
      badgeSubtitle="Assistance"
      features={[
        {
          icon: ShieldCheck,
          title: "Verified Properties",
          desc: "Access an exclusive inventory of legally vetted and high-quality residential properties."
        },
        {
          icon: IndianRupee,
          title: "Integrated Finance",
          desc: "Seamless integration with our Home Loan products for instant approvals and disbursals."
        },
        {
          icon: Clock,
          title: "Dedicated Advisor",
          desc: "A dedicated property advisor to guide you through shortlisting, negotiation, and paperwork."
        }
     ]}
      eligibility={[
        "Intention to purchase property within the next 6 months.",
        "Pre-approved loan eligibility or sufficient self-funding capability.",
        "Valid KYC credentials."
     ]}
      documents={[
        "KYC Documents (PAN, Aadhaar)",
        "Income Proof for financing eligibility",
        "Property preference and budget requirements"
     ]}
    />
  );
};

export default NuoHausIndividualPage;
