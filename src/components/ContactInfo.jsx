import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const ContactInfo = () => {
  return (
    <section className="w-full bg-[#fcfcfc] py-20 px-6 md:px-10 border-b border-gray-100">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center mb-16">
          <div className="inline-block bg-[#e8fbe9] text-[#4a9b12] rounded-full px-4 py-1 text-sm font-bold tracking-wider mb-4 uppercase">
            Get In Touch
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            We're Here to <span className="text-[#5bc116]">Help</span>
          </h2>
          <p className="text-gray-600 text-[16px] leading-relaxed max-w-2xl mx-auto">
            Our customer support team is available to assist with general enquiries, service-related questions and information about our platform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Phone */}
          <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-[#f4fdf5] border border-[#e8fbe9] text-[#5bc116] rounded-2xl flex items-center justify-center mb-6">
              <Phone size={28} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Phone</h3>
            <p className="text-[#5bc116] font-bold text-xl mb-4">
              <a href="tel:+919755766018">+91 9755 766 018</a>
            </p>
            <p className="text-gray-500 text-[14px] leading-relaxed">
              Speak with our support team for assistance with general enquiries and service-related information.
            </p>
          </div>

          {/* Email */}
          <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-[#f4fdf5] border border-[#e8fbe9] text-[#5bc116] rounded-2xl flex items-center justify-center mb-6">
              <Mail size={28} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Email</h3>
            <p className="text-[#5bc116] font-bold text-lg mb-4">
              <a href="mailto:haustouch@hausnuo.com">haustouch@hausnuo.com</a>
            </p>
            <p className="text-gray-500 text-[14px] leading-relaxed">
              Send us your questions, feedback or service-related enquiries and our team will get back to you through the appropriate channel.
            </p>
          </div>

          {/* Address */}
          <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-[#f4fdf5] border border-[#e8fbe9] text-[#5bc116] rounded-2xl flex items-center justify-center mb-6">
              <MapPin size={28} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Registered Office</h3>
            <p className="text-gray-800 font-bold text-[15px] mb-1">NuoG Housing Payment's Limited</p>
            <p className="text-[#5bc116] font-semibold text-[13px] mb-3">(HAUS NUO-Pay)</p>
            <p className="text-gray-500 text-[14px] leading-relaxed">
              Srinivas Nagar, Kapra, Dr. AS Rao Nagar,<br />
              Medchal-Malkajgiri, Secunderabad,<br />
              Hyderabad – 500 062, TG, India<br/>
              CIN: U70200TS2025PLC202763
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default ContactInfo;
