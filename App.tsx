import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';
import ServiceDetail, { ServiceType } from './components/ServiceDetail';
import Stats from './components/Stats';
import Careers from './components/Careers';

export type PageType = 'home' | 'privacy' | 'terms' | 'service-detail' | 'careers';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<PageType>('home');
  const [selectedService, setSelectedService] = useState<ServiceType | null>(null);

  const navigateTo = (page: PageType, sectionId?: string) => {
    setCurrentPage(page);
    if (sectionId) {
      // If we are navigating to a section, wait for render then scroll
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  };

  const handleServiceClick = (service: ServiceType) => {
    setSelectedService(service);
    setCurrentPage('service-detail');
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen bg-black text-white selection:bg-brand-primary selection:text-black overflow-x-hidden">
      <Navbar onNavigate={navigateTo} />
      <main>
        {currentPage === 'home' && (
          <>
            <Hero />
            <Stats />
            <Services onServiceClick={handleServiceClick} />
            <About />
            <Contact />
          </>
        )}
        {currentPage === 'service-detail' && selectedService && (
          <ServiceDetail service={selectedService} onBack={() => navigateTo('home')} />
        )}
        {currentPage === 'privacy' && <PrivacyPolicy />}
        {currentPage === 'terms' && <TermsOfService />}
        {currentPage === 'careers' && <Careers />}
      </main>
      <Footer onNavigate={navigateTo} onServiceClick={handleServiceClick} />
    </div>
  );
};

export default App;