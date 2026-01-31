import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-black overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-brand-primary font-bold tracking-wide uppercase text-sm mb-2">Who We Are</h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-white mb-6">
            Your Friendly Digital Experts in Chennai
          </h3>

          <div className="prose prose-lg text-slate-300 mx-auto">
            <p className="mb-6">
              Hi there! We are <strong>Xendral</strong>, a passionate team of <strong>10+ digital innovators</strong> based right here in <strong>Anna Nagar, Chennai</strong>. We aren't just a company; we are a group of creative minds, coding wizards, and data enthusiasts spanning across Website Development, App Creation, UI/UX Design, and Digital Marketing.
            </p>
            <p className="mb-6">
              Whether you are a startup looking for your first big break or an established business aiming to scale, our expert team has got you covered. We combine local understanding with global standards to deliver solutions that don't just work—they wow.
            </p>
            <p>
              From crafting pixel-perfect designs to engineering robust software, we do it all under one roof. Let's build something amazing together in the heart of Chennai!
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto text-left">
            {[
              'Based in Anna Nagar, Chennai',
              'Team of 10+ Experts',
              '360° Digital Solutions',
              'Client-Centric Approach'
            ].map((item, index) => (
              <div key={index} className="flex items-center text-white p-4 bg-gray-900 rounded-lg border border-gray-800 hover:border-brand-primary transition-colors">
                <CheckCircle2 className="h-5 w-5 text-brand-primary mr-3 flex-shrink-0" />
                <span className="font-medium">{item}</span>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default About;