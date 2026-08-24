import React from 'react';
import { ArrowUpRight, IndianRupee, RefreshCw, ShieldCheck } from 'lucide-react';
import ServiceDetailsLayout from '../components/ServiceDetailsLayout';

const TopUpBtLoanPage = () => {
  return (
    <ServiceDetailsLayout 
      icon={ArrowUpRight}
      tagline="HAUS Nuo-Pay"
      title="Enhance Your Current Loan with"
      highlight="Top-Up & BT Loan"
      description="Need extra funds? Transfer your existing loan balance to us and get a top-up amount at attractive interest rates to fulfill your new requirements."
      image="https://images.unsplash.com/photo-1565514020179-026b92b84bb6?q=80&w=2070&auto=format&fit=crop"
      badgeIcon={RefreshCw}
      badgeTitle="Balance Transfer"
      badgeValue="Fast"
      badgeSubtitle="Process"
      features={[
        {
          icon: IndianRupee,
          title: "Additional Funds",
          desc: "Get additional funds over and above your existing loan amount to meet personal or business needs."
        },
        {
          icon: ArrowUpRight,
          title: "Better Interest Rates",
          desc: "Transfer your balance and potentially lower your EMI with our competitive interest rates."
        },
        {
          icon: ShieldCheck,
          title: "Minimal Documentation",
          desc: "Since you already have an existing loan track record, the documentation required is minimal."
        }
     ]}
      eligibility={[
        "Existing borrowers with a good repayment track record for at least 12 months.",
        "No defaults or delays in the current loan.",
        "Stable income source to support the top-up EMI.",
        "Property or asset valuation must cover the total loan amount (if secured)."
     ]}
      documents={[
        "Latest Foreclosure letter of existing loan",
        "Repayment track record / Bank statement showing EMIs",
        "Updated KYC documents",
        "Latest income documents (Salary slips / ITR)"
     ]}
    />
  );
};

export default TopUpBtLoanPage;
