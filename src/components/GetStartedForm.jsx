import React, { useState } from 'react';
import { User, Phone, Mail, MapPin, Home, IndianRupee, Briefcase, FileText, Send, Building } from 'lucide-react';
import toast from 'react-hot-toast';
import { validateMobile, validateEmail, sanitizeDigitsOnly } from '../utils/validation';

const GetStartedForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    mobile: '',
    email: '',
    city: '',
    propertyType: '',
    propertyStatus: '',
    propertyValue: '',
    purpose: '',
    amount: '',
    employmentType: '',
    monthlyIncome: '',
    existingLoan: '',
    additionalInfo: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    let sanitized = value;
    if (name === 'mobile') {
      sanitized = sanitizeDigitsOnly(value, 10);
    }
    setFormData(prev => ({ ...prev, [name]: sanitized }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.fullName.trim()) {
      toast.error('Please enter your full name');
      return;
    }

    const mobileCheck = validateMobile(formData.mobile);
    if (!mobileCheck.valid) {
      toast.error(mobileCheck.message);
      return;
    }

    if (formData.email) {
      const emailCheck = validateEmail(formData.email);
      if (!emailCheck.valid) {
        toast.error(emailCheck.message);
        return;
      }
    }

    toast.success('Thank you! Your requirement has been submitted successfully.');
    setFormData({
      fullName: '',
      mobile: '',
      email: '',
      city: '',
      propertyType: '',
      propertyStatus: '',
      propertyValue: '',
      purpose: '',
      amount: '',
      employmentType: '',
      monthlyIncome: '',
      existingLoan: '',
      additionalInfo: ''
    });
  };

  return (
    <section id="enquiry-form" className="w-full bg-[#FDFBF7] py-24 px-6 md:px-10 border-t border-slate-100">
      <div className="max-w-4xl mx-auto">
        
        <div className="text-center mb-16">
          <div className="inline-block bg-[#F0F9FF] border border-[#0EA5E9]/20 text-[#0EA5E9] rounded-full shadow-sm px-5 py-2 text-sm font-bold tracking-widest uppercase mb-6 shadow-sm">
            Tell Us About Your Requirement
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
            Basic <span className="text-[#0EA5E9]">Information</span>
          </h2>
          <p className="text-slate-600 text-[16px] leading-relaxed max-w-2xl mx-auto">
            Please provide a few details so we can understand your requirement and guide you to the appropriate financial solution.
          </p>
        </div>

        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
          {/* Decorative Corner */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#E0F2FE] rounded-bl-full opacity-50 pointer-events-none"></div>

          <form onSubmit={handleSubmit} className="space-y-10 relative z-10">
            
            {/* Section 1: Personal Details */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-6 border-b border-gray-100 pb-3 flex items-center gap-2">
                <User size={20} className="text-[#0EA5E9]" /> Personal Details
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[14px] font-bold text-gray-700 ml-1">Full Name <span className="text-red-500">*</span></label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-600" size={18} />
                    <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} required placeholder="Enter your full name" className="w-full pl-11 pr-4 py-3 bg-[#fcfcfc] border border-gray-200 rounded-xl focus:outline-none focus:border-[#0EA5E9] focus:ring-1 focus:ring-[#0EA5E9] transition-all" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[14px] font-bold text-gray-700 ml-1">Mobile Number <span className="text-red-500">*</span></label>
                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-600" size={18} />
                    <input type="tel" inputMode="numeric" maxLength={10} name="mobile" value={formData.mobile} onChange={handleChange} required placeholder="10-digit mobile number" className="w-full pl-11 pr-4 py-3 bg-[#fcfcfc] border border-gray-200 rounded-xl focus:outline-none focus:border-[#0EA5E9] focus:ring-1 focus:ring-[#0EA5E9] transition-all font-mono" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[14px] font-bold text-gray-700 ml-1">Email Address</label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-600" size={18} />
                    <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter your email address" className="w-full pl-11 pr-4 py-3 bg-[#fcfcfc] border border-gray-200 rounded-xl focus:outline-none focus:border-[#0EA5E9] focus:ring-1 focus:ring-[#0EA5E9] transition-all" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[14px] font-bold text-gray-700 ml-1">City</label>
                  <div className="relative">
                    <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-600" size={18} />
                    <input type="text" name="city" value={formData.city} onChange={handleChange} placeholder="Enter your city" className="w-full pl-11 pr-4 py-3 bg-[#fcfcfc] border border-gray-200 rounded-xl focus:outline-none focus:border-[#0EA5E9] focus:ring-1 focus:ring-[#0EA5E9] transition-all" />
                  </div>
                </div>
              </div>
            </div>

            {/* Section 2: Property Details */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-6 border-b border-gray-100 pb-3 flex items-center gap-2">
                <Building size={20} className="text-[#0EA5E9]" /> Property Details
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[14px] font-bold text-gray-700 ml-1">Property Type</label>
                  <div className="relative">
                    <Home className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-600" size={18} />
                    <select defaultValue="" className="w-full pl-11 pr-4 py-3 bg-[#fcfcfc] border border-gray-200 rounded-xl focus:outline-none focus:border-[#0EA5E9] focus:ring-1 focus:ring-[#0EA5E9] transition-all appearance-none text-gray-600">
                      <option value="" disabled>Select Property Type</option>
                      <option value="Residential">Residential</option>
                      <option value="Commercial">Commercial</option>
                      <option value="Plot / Land">Plot / Land</option>
                      <option value="Under Construction">Under Construction</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[14px] font-bold text-gray-700 ml-1">Property Status</label>
                  <div className="relative">
                    <Building className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-600" size={18} />
                    <select defaultValue="" className="w-full pl-11 pr-4 py-3 bg-[#fcfcfc] border border-gray-200 rounded-xl focus:outline-none focus:border-[#0EA5E9] focus:ring-1 focus:ring-[#0EA5E9] transition-all appearance-none text-gray-600">
                      <option value="" disabled>Select Property Status</option>
                      <option value="Already Owned">Already Owned</option>
                      <option value="Planning to Purchase">Planning to Purchase</option>
                      <option value="Under Construction">Under Construction</option>
                      <option value="Recently Purchased">Recently Purchased</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>
                <div className="space-y-2 md:col-span-2">
                  <label className="text-[14px] font-bold text-gray-700 ml-1">Estimated Property Value</label>
                  <div className="relative">
                    <IndianRupee className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-600" size={18} />
                    <input type="text" placeholder="Enter approximate property value" className="w-full pl-11 pr-4 py-3 bg-[#fcfcfc] border border-gray-200 rounded-xl focus:outline-none focus:border-[#0EA5E9] focus:ring-1 focus:ring-[#0EA5E9] transition-all" />
                  </div>
                </div>
              </div>
            </div>

            {/* Section 3: Financial Details */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-6 border-b border-gray-100 pb-3 flex items-center gap-2">
                <Briefcase size={20} className="text-[#0EA5E9]" /> Financial Details
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[14px] font-bold text-gray-700 ml-1">Purpose of Finance</label>
                  <div className="relative">
                    <Briefcase className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-600" size={18} />
                    <select defaultValue="" className="w-full pl-11 pr-4 py-3 bg-[#fcfcfc] border border-gray-200 rounded-xl focus:outline-none focus:border-[#0EA5E9] focus:ring-1 focus:ring-[#0EA5E9] transition-all appearance-none text-gray-600">
                      <option value="" disabled>Select your requirement</option>
                      <option value="Home Purchase">Home Purchase</option>
                      <option value="Property Construction">Property Construction</option>
                      <option value="Home Renovation">Home Renovation</option>
                      <option value="Loan Against Property">Loan Against Property</option>
                      <option value="Commercial Property">Commercial Property</option>
                      <option value="Business Requirement">Business Requirement</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[14px] font-bold text-gray-700 ml-1">Required Financial Amount</label>
                  <div className="relative">
                    <IndianRupee className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-600" size={18} />
                    <input type="text" placeholder="Enter approximate required amount" className="w-full pl-11 pr-4 py-3 bg-[#fcfcfc] border border-gray-200 rounded-xl focus:outline-none focus:border-[#0EA5E9] focus:ring-1 focus:ring-[#0EA5E9] transition-all" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[14px] font-bold text-gray-700 ml-1">Employment / Income Type</label>
                  <div className="relative">
                    <Briefcase className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-600" size={18} />
                    <select defaultValue="" className="w-full pl-11 pr-4 py-3 bg-[#fcfcfc] border border-gray-200 rounded-xl focus:outline-none focus:border-[#0EA5E9] focus:ring-1 focus:ring-[#0EA5E9] transition-all appearance-none text-gray-600">
                      <option value="" disabled>Select your profile</option>
                      <option value="Salaried">Salaried</option>
                      <option value="Self Employed">Self Employed</option>
                      <option value="Business Owner">Business Owner</option>
                      <option value="Professional">Professional</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[14px] font-bold text-gray-700 ml-1">Monthly Income</label>
                  <div className="relative">
                    <IndianRupee className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-600" size={18} />
                    <input type="text" placeholder="Enter approximate monthly income" className="w-full pl-11 pr-4 py-3 bg-[#fcfcfc] border border-gray-200 rounded-xl focus:outline-none focus:border-[#0EA5E9] focus:ring-1 focus:ring-[#0EA5E9] transition-all" />
                  </div>
                </div>
                <div className="space-y-2 md:col-span-2">
                  <label className="text-[14px] font-bold text-gray-700 ml-1">Existing Loan</label>
                  <div className="relative">
                    <select defaultValue="" className="w-full px-4 py-3 bg-[#fcfcfc] border border-gray-200 rounded-xl focus:outline-none focus:border-[#0EA5E9] focus:ring-1 focus:ring-[#0EA5E9] transition-all appearance-none text-gray-600">
                      <option value="" disabled>Do you currently have any existing loan?</option>
                      <option value="Yes">Yes</option>
                      <option value="No">No</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 4: Additional Info */}
            <div>
              <div className="space-y-2">
                <label className="text-[14px] font-bold text-gray-700 ml-1">Additional Information</label>
                <div className="relative">
                  <FileText className="absolute left-4 top-4 text-slate-600" size={18} />
                  <textarea rows="4" placeholder="Tell us more about your requirement." className="w-full pl-11 pr-4 py-3 bg-[#fcfcfc] border border-gray-200 rounded-xl focus:outline-none focus:border-[#0EA5E9] focus:ring-1 focus:ring-[#0EA5E9] transition-all resize-none"></textarea>
                </div>
              </div>
            </div>

            <button type="submit" className="w-full bg-[#0EA5E9] text-slate-900 font-bold text-lg py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-[#0369A1] transition-colors shadow-lg shadow-[#0EA5E9]/20 group">
              Submit & Continue
              <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>

          </form>
        </div>

      </div>
    </section>
  );
};

export default GetStartedForm;

