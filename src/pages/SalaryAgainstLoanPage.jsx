import React from 'react';
import { Banknote, IndianRupee, Clock, ShieldCheck } from 'lucide-react';
import ServiceDetailsLayout from '../components/ServiceDetailsLayout';

const SalaryAgainstLoanPage = () => {
  return (
    <ServiceDetailsLayout 
      icon={Banknote}
      tagline="HAUS Nuo-Pay"
      title="Access Funds Before Payday with"
      highlight="Salary Against Loan"
      description="Don't let mid-month cash crunches slow you down. Get an instant advance on your salary to meet urgent expenses smoothly."
      image="https://images.unsplash.com/photo-1579621970795-87facc2f976d?q=80&w=2070&auto=format&fit=crop"
      badgeIcon={Clock}
      badgeTitle="Disbursal Time"
      badgeValue="Under"
      badgeSubtitle="12 Hours"
      features={[
        {
          icon: IndianRupee,
          title: "Quick Disbursal",
          desc: "Get funds transferred directly to your bank account within hours of approval."
        },
        {
          icon: ShieldCheck,
          title: "No Hidden Fees",
          desc: "Transparent fee structure with no unexpected charges at the time of repayment."
        },
        {
          icon: Banknote,
          title: "Flexible Amounts",
          desc: "Borrow up to a significant percentage of your net monthly salary."
        }
     ]}
      eligibility={[
        "Salaried employees working in reputed public/private organizations.",
        "Minimum net monthly salary of ₹15,000.",
        "Must be employed with the current organization for at least 6 months.",
        "Age between 21 and 55 years."
     ]}
      documents={[
        "PAN Card and Aadhaar Card",
        "Last 3 months Salary Slips",
        "Last 6 months Bank Statement showing salary credits",
        "Employee ID Card"
     ]}
    />
  );
};

export default SalaryAgainstLoanPage;
