import React from 'react';
import { Key, IndianRupee, Clock, ShieldCheck } from 'lucide-react';
import ServiceDetailsLayout from '../components/ServiceDetailsLayout';

const RentalPayLandlordPage = () => {
  return (
    <ServiceDetailsLayout 
      icon={Key}
      tagline="Rental-Pay"
      title="Secure & Timely Rent Collection for"
      highlight="Home-Owner/Landlord"
      description="Manage your rental properties with ease. Our landlord solutions guarantee on-time rent collection, property monitoring, and financial security so you never have to worry about defaults."
      image="https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1973&auto=format&fit=crop"
      badgeIcon={Clock}
      badgeTitle="Rent Deposit"
      badgeValue="On-Time"
      badgeSubtitle="Guaranteed"
      features={[
        {
          icon: IndianRupee,
          title: "Assured Rent Delivery",
          desc: "Get your rent credited directly to your bank account on a fixed date every month, regardless of tenant delays."
        },
        {
          icon: ShieldCheck,
          title: "Tenant Verification",
          desc: "Comprehensive background checks, credit scoring, and employment verification for all prospective tenants."
        },
        {
          icon: Key,
          title: "Property Management",
          desc: "End- management including agreements, renewals, and legal compliance assistance."
        }
     ]}
      eligibility={[
        "Must be the legal owner of the property.",
        "Property must be located within our serviceable city limits.",
        "Clear and marketable title of the property."
     ]}
      documents={[
        "Proof of Ownership (Title Deed, Latest Tax Receipt)",
        "KYC Documents (PAN, Aadhaar)",
        "Bank Account Details for rent credit",
        "Existing Rental Agreement (if any)"
     ]}
    />
  );
};

export default RentalPayLandlordPage;
