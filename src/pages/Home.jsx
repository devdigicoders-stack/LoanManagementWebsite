import React from 'react';
import HeroSlider from '../components/HeroSlider';
import QuickActions from '../components/QuickActions';
import Services from '../components/Services';
import EmiCalculator from '../components/EmiCalculator';
import WhyChooseUs from '../components/WhyChooseUs';
import CompanyStats from '../components/CompanyStats';
import HowItWorks from '../components/HowItWorks';
import HomeCTA from '../components/HomeCTA';
import AboutBottomStats from '../components/AboutBottomStats';
import NewsAndPress from '../components/NewsAndPress';
import HappyClients from '../components/HappyClients';
import FAQ from '../components/FAQ';
import ScrollReveal from '../components/ScrollReveal';

const Home = () => {
  return (
    <div className="bg-[#0b0f0e]">
      <HeroSlider />
      <ScrollReveal><QuickActions /></ScrollReveal>
      <ScrollReveal><Services /></ScrollReveal>
      <ScrollReveal><EmiCalculator /></ScrollReveal>
      <ScrollReveal><WhyChooseUs /></ScrollReveal>
      <ScrollReveal><CompanyStats /></ScrollReveal>
      <ScrollReveal><HowItWorks /></ScrollReveal>
      <ScrollReveal><HomeCTA /></ScrollReveal>
      <ScrollReveal><AboutBottomStats /></ScrollReveal>
      <ScrollReveal><NewsAndPress /></ScrollReveal>
      <ScrollReveal><HappyClients /></ScrollReveal>
      <ScrollReveal><FAQ /></ScrollReveal>
    </div>
  );
};

export default Home;
