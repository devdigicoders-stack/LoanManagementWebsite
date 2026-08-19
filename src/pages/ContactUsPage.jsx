import React, { useEffect } from 'react';
import ContactHero from '../components/ContactHero';
import ContactInfo from '../components/ContactInfo';
import ContactEnquiryForm from '../components/ContactEnquiryForm';
import ContactRequirements from '../components/ContactRequirements';
import ContactMap from '../components/ContactMap';
import ContactSupport from '../components/ContactSupport';
import ContactHoursFeedback from '../components/ContactHoursFeedback';
import ContactFAQ from '../components/ContactFAQ';
import ContactDisclaimer from '../components/ContactDisclaimer';
import ContactSocial from '../components/ContactSocial';
import ContactFinalCTA from '../components/ContactFinalCTA';

const ContactUsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#fcfcfc] min-h-screen">
      <ContactHero />
      <ContactInfo />
      <ContactMap />
      <ContactEnquiryForm />
      <ContactRequirements />
      <ContactSupport />
      <ContactHoursFeedback />
      <ContactFAQ />
      <ContactDisclaimer />
      <ContactSocial />
      <ContactFinalCTA />
    </div>
  );
};

export default ContactUsPage;
