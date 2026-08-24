import React, { useState } from 'react';
import { MapPin, Search, Phone, Navigation } from 'lucide-react';

const branches = [
  {
    id: 1,
    name: "Head Office - Hyderabad",
    address: "Srinivas Nagar, Kapra, Dr. AS Rao Nagar, Medchal-Malkajgiri, Secunderabad, Hyderabad – 500 062, TG, India",
    phone: "+91 9755 766 018",
    lat: "17.4839",
    lng: "78.5528",
    isHeadOffice: true
  }
];

const ContactMap = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeBranch, setActiveBranch] = useState(branches[0]);

  const filteredBranches = branches.filter(branch => 
    branch.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    branch.address.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="w-full bg-[#fcfcfc] py-20 px-6 md:px-10 border-t border-gray-100">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-[#E0F2FE] text-[#0369A1] rounded-full px-4 py-1 text-sm font-bold tracking-wider mb-4 uppercase">
            <MapPin size={14} /> Branch Locator
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            Find an <span className="text-[#0EA5E9]">HAUS NUO-Pay Branch</span> Near You
          </h2>
          <p className="text-gray-500 text-base max-w-xl mx-auto">
            We have a growing network of branches across India. Visit us at a location near you for personalized assistance.
          </p>
        </div>

        <div className="bg-white rounded-3xl overflow-hidden border border-gray-200 shadow-[0_8px_30px_rgba(0,0,0,0.04)] h-[500px] relative">
          
          {/* Map */}
          <div className="w-full h-full relative bg-gray-100">
            {/* Map Embed - Using a generic query for the active branch's city for simulation */}
            <iframe
              title={`Location map for ${activeBranch.name}`}
              src={`https://maps.google.com/maps?q=${activeBranch.lat},${activeBranch.lng}&t=&z=13&ie=UTF8&iwloc=&output=embed`}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            
            <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-gray-100 flex flex-col md:flex-row md:items-center justify-between gap-4 max-w-lg">
               <div>
                  <h4 className="font-bold text-gray-900 text-sm mb-1">{activeBranch.name}</h4>
                  <p className="text-xs text-gray-500 max-w-sm truncate">{activeBranch.address}</p>
               </div>
               <a 
                 href={`https://maps.google.com/?q=${activeBranch.lat},${activeBranch.lng}`}
                 target="_blank"
                 rel="noreferrer"
                 className="flex items-center gap-2 bg-[#0EA5E9] text-white text-xs font-bold px-4 py-2 rounded-lg hover:bg-[#4aaa10] transition-colors"
               >
                 <Navigation size={14} /> Get Directions
               </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactMap;
