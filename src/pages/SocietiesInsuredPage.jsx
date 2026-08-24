import React from 'react';
import { Building2, IndianRupee, Umbrella, ShieldCheck } from 'lucide-react';
import ServiceDetailsLayout from '../components/ServiceDetailsLayout';

const SocietiesInsuredPage = () => {
  return (
    <ServiceDetailsLayout 
      icon={Building2}
      tagline="Societies Insured"
      title="Comprehensive Coverage for"
      highlight="Housing Societies"
      description="Protect your entire housing society with tailor-made insurance policies. From structural damage to public liability, ensure complete peace of mind for all residents."
      image="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
      badgeIcon={Umbrella}
      badgeTitle="Coverage"
      badgeValue="360°"
      badgeSubtitle="Protection"
      features={[
        {
          icon: Umbrella,
          title: "All-Risk Protection",
          desc: "Coverage against fire, natural disasters, theft, and accidental damage to common society property."
        },
        {
          icon: ShieldCheck,
          title: "Public Liability",
          desc: "Protects the society management against claims arising from accidents or injuries occurring on the premises."
        },
        {
          icon: IndianRupee,
          title: "Affordable Premiums",
          desc: "Group negotiated rates ensure the society gets the best coverage at highly competitive premium costs."
        }
     ]}
      eligibility={[
        "Registered Cooperative Housing Society or RWA.",
        "Properly maintained building structure.",
        "No severe pre-existing structural damages."
     ]}
      documents={[
        "Society Registration Certificate",
        "Previous year Audit Report",
        "Building layout and valuation report",
        "Details of common amenities and installations"
     ]}
    />
  );
};

export default SocietiesInsuredPage;
