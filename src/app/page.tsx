'use client';

import React, { useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollReveal from '@/components/ScrollReveal';
import Counter from '@/components/Counter';
import ThreeDTilt from '@/components/ThreeDTilt';
import BackgroundEffects from '@/components/BackgroundEffects';
import { 
  Leaf, Cpu, Layers, Factory, 
  CheckCircle2, Flame, Shield, Compass, Sliders,
  FlaskConical, Wind, Zap
} from 'lucide-react';
import AlternatingFeatureSection from '@/components/AlternatingFeatureSection';
import { featuredSectionsData } from '@/data/featuredSections';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Unique, organic leaf divider to replace standard horizontal gray borders
function UniqueDivider() {
  return (
    <div className="relative w-full py-12 overflow-hidden select-none pointer-events-none">
      <div className="absolute left-[15%] right-[15%] top-1/2 h-[1px] bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center h-10 w-10 rounded-full bg-white border border-primary/20 shadow-md text-primary z-10">
        <Leaf className="h-4 w-4 text-secondary animate-pulse-slow" />
      </div>
    </div>
  );
}

export default function HomePage() {
  const processSectionRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const sustainabilityHeadingRef = useRef<HTMLHeadingElement>(null);
  const industriesGridRef = useRef<HTMLDivElement>(null);
  const whyChooseHeadingRef = useRef<HTMLHeadingElement>(null);
  const heroHeadingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Create GSAP context for proper cleanup in React StrictMode
    const ctx = gsap.context(() => {
      const section = processSectionRef.current;
      const progressBar = progressBarRef.current;
      const heading = headingRef.current;
      if (!section || !progressBar || !heading) return;

      const nodes = section.querySelectorAll('.process-step-node');
      const cards = section.querySelectorAll('.process-step-card');
      if (nodes.length === 0 || cards.length === 0) return;

      // Set initial values
      gsap.set(progressBar, { width: '0%' });
      gsap.set(nodes, { 
        borderColor: '#E5E7EB', 
        color: '#9CA3AF', 
        backgroundColor: '#ffffff',
        boxShadow: 'none',
        scale: 1 
      });
      gsap.set(cards, { opacity: 0, y: 40, scale: 0.95 });

      // Intro Animations
      const badge = section.querySelector('.process-badge');
      const desc = section.querySelector('.process-desc');
      const words = heading.querySelectorAll('.reveal-word');

      const introTl = gsap.timeline({
        scrollTrigger: {
          trigger: heading,
          start: 'top 85%',
          end: 'bottom 15%',
          toggleActions: 'play reverse play reverse'
        }
      });

      if (badge) {
        introTl.fromTo(badge, { opacity: 0, y: -20 }, { opacity: 1, y: 0, duration: 0.4, ease: 'power2.out' });
      }
      if (words.length > 0) {
        introTl.fromTo(words, { opacity: 0, y: 15 }, { opacity: 1, y: 0, stagger: 0.05, ease: 'power2.out', duration: 0.5 }, '-=0.2');
      }
      if (desc) {
        introTl.fromTo(desc, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' }, '-=0.3');
      }

      // Scroll Storytelling Main Timeline
      const isMobile = window.matchMedia('(max-width: 768px)').matches;
      const mainTl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top 75%',
          end: 'bottom 40%',
          scrub: isMobile ? 0.3 : 0.8,
        }
      });

      // Animate line progress fill
      mainTl.to(progressBar, { width: '100%', ease: 'none', duration: 3 });

      // Highlight step nodes and stagger card reveal
      const count = nodes.length;
      nodes.forEach((node, idx) => {
        const position = idx * (3 / (count - 0.5));

        mainTl.to(node, {
          borderColor: '#22C55E', // Brand Secondary Green
          backgroundColor: '#0B6E4F', // Brand Primary Green
          color: '#ffffff',
          boxShadow: '0 0 25px rgba(34, 197, 94, 0.4)',
          scale: 1.15,
          duration: 0.2,
          ease: 'power1.out',
        }, position)
        .to(cards[idx], {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.4,
          ease: 'back.out(1.2)',
        }, position);
      });



      // Sustainability Heading Letter Spacing Animation
      const sustHeading = sustainabilityHeadingRef.current;
      if (sustHeading) {
        gsap.fromTo(sustHeading, 
          {
            letterSpacing: '0.25em',
            filter: 'blur(6px)',
            opacity: 0,
          },
          {
            letterSpacing: '-0.02em',
            filter: 'blur(0px)',
            opacity: 1,
            duration: 1.2,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: sustHeading,
              start: 'top 85%',
              end: 'bottom 15%',
              toggleActions: 'play reverse play reverse'
            }
          }
        );
      }

      // Industries Grid Rotation Reveal on Scroll
      const indContainer = industriesGridRef.current;
      if (indContainer) {
        const indCards = indContainer.querySelectorAll('.industries-card-inner');
        if (indCards.length > 0) {
          gsap.fromTo(indCards, 
            {
              opacity: 0,
              scale: 0.85,
              rotation: (i) => (i % 2 === 0 ? -12 : 12),
              y: 50
            },
            {
              opacity: 1,
              scale: 1,
              rotation: 0,
              y: 0,
              duration: 1.0,
              ease: 'back.out(1.4)',
              stagger: 0.08,
              scrollTrigger: {
                trigger: indContainer,
                start: 'top 85%',
                end: 'bottom 15%',
                toggleActions: 'play reverse play reverse'
              }
            }
          );
        }
      }

      // Why Choose Heading character wave reveal
      const whyHeading = whyChooseHeadingRef.current;
      if (whyHeading) {
        const chars = whyHeading.querySelectorAll('.reveal-char');
        if (chars.length > 0) {
          gsap.fromTo(chars, 
            {
              y: 20,
              scaleY: 0.6,
              opacity: 0,
            },
            {
              y: 0,
              scaleY: 1,
              opacity: 1,
              duration: 0.6,
              ease: 'power2.out',
              stagger: 0.02,
              scrollTrigger: {
                trigger: whyHeading,
                start: 'top 85%',
                end: 'bottom 15%',
                toggleActions: 'play reverse play reverse'
              }
            }
          );
        }
      }



      // Hero Heading character wave reveal
      const heroHeading = heroHeadingRef.current;
      if (heroHeading) {
        const chars = heroHeading.querySelectorAll('.hero-reveal-char');
        if (chars.length > 0) {
          gsap.fromTo(chars, 
            {
              y: 25,
              scaleY: 0.5,
              opacity: 0,
            },
            {
              y: 0,
              scaleY: 1,
              opacity: 1,
              duration: 0.7,
              ease: 'power2.out',
              stagger: 0.015,
              scrollTrigger: {
                trigger: heroHeading,
                start: 'top 95%',
                end: 'bottom 15%',
                toggleActions: 'play reverse play reverse'
              }
            }
          );
        }
      }

    }, processSectionRef); // scope to process section container

    return () => ctx.revert();
  }, []);

  return (
    <>
      <Navbar />

      <main className="flex-grow bg-[#F8FAFC]">
        {/* ==========================================
            HERO SECTION
            ========================================== */}
        <section className="relative min-h-screen flex flex-col justify-between pt-32 pb-12 bg-[#F8FAFC] text-dark overflow-hidden">
          {/* Canvas Background Particles */}
          <BackgroundEffects />

          {/* Subtle Grid overlay for texture */}
          <div className="absolute inset-0 bg-grid-pattern opacity-5" />

          {/* Floating background blobs */}
          <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-[120px] pointer-events-none animate-pulse-slow"></div>
          <div className="absolute bottom-1/4 right-1/10 w-[350px] h-[350px] bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>

          <div className="max-w-[1440px] mx-auto px-6 md:px-12 relative z-10 w-full flex-grow flex items-center mt-8 lg:mt-0">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 w-full items-center">
              {/* Left Content */}
              <div className="lg:col-span-6 flex flex-col items-start text-left">
                {/* Brand Logo & Eyebrow Badge */}
                <ScrollReveal yOffset={-15} duration={0.5}>
                  <div className="inline-flex items-center gap-3 bg-white/95 backdrop-blur-md border border-gray-200/80 py-2 px-3.5 rounded-2xl shadow-sm mb-6">
                    <div className="relative h-8 w-36 sm:h-9 sm:w-44">
                      <Image 
                        src="/images/logo.png" 
                        alt="Sphoorthi Bio Energy" 
                        fill
                        priority
                        className="object-contain object-left"
                      />
                    </div>
                    <span className="hidden sm:inline-block h-4 w-px bg-gray-200" />
                    <span className="hidden sm:inline-block text-[11px] font-bold text-primary uppercase tracking-wider">
                      Clean Bio-CNG &amp; Hydrogen
                    </span>
                  </div>
                </ScrollReveal>

                {/* Main Heading */}
                <h1 ref={heroHeadingRef} className="font-heading font-extrabold text-4xl sm:text-5xl md:text-6xl leading-[1.15] mb-6 tracking-tight max-w-2xl text-[#0B1E18] select-none">
                  <span className="block">
                    {"Transforming".split('').map((char, charIdx) => (
                      <span key={`p1-c-${charIdx}`} className="hero-reveal-char inline-block origin-bottom opacity-0">
                        {char}
                      </span>
                    ))}
                  </span>
                  <span className="block">
                    <span className="hero-reveal-char inline-block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent origin-bottom opacity-0">
                      Bio-Matter
                    </span>
                  </span>
                  <span className="block">
                    {"into Clean Energy".split(' ').map((word, wordIdx) => (
                      <span key={`p3-w-${wordIdx}`} className="inline-block whitespace-nowrap">
                        {word.split('').map((char, charIdx) => (
                          <span key={`p3-c-${wordIdx}-${charIdx}`} className="hero-reveal-char inline-block origin-bottom opacity-0">
                            {char}
                          </span>
                        ))}
                      </span>
                    )).reduce((acc, curr, i) => i === 0 ? [curr] : [...acc, " ", curr], [] as React.ReactNode[])}
                  </span>
                </h1>

                {/* Description */}
                <ScrollReveal delay={0.15} yOffset={20} duration={0.6}>
                  <p className="font-sans text-base sm:text-lg md:text-xl text-gray-500 mb-8 max-w-md leading-relaxed">
                    Innovative biogas and biomethane solutions for a sustainable and carbon-neutral world.
                  </p>
                </ScrollReveal>

                {/* Buttons */}
                <ScrollReveal delay={0.25} yOffset={20} duration={0.6}>
                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
                    <Link 
                      href="/contact" 
                      className="shine-effect inline-flex items-center justify-center bg-primary hover:bg-primary/95 text-white font-sans font-semibold py-3.5 px-7 rounded-xl transition-all duration-200 shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-95 text-center"
                    >
                      Get Consultation
                    </Link>
                    <Link 
                      href="/solutions" 
                      className="shine-effect inline-flex items-center justify-center bg-transparent hover:bg-primary/5 text-primary font-sans font-semibold py-3.5 px-7 rounded-xl transition-all duration-200 border border-primary/20 hover:border-primary/45 active:scale-95 text-center"
                    >
                      Explore Solutions
                    </Link>
                  </div>
                </ScrollReveal>
              </div>

              {/* Right Circular Illustration */}
              <div className="lg:col-span-6 flex items-center justify-center relative select-none perspective-1000">
                <ScrollReveal scaleOffset={0.9} duration={0.8} delay={0.15}>
                  <ThreeDTilt maxRotate={15} className="rounded-full" overflowHidden={false}>
                    <div className="relative w-full aspect-square max-w-[450px] lg:max-w-[480px] mx-auto preserve-3d">
                      {/* Decorative Outer Rings */}
                      <div className="absolute inset-0 bg-[#E0F2FE]/40 rounded-full animate-pulse-slow" style={{ transform: 'translateZ(20px) scale(0.95)' }}></div>
                      <div className="absolute inset-0 bg-primary/5 rounded-full" style={{ transform: 'translateZ(10px) scale(1.02)' }}></div>
                      
                      {/* Circular Image Container */}
                      <div className="relative w-full h-full rounded-full overflow-hidden border-8 border-white shadow-2xl" style={{ transform: 'translateZ(45px)' }}>
                        <img 
                          src="/images/hero_illustration.jpg" 
                          alt="Bioenergy Facilities Illustration" 
                          className="w-full h-full object-cover"
                        />
                      </div>

                      {/* Floating Brand Badge with Official Logo */}
                      <div 
                        className="absolute -bottom-3 left-1/2 -translate-x-1/2 sm:bottom-4 sm:left-4 sm:translate-x-0 bg-white/95 backdrop-blur-md py-2.5 px-4 sm:py-3 sm:px-5 rounded-2xl shadow-2xl border border-gray-150 flex items-center gap-2 z-30" 
                        style={{ transform: 'translateZ(65px)' }}
                      >
                        <div className="relative h-8 sm:h-9 w-32 sm:w-40">
                          <Image 
                            src="/images/logo.png" 
                            alt="Sphoorthi Bio Energy Official Brand" 
                            fill
                            className="object-contain"
                          />
                        </div>
                      </div>
                    </div>
                  </ThreeDTilt>
                </ScrollReveal>
              </div>
            </div>
          </div>

          {/* Elegant SVG Leaves Overlay at Bottom Center */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[420px] h-36 pointer-events-none opacity-50 z-20">
            <svg viewBox="0 0 400 120" className="w-full h-full fill-current text-primary/30">
              <path d="M200,120 C180,80 140,60 100,70 C140,50 170,70 190,100 C195,80 180,40 150,20 C180,30 200,60 200,90 C200,60 220,30 250,20 C220,40 205,80 210,100 C230,70 260,50 300,70 C260,60 220,80 200,120 Z" />
            </svg>
          </div>
        </section>

        {/* Bottom Feature Strip (Statistics)
        <div className="w-full border-y border-gray-100 bg-white py-10 relative z-10">
          <div className="max-w-[1440px] mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  value: 500,
                  suffix: '+',
                  title: 'Projects Delivered',
                  desc: 'Successful clean energy installations'
                },
                {
                  value: 98,
                  suffix: '%',
                  title: 'Plant Efficiency',
                  desc: 'High biological process uptime'
                },
                {
                  value: 100,
                  suffix: 'K+',
                  title: 'Tons Waste Processed',
                  desc: 'Organic biomass recycled safely'
                },
                {
                  value: 50,
                  suffix: ' MW+',
                  title: 'Energy Generated',
                  desc: 'Renewable power and Bio-CNG produced'
                }
              ].map((stat, i) => (
                <div key={i} className="flex gap-4 p-4 rounded-2xl bg-[#F8FAFC] hover:bg-white hover:shadow-lg border border-gray-100 hover:border-primary/10 transition-all duration-300">
                  <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-primary/10 text-primary shrink-0 font-heading font-extrabold text-lg">
                    <Counter value={stat.value} suffix={stat.suffix} />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-sm text-dark">{stat.title}</h4>
                    <p className="font-sans text-xs text-gray-500 mt-1 leading-relaxed">{stat.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div> */}

        <UniqueDivider />

        {/* ==========================================
            2ND SECTION: PROCESS SECTION (MOVED UP)
            ========================================== */}
        <section ref={processSectionRef} className="relative py-24 bg-white overflow-hidden z-10">
          {/* Floating Background Effects (Leaves) */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-[0.06] z-0">
            <div className="absolute top-[10%] left-[5%] animate-float" style={{ animationDelay: '0s' }}>
              <Leaf className="h-8 w-8 text-primary" />
            </div>
            <div className="absolute top-[25%] right-[8%] animate-float" style={{ animationDelay: '1.5s' }}>
              <Leaf className="h-6 w-6 text-secondary" />
            </div>
            <div className="absolute bottom-[20%] left-[12%] animate-float" style={{ animationDelay: '3s' }}>
              <Leaf className="h-7 w-7 text-primary" />
            </div>
            <div className="absolute bottom-[10%] right-[15%] animate-float" style={{ animationDelay: '4.5s' }}>
              <Leaf className="h-5 w-5 text-secondary" />
            </div>
          </div>

          <div className="max-w-[1440px] mx-auto px-6 md:px-12 relative z-10">
            {/* Header */}
            <div className="text-center max-w-3xl mx-auto mb-20 select-none">
              <span className="process-badge text-secondary font-sans text-xs font-bold uppercase tracking-widest mb-3 block opacity-0">
                Our Process
              </span>
              <h2 ref={headingRef} className="process-heading font-heading font-extrabold text-3xl md:text-4xl lg:text-5xl text-dark mb-4">
                {"From Waste to Clean Energy".split(' ').map((word, i) => (
                  <span key={i} className="inline-block mr-2 opacity-0 reveal-word">
                    {word}
                  </span>
                ))}
              </h2>
              <p className="process-desc font-sans text-base md:text-lg text-gray-500 opacity-0">
                We employ a structured engineering and biological methodology to capture, digest, upgrade, and distribute clean renewable bioenergy.
              </p>
            </div>

            {/* Timeline Container (6 Columns) */}
            <div className="relative min-w-[1000px] lg:min-w-0 py-8">
              {/* Connecting Line Track */}
              <div className="absolute top-16 left-[8.3%] right-[8.3%] h-1 bg-gray-100 -z-10 rounded-full overflow-hidden">
                {/* Glowing Line Fill */}
                <div 
                  ref={progressBarRef} 
                  className="h-full bg-gradient-to-r from-primary to-secondary w-0 origin-left"
                />
              </div>

              <div className="grid grid-cols-6 gap-6 relative z-10">
                {[
                  { num: '01', title: 'Waste Collection', desc: 'Sourcing agricultural residue, food waste, and organic biomass.', icon: Leaf },
                  { num: '02', title: 'Waste Processing', desc: 'Substrate mechanical processing and slurry formulation.', icon: Sliders },
                  { num: '03', title: 'Anaerobic Digestion', desc: 'Biological fermentation in heating digesters with mixing.', icon: FlaskConical },
                  { num: '04', title: 'Biogas Production', desc: 'Continuous production of raw methane gas.', icon: Flame },
                  { num: '05', title: 'Biomethane Purification', desc: 'Purifying biogas to 99% pure compressed biomethane.', icon: Wind },
                  { num: '06', title: 'Energy Distribution', desc: 'Injecting upgraded biomethane to grid or cylinder bottling.', icon: Zap }
                ].map((step, idx) => (
                  <div key={idx} className="group/step flex flex-col items-center text-center">
                    {/* Step Marker Circle */}
                    <div 
                      className="process-step-node relative flex items-center justify-center h-16 w-16 rounded-full bg-white border-2 border-gray-200 text-gray-400 shadow-sm transition-all duration-300 z-10 group-hover/step:scale-115"
                      style={{ willChange: 'transform, border-color, box-shadow, background-color, color' }}
                    >
                      <step.icon className="h-6 w-6 step-icon transition-transform duration-300 group-hover/step:rotate-12" />
                    </div>

                    {/* Step Card */}
                    <div 
                      className="process-step-card opacity-0 mt-8 w-full h-full"
                      style={{ willChange: 'opacity, transform' }}
                    >
                      <ThreeDTilt maxRotate={5} className="h-full rounded-2xl">
                        <div className="bg-white border border-gray-100 group-hover/step:border-primary/30 p-6 rounded-2xl shadow-sm group-hover/step:shadow-xl group-hover/step:-translate-y-2 transition-all duration-300 flex flex-col items-center h-full">
                          {/* Step Number Tag */}
                          <span className="font-heading font-extrabold text-xs text-secondary tracking-widest uppercase mb-3 block">
                            Step {step.num}
                          </span>
                          
                          {/* Title */}
                          <h4 className="font-heading font-bold text-base text-dark mb-2">
                            {step.title}
                          </h4>
                          
                          {/* Description */}
                          <p className="font-sans text-xs text-gray-500 leading-relaxed">
                            {step.desc}
                          </p>
                        </div>
                      </ThreeDTilt>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <UniqueDivider />

        {/* ==========================================
            CORE DIVISIONS: 4 ALTERNATING SECTIONS
            Bio Energy | Bio Fertilizers | R&D | Our Projects
            ========================================== */}
        <section id="core-divisions" className="py-12 bg-white">
          <div className="max-w-[1440px] mx-auto px-6 md:px-12 text-center mb-8">
            <ScrollReveal>
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-secondary/10 border border-secondary/20 text-primary text-xs font-bold uppercase tracking-wider mb-3">
                <Leaf className="h-3.5 w-3.5 text-secondary" />
                <span>Our Core Divisions &amp; Solutions</span>
              </div>
              <h2 className="font-heading font-extrabold text-3xl md:text-5xl text-dark tracking-tight mb-4">
                Engineering a Greener, Cleaner Tomorrow
              </h2>
              <p className="font-sans text-base md:text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
                Discover Sphoorthi Bioenergy&apos;s integrated capabilities spanning clean Bio-CNG fuels, biological soil fertility, applied research, and turnkey commercial projects.
              </p>
            </ScrollReveal>
          </div>

          <div className="divide-y divide-gray-100">
            {featuredSectionsData.map((section, idx) => (
              <AlternatingFeatureSection
                key={section.id}
                section={section}
                index={idx}
              />
            ))}
          </div>
        </section>

        <UniqueDivider />

        {/* ==========================================
            5TH SECTION: SUSTAINABILITY SECTION
            ========================================== */}
        <section className="py-24 max-w-[1440px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="lg:col-span-5 flex flex-col items-start">
              <ScrollReveal>
                <span className="text-secondary font-sans text-xs font-bold uppercase tracking-widest mb-3 block">
                  Sustainability
                </span>
                <h2 ref={sustainabilityHeadingRef} className="font-heading font-extrabold text-3xl md:text-4xl lg:text-5xl text-dark leading-tight mb-6 opacity-0">
                  Creating a Greener Future Through Bio Energy
                </h2>
                <p className="font-sans text-base md:text-lg text-gray-500 leading-relaxed">
                  Every Spoorty Bio Energy project contributes toward reducing carbon emissions, recycling organic waste, and promoting circular economy principles. We track our impact continuously.
                </p>
              </ScrollReveal>
            </div>

            {/* Right Metrics Grid */}
            <div className="lg:col-span-7">
              <ScrollReveal>
                <div className="relative rounded-3xl bg-dark text-white p-8 md:p-12 overflow-hidden shadow-2xl border border-primary/20">
                  <div className="absolute inset-0 bg-grid-pattern opacity-5" />
                  <div className="absolute top-0 right-0 w-80 h-80 bg-primary/20 rounded-full blur-[100px] pointer-events-none" />
                  
                  <div className="relative z-10 grid grid-cols-1 sm:grid-cols-3 gap-8">
                    {[
                      { value: 250, suffix: 'K+', label: 'CO₂ Emissions Reduced (Tons)' },
                      { value: 100, suffix: 'K+', label: 'Tons Organic Waste Recycled' },
                      { value: 50, suffix: ' MW+', label: 'Renewable Energy Generated' }
                    ].map((metric, idx) => (
                      <div key={idx} className="flex flex-col items-center justify-center text-center py-4">
                        <span className="font-heading font-extrabold text-3xl md:text-4xl text-secondary mb-2 tracking-tight">
                          <Counter value={metric.value} suffix={metric.suffix} />
                        </span>
                        <span className="font-sans text-xs md:text-sm text-gray-400 font-medium leading-tight max-w-[160px]">
                          {metric.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        <UniqueDivider />

        {/* ==========================================
            6TH SECTION: INDUSTRIES SECTION
            ========================================== */}
        <section className="py-24 bg-[#F8FAFC]">
          <div className="max-w-[1440px] mx-auto px-6 md:px-12">
            {/* Header */}
            <div className="text-center max-w-3xl mx-auto mb-16">
              <ScrollReveal>
                <span className="text-secondary font-sans text-xs font-bold uppercase tracking-widest mb-3 block">
                  Industries We Serve
                </span>
                <h2 className="font-heading font-extrabold text-3xl md:text-4xl lg:text-5xl text-dark mb-4">
                  Tailored Solutions for Diverse Sectors
                </h2>
                <p className="font-sans text-base md:text-lg text-gray-500">
                  Providing sustainable bioenergy energy infrastructure across agriculture, municipal corporations, and industrial sectors.
                </p>
              </ScrollReveal>
            </div>

            {/* Grid layout */}
            <div ref={industriesGridRef} className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { name: 'Agriculture', icon: Leaf },
                { name: 'Food Processing', icon: Factory },
                { name: 'Municipal Waste', icon: Shield },
                { name: 'Dairy Farms', icon: Flame },
                { name: 'Sugar Industries', icon: Layers },
                { name: 'Distilleries', icon: Sliders },
                { name: 'Industrial Manufacturing', icon: Cpu },
                { name: 'Smart Cities', icon: Compass }
              ].map((ind, index) => (
                <div key={index} className="h-full">
                  <ThreeDTilt maxRotate={5} className="rounded-2xl h-full">
                    <div className="industries-card-inner p-6 rounded-2xl bg-white border border-gray-100 hover:border-primary/20 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-center justify-center text-center h-full opacity-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-primary/5 text-primary mb-4 shrink-0">
                        <ind.icon className="h-6 w-6" />
                      </div>
                      <h4 className="font-heading font-bold text-sm text-dark">{ind.name}</h4>
                    </div>
                  </ThreeDTilt>
                </div>
              ))}
            </div>
          </div>
        </section>

        <UniqueDivider />

        {/* ==========================================
            7TH SECTION: WHY CHOOSE US SECTION
            ========================================== */}
        <section className="relative py-24 bg-white overflow-hidden z-10">
          {/* Floating Objects */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-[0.06] z-0">
            <div className="absolute top-[15%] left-[8%] animate-float" style={{ animationDelay: '0.5s' }}>
              <Layers className="h-10 w-10 text-primary" />
            </div>
            <div className="absolute top-[40%] right-[10%] animate-float" style={{ animationDelay: '2.5s' }}>
              <Cpu className="h-8 w-8 text-secondary" />
            </div>
            <div className="absolute bottom-[20%] left-[5%] animate-float" style={{ animationDelay: '1s' }}>
              <Flame className="h-12 w-12 text-primary" />
            </div>
            <div className="absolute bottom-[10%] right-[6%] animate-float" style={{ animationDelay: '4s' }}>
              <Zap className="h-9 w-9 text-secondary" />
            </div>
          </div>

          <div className="max-w-[1440px] mx-auto px-6 md:px-12 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              {/* Left Image */}
              <div className="lg:col-span-6">
                <ScrollReveal>
                  <ThreeDTilt maxRotate={5} className="rounded-3xl border border-gray-200 shadow-2xl">
                    <div className="relative h-[400px] md:h-[450px] w-full overflow-hidden">
                      <img 
                        src="/images/engineer.jpg" 
                        alt="Advanced Bioenergy Engineering" 
                        className="object-cover h-full w-full"
                      />
                      <div className="absolute inset-0 bg-dark/15" />
                    </div>
                  </ThreeDTilt>
                </ScrollReveal>
              </div>

              {/* Right Content */}
              <div className="lg:col-span-6">
                <ScrollReveal>
                  <span className="text-secondary font-sans text-xs font-bold uppercase tracking-widest mb-3 block">
                    Why Choose Spoorty
                  </span>
                  <h2 ref={whyChooseHeadingRef} className="font-heading font-extrabold text-3xl md:text-4xl text-dark leading-tight mb-6 select-none">
                    {"Pioneering High-Efficiency Bioenergy Solutions".split(' ').map((word, wordIdx) => (
                      <span key={`why-w-${wordIdx}`} className="inline-block whitespace-nowrap">
                        {word.split('').map((char, charIdx) => (
                          <span key={`why-c-${wordIdx}-${charIdx}`} className="inline-block reveal-char origin-bottom opacity-0">
                            {char}
                          </span>
                        ))}
                      </span>
                    )).reduce((acc, curr, i) => i === 0 ? [curr] : [...acc, " ", curr], [] as React.ReactNode[])}
                  </h2>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {[
                      { title: '98% Plant Efficiency', desc: 'Optimized process design guarantees maximum uptime and methane yield.' },
                      { title: 'Advanced Engineering', desc: 'Detailed 3D design plans, fluid dynamics simulation, and strict sizing.' },
                      { title: 'Sustainable Technologies', desc: 'Patented gas membrane purification systems reducing emissions.' },
                      { title: '24/7 Technical Support', desc: 'Smart PLC telemetry alerts and biological advice round the clock.' },
                      { title: 'Experienced Professionals', desc: 'A dedicated team of senior energy engineers, scientists, and planners.' },
                      { title: 'Environment Friendly', desc: 'Full compliance with regional environmental standards and zero discharge.' }
                    ].map((item, idx) => (
                      <div key={idx} className="flex gap-3">
                        <CheckCircle2 className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-heading font-bold text-sm text-dark">{item.title}</h4>
                          <p className="font-sans text-xs text-gray-500 mt-1 leading-relaxed">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </section>

        <UniqueDivider />

        <UniqueDivider />

        {/* ==========================================
            9TH SECTION: CALL TO ACTION SECTION
            ========================================== */}
        <section className="py-16 max-w-[1440px] mx-auto px-6 md:px-12">
          <ScrollReveal>
            <div 
              className="relative rounded-3xl bg-dark text-white p-8 md:p-20 overflow-hidden shadow-2xl border border-primary/20 bg-cover bg-center"
              style={{ backgroundImage: "url('/images/hero.jpg')" }}
            >
              {/* Dark Green Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-dark/95 via-dark/90 to-primary/80" />
              <div className="absolute inset-0 bg-grid-pattern opacity-10" />

              <div className="relative z-10 max-w-2xl text-left">
                <h2 className="font-heading font-extrabold text-3xl md:text-5xl leading-tight mb-6 text-white">
                  Ready to Build a Sustainable Future?
                </h2>
                <p className="font-sans text-base md:text-lg text-gray-300 mb-8 leading-relaxed">
                  Partner with Spoorty Bio Energy for innovative bioenergy solutions that transform waste into valuable renewable resources.
                </p>
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                  <Link 
                    href="/contact" 
                    className="inline-flex items-center justify-center bg-secondary hover:bg-secondary/90 text-white font-sans font-semibold py-3.5 px-7 rounded-xl transition-all duration-200 shadow-lg shadow-secondary/20 hover:scale-[1.02] active:scale-95 text-center"
                  >
                    Contact Us
                  </Link>
                  <Link 
                    href="/contact" 
                    className="inline-flex items-center justify-center bg-transparent hover:bg-white/10 text-white font-sans font-semibold py-3.5 px-7 rounded-xl transition-all duration-200 border border-white/30 hover:border-white/50 active:scale-95 text-center"
                  >
                    Schedule Consultation
                  </Link>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </section>
      </main>

      <Footer />
    </>
  );
}
