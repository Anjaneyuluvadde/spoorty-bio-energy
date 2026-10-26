import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';
import ScrollReveal from '@/components/ScrollReveal';
import { bioEnergySections } from '@/data/bioEnergySections';
import { 
  ArrowRight, 
  Layers
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Bio Energy Solutions & Plant EPC | Sphoorthi Bioenergy',
  description: 'Pioneering industrial Bio-CNG / CBG technology, turnkey EPC plant engineering, O&M, revamps, and advanced bio-enzyme solutions for clean renewable power.',
};

export default function BioEnergyPage() {
  // Filter out the backward-compatibility alias so the grid has exactly 7 clean modules
  const primarySections = bioEnergySections.filter((s) => s.slug !== 'technology-epc');

  return (
    <>
      <Navbar />

      <main className="flex-grow bg-[#F8FAFC]">
        {/* Page Header */}
        <PageHeader 
          title="Bio Energy"
          description="Transforming biomass, agricultural residues, and organic waste into high-calorific Bio-CNG through 4-stage anaerobic digestion, turnkey EPC engineering, and biological optimization."
          breadcrumbs={[
            { name: 'Home', href: '/' },
            { name: 'Bio Energy' }
          ]}
        />

        {/* Section: Core Bio Energy Solutions Grid */}

        {/* Section 2: Core Bio Energy Solutions Grid (2:8 / 3:3:2 Two-Box Method) */}
        <section id="solutions-grid" className="py-20 md:py-28 max-w-[1440px] mx-auto px-6 md:px-12 scroll-mt-12">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-14 md:mb-18">
            <ScrollReveal>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold uppercase tracking-wider mb-3">
                <Layers className="h-3.5 w-3.5 text-secondary" />
                <span>Integrated Technology Modules</span>
              </div>
              <h2 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl text-dark leading-tight mb-4">
                Our Core Bio Energy <span className="text-primary">Solutions Grid</span>
              </h2>
              <p className="font-sans text-base sm:text-lg text-gray-600 leading-relaxed">
                Click any solution below to explore complete technical parameters, engineering specifications, and full implementation deliverables on its dedicated subpage.
              </p>
            </ScrollReveal>
          </div>

          {/* Grid Container: Clean 3:3 Grid (3 Columns x 2 Rows) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {primarySections.map((section, idx) => (
              <ScrollReveal key={section.slug} delay={idx * 0.06}>
                <Link
                  href={section.ctaHref}
                  className="group flex flex-col h-full bg-white rounded-2xl overflow-hidden border border-slate-200/90 hover:border-primary/50 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 focus:outline-none focus:ring-2 focus:ring-primary/20"
                >
                  {/* BOX 1: SIMPLE, CLEAN IMAGE BOX */}
                  <div className="relative w-full h-52 sm:h-56 bg-slate-100 overflow-hidden shrink-0">
                    <Image
                      src={section.imageSrc}
                      alt={section.imageAlt}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 350px"
                      className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark/65 via-dark/15 to-transparent opacity-85 group-hover:opacity-70 transition-opacity" />

                    {/* Top-Left Solution Number / Tag */}
                    <div className="absolute top-3.5 left-3.5 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-primary text-xs font-semibold shadow-sm border border-white/40">
                      <span className="h-1.5 w-1.5 rounded-full bg-secondary animate-pulse" />
                      <span>{section.badgeTag || `Solution ${String(idx + 1).padStart(2, '0')}`}</span>
                    </div>

                    {/* Top-Right Category Pill */}
                    <div className="absolute top-3.5 right-3.5 inline-flex items-center px-2.5 py-1 rounded-full bg-dark/70 backdrop-blur-md text-white text-[10px] font-semibold tracking-wider uppercase">
                      <span>{section.eyebrow}</span>
                    </div>

                    {/* Subtle Bottom Image Caption */}
                    <div className="absolute bottom-3 left-4 right-4">
                      <span className="text-[11px] text-white/90 font-medium truncate block drop-shadow-sm">
                        {section.badgeRight || 'Industrial Solution'}
                      </span>
                    </div>
                  </div>

                  {/* BOX 2: CLEAN CONTENT BOX (Heading + 1-2 sentence brief description) */}
                  <div className="p-6 flex flex-col flex-grow justify-between bg-white border-t border-slate-100">
                    <div>
                      {/* Heading */}
                      <h3 className="font-heading font-bold text-lg text-dark group-hover:text-primary transition-colors leading-snug line-clamp-2 mb-2.5">
                        {section.heading}
                      </h3>

                      {/* 1 or 2 sentence brief description */}
                      <p className="font-sans text-xs sm:text-sm text-gray-600 leading-relaxed line-clamp-3">
                        {section.description}
                      </p>
                    </div>

                    {/* Footer Navigation Link */}
                    <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-primary">
                      <span className="group-hover:underline">Explore Complete Details</span>
                      <span className="inline-flex items-center justify-center h-7 w-7 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-all transform group-hover:translate-x-1">
                        <ArrowRight className="h-3.5 w-3.5" />
                      </span>
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>

        </section>
      </main>

      <Footer />
    </>
  );
}
