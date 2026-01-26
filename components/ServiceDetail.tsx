import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Cpu, Settings } from 'lucide-react';

export interface ServiceType {
  icon: React.ReactNode;
  title: string;
  description: string;
  image?: string; // Made optional since we removed images
  functionalStrategy?: string;
  technicalStrategy?: string;
}

interface ServiceDetailProps {
  service: ServiceType;
  onBack: () => void;
}

const ServiceDetail: React.FC<ServiceDetailProps> = ({ service, onBack }) => {
  return (
    <motion.section
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      // Increased padding-top from pt-24 to pt-36 to prevent header from hiding content
      className="min-h-screen pt-36 pb-12 bg-black"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <button
          onClick={onBack}
          className="group flex items-center text-slate-400 hover:text-brand-primary transition-colors mb-8 font-medium"
        >
          <div className="p-2 rounded-full bg-gray-900 group-hover:bg-brand-primary/10 mr-2 transition-colors">
            <ArrowLeft className="w-5 h-5" />
          </div>
          Back to Services
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Header Section */}
          <div className="lg:col-span-3">
            {/* Replaced Icon logic with requested logo.png placeholder */}
            <div className="inline-flex items-center justify-center mb-6">
              <img src="logo.png" alt="Service Logo" className="w-16 h-16 object-contain" onError={(e) => {
                const parent = e.currentTarget.parentElement;
                if (parent) {
                  e.currentTarget.style.display = 'none';
                  parent.innerHTML = `<div class="p-4 bg-brand-primary/10 rounded-2xl text-brand-primary"><svg class="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg></div>`;
                }
              }} />
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">{service.title}</h1>
            <p className="text-xl text-slate-300 max-w-3xl">{service.description}</p>
          </div>

          {/* Functional Strategy Card */}
          <div className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-3xl border border-gray-800 shadow-lg relative overflow-hidden">
            <div className="absolute top-0 right-0 p-6 opacity-5">
              <Settings className="w-32 h-32" />
            </div>
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                <span className="w-2 h-8 bg-brand-primary rounded-full mr-3"></span>
                Functional Strategy
              </h3>
              <p className="text-slate-300 leading-relaxed text-lg">
                {service.functionalStrategy || "Our functional strategy aligns your business objectives with user needs, creating seamless workflows that drive efficiency and engagement."}
              </p>
            </div>
          </div>

          {/* Technical Strategy Card */}
          <div className="bg-brand-dark p-8 rounded-3xl border border-brand-dark shadow-lg relative overflow-hidden text-white lg:col-span-2">
            <div className="absolute top-0 right-0 p-6 opacity-10">
              <Cpu className="w-48 h-48" />
            </div>
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                <span className="w-2 h-8 bg-brand-primary rounded-full mr-3"></span>
                Technical Strategy
              </h3>
              <div className="prose prose-lg prose-invert text-slate-300 leading-relaxed">
                <p>{service.technicalStrategy || "We employ cutting-edge technologies and scalable architectures to build robust, secure, and high-performance solutions tailored to your specific requirements."}</p>
              </div>

              <div className="mt-8 pt-8 border-t border-slate-700 grid grid-cols-2 gap-4">
                <div>
                  <span className="block text-xs uppercase tracking-wider text-brand-primary mb-1">Architecture</span>
                  <span className="font-semibold">Scalable & Secure</span>
                </div>
                <div>
                  <span className="block text-xs uppercase tracking-wider text-brand-primary mb-1">Performance</span>
                  <span className="font-semibold">Optimized</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default ServiceDetail;