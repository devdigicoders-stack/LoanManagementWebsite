import React, { useEffect } from 'react';
import AppHero from '../components/AppHero';
import AppFeatures from '../components/AppFeatures';
import AppHowItWorks from '../components/AppHowItWorks';
import AppDownloadLinks from '../components/AppDownloadLinks';
import AppSupport from '../components/AppSupport';
import CompanyStats from '../components/CompanyStats';
import HappyClients from '../components/HappyClients';
import NewsAndPress from '../components/NewsAndPress';
import AppFinalCTA from '../components/AppFinalCTA';
import ScrollReveal from '../components/ScrollReveal';

const DownloadAppPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#fcfcfc] min-h-screen">
      <AppHero />
      <ScrollReveal><AppFeatures /></ScrollReveal>
      <ScrollReveal><AppHowItWorks /></ScrollReveal>
      <ScrollReveal><AppDownloadLinks /></ScrollReveal>
      <ScrollReveal><CompanyStats /></ScrollReveal>
      <ScrollReveal><HappyClients /></ScrollReveal>
      <ScrollReveal><NewsAndPress /></ScrollReveal>
      <ScrollReveal><AppSupport /></ScrollReveal>
      <ScrollReveal><AppFinalCTA /></ScrollReveal>
    </div>
  );
};

export default DownloadAppPage;
