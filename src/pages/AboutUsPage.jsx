import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import AboutHero from '../components/AboutHero';
import AboutWhoWeAre from '../components/AboutWhoWeAre';
import AboutBusinessOverview from '../components/AboutBusinessOverview';
import AboutValues from '../components/AboutValues';
import AboutJourney from '../components/AboutJourney';
import AboutTeam from '../components/AboutTeam';
import AboutBottomStats from '../components/AboutBottomStats';
import CompanyStats from '../components/CompanyStats';
import HappyClients from '../components/HappyClients';
import NewsAndPress from '../components/NewsAndPress';
import HomeCTA from '../components/HomeCTA';
import ScrollReveal from '../components/ScrollReveal';

const AboutUsPage = () => {
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
    <>
      <AboutHero />
      <section id="who-we-are"><ScrollReveal><AboutWhoWeAre /></ScrollReveal></section>
      <section id="business-overview"><ScrollReveal><AboutBusinessOverview /></ScrollReveal></section>
      <section id="our-values"><ScrollReveal><AboutValues /></ScrollReveal></section>
      <section id="our-journey"><ScrollReveal><AboutJourney /></ScrollReveal></section>
      <section id="our-team"><ScrollReveal><AboutTeam /></ScrollReveal></section>
      <ScrollReveal><AboutBottomStats /></ScrollReveal>
      <ScrollReveal><NewsAndPress /></ScrollReveal>
      <ScrollReveal><HomeCTA /></ScrollReveal>
    </>
  );
};

export default AboutUsPage;
