import React from 'react';
import { HardHat, IndianRupee, Clock, ShieldCheck } from 'lucide-react';
import ServiceDetailsLayout from '../components/ServiceDetailsLayout';

const NuoHausBuilderPage = () => {
  return (
    <ServiceDetailsLayout 
      icon={HardHat}
      tagline="NUO-HAUS"
      title="Customized Finance for"
      highlight="Builder's Projects"
      description="Empower your real estate projects with NUO-HAUS Builder financing. We provide construction finance, inventory funding, and working capital to keep your projects on schedule."
      image="https://images.unsplash.com/photo-1541888081622-14eb0e463f21?q=80&w=2070&auto=format&fit=crop"
      badgeIcon={IndianRupee}
      badgeTitle="Project Size"
      badgeValue="Large"
      badgeSubtitle="Scale Funding"
      features={[
        {
          icon: IndianRupee,
          title: "Construction Finance",
          desc: "Stage-wise funding aligned with your project's construction milestones to ensure continuous progress."
        },
        {
          icon: Clock,
          title: "Inventory Funding",
          desc: "Unlock capital blocked in unsold completed inventory to fund new acquisitions or ongoing work."
        },
        {
          icon: ShieldCheck,
          title: "Structured Solutions",
          desc: "Customized repayment structures based on anticipated project cash flows and sales velocity."
        }
     ]}
      eligibility={[
        "Established track record of successful project completions.",
        "All necessary statutory approvals and RERA registration in place.",
        "Clear and marketable title of the project land.",
        "Satisfactory financial health of the development company."
     ]}
      documents={[
        "Project Approvals and RERA Registration",
        "Detailed Project Report (DPR) and Cash Flow Projections",
        "Company Financials (Last 3 years Audited)",
        "Title Search Report and Legal Clearances",
        "Track record of previous projects"
     ]}
    />
  );
};

export default NuoHausBuilderPage;
