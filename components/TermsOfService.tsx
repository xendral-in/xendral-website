import React from 'react';
import { motion } from 'framer-motion';

const TermsOfService: React.FC = () => {
  return (
    <motion.section 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }}
      className="py-32 bg-white min-h-screen"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-extrabold text-brand-dark mb-8">Terms of Service</h1>
        <p className="text-slate-500 mb-8">Last updated: {new Date().toLocaleDateString()}</p>
        
        <div className="prose prose-lg text-slate-600 max-w-none">
          <p className="mb-6">
            These Terms of Service ("Terms") govern your access to and use of the Xendral website and services. By accessing or using our services, you agree to be bound by these Terms.
          </p>

          <h3 className="text-2xl font-bold text-brand-dark mt-8 mb-4">1. Use of Services</h3>
          <p className="mb-4">
            You agree to use our services only for lawful purposes and in accordance with these Terms. You are responsible for ensuring that your use of the services does not violate any applicable laws or regulations.
          </p>

          <h3 className="text-2xl font-bold text-brand-dark mt-8 mb-4">2. Intellectual Property</h3>
          <p className="mb-4">
            The content, features, and functionality of our services, including but not limited to text, graphics, logos, and software, are the exclusive property of Xendral and are protected by international copyright, trademark, and other intellectual property laws.
          </p>

          <h3 className="text-2xl font-bold text-brand-dark mt-8 mb-4">3. User Contributions</h3>
          <p className="mb-6">
            The Site may contain message boards, chat rooms, personal web pages or profiles, forums, bulletin boards, and other interactive features that allow users to post, submit, publish, display, or transmit to other users or other persons content or materials on or through the Site.
          </p>

          <h3 className="text-2xl font-bold text-brand-dark mt-8 mb-4">4. Limitation of Liability</h3>
          <p className="mb-6">
            In no event will Xendral, its affiliates, or their licensors, service providers, employees, agents, officers, or directors be liable for damages of any kind, under any legal theory, arising out of or in connection with your use, or inability to use, the website, any websites linked to it, any content on the website or such other websites, or any services or items obtained through the website.
          </p>

          <h3 className="text-2xl font-bold text-brand-dark mt-8 mb-4">5. Disclaimer of Warranties</h3>
          <p className="mb-6">
            Your use of the website, its content, and any services or items obtained through the website is at your own risk. The website, its content, and any services or items obtained through the website are provided on an "as is" and "as available" basis, without any warranties of any kind, either express or implied.
          </p>

          <h3 className="text-2xl font-bold text-brand-dark mt-8 mb-4">6. Changes to Terms</h3>
          <p className="mb-6">
            We reserve the right to withdraw or amend this website, and any service or material we provide on the website, in our sole discretion without notice. We will not be liable if for any reason all or any part of the website is unavailable at any time or for any period.
          </p>

          <h3 className="text-2xl font-bold text-brand-dark mt-8 mb-4">7. Contact Us</h3>
          <p className="mb-6">
            If you have questions about these Terms, please contact us at:
            <br /><br />
            <strong>Email:</strong> <a href="mailto:xendral.in@gmail.com" className="text-brand-primary hover:underline">xendral.in@gmail.com</a>
          </p>
        </div>
      </div>
    </motion.section>
  );
};

export default TermsOfService;