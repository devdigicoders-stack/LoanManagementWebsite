import React from 'react';
import { Bike, IndianRupee, Zap, FileCheck2 } from 'lucide-react';
import ServiceDetailsLayout from '../components/ServiceDetailsLayout';

const TwoWheelerLoanPage = () => {
  return (
    <ServiceDetailsLayout 
      icon={Bike}
      tagline="Vehicle Finance"
      title="Hit the Road Faster with a"
      highlight="Two Wheeler Loan"
      description="Your daily commute just got easier. Finance your favorite motorcycle or scooter with our instant two-wheeler loans featuring minimal documentation and low interest rates."
      image="https://images.unsplash.com/photo-1558981285-6f0c94958bb6?q=80&w=2070&auto=format&fit=crop"
      badgeIcon={Zap}
      badgeTitle="Processing Time"
      badgeValue="Instant"
      badgeSubtitle="Approval"
      features={[
        {
          icon: IndianRupee,
          title: "Low Down Payment",
          desc: "Start riding by paying a minimal upfront amount. We cover up to 95% of the vehicle's cost."
        },
        {
          icon: Zap,
          title: "Instant Disbursal",
          desc: "Experience zero waiting time. Walk into our partner showrooms and ride out the same day."
        },
        {
          icon: FileCheck2,
          title: "Zero Foreclosure",
          desc: "Pay off your loan early without any penalty after the initial lock-in period."
        }
      ]}
      eligibility={[
        "Indian resident aged 18 to 65 years.",
        "Salaried employees or self-employed individuals.",
        "Minimum gross income of ₹10,000 per month.",
        "Residing in the current city for at least 1 year.",
        "Valid contact number and active bank account."
      ]}
      documents={[
        "Passport size photograph",
        "Photo Identity Proof (Aadhaar, PAN, Passport)",
        "Address Proof (Aadhaar, Voter ID, Utility Bill)",
        "Income Proof (Latest salary slip or ITR)",
        "Latest bank statement showing income credit"
      ]}
    />
  );
};

export default TwoWheelerLoanPage;
