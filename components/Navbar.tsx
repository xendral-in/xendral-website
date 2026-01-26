import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { PageType } from '../App';

interface NavbarProps {
  onNavigate: (page: PageType, sectionId?: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (sectionId: string) => {
    setIsOpen(false);
    onNavigate('home', sectionId);
  };

  const navLinks = [
    { name: 'Services', id: 'services' },
    { name: 'About', id: 'about' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-black/90 backdrop-blur-xl shadow-2xl' : 'bg-black/70 backdrop-blur-md py-4'
        }`}
      style={isScrolled ? {
        boxShadow: '0 4px 30px rgba(0, 0, 0, 0.5), inset 0 -1px 0 rgba(193, 255, 114, 0.1)',
        borderBottom: '1px solid rgba(193, 255, 114, 0.1)',
        background: 'linear-gradient(180deg, rgba(0, 0, 0, 0.95) 0%, rgba(0, 0, 0, 0.85) 100%)'
      } : {}}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo - Simplified, no background box or text */}
          <div
            className="flex-shrink-0 flex items-center cursor-pointer group"
            onClick={() => {
              onNavigate('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            <img
              src="/logo.svg"
              alt="Xendral"
              className="h-28 w-auto object-contain transition-transform duration-300 group-hover:scale-110"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                const fallback = document.createElement('span');
                fallback.className = 'text-2xl font-black bg-gradient-to-r from-brand-primary to-brand-secondary bg-clip-text text-transparent tracking-tighter';
                fallback.textContent = 'XENDRAL';
                e.currentTarget.parentElement?.appendChild(fallback);
              }}
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.id)}
                className="text-white hover:text-brand-primary transition-colors duration-200 font-medium text-sm uppercase tracking-wider bg-transparent border-none cursor-pointer"
              >
                {link.name}
              </button>
            ))}
            <button
              onClick={() => handleNavClick('contact')}
              className="px-8 py-3 bg-gradient-to-r from-brand-primary to-brand-secondary text-black font-bold rounded-full hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-brand-primary/50 text-sm cursor-pointer border-none"
            >
              Get Started
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-brand-primary focus:outline-none bg-transparent border-none p-2"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black border-b border-gray-800 absolute w-full shadow-lg">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.id)}
                className="block w-full text-left px-3 py-3 rounded-md text-base font-medium text-white hover:text-brand-primary hover:bg-gray-900 border-none bg-transparent"
              >
                {link.name}
              </button>
            ))}
            <button
              onClick={() => handleNavClick('contact')}
              className="block w-full text-center mt-4 px-5 py-3 bg-gradient-to-r from-brand-primary to-brand-secondary text-black font-bold rounded-md hover:opacity-90 border-none"
            >
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;