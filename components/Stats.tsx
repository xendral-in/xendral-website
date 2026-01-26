import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

const stats = [
  { label: 'Projects Done', value: '500+' },
  { label: 'Projects Ongoing', value: '45+' },
  { label: 'Team Members', value: '120+' },
];

const partners = [
  'CloudNine', 'DataFlow', 'SecureLink', 'AI-Vision', 'WebWizards', 'AppMasters',
  'CyberGuard', 'SoftSolution'
];

const Stats: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section id="stats" className="py-8 bg-black border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Toggle Button - Old Arrow Style */}
        <div className="flex justify-center mb-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="cursor-pointer"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            <div className="text-brand-primary/50 hover:text-brand-primary transition-colors duration-300">
              {isExpanded ? (
                <ChevronUp className="h-8 w-8" />
              ) : (
                <ChevronDown className="h-8 w-8 animate-bounce" />
              )}
            </div>
          </motion.div>
        </div>

        {/* Collapsible Content */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4, ease: 'easeInOut' }}
              className="overflow-hidden"
            >
              {/* Stats Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 text-center">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="p-6 rounded-2xl bg-gray-900 hover:bg-gray-800 transition-colors duration-300"
                  >
                    <div className="text-4xl md:text-5xl font-extrabold text-brand-primary mb-2">
                      {stat.value}
                    </div>
                    <div className="text-sm md:text-base font-semibold text-white uppercase tracking-wide">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Happy Business Partners */}
              <div className="text-center mb-8">
                <h4 className="text-white font-bold text-lg mb-6">Trusted by Happy Business Partners</h4>
              </div>

              {/* Horizontal Scroll Thumb Grid Style */}
              <div className="relative w-full overflow-hidden">
                {/* Gradient Masks for smooth fade edges */}
                <div className="absolute top-0 left-0 w-16 h-full bg-gradient-to-r from-black to-transparent z-10"></div>
                <div className="absolute top-0 right-0 w-16 h-full bg-gradient-to-l from-black to-transparent z-10"></div>

                <div className="flex overflow-x-auto gap-4 pb-4 px-4 scrollbar-hide snap-x">
                  {partners.map((partner, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 + (index * 0.05) }}
                      className="flex-shrink-0 w-32 h-20 bg-gray-900 border border-gray-700 rounded-lg shadow-sm flex items-center justify-center snap-start hover:border-brand-primary hover:shadow-md transition-all duration-300"
                    >
                      <span className="font-bold text-slate-400 text-sm hover:text-brand-primary transition-colors">{partner}</span>
                    </motion.div>
                  ))}
                  {/* Duplicate for visual length if needed, or simply let it scroll */}
                  {partners.map((partner, index) => (
                    <div
                      key={`dup-${index}`}
                      className="flex-shrink-0 w-32 h-20 bg-gray-900 border border-gray-700 rounded-lg shadow-sm flex items-center justify-center snap-start hover:border-brand-primary hover:shadow-md transition-all duration-300"
                    >
                      <span className="font-bold text-slate-400 text-sm hover:text-brand-primary transition-colors">{partner}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
            display: none;
        }
        .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default Stats;