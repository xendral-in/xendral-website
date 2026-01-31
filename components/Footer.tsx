import React from 'react';
import { Github, Linkedin, Instagram } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: string, sectionId?: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-brand-dark border-t border-slate-800 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">

          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center mb-4 cursor-pointer" onClick={() => onNavigate('/')}>
              <span className="text-2xl font-bold text-white tracking-tight">XENDRAL</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Empowering businesses with high-performance IT infrastructure and next-gen software solutions.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><button onClick={() => onNavigate('/websitedevelopment')} className="hover:text-brand-primary transition-colors bg-transparent border-none cursor-pointer text-left p-0 text-slate-400">Website Development</button></li>
              <li><button onClick={() => onNavigate('/appdevelopment')} className="hover:text-brand-primary transition-colors bg-transparent border-none cursor-pointer text-left p-0 text-slate-400">App Development</button></li>
              <li><button onClick={() => onNavigate('/digitalmarketing')} className="hover:text-brand-primary transition-colors bg-transparent border-none cursor-pointer text-left p-0 text-slate-400">Digital Marketing</button></li>
              <li><button onClick={() => onNavigate('/videoediting')} className="hover:text-brand-primary transition-colors bg-transparent border-none cursor-pointer text-left p-0 text-slate-400">Video Editing</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><button onClick={() => onNavigate('/', 'about')} className="hover:text-brand-primary transition-colors bg-transparent border-none cursor-pointer text-left p-0 text-slate-400">About Us</button></li>
              <li><button onClick={() => onNavigate('/careers')} className="hover:text-brand-primary transition-colors bg-transparent border-none cursor-pointer text-left p-0 text-slate-400">Careers</button></li>
              <li><button onClick={() => onNavigate('/', 'contact')} className="hover:text-brand-primary transition-colors bg-transparent border-none cursor-pointer text-left p-0 text-slate-400">Contact</button></li>
              <li><a href="mailto:xendral.in@gmail.com" className="hover:text-brand-primary transition-colors">xendral.in@gmail.com</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Connect</h4>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/xendral.in/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-slate-400 hover:bg-brand-primary hover:text-white transition-all duration-300">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="www.linkedin.com/in/xendral" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-slate-400 hover:bg-brand-primary hover:text-white transition-all duration-300">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()} Xendral. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <button onClick={() => onNavigate('/privacy')} className="hover:text-slate-300 bg-transparent border-none cursor-pointer p-0 text-slate-500">Privacy Policy</button>
            <button onClick={() => onNavigate('/terms')} className="hover:text-slate-300 bg-transparent border-none cursor-pointer p-0 text-slate-500">Terms of Service</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;