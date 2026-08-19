import React from 'react';
import GetStartedHero from '../components/GetStartedHero';
import GetStartedOptions from '../components/GetStartedOptions';
import GetStartedForm from '../components/GetStartedForm';
import GetStartedProcess from '../components/GetStartedProcess';
import GetStartedWhyUs from '../components/GetStartedWhyUs';
import GetStartedPrep from '../components/GetStartedPrep';
import GetStartedDisclaimer from '../components/GetStartedDisclaimer';
import GetStartedFinalCTA from '../components/GetStartedFinalCTA';

const GetStartedPage = () => {
  return (
    <div className="bg-[#fcfcfc] min-h-screen">
      <GetStartedHero />
      <GetStartedOptions />
      <GetStartedForm />
      <GetStartedProcess />
      <GetStartedWhyUs />
      <GetStartedPrep />
      <GetStartedDisclaimer />
      <GetStartedFinalCTA />
    </div>
  );
};

export default GetStartedPage;
