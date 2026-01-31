import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Code, Smartphone, PenTool, BarChart3, Megaphone, Terminal, Cpu, ShieldCheck, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { services, ServiceType } from '../data/services';

const gradients = [
  'from-blue-500/10 to-indigo-500/10',
  'from-purple-500/10 to-pink-500/10',
  'from-green-500/10 to-teal-500/10',
  'from-orange-500/10 to-red-500/10',
  'from-cyan-500/10 to-blue-500/10',
  'from-violet-500/10 to-purple-500/10',
  'from-emerald-500/10 to-green-500/10',
  'from-rose-500/10 to-pink-500/10',
];

const Services: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        const progress = (scrollLeft / (scrollWidth - clientWidth)) * 100;
        setScrollProgress(progress || 0);
      }
    };

    const scrollElement = scrollRef.current;
    if (scrollElement) {
      scrollElement.addEventListener('scroll', handleScroll);
      return () => scrollElement.removeEventListener('scroll', handleScroll);
    }
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 470; // Card width + gap
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="services" className="py-24 bg-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-brand-primary font-bold tracking-wide uppercase text-sm mb-2">Our Expertise</h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-white mb-4">Services Available</h3>
          <p className="max-w-2xl mx-auto text-slate-400">
            Swipe to explore our comprehensive digital solutions. Click any card to view detailed strategies.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative w-full">
          {/* Desktop Navigation Arrows */}
          <button
            onClick={() => scroll('left')}
            className="hidden md:block absolute left-0 top-[140px] -translate-y-1/2 z-20 cursor-pointer text-brand-primary/50 hover:text-brand-primary transition-colors duration-300 -ml-4"
            aria-label="Scroll left"
          >
            <ChevronLeft className="h-8 w-8 animate-bounce" />
          </button>
          <button
            onClick={() => scroll('right')}
            className="hidden md:block absolute right-0 top-[140px] -translate-y-1/2 z-20 cursor-pointer text-brand-primary/50 hover:text-brand-primary transition-colors duration-300 -mr-4"
            aria-label="Scroll right"
          >
            <ChevronRight className="h-8 w-8 animate-bounce" />
          </button>

          <div
            ref={scrollRef}
            className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-12 px-4 scrollbar-hide -mx-4 md:mx-0"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative flex-shrink-0 w-[85vw] md:w-[450px] h-[280px] snap-center rounded-3xl shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer overflow-hidden bg-gray-900 border-2 border-gray-800 hover:border-brand-primary"
              >
                <Link to={`/${service.slug}`} className="block h-full w-full" aria-label={`View details for ${service.title}`}>
                  <div className="flex flex-col h-full p-6">
                    {/* Icon at top */}
                    <div className="mb-4">
                      <div className="inline-flex items-center justify-center p-4 bg-transparent border-2 border-white/20 rounded-2xl text-white shadow-lg group-hover:scale-110 group-hover:border-brand-primary transition-all duration-300">
                        {React.cloneElement(service.icon as React.ReactElement, { className: 'h-8 w-8', strokeWidth: 1.5 })}
                      </div>
                    </div>

                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <h4 className="text-2xl font-bold text-white mb-2">
                          {service.title}
                        </h4>
                        <p className="text-slate-400 text-sm leading-relaxed line-clamp-2">
                          {service.description}
                        </p>
                      </div>

                      <div className="pt-3 mt-3 border-t border-gray-700 flex justify-between items-center">
                        <span className="text-xs font-semibold text-brand-primary uppercase tracking-wider bg-gray-800 px-3 py-1.5 rounded-full shadow-sm">Tap Details</span>
                        <ArrowRight className="w-5 h-5 text-brand-primary group-hover:translate-x-1 transition-all" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Progress Bar Indicator */}
          <div className="flex justify-center gap-2 mt-4">
            <div className="w-32 h-1.5 bg-gray-800 rounded-full overflow-hidden">
              <div
                className="h-full bg-brand-primary rounded-full transition-all duration-300"
                style={{ width: `${Math.min(scrollProgress + 12.5, 100)}%` }}
              ></div>
            </div>
          </div>
        </div>
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

export default Services;