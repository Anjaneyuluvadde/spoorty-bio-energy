import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';
import ScrollReveal from '@/components/ScrollReveal';
import { bioFertilizersSections } from '@/data/bioFertilizersSections';
import { 
  ArrowRight, 
  Layers
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Bio Fertilizers & Soil Nutrients | Sphoorthi Bioorganics',
  description: 'Sustainable biological agricultural inputs from Sphoorthi Bioorganics including Fermented Organic Manure (FOM/LFOM), bio-pesticides, Bhooratnaa bio-stimulants, and microbial plant nutrition.',
};

export default function BioFertilizersPage() {
  return (
    <>
      <Navbar />

      <main className="flex-grow bg-[#F8FAFC]">
        {/* Page Header */}
        <PageHeader 
          title="Bio Fertilizers"
          description="Closing the loop between renewable bioenergy and regenerative agriculture through high-nutrient Fermented Organic Manure (FOM/LFOM), bio pesticides, Bhooratnaa bio stimulants, and microbial plant nutrition."
          breadcrumbs={[
            { name: 'Home', href: '/' },
            { name: 'Bio Fertilizers' }
          ]}
        />

        {/* Section: Core Bio Fertilizers Solutions Grid */}

        {/* Section 2: Core Bio Fertilizers Solutions Grid (Two-Box Method) */}
        <section id="solutions-grid" className="py-20 md:py-28 max-w-[1440px] mx-auto px-6 md:px-12 scroll-mt-12">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-14 md:mb-18">
            <ScrollReveal>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-secondary/15 border border-secondary/30 text-dark text-xs font-semibold uppercase tracking-wider mb-3">
                <Layers className="h-3.5 w-3.5 text-secondary" />
                <span className="text-primary font-bold">Biological Soil Solutions</span>
              </div>
              <h2 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl text-dark leading-tight mb-4">
                Our Core Bio Fertilizer <span className="text-primary">Solutions Grid</span>
              </h2>
              <p className="font-sans text-base sm:text-lg text-gray-600 leading-relaxed">
                Click any agricultural solution below to explore complete technical parameters, FCO specifications, and full application deliverables on its dedicated subpage.
              </p>
            </ScrollReveal>
          </div>

          {/* Grid Container: Clean 4-Column Layout (Two-Box Method) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {bioFertilizersSections.map((section, idx) => (
              <ScrollReveal key={section.slug} delay={idx * 0.08}>
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
                        {section.badgeRight || 'Organic Input'}
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
