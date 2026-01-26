import React from 'react';
import { Github, Linkedin, Instagram, Code, Smartphone, PenTool, Megaphone } from 'lucide-react';
import { PageType } from '../App';
import { ServiceType } from './ServiceDetail';

interface FooterProps {
  onNavigate: (page: PageType, sectionId?: string) => void;
  onServiceClick: (service: ServiceType) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate, onServiceClick }) => {
  // Service mapping for footer links
  const serviceMap: { [key: string]: ServiceType } = {
    'Website Development': {
      icon: <Code className="h-6 w-6" />,
      title: 'Website Development',
      description: 'High-performance, responsive websites tailored to your brand identity.',
      functionalStrategy: 'We focus on user journey mapping to ensure your website converts visitors into customers. By analyzing user behavior, we structure content to guide users seamlessly towards your business goals.',
      technicalStrategy: 'Utilizing modern frameworks like React and Next.js, we build Single Page Applications (SPAs) that load instantly. We implement Server-Side Rendering (SSR) for optimal SEO and leverage CDNs for global content delivery.',
    },
    'App Development': {
      icon: <Smartphone className="h-6 w-6" />,
      title: 'App Development',
      description: 'Native and cross-platform mobile applications designed for seamless user experiences.',
      functionalStrategy: 'We prioritize "thumb-friendly" design zones and intuitive navigation patterns. Our functional approach ensures that key actions are never more than two taps away, increasing user retention.',
      technicalStrategy: 'We use React Native and Flutter to maintain a single codebase for both iOS and Android, reducing maintenance costs. Our apps are integrated with cloud-native backends for real-time data synchronization.',
    },
    'UI/UX Design': {
      icon: <PenTool className="h-6 w-6" />,
      title: 'UI/UX Design',
      description: 'User-centric interfaces that are intuitive and visually stunning.',
      functionalStrategy: 'Our design process starts with empathy. We create detailed user personas and wireframes to validate flows before a single pixel is polished, ensuring the product solves real problems.',
      technicalStrategy: 'We deliver design systems using atomic design principles, ensuring consistency across your digital ecosystem. Our handoffs include fully interactive prototypes and CSS/tokens for developers.',
    },
    'Digital Marketing': {
      icon: <Megaphone className="h-6 w-6" />,
      title: 'Digital Marketing',
      description: 'Strategic marketing campaigns to amplify your reach and presence.',
      functionalStrategy: 'We use an omnichannel approach, ensuring your brand voice is consistent across Social, Email, and Search. We focus on high-intent targeting to maximize ROI.',
      technicalStrategy: 'We implement advanced tracking pixels and conversion API integrations to measure attribution accurately. Our campaigns use programmatic bidding algorithms to optimize ad spend in real-time.',
    }
  };

  const handleServiceLinkClick = (serviceName: string) => {
    const service = serviceMap[serviceName];
    if (service) {
      onServiceClick(service);
    }
  };

  return (
    <footer className="bg-brand-dark border-t border-slate-800 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">

          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center mb-4 cursor-pointer" onClick={() => onNavigate('home')}>
              <span className="text-2xl font-bold text-white tracking-tight">XENDRAL</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Empowering businesses with high-performance IT infrastructure and next-gen software solutions.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><button onClick={() => handleServiceLinkClick('Website Development')} className="hover:text-brand-primary transition-colors bg-transparent border-none cursor-pointer text-left p-0 text-slate-400">Website Development</button></li>
              <li><button onClick={() => handleServiceLinkClick('App Development')} className="hover:text-brand-primary transition-colors bg-transparent border-none cursor-pointer text-left p-0 text-slate-400">App Development</button></li>
              <li><button onClick={() => handleServiceLinkClick('UI/UX Design')} className="hover:text-brand-primary transition-colors bg-transparent border-none cursor-pointer text-left p-0 text-slate-400">UI/UX Design</button></li>
              <li><button onClick={() => handleServiceLinkClick('Digital Marketing')} className="hover:text-brand-primary transition-colors bg-transparent border-none cursor-pointer text-left p-0 text-slate-400">Digital Marketing</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><button onClick={() => onNavigate('home', 'about')} className="hover:text-brand-primary transition-colors bg-transparent border-none cursor-pointer text-left p-0 text-slate-400">About Us</button></li>
              <li><button onClick={() => onNavigate('careers')} className="hover:text-brand-primary transition-colors bg-transparent border-none cursor-pointer text-left p-0 text-slate-400">Careers</button></li>
              <li><button onClick={() => onNavigate('home', 'contact')} className="hover:text-brand-primary transition-colors bg-transparent border-none cursor-pointer text-left p-0 text-slate-400">Contact</button></li>
              <li><a href="mailto:xendral.in@gmail.com" className="hover:text-brand-primary transition-colors">xendral.in@gmail.com</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Connect</h4>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/xendral.in/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-slate-400 hover:bg-brand-primary hover:text-white transition-all duration-300">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/in/xendraltechies/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-slate-400 hover:bg-brand-primary hover:text-white transition-all duration-300">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()} Xendral. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <button onClick={() => onNavigate('privacy')} className="hover:text-slate-300 bg-transparent border-none cursor-pointer p-0 text-slate-500">Privacy Policy</button>
            <button onClick={() => onNavigate('terms')} className="hover:text-slate-300 bg-transparent border-none cursor-pointer p-0 text-slate-500">Terms of Service</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;