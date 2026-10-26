'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';
import ThreeDTilt from '@/components/ThreeDTilt';
import { SubpageSection } from '@/data/bioEnergySections';

interface SubpageOverviewSectionProps {
  section: SubpageSection;
  index: number;
}

export default function SubpageOverviewSection({ section, index }: SubpageOverviewSectionProps) {
  // Even index = Content on Left, Image on Right (matching user's screenshot)
  // Odd index = Image on Left, Content on Right
  const isImageRight = index % 2 === 0;

  return (
    <section
      id={section.slug}
      className={`py-16 md:py-24 relative overflow-hidden transition-colors ${
        index % 2 === 0 ? 'bg-white' : 'bg-[#F8FAFC]'
      } border-b border-gray-100`}
    >
      {/* Ambient background blur */}
      <div
        className={`absolute top-1/2 -translate-y-1/2 w-80 h-80 rounded-full blur-[100px] pointer-events-none opacity-30 ${
          isImageRight ? 'right-0 bg-secondary/15' : 'left-0 bg-primary/15'
        }`}
      />

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* TEXT CONTENT COLUMN */}
          <div
            className={`lg:col-span-7 flex flex-col items-start ${
              isImageRight ? 'order-1' : 'order-1 lg:order-2'
            }`}
          >
            <ScrollReveal yOffset={20} duration={0.6}>
              {/* Eyebrow badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold uppercase tracking-wider mb-3">
                <Sparkles className="h-3.5 w-3.5 text-secondary" />
                <span>{section.eyebrow}</span>
              </div>

              {/* Section Heading */}
              <h2 className="font-heading font-extrabold text-2xl sm:text-3xl md:text-4xl text-dark leading-tight mb-4">
                {section.highlightWord && section.heading.includes(section.highlightWord) ? (
                  <>
                    {section.heading.slice(0, section.heading.indexOf(section.highlightWord))}
                    <span className="text-primary">{section.highlightWord}</span>
                    {section.heading.slice(section.heading.indexOf(section.highlightWord) + section.highlightWord.length)}
                  </>
                ) : (
                  section.heading
                )}
              </h2>

              {/* Short Description */}
              <p className="font-sans text-base md:text-lg text-gray-600 leading-relaxed mb-6">
                {section.description}
              </p>

              {/* Three Highlights */}
              <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {section.highlights.map((highlight, hIdx) => (
                  <div
                    key={hIdx}
                    className="flex items-center gap-2.5 p-3 rounded-xl bg-gray-50 border border-gray-100/80"
                  >
                    <CheckCircle2 className="h-4 w-4 text-secondary shrink-0" />
                    <span className="font-sans text-xs sm:text-sm font-medium text-gray-700">
                      {highlight}
                    </span>
                  </div>
                ))}
              </div>

              {/* Navigation Action Buttons */}
              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href={section.ctaHref}
                  className="inline-flex items-center gap-2 bg-primary hover:bg-primary/95 text-white font-sans text-sm font-semibold py-3.5 px-7 rounded-xl transition-all shadow-md shadow-primary/20 hover:shadow-lg active:scale-95"
                >
                  <span>{section.ctaText}</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-white hover:bg-gray-50 text-dark border border-gray-200 font-sans text-sm font-semibold py-3.5 px-6 rounded-xl transition-all shadow-sm hover:border-primary/40"
                >
                  <span>Inquire Now</span>
                </Link>
              </div>
            </ScrollReveal>
          </div>

          {/* IMAGE CARD COLUMN */}
          <div
            className={`lg:col-span-5 ${
              isImageRight ? 'order-2' : 'order-2 lg:order-1'
            }`}
          >
            <ScrollReveal yOffset={25} duration={0.6} delay={0.15}>
              <Link href={section.ctaHref} className="block group">
                <ThreeDTilt maxRotate={5} className="rounded-3xl">
                  <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-gray-100 group transition-all duration-500 bg-white">
                    <div className="relative h-[380px] sm:h-[420px] w-full overflow-hidden">
                      <Image
                        src={section.imageSrc}
                        alt={section.imageAlt}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 550px"
                        priority={index < 2}
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-dark/85 via-dark/25 to-transparent opacity-90 group-hover:opacity-75 transition-opacity" />

                      {/* Top-left Badge */}
                      <div className="absolute top-5 left-5 inline-flex items-center gap-1.5 py-1.5 px-3.5 rounded-full bg-white/95 backdrop-blur-md text-primary text-xs font-semibold shadow-md border border-white/40">
                        <span className="h-1.5 w-1.5 rounded-full bg-secondary animate-pulse" />
                        <span>{section.badgeTag}</span>
                      </div>

                      {/* Floating Bottom Card matching User Screenshot */}
                      <div className="absolute bottom-6 left-6 right-6 p-5 sm:p-6 rounded-2xl bg-dark/75 backdrop-blur-md border border-white/10 text-white shadow-xl transition-transform duration-300 group-hover:-translate-y-1">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-xs font-semibold text-secondary tracking-wider uppercase">
                            {section.badgeTag}
                          </span>
                          {section.badgeRight && (
                            <span className="text-[11px] bg-primary/40 text-white px-2.5 py-0.5 rounded-full border border-secondary/30">
                              {section.badgeRight}
                            </span>
                          )}
                        </div>
                        <h3 className="font-heading font-bold text-base sm:text-lg leading-snug text-white flex items-center justify-between gap-2">
                          <span>{section.imageCardTitle}</span>
                          <ArrowRight className="h-4 w-4 text-secondary shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </h3>
                      </div>
                    </div>
                  </div>
                </ThreeDTilt>
              </Link>
            </ScrollReveal>
          </div>

        </div>
      </div>
    </section>
  );
}
