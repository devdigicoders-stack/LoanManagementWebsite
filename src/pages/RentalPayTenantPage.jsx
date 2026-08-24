import React from 'react';
import { Home, IndianRupee, Clock, ShieldCheck } from 'lucide-react';
import ServiceDetailsLayout from '../components/ServiceDetailsLayout';

const RentalPayTenantPage = () => {
  return (
    <ServiceDetailsLayout 
      icon={Home}
      tagline="Rental-Pay"
      title="Flexible Rent Payment Solutions for"
      highlight="Renter/Tenant"
      description="Pay your rent via credit card, convert security deposits into easy EMIs, and enjoy a seamless rental experience without tying up your liquid cash."
      image="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=2070&auto=format&fit=crop"
      badgeIcon={IndianRupee}
      badgeTitle="Deposit"
      badgeValue="Easy"
      badgeSubtitle="EMI Options"
      features={[
        {
          icon: IndianRupee,
          title: "Pay Rent via Credit Card",
          desc: "Earn reward points and get up to 45 days of interest-free credit by paying your rent using a credit card."
        },
        {
          icon: Clock,
          title: "Security Deposit Finance",
          desc: "Don't let hefty security deposits stop you. We finance the deposit, and you repay in affordable monthly installments."
        },
        {
          icon: ShieldCheck,
          title: "Credit Score Boost",
          desc: "Timely rent payments through our platform are reported to credit bureaus, helping you build a strong credit history."
        }
     ]}
      eligibility={[
        "Must have a valid rental agreement.",
        "Stable source of income (Salaried or Self-Employed).",
        "Minimum monthly income of ₹25,000.",
        "Good credit history for deposit financing."
     ]}
      documents={[
        "Valid Rental Agreement",
        "KYC Documents (Aadhaar, PAN)",
        "Income Proof (Salary Slips/ITR)",
        "Latest Bank Statements"
     ]}
    />
  );
};

export default RentalPayTenantPage;
