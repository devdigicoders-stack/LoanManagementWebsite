import React from 'react';
import { Building, IndianRupee, Clock, ShieldCheck } from 'lucide-react';
import ServiceDetailsLayout from '../components/ServiceDetailsLayout';

const LoanAgainstPropertiesPage = () => {
  return (
    <ServiceDetailsLayout 
      icon={Building}
      tagline="Morgatage"
      title="Leverage Your Real Estate with a"
      highlight="Loan Against Property"
      description="Unlock the hidden value in your residential or commercial property to fund your business expansion, children's higher education, or any major financial requirement."
      image="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
      badgeIcon={IndianRupee}
      badgeTitle="Max Finance"
      badgeValue="High"
      badgeSubtitle="LTV Ratio"
      features={[
        {
          icon: IndianRupee,
          title: "High Loan Amount",
          desc: "Access substantial funds based on the current market value of your property."
        },
        {
          icon: Clock,
          title: "Extended Tenure",
          desc: "Repay comfortably over a longer period compared to unsecured loans, up to 15 years."
        },
        {
          icon: ShieldCheck,
          title: "Retain Ownership",
          desc: "You continue to own and use the property while servicing the loan."
        }
     ]}
      eligibility={[
        "Property must be free from encumbrances.",
        "Self-employed or salaried individuals with a stable income.",
        "Age between 21 and 65 years.",
        "Property can be residential, commercial, or industrial."
     ]}
      documents={[
        "Original Title Deeds of the property",
        "Approved Building Plan and Tax Receipts",
        "KYC Documents",
        "Income Proofs (ITR, Financials, Salary Slips)",
        "Bank Statements"
     ]}
    />
  );
};

export default LoanAgainstPropertiesPage;
