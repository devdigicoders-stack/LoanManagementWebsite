import React, { useState } from 'react';

const EmiCalculator = () => {
  const [loanAmount, setLoanAmount] = useState(500000);
  const [interestRate, setInterestRate] = useState(10.5);
  const [loanTenure, setLoanTenure] = useState(5); // in years

  // EMI Calculation Formula: P x R x (1+R)^N / [(1+R)^N-1]
  // P = Principal (loanAmount)
  // R = Rate of interest per month (interestRate / 12 / 100)
  // N = Number of monthly installments (loanTenure * 12)
  const calculateEMI = () => {
    const p = loanAmount;
    const r = interestRate / 12 / 100;
    const n = loanTenure * 12;
    
    if (r === 0) return p / n;
    
    const emi = p * r * (Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    return emi.toFixed(0);
  };

  const emi = calculateEMI();
  const totalPayment = (emi * loanTenure * 12).toFixed(0);
  const totalInterest = (totalPayment - loanAmount).toFixed(0);

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <section className="relative w-full bg-white py-20 px-6 md:px-10 border-t border-gray-100">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 items-center">
        
        {/* Left Side: Text and Controls */}
        <div className="w-full lg:w-1/2">
          <div className="inline-block bg-[#f0fbf0] text-[#5bc116] rounded-full px-4 py-1.5 text-xs font-bold tracking-wider mb-4">
            PLAN YOUR FINANCES
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
            Calculate your <span className="text-[#5bc116]">EMI instantly</span>
          </h2>
          <p className="text-gray-600 mb-10">
            Use our easy EMI calculator to figure out your monthly payments and plan your loan accordingly.
          </p>

          <div className="space-y-8">
            {/* Loan Amount */}
            <div>
              <div className="flex justify-between mb-2">
                <label className="font-semibold text-gray-800">Loan Amount</label>
                <span className="font-bold text-[#5bc116] bg-[#f0fbf0] px-3 py-1 rounded-md">{formatCurrency(loanAmount)}</span>
              </div>
              <input 
                type="range" 
                min="50000" 
                max="5000000" 
                step="50000" 
                value={loanAmount} 
                onChange={(e) => setLoanAmount(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#5bc116]"
              />
              <div className="flex justify-between text-xs text-gray-400 mt-1">
                <span>₹50K</span>
                <span>₹50L+</span>
              </div>
            </div>

            {/* Interest Rate */}
            <div>
              <div className="flex justify-between mb-2">
                <label className="font-semibold text-gray-800">Interest Rate (% p.a.)</label>
                <span className="font-bold text-[#5bc116] bg-[#f0fbf0] px-3 py-1 rounded-md">{interestRate}%</span>
              </div>
              <input 
                type="range" 
                min="5" 
                max="25" 
                step="0.1" 
                value={interestRate} 
                onChange={(e) => setInterestRate(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#5bc116]"
              />
              <div className="flex justify-between text-xs text-gray-400 mt-1">
                <span>5%</span>
                <span>25%</span>
              </div>
            </div>

            {/* Loan Tenure */}
            <div>
              <div className="flex justify-between mb-2">
                <label className="font-semibold text-gray-800">Loan Tenure (Years)</label>
                <span className="font-bold text-[#5bc116] bg-[#f0fbf0] px-3 py-1 rounded-md">{loanTenure} Years</span>
              </div>
              <input 
                type="range" 
                min="1" 
                max="30" 
                step="1" 
                value={loanTenure} 
                onChange={(e) => setLoanTenure(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#5bc116]"
              />
              <div className="flex justify-between text-xs text-gray-400 mt-1">
                <span>1 Yr</span>
                <span>30 Yrs</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Results */}
        <div className="w-full lg:w-1/2">
          <div className="bg-[#030706] text-white rounded-3xl p-8 md:p-10 shadow-2xl relative overflow-hidden">
            {/* Decorative circles */}
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#71d924] rounded-full mix-blend-screen filter blur-[80px] opacity-20"></div>
            
            <h3 className="text-xl font-medium text-gray-300 mb-6 border-b border-gray-800 pb-4">Your EMI Details</h3>
            
            <div className="mb-8">
              <p className="text-gray-400 mb-2">Equated Monthly Installment (EMI)</p>
              <div className="text-4xl md:text-5xl font-bold text-[#71d924]">{formatCurrency(emi)} <span className="text-lg font-normal text-gray-500">/mo</span></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-[#0f1f13] p-5 rounded-xl border border-gray-800">
                <p className="text-gray-400 text-sm mb-1">Total Interest</p>
                <p className="text-xl font-bold">{formatCurrency(totalInterest)}</p>
              </div>
              <div className="bg-[#0f1f13] p-5 rounded-xl border border-gray-800">
                <p className="text-gray-400 text-sm mb-1">Total Amount Payable</p>
                <p className="text-xl font-bold">{formatCurrency(totalPayment)}</p>
              </div>
            </div>

            <button className="w-full bg-gradient-to-r from-[#eef200] to-[#1cf200] hover:from-[#d5d900] hover:to-[#17cc00] text-black font-bold py-4 px-6 rounded-xl shadow-[0_0_20px_rgba(28,242,0,0.2)] transition-all duration-300 hover:scale-[1.02]">
              Apply for Loan Now
            </button>
            <p className="text-center text-xs text-gray-500 mt-4">
              * This is an approximate calculation. Actual EMIs may vary based on bank policies.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default EmiCalculator;
