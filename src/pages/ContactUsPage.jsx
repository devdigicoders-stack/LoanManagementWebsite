import React, { useEffect, useState } from 'react';
import ContactHero from '../components/ContactHero';
import ContactInfo from '../components/ContactInfo';
import ContactMap from '../components/ContactMap';
import ContactEnquiryForm from '../components/ContactEnquiryForm';
import ContactSupport from '../components/ContactSupport';
import ContactFAQ from '../components/ContactFAQ';
import CompanyStats from '../components/CompanyStats';
import HappyClients from '../components/HappyClients';
import NewsAndPress from '../components/NewsAndPress';
import ScrollReveal from '../components/ScrollReveal';

const ContactUsPage = () => {
  const [activeView, setActiveView] = useState('enquiry');
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#fcfcfc] min-h-screen">
      <ContactHero />
      
      {/* Contact Mode Toggle */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-12 flex justify-center">
        <div className="bg-white border border-gray-200 p-2 rounded-2xl inline-flex flex-col md:flex-row gap-2 shadow-sm relative z-10 -mt-20">
          <button
            onClick={() => setActiveView('enquiry')}
            className={`px-8 py-3 rounded-xl font-semibold transition-all cursor-pointer ${
              activeView === 'enquiry' 
                ? 'bg-[#0284C7] text-black shadow-md' 
                : 'text-gray-500 hover:bg-gray-50'
            }`}
          >
            Enquiry
          </button>
          <button
            onClick={() => setActiveView('support')}
            className={`px-8 py-3 rounded-xl font-semibold transition-all cursor-pointer ${
              activeView === 'support' 
                ? 'bg-[#0284C7] text-black shadow-md' 
                : 'text-gray-500 hover:bg-gray-50'
            }`}
          >
            Help & Support
          </button>
        </div>
      </div>

      {activeView === 'enquiry' ? (
        <ScrollReveal><ContactEnquiryForm /></ScrollReveal>
      ) : (
        <ScrollReveal><ContactInfo /></ScrollReveal>
      )}

      <ScrollReveal><ContactSupport /></ScrollReveal>
      <ScrollReveal><ContactFAQ /></ScrollReveal>
      <ScrollReveal><NewsAndPress /></ScrollReveal>
      <ScrollReveal><ContactMap /></ScrollReveal>
    </div>
  );
};

export default ContactUsPage;
