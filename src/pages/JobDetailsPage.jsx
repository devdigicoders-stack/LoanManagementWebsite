import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { jobs } from '../data/jobs';
import {
  MapPin, Clock, Briefcase, Monitor, ArrowLeft,
  Upload, User, Mail, Phone, Link2, Code2, Globe,
  GraduationCap, Building2, ChevronDown, CheckCircle2, Plus, Trash2, HeartHandshake, ShieldCheck, HandCoins, Baby
} from 'lucide-react';

// ─── Reusable form components ───────────────────────────────────────────────

const FormInput = ({ label, required, placeholder, type = 'text', icon: Icon }) => (
  <div>
    <label className="block text-sm font-semibold text-slate-700 mb-1.5">
      {label}{required && <span className="text-red-500 ml-0.5">*</span>}
    </label>
    <div className="relative">
      {Icon && <Icon size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />}
      <input
        type={type}
        placeholder={placeholder}
        className={`w-full ${Icon ? 'pl-10' : 'pl-4'} pr-4 py-3 border border-gray-200 rounded-xl text-sm text-gray-800 placeholder-gray-400 bg-white outline-none focus:border-[#0EA5E9] focus:ring-3 focus:ring-[#0EA5E9]/10 transition-all`}
      />
    </div>
  </div>
);

const FormSelect = ({ label, required, placeholder, options }) => (
  <div>
    <label className="block text-sm font-semibold text-slate-700 mb-1.5">
      {label}{required && <span className="text-red-500 ml-0.5">*</span>}
    </label>
    <div className="relative">
      <select className="w-full pl-4 pr-10 py-3 border border-gray-200 rounded-xl text-sm text-gray-800 bg-white outline-none focus:border-[#0EA5E9] focus:ring-3 focus:ring-[#0EA5E9]/10 transition-all appearance-none">
        <option value="">{placeholder}</option>
        {options && options.map((o, i) => <option key={i} value={o}>{o}</option>)}
      </select>
      <ChevronDown size={16} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
    </div>
  </div>
);

const FileUpload = ({ label, required, accept = '.pdf,.docx', maxSize = '10 MB', hint }) => {
  const inputRef = useRef(null);
  const [fileName, setFileName] = useState('');
  return (
    <div>
      {label && (
        <label className="block text-sm font-semibold text-slate-700 mb-1.5">
          {label}{required && <span className="text-red-500 ml-0.5">*</span>}
        </label>
      )}
      <div
        onClick={() => inputRef.current?.click()}
        className="border-2 border-dashed border-gray-200 hover:border-[#0EA5E9] rounded-xl p-6 text-center cursor-pointer transition-colors bg-gray-50 hover:bg-[#F0F9FF] group"
      >
        <input
          ref={inputRef}
          type="file"
          className="hidden"
          accept={accept}
          onChange={(e) => setFileName(e.target.files?.[0]?.name || '')}
        />
        <Upload size={22} className="mx-auto text-gray-400 group-hover:text-[#0EA5E9] mb-2 transition-colors" />
        {fileName ? (
          <p className="text-sm font-semibold text-[#0EA5E9]">{fileName}</p>
        ) : (
          <>
            <p className="text-sm font-semibold text-gray-700">Drag and drop files or Click to Upload</p>
            <p className="text-xs text-gray-400 mt-1">Supported files: {accept}, up to {maxSize}</p>
          </>
        )}
      </div>
      {hint && <p className="text-xs text-gray-400 mt-1">{hint}</p>}
    </div>
  );
};

const DateSelect = ({ label }) => (
  <div>
    <label className="block text-xs font-semibold text-slate-600 mb-1">{label}</label>
    <input
      type="month"
      className="w-full px-3 py-2.5 border border-gray-200 rounded-xl text-sm text-gray-700 bg-white outline-none focus:border-[#0EA5E9] focus:ring-2 focus:ring-[#0EA5E9]/10 transition-all"
    />
  </div>
);

// ─── Education Block ─────────────────────────────────────────────────────────

const EducationBlock = ({ index, onRemove, canRemove }) => (
  <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6 space-y-4 relative">
    <div className="flex items-center justify-between mb-2">
      <h4 className="font-bold text-slate-800">Education #{index + 1}</h4>
      {canRemove && (
        <button onClick={onRemove} className="text-red-400 hover:text-red-600 transition-colors">
          <Trash2 size={16} />
        </button>
      )}
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <FormInput label="Institution" required placeholder="Enter institution" />
      <FormInput label="District/State" placeholder="Enter district/state" />
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <FormInput label="Degree" required placeholder="Enter degree" />
      <FormInput label="Location" placeholder="Enter location" icon={MapPin} />
    </div>
    <div className="grid grid-cols-2 gap-4">
      <DateSelect label="Start Date" />
      <DateSelect label="End Date" />
    </div>
    <FormInput label="Summary" placeholder="Enter summary" />
  </div>
);

// ─── Experience Block ─────────────────────────────────────────────────────────

const ExperienceBlock = ({ index, onRemove, canRemove }) => (
  <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6 space-y-4 relative">
    <div className="flex items-center justify-between mb-2">
      <h4 className="font-bold text-slate-800">Experience #{index + 1}</h4>
      {canRemove && (
        <button onClick={onRemove} className="text-red-400 hover:text-red-600 transition-colors">
          <Trash2 size={16} />
        </button>
      )}
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <FormInput label="Title" required placeholder="Enter title" />
      <FormInput label="Company" required placeholder="Enter company" icon={Building2} />
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <FormInput label="Industry" placeholder="Enter industry" />
      <FormInput label="Location" placeholder="Enter location" icon={MapPin} />
    </div>
    <div className="grid grid-cols-2 gap-4">
      <DateSelect label="Start Date" />
      <DateSelect label="End Date" />
    </div>
    <FormInput label="Summary" placeholder="Enter summary" />
  </div>
);

// ─── Application Form ────────────────────────────────────────────────────────

const ApplicationForm = ({ job }) => {
  const [educations, setEducations] = useState([0]);
  const [experiences, setExperiences] = useState([0]);

  const addEducation = () => setEducations(prev => [...prev, prev.length]);
  const removeEducation = (i) => setEducations(prev => prev.filter((_, idx) => idx !== i));
  const addExperience = () => setExperiences(prev => [...prev, prev.length]);
  const removeExperience = (i) => setExperiences(prev => prev.filter((_, idx) => idx !== i));

  return (
    <div className="space-y-10">

      <div className="text-center pb-6 border-b border-gray-100">
        <h2 className="text-3xl font-extrabold text-slate-900 mb-2">Application Form</h2>
        <p className="text-slate-500">Please fill out the form below to apply for the HAUS NUO-Pay Offer- Liability position.</p>
      </div>

      {/* Policies & Benefits */}
      <div className="bg-[#F0F9FF] border border-[#BAE6FD] rounded-2xl p-6 md:p-8">
        <h3 className="font-bold text-slate-900 text-xl mb-6">Policies & Benefits</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex gap-4 items-start">
            <HeartHandshake className="text-[#0EA5E9] shrink-0 mt-1" size={24} />
            <div>
              <h4 className="font-bold text-slate-900 mb-1">Equal Employment Opportunity and Inclusion</h4>
              <p className="text-sm text-slate-600">We never discriminate on the basis of any protected class or characteristic.</p>
            </div>
          </div>
          <div className="flex gap-4 items-start">
            <ShieldCheck className="text-[#0EA5E9] shrink-0 mt-1" size={24} />
            <div>
              <h4 className="font-bold text-slate-900 mb-1">Comprehensive Insurance Coverage</h4>
              <p className="text-sm text-slate-600">Coverage – Including Medical Insurance, Personal Accident Insurance and Group Life Insurance</p>
            </div>
          </div>
          <div className="flex gap-4 items-start">
            <HandCoins className="text-[#0EA5E9] shrink-0 mt-1" size={24} />
            <div>
              <h4 className="font-bold text-slate-900 mb-1">Loan & Advance Facilities</h4>
              <p className="text-sm text-slate-600">Supporting Our Employees’ Dreams of Owning Loan Facility Provides Financial Assistance Make ‘Ghar ki Baat’</p>
            </div>
          </div>
          <div className="flex gap-4 items-start">
            <Baby className="text-[#0EA5E9] shrink-0 mt-1" size={24} />
            <div>
              <h4 className="font-bold text-slate-900 mb-1">Day Care Benefit Program</h4>
              <p className="text-sm text-slate-600">We offer specialized day care support for working parents.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Personal Information */}
      <div>
        <h3 className="font-bold text-slate-900 text-lg mb-5 flex items-center gap-2">
          <User size={18} className="text-[#0EA5E9]" /> Personal Information
        </h3>
        <div className="space-y-4">
          <div className="grid grid-cols-1 gap-4">
            <FormInput label="Name" required placeholder="Enter full name" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <FormInput label="Father Name" placeholder="Enter father name" />
            <FormInput label="Mother Name" placeholder="Enter mother name" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <FormSelect label="Marital Status" placeholder="Select marital status" options={['Single', 'Married', 'Divorced', 'Widowed']} />
            <FormInput label="Spouse Name" placeholder="Enter spouse name (if applicable)" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <FormInput label="e-Mail" required placeholder="Enter email" type="email" icon={Mail} />
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1.5">Phone<span className="text-red-500 ml-0.5">*</span></label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 text-sm font-medium">+91</span>
                <input type="tel" className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl text-sm text-gray-800 outline-none focus:border-[#0EA5E9] focus:ring-3 focus:ring-[#0EA5E9]/10 transition-all" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1.5">Alternate Phone<span className="text-red-500 ml-0.5">*</span></label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 text-sm font-medium">+91</span>
                <input type="tel" className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl text-sm text-gray-800 outline-none focus:border-[#0EA5E9] focus:ring-3 focus:ring-[#0EA5E9]/10 transition-all" />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <FormInput label="Aadhaar Card" placeholder="Enter Aadhaar Number" />
            <FormInput label="PAN Card" placeholder="Enter PAN Number" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <FormInput label="Address (Presented)" placeholder="Enter current address" />
            <FormInput label="Address (Permanented)" placeholder="Enter permanent address" />
          </div>
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1.5">Profile Photo</label>
            <FileUpload accept="image/*" maxSize="5 MB" hint="Upload a professional photo" />
          </div>
        </div>
      </div>

      {/* Education */}
      <div>
        <h3 className="font-bold text-slate-900 text-lg mb-2 flex items-center gap-2">
          <GraduationCap size={18} className="text-[#0EA5E9]" /> Education
        </h3>
        <div className="space-y-4">
          {educations.map((_, i) => (
            <EducationBlock
              key={i}
              index={i}
              canRemove={educations.length > 1}
              onRemove={() => removeEducation(i)}
            />
          ))}
          <button
            onClick={addEducation}
            className="flex items-center gap-2 text-sm font-bold text-[#0EA5E9] hover:text-[#0284C7] transition-colors px-2 py-1"
          >
            <Plus size={16} /> Add Education
          </button>
        </div>
      </div>

      {/* Experience */}
      <div>
        <h3 className="font-bold text-slate-900 text-lg mb-2 flex items-center gap-2">
          <Briefcase size={18} className="text-[#0EA5E9]" /> Experience
        </h3>
        <div className="space-y-4">
          {experiences.map((_, i) => (
            <ExperienceBlock
              key={i}
              index={i}
              canRemove={experiences.length > 1}
              onRemove={() => removeExperience(i)}
            />
          ))}
          <button
            onClick={addExperience}
            className="flex items-center gap-2 text-sm font-bold text-[#0EA5E9] hover:text-[#0284C7] transition-colors px-2 py-1"
          >
            <Plus size={16} /> Add Experience
          </button>
        </div>
      </div>

      {/* Salary & Notice Period */}
      <div>
        <h3 className="font-bold text-slate-900 text-lg mb-5">Salary & NP</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <FormInput label="Yearly Gross Salary" required placeholder="Enter yearly gross salary" type="number" />
          <FormInput label="Monthly Net In-Hand Salary" required placeholder="Enter monthly net salary" type="number" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
          <FormInput label="Expected Salary" required placeholder="Enter expected salary" type="number" />
          <FormInput label="Notice Period" required placeholder="Enter notice period (Days/Months)" />
          <FormInput label="Reason of Leaving" placeholder="Enter reason" />
        </div>
      </div>

      {/* Documents */}
      <div>
        <h3 className="font-bold text-slate-900 text-lg mb-5">Documents</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FileUpload label="Resume" accept=".pdf,.docx,.doc" />
          <FileUpload label="Cover Letter" accept=".pdf,.docx,.doc" />
        </div>
      </div>

      {/* Submit */}
      <button className="w-full bg-[#0EA5E9] hover:bg-[#0284C7] text-white font-bold py-4 rounded-2xl transition-colors shadow-lg hover:shadow-xl text-base flex items-center justify-center gap-2">
        <CheckCircle2 size={20} /> Submit Application
      </button>
    </div>
  );
};

// ─── Job Details Content ──────────────────────────────────────────────────────

const JobDetails = ({ job }) => (
  <div className="space-y-8 text-slate-700 leading-relaxed">
    
    {/* HAUS NUO-Pay Offer- Liability Hero Section */}
    <div className="bg-gradient-to-r from-[#F0F9FF] to-[#E0F2FE] rounded-2xl p-6 md:p-8 border border-[#BAE6FD] mb-10">
        <h2 className="text-2xl md:text-3xl font-extrabold text-[#0284C7] mb-2">HAUS NUO-Pay Offer- Liability</h2>
        <p className="text-slate-600 font-medium text-sm md:text-base">Join our rapidly growing team and shape the future of financial services.</p>
    </div>

    {/* About the Role */}
    <div>
      <h3 className="text-xl font-bold text-slate-900 mb-3">About the Role:</h3>
      <p className="text-[15px] mb-4">
        As a HAUS NUO-Pay Offer – Liability, You will be Responsible for Acquiring and Managing Customer Relationships, Driving Financial Growth, and Ensuring High-quality Service Delivery. You will Work Closely with Branch Teams, Customers, and Internal Stakeholders to Meet Business Targets and Enhance Customer Satisfaction.
      </p>
    </div>

    {/* What you will do */}
    <div>
      <h3 className="text-xl font-bold text-slate-900 mb-4">What you will do:</h3>
      <ul className="space-y-3">
        {[
          "Build and Manage a Portfolio of Retail Customers for Loans, Insurance, and Investment Products",
          "Drive Financial Acquisition and Achieve Assigned Business Targets",
          "Provide Personalized Financial Solutions Based on Customer Needs",
          "Maintain Strong Relationships with Customers and Act as the First Point of Contact for Queries",
          "Collaborate with Nearest Branch and Product Teams to Ensure Smooth Onboarding and Service Delivery",
          "Ensure Compliance with Regulatory Guidelines, Internal Policies, and Operational Standards",
          "Prepare Reports and MIS on Portfolio Growth, Customer Engagement, and Target Achievement",
        ].map((item, i) => (
          <li key={i} className="flex items-start gap-3">
            <div className="w-1.5 h-1.5 rounded-full bg-[#0EA5E9] shrink-0 mt-2"></div>
            <span className="text-[15px]">{item}</span>
          </li>
        ))}
      </ul>
    </div>

    {/* What You will Need */}
    <div>
      <h3 className="text-xl font-bold text-slate-900 mb-4">What You will Need:</h3>
      <ul className="space-y-3">
        {[
          "Bachelor’s Degree in any Discipline; Relevant Certifications in Banking/Finance are a Plus",
          "2–5 Years of Experience in Retail Banking and Financial, Liability Sales, or Relationship Management",
          "Strong Interpersonal, Communication, and Customer Engagement Skills",
          "Knowledge of Deposit Products, Financial Operations, and Regulatory Guidelines",
          "Target-Oriented Mindset with Ability to Drive Results Independently",
          "Ability to Multitask, Solve Problems, and Work in a Fast-Paced Environment",
          "Proficiency in MS Office and Financial Systems",
        ].map((item, i) => (
          <li key={i} className="flex items-start gap-3">
            <div className="w-1.5 h-1.5 rounded-full bg-[#0EA5E9] shrink-0 mt-2"></div>
            <span className="text-[15px]">{item}</span>
          </li>
        ))}
      </ul>
    </div>

    {/* About the Role (Variant 2) */}
    <div>
      <h3 className="text-xl font-bold text-slate-900 mb-4 mt-8">Additional Role Responsibilities:</h3>
      <ul className="space-y-3">
        {[
          "Good Communication in Hindi,English Purely sales guy in finance sector",
          "Understand the entire Loan process journey Field Visit Mandatory",
          "Good Negotiation skills Basic knowledge of Excel",
          "Primary & Key Responsibility is to Negotiate the Terms & Conditions of the Loan Details Shared with the Customers (ROI, Charges etc)",
          "Outbound Calling of About 200 -250 Calls Per Day to the Interested Customers",
          "To Ensure Conversion of the Loan Applications at the Highest Rates Possible.",
          "Ensure Loans are Processed as Per Established Company Procedures and Policies",
          "Process, Close, Present, Service and Record Loan Related Notes and Disbursements etc.",
          "Explaining Product Benefits to Customer and Informed Him in Detail All Benefits and Convince for Loan Processing."
        ].map((item, i) => (
          <li key={i} className="flex items-start gap-3">
            <div className="w-1.5 h-1.5 rounded-full bg-[#0EA5E9] shrink-0 mt-2"></div>
            <span className="text-[15px]">{item}</span>
          </li>
        ))}
      </ul>
    </div>

    {/* Life at NUO-Pay */}
    <div className="bg-[#F0F9FF] border border-[#BAE6FD] rounded-2xl p-8 my-8">
      <h3 className="text-xl font-bold text-slate-900 mb-4">Life at NUO-Pay:</h3>
      <p className="text-slate-600 mb-4 font-medium">Life So Good, you’d think We’re Kidding:</p>
      <ul className="space-y-3">
        {[
          'Competitive Salaries. Period.',
          "An Extensive Medical Insurance that Looks Out for Our Employees & Their Dependents. We’ll Love You and Take Care of You, Our Promise.",
          "Flexible Working Hours. Just Don’t Call Us at 03:00 AM, We Like Our Sleep Schedule.",
          'Tailored Vacation & Leave Policies So that You Enjoy Every Important Moment in Your Life.',
          'A Reward System that Celebrates Hard Work and Milestones Throughout the Year. Expect a Gift Coming Your Way Anytime You Kill it Here.',
          'Learning and Upskilling Opportunities. Seriously, Not Kidding.',
          'Good Food, Games, and a Cool Office to Make You Feel Like Home. An Environment So Good, You’ll Forget the Term “Colleagues Can’t be Your Friends”.',
        ].map((item, i) => (
          <li key={i} className="flex items-start gap-3">
            <CheckCircle2 size={18} className="text-[#0EA5E9] shrink-0 mt-0.5" />
            <span className="text-[15px] text-slate-700">{item}</span>
          </li>
        ))}
      </ul>
    </div>

    {/* Equality Statement */}
    <div>
      <h3 className="text-xl font-bold text-slate-900 mb-3">We Believe in Equality. Period.</h3>
      <p className="text-[15px] text-slate-600 mb-4">
        At HAUS NUO-Pay, We are Committed to Building a Diverse and Talented Workforce. We Never Discriminate on the Basis of Race, Sex, Religion, Colour, National Origin, Gender, Gender Identity, Sexual Orientation, Age, Marital Status, Veteran Status, Medical Condition, Disability, or Any Other Class or Characteristic Protected by the Applicable law.
      </p>
      <p className="text-[15px] text-slate-600">
        We Consider All Qualified Job-Seekers with Criminal Histories in a Manner Consistent with the Applicable Law. Additionally, We are Committed to Providing Reasonable Accommodations to Qualified Individuals with Physical or Mental Disabilities in Order to Participate in the Job Application or Interview Process, Perform Essential Job Functions, and Receive other Benefits and Privileges of Employment.
      </p>
      <p className="text-[15px] font-bold text-[#0EA5E9] mt-4 text-lg">Come Join Our Crew!</p>
    </div>

    {/* About NUO-Pay */}
    <div className="bg-slate-900 text-white rounded-2xl p-8 my-8 shadow-xl">
      <h3 className="text-xl font-bold mb-3"><a href="https://slice.bank.in/" target="_blank" rel="noreferrer" className="text-[#38BDF8] hover:underline">About NUO-Pay:</a></h3>
      <h4 className="font-bold text-lg mb-2">HAUS NUO-Pay - A New Financial for a New India</h4>
      <p className="text-[14px] text-slate-300 mb-4">
        HAUS NUO-Pay’s Purpose is to Make the World Better at Using Money and Time, with a Major Focus on Building the Best Consumer Experience for Your Money. We’ve All Felt How Slow, Confusing, and Complicated Financial Services Can be. So, We’re Reimagining it. We’re Building Every Product from Scratch to be Fast, Transparent, and Feel Good, Because We Believe that the Best Products Transcend Demographics, Like How Great Music Touches Most of Us.
      </p>
      <p className="text-[14px] text-slate-300 mb-4">
        Our Cornerstone Products and Services: HAUS NUO-Pay Loans, Insurance, Investment, and Grow Your Business are Designed to be Simple, Rewarding, and Completely in Your Control. At HAUS NUO-Pay, you’ll get to Build things You’d Use Yourself and Shape the Future of Financial Services in India. We Tailor Our Working Experience with the Belief that the Present Moment is the Only Real thing in Life. And We have Harmony in the Present the Most when We feel Happy and Successful Together.
      </p>
      <p className="text-[14px] font-bold text-[#38BDF8]">
        We’re Backed by Some of the World’s Leading Investors, Including Tiger Global and Insight Partners.
      </p>
    </div>

  </div>
);

// ─── Main Page ────────────────────────────────────────────────────────────────

const JobDetailsPage = () => {
  const { jobId } = useParams();
  const [activeTab, setActiveTab] = useState('details');
  
  // We mock the job object slightly to enforce the HAUS NUO-Pay Offer- Liability title if needed,
  // but we'll try to find the actual job first.
  let job = jobs.find(j => j.id === jobId);
  
  if (job) {
    // Override title if specifically requested for all views
    job = { ...job, title: "HAUS NUO-Pay Offer- Liability" };
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [jobId]);

  if (!job) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-white text-center px-6">
        <h1 className="text-4xl font-extrabold text-slate-900 mb-4">Job Not Found</h1>
        <p className="text-gray-500 mb-8">This position may have been filled or the link is invalid.</p>
        <Link to="/careers" className="bg-[#0EA5E9] hover:bg-[#0284C7] text-white font-bold px-8 py-3 rounded-full transition-colors">
          View All Positions
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FDFBF7] font-sans">

      {/* Back link */}
      <div className="max-w-4xl mx-auto px-6 pt-28 pb-4">
        <Link to="/careers" className="inline-flex items-center gap-2 text-sm font-semibold text-slate-500 hover:text-[#0EA5E9] transition-colors group">
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> Back to all positions
        </Link>
      </div>

      {/* Job Header */}
      <div className="max-w-4xl mx-auto px-6 pb-8">
        <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-8 md:p-10">
          <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4 text-center">{job.title}</h1>

          {/* Meta */}
          <div className="flex flex-wrap justify-center gap-x-5 gap-y-2 text-sm text-slate-600 mb-6">
            <span className="flex items-center gap-1.5"><Briefcase size={14} className="text-gray-400" /><b>Job type:</b> {job.type}</span>
            <span className="text-gray-300">·</span>
            <span className="flex items-center gap-1.5"><Building2 size={14} className="text-gray-400" /><b>Department:</b> {job.department}</span>
            <span className="text-gray-300">·</span>
            <span className="flex items-center gap-1.5"><Monitor size={14} className="text-gray-400" /><b>Work type:</b> {job.workspace}</span>
          </div>
          <div className="flex justify-center">
            <span className="flex items-center gap-1.5 text-sm text-[#0EA5E9] font-semibold">
              <MapPin size={14} /> {job.location}
            </span>
          </div>

          {/* Tabs */}
          <div className="flex justify-center gap-8 mt-8 border-b border-gray-100">
            <button
              className={`pb-3 text-sm font-bold transition-all border-b-2 -mb-px ${activeTab === 'details' ? 'border-[#0EA5E9] text-slate-900' : 'border-transparent text-gray-400 hover:text-slate-600'}`}
              onClick={() => setActiveTab('details')}
            >
              Job details
            </button>
            <button
              className={`pb-3 text-sm font-bold transition-all border-b-2 -mb-px ${activeTab === 'form' ? 'border-[#0EA5E9] text-slate-900' : 'border-transparent text-gray-400 hover:text-slate-600'}`}
              onClick={() => setActiveTab('form')}
            >
              Application form
            </button>
          </div>
        </div>
      </div>

      {/* Tab Content */}
      <div className="max-w-4xl mx-auto px-6 pb-24">
        <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-8 md:p-10">
          {activeTab === 'details' ? (
            <>
              <JobDetails job={job} />
              <div className="mt-10 pt-8 border-t border-gray-100 flex justify-center">
                <button
                  onClick={() => { setActiveTab('form'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="bg-[#0EA5E9] hover:bg-[#0284C7] text-white font-bold px-10 py-4 rounded-full transition-colors shadow-md hover:shadow-lg"
                >
                  Apply for this position →
                </button>
              </div>
            </>
          ) : (
            <ApplicationForm job={job} />
          )}
        </div>
      </div>

    </div>
  );
};

export default JobDetailsPage;
