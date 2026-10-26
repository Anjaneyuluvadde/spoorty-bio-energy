'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';
import ScrollReveal from '@/components/ScrollReveal';
import { 
  Factory, Leaf, Layers, Sliders, Wrench, Flame, 
  ArrowRight, CheckCircle2 
} from 'lucide-react';

const solutions = [
  {
    icon: Factory,
    image: '/images/hero.jpg',
    title: 'Biogas Plant Design',
    desc: 'Engineering, construction, and commissioning of high-performance industrial and agricultural biogas plants.',
    features: ['Process & Flow Modeling', 'Detailed Structural Design', 'Digester Sizing & Mixing', 'Technology Selection'],
    tags: ['Waste to Energy', 'High Methane Yield']
  },
  {
    icon: Flame,
    image: '/images/biomethane.jpg',
    title: 'Bio-CNG Production',
    desc: 'Purification and compression systems to convert raw biogas into clean, high-grade transportation fuel.',
    features: ['High-Pressure Compression', 'Gas Dispensing Systems', 'Moisture Removal Systems', 'Storage Cascade Engineering'],
    tags: ['Clean Vehicle Fuel', 'Carbon Reduction']
  },
  {
    icon: Leaf,
    image: '/images/about.jpg',
    title: 'Biomethane Upgradation',
    desc: 'Advanced gas purification and scrubbing systems that upgrade biogas to natural gas grid standards.',
    features: ['Membrane Separation', 'CO2 & H2S Scrubbing', 'Grid Injection Stations', 'Gas Composition Analytics'],
    tags: ['99% Pure Methane', 'Grid Compliant']
  },
  {
    icon: Sliders,
    image: '/images/engineer.jpg',
    title: 'Organic Waste Management',
    desc: 'Efficient technologies for sorting, handling, processing, and digesting solid and liquid organic wastes.',
    features: ['Pre-treatment Sorting', 'Substrate Pasteurization', 'Feedstock Dosing Control', 'Digestate Management'],
    tags: ['Zero Landfill', 'Circular Economy']
  },
  {
    icon: Layers,
    image: '/images/hero.jpg',
    title: 'Industrial Energy Solutions',
    desc: 'Tailored renewable thermal and electrical solutions to help industrial manufacturing plants decarbonize.',
    features: ['Biogas Boiler Retrofitting', 'CHP Co-generation Setup', 'Thermal Integration', 'Carbon Credits Support'],
    tags: ['Fossil Fuel Free', 'Cost Reduction']
  },
  {
    icon: Wrench,
    image: '/images/engineer.jpg',
    title: 'Operation & Maintenance',
    desc: 'Long-term operational support, biological process management, and preventive maintenance schedules.',
    features: ['Biological Monitoring', 'Routine Safety Audits', 'Spare Parts Sourcing', 'Emergency Troubleshooting'],
    tags: ['98% Plant Uptime', 'Enhanced Plant Life']
  }
];

export default function SolutionsPage() {
  return (
    <>
      <Navbar />

      <main className="flex-grow bg-[#F8FAFC]">
        {/* Page Header */}
        <PageHeader 
          title="Our Solutions"
          description="End-to-end engineering, design, and operations for sustainable organic waste management and clean bioenergy."
          breadcrumbs={[
            { name: 'Home', href: '/' },
            { name: 'Solutions' }
          ]}
        />

        {/* Solutions Grid Section */}
        <section className="py-24 max-w-[1440px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {solutions.map((sol, idx) => (
              <ScrollReveal key={idx} delay={idx * 0.05}>
                <div className="bg-white rounded-3xl overflow-hidden border border-gray-100 hover:border-primary/20 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full group">
                  {/* Top Image Banner */}
                  <div className="relative h-64 overflow-hidden shrink-0">
                    <img 
                      src={sol.image} 
                      alt={sol.title} 
                      className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
                    />
                    {/* Visual Overlay */}
                    <div className="absolute inset-0 bg-dark/25 group-hover:bg-dark/15 transition-all duration-300" />
                    
                    {/* Floating Service Icon */}
                    <div className="absolute bottom-6 left-6 flex items-center justify-center h-14 w-14 rounded-2xl bg-white border border-gray-100 text-primary shadow-lg z-10">
                      <sol.icon className="h-6 w-6" />
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-8 flex-grow flex flex-col justify-between">
                    <div>
                      {/* Title */}
                      <h3 className="font-heading font-extrabold text-2xl text-dark mb-4 group-hover:text-primary transition-colors">
                        {sol.title}
                      </h3>
                      
                      {/* Description */}
                      <p className="font-sans text-sm text-gray-500 leading-relaxed mb-6">
                        {sol.desc}
                      </p>

                      {/* Scopes Checklist */}
                      <div className="border-t border-gray-100 pt-6 mb-8">
                        <h4 className="font-heading font-bold text-xs uppercase tracking-wider text-gray-400 mb-4">
                          Detailed Project Scopes
                        </h4>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-gray-600 font-sans">
                          {sol.features.map((feature, fIdx) => (
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
                        {sol.tags.map((tag, tIdx) => (
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
