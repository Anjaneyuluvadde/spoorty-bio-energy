'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';
import ScrollReveal from '@/components/ScrollReveal';
import ThreeDTilt from '@/components/ThreeDTilt';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Calendar, MapPin, Cpu, CheckCircle2, 
  Leaf, Gauge
} from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const categories = [
  'All', 
  'Bio Energy Projects', 
  'Bio Fertilizer Projects', 
  'Integrated Cluster Model', 
  'Engineering & Revamps', 
  'R&D Pilots'
];

interface ProjectItem {
  id: number;
  image: string;
  title: string;
  category: string;
  location: string;
  technology: string;
  capacity: string;
  achievement: string;
  year: string;
  status: string;
  statusType: 'completed' | 'ongoing' | 'proposed' | 'capability' | 'pilot';
  feedstock: string;
}

const projects: ProjectItem[] = [
  {
    id: 1,
    image: '/images/hero.jpg',
    title: '10 TPD Commercial Napier Grass CBG Plant',
    category: 'Bio Energy Projects',
    location: 'Telangana / Andhra Pradesh Corridor',
    technology: 'Continuous Stirred Tank Anaerobic Digestion with Membrane Upgrading',
    capacity: '10 Tons Per Day CBG (210 TPD Napier Grass)',
    achievement: 'Automotive-grade Bio-CNG (>98% Methane) meeting IS 16087:2016 standards with OMC off-take agreement',
    year: '2024–2025',
    status: 'Commercial Reference Project',
    statusType: 'completed',
    feedstock: 'Dedicated 3G/4G Hybrid Napier Grass'
  },
  {
    id: 2,
    image: '/images/biomethane.jpg',
    title: 'Integrated Circular Economy Biofuel Cluster',
    category: 'Integrated Cluster Model',
    location: 'Vidarbha Region, Maharashtra',
    technology: 'Multi-stream Biomass Conversion, Biogas Upgrading & Dairy Integration',
    capacity: '10–15 TPD CBG + 250 Cattle Dairy + 50 TPD FOM',
    achievement: 'Integrated zero-waste circular cluster linking farmers, dairy, energy, and organic fertilizer production',
    year: '2025–2026',
    status: 'Proposed Cluster Project',
    statusType: 'proposed',
    feedstock: 'Napier Grass, Cow Dung & Agro-Residues'
  },
  {
    id: 3,
    image: '/images/about.jpg',
    title: 'Commercial FOM & LFOM Formulation Unit',
    category: 'Bio Fertilizer Projects',
    location: 'Nagpur & Hyderabad Facilities',
    technology: 'Decanter Solid-Liquid Separation & FCO Biological Fortification',
    capacity: '50 TPD Solid FOM + 30,000 L/Day LFOM',
    achievement: 'Value-addition organic manure enriched with PSB, KSB & Azotobacter eligible for ₹1,500/ton MDA subsidy',
    year: '2024–2025',
    status: 'Ongoing Implementation',
    statusType: 'ongoing',
    feedstock: 'Digested Biomethane Slurry'
  },
  {
    id: 4,
    image: '/images/engineer.jpg',
    title: 'Turnkey Industrial Biogas Digester EPC',
    category: 'Engineering & Revamps',
    location: 'Central & Southern India',
    technology: 'Thermophilic High-Rate Digestion with H2S Biological Scrubbers',
    capacity: '100–150 TPD Organic Industrial Waste',
    achievement: 'Turnkey EPC executed with civil partners SS Builders & Sphoorthi Promoters with 30+ years civil experience',
    year: '2024',
    status: 'Technical Engineering Capability',
    statusType: 'capability',
    feedstock: 'Industrial Effluents & Agro-Processing Waste'
  },
  {
    id: 5,
    image: '/images/biomethane.jpg',
    title: 'Agri-Waste Biogas Plant Revamp & Modernization',
    category: 'Engineering & Revamps',
    location: 'Maharashtra / Karnataka Region',
    technology: 'High-Thrust Submersible Agitators & SCADA Automation Retrofit',
    capacity: '50 TPD Legacy Substrate Processing',
    achievement: 'Eliminated biological crusting, improved hydraulic mixing, and restored target 98% plant availability',
    year: '2023–2024',
    status: 'Plant Modernization Revamp',
    statusType: 'completed',
    feedstock: 'Agricultural Biomass & Slurry'
  },
  {
    id: 6,
    image: '/images/hero.jpg',
    title: 'In-House Microbial Fermentation & Culture Inoculants R&D',
    category: 'R&D Pilots',
    location: 'Sphoorthi Bioorganics R&D Lab, Hyderabad',
    technology: '1 KL & 5 KL Pilot Fermentors, Shaking Incubation & Strain Isolation',
    capacity: 'Pilot Experimental & Bulk Inoculant Facility',
    achievement: 'Isolation and stabilization of native hydrolytic and methanogenic consortia for high-yield CBG digestion',
    year: '2024–2025',
    status: 'Pilot R&D Demonstration',
    statusType: 'pilot',
    feedstock: 'Microbial Strains & Biological Substrates'
  }
];

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const gridRef = useRef<HTMLDivElement>(null);

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(p => p.category === activeCategory);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    const container = gridRef.current;
    if (!container) return;

    const ctx = gsap.context(() => {
      const cards = container.querySelectorAll('.project-card-inner');
      if (!cards || cards.length === 0) return;

      const isMobile = window.matchMedia('(max-width: 768px)').matches;
      if (isMobile) {
        gsap.set(cards, { x: 0, y: 0, rotation: 0, scale: 1, opacity: 1 });
        return;
      }

      gsap.fromTo(
        cards,
        { opacity: 0, y: 25 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.06,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: container,
            start: 'top 85%',
            once: true,
          },
        }
      );
    }, gridRef);

    return () => {
      ctx.revert();
    };
  }, [activeCategory]);

  const getStatusBadgeStyle = (type: ProjectItem['statusType']) => {
    switch (type) {
      case 'completed':
        return 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30';
      case 'ongoing':
        return 'bg-amber-500/20 text-amber-300 border-amber-500/30';
      case 'proposed':
        return 'bg-blue-500/20 text-blue-300 border-blue-500/30';
      case 'capability':
        return 'bg-purple-500/20 text-purple-300 border-purple-500/30';
      case 'pilot':
        return 'bg-cyan-500/20 text-cyan-300 border-cyan-500/30';
      default:
        return 'bg-dark/80 text-secondary border-secondary/30';
    }
  };

  return (
    <>
      <Navbar />

      <main className="flex-grow bg-[#F8FAFC]">
        {/* Page Header */}
        <PageHeader 
          title="Our Projects"
          description="Demonstrated bioenergy infrastructure, commercial Bio-CNG installations, organic fertilizer enrichment units, and the integrated circular economy cluster model."
          breadcrumbs={[
            { name: 'Home', href: '/' },
            { name: 'Our Projects' }
          ]}
        />

        {/* ==========================================
            PROJECTS SHOWCASE WITH CATEGORY FILTERS
            ========================================== */}
        <section id="showcase" className="py-20 bg-white border-b border-gray-100">
          <div className="max-w-[1440px] mx-auto px-6 md:px-12">
            
            <div className="text-center max-w-3xl mx-auto mb-10">
              <ScrollReveal>
                <span className="text-secondary font-sans text-xs font-bold uppercase tracking-widest mb-3 block">
                  Project Portfolio
                </span>
                <h2 className="font-heading font-extrabold text-3xl md:text-5xl text-dark mb-4">
                  Explore Our Projects & Installations
                </h2>
                <p className="font-sans text-gray-600 text-base md:text-lg">
                  Browse completed commercial references, ongoing installations, proposed circular clusters, and research demonstrations.
                </p>
              </ScrollReveal>
            </div>

            {/* Filter buttons */}
            <div className="flex justify-center mb-12">
              <ScrollReveal>
                <div className="flex flex-wrap justify-center gap-2 bg-[#F8FAFC] p-2 rounded-2xl border border-gray-200/60 shadow-xs">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setActiveCategory(cat)}
                      className={`font-sans text-xs md:text-sm font-semibold py-2.5 px-4 md:px-5 rounded-xl transition-all cursor-pointer ${
                        activeCategory === cat
                          ? 'bg-primary text-white shadow-md'
                          : 'text-gray-500 hover:text-primary hover:bg-white'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </ScrollReveal>
            </div>

            {/* Projects Grid */}
            <motion.div 
              ref={gridRef}
              layout 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              <AnimatePresence mode="popLayout">
                {filteredProjects.map((project) => (
                  <motion.div
                    key={project.id}
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4 }}
                    className="h-full"
                  >
                    <ThreeDTilt maxRotate={6} className="h-full rounded-3xl">
                      <div className="project-card-inner bg-[#F8FAFC] rounded-3xl overflow-hidden border border-gray-100 hover:border-primary/20 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full group glow-border-animate shine-effect">
                        
                        {/* Image container */}
                        <div className="relative h-64 overflow-hidden shrink-0">
                          <Image 
                            src={project.image} 
                            alt={project.title} 
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-dark/25 group-hover:bg-dark/10 transition-all duration-300" />
                          
                          {/* Category Badge */}
                          <div className="absolute top-4 left-4 bg-primary text-white font-sans text-xs font-bold py-1 px-3.5 rounded-full shadow-md">
                            {project.category}
                          </div>

                          {/* Status Pill with custom styling */}
                          <div className={`absolute bottom-4 left-4 backdrop-blur-md border font-sans text-[11px] font-semibold py-1 px-3 rounded-lg shadow-sm ${getStatusBadgeStyle(project.statusType)}`}>
                            {project.status}
                          </div>
                        </div>

                        {/* Card Info */}
                        <div className="p-6 md:p-8 flex-grow flex flex-col justify-between">
                          <div>
                            {/* Meta information */}
                            <div className="flex flex-wrap gap-4 text-xs text-gray-400 font-sans font-medium mb-3">
                              <span className="flex items-center gap-1">
                                <MapPin className="h-3.5 w-3.5 text-primary" />
                                {project.location}
                              </span>
                              <span className="flex items-center gap-1">
                                <Calendar className="h-3.5 w-3.5 text-primary" />
                                {project.year}
                              </span>
                            </div>

                            {/* Project Title */}
                            <h3 className="font-heading font-extrabold text-xl md:text-2xl text-dark mb-2 group-hover:text-primary transition-colors leading-snug">
                              {project.title}
                            </h3>

                            {/* Technology */}
                            <p className="font-sans text-xs font-medium text-gray-500 mb-3 flex items-start gap-1.5">
                              <Cpu className="h-3.5 w-3.5 text-secondary shrink-0 mt-0.5" />
                              <span>{project.technology}</span>
                            </p>

                            {/* Feedstock */}
                            <p className="font-sans text-xs font-medium text-primary mb-4 flex items-center gap-1.5 bg-primary/5 py-1 px-2.5 rounded-lg w-fit">
                              <Leaf className="h-3 w-3 text-secondary shrink-0" />
                              <span>Feedstock: {project.feedstock}</span>
                            </p>
                          </div>

                          {/* Stats details inside card */}
                          <div className="border-t border-gray-200/60 pt-4 mt-2 flex flex-col gap-2.5 font-sans">
                            <div className="flex justify-between items-center text-xs">
                              <span className="text-gray-400 font-medium">Capacity</span>
                              <span className="text-dark font-bold">{project.capacity}</span>
                            </div>
                            <div className="flex justify-between items-start text-xs gap-2">
                              <span className="text-gray-400 font-medium shrink-0">Impact</span>
                              <span className="text-primary font-semibold text-right leading-tight">{project.achievement}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </ThreeDTilt>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </div>
        </section>

        {/* ==========================================
            5. PROJECT CASE STUDIES & BENCHMARKS
            ========================================== */}
        <section id="case-studies" className="py-20 max-w-[1440px] mx-auto px-6 md:px-12">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20 text-primary text-xs font-semibold uppercase tracking-wider mb-3">
                <Gauge className="h-3.5 w-3.5 text-secondary" />
                <span>Verified Benchmarks</span>
              </div>
              <h2 className="font-heading font-extrabold text-3xl md:text-5xl text-dark mb-4">
                Technical Case Studies & Financial Metrics
              </h2>
              <p className="font-sans text-gray-600 text-base md:text-lg leading-relaxed">
                Empirical techno-economic parameters derived from detailed project feasibility studies for a 10 TPD commercial Napier grass CBG plant.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                metric: '21 Tons / Day',
                label: 'Fresh Napier per 1 Ton CBG',
                desc: 'Conversion ratio based on 110–120 Nm³ raw biogas yield per fresh ton and ~40% methane conversion efficiency.'
              },
              {
                metric: '~500 Acres',
                label: 'Dedicated Energy Crop Area',
                desc: 'Acreage secured through farmer agreements within a 30 km radius to ensure continuous year-round biomass availability.'
              },
              {
                metric: '₹1,500 / Ton',
                label: 'MDA Fertilizer Subsidy',
                desc: 'Market Development Assistance provided for FCO-certified Fermented Organic Manure sold to agricultural users.'
              },
              {
                metric: 'Up to ₹10 Crore',
                label: 'State Policy Subsidy Support',
                desc: 'Capital investment subsidies under progressive clean energy policies (such as NREDCAP in AP and MNRE central incentives).'
              }
            ].map((benchmark, idx) => (
              <ScrollReveal key={idx} delay={idx * 0.08}>
                <div className="p-7 rounded-3xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all h-full flex flex-col justify-between">
                  <div>
                    <span className="font-heading font-extrabold text-3xl text-primary block mb-2">
                      {benchmark.metric}
                    </span>
                    <h3 className="font-heading font-bold text-base text-dark mb-2">
                      {benchmark.label}
                    </h3>
                    <p className="font-sans text-xs text-gray-500 leading-relaxed mb-4">
                      {benchmark.desc}
                    </p>
                  </div>
                  <div className="pt-3 border-t border-gray-100 flex items-center gap-1.5 text-xs font-semibold text-secondary">
                    <CheckCircle2 className="h-4 w-4 shrink-0" />
                    <span>Project Benchmark Data</span>
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
