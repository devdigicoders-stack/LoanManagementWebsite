import React from 'react';

const ServiceCTA = () => {
  return (
    <section className="w-full bg-[#FDFBF7] py-16 px-6 text-center shadow-xl border-t border-[#E0F2FE]">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">
          Explore Your Loan Against Property Options
        </h2>
        <p className="text-slate-600 text-[15px] mb-8">
          Get started with a simple enquiry.
        </p>
        <button className="bg-white hover:bg-gray-100 text-slate-900 font-bold py-3 px-10 rounded-xl transition-all duration-300 shadow-md hover:scale-105">
          Enquire Now
        </button>
      </div>
    </section>
  );
};

export default ServiceCTA;
