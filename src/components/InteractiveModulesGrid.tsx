'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import ScrollReveal from '@/components/ScrollReveal';
import { 
  CheckCircle2, 
  ArrowRight, 
  X, 
  Maximize2, 
  Layers, 
  Sprout,
  Microscope,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

export interface ModuleItem {
  title: string;
  desc: string;
  points?: string[];
  tag?: string;
  image?: string;
}

export interface InteractiveModulesGridProps {
  modules: ModuleItem[];
  sectionHeading: string;
  badgeLabel?: string;
  titleHeading?: string;
  subtitle?: string;
  deliverablesTitle?: string;
  badgeIconType?: 'layers' | 'sprout' | 'microscope';
  exploreButtonText?: string;
  specsCountLabel?: string;
  themeColor?: 'primary' | 'secondary';
}

export default function InteractiveModulesGrid({ 
  modules, 
  sectionHeading,
  badgeLabel,
  titleHeading,
  subtitle,
  deliverablesTitle,
  badgeIconType = 'layers',
  exploreButtonText = 'Explore Complete Section Details',
  specsCountLabel = 'Key Specifications Included',
  themeColor = 'primary'
}: InteractiveModulesGridProps) {
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);

  // Close modal callback
  const closeModal = useCallback(() => {
    setSelectedIdx(null);
  }, []);

  // Previous module
  const prevModule = useCallback(() => {
    if (selectedIdx === null) return;
    setSelectedIdx((prev) => (prev !== null && prev > 0 ? prev - 1 : modules.length - 1));
  }, [selectedIdx, modules.length]);

  // Next module
  const nextModule = useCallback(() => {
    if (selectedIdx === null) return;
    setSelectedIdx((prev) => (prev !== null && prev < modules.length - 1 ? prev + 1 : 0));
  }, [selectedIdx, modules.length]);

  // Keyboard navigation & body scroll lock
  useEffect(() => {
    if (selectedIdx === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeModal();
      if (e.key === 'ArrowLeft') prevModule();
      if (e.key === 'ArrowRight') nextModule();
    };

    window.addEventListener('keydown', handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [selectedIdx, closeModal, prevModule, nextModule]);

  const activeModule = selectedIdx !== null ? modules[selectedIdx] : null;

  const renderBadgeIcon = () => {
    switch (badgeIconType) {
      case 'sprout':
        return <Sprout className="h-3.5 w-3.5 text-secondary" />;
      case 'microscope':
        return <Microscope className="h-3.5 w-3.5 text-secondary" />;
      default:
        return <Layers className="h-3.5 w-3.5 text-secondary" />;
    }
  };

  return (
    <>
      {/* Section Header */}
      <div className="py-14 bg-white border-y border-gray-100 text-center">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold uppercase tracking-wider mb-3">
              {renderBadgeIcon()}
              <span>{badgeLabel || 'Interactive Scope & Deliverables Grid'}</span>
            </div>
            <h3 className="font-heading font-extrabold text-3xl md:text-4xl text-dark">
              {titleHeading || 'Technical Modules & Implementation Scope'}
            </h3>
            <p className="mt-3 text-sm md:text-base text-gray-500 max-w-2xl mx-auto">
              {subtitle || `Click any image card below to open the complete technical overview, verified parameters, and deliverables for ${sectionHeading}.`}
            </p>
          </ScrollReveal>
        </div>
      </div>

      {/* Grid of Section Images / Cards */}
      <section className="py-16 md:py-24 bg-[#F8FAFC]">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-10">
            {modules.map((item, idx) => {
              const imageSrc = item.image || '/images/hero.jpg';
              return (
                <ScrollReveal key={idx} delay={idx * 0.08}>
                  <div
                    onClick={() => setSelectedIdx(idx)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        setSelectedIdx(idx);
                      }
                    }}
                    className="group relative flex flex-col h-full bg-white rounded-3xl overflow-hidden border border-slate-200/90 hover:border-primary/50 shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-1.5 cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary/40 select-none text-left"
                  >
                    {/* Image Box */}
                    <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-slate-900 shrink-0">
                      <Image
                        src={imageSrc}
                        alt={item.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 650px"
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                      
                      {/* Gradient Ambient Overlays */}
                      <div className="absolute inset-0 bg-gradient-to-t from-dark/85 via-dark/25 to-transparent opacity-80 group-hover:opacity-70 transition-opacity" />

                      {/* Top-Left Module Badge */}
                      <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-md text-primary text-xs font-bold shadow-md border border-white/40">
                        <span className="h-2 w-2 rounded-full bg-secondary animate-pulse" />
                        <span>Module {String(idx + 1).padStart(2, '0')}</span>
                      </div>

                      {/* Top-Right Tag */}
                      <div className="absolute top-4 right-4 inline-flex items-center px-3 py-1 rounded-full bg-dark/75 backdrop-blur-md text-white text-[11px] font-semibold border border-white/20">
                        <span>{item.tag || 'Verified Field Scope'}</span>
                      </div>

                      {/* Hover Overlay with Expand Hint */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-dark/35 backdrop-blur-xs">
                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-dark font-sans text-xs font-bold shadow-xl transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                          <Maximize2 className="h-3.5 w-3.5 text-primary" />
                          <span>Click to View Full Details</span>
                        </span>
                      </div>

                      {/* Bottom Title Preview on Image */}
                      <div className="absolute bottom-4 left-5 right-5 text-white">
                        <h4 className="font-heading font-bold text-lg sm:text-xl leading-snug drop-shadow-sm line-clamp-1">
                          {item.title}
                        </h4>
                      </div>
                    </div>

                    {/* Content Box */}
                    <div className="p-6 sm:p-7 flex flex-col flex-grow justify-between bg-white border-t border-slate-100">
                      <div>
                        {/* Short Description */}
                        <p className="font-sans text-xs sm:text-sm text-gray-600 leading-relaxed line-clamp-3 mb-4">
                          {item.desc}
                        </p>

                        {/* Specs Pill List Preview */}
                        {item.points && item.points.length > 0 && (
                          <div className="flex flex-wrap items-center gap-2 mb-4">
                            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-emerald-50 text-emerald-700 text-xs font-semibold border border-emerald-100">
                              <CheckCircle2 className="h-3.5 w-3.5 text-secondary" />
                              <span>{item.points.length} {specsCountLabel}</span>
                            </span>
                          </div>
                        )}
                      </div>

                      {/* Card Footer Button */}
                      <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-primary">
                        <span className="group-hover:underline">{exploreButtonText}</span>
                        <span className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-all transform group-hover:translate-x-1">
                          <ArrowRight className="h-4 w-4" />
                        </span>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Full Info Animated Modal */}
      <AnimatePresence>
        {selectedIdx !== null && activeModule && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 overflow-y-auto">
            {/* Backdrop Blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={closeModal}
              className="fixed inset-0 bg-dark/70 backdrop-blur-md"
            />

            {/* Modal Dialog Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 25 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 25 }}
              transition={{ type: 'spring', damping: 28, stiffness: 320 }}
              className="relative w-full max-w-4xl max-h-[90vh] bg-white rounded-3xl overflow-hidden shadow-2xl border border-gray-100 z-10 flex flex-col my-auto"
            >
              {/* Top Bar with Controls */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100 bg-white/95 backdrop-blur-md sticky top-0 z-20">
                <div className="flex items-center gap-2 sm:gap-3">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider">
                    {renderBadgeIcon()}
                    <span>Module {String(selectedIdx + 1).padStart(2, '0')} of {modules.length}</span>
                  </span>
                  <span className="text-xs font-semibold text-gray-500 hidden sm:inline-block">
                    {activeModule.tag || 'Verified Field Scope'}
                  </span>
                </div>

                <button
                  onClick={closeModal}
                  aria-label="Close modal"
                  className="h-9 w-9 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 hover:text-dark flex items-center justify-center transition-colors cursor-pointer"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Modal Scrollable Body */}
              <div className="overflow-y-auto flex-grow">
                {/* Large Featured Image */}
                <div className="relative h-64 sm:h-80 md:h-96 w-full overflow-hidden bg-slate-900">
                  <Image
                    src={activeModule.image || '/images/hero.jpg'}
                    alt={activeModule.title}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 900px"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/85 via-dark/20 to-transparent" />
                  
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <span className="text-xs font-semibold text-secondary uppercase tracking-wider block mb-1">
                      {activeModule.tag || 'Verified Standard'}
                    </span>
                    <h2 className="font-heading font-extrabold text-2xl sm:text-3xl md:text-4xl text-white leading-tight">
                      {activeModule.title}
                    </h2>
                  </div>
                </div>

                {/* Narrative & Full Details */}
                <div className="p-6 sm:p-8 md:p-10 space-y-6">
                  {/* Detailed Description */}
                  <div>
                    <h4 className="font-heading font-bold text-xs uppercase tracking-wider text-secondary mb-2">
                      Technical Overview
                    </h4>
                    <p className="font-sans text-base sm:text-lg text-gray-700 leading-relaxed">
                      {activeModule.desc}
                    </p>
                  </div>

                  {/* Specifications & Deliverables Checklist */}
                  {activeModule.points && activeModule.points.length > 0 && (
                    <div className="p-6 sm:p-7 rounded-2xl bg-[#F8FAFC] border border-gray-200/80">
                      <div className="flex items-center gap-2.5 pb-4 mb-4 border-b border-gray-200/60">
                        <CheckCircle2 className="h-5 w-5 text-secondary shrink-0" />
                        <h4 className="font-heading font-bold text-sm uppercase tracking-wider text-dark">
                          {deliverablesTitle || 'Key Deliverables & Specifications'}
                        </h4>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                        {activeModule.points.map((pt, pIdx) => (
                          <div 
                            key={pIdx} 
                            className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-gray-150 shadow-xs"
                          >
                            <span className="h-2 w-2 rounded-full bg-secondary shrink-0 mt-1.5 ring-4 ring-secondary/20" />
                            <span className="font-sans text-xs sm:text-sm text-gray-800 font-medium leading-relaxed">
                              {pt}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Bottom Footer with Navigation Controls */}
              <div className="flex items-center justify-between px-6 py-4 border-t border-gray-100 bg-white sticky bottom-0 z-20">
                <button
                  onClick={prevModule}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gray-50 hover:bg-gray-100 text-gray-700 hover:text-dark text-xs sm:text-sm font-semibold transition-colors cursor-pointer border border-gray-200"
                >
                  <ChevronLeft className="h-4 w-4" />
                  <span>Previous</span>
                </button>

                <div className="text-xs font-semibold text-gray-400">
                  <span className="text-dark font-bold">{selectedIdx + 1}</span> / {modules.length}
                </div>

                <button
                  onClick={nextModule}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-primary hover:bg-primary/95 text-white text-xs sm:text-sm font-semibold transition-colors cursor-pointer shadow-sm shadow-primary/20"
                >
                  <span>Next Module</span>
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}

export { InteractiveModulesGrid as BioEnergyModulesGrid };
