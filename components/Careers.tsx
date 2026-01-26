import React from 'react';
import { motion } from 'framer-motion';
import { Users, Rocket, Heart } from 'lucide-react';

const Careers: React.FC = () => {
  return (
    <motion.section 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }}
      className="py-32 bg-white min-h-screen"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-brand-dark mb-8">Join Our Team</h1>
        
        <div className="bg-brand-gray/30 rounded-3xl p-12 mb-12">
            <div className="flex justify-center mb-6">
                <Users className="w-16 h-16 text-brand-primary" />
            </div>
            <h2 className="text-2xl font-bold text-brand-dark mb-4">We Are Team Xendral</h2>
            <p className="text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
                We are a team of passionate technologists, creative thinkers, and problem solvers dedicated to redefining the digital landscape. At Xendral, we believe in fostering a culture of innovation, collaboration, and continuous learning.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            <div className="p-6 border border-slate-100 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <Rocket className="w-8 h-8 text-brand-primary mb-4" />
                <h3 className="font-bold text-xl mb-2">Innovation First</h3>
                <p className="text-slate-500">We push boundaries and explore new technologies to deliver cutting-edge solutions.</p>
            </div>
            <div className="p-6 border border-slate-100 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <Heart className="w-8 h-8 text-brand-primary mb-4" />
                <h3 className="font-bold text-xl mb-2">People Centric</h3>
                <p className="text-slate-500">We value our people and their growth, creating an environment where everyone thrives.</p>
            </div>
        </div>

        <div className="mt-12">
            <p className="text-slate-500 mb-4">Currently, we don't have open positions listed here, but we are always looking for talent.</p>
            <a href="mailto:xendral.in@gmail.com" className="inline-block px-6 py-3 bg-brand-primary text-white font-bold rounded-lg hover:bg-brand-dark transition-colors">
                Send us your CV
            </a>
        </div>
      </div>
    </motion.section>
  );
};

export default Careers;