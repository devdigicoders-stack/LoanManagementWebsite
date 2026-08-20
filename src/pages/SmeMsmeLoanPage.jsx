import React from 'react';
import { Briefcase, TrendingUp, IndianRupee, Building2 } from 'lucide-react';
import ServiceDetailsLayout from '../components/ServiceDetailsLayout';

const SmeMsmeLoanPage = () => {
  return (
    <ServiceDetailsLayout 
      icon={Briefcase}
      tagline="Business Finance"
      title="Scale Your Business with"
      highlight="SME & MSME Loans"
      description="From managing working capital to purchasing new machinery, our tailored SME/MSME financing solutions are designed to fuel your business growth and help you seize new opportunities."
      image="/sme_loan.jpg"
      badgeIcon={Building2}
      badgeTitle="Funding Up To"
      badgeValue="₹10 Cr"
      badgeSubtitle=""
      features={[
        {
          icon: IndianRupee,
          title: "Collateral-Free Options",
          desc: "We offer unsecured business loans under various government credit guarantee schemes (like CGTMSE) for eligible enterprises."
        },
        {
          icon: TrendingUp,
          title: "Working Capital & Term Loans",
          desc: "Choose between short-term working capital limits (Cash Credit/Overdraft) or long-term loans based on your specific needs."
        },
        {
          icon: Briefcase,
          title: "Customized Repayment",
          desc: "Flexible repayment structures designed around your business cash flow cycles to ensure smooth operations."
        }
      ]}
      eligibility={[
        "Registered MSME/SME units (Manufacturing, Trading, or Services).",
        "Minimum business vintage of 3 years.",
        "Positive net worth and profitable operations for the last 2 years.",
        "Satisfactory credit history of the promoters and the company.",
        "Udyam Registration Certificate."
      ]}
      documents={[
        "Company KYC (COI, MOA, AOA, Partnership Deed)",
        "Promoter KYC (Aadhaar, PAN of Directors/Partners)",
        "Audited Financials (Balance Sheet, P&L) for last 3 years",
        "GST Returns for the last 12 months",
        "Bank statements for the last 6 months",
        "Udyam Registration & CMA Data (for larger loans)"
      ]}
    />
  );
};

export default SmeMsmeLoanPage;
