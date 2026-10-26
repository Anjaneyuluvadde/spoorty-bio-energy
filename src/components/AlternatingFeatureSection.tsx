'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Sparkles } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';
import ThreeDTilt from '@/components/ThreeDTilt';
import SectionHighlights from '@/components/SectionHighlights';
import { FeaturedSectionData } from '@/data/featuredSections';

interface AlternatingFeatureSectionProps {
  section: FeaturedSectionData;
  index: number;
}

export default function AlternatingFeatureSection({ section, index }: AlternatingFeatureSectionProps) {
  const isImageLeft = section.imagePosition === 'left';
  const isEven = index % 2 === 0;

  return (
    <section
      id={section.id}
      className={`py-20 md:py-28 relative overflow-hidden transition-colors ${
        isEven ? 'bg-white' : 'bg-[#F8FAFC]'
      }`}
    >
      {/* Subtle ambient blur glow in background */}
      <div
        className={`absolute top-1/2 -translate-y-1/2 w-96 h-96 rounded-full blur-[120px] pointer-events-none opacity-40 ${
          isImageLeft
            ? 'left-0 bg-primary/10'
            : 'right-0 bg-secondary/10'
        }`}
      />

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* IMAGE COLUMN */}
          <div
            className={`lg:col-span-6 ${
              isImageLeft ? 'order-1' : 'order-1 lg:order-2'
            }`}
          >
            <ScrollReveal yOffset={25} duration={0.6}>
              <ThreeDTilt maxRotate={5} className="rounded-3xl">
                <div className="relative rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl border border-gray-100 group transition-all duration-500 bg-white">
                  
                  {/* Image container */}
                  <div className="relative h-[340px] sm:h-[420px] lg:h-[460px] w-full overflow-hidden">
                    <Image
                      src={section.imageSrc}
                      alt={section.imageAlt}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                      priority={index < 2}
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    
                    {/* Dark gradient bottom vignette */}
                    <div className="absolute inset-0 bg-gradient-to-t from-dark/75 via-dark/15 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-300" />
                    
                    {/* Badge tag top left */}
                    {section.badgeTag && (
                      <div className="absolute top-5 left-5 inline-flex items-center gap-1.5 py-1.5 px-3.5 rounded-full bg-white/95 backdrop-blur-md text-primary text-xs font-semibold shadow-md border border-white/40">
                        <span className="h-1.5 w-1.5 rounded-full bg-secondary animate-pulse" />
                        <span>{section.badgeTag}</span>
                      </div>
                    )}

                    {/* Stat callout bottom right */}
                    {section.statCallout && (
                      <div className="absolute bottom-5 right-5 p-3.5 sm:p-4 rounded-2xl bg-dark/80 backdrop-blur-md text-white border border-white/10 shadow-lg text-right max-w-[200px]">
                        <span className="font-heading font-extrabold text-xl sm:text-2xl text-secondary block leading-tight">
                          {section.statCallout.value}
                        </span>
                        <span className="font-sans text-[11px] text-gray-300 font-medium leading-tight block mt-0.5">
                          {section.statCallout.label}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </ThreeDTilt>
            </ScrollReveal>
          </div>

          {/* CONTENT COLUMN */}
          <div
            className={`lg:col-span-6 flex flex-col items-start ${
              isImageLeft ? 'order-2' : 'order-2 lg:order-1'
            }`}
          >
            <ScrollReveal yOffset={20} duration={0.6} delay={0.1}>
              
              {/* Eyebrow Label */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider mb-4">
                <Sparkles className="h-3.5 w-3.5 text-secondary" />
                <span>{section.eyebrow}</span>
              </div>

              {/* Main Section Heading */}
              <h2 className="font-heading font-extrabold text-2xl sm:text-3xl md:text-4xl text-dark leading-tight tracking-tight mb-5">
                {section.heading}
              </h2>

              {/* Concise Description (40-70 words) */}
              <p className="font-sans text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed mb-6">
                {section.description}
              </p>

              {/* Three Short Highlights */}
              <div className="w-full mb-8">
                <SectionHighlights highlights={section.highlights} />
              </div>

              {/* Call-to-Action Navigation Button */}
              <Link
                href={section.ctaHref}
                id={`cta-btn-${section.id}`}
                className="group inline-flex items-center justify-center gap-2.5 bg-primary hover:bg-primary/95 text-white font-sans text-sm font-semibold py-3.5 px-7 rounded-xl transition-all duration-200 shadow-md shadow-primary/20 hover:shadow-xl hover:scale-[1.02] active:scale-95"
              >
                <span>{section.ctaText}</span>
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

            </ScrollReveal>
          </div>

        </div>
      </div>
    </section>
  );
}
