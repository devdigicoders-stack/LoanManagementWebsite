import React from 'react';
import { Stethoscope, IndianRupee, Clock, ShieldCheck } from 'lucide-react';
import ServiceDetailsLayout from '../components/ServiceDetailsLayout';

const DoctorsLoanPage = () => {
  return (
    <ServiceDetailsLayout 
      icon={Stethoscope}
      tagline="Un-Secured"
      title="Empowering Medical Professionals with a"
      highlight="Doctor's Loan"
      description="Tailor-made financial solutions for medical practitioners. Expand your clinic, upgrade medical equipment, or manage personal expenses with our customized Doctor's Loans."
      image="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop"
      badgeIcon={IndianRupee}
      badgeTitle="Special Rates"
      badgeValue="Low"
      badgeSubtitle="Interest"
      features={[
        {
          icon: IndianRupee,
          title: "High Loan Amount",
          desc: "Access higher loan amounts specially sanctioned for qualified medical professionals."
        },
        {
          icon: Clock,
          title: "Fast-Track Approval",
          desc: "Enjoy priority processing with minimal documentation."
        },
        {
          icon: ShieldCheck,
          title: "No Collateral Needed",
          desc: "Secure funds purely based on your professional qualification and income profile."
        }
     ]}
      eligibility={[
        "Qualified medical practitioners (MBBS, MD, MS, BDS, MDS, BAMS, BHMS).",
        "Minimum 2-3 years of post-qualification experience.",
        "Registered with the respective Medical Council.",
        "Stable practice or employment."
     ]}
      documents={[
        "Medical Registration Certificate",
        "Degree Certificates",
        "KYC Documents (Aadhaar, PAN)",
        "Last 2 years ITR and Financials",
        "Last 6 months Bank Statements"
     ]}
    />
  );
};

export default DoctorsLoanPage;
