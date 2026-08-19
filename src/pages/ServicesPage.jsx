import React, { useEffect } from 'react';
import ServicesHero from '../components/ServicesHero';
import ServicesList from '../components/ServicesList';
import ServicesGuidance from '../components/ServicesGuidance';
import ServicesDigital from '../components/ServicesDigital';
import ServicesProcess from '../components/ServicesProcess';
import ServicesWhyChoose from '../components/ServicesWhyChoose';
import ServicesGlance from '../components/ServicesGlance';
import ServicesConsiderations from '../components/ServicesConsiderations';
import ServicesFAQ from '../components/ServicesFAQ';
import ServicesDisclaimer from '../components/ServicesDisclaimer';
import ServicesCTA from '../components/ServicesCTA';

const ServicesPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#fcfcfc] min-h-screen">
      <ServicesHero />
      <ServicesList />
      <ServicesGuidance />
      <ServicesDigital />
      <ServicesProcess />
      <ServicesWhyChoose />
      <ServicesGlance />
      <ServicesConsiderations />
      <ServicesFAQ />
      <ServicesDisclaimer />
      <ServicesCTA />
    </div>
  );
};

export default ServicesPage;
