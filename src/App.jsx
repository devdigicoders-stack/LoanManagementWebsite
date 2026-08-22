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

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-[#0b0f0e] text-white font-sans flex flex-col">
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
          </Routes>
        </main>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;
