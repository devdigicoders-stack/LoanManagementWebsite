import React from 'react';
import { Briefcase, IndianRupee, TrendingUp, ShieldCheck } from 'lucide-react';
import ServiceDetailsLayout from '../components/ServiceDetailsLayout';

const BusinessLoanPage = () => {
  return (
    <ServiceDetailsLayout 
      icon={Briefcase}
      tagline="Un-Secured"
      title="Fuel Your Enterprise Growth with a"
      highlight="Business Loan"
      description="Expand your operations, manage working capital, or purchase new inventory. Our collateral-free business loans provide the capital you need to scale fast."
      image="https://images.unsplash.com/photo-1444653614773-995cb1ef9efa?q=80&w=2076&auto=format&fit=crop"
      badgeIcon={TrendingUp}
      badgeTitle="Max Loan"
      badgeValue="Up To"
      badgeSubtitle="₹50 Lakhs"
      features={[
        {
          icon: IndianRupee,
          title: "No Collateral Required",
          desc: "Get funding based on your business financials without putting your personal or business assets on the line."
        },
        {
          icon: TrendingUp,
          title: "Flexible Repayment",
          desc: "Choose a repayment schedule that aligns with your business cash flow cycles."
        },
        {
          icon: ShieldCheck,
          title: "Fast Disbursal",
          desc: "Quick processing ensuring funds hit your account exactly when the business needs them."
        }
     ]}
      eligibility={[
        "Business should have a minimum vintage of 3 years.",
        "Minimum annual turnover as per policy guidelines.",
        "Business must be profitable for the last 2 consecutive years.",
        "Promoters/Directors must have a healthy CIBIL score."
     ]}
      documents={[
        "Business Registration Proof (GST Certificate, MSME, etc.)",
        "Last 2 years Audited Financials (P&L and Balance Sheet)",
        "Last 2 years ITR",
        "Last 6-12 months Business Bank Statements",
        "KYC of Promoters/Directors"
     ]}
    />
  );
};

export default BusinessLoanPage;
