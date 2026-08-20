import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ServicesHero from '../components/ServicesHero';
import ServicesList from '../components/ServicesList';
import ServicesProcess from '../components/ServicesProcess';
import ServicesWhyChoose from '../components/ServicesWhyChoose';
import ServicesFAQ from '../components/ServicesFAQ';
import CompanyStats from '../components/CompanyStats';
import HappyClients from '../components/HappyClients';
import NewsAndPress from '../components/NewsAndPress';
import ServicesCTA from '../components/ServicesCTA';
import ScrollReveal from '../components/ScrollReveal';

const ServicesPage = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.slice(1));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location]);

  return (
    <div className="bg-[#fcfcfc] min-h-screen">
      <ServicesHero />
      <ScrollReveal><ServicesList /></ScrollReveal>
      <ScrollReveal><ServicesProcess /></ScrollReveal>
      <ScrollReveal><ServicesWhyChoose /></ScrollReveal>
      <ScrollReveal><ServicesFAQ /></ScrollReveal>
      <ScrollReveal><CompanyStats /></ScrollReveal>
      <ScrollReveal><HappyClients /></ScrollReveal>
      <ScrollReveal><NewsAndPress /></ScrollReveal>
      <ScrollReveal><ServicesCTA /></ScrollReveal>
    </div>
  );
};

export default ServicesPage;
