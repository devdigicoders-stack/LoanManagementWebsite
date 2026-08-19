import React from 'react';
import { MapPin, ExternalLink } from 'lucide-react';

const ContactMap = () => {
  return (
    <section className="w-full bg-[#fcfcfc] py-20 px-6 md:px-10 border-t border-gray-100">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-[#e8fbe9] text-[#4a9b12] rounded-full px-4 py-1 text-sm font-bold tracking-wider mb-4 uppercase">
            <MapPin size={14} /> Find Us
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            Our <span className="text-[#5bc116]">Location</span>
          </h2>
          <p className="text-gray-500 text-base max-w-xl mx-auto">
            Visit our registered office at Srinivas Nagar, Kapra, Secunderabad, Hyderabad.
          </p>
        </div>

        <div className="rounded-3xl overflow-hidden border border-gray-200 shadow-lg">

          {/* Address bar above map */}
          <div className="bg-white px-6 py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-gray-100">
            <div className="flex items-start gap-3">
              <div className="w-9 h-9 bg-[#e8fbe9] rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                <MapPin size={18} className="text-[#5bc116]" />
              </div>
              <div>
                <p className="font-bold text-gray-900 text-sm">NuoG Housing Payment's Limited <span className="text-[#5bc116]">(HAUS NUO-Pay)</span></p>
                <p className="text-gray-500 text-sm">Srinivas Nagar, Kapra, Dr. AS Rao Nagar, Medchal-Malkajgiri, Secunderabad, Hyderabad – 500 062, TG, India</p>
              </div>
            </div>
            <a
              href="https://maps.google.com/?q=Srinivas+Nagar,+Kapra,+Dr+AS+Rao+Nagar,+Secunderabad,+Hyderabad,+Telangana+500062"
              target="_blank"
              rel="noreferrer"
              className="shrink-0 flex items-center gap-2 bg-[#5bc116] text-[#0b0f0e] font-bold text-sm px-4 py-2 rounded-xl hover:bg-[#4aaa10] transition-colors"
            >
              <ExternalLink size={15} /> Open in Maps
            </a>
          </div>

          {/* Map embed */}
          <div className="w-full h-[450px]">
            <iframe
              title="NuoG Housing Payment's Limited Office Location"
              src="https://maps.google.com/maps?q=Srinivas+Nagar,+Kapra,+Dr+AS+Rao+Nagar,+Secunderabad,+Hyderabad,+Telangana+500062&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactMap;
