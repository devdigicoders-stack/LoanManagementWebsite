import React, { useState } from 'react';
import HeroSlider from '../components/HeroSlider';
import PayEmiCheck from '../components/PayEmiCheck';
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
  const [isEmiModalOpen, setIsEmiModalOpen] = useState(false);

  return (
    <div className="bg-[#FDFBF7]">
      <HeroSlider />
      
      <ScrollReveal>
        <QuickActions onPayEmiClick={() => setIsEmiModalOpen(true)} />
      </ScrollReveal>
      
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

      {/* EMI Modal */}
      <PayEmiCheck 
        isOpen={isEmiModalOpen} 
        onClose={() => setIsEmiModalOpen(false)} 
      />
    </div>
  );
};

export default Home;
