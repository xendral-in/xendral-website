import React from 'react';
import { Code, Smartphone, PenTool, BarChart3, Megaphone, Terminal, Cpu, ShieldCheck, Palette, Film } from 'lucide-react';

export interface ServiceType {
    icon: React.ReactNode;
    title: string;
    description: string;
    image?: string;
    functionalStrategy?: string;
    technicalStrategy?: string;
    slug: string; // Add slug for easier lookup
}

export const services: ServiceType[] = [
    {
        icon: <Code className="h-6 w-6" />,
        title: 'Website Development',
        slug: 'websitedevelopment',
        description: 'High-performance, responsive websites tailored to your brand identity.',
        functionalStrategy: 'We focus on user journey mapping to ensure your website converts visitors into customers. By analyzing user behavior, we structure content to guide users seamlessly towards your business goals.',
        technicalStrategy: 'Utilizing modern frameworks like React and Next.js, we build Single Page Applications (SPAs) that load instantly. We implement Server-Side Rendering (SSR) for optimal SEO and leverage CDNs for global content delivery.',
    },
    {
        icon: <Smartphone className="h-6 w-6" />,
        title: 'App Development',
        slug: 'appdevelopment',
        description: 'Native and cross-platform mobile applications designed for seamless user experiences.',
        functionalStrategy: 'We prioritize "thumb-friendly" design zones and intuitive navigation patterns. Our functional approach ensures that key actions are never more than two taps away, increasing user retention.',
        technicalStrategy: 'We use React Native and Flutter to maintain a single codebase for both iOS and Android, reducing maintenance costs. Our apps are integrated with cloud-native backends for real-time data synchronization.',
    },
    {
        icon: <PenTool className="h-6 w-6" />,
        title: 'UI/UX Design',
        slug: 'uiuxdesign',
        description: 'User-centric interfaces that are intuitive and visually stunning.',
        functionalStrategy: 'Our design process starts with empathy. We create detailed user personas and wireframes to validate flows before a single pixel is polished, ensuring the product solves real problems.',
        technicalStrategy: 'We deliver design systems using atomic design principles, ensuring consistency across your digital ecosystem. Our handoffs include fully interactive prototypes and CSS/tokens for developers.',
    },
    {
        icon: <BarChart3 className="h-6 w-6" />,
        title: 'Data Analysis',
        slug: 'dataanalysis',
        description: 'Transform raw data into actionable insights for informed decisions.',
        functionalStrategy: 'We turn data into narratives. Our dashboards are designed to answer specific business questions at a glance, allowing stakeholders to identify trends and anomalies without digging through spreadsheets.',
        technicalStrategy: 'We implement ETL pipelines using Python and SQL to aggregate data from disparate sources. We use tools like PowerBI and Tableau, backed by cloud data warehouses like Snowflake.',
    },
    {
        icon: <Megaphone className="h-6 w-6" />,
        title: 'Digital Marketing',
        slug: 'digitalmarketing',
        description: 'Strategic marketing campaigns to amplify your reach and presence.',
        functionalStrategy: 'We use an omnichannel approach, ensuring your brand voice is consistent across Social, Email, and Search. We focus on high-intent targeting to maximize ROI.',
        technicalStrategy: 'We implement advanced tracking pixels and conversion API integrations to measure attribution accurately. Our campaigns use programmatic bidding algorithms to optimize ad spend in real-time.',
    },
    {
        icon: <Terminal className="h-6 w-6" />,
        title: 'Custom Software',
        slug: 'customsoftware',
        description: 'Bespoke software solutions solving specific business challenges.',
        functionalStrategy: 'We map your existing workflows to identify bottlenecks. Our software is designed to automate these friction points, freeing up your team to focus on high-value tasks.',
        technicalStrategy: 'We build microservices architectures that allow for independent scaling of features. Our CI/CD pipelines ensure that updates are deployed rapidly and reliably with automated testing.',
    },
    {
        icon: <Cpu className="h-6 w-6" />,
        title: 'AI-Driven Automation',
        slug: 'ai-drivenautomation',
        description: 'Leverage AI to automate repetitive tasks and enhance productivity.',
        functionalStrategy: 'We identify high-volume, repetitive tasks suitable for automation. Our goal is human-AI collaboration, where AI handles the rote work and humans handle the strategy.',
        technicalStrategy: 'We deploy Large Language Models (LLMs) and custom machine learning models tailored to your data. We use RPA (Robotic Process Automation) bots to bridge legacy systems without APIs.',
    },
    {
        icon: <ShieldCheck className="h-6 w-6" />,
        title: 'Cyber Security',
        slug: 'cybersecurity',
        description: 'Protect your digital assets with comprehensive security solutions.',
        functionalStrategy: 'We adopt a "Zero Trust" policy. We educate your staff on social engineering while implementing strict access controls, ensuring that security is a culture, not just a tool.',
        technicalStrategy: 'We perform regular penetration testing and vulnerability assessments. We implement end-to-end encryption, multi-factor authentication (MFA), and real-time threat monitoring systems (SIEM).',
    },
    {
        icon: <Palette className="h-6 w-6" />,
        title: 'Graphic Designing',
        slug: 'graphicdesigning',
        description: 'Creative visual solutions that communicate your brand message effectively.',
        functionalStrategy: 'We focus on visual storytelling. Our designs are crafted to evoke specific emotional responses that align with your brand identity, ensuring instant recognition and recall.',
        technicalStrategy: 'We utilize industry-standard tools like Adobe Creative Cloud and Figma to create vector-scalable assets. We deliver comprehensive style guides and asset libraries optimized for both web and print media.',
    },
    {
        icon: <Film className="h-6 w-6" />,
        title: 'Video Editing',
        slug: 'videoediting',
        description: 'Professional video editing for short-form, long-form, and promotional content.',
        functionalStrategy: 'We prioritize pacing and narrative flow. Whether it\'s a 15-second reel or a documentary, we structure the edit to maximize viewer retention and engagement throughout the video.',
        technicalStrategy: 'We use advanced NLEs like DaVinci Resolve and Premiere Pro. We implement color grading, sound design/mixing, and motion graphics to produce broadcast-quality deliverables for all platforms.',
    },
];
