import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import FloatingChatButton from './components/FloatingChatButton';
// import FloatingAppQR from './components/FloatingAppQR';
import Home from './pages/Home';
import AboutUsPage from './pages/AboutUsPage';
import ServicesPage from './pages/ServicesPage';
import DownloadAppPage from './pages/DownloadAppPage';
import ContactUsPage from './pages/ContactUsPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import Terms from './pages/Terms';
import CancellationPolicyPage from './pages/CancellationPolicyPage';
import RefundPolicyPage from './pages/RefundPolicyPage';
import DisclaimerPage from './pages/DisclaimerPage';
import AdvisoryNotePage from './pages/AdvisoryNotePage';
import CommercialVehicleLoanPage from './pages/CommercialVehicleLoanPage';
import CarLoanPage from './pages/CarLoanPage';
import TwoWheelerLoanPage from './pages/TwoWheelerLoanPage';
import SelfConstructionLoanPage from './pages/SelfConstructionLoanPage';
import HomeExtensionLoanPage from './pages/HomeExtensionLoanPage';
import SmeMsmeLoanPage from './pages/SmeMsmeLoanPage';

// New HAUS Nuo-Pay Service Pages
import MultiSingleEmiPage from './pages/MultiSingleEmiPage';
import SalaryAgainstLoanPage from './pages/SalaryAgainstLoanPage';
import TopUpBtLoanPage from './pages/TopUpBtLoanPage';
import HospfinsureLoanPage from './pages/HospfinsureLoanPage';

import TerminatedVendorsPage from './pages/TerminatedVendorsPage';
import NachCancellationPage from './pages/NachCancellationPage';
import CareersPage from './pages/CareersPage';
import JobDetailsPage from './pages/JobDetailsPage';
// New Un-Secured Service Pages
import BusinessLoanPage from './pages/BusinessLoanPage';
import PersonalLoanPage from './pages/PersonalLoanPage';
import DoctorsLoanPage from './pages/DoctorsLoanPage';
import EquipmentLoanPage from './pages/EquipmentLoanPage';

// New Morgatage Service Pages
import GoldLoanPage from './pages/GoldLoanPage';
import HomeLoanPage from './pages/HomeLoanPage';
import LoanAgainstPropertiesPage from './pages/LoanAgainstPropertiesPage';

// New Properties Management Pages
import RentalPayLandlordPage from './pages/RentalPayLandlordPage';
import RentalPayTenantPage from './pages/RentalPayTenantPage';
import SocietiesInsuredPage from './pages/SocietiesInsuredPage';
import NuoHausBuilderPage from './pages/NuoHausBuilderPage';
import NuoHausIndividualPage from './pages/NuoHausIndividualPage';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <Router>
      <Toaster position="top-right" toastOptions={{ duration: 4000 }} />
      <ScrollToTop />
      <div className="min-h-screen bg-[#FDFBF7] text-slate-900 font-sans flex flex-col">
        <Header />
        <FloatingChatButton />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUsPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/download-app" element={<DownloadAppPage />} />
            <Route path="/contact" element={<ContactUsPage />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/privacy" element={<PrivacyPolicyPage />} />
            <Route path="/cancellation" element={<CancellationPolicyPage />} />
            <Route path="/refund" element={<RefundPolicyPage />} />
            <Route path="/disclaimer" element={<DisclaimerPage />} />
            <Route path="/advisory" element={<AdvisoryNotePage />} />
            
            {/* Dedicated Loan Product Pages */}
            <Route path="/services/commercial-vehicle" element={<CommercialVehicleLoanPage />} />
            <Route path="/services/car-loan" element={<CarLoanPage />} />
            <Route path="/services/two-wheeler-loan" element={<TwoWheelerLoanPage />} />
            <Route path="/services/self-construction" element={<SelfConstructionLoanPage />} />
            <Route path="/services/home-extension" element={<HomeExtensionLoanPage />} />
            <Route path="/services/sme-msme-loan" element={<SmeMsmeLoanPage />} />
            <Route path="/terminated-vendors" element={<TerminatedVendorsPage />} />
            <Route path="/nach-cancellation" element={<NachCancellationPage />} />
            <Route path="/careers" element={<CareersPage />} />
            <Route path="/careers/:jobId" element={<JobDetailsPage />} />
            
            {/* HAUS Nuo-Pay Routes */}
            <Route path="/services/multi-single-emi" element={<MultiSingleEmiPage />} />
            <Route path="/services/salary-against-loan" element={<SalaryAgainstLoanPage />} />
            <Route path="/services/top-up-bt-loan" element={<TopUpBtLoanPage />} />
            <Route path="/services/hospfinsure-loan" element={<HospfinsureLoanPage />} />
            
            {/* Un-Secured Routes */}
            <Route path="/services/business-loan" element={<BusinessLoanPage />} />
            <Route path="/services/personal-loan" element={<PersonalLoanPage />} />
            <Route path="/services/doctors-loan" element={<DoctorsLoanPage />} />
            <Route path="/services/equipment-loan" element={<EquipmentLoanPage />} />
            
            {/* Morgatage Routes */}
            <Route path="/services/gold-loan" element={<GoldLoanPage />} />
            <Route path="/services/home-loan" element={<HomeLoanPage />} />
            <Route path="/services/loan-against-properties" element={<LoanAgainstPropertiesPage />} />
            
            {/* Properties Management Routes */}
            <Route path="/services/properties/rental-pay-landlord" element={<RentalPayLandlordPage />} />
            <Route path="/services/properties/rental-pay-tenant" element={<RentalPayTenantPage />} />
            <Route path="/services/properties/societies-insured" element={<SocietiesInsuredPage />} />
            <Route path="/services/properties/nuo-haus-builder" element={<NuoHausBuilderPage />} />
            <Route path="/services/properties/nuo-haus-individual" element={<NuoHausIndividualPage />} />

          </Routes>
        </main>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;


