import React, { useEffect } from 'react';

const TerminatedVendorsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const vendors = [
    {
      name: 'Vision Services (4598577754251033P) - DSA',
      address: 'Pune',
      reason: 'Process Violations'
    },
    {
      name: 'RAPID SOLUTIONS – Collection Agency',
      address: 'Telangana',
      reason: 'Performance & Discipline issue'
    },
    {
      name: 'VEGAM SOLUTIONS – Collection Agency',
      address: 'Telangana',
      reason: 'Performance & Discipline issue'
    },
    {
      name: 'CP ADVISOR FINANCIAL SERVICE – DSA',
      address: 'Vadodara',
      reason: 'Process Violation'
    }
 ];

  return (
    <div className="bg-[#fcfcfc] min-h-screen pt-32 pb-20 px-6 md:px-10">
      <div className="max-w-5xl mx-auto">
        <div className="mb-10 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Terminated Outsourcing Vendors
          </h1>
          <p className="text-gray-600 text-lg">
            Details of terminated outsourcing vendors as on July 31, 2026
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#FDFBF7] text-slate-900">
                  <th className="py-4 px-6 font-semibold border-b border-gray-700">Vendor</th>
                  <th className="py-4 px-6 font-semibold border-b border-gray-700">Address</th>
                  <th className="py-4 px-6 font-semibold border-b border-gray-700">Reasons for Termination</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-gray-800">
                {vendors.map((vendor, index) => (
                  <tr key={index} className="hover:bg-gray-50 transition-colors">
                    <td className="py-4 px-6 font-medium">{vendor.name}</td>
                    <td className="py-4 px-6 text-gray-600">{vendor.address}</td>
                    <td className="py-4 px-6 text-red-600">{vendor.reason}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TerminatedVendorsPage;
