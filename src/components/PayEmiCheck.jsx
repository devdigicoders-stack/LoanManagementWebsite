import React, { useState } from 'react';
import { Search } from 'lucide-react';

const PayEmiCheck = () => {
  const [formData, setFormData] = useState({
    mobile: '',
    aadhar: '',
    pan: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic for checking EMI will go here
    alert("Checking EMI for Mobile: " + formData.mobile);
  };

  return (
    <div className="w-full bg-[#0b0f0e] border-b border-[#1a241c] py-8 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="bg-[#111814] border border-[#1a241c] rounded-3xl p-6 md:p-8 shadow-xl relative overflow-hidden">
          
          {/* Subtle Background Accent */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#5bc116] opacity-5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4"></div>

          <div className="relative z-10 flex flex-col xl:flex-row items-center gap-8 justify-between">
            
            <div className="w-full xl:w-1/3 text-center xl:text-left">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Check & Pay <span className="text-[#5bc116]">EMI</span></h2>
              <p className="text-gray-400 text-sm">Enter your details below to instantly check your loan status and pending EMI amount.</p>
            </div>

            <form onSubmit={handleSubmit} className="w-full xl:w-2/3 flex flex-col md:flex-row gap-4 items-end">
              <div className="w-full">
                <label className="block text-xs font-semibold text-gray-400 mb-2 uppercase tracking-wider">Mobile Number</label>
                <input 
                  type="text" 
                  name="mobile"
                  placeholder="10-digit number"
                  className="w-full bg-[#050806] border border-[#1a241c] text-white placeholder:text-gray-600 rounded-xl px-4 py-3 focus:outline-none focus:border-[#5bc116] transition-colors"
                  value={formData.mobile}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="w-full">
                <label className="block text-xs font-semibold text-gray-400 mb-2 uppercase tracking-wider">Aadhaar Number</label>
                <input 
                  type="text" 
                  name="aadhar"
                  placeholder="12-digit number"
                  className="w-full bg-[#050806] border border-[#1a241c] text-white placeholder:text-gray-600 rounded-xl px-4 py-3 focus:outline-none focus:border-[#5bc116] transition-colors"
                  value={formData.aadhar}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="w-full">
                <label className="block text-xs font-semibold text-gray-400 mb-2 uppercase tracking-wider">PAN Number</label>
                <input 
                  type="text" 
                  name="pan"
                  placeholder="ABCDE1234F"
                  className="w-full bg-[#050806] border border-[#1a241c] text-white placeholder:text-gray-600 rounded-xl px-4 py-3 focus:outline-none focus:border-[#5bc116] transition-colors uppercase"
                  value={formData.pan}
                  onChange={handleChange}
                  required
                />
              </div>
              <button 
                type="submit"
                className="w-full md:w-auto shrink-0 bg-[#5bc116] hover:bg-[#4a9b12] text-black font-bold px-8 py-3 rounded-xl flex items-center justify-center gap-2 transition-all duration-300 shadow-[0_4px_15px_rgba(91,193,22,0.3)]"
              >
                <Search size={18} />
                <span>Check EMI</span>
              </button>
            </form>

          </div>
        </div>
      </div>
    </div>
  );
};

export default PayEmiCheck;
