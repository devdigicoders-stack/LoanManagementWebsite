import React from 'react';

const AboutBusinessOverview = () => {
  return (
    <section className="w-full bg-[#f8fcf5] py-20 px-6 md:px-10 border-t border-b border-[#eaf7e3]">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-block bg-[#eaf7e3] text-[#5bc116] font-bold text-[10px] md:text-[11px] uppercase tracking-widest py-1.5 px-4 rounded-full mb-4">
            OVERVIEW
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Business <span className="text-[#5bc116]">Overview</span>
          </h2>
        </div>

        <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100">
          <div className="space-y-6 text-gray-600 text-[15px] leading-relaxed">
            <p>
              <strong className="text-gray-900">NuoG Housing Payment’s Limited (HAUS NUO-PayPL)</strong>, is one of India’s fastest-growing non-banking financial companies (NBFCs) offering tailored financial solutions to a wide range of customers under retail, MSME & wholesale verticals.
            </p>
            <p>
              We constantly strive to meet the unique financial needs of customers through our diversified product offerings. Retail portfolio of products includes Loan against Property, Home Loan, Personal Loan and Business Loan. Our MSME vertical focuses on small-ticket corporate loans and loans backed by a variety of collaterals, especially in non-metro markets. Wholesale lending portfolio encompasses a range of financial solutions including corporate loans, collateralised loans, and real estate financing.
            </p>
            <p>
              A nationwide presence enables us to serve better and provide a smooth experience to customers. Our decentralized lending approach in retail & MSME makes our branches more efficient, enabling faster processing, quicker turnaround and increased productivity.
            </p>
            <p>
              At <strong className="text-[#5bc116]">HAUS NUO-Pay</strong>, we have built a customer-centric franchise while aspiring to set new industry benchmarks across growth, asset quality, operating metrics, service delivery standards and shareholder return. As we strive to become a partner of choice for all our customers, employees, and vendors, we have prioritized three focus areas i.e., people, product, process and platform. We are actively investing in these areas and devised specific strategies that will help us realise our vision.
            </p>
            <div className="bg-[#f4fdf5] p-6 rounded-2xl border border-[#e8fbe9] mt-8 text-center">
              <p className="font-semibold text-gray-800">
                HAUS NUO-Pay Focuses on Small Time Retail Customers Mainly in Metro, Tier-1,2,3 & 4 Cities, Offering them Tailor Made Solutions to Earn their Livehood with Competitive Pricing & Transparent Terms.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutBusinessOverview;

