import React, { useEffect } from 'react';
import AppHero from '../components/AppHero';
import AppAccess from '../components/AppAccess';
import AppFeatures from '../components/AppFeatures';
import AppHowItWorks from '../components/AppHowItWorks';
import AppWhyUse from '../components/AppWhyUse';
import AppExperience from '../components/AppExperience';
import AppDownloadLinks from '../components/AppDownloadLinks';
import AppSupport from '../components/AppSupport';
import AppDisclaimer from '../components/AppDisclaimer';
import AppFinalCTA from '../components/AppFinalCTA';

const DownloadAppPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#fcfcfc] min-h-screen">
      <AppHero />
      <AppAccess />
      <AppFeatures />
      <AppHowItWorks />
      <AppWhyUse />
      <AppExperience />
      <AppDownloadLinks />
      <AppSupport />
      <AppDisclaimer />
      <AppFinalCTA />
    </div>
  );
};

export default DownloadAppPage;
