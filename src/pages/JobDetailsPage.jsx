import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import {
  MapPin, Clock, Briefcase, Monitor, ArrowLeft,
  Upload, User, Mail, Phone, Link2, Code2, Globe,
  GraduationCap, Building2, ChevronDown, CheckCircle2, Plus, Trash2, HeartHandshake, ShieldCheck, HandCoins, Baby, Navigation, FileText, Download, CalendarHeart
} from 'lucide-react';
import toast from 'react-hot-toast';

// ─── Reusable form components ───────────────────────────────────────────────

const FormInput = ({ label, required, placeholder, type = 'text', icon: Icon, value, onChange, name }) => (
  <div>
    <label className="block text-sm font-semibold text-slate-700 mb-1.5">
      {label}{required && <span className="text-red-500 ml-0.5">*</span>}
    </label>
    <div className="relative">
      {Icon && <Icon size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />}
      <input
        required={required}
        type={type}
        name={name}
        value={value || ''}
        onChange={onChange}
        placeholder={placeholder}
        className={`w-full ${Icon ? 'pl-10' : 'pl-4'} pr-4 py-3 border border-gray-200 rounded-xl text-sm text-gray-800 placeholder-gray-400 bg-white outline-none focus:border-[#0EA5E9] focus:ring-3 focus:ring-[#0EA5E9]/10 transition-all`}
      />
    </div>
  </div>
);

const FormSelect = ({ label, required, placeholder, options, value, onChange, name }) => (
  <div>
    <label className="block text-sm font-semibold text-slate-700 mb-1.5">
      {label}{required && <span className="text-red-500 ml-0.5">*</span>}
    </label>
    <div className="relative">
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
  const handleDateChange = (field, e) => {
    onChange(index, { ...edu, [field]: e.target.value });
  };

  return (
    <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6 space-y-4 relative">
      <div className="flex items-center justify-between mb-2">
        <h4 className="font-bold text-slate-800">Education #{index + 1}</h4>
        {canRemove && (
          <button type="button" onClick={onRemove} className="text-red-400 hover:text-red-600 transition-colors">
            <Trash2 size={16} />
          </button>
        )}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <FormInput label="Institution" required name="institution" value={edu.institution} onChange={handleChange} placeholder="Enter institution" />
        <FormInput label="District/State" name="districtState" value={edu.districtState} onChange={handleChange} placeholder="Enter district/state" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <FormInput label="Degree" required name="degree" value={edu.degree} onChange={handleChange} placeholder="Enter degree" />
        <FormInput label="Location" name="location" value={edu.location} onChange={handleChange} placeholder="Enter location" icon={MapPin} />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <DateSelect label="Start Date" value={edu.startDate} onChange={(e) => handleDateChange('startDate', e)} />
        <DateSelect label="End Date" value={edu.endDate} onChange={(e) => handleDateChange('endDate', e)} />
      </div>
      <FormInput label="Summary" name="summary" value={edu.summary} onChange={handleChange} placeholder="Enter summary" />
    </div>
  );
};

// ─── Experience Block ─────────────────────────────────────────────────────────

const ExperienceBlock = ({ index, exp, onChange, onRemove, canRemove }) => {
  const handleChange = (e) => {
    onChange(index, { ...exp, [e.target.name]: e.target.value });
  };
  const handleDateChange = (field, e) => {
    onChange(index, { ...exp, [field]: e.target.value });
  };

  return (
    <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6 space-y-4 relative">
      <div className="flex items-center justify-between mb-2">
        <h4 className="font-bold text-slate-800">Experience #{index + 1}</h4>
        {canRemove && (
          <button type="button" onClick={onRemove} className="text-red-400 hover:text-red-600 transition-colors">
            <Trash2 size={16} />
          </button>
        )}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <FormInput label="Title" required name="title" value={exp.title} onChange={handleChange} placeholder="Enter title" />
        <FormInput label="Company" required name="company" value={exp.company} onChange={handleChange} placeholder="Enter company" icon={Building2} />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <FormInput label="Industry" name="industry" value={exp.industry} onChange={handleChange} placeholder="Enter industry" />
        <FormInput label="Location" name="location" value={exp.location} onChange={handleChange} placeholder="Enter location" icon={MapPin} />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <DateSelect label="Start Date" value={exp.startDate} onChange={(e) => handleDateChange('startDate', e)} />
        <DateSelect label="End Date" value={exp.endDate} onChange={(e) => handleDateChange('endDate', e)} />
      </div>
      <FormInput label="Summary" name="summary" value={exp.summary} onChange={handleChange} placeholder="Enter summary" />
    </div>
  );
};

// ─── Application Form ────────────────────────────────────────────────────────

const ApplicationForm = ({ job }) => {
  const navigate = useNavigate();
  const [submitting, setSubmitting] = useState(false);
  const [fetchingLocation, setFetchingLocation] = useState(false);
  const [areaOptions, setAreaOptions] = useState([]);
  
  const [formData, setFormData] = useState({
    name: '', fatherName: '', motherName: '', maritalStatus: '', spouseName: '',
    email: '', phone: '', alternatePhone: '', aadhaar: '', pan: '',
    pincode: '', state: '', district: '', area: '', presentAddress: '', permanentAddress: '',
    yearlyGrossSalary: '', monthlyNetSalary: '', expectedSalary: '', noticePeriod: '', reasonOfLeaving: ''
  });
  
  const [files, setFiles] = useState({
    profilePhoto: null,
    resume: null,
    coverLetter: null,
    salarySlip: null
  });

  const [educations, setEducations] = useState([{}]);
  const [experiences, setExperiences] = useState([{}]);

  const fetchPincodeDetails = async (pin) => {
    if (pin.length === 6) {
      try {
        const res = await fetch(`https://api.postalpincode.in/pincode/${pin}`);
        const data = await res.json();
        if (data[0].Status === "Success") {
          const postOffices = data[0].PostOffice;
          const po = postOffices[0];
          setAreaOptions(postOffices.map(p => p.Name));
          setFormData(prev => ({
            ...prev,
            state: po.State,
            district: po.District,
            area: postOffices.length === 1 ? po.Name : prev.area
          }));
        } else {
           toast.error("Invalid Pincode");
           setAreaOptions([]);
        }
      } catch(err) {
        console.error(err);
      }
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    if (name === 'pincode' && value.length === 6) {
      fetchPincodeDetails(value);
    }
  };

  const getCurrentLocation = () => {
    if ("geolocation" in navigator) {
      setFetchingLocation(true);
      navigator.geolocation.getCurrentPosition(async (position) => {
        const { latitude, longitude } = position.coords;
        try {
          const res = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`);
          const data = await res.json();
          if (data && data.address) {
            const addr = data.address;
            const pin = addr.postcode || '';
            setFormData(prev => ({
              ...prev,
              pincode: pin,
              state: addr.state || prev.state,
              district: addr.state_district || addr.city_district || addr.county || prev.district,
              area: addr.suburb || addr.neighbourhood || addr.village || prev.area,
              presentAddress: `${addr.road || ''} ${addr.house_number || ''}`.trim() || prev.presentAddress
            }));
            if (pin && pin.length === 6) {
              fetchPincodeDetails(pin);
            }
            toast.success("Location fetched successfully!");
          }
        } catch (error) {
          toast.error("Failed to fetch location details.");
        } finally {
          setFetchingLocation(false);
        }
      }, (error) => {
        setFetchingLocation(false);
        toast.error("Geolocation permission denied or failed.");
      });
    } else {
      toast.error("Geolocation is not supported by your browser");
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
    setSubmitting(true);
    
    try {
      const submitData = new FormData();
      Object.keys(formData).forEach(key => {
        submitData.append(key, formData[key]);
      });
      
      submitData.append('education', JSON.stringify(educations));
      submitData.append('experience', JSON.stringify(experiences));
      
      if (files.profilePhoto) submitData.append('profilePhoto', files.profilePhoto);
      if (files.resume) submitData.append('resume', files.resume);
      if (files.coverLetter) submitData.append('coverLetter', files.coverLetter);
      if (files.salarySlip) submitData.append('salarySlip', files.salarySlip);

      const response = await fetch(`http://localhost:5000/api/recruitment/jobs/${job._id}/apply`, {
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

      <div className="text-center pb-6 border-b border-gray-100">
        <h2 className="text-3xl font-extrabold text-slate-900 mb-2">Application Form</h2>
        <p className="text-slate-500">Please fill out the form below to apply for the {job.title} position.</p>
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
            <FormInput name="name" value={formData.name} onChange={handleChange} label="Name" required placeholder="Enter full name" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <FormInput name="fatherName" value={formData.fatherName} onChange={handleChange} label="Father Name" placeholder="Enter father name" />
            <FormInput name="motherName" value={formData.motherName} onChange={handleChange} label="Mother Name" placeholder="Enter mother name" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <FormSelect name="maritalStatus" value={formData.maritalStatus} onChange={handleChange} label="Marital Status" placeholder="Select marital status" options={['Single', 'Married', 'Divorced', 'Widowed']} />
            <FormInput name="spouseName" value={formData.spouseName} onChange={handleChange} label="Spouse Name" placeholder="Enter spouse name (if applicable)" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <FormInput name="email" value={formData.email} onChange={handleChange} label="e-Mail" required placeholder="Enter email" type="email" icon={Mail} />
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1.5">Phone<span className="text-red-500 ml-0.5">*</span></label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 text-sm font-medium">+91</span>
                <input required type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl text-sm text-gray-800 outline-none focus:border-[#0EA5E9] focus:ring-3 focus:ring-[#0EA5E9]/10 transition-all" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1.5">Alternate Phone</label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 text-sm font-medium">+91</span>
                <input type="tel" name="alternatePhone" value={formData.alternatePhone} onChange={handleChange} className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl text-sm text-gray-800 outline-none focus:border-[#0EA5E9] focus:ring-3 focus:ring-[#0EA5E9]/10 transition-all" />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <FormInput name="aadhaar" value={formData.aadhaar} onChange={handleChange} label="Aadhaar Card" placeholder="Enter Aadhaar Number" />
            <FormInput name="pan" value={formData.pan} onChange={handleChange} label="PAN Card" placeholder="Enter PAN Number" />
          </div>

          <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6 mt-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-3">
              <h4 className="font-bold text-slate-800 flex items-center gap-2"><MapPin size={18} className="text-[#0EA5E9]" /> Address Details</h4>
              <button 
                type="button" 
                onClick={getCurrentLocation}
                disabled={fetchingLocation}
                className="inline-flex items-center gap-2 bg-[#0EA5E9]/10 text-[#0EA5E9] hover:bg-[#0EA5E9] hover:text-white px-4 py-2 rounded-xl text-sm font-semibold transition-all"
              >
                <Navigation size={16} className={fetchingLocation ? "animate-spin" : ""} />
                {fetchingLocation ? "Fetching..." : "Use Current Location"}
              </button>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
              <FormInput name="pincode" value={formData.pincode} onChange={handleChange} label="Pincode" placeholder="e.g. 226001" maxLength="6" />
              <FormInput name="state" value={formData.state} onChange={handleChange} label="State" placeholder="State" />
              <FormInput name="district" value={formData.district} onChange={handleChange} label="District" placeholder="District" />
              
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1.5">Area / Locality</label>
                {areaOptions.length > 0 ? (
                  <select
                    name="area"
                    value={formData.area}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm text-gray-700 bg-white outline-none focus:border-[#0EA5E9] focus:ring-3 focus:ring-[#0EA5E9]/10 transition-all appearance-none"
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
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm text-gray-800 outline-none focus:border-[#0EA5E9] focus:ring-3 focus:ring-[#0EA5E9]/10 transition-all"
                  />
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <FormInput name="presentAddress" value={formData.presentAddress} onChange={handleChange} label="Street/House No (Present)" placeholder="Enter complete present address" />
              <FormInput name="permanentAddress" value={formData.permanentAddress} onChange={handleChange} label="Permanent Address" placeholder="Enter permanent address" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1.5">Profile Photo</label>
            <FileUpload onChange={file => setFiles({...files, profilePhoto: file})} accept="image/*" maxSize="5 MB" hint="Upload a professional photo" />
          </div>
        </div>
      </div>

      {/* Education */}
      <div>
        <h3 className="font-bold text-slate-900 text-lg mb-2 flex items-center gap-2">
          <GraduationCap size={18} className="text-[#0EA5E9]" /> Education
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
            <Plus size={16} /> Add Experience
          </button>
        </div>
      </div>

      {/* Salary & Notice Period */}
      <div>
        <h3 className="font-bold text-slate-900 text-lg mb-5">Salary & NP</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <FormInput name="yearlyGrossSalary" value={formData.yearlyGrossSalary} onChange={handleChange} label="Yearly Gross Salary" placeholder="Enter yearly gross salary" type="number" />
          <FormInput name="monthlyNetSalary" value={formData.monthlyNetSalary} onChange={handleChange} label="Monthly Net In-Hand Salary" placeholder="Enter monthly net salary" type="number" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
          <FormInput name="expectedSalary" value={formData.expectedSalary} onChange={handleChange} label="Expected Salary" required placeholder="Enter expected salary" type="number" />
          <FormInput name="noticePeriod" value={formData.noticePeriod} onChange={handleChange} label="Notice Period" required placeholder="Enter notice period (Days/Months)" />
          <FormInput name="reasonOfLeaving" value={formData.reasonOfLeaving} onChange={handleChange} label="Reason of Leaving" placeholder="Enter reason" />
        </div>
      </div>

      {/* Documents */}
      <div>
        <h3 className="font-bold text-slate-900 text-lg mb-5">Documents</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <FileUpload onChange={file => setFiles({...files, resume: file})} required label="Resume" accept=".pdf,.docx,.doc" />
          <FileUpload onChange={file => setFiles({...files, coverLetter: file})} label="Cover Letter" accept=".pdf,.docx,.doc" />
          <FileUpload onChange={file => setFiles({...files, salarySlip: file})} label="Salary Slip (Optional)" accept=".pdf,.jpeg,.jpg,.png" />
        </div>
      </div>

      {/* Submit */}
      <button disabled={submitting} type="submit" className="w-full bg-[#0EA5E9] hover:bg-[#0284C7] text-white font-bold py-4 rounded-2xl transition-colors shadow-lg hover:shadow-xl text-base flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed">
        <CheckCircle2 size={20} /> {submitting ? 'Submitting...' : 'Submit Application'}
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
    fetch(`http://localhost:5000/api/recruitment/jobs/${jobId}`)
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
        <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-8 md:p-10">
          <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4 text-center">{job.title}</h1>

          {/* Meta */}
          <div className="flex flex-wrap justify-center gap-x-5 gap-y-2 text-sm text-slate-600 mb-6">
            <span className="flex items-center gap-1.5"><Briefcase size={14} className="text-gray-400" /><b>Job type:</b> {job.type}</span>
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
