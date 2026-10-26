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
import BioEnergyModulesGrid from '@/components/BioEnergyModulesGrid';
import { bioEnergySections } from '@/data/bioEnergySections';
import { 
  ArrowLeft, 
  CheckCircle2, 
  Sparkles
} from 'lucide-react';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const section = bioEnergySections.find((s) => s.slug === slug);
  if (!section) return { title: 'Not Found | Sphoorthi Bioenergy' };

  return {
    title: `${section.detailTitle} | Sphoorthi Bioenergy`,
    description: section.detailSubtitle,
  };
}

export function generateStaticParams() {
  return bioEnergySections.map((section) => ({
    slug: section.slug,
  }));
}

export default async function BioEnergyDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const section = bioEnergySections.find((s) => s.slug === slug);

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
            { name: 'Bio Energy', href: '/bio-energy' },
            { name: section.heading }
          ]}
        />

        {/* Back Link Bar */}
        <div className="bg-white border-b border-gray-100 py-4">
          <div className="max-w-[1440px] mx-auto px-6 md:px-12 flex items-center justify-between">
            <Link
              href="/bio-energy"
              className="inline-flex items-center gap-2 text-sm font-semibold text-gray-600 hover:text-primary transition-colors group"
            >
              <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
              <span>Back to All Bio Energy Solutions</span>
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
                  <Sparkles className="h-3.5 w-3.5 text-secondary" />
                  <span>Technical Overview &amp; Scope</span>
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
                      Key Highlights &amp; Industry Benchmarks
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

        {/* Interactive Technical Modules Grid & Animated Detail Modal */}
        <BioEnergyModulesGrid 
          modules={section.detailCards} 
          sectionHeading={section.heading} 
        />

      </main>

      <Footer />
    </>
  );
}
