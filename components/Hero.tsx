import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';

const slides = [
  {
    title: "Elevating Brands Through High-Performance IT Solutions",
    subtitle: "We bridge the gap between complex technology and business success. Drive digital transformation with bespoke strategies designed for scale, security, and speed."
  },
  {
    title: "Transforming Businesses with Intelligent Automation",
    subtitle: "Harness the power of AI to streamline operations. Reduce costs and increase efficiency with our cutting-edge robotic process automation solutions."
  },
  {
    title: "Secure, Scalable, and Future-Proof Software",
    subtitle: "Build your digital fortress with our enterprise-grade security practices and modern architecture patterns designed for the long haul."
  }
];

const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleStartProject = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleExploreServices = () => {
    const el = document.getElementById('services');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-[70vh] flex items-center justify-center pt-32 pb-4 overflow-hidden bg-black">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-dark/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03]"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/50 to-black"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center flex flex-col items-center">

        {/* Badge - No longer clickable */}
        <div className="mb-8 flex flex-col items-center">
          <span className="inline-block py-1 px-3 rounded-full bg-brand-primary/20 border border-brand-primary/40 text-brand-primary text-xs font-bold tracking-wider uppercase mb-2">
            Next Generation IT Services
          </span>
        </div>

        {/* Hero Content - Always Visible */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full"
        >
          <div className="min-h-[250px] flex flex-col justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
              >
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-tight mb-6">
                  {slides[currentSlide].title.split(" ").map((word, i) => {
                    // Simple heuristic to highlight key words for the "High-Performance IT Solutions" part equivalent
                    const isHighlight = i > slides[currentSlide].title.split(" ").length - 4;
                    return (
                      <span key={i} className={isHighlight ? "text-brand-primary" : ""}>{word} </span>
                    );
                  })}
                </h1>
                <p className="mt-4 max-w-2xl mx-auto text-xl text-slate-300 mb-10 font-medium">
                  {slides[currentSlide].subtitle}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4 pb-8">
            <button
              onClick={handleStartProject}
              className="inline-flex items-center justify-center px-8 py-3.5 border border-transparent text-base font-bold rounded-lg text-black bg-gradient-to-r from-brand-primary to-brand-secondary hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-brand-primary/50 cursor-pointer"
            >
              Start Your Project
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <button
              onClick={handleExploreServices}
              className="inline-flex items-center justify-center px-8 py-3.5 border border-gray-700 text-base font-medium rounded-lg text-white hover:bg-gray-900 transition-all duration-300 cursor-pointer"
            >
              Explore Services
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;