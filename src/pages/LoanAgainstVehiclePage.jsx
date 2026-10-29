import React from 'react';
import { Car, IndianRupee, Clock, ShieldCheck } from 'lucide-react';
import ServiceDetailsLayout from '../components/ServiceDetailsLayout';

const LoanAgainstVehiclePage = () => {
  return (
    <ServiceDetailsLayout 
      icon={Car}
      tagline="Morgatage"
      title="Unlock Quick Liquidity with a"
      highlight="Loan Against Vehicle"
      description="Leverage your commercial or private four-wheeler/vehicle equity for instant funds while continuing to drive and operate your vehicle without interruption."
      image="https://images.unsplash.com/photo-1549399542-7e3f8b79c341?q=80&w=2070&auto=format&fit=crop"
      badgeIcon={IndianRupee}
      badgeTitle="High Valuation"
      badgeValue="Up to 150%"
      badgeSubtitle="Of Vehicle Value"
      features={[
        {
          icon: IndianRupee,
          title: "High Valuation Funding",
          desc: "Get funding up to 150% of the current market value of your vehicle with lowest interest rates."
        },
        {
          icon: Clock,
          title: "Quick Disbursal",
          desc: "Fast verification and sanction within 24-48 hours with minimal documentation."
        },
        {
          icon: ShieldCheck,
          title: "Continue Driving",
          desc: "Retain complete physical possession and daily usage of your vehicle throughout the loan tenure."
        }
      ]}
      eligibility={[
        "Vehicle must be registered in the applicant's name.",
        "Vehicle age should generally be within acceptable lender limits.",
        "Salaried or self-employed individuals with steady income source.",
        "Valid registration certificate (RC) and insurance cover."
      ]}
      documents={[
        "Original Vehicle Registration Certificate (RC)",
        "Valid Comprehensive Vehicle Insurance Policy",
        "KYC Documents (Aadhaar Card, PAN Card)",
        "Latest Bank Statements & Income Proof",
        "Recent Passport Size Photograph"
      ]}
    />
  );
};

export default LoanAgainstVehiclePage;
