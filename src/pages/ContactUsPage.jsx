import React, { useEffect } from 'react';
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
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#fcfcfc] min-h-screen">
      <ContactHero />
      <ScrollReveal><ContactInfo /></ScrollReveal>
      <ScrollReveal><ContactMap /></ScrollReveal>
      <ScrollReveal><ContactEnquiryForm /></ScrollReveal>
      <ScrollReveal><ContactSupport /></ScrollReveal>
      <ScrollReveal><ContactFAQ /></ScrollReveal>
      <ScrollReveal><CompanyStats /></ScrollReveal>
      <ScrollReveal><HappyClients /></ScrollReveal>
      <ScrollReveal><NewsAndPress /></ScrollReveal>
    </div>
  );
};

export default ContactUsPage;
