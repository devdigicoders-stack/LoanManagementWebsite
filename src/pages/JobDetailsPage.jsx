import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { jobs } from '../data/jobs';
import {
  MapPin, Clock, Briefcase, Monitor, ArrowLeft,
  Upload, User, Mail, Phone, Link2, Code2, Globe,
  GraduationCap, Building2, ChevronDown, CheckCircle2, Plus, Trash2
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

const PhoneInput = () => (
  <div>
    <label className="block text-sm font-semibold text-slate-700 mb-1.5">
      Phone<span className="text-red-500 ml-0.5">*</span>
    </label>
    <div className="flex gap-2">
      <div className="flex items-center gap-1.5 px-3 py-3 border border-gray-200 rounded-xl bg-white text-sm text-gray-700 whitespace-nowrap">
        🇮🇳 +91
      </div>
      <input
        type="tel"
        placeholder="Add phone number"
        className="flex-1 px-4 py-3 border border-gray-200 rounded-xl text-sm text-gray-800 placeholder-gray-400 bg-white outline-none focus:border-[#0EA5E9] focus:ring-3 focus:ring-[#0EA5E9]/10 transition-all"
      />
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
            <p className="text-sm font-semibold text-gray-700">Drag and drop files or click to upload</p>
            <p className="text-xs text-gray-400 mt-1">Supported files: .pdf & .docx, up to {maxSize}</p>
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
      <FormInput label="Institution" required placeholder="Search institution" />
      <FormInput label="Discipline" placeholder="Search discipline" />
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <FormSelect label="Degree" required placeholder="Search degree" options={["Bachelor's", "Master's", "PhD", "Diploma", "Other"]} />
      <FormInput label="Location" placeholder="Search city, state or country" icon={MapPin} />
    </div>
    <FormInput label="Summary" placeholder="Enter summary" />
    <div className="grid grid-cols-2 gap-4">
      <DateSelect label="Start Date" />
      <DateSelect label="End Date" />
    </div>
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
      <FormInput label="Company" required placeholder="Search company" icon={Building2} />
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <FormInput label="Industry" placeholder="Search industry" />
      <FormInput label="Location" placeholder="Search city, state or country" icon={MapPin} />
    </div>
    <FormInput label="Summary" placeholder="Enter summary" />
    <div className="grid grid-cols-2 gap-4">
      <DateSelect label="Start Date" />
      <DateSelect label="End Date" />
    </div>
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

      {/* Autofill from Resume */}
      <div className="bg-[#F0F9FF] border border-[#BAE6FD] rounded-2xl p-6">
        <h3 className="font-bold text-slate-900 text-lg mb-1 flex items-center gap-2">
          <Upload size={18} className="text-[#0EA5E9]" /> Autofill from resume
        </h3>
        <p className="text-sm text-slate-500 mb-4">Save time by uploading your resume. (Only PDF or DOCX format supported)</p>
        <FileUpload accept=".pdf,.docx" maxSize="10 MB" />
      </div>

      {/* Personal Information */}
      <div>
        <h3 className="font-bold text-slate-900 text-lg mb-5 flex items-center gap-2">
          <User size={18} className="text-[#0EA5E9]" /> Personal Information
        </h3>
        <div className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <FormInput label="First name" required placeholder="Enter first name" />
            <FormInput label="Last name" required placeholder="Enter last name" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <FormInput label="Email" required placeholder="Enter email" type="email" icon={Mail} />
            <PhoneInput />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <FormInput label="LinkedIn URL" placeholder="Enter linkedin url" icon={Link2} />
            <FormInput label="Github URL" placeholder="Enter github url" icon={Code2} />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <FormInput label="Website URL" placeholder="Enter website url" icon={Globe} />
            <FormInput label="Address" placeholder="Search city, state or country" icon={MapPin} />
          </div>
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1.5">Photo</label>
            <FileUpload accept="image/*" maxSize="5 MB" hint="Upload a professional photo (optional)" />
          </div>
        </div>
      </div>

      {/* Education */}
      <div>
        <h3 className="font-bold text-slate-900 text-lg mb-2 flex items-center gap-2">
          <GraduationCap size={18} className="text-[#0EA5E9]" /> Education<span className="text-red-500">*</span>
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
          <Briefcase size={18} className="text-[#0EA5E9]" /> Experience<span className="text-red-500">*</span>
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

      {/* Documents */}
      <div>
        <h3 className="font-bold text-slate-900 text-lg mb-5">Documents</h3>
        <div className="space-y-5">
          <FileUpload label="Resume" required maxSize="20 MB" />
          <FileUpload label="Cover Letter" maxSize="20 MB" />
        </div>
      </div>

      {/* Salary & Notice Period */}
      <div>
        <h3 className="font-bold text-slate-900 text-lg mb-5">Salary & Notice Period</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <FormInput label="Current Salary (in Lakhs)" required placeholder="Enter current salary" type="number" />
          <FormInput label="Expected Salary (in Lakhs)" required placeholder="Enter expected salary" type="number" />
          <FormInput label="Notice Period (in Days)" required placeholder="Enter notice period" type="number" />
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
    {/* About the Role */}
    <div>
      <h3 className="text-xl font-bold text-slate-900 mb-3">About the role:</h3>
      <p className="text-[15px]">{job.aboutRole}</p>
    </div>

    {/* What you will do */}
    <div>
      <h3 className="text-xl font-bold text-slate-900 mb-4">What you will do:</h3>
      <ul className="space-y-3">
        {job.whatYouWillDo.map((item, i) => (
          <li key={i} className="flex items-start gap-3">
            <div className="w-1.5 h-1.5 rounded-full bg-[#0EA5E9] shrink-0 mt-2"></div>
            <span className="text-[15px]">{item}</span>
          </li>
        ))}
      </ul>
    </div>

    {/* What you need */}
    <div>
      <h3 className="text-xl font-bold text-slate-900 mb-4">What you will need:</h3>
      <ul className="space-y-3">
        {job.whatYouNeed.map((item, i) => (
          <li key={i} className="flex items-start gap-3">
            <div className="w-1.5 h-1.5 rounded-full bg-[#0EA5E9] shrink-0 mt-2"></div>
            <span className="text-[15px]">{item}</span>
          </li>
        ))}
      </ul>
    </div>

    {/* Life at NuoG */}
    <div className="bg-[#F0F9FF] border border-[#BAE6FD] rounded-2xl p-8">
      <h3 className="text-xl font-bold text-slate-900 mb-4">Life at NuoG:</h3>
      <p className="text-slate-600 mb-4 font-medium">Life so good, you'd think we're kidding:</p>
      <ul className="space-y-3">
        {[
          'Competitive salaries. Period.',
          "An extensive medical insurance that looks out for our employees & their dependents. We'll love you and take care of you, our promise.",
          "Flexible working hours. Just don't call us at 3AM, we like our sleep schedule.",
          'Tailored vacation & leave policies so that you enjoy every important moment in your life.',
          'A reward system that celebrates hard work and milestones throughout the year. Expect a gift coming your way anytime you kill it here.',
          'Learning and upskilling opportunities. Seriously, not kidding.',
          'Good food, games, and a cool office to make you feel like home.',
        ].map((item, i) => (
          <li key={i} className="flex items-start gap-3">
            <CheckCircle2 size={18} className="text-[#0EA5E9] shrink-0 mt-0.5" />
            <span className="text-[15px] text-slate-700">{item}</span>
          </li>
        ))}
      </ul>
    </div>

    {/* Diversity */}
    <div>
      <h3 className="text-xl font-bold text-slate-900 mb-3">We believe in equality. Period.</h3>
      <p className="text-[15px] text-slate-600">
        At NuoG, we are committed to building a diverse and talented workforce. We never discriminate on the basis of race, sex, religion, colour, national origin, gender, gender identity, sexual orientation, age, marital status, veteran status, medical condition, disability, or any other class or characteristic protected by the applicable law.
      </p>
    </div>
  </div>
);

// ─── Main Page ────────────────────────────────────────────────────────────────

const JobDetailsPage = () => {
  const { jobId } = useParams();
  const [activeTab, setActiveTab] = useState('details');
  const job = jobs.find(j => j.id === jobId);

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
