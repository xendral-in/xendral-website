import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Code, Smartphone, PenTool, BarChart3, Megaphone, Terminal, Cpu, ShieldCheck, ArrowRight } from 'lucide-react';
import { ServiceType } from './ServiceDetail';

const services: ServiceType[] = [
  {
    icon: <Code className="h-6 w-6" />,
    title: 'Website Development',
    description: 'High-performance, responsive websites tailored to your brand identity.',
    functionalStrategy: 'We focus on user journey mapping to ensure your website converts visitors into customers. By analyzing user behavior, we structure content to guide users seamlessly towards your business goals.',
    technicalStrategy: 'Utilizing modern frameworks like React and Next.js, we build Single Page Applications (SPAs) that load instantly. We implement Server-Side Rendering (SSR) for optimal SEO and leverage CDNs for global content delivery.',
  },
  {
    icon: <Smartphone className="h-6 w-6" />,
    title: 'App Development',
    description: 'Native and cross-platform mobile applications designed for seamless user experiences.',
    functionalStrategy: 'We prioritize "thumb-friendly" design zones and intuitive navigation patterns. Our functional approach ensures that key actions are never more than two taps away, increasing user retention.',
    technicalStrategy: 'We use React Native and Flutter to maintain a single codebase for both iOS and Android, reducing maintenance costs. Our apps are integrated with cloud-native backends for real-time data synchronization.',
  },
  {
    icon: <PenTool className="h-6 w-6" />,
    title: 'UI/UX Design',
    description: 'User-centric interfaces that are intuitive and visually stunning.',
    functionalStrategy: 'Our design process starts with empathy. We create detailed user personas and wireframes to validate flows before a single pixel is polished, ensuring the product solves real problems.',
    technicalStrategy: 'We deliver design systems using atomic design principles, ensuring consistency across your digital ecosystem. Our handoffs include fully interactive prototypes and CSS/tokens for developers.',
  },
  {
    icon: <BarChart3 className="h-6 w-6" />,
    title: 'Data Analysis',
    description: 'Transform raw data into actionable insights for informed decisions.',
    functionalStrategy: 'We turn data into narratives. Our dashboards are designed to answer specific business questions at a glance, allowing stakeholders to identify trends and anomalies without digging through spreadsheets.',
    technicalStrategy: 'We implement ETL pipelines using Python and SQL to aggregate data from disparate sources. We use tools like PowerBI and Tableau, backed by cloud data warehouses like Snowflake.',
  },
  {
    icon: <Megaphone className="h-6 w-6" />,
    title: 'Digital Marketing',
    description: 'Strategic marketing campaigns to amplify your reach and presence.',
    functionalStrategy: 'We use an omnichannel approach, ensuring your brand voice is consistent across Social, Email, and Search. We focus on high-intent targeting to maximize ROI.',
    technicalStrategy: 'We implement advanced tracking pixels and conversion API integrations to measure attribution accurately. Our campaigns use programmatic bidding algorithms to optimize ad spend in real-time.',
  },
  {
    icon: <Terminal className="h-6 w-6" />,
    title: 'Custom Software',
    description: 'Bespoke software solutions solving specific business challenges.',
    functionalStrategy: 'We map your existing workflows to identify bottlenecks. Our software is designed to automate these friction points, freeing up your team to focus on high-value tasks.',
    technicalStrategy: 'We build microservices architectures that allow for independent scaling of features. Our CI/CD pipelines ensure that updates are deployed rapidly and reliably with automated testing.',
  },
  {
    icon: <Cpu className="h-6 w-6" />,
    title: 'AI-Driven Automation',
    description: 'Leverage AI to automate repetitive tasks and enhance productivity.',
    functionalStrategy: 'We identify high-volume, repetitive tasks suitable for automation. Our goal is human-AI collaboration, where AI handles the rote work and humans handle the strategy.',
    technicalStrategy: 'We deploy Large Language Models (LLMs) and custom machine learning models tailored to your data. We use RPA (Robotic Process Automation) bots to bridge legacy systems without APIs.',
  },
  {
    icon: <ShieldCheck className="h-6 w-6" />,
    title: 'Cyber Security',
    description: 'Protect your digital assets with comprehensive security solutions.',
    functionalStrategy: 'We adopt a "Zero Trust" policy. We educate your staff on social engineering while implementing strict access controls, ensuring that security is a culture, not just a tool.',
    technicalStrategy: 'We perform regular penetration testing and vulnerability assessments. We implement end-to-end encryption, multi-factor authentication (MFA), and real-time threat monitoring systems (SIEM).',
  },
];

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

interface ServicesProps {
  onServiceClick: (service: ServiceType) => void;
}

const Services: React.FC<ServicesProps> = ({ onServiceClick }) => {
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
                onClick={() => onServiceClick(service)}
                className="group relative flex-shrink-0 w-[85vw] md:w-[450px] aspect-video snap-center rounded-3xl shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer overflow-hidden bg-gray-900 border-2 border-gray-800 hover:border-brand-primary"
              >
                <div className="relative z-10 flex flex-col h-full p-6">
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