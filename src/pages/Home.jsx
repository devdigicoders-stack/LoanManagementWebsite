import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import WhyChooseUs from '../components/WhyChooseUs';
import HowItWorks from '../components/HowItWorks';
import HomeCTA from '../components/HomeCTA';
import AboutBottomStats from '../components/AboutBottomStats';
import FAQ from '../components/FAQ';

const Home = () => {
  return (
    <>
      <Hero />
      <Services />
      <WhyChooseUs />
      <HowItWorks />
      <HomeCTA />
      <AboutBottomStats />
      <FAQ />
    </>
  );
};

export default Home;
