import React from 'react';
import { CreditCard, IndianRupee, Clock, ShieldCheck } from 'lucide-react';
import ServiceDetailsLayout from '../components/ServiceDetailsLayout';

const MultiSingleEmiPage = () => {
  return (
    <ServiceDetailsLayout 
      icon={CreditCard}
      tagline="HAUS Nuo-Pay"
      title="Consolidate Your Payments with"
      highlight="Multi-Single EMI"
      description="Simplify your financial commitments by combining multiple EMIs into one manageable single payment. Experience ease of tracking and potential savings on interest."
      image="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2070&auto=format&fit=crop"
      badgeIcon={Clock}
      badgeTitle="Processing Time"
      badgeValue="Under"
      badgeSubtitle="24 Hours"
      features={[
        {
          icon: IndianRupee,
          title: "Lower Overall Outflow",
          desc: "By consolidating various high-interest debts into one, you can significantly lower your monthly financial burden."
        },
        {
          icon: Clock,
          title: "Simplified Tracking",
          desc: "No more remembering multiple due dates. Just one date, one amount, and complete peace of mind."
        },
        {
          icon: ShieldCheck,
          title: "Secure Process",
          desc: "Our platform ensures your financial data is completely secure while we restructure your EMIs."
        }
     ]}
      eligibility={[
        "Individuals with 2 or more active EMIs.",
        "Healthy repayment track record on existing loans.",
        "Minimum monthly income requirement of ₹20,000.",
        "Age between 21 to 55 years."
     ]}
      documents={[
        "Valid Identity and Address Proof",
        "Last 6 months Bank Statements showing current EMI deductions",
        "Latest 3 Salary Slips or Income Proof",
        "Details of existing active loan accounts"
     ]}
    />
  );
};

export default MultiSingleEmiPage;
