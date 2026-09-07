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
    <div className="bg-slate-50 min-h-screen pb-20 overflow-hidden">
      <HeroSlider />
      
      {/* Main Sections */}
      <div className="flex flex-col gap-12 md:gap-20">
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
      </div>

      {/* EMI Modal */}
      <PayEmiCheck 
        isOpen={isEmiModalOpen} 
        onClose={() => setIsEmiModalOpen(false)} 
      />
    </div>
  );
};

export default Home;
