import React from 'react';
import { HeartPulse, IndianRupee, Clock, ShieldPlus } from 'lucide-react';
import ServiceDetailsLayout from '../components/ServiceDetailsLayout';

const HospfinsureLoanPage = () => {
  return (
    <ServiceDetailsLayout 
      icon={HeartPulse}
      tagline="HAUS Nuo-Pay"
      title="Secure Your Health Finances with"
      highlight="Hospfinsure Loan"
      description="हॉस्पिफाइन्श्योर (Hospfinsure) provides specialized financial assistance for medical emergencies, treatments, and surgeries so you can focus on recovery, not bills."
      image="https://images.unsplash.com/photo-1538108149393-cebb47ac8013?q=80&w=2070&auto=format&fit=crop"
      badgeIcon={Clock}
      badgeTitle="Emergency"
      badgeValue="Instant"
      badgeSubtitle="Approval"
      features={[
        {
          icon: HeartPulse,
          title: "Comprehensive Coverage",
          desc: "Covers hospital bills, surgeries, medicines, and post-operative care expenses."
        },
        {
          icon: Clock,
          title: "Priority Processing",
          desc: "Medical emergencies require fast action; our team prioritizes medical loan approvals."
        },
        {
          icon: ShieldPlus,
          title: "Direct Disbursement",
          desc: "Option to disburse funds directly to the hospital or medical institution."
        }
     ]}
      eligibility={[
        "Applicant or co-applicant must have a stable source of income.",
        "Medical estimate letter from a recognized hospital or doctor.",
        "Age between 21 and 60 years.",
        "Valid KYC and income proofs."
     ]}
      documents={[
        "Medical bills or estimate letter from the hospital/doctor",
        "KYC Documents (Aadhaar, PAN)",
        "Last 3 months Salary Slips / ITR",
        "Last 6 months Bank Statements"
     ]}
    />
  );
};

export default HospfinsureLoanPage;
