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
            Strategic Partners in Your Digital Evolution
          </h3>

          <div className="prose prose-lg text-slate-300 mx-auto">
            <p className="mb-6">
              At <strong>Xendral</strong>, we don't just fix computers; we drive digital transformation. In an era where technology dictates market leadership, your IT infrastructure is not just a utility—it is your competitive advantage.
            </p>
            <p className="mb-6">
              Our team of elite engineers, data scientists, and security analysts work in synergy to deliver enterprise-grade solutions tailored for agile startups and growing scale-ups. We believe in code that is clean, architecture that is resilient, and strategies that are future-proof.
            </p>
            <p>
              Whether you need to overhaul your legacy systems, migrate to a serverless cloud environment, or fortify your network against next-gen cyber threats, Xendral is the architect of your digital fortress.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto text-left">
            {[
              'Agile Methodology',
              '24/7 Proactive Monitoring',
              'Enterprise-Grade Security',
              'Scalable Architecture'
            ].map((item, index) => (
              <div key={index} className="flex items-center text-white p-4 bg-gray-900 rounded-lg">
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