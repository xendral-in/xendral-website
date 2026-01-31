import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';
import ServiceDetail from './components/ServiceDetail';
import { ServiceType, services } from './data/services';
import Stats from './components/Stats';
import Careers from './components/Careers';

// Layout wrapper that includes Navbar and Footer
const Layout: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();

  // Scroll to top on route change, or to section if specified
  useEffect(() => {
    // Check if there's a hash in the URL (e.g., /#services)
    if (location.hash) {
      setTimeout(() => {
        const element = document.getElementById(location.hash.substring(1));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  }, [location]);



  const navigateTo = (page: string, sectionId?: string) => {
    if (sectionId) {
      navigate(`/#${sectionId}`);
    } else {
      navigate(page);
    }
  };

  // Render home page content if on home route
  const isHomePage = location.pathname === '/';

  return (
    <div className="min-h-screen bg-black text-white selection:bg-brand-primary selection:text-black overflow-x-hidden">
      <Navbar onNavigate={navigateTo} />
      <main>
        {isHomePage ? (
          <>
            <Hero />
            <Stats />
            <Services />
            <About />
            <Contact />
          </>
        ) : (
          children
        )}
      </main>
      <Footer onNavigate={navigateTo} />
    </div>
  );
};

// Service detail page wrapper
const ServiceDetailPage: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Try to get service from state, or lookup by slug
  // Try to get service from state, or lookup by slug
  const slug = location.pathname.substring(1).replace(/\/$/, ''); // Remove leading slash and optional trailing slash
  const service = (location.state?.service as ServiceType) || services.find(s => s.slug === slug);

  if (!service) {
    // If no service found, redirect to home
    useEffect(() => {
      navigate('/');
    }, [navigate]);
    return null;
  }

  return <ServiceDetail service={service} onBack={() => navigate('/')} />;
};

const App: React.FC = () => {
  // Disable automatic scroll restoration
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} />

        {/* Dynamic Service Routes */}
        {services.map(service => (
          <Route
            key={service.slug}
            path={`/${service.slug}`}
            element={<Layout><ServiceDetailPage /></Layout>}
          />
        ))}

        {/* Other pages */}

        {/* Other pages */}
        <Route path="/privacy" element={<Layout><PrivacyPolicy /></Layout>} />
        <Route path="/terms" element={<Layout><TermsOfService /></Layout>} />
        <Route path="/careers" element={<Layout><Careers /></Layout>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;