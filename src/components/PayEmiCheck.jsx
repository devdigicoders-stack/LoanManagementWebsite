import React, { useState } from 'react';
import { Search, X } from 'lucide-react';
import toast from 'react-hot-toast';
import { 
  validateMobile, 
  validateAadhar, 
  validatePAN, 
  sanitizeDigitsOnly, 
  sanitizePAN 
} from '../utils/validation';

const PayEmiCheck = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    mobile: '',
    aadhar: '',
    pan: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    let sanitized = value;
    if (name === 'mobile') sanitized = sanitizeDigitsOnly(value, 10);
    else if (name === 'aadhar') sanitized = sanitizeDigitsOnly(value, 12);
    else if (name === 'pan') sanitized = sanitizePAN(value);
    
    setFormData({ ...formData, [name]: sanitized });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const mobCheck = validateMobile(formData.mobile);
    if (!mobCheck.valid) {
      toast.error(mobCheck.message);
      return;
    }

    const aadharCheck = validateAadhar(formData.aadhar, true);
    if (!aadharCheck.valid) {
      toast.error(aadharCheck.message);
      return;
    }

    const panCheck = validatePAN(formData.pan, true);
    if (!panCheck.valid) {
      toast.error(panCheck.message);
      return;
    }

    // Logic for checking EMI will go here
    toast.success("Details verified successfully! Checking EMI status...");
    alert("Checking EMI for Mobile: " + formData.mobile);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm px-4">
      <div className="w-full max-w-4xl bg-white border border-slate-100 rounded-3xl p-6 md:p-8 shadow-2xl relative overflow-hidden">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-600 hover:text-slate-900 transition-colors z-20"
        >
          <X size={24} />
        </button>

        {/* Subtle Background Accent */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#0EA5E9] opacity-5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4 pointer-events-none"></div>

        <div className="relative z-10 flex flex-col xl:flex-row items-center gap-8 justify-between mt-2">
          
          <div className="w-full xl:w-1/3 text-center xl:text-left">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">Check & Pay <span className="text-[#0EA5E9]">EMI</span></h2>
            <p className="text-slate-600 text-sm">Enter your details below to instantly check your loan status and pending EMI amount.</p>
          </div>

          <form onSubmit={handleSubmit} className="w-full xl:w-2/3 flex flex-col md:flex-row gap-4 items-end">
            <div className="w-full">
              <label className="block text-xs font-semibold text-slate-600 mb-2 uppercase tracking-wider">Mobile Number</label>
              <input 
                type="tel" 
                inputMode="numeric"
                name="mobile"
                maxLength={10}
                placeholder="10-digit number"
                className="w-full bg-[#F0F9FF] border border-slate-100 text-slate-900 placeholder:text-gray-600 rounded-xl px-4 py-3 focus:outline-none focus:border-[#0EA5E9] transition-colors font-mono"
                value={formData.mobile}
                onChange={handleChange}
                required
              />
            </div>
            <div className="w-full">
              <label className="block text-xs font-semibold text-slate-600 mb-2 uppercase tracking-wider">Aadhaar Number</label>
              <input 
                type="text" 
                inputMode="numeric"
                name="aadhar"
                maxLength={12}
                placeholder="12-digit number"
                className="w-full bg-[#F0F9FF] border border-slate-100 text-slate-900 placeholder:text-gray-600 rounded-xl px-4 py-3 focus:outline-none focus:border-[#0EA5E9] transition-colors font-mono"
                value={formData.aadhar}
                onChange={handleChange}
                required
              />
            </div>
            <div className="w-full">
              <label className="block text-xs font-semibold text-slate-600 mb-2 uppercase tracking-wider">PAN Number</label>
              <input 
                type="text" 
                name="pan"
                maxLength={10}
                placeholder="ABCDE1234F"
                className="w-full bg-[#F0F9FF] border border-slate-100 text-slate-900 placeholder:text-gray-600 rounded-xl px-4 py-3 focus:outline-none focus:border-[#0EA5E9] transition-colors uppercase font-mono"
                value={formData.pan}
                onChange={handleChange}
                required
              />
            </div>
            <button 
              type="submit"
              className="w-full md:w-auto shrink-0 bg-[#0EA5E9] hover:bg-[#0369A1] text-black font-bold px-8 py-3 rounded-xl flex items-center justify-center gap-2 transition-all duration-300 shadow-[0_4px_15px_rgba(91,193,22,0.3)]"
            >
              <Search size={18} />
              <span>Check</span>
            </button>
          </form>

        </div>
      </div>
    </div>
  );
};

export default PayEmiCheck;

