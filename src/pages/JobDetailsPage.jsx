import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import {
  MapPin, Clock, Briefcase, Monitor, ArrowLeft,
  Upload, User, Mail, Phone, Link2, Code2, Globe,
  GraduationCap, Building2, ChevronDown, CheckCircle2, Plus, Trash2, HeartHandshake, ShieldCheck, HandCoins, Baby, Navigation, FileText, Download, CalendarHeart, Sparkles, Award
} from 'lucide-react';
import toast from 'react-hot-toast';
import { 
  validateMobile, 
  validateEmail, 
  validateAadhar, 
  validatePAN, 
  validatePincode,
  sanitizeDigitsOnly, 
  sanitizePAN 
} from '../utils/validation';

// ─── Reusable form components ───────────────────────────────────────────────

const FormInput = ({ label, required, placeholder, type = 'text', icon: Icon, value, onChange, name, maxLength, inputMode, className = '', readOnly, disabled }) => (
  <div className="flex flex-col">
    {label && (
      <label className="text-sm font-semibold text-slate-700 mb-1.5 min-h-[20px] flex items-center">
        {label}{required && <span className="text-red-500 ml-0.5">*</span>}
      </label>
    )}
    <div className="relative mt-auto">
      {Icon && <Icon size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />}
      <input
        required={required}
        type={type}
        name={name}
        value={value || ''}
        onChange={onChange}
        placeholder={placeholder}
        maxLength={maxLength}
        inputMode={inputMode}
        readOnly={readOnly}
        disabled={disabled}
        className={`w-full ${Icon ? 'pl-10' : 'pl-4'} pr-4 py-3 border border-gray-200 rounded-xl text-sm text-gray-800 placeholder-gray-400 bg-white outline-none focus:border-[#0EA5E9] focus:ring-3 focus:ring-[#0EA5E9]/10 transition-all ${readOnly || disabled ? 'bg-slate-100 text-slate-500 cursor-not-allowed border-slate-200' : ''} ${className}`}
      />
    </div>
  </div>
);

const FormSelect = ({ label, required, placeholder, options, value, onChange, name }) => (
  <div className="flex flex-col">
    {label && (
      <label className="text-sm font-semibold text-slate-700 mb-1.5 min-h-[20px] flex items-center">
        {label}{required && <span className="text-red-500 ml-0.5">*</span>}
      </label>
    )}
    <div className="relative mt-auto">
      <select 
        required={required}
        name={name}
        value={value || ''} 
        onChange={onChange}
        className="w-full pl-4 pr-10 py-3 border border-gray-200 rounded-xl text-sm text-gray-800 bg-white outline-none focus:border-[#0EA5E9] focus:ring-3 focus:ring-[#0EA5E9]/10 transition-all appearance-none"
      >
        <option value="">{placeholder}</option>
        {options && options.map((o, i) => <option key={i} value={o}>{o}</option>)}
      </select>
      <ChevronDown size={16} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
    </div>
  </div>
);

const FileUpload = ({ label, required, accept = '.pdf,.docx,.doc', maxSize = '10 MB', hint, onChange, name }) => {
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
          required={required && !fileName}
          ref={inputRef}
          type="file"
          className="hidden"
          accept={accept}
          name={name}
          onChange={(e) => {
            const file = e.target.files?.[0];
            if (file) {
              setFileName(file.name);
              if (onChange) onChange(file);
            }
          }}
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

const DateSelect = ({ label, value, onChange }) => (
  <div>
    <label className="block text-xs font-semibold text-slate-600 mb-1">{label}</label>
    <input
      type="month"
      value={value || ''}
      onChange={onChange}
      className="w-full px-3 py-2.5 border border-gray-200 rounded-xl text-sm text-gray-700 bg-white outline-none focus:border-[#0EA5E9] focus:ring-2 focus:ring-[#0EA5E9]/10 transition-all"
    />
  </div>
);

// ─── Education Block ─────────────────────────────────────────────────────────

const EducationBlock = ({ index, edu, onChange, onRemove, canRemove }) => {
  const handleChange = (e) => {
    onChange(index, { ...edu, [e.target.name]: e.target.value });
  };

  return (
    <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6 space-y-4 relative">
      <div className="flex items-center justify-between mb-2">
        <h4 className="font-bold text-slate-800">Qualification #{index + 1}</h4>
        {canRemove && (
          <button type="button" onClick={onRemove} className="text-red-400 hover:text-red-600 transition-colors">
            <Trash2 size={16} />
          </button>
        )}
      </div>

      {/* Row 1: Examinations/Degree | University / Institute | Subject */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <FormInput label="Examinations/Degree" required name="degree" value={edu.degree} onChange={handleChange} placeholder="e.g. 10th / 12th / Graduation" />
        <FormInput label="University / Institute" required name="institution" value={edu.institution} onChange={handleChange} placeholder="Enter University / Institute" />
        <FormInput label="Subject" name="subject" value={edu.subject} onChange={handleChange} placeholder="e.g. Commerce / Science / Arts" />
      </div>

      {/* Row 2: Passing Yrs | Grade | % Marks */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <FormInput label="Passing Yrs" name="passingYear" value={edu.passingYear} onChange={handleChange} placeholder="e.g. 2022" maxLength="4" inputMode="numeric" />
        <FormInput label="Grade" name="grade" value={edu.grade} onChange={handleChange} placeholder="e.g. A+ / First Division" />
        <FormInput label="% Marks" name="percentage" value={edu.percentage} onChange={handleChange} placeholder="e.g. 85%" />
      </div>
    </div>
  );
};

// ─── Experience Block ─────────────────────────────────────────────────────────

// ─── Experience Block (Experienced++) ─────────────────────────────────────────

const ExperienceBlock = ({ index, exp, onChange, onRemove, canRemove }) => {
  const handleChange = (e) => {
    onChange(index, { ...exp, [e.target.name]: e.target.value });
  };

  return (
    <div className="bg-slate-50/70 border border-slate-200/80 rounded-2xl p-6 space-y-6 relative shadow-sm">
      <div className="flex items-center justify-between border-b border-slate-200 pb-3">
        <h4 className="font-bold text-slate-800 text-sm flex items-center gap-2">
          <span className="w-6 h-6 rounded-full bg-[#0EA5E9]/10 text-[#0EA5E9] flex items-center justify-center text-xs font-black">
            {index + 1}
          </span>
          Experience Record #{index + 1}
        </h4>
        {canRemove && (
          <button
            type="button"
            onClick={onRemove}
            className="flex items-center gap-1.5 text-xs text-red-500 hover:text-red-700 bg-red-50 hover:bg-red-100 px-3 py-1.5 rounded-lg font-medium transition-colors"
          >
            <Trash2 size={14} /> Remove Record
          </button>
        )}
      </div>

      {/* Basic Job Details */}
      <div className="space-y-4">
        <h5 className="font-bold text-xs uppercase text-slate-500 tracking-wider">Company & Role Details</h5>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <FormInput label="Employer / Company Name" required name="company" value={exp.company} onChange={handleChange} placeholder="e.g. Acme Corp" />
          <FormInput label="Department" name="department" value={exp.department} onChange={handleChange} placeholder="e.g. Sales / IT / Accounts" />
          <FormInput label="Designation" required name="designation" value={exp.designation} onChange={handleChange} placeholder="e.g. Senior Executive" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <FormInput label="Period (DOJ - Date of Joining)" name="doj" value={exp.doj} onChange={handleChange} type="date" />
          <FormInput label="Period (END - Leaving Date)" name="endDate" value={exp.endDate} onChange={handleChange} type="date" />
          <FormSelect
            name="noticePeriod"
            value={exp.noticePeriod}
            onChange={handleChange}
            label="Notice Period"
            placeholder="Select Notice Period"
            options={["Immediate", "15 Day's", "30 Day's", "45 Day's", "60 Day's", "75 Day's", "90 Day's"]}
          />
        </div>
      </div>

      {/* Salary Details */}
      <div className="bg-white border border-slate-200 rounded-xl p-5 space-y-4">
        <h5 className="font-bold text-xs uppercase text-slate-500 tracking-wider">Salary Details</h5>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-end">
          <FormInput label="Monthly Gross Pay (₹)" name="grossPay" value={exp.grossPay} onChange={handleChange} placeholder="e.g. 45000" type="number" />
          <FormInput label="Monthly Net Pay (₹)" name="netPay" value={exp.netPay} onChange={handleChange} placeholder="e.g. 38000" type="number" />
          <FormInput label="Joined Starting Salary" name="startingSalary" value={exp.startingSalary} onChange={handleChange} placeholder="e.g. 30000" type="number" />
          <FormInput label="Joined Ending Salary" name="endingSalary" value={exp.endingSalary} onChange={handleChange} placeholder="e.g. 45000" type="number" />
        </div>
      </div>

      {/* Reporting Manager Details */}
      <div className="bg-white border border-slate-200 rounded-xl p-5 space-y-4">
        <h5 className="font-bold text-xs uppercase text-slate-500 tracking-wider">Reporting Manager (RM) Details</h5>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <FormInput label="RM - Name" name="rmName" value={exp.rmName} onChange={handleChange} placeholder="Manager Full Name" />
          <FormInput label="RM - Designation" name="rmDesignation" value={exp.rmDesignation} onChange={handleChange} placeholder="e.g. Team Lead / VP" />
          <FormInput label="RM - Mobile No." name="rmPhone" value={exp.rmPhone} onChange={handleChange} placeholder="10-digit Mobile No." maxLength="10" inputMode="numeric" />
          <FormInput label="RM - Email ID" name="rmEmail" value={exp.rmEmail} onChange={handleChange} placeholder="manager@company.com" type="email" />
        </div>
      </div>

      {/* Responsibilities Summary & Reason of Leaving */}
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-1.5">Responsibilities Summary</label>
          <textarea
            name="responsibilitiesSummary"
            value={exp.responsibilitiesSummary || ''}
            onChange={handleChange}
            rows={2}
            placeholder="Brief overview of key job responsibilities & achievements..."
            className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm text-gray-800 placeholder-gray-400 bg-white outline-none focus:border-[#0EA5E9] focus:ring-3 focus:ring-[#0EA5E9]/10 transition-all"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-1.5">Reason of Leaving</label>
          <input
            type="text"
            name="reasonOfLeaving"
            value={exp.reasonOfLeaving || ''}
            onChange={handleChange}
            placeholder="Reason for leaving previous employment..."
            className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm text-gray-800 placeholder-gray-400 bg-white outline-none focus:border-[#0EA5E9] focus:ring-3 focus:ring-[#0EA5E9]/10 transition-all"
          />
        </div>
      </div>
    </div>
  );
};

// ─── Application Form ────────────────────────────────────────────────────────

const ApplicationForm = ({ job }) => {
  const navigate = useNavigate();
  const [submitting, setSubmitting] = useState(false);
  const [areaOptions, setAreaOptions] = useState([]);
  const [loadingPincode, setLoadingPincode] = useState(false);
  
  // 'Fresher' or 'Experienced'
  const [candidateType, setCandidateType] = useState('Fresher');
  
  const [formData, setFormData] = useState({
    name: '', pan: '', aadhaar: '', dob: '', gender: '', religion: '', nationality: 'Indian', maritalStatus: '',
    phone: '', alternatePhone: '', email: '',
    fatherName: '', motherName: '', spouseName: '',
    pincode: '', area: '', district: '', state: '', flatHouseFloor: '', societyName: '', landmark: '', presentAddress: '', permanentAddress: '',
    expectedMonthlySalary: '', joinedComfortableDate: '',
    yearlyGrossSalary: '', monthlyNetSalary: '', expectedSalary: '', noticePeriod: '', reasonOfLeaving: ''
  });
  
  const [files, setFiles] = useState({
    profilePhoto: null,
    resume: null,
    coverLetter: null,
    salarySlip: null,
    experienceLetter: null,
    relievingLetter: null
  });

  const [educations, setEducations] = useState([{}]);
  const [experiences, setExperiences] = useState([{}]);

  const fetchPincodeDetails = async (pin) => {
    if (pin.length === 6) {
      setLoadingPincode(true);
      try {
        const res = await fetch(`https://api.postalpincode.in/pincode/${pin}`);
        const data = await res.json();
        if (data && data[0] && data[0].Status === "Success") {
          const postOffices = data[0].PostOffice || [];
          const po = postOffices[0];
          const areaNames = postOffices.map(p => p.Name);
          setAreaOptions(areaNames);
          setFormData(prev => ({
            ...prev,
            state: po.State || '',
            district: po.District || '',
            area: postOffices.length > 0 ? po.Name : prev.area
          }));
          toast.success(`Location auto-filled for Pincode: ${pin}`);
        } else {
          toast.error("Invalid Pincode. Please check your pincode.");
          setAreaOptions([]);
          setFormData(prev => ({
            ...prev,
            state: '',
            district: '',
            area: ''
          }));
        }
      } catch(err) {
        console.error(err);
        toast.error("Failed to auto-fetch pincode details.");
      } finally {
        setLoadingPincode(false);
      }
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    let sanitized = value;
    if (name === 'phone' || name === 'alternatePhone') {
      sanitized = sanitizeDigitsOnly(value, 10);
    } else if (name === 'aadhaar') {
      sanitized = sanitizeDigitsOnly(value, 12);
    } else if (name === 'pan') {
      sanitized = sanitizePAN(value);
    } else if (name === 'pincode') {
      sanitized = sanitizeDigitsOnly(value, 6);
    }

    setFormData(prev => ({ ...prev, [name]: sanitized }));
    
    if (name === 'pincode' && sanitized.length === 6) {
      fetchPincodeDetails(sanitized);
    }
  };

  const addEducation = () => setEducations(prev => [...prev, {}]);
  const removeEducation = (i) => setEducations(prev => prev.filter((_, idx) => idx !== i));
  const updateEducation = (i, data) => setEducations(prev => prev.map((edu, idx) => idx === i ? data : edu));

  const addExperience = () => setExperiences(prev => [...prev, {}]);
  const removeExperience = (i) => setExperiences(prev => prev.filter((_, idx) => idx !== i));
  const updateExperience = (i, data) => setExperiences(prev => prev.map((exp, idx) => idx === i ? data : exp));

  const handleSubmit = async (e) => {
    e.preventDefault();

    // 1. Email check
    const emailCheck = validateEmail(formData.email, true);
    if (!emailCheck.valid) {
      toast.error(emailCheck.message);
      return;
    }

    // 2. Primary Phone check
    const phoneCheck = validateMobile(formData.phone);
    if (!phoneCheck.valid) {
      toast.error(`Phone: ${phoneCheck.message}`);
      return;
    }

    // 3. Alternate Phone check (if provided)
    if (formData.alternatePhone) {
      const altCheck = validateMobile(formData.alternatePhone);
      if (!altCheck.valid) {
        toast.error(`Alternate Phone: ${altCheck.message}`);
        return;
      }
    }

    // 4. Aadhaar check (if provided)
    if (formData.aadhaar) {
      const aadharCheck = validateAadhar(formData.aadhaar);
      if (!aadharCheck.valid) {
        toast.error(aadharCheck.message);
        return;
      }
    }

    // 5. PAN check (if provided)
    if (formData.pan) {
      const panCheck = validatePAN(formData.pan);
      if (!panCheck.valid) {
        toast.error(panCheck.message);
        return;
      }
    }

    // 6. Pincode check (if provided)
    if (formData.pincode) {
      const pinCheck = validatePincode(formData.pincode);
      if (!pinCheck.valid) {
        toast.error(pinCheck.message);
        return;
      }
    }

    // 7. Resume check (mandatory for both fresher and experienced)
    if (!files.resume) {
      toast.error("Please upload your Resume/CV.");
      return;
    }

    setSubmitting(true);
    
    try {
      const submitData = new FormData();
      Object.keys(formData).forEach(key => {
        submitData.append(key, formData[key]);
      });
      
      submitData.append('candidateType', candidateType);
      submitData.append('education', JSON.stringify(educations));
      
      // Send experience only if candidate is experienced
      if (candidateType === 'Experienced') {
        submitData.append('experience', JSON.stringify(experiences));
      } else {
        submitData.append('experience', JSON.stringify([]));
      }
      
      // Consolidated documents
      if (files.profilePhoto) submitData.append('profilePhoto', files.profilePhoto);
      if (files.resume) submitData.append('resume', files.resume);
      
      // Experienced extra documents
      if (candidateType === 'Experienced') {
        if (files.coverLetter) submitData.append('coverLetter', files.coverLetter);
        if (files.salarySlip) submitData.append('salarySlip', files.salarySlip);
        if (files.experienceLetter) submitData.append('experienceLetter', files.experienceLetter);
        if (files.relievingLetter) submitData.append('relievingLetter', files.relievingLetter);
      }

      const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/recruitment/jobs/${job._id}/apply`, {
        method: 'POST',
        body: submitData
      });

      if (response.ok) {
        toast.success("Application submitted successfully!");
        navigate('/careers');
      } else {
        const error = await response.json();
        toast.error(error.message || "Failed to submit application");
      }
    } catch (error) {
      toast.error("Network error. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-10">

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



      {/* PERSONAL DETAIL */}
      <div>
        <h3 className="font-bold text-slate-900 text-lg mb-5 flex items-center gap-2">
          <User size={18} className="text-[#0EA5E9]" /> PERSONAL DETAIL
        </h3>
        <div className="space-y-4">
          {/* Row 1: Name */}
          <div className="grid grid-cols-1 gap-4">
            <FormInput name="name" value={formData.name} onChange={handleChange} label="Name" required placeholder="Enter full name" />
          </div>

          {/* Row 2: Identification & Personal (Spacious 4 columns) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <FormInput name="pan" value={formData.pan} onChange={handleChange} label="PAN Card" placeholder="ABCDE1234F" maxLength="10" className="uppercase font-mono" />
            <FormInput name="aadhaar" value={formData.aadhaar} onChange={handleChange} label="Aadhaar Card" placeholder="12-digit Aadhaar" maxLength="12" inputMode="numeric" className="font-mono" />
            <FormInput name="dob" value={formData.dob} onChange={handleChange} label="DOB" type="date" />
            <FormSelect
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              label="Gender"
              placeholder="Select Gender"
              options={['Male', 'Female', 'Transgender']}
            />
          </div>

          {/* Row 3: Religion, Nationality, Marital Status & (Spouse Name if Married) */}
          <div className={`grid grid-cols-1 sm:grid-cols-2 ${formData.maritalStatus === 'Married' ? 'lg:grid-cols-4' : 'lg:grid-cols-3'} gap-4 transition-all duration-300`}>
            <FormSelect
              name="religion"
              value={formData.religion}
              onChange={handleChange}
              label="Religion"
              placeholder="Select Religion"
              options={['Hinduism', 'Christianity', 'Sikhism', 'Islam', 'Buddhism', 'Jainism']}
            />
            <FormSelect
              name="nationality"
              value={formData.nationality}
              onChange={handleChange}
              label="Nationality"
              placeholder="Select Nationality"
              options={['Indian', 'UAE', 'NRI']}
            />
            <FormSelect
              name="maritalStatus"
              value={formData.maritalStatus}
              onChange={handleChange}
              label="Marital Status"
              placeholder="Select Marital Status"
              options={['Single', 'Married', 'Divorced', 'Widowed']}
            />
            {formData.maritalStatus === 'Married' && (
              <FormInput
                name="spouseName"
                value={formData.spouseName}
                onChange={handleChange}
                label="Spouse Name"
                required
                placeholder="Enter spouse full name"
              />
            )}
          </div>

          {/* Row 4: Mob No | Alternative Mob No | e-Mail ID */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1.5">Mob No<span className="text-red-500 ml-0.5">*</span></label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 text-sm font-medium">+91</span>
                <input required type="tel" inputMode="numeric" maxLength="10" name="phone" placeholder="10-digit number" value={formData.phone} onChange={handleChange} className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl text-sm text-gray-800 outline-none focus:border-[#0EA5E9] focus:ring-3 focus:ring-[#0EA5E9]/10 transition-all font-mono" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1.5">Alternative Mob No</label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 text-sm font-medium">+91</span>
                <input type="tel" inputMode="numeric" maxLength="10" name="alternatePhone" placeholder="10-digit number (optional)" value={formData.alternatePhone} onChange={handleChange} className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl text-sm text-gray-800 outline-none focus:border-[#0EA5E9] focus:ring-3 focus:ring-[#0EA5E9]/10 transition-all font-mono" />
              </div>
            </div>
            <FormInput name="email" value={formData.email} onChange={handleChange} label="e-Mail ID" required placeholder="Enter email address" type="email" icon={Mail} />
          </div>

          {/* Row 5: Father Name | Mother Name */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <FormInput name="fatherName" value={formData.fatherName} onChange={handleChange} label="Father Name" placeholder="Enter father name" />
            <FormInput name="motherName" value={formData.motherName} onChange={handleChange} label="Mother Name" placeholder="Enter mother name" />
          </div>

          {/* ── ADDRESS ── */}
          <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6 mt-4">
            <div className="mb-4">
              <h4 className="font-bold text-slate-900 text-base flex items-center gap-2">
                <MapPin size={18} className="text-[#0EA5E9]" /> Present Residential
              </h4>
         
              {/* <p className="text-xs text-slate-500 mt-0.5">Enter your PIN Code to auto-fetch address details</p> */}
            </div>
            
            {/* PIN Code Input */}
            <div className="max-w-xs mb-4">
              <div className="relative">
                <FormInput
                  name="pincode"
                  value={formData.pincode}
                  onChange={handleChange}
                  label="PIN Code"
                  required
                  placeholder="Enter 6-digit PIN Code"
                  maxLength="6"
                  inputMode="numeric"
                />
                {loadingPincode && (
                  <div className="absolute right-3 top-9 text-xs text-[#0EA5E9] font-semibold flex items-center gap-1">
                    <span className="w-3 h-3 border-2 border-[#0EA5E9] border-t-transparent rounded-full animate-spin"></span>
                    Fetching...
                  </div>
                )}
              </div>
            </div>

            {/* Remaining Address Fields: Shown once PIN Code is entered */}
            {formData.pincode && formData.pincode.length === 6 && (
              <div className="space-y-4 pt-4 border-t border-gray-200/60 transition-all duration-300">
                {/* Row: Area/Locality | District | State */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-1.5">Area / Locality</label>
                    {areaOptions.length > 0 ? (
                      <select
                        name="area"
                        value={formData.area}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm text-gray-700 bg-white outline-none focus:border-[#0EA5E9] focus:ring-3 focus:ring-[#0EA5E9]/10 transition-all"
                      >
                        <option value="">Select Area</option>
                        {areaOptions.map((opt, i) => <option key={i} value={opt}>{opt}</option>)}
                      </select>
                    ) : (
                      <input
                        type="text"
                        name="area"
                        value={formData.area}
                        onChange={handleChange}
                        placeholder="Enter Area manually"
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm text-gray-800 outline-none focus:border-[#0EA5E9] focus:ring-3 focus:ring-[#0EA5E9]/10 transition-all bg-white"
                      />
                    )}
                  </div>
                  <FormInput name="district" value={formData.district} onChange={handleChange} label="District" placeholder="District" readOnly disabled />
                  <FormInput name="state" value={formData.state} onChange={handleChange} label="State" placeholder="State" readOnly disabled />
                </div>

                {/* Row: Flat/House/Floor | Society Name | Landmark */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <FormInput name="flatHouseFloor" value={formData.flatHouseFloor} onChange={handleChange} label="Flat / House / Floor" placeholder="e.g. Flat 302, 3rd Floor" />
                  <FormInput name="societyName" value={formData.societyName} onChange={handleChange} label="Society Name" placeholder="e.g. Palm Meadows" />
                  <FormInput name="landmark" value={formData.landmark} onChange={handleChange} label="Landmark" placeholder="e.g. Near City Hospital" />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* EDUCATIONAL QUALIFICATIONS */}
      <div>
        <h3 className="font-bold text-slate-900 text-lg mb-2 flex items-center gap-2">
          <GraduationCap size={18} className="text-[#0EA5E9]" /> EDUCATIONAL QUALIFICATIONS
        </h3>
        <div className="space-y-4">
          {educations.map((edu, i) => (
            <EducationBlock
              key={i}
              index={i}
              edu={edu}
              onChange={updateEducation}
              canRemove={educations.length > 1}
              onRemove={() => removeEducation(i)}
            />
          ))}
          <button
            type="button"
            onClick={addEducation}
            className="flex items-center gap-2 text-sm font-bold text-[#0EA5E9] hover:text-[#0284C7] transition-colors px-2 py-1"
          >
            <Plus size={16} /> Add Qualification
          </button>
        </div>
      </div>

      {/* ── WORKING PROFILE (CHOOSE FRESHER OR EXPERIENCED) ── */}
      <div className="space-y-6">
        <h3 className="font-bold text-slate-900 text-lg flex items-center gap-2">
          <Briefcase size={18} className="text-[#0EA5E9]" /> WORKING PROFILE
        </h3>

        <div className="bg-gradient-to-r from-sky-50 via-indigo-50 to-purple-50 border-2 border-[#0EA5E9]/30 rounded-2xl p-6 shadow-sm">
          <div className="text-center mb-4">
            <span className="inline-flex items-center gap-1 text-[11px] font-extrabold text-[#0284C7] uppercase tracking-wider bg-white px-3 py-1 rounded-full border border-sky-100 shadow-xs mb-1">
              <Sparkles size={13} className="text-[#0EA5E9]" /> Choose Experience Level
            </span>
            <h3 className="text-xl font-black text-slate-900">Are you a Fresher or Experienced?</h3>
            <p className="text-xs text-slate-500 mt-0.5">Select option to display appropriate salary & experience details</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl mx-auto">
            {/* Option: Fresher */}
            <button
              type="button"
              onClick={() => setCandidateType('Fresher')}
              className={`p-5 rounded-xl border-2 transition-all flex items-center gap-4 text-left ${
                candidateType === 'Fresher'
                  ? 'bg-white border-[#0EA5E9] shadow-md ring-2 ring-[#0EA5E9]/20'
                  : 'bg-white/70 border-slate-200 hover:border-slate-300 text-slate-600'
              }`}
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 text-xl font-bold ${
                candidateType === 'Fresher' ? 'bg-[#0EA5E9] text-white' : 'bg-slate-100 text-slate-500'
              }`}>
                <GraduationCap size={24} />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h4 className="font-bold text-slate-900 text-base">Fresher</h4>
                  {candidateType === 'Fresher' && (
                    <span className="text-[10px] bg-emerald-100 text-emerald-700 font-bold px-2 py-0.5 rounded-full">Selected</span>
                  )}
                </div>
                <p className="text-xs text-slate-500 mt-0.5">No prior experience. Requires <strong>Candidate Pic & Resume</strong>.</p>
              </div>
            </button>

            {/* Option: Experienced */}
            <button
              type="button"
              onClick={() => setCandidateType('Experienced')}
              className={`p-5 rounded-xl border-2 transition-all flex items-center gap-4 text-left ${
                candidateType === 'Experienced'
                  ? 'bg-white border-[#0EA5E9] shadow-md ring-2 ring-[#0EA5E9]/20'
                  : 'bg-white/70 border-slate-200 hover:border-slate-300 text-slate-600'
              }`}
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 text-xl font-bold ${
                candidateType === 'Experienced' ? 'bg-[#0EA5E9] text-white' : 'bg-slate-100 text-slate-500'
              }`}>
                <Briefcase size={24} />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h4 className="font-bold text-slate-900 text-base">Experienced</h4>
                  {candidateType === 'Experienced' && (
                    <span className="text-[10px] bg-emerald-100 text-emerald-700 font-bold px-2 py-0.5 rounded-full">Selected</span>
                  )}
                </div>
                <p className="text-xs text-slate-500 mt-0.5">Prior work history, salary details & <strong>Salary Slip</strong> required.</p>
              </div>
            </button>
          </div>
        </div>

        {/* ── FRESHER CASE: SALARY COMPENSATION ── */}
        {candidateType === 'Fresher' && (
          <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6">
            <h4 className="font-bold text-slate-900 text-base mb-4 flex items-center gap-2">
              <HandCoins size={18} className="text-[#0EA5E9]" /> SALARY COMPENSATION
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <FormInput
                label="Expectations Monthly Salary"
                name="expectedMonthlySalary"
                value={formData.expectedMonthlySalary}
                onChange={handleChange}
                placeholder="e.g. 25000"
                type="number"
              />
              <FormInput
                label="Joined Comfortable Date"
                name="joinedComfortableDate"
                value={formData.joinedComfortableDate}
                onChange={handleChange}
                type="date"
              />
            </div>
          </div>
        )}

        {/* ── EXPERIENCED CASE: Experienced++ WORK PROFILE ── */}
        {candidateType === 'Experienced' && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h4 className="font-bold text-slate-900 text-base flex items-center gap-2">
                <Briefcase size={18} className="text-[#0EA5E9]" /> Experienced Details
              </h4>
            </div>
            {experiences.map((exp, i) => (
              <ExperienceBlock
                key={i}
                index={i}
                exp={exp}
                onChange={updateExperience}
                canRemove={experiences.length > 1}
                onRemove={() => removeExperience(i)}
              />
            ))}
            <button
              type="button"
              onClick={addExperience}
              className="flex items-center gap-2 text-sm font-bold text-[#0EA5E9] hover:text-[#0284C7] transition-colors px-2 py-1"
            >
              <Plus size={16} /> Add More Experience
            </button>
          </div>
        )}
      </div>

      {/* ── DOCUMENT UPLOAD & PROVIDED ── */}
      <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 md:p-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 mb-6 border-b border-slate-200 gap-2">
          <div>
            <h3 className="font-bold text-slate-900 text-xl flex items-center gap-2">
              <FileText size={20} className="text-[#0EA5E9]" />
              Document upload & provided
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">
              {candidateType === 'Fresher'
                ? 'Fresher requirements: Upload Candidate Pic and Resume / CV'
                : 'Experienced requirements: Upload Candidate Pic, Resume, and Salary Slip'}
            </p>
          </div>
          <span className={`px-3 py-1 rounded-full text-xs font-bold w-max ${
            candidateType === 'Fresher' ? 'bg-emerald-100 text-emerald-800' : 'bg-indigo-100 text-indigo-800'
          }`}>
            {candidateType === 'Fresher' ? '🎓 Fresher Mode (Candidate Pic + Resume)' : '💼 Experienced Mode (Candidate Pic + Resume + Salary Slip)'}
          </span>
        </div>

        <div className={`grid grid-cols-1 ${candidateType === 'Experienced' ? 'md:grid-cols-3' : 'md:grid-cols-2'} gap-6`}>
          {/* Document 1: Candidate Pic */}
          <FileUpload
            onChange={file => setFiles({...files, profilePhoto: file})}
            label="Candidate Pic"
            accept="image/*"
            maxSize="5 MB"
            hint="Upload clear passport size photo"
          />

          {/* Document 2: Resume */}
          <FileUpload
            onChange={file => setFiles({...files, resume: file})}
            required
            label="Resume / CV *"
            accept=".pdf,.docx,.doc"
            maxSize="10 MB"
            hint="PDF or Word format"
          />

          {/* Document 3 for Experienced ONLY: Salary Slip */}
          {candidateType === 'Experienced' && (
            <FileUpload
              onChange={file => setFiles({...files, salarySlip: file})}
              label="Salary Slip"
              accept=".pdf,.jpeg,.jpg,.png"
              maxSize="10 MB"
              hint="Latest 1-3 months salary slip"
            />
          )}
        </div>
      </div>

      {/* Submit Button */}
      <button disabled={submitting} type="submit" className="w-full bg-[#0EA5E9] hover:bg-[#0284C7] text-white font-bold py-4 rounded-2xl transition-colors shadow-lg hover:shadow-xl text-base flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed">
        <CheckCircle2 size={20} /> {submitting ? 'Submitting Application...' : `Submit Application (${candidateType})`}
      </button>
    </form>
  );
};

// ─── Job Details Content ──────────────────────────────────────────────────────

const JobDetails = ({ job }) => (
  <div className="space-y-8 text-slate-700 leading-relaxed">
    {job.skills && (
      <div className="bg-blue-50 border border-blue-100 rounded-xl p-6">
        <h3 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
          <Briefcase size={18} className="text-[#0EA5E9]" /> Required Knowledge & Skills
        </h3>
        <div className="flex flex-wrap gap-2">
          {job.skills.split(',').map((skill, index) => (
            <span key={index} className="bg-white px-3 py-1.5 rounded-full text-sm font-semibold text-slate-700 shadow-sm border border-gray-200">
              {skill.trim()}
            </span>
          ))}
        </div>
      </div>
    )}
    <div dangerouslySetInnerHTML={{ __html: job.description?.replace(/\n/g, '<br />') }} className="prose max-w-none text-slate-700" />
  </div>
);

// ─── Main Page ────────────────────────────────────────────────────────────────

const JobDetailsPage = () => {
  const { jobId } = useParams();
  const [activeTab, setActiveTab] = useState('details');
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    fetch(`${import.meta.env.VITE_API_BASE_URL}/recruitment/jobs/${jobId}`)
      .then(res => res.json())
      .then(data => {
        setJob(data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, [jobId]);

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center">Loading job details...</div>;
  }

  if (!job || job.message === 'Job not found') {
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
        <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-8 md:p-10 text-center">
          {/* Main Global Header */}
          <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-2">
            HAUS NUO-Pay Offer – Liability
          </h1>

          {/* Sub Role / Specific Designation */}
          {(job.designation || (job.title && !job.title.includes('HAUS NUO-Pay Offer'))) && (
            <p className="text-lg md:text-xl font-bold text-[#0284C7] mb-4 text-center">
              {job.designation || job.title}
            </p>
          )}

          {/* Meta */}
          <div className="flex flex-wrap justify-center gap-x-5 gap-y-2 text-sm text-slate-600 mb-6">
            <span className="flex items-center gap-1.5"><Briefcase size={14} className="text-gray-400" /><b>Job type:</b> {job.type || 'Full Time'}</span>
            <span className="text-gray-300">·</span>
            <span className="flex items-center gap-1.5"><Building2 size={14} className="text-gray-400" /><b>Department:</b> {job.department}</span>
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
