import React from 'react';
import { Car, IndianRupee, Clock, ShieldCheck } from 'lucide-react';
import ServiceDetailsLayout from '../components/ServiceDetailsLayout';

const CarLoanPage = () => {
  return (
    <ServiceDetailsLayout 
      icon={Car}
      tagline="Vehicle Finance"
      title="Drive Home Your Dream with a"
      highlight="Car Loan"
      description="Whether it's a brand new luxury sedan or a pre-owned reliable hatchback, our car loans provide you with the financial boost to own it today with minimal hassle."
      image="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=2070&auto=format&fit=crop"
      badgeIcon={Clock}
      badgeTitle="Approval Time"
      badgeValue="Under"
      badgeSubtitle="48 Hours"
      features={[
        {
          icon: IndianRupee,
          title: "High Loan to Value",
          desc: "We finance up to 100% of the on-road price for select models, so you don't have to worry about large down payments."
        },
        {
          icon: Clock,
          title: "Extended Repayment",
          desc: "Enjoy the flexibility of choosing a repayment tenure that suits your pocket, extending up to 7 years."
        },
        {
          icon: ShieldCheck,
          title: "Transparent Charges",
          desc: "No hidden fees. We maintain complete transparency regarding processing fees, prepayment charges, and interest rates."
        }
     ]}
      eligibility={[
        "Salaried individuals aged 21 to 60 years.",
        "Self-employed professionals aged 21 to 65 years.",
        "Minimum net monthly income of ₹25,000.",
        "At least 1 year of continuous employment or business vintage.",
        "A healthy credit score (CIBIL 700+ preferred)."
     ]}
      documents={[
        "Valid Identity Proof (Aadhaar, Passport, Voter ID)",
        "Address Proof (Utility Bill, Rental Agreement)",
        "Last 3 months Salary Slips or Form 16 (Salaried)",
        "Last 2 years ITR and Financials (Self-Employed)",
        "Last 6 months bank account statements",
        "Proforma Invoice from the authorized dealer"
     ]}
    />
  );
};

export default CarLoanPage;
