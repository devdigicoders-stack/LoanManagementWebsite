import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import AboutUsPage from './pages/AboutUsPage';
import ServicesPage from './pages/ServicesPage';
import ServiceDetailsPage from './pages/ServiceDetailsPage';
import DownloadAppPage from './pages/DownloadAppPage';
import ContactUsPage from './pages/ContactUsPage';
import GetStartedPage from './pages/GetStartedPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import Terms from './pages/Terms';
import RefundPolicyPage from './pages/RefundPolicyPage';
import ENachCancellationPage from './pages/ENachCancellationPage';
import DisclaimerPage from './pages/DisclaimerPage';
import AdvisoryPage from './pages/AdvisoryPage';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-[#0b0f0e] text-white font-sans flex flex-col">
        <Header />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUsPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/services/loan-against-property" element={<ServiceDetailsPage />} />
            <Route path="/download-app" element={<DownloadAppPage />} />
            <Route path="/contact" element={<ContactUsPage />} />
            <Route path="/get-started" element={<GetStartedPage />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/privacy" element={<PrivacyPolicyPage />} />
            <Route path="/refund-policy" element={<RefundPolicyPage />} />
            <Route path="/enach-cancellation" element={<ENachCancellationPage />} />
            <Route path="/disclaimer" element={<DisclaimerPage />} />
            <Route path="/advisory" element={<AdvisoryPage />} />
          </Routes>
        </main>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;
