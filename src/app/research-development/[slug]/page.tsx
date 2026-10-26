import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';
import ScrollReveal from '@/components/ScrollReveal';
import ThreeDTilt from '@/components/ThreeDTilt';
import { researchDevelopmentSections } from '@/data/researchDevelopmentSections';
import { 
  ArrowLeft, 
  CheckCircle2, 
  Microscope, 
  Layers 
} from 'lucide-react';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const section = researchDevelopmentSections.find((s) => s.slug === slug);
  if (!section) return { title: 'Not Found | Sphoorthi Bioenergy R&D' };

  return {
    title: `${section.detailTitle} | Sphoorthi Bioenergy R&D`,
    description: section.detailSubtitle,
  };
}

export function generateStaticParams() {
  return researchDevelopmentSections.map((section) => ({
    slug: section.slug,
  }));
}

export default async function ResearchDevelopmentDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const section = researchDevelopmentSections.find((s) => s.slug === slug);

  if (!section) {
    notFound();
  }

  return (
    <>
      <Navbar />

      <main className="flex-grow bg-[#F8FAFC]">
        {/* Page Header */}
        <PageHeader 
          title={section.detailTitle}
          description={section.detailSubtitle}
          breadcrumbs={[
            { name: 'Home', href: '/' },
            { name: 'R&D', href: '/research-development' },
            { name: section.heading }
          ]}
        />

        {/* Back Link Bar */}
        <div className="bg-white border-b border-gray-100 py-4">
          <div className="max-w-[1440px] mx-auto px-6 md:px-12 flex items-center justify-between">
            <Link
              href="/research-development"
              className="inline-flex items-center gap-2 text-sm font-semibold text-gray-600 hover:text-primary transition-colors group"
            >
              <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
              <span>Back to All Research Domains</span>
            </Link>

            <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full uppercase tracking-wider">
              {section.eyebrow}
            </span>
          </div>
        </div>

        {/* Hero Detail Section */}
        <section className="py-16 md:py-20 max-w-[1440px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-7 flex flex-col gap-6">
              <ScrollReveal>
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold uppercase tracking-wider mb-2">
                  <Microscope className="h-3.5 w-3.5 text-secondary" />
                  <span>Applied Research &amp; Laboratory Inquiry</span>
                </div>
                <h2 className="font-heading font-extrabold text-3xl md:text-5xl text-dark leading-tight mb-4">
                  {section.heading}
                </h2>
                <p className="font-sans text-base md:text-lg text-gray-600 leading-relaxed mb-6">
                  {section.detailOverview}
                </p>

                {section.detailKeyTakeaways && (
                  <div className="p-6 rounded-2xl bg-white border border-gray-100 shadow-sm space-y-3">
                    <h4 className="font-heading font-bold text-sm text-dark uppercase tracking-wider">
                      Research Roadmap &amp; Scientific Objectives
                    </h4>
                    <ul className="space-y-2.5">
                      {section.detailKeyTakeaways.map((takeaway, tIdx) => (
                        <li key={tIdx} className="flex items-start gap-2.5 text-sm text-gray-700">
                          <CheckCircle2 className="h-4 w-4 text-secondary shrink-0 mt-0.5" />
                          <span>{takeaway}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </ScrollReveal>
            </div>

            <div className="lg:col-span-5">
              <ScrollReveal delay={0.15}>
                <ThreeDTilt maxRotate={5} className="rounded-3xl">
                  <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-gray-100 group">
                    <div className="relative h-[420px] w-full">
                      <Image 
                        src={section.imageSrc} 
                        alt={section.imageAlt} 
                        fill
                        priority
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-dark/85 via-dark/25 to-transparent" />
                      
                      <div className="absolute bottom-6 left-6 right-6 p-6 rounded-2xl bg-dark/75 backdrop-blur-md border border-white/10 text-white">
                        <span className="text-xs font-semibold text-secondary tracking-wider uppercase block mb-1">
                          {section.badgeTag}
                        </span>
                        <h3 className="font-heading font-bold text-lg leading-snug">
                          {section.imageCardTitle}
                        </h3>
                      </div>
                    </div>
                  </div>
                </ThreeDTilt>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Research Themes & Experimental Scope (Section-Wise Layout) */}
        <div className="py-14 bg-white border-y border-gray-100 text-center">
          <div className="max-w-[1440px] mx-auto px-6 md:px-12">
            <span className="text-xs font-bold text-secondary uppercase tracking-widest block mb-2">
              Experimental Scope &amp; Methodologies
            </span>
            <h3 className="font-heading font-extrabold text-3xl md:text-4xl text-dark">
              Technological Investigation &amp; R&amp;D Scope
            </h3>
            <p className="mt-3 text-sm md:text-base text-gray-500 max-w-2xl mx-auto">
              Experimental methodologies, thermodynamic models, and bio-process validation for {section.heading}.
            </p>
          </div>
        </div>

        {/* Section-by-Section Content Modules with Proper Images */}
        {section.detailCards.map((item, idx) => {
          const isEven = idx % 2 === 0;
          return (
            <section 
              key={idx} 
              id={`theme-${idx + 1}`}
              className={`py-16 md:py-24 border-b border-gray-100 transition-colors ${
                isEven ? 'bg-white' : 'bg-[#F8FAFC]'
              }`}
            >
              <div className="max-w-[1440px] mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
                  
                  {/* Narrative Side */}
                  <div className={`lg:col-span-7 flex flex-col gap-5 ${
                    isEven ? 'lg:order-1' : 'lg:order-2'
                  }`}>
                    <ScrollReveal>
                      <div className="flex items-center gap-3">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-mono font-bold tracking-wider uppercase">
                          <Layers className="h-3.5 w-3.5 text-secondary" />
                          <span>SECTION {String(idx + 1).padStart(2, '0')}</span>
                        </span>
                        <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                          Module {idx + 1} of {section.detailCards.length}
                        </span>
                      </div>

                      <h3 className="font-heading font-extrabold text-2xl md:text-3xl text-dark leading-tight mt-2">
                        {item.title}
                      </h3>

                      <p className="font-sans text-base md:text-lg text-gray-600 leading-relaxed">
                        {item.desc}
                      </p>
                    </ScrollReveal>
                  </div>

                  {/* Specifications & Deliverables Box Side with Clean Image Header */}
                  <div className={`lg:col-span-5 ${
                    isEven ? 'lg:order-2' : 'lg:order-1'
                  }`}>
                    <ScrollReveal delay={0.15}>
                      <div className="bg-white rounded-3xl border border-gray-200/80 shadow-md hover:shadow-xl transition-all overflow-hidden group">
                        {item.image && (
                          <div className="relative h-48 sm:h-56 w-full overflow-hidden bg-slate-100">
                            <Image
                              src={item.image}
                              alt={item.title}
                              fill
                              sizes="(max-width: 768px) 100vw, 500px"
                              className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/20 to-transparent" />
                            <div className="absolute bottom-3.5 left-4 right-4 flex items-center justify-between text-white text-xs">
                              <span className="font-semibold text-secondary uppercase tracking-wider text-[11px]">
                                {item.tag || 'R&D Methodology'}
                              </span>
                              <span className="bg-primary/80 backdrop-blur-sm px-2.5 py-0.5 rounded-full text-[11px] font-medium border border-white/20">
                                Laboratory Scope
                              </span>
                            </div>
                          </div>
                        )}
                        
                        <div className="p-7 md:p-8">
                          <div className="flex items-center gap-2.5 pb-4 mb-5 border-b border-gray-100">
                            <CheckCircle2 className="h-5 w-5 text-secondary shrink-0" />
                            <h4 className="font-heading font-bold text-sm uppercase tracking-wider text-dark">
                              Experimental Scope &amp; Methodologies
                            </h4>
                          </div>

                          {item.points && item.points.length > 0 ? (
                            <ul className="space-y-3.5">
                              {item.points.map((pt, pIdx) => (
                                <li key={pIdx} className="flex items-start gap-3 text-sm text-gray-700">
                                  <span className="h-2 w-2 rounded-full bg-secondary shrink-0 mt-1.5 ring-4 ring-secondary/20" />
                                  <span className="font-sans leading-relaxed font-medium">{pt}</span>
                                </li>
                              ))}
                            </ul>
                          ) : (
                            <p className="text-sm text-gray-500 italic">
                              Full experimental protocols available for institutional research partners.
                            </p>
                          )}
                        </div>
                      </div>
                    </ScrollReveal>
                  </div>

                </div>
              </div>
            </section>
          );
        })}

      </main>

      <Footer />
    </>
  );
}
