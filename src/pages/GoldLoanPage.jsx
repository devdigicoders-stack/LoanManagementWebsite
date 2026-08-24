import React from 'react';
import { Coins, IndianRupee, Clock, ShieldCheck } from 'lucide-react';
import ServiceDetailsLayout from '../components/ServiceDetailsLayout';

const GoldLoanPage = () => {
  return (
    <ServiceDetailsLayout 
      icon={Coins}
      tagline="Morgatage"
      title="Unlock the True Value of Your Assets with a"
      highlight="Gold Loan"
      description="Pledge your gold ornaments to get instant cash for any emergency or business requirement. Enjoy high per-gram value and secure storage."
      image="https://images.unsplash.com/photo-1610375461246-83df859d849d?q=80&w=2070&auto=format&fit=crop"
      badgeIcon={Clock}
      badgeTitle="Disbursal"
      badgeValue="30 Min"
      badgeSubtitle="Process"
      features={[
        {
          icon: IndianRupee,
          title: "High Valuation",
          desc: "Get the maximum possible loan amount against your gold based on current market rates."
        },
        {
          icon: Clock,
          title: "Instant Cash",
          desc: "Walk in with your gold and walk out with funds within minutes."
        },
        {
          icon: ShieldCheck,
          title: "Complete Security",
          desc: "Your gold is stored securely in strong rooms with 24x7 surveillance and full insurance coverage."
        }
     ]}
      eligibility={[
        "Any individual aged 18 years and above.",
        "Must possess gold ornaments of 18K purity or above.",
        "No CIBIL score checks required for gold loans."
     ]}
      documents={[
        "Valid Identity Proof (Aadhaar, Voter ID, Passport, Driving License)",
        "Address Proof",
        "One passport size photograph"
     ]}
    />
  );
};

export default GoldLoanPage;
