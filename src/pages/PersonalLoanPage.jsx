import React from 'react';
import { User, IndianRupee, Clock, ShieldCheck } from 'lucide-react';
import ServiceDetailsLayout from '../components/ServiceDetailsLayout';

const PersonalLoanPage = () => {
  return (
    <ServiceDetailsLayout 
      icon={User}
      tagline="Un-Secured"
      title="Fulfill Your Personal Goals with a"
      highlight="Personal Loan"
      description="Whether it's a dream vacation, a family wedding, or an unexpected medical expense, our unsecured personal loans provide quick funds without any collateral."
      image="https://images.unsplash.com/photo-1571260899304-425dea5cf61f?q=80&w=2070&auto=format&fit=crop"
      badgeIcon={Clock}
      badgeTitle="Approval"
      badgeValue="Instant"
      badgeSubtitle="Processing"
      features={[
        {
          icon: IndianRupee,
          title: "Collateral-Free",
          desc: "Borrow money without pledging any personal assets or providing guarantors."
        },
        {
          icon: Clock,
          title: "Quick Processing",
          desc: "Minimal documentation leading to fast approval and disbursal of funds directly to your bank account."
        },
        {
          icon: ShieldCheck,
          title: "Flexible Tenure",
          desc: "Choose a repayment period ranging from 12 to 60 months according to your financial comfort."
        }
     ]}
      eligibility={[
        "Salaried professionals or self-employed individuals.",
        "Age between 21 and 60 years.",
        "Minimum monthly income of ₹20,000.",
        "A healthy credit score (CIBIL 700+ preferred)."
     ]}
      documents={[
        "PAN Card and Aadhaar Card",
        "Last 3 months Salary Slips (Salaried) or ITR (Self-Employed)",
        "Last 6 months Bank Statement",
        "Utility Bill for Address Proof"
     ]}
    />
  );
};

export default PersonalLoanPage;
