import React from 'react';
import { Truck, IndianRupee, Clock, FileText } from 'lucide-react';
import ServiceDetailsLayout from '../components/ServiceDetailsLayout';

const CommercialVehicleLoanPage = () => {
  return (
    <ServiceDetailsLayout 
      icon={Truck}
      tagline="Vehicle Finance"
      title="Fuel Your Business with a"
      highlight="Commercial Vehicle Loan"
      description="Expand your fleet and scale your operations with tailored financing solutions for new and used commercial vehicles. Fast processing and flexible repayment options."
      image="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=2070&auto=format&fit=crop"
      badgeIcon={IndianRupee}
      badgeTitle="Interest Rates From"
      badgeValue="9.5%"
      badgeSubtitle="p.a."
      features={[
        {
          icon: IndianRupee,
          title: "Up to 100% Financing",
          desc: "Get maximum funding on the chassis and body construction for both new and used vehicles, minimizing your initial capital outflow."
        },
        {
          icon: Clock,
          title: "Flexible Tenure",
          desc: "Repay at your own pace with flexible loan tenures ranging from 12 to 60 months, aligned with your business cash flows."
        },
        {
          icon: FileText,
          title: "Fast Processing",
          desc: "Experience hassle-free and swift loan processing with minimal documentation so your vehicles hit the road faster."
        }
      ]}
      eligibility={[
        "Individuals, Partnership Firms, and Private/Public Limited Companies.",
        "Minimum 2 years of experience in the same line of business.",
        "Good repayment track record if there are existing loans.",
        "Valid driving license and KYC documents for individuals.",
        "Satisfactory financial statements for business entities."
      ]}
      documents={[
        "KYC Documents (Aadhaar, PAN, Voter ID)",
        "Last 6 months bank statements",
        "Proof of business existence & vintage",
        "Vehicle quotation from authorized dealer",
        "Route permit (if applicable)",
        "Latest ITR for self-employed/companies"
      ]}
    />
  );
};

export default CommercialVehicleLoanPage;
