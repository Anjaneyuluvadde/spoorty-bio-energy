'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';
import ScrollReveal from '@/components/ScrollReveal';
import { 
  Factory, Leaf, Layers, Sliders, Wrench, SearchCode, 
  ArrowRight, CheckCircle2 
} from 'lucide-react';

const services = [
  {
    icon: Factory,
    image: '/images/hero.jpg',
    title: 'Biogas Plant Engineering',
    desc: 'Custom biogas plant design and engineering for various industries, agriculture, and municipal corporations.',
    features: ['Process & Flow Modeling', 'Detailed Structural Design', 'Piping & Instrument Diagrams', 'Digester Sizing & Mixing Optimization'],
    tags: ['Maximum Gas Yield', 'Low Operational Costs']
  },
  {
    icon: Leaf,
    image: '/images/biomethane.jpg',
    title: 'Biomethane Upgrading Systems',
    desc: 'Advanced upgrading systems to purify biogas into clean, high-quality biomethane suitable for grid injection or vehicle fuel.',
    features: ['Membrane Separation Technology', 'H2S & CO2 Scrubbing Systems', 'Gas Compression & Drying', 'Grid Injection Stations'],
    tags: ['99% Pure Methane', 'Zero Carbon Emissions']
  },
  {
    icon: Layers,
    image: '/images/about.jpg',
    title: 'EPC Solutions',
    desc: 'Complete Engineering, Procurement, and Construction services from initial groundwork design to full commissioning.',
    features: ['Turnkey Project Management', 'Technology Selection & Sourcing', 'Civil & Mechanical Construction', 'Quality Control & Safety Audits'],
    tags: ['On-time Delivery', 'Single Point Responsibility']
  },
  {
    icon: Sliders,
    image: '/images/engineer.jpg', // we can reuse engineer image here
    title: 'Plant Automation & Control',
    desc: 'Smart automation and monitoring systems to ensure safe, stable, and highly efficient plant operation.',
    features: ['SCADA & PLC System Design', 'Remote Monitoring & IoT Integration', 'Gas Leakage Detection Systems', 'Automated Feedstock Dosing Control'],
    tags: ['24/7 Remote Monitoring', 'Optimized Operations']
  },
  {
    icon: Wrench,
    image: '/images/engineer.jpg',
    title: 'Operation & Maintenance',
    desc: 'Reliable, comprehensive operations and preventative maintenance services to guarantee long-term plant performance.',
    features: ['Routine Audits & Inspections', 'Biological Process Support', 'Spare Parts Logistics', 'Emergency Troubleshooting'],
    tags: ['98% Plant Uptime', 'Extended Lifecycle']
  },
  {
    icon: SearchCode,
    image: '/images/biomethane.jpg',
    title: 'Feedstock Assessment & Analysis',
    desc: 'Scientific evaluation and laboratory analysis of organic materials to optimize digestion stability and maximize methane output.',
    features: ['Anaerobic Digestion Testing', 'Chemical Oxygen Demand (COD) Analysis', 'Trace Element Optimization', 'Co-digestion Synergy Modeling'],
    tags: ['Scientific Feedstock Mix', 'Enhanced Gas Production']
  }
];

export default function ServicesPage() {
  return (
    <>
      <Navbar />

      <main className="flex-grow bg-[#F8FAFC]">
        {/* Page Header */}
        <PageHeader 
          title="Our Services"
          description="End-to-end engineering, technology, and support solutions for biogas and biomethane projects."
          breadcrumbs={[
            { name: 'Home', href: '/' },
            { name: 'Services' }
          ]}
        />

        {/* Services Grid Section */}
        <section className="py-24 max-w-[1440px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {services.map((service, idx) => (
              <ScrollReveal key={idx} delay={idx * 0.05}>
                <div className="bg-white rounded-3xl overflow-hidden border border-gray-100 hover:border-primary/20 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full group">
                  {/* Top Image Banner */}
                  <div className="relative h-64 overflow-hidden shrink-0">
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
                    />
                    {/* Visual Overlay */}
                    <div className="absolute inset-0 bg-dark/25 group-hover:bg-dark/15 transition-all duration-300" />
                    
                    {/* Floating Service Icon */}
                    <div className="absolute bottom-6 left-6 flex items-center justify-center h-14 w-14 rounded-2xl bg-white border border-gray-100 text-primary shadow-lg z-10">
                      <service.icon className="h-6 w-6" />
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-8 flex-grow flex flex-col justify-between">
                    <div>
                      {/* Title */}
                      <h3 className="font-heading font-extrabold text-2xl text-dark mb-4 group-hover:text-primary transition-colors">
                        {service.title}
                      </h3>
                      
                      {/* Description */}
                      <p className="font-sans text-sm text-gray-500 leading-relaxed mb-6">
                        {service.desc}
                      </p>

                      {/* Scopes Checklist */}
                      <div className="border-t border-gray-100 pt-6 mb-8">
                        <h4 className="font-heading font-bold text-xs uppercase tracking-wider text-gray-400 mb-4">
                          Detailed Project Scopes
                        </h4>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-gray-600 font-sans">
                          {service.features.map((feature, fIdx) => (
                            <li key={fIdx} className="flex items-center gap-2">
                              <CheckCircle2 className="h-4 w-4 text-secondary shrink-0" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Footer Tags & CTA Link */}
                    <div className="border-t border-gray-100 pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                      {/* Tags */}
                      <div className="flex flex-wrap gap-2">
                        {service.tags.map((tag, tIdx) => (
                          <span 
                            key={tIdx} 
                            className="inline-flex text-xs font-semibold bg-[#F8FAFC] border border-gray-200 text-primary py-1 px-3 rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Contact Button link */}
                      <a 
                        href="mailto:info@spoortybioenergy.com" 
                        className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:text-secondary transition-colors shrink-0"
                      >
                        <span>Request Details</span>
                        <ArrowRight className="h-4 w-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
