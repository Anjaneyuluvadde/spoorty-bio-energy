'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';
import ScrollReveal from '@/components/ScrollReveal';
import ThreeDTilt from '@/components/ThreeDTilt';
import Counter from '@/components/Counter';
import { 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  Factory, 
  Building2, 
  Users 
} from 'lucide-react';

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <main className="flex-grow bg-[#F8FAFC]">
        {/* Page Header */}
        <PageHeader 
          title="About Sphoorthi Bioenergy"
          description="Pioneering commercial Bio-CNG, green hydrogen, and biological agriculture through innovative engineering, 30+ years of infrastructure heritage, and the transformative 3F model (Food, Fuel, Fertilizer)."
          breadcrumbs={[
            { name: 'Home', href: '/' },
            { name: 'About Us' }
          ]}
        />

        {/* Section 1: Corporate Profile & Origins (Section 2 UI Pattern) */}
        <section className="py-16 md:py-24 relative overflow-hidden bg-white border-b border-gray-100">
          {/* Ambient background glow */}
          <div className="absolute top-1/2 -translate-y-1/2 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[110px] pointer-events-none" />
          <div className="absolute bottom-0 left-10 w-80 h-80 bg-secondary/15 rounded-full blur-[100px] pointer-events-none" />

          <div className="max-w-[1440px] mx-auto px-6 md:px-12 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              
              {/* Left Column: Corporate Narrative, Highlights & Actions */}
              <div className="lg:col-span-7 flex flex-col items-start">
                <ScrollReveal yOffset={20} duration={0.6}>
                  {/* Eyebrow badge */}
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold uppercase tracking-wider mb-4">
                    <Building2 className="h-3.5 w-3.5 text-secondary" />
                    <span>Corporate Profile &amp; Origins [CIN: U06202MH2023PTC409933]</span>
                  </div>

                  {/* Section Heading with Highlight Word */}
                  <h2 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl text-dark leading-tight mb-5">
                    Engineering Rural Self-Reliance Through the <span className="text-primary">3F Model</span>
                  </h2>

                  {/* Proficient Corporate Description */}
                  <div className="space-y-4 font-sans text-base md:text-lg text-gray-600 leading-relaxed mb-6">
                    <p>
                      <strong className="text-dark font-semibold">Sphoorthi Bioenergy Private Limited (SBPL)</strong>, incorporated under the provisions of the Companies Act [2013], operates its registered headquarters in Nagpur, Maharashtra, and its corporate administration center in Banjara Hills, Hyderabad, Telangana.
                    </p>
                    <p>
                      Specializing in the commercial production of <strong className="text-dark font-semibold">Bio-CNG (Compressed Biogas)</strong>, <strong className="text-dark font-semibold">Green Hydrogen</strong>, and <strong className="text-dark font-semibold">Certified Organic Fertilizers</strong>, our focus is replacing imported fossil fuels (petrol, diesel, LPG) for transport vehicles, domestic households, power plants, and industrial boilers. By partnering with Farmer Producer Organizations (FPOs) to aggregate sustainable biomass (Napier grass, paddy straw, cow dung, and agro-residues), we build decentralized rural biofuel clusters that deliver lasting energy independence.
                    </p>
                  </div>

                  {/* 4 Structured Highlights Checkmark Pills */}
                  <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                    <div className="flex items-center gap-2.5 p-3.5 rounded-xl bg-gray-50 border border-gray-150 shadow-sm">
                      <CheckCircle2 className="h-4 w-4 text-secondary shrink-0" />
                      <span className="font-sans text-xs sm:text-sm font-semibold text-gray-800">
                        The 3F Vision: Self-Sufficiency in Food, Fuel &amp; Fertilizer
                      </span>
                    </div>

                    <div className="flex items-center gap-2.5 p-3.5 rounded-xl bg-gray-50 border border-gray-150 shadow-sm">
                      <CheckCircle2 className="h-4 w-4 text-secondary shrink-0" />
                      <span className="font-sans text-xs sm:text-sm font-semibold text-gray-800">
                        30+ Years Civil Partner: SS Builders &amp; Sphoorthi Promoters
                      </span>
                    </div>

                    <div className="flex items-center gap-2.5 p-3.5 rounded-xl bg-gray-50 border border-gray-150 shadow-sm">
                      <CheckCircle2 className="h-4 w-4 text-secondary shrink-0" />
                      <span className="font-sans text-xs sm:text-sm font-semibold text-gray-800">
                        Registered in Nagpur &amp; Admin Office in Hyderabad
                      </span>
                    </div>

                    <div className="flex items-center gap-2.5 p-3.5 rounded-xl bg-gray-50 border border-gray-150 shadow-sm">
                      <CheckCircle2 className="h-4 w-4 text-secondary shrink-0" />
                      <span className="font-sans text-xs sm:text-sm font-semibold text-gray-800">
                        7 Priority Bio-CBG Units (15 TPD) Under Development
                      </span>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap items-center gap-4">
                    <a
                      href="#leadership"
                      className="inline-flex items-center gap-2 bg-primary hover:bg-primary/95 text-white font-sans text-sm font-semibold py-3.5 px-7 rounded-xl transition-all shadow-md shadow-primary/20 hover:shadow-lg active:scale-95"
                    >
                      <span>Meet Our Leadership Team</span>
                      <ArrowRight className="h-4 w-4" />
                    </a>

                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 bg-white hover:bg-gray-50 text-dark border border-gray-200 font-sans text-sm font-semibold py-3.5 px-6 rounded-xl transition-all shadow-sm hover:border-primary/40"
                    >
                      <span>Corporate Contact</span>
                    </Link>
                  </div>
                </ScrollReveal>
              </div>

              {/* Right Column: 3D Tilted Card with High-Res Image & Frosted Glass Badge */}
              <div className="lg:col-span-5">
                <ScrollReveal yOffset={25} duration={0.6} delay={0.15}>
                  <ThreeDTilt maxRotate={5} className="rounded-3xl">
                    <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-gray-100 group transition-all duration-500 bg-white">
                      <div className="relative h-[380px] sm:h-[440px] w-full overflow-hidden">
                        <Image 
                          src="/images/about.jpg" 
                          alt="Sphoorthi Bioenergy Sustainable Agro-Energy Plantation" 
                          fill
                          priority
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 550px"
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/30 to-transparent" />
                        
                        {/* Top-Left Floating Pill */}
                        <div className="absolute top-5 left-5 inline-flex items-center gap-1.5 py-1.5 px-3.5 rounded-full bg-white/95 backdrop-blur-md text-primary text-xs font-semibold shadow-md border border-white/40">
                          <span className="h-2 w-2 rounded-full bg-secondary animate-pulse" />
                          <span>Companies Act [2013]</span>
                        </div>

                        {/* Top-Right Floating Pill */}
                        <div className="absolute top-5 right-5 inline-flex items-center gap-1.5 py-1 px-3 rounded-full bg-dark/75 backdrop-blur-md text-white text-[11px] font-medium border border-white/20">
                          <ShieldCheck className="h-3 w-3 text-secondary" />
                          <span>CIN: U06202MH2023PTC409933</span>
                        </div>

                        {/* Floating Frosted Glass Bottom Card */}
                        <div className="absolute bottom-6 left-6 right-6 p-5 sm:p-6 rounded-2xl bg-dark/80 backdrop-blur-md border border-white/15 text-white shadow-xl">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-xs font-semibold text-secondary tracking-wider uppercase">
                              Sphoorthi Bioenergy Private Limited
                            </span>
                            <span className="text-[11px] bg-primary/40 px-2.5 py-0.5 rounded-full border border-secondary/30">
                              Active Pipeline
                            </span>
                          </div>
                          <h3 className="font-heading font-bold text-base sm:text-lg leading-snug">
                            Transforming Agricultural Waste into High-Yield Fuel &amp; Soil Nutrition
                          </h3>
                        </div>
                      </div>
                    </div>
                  </ThreeDTilt>
                </ScrollReveal>
              </div>

            </div>
          </div>
        </section>

        {/* Section 2: Key Leadership Team & Board of Directors */}
        <section id="leadership" className="py-20 md:py-28 bg-[#F8FAFC] scroll-mt-12">
          <div className="max-w-[1440px] mx-auto px-6 md:px-12">
            
            {/* Leadership Section Header */}
            <div className="text-center max-w-3xl mx-auto mb-16">
              <ScrollReveal>
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold uppercase tracking-wider mb-3">
                  <Users className="h-3.5 w-3.5 text-secondary" />
                  <span>Board of Directors &amp; Key Leadership</span>
                </div>
                <h2 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl text-dark leading-tight mb-4">
                  Pioneering Minds Behind <span className="text-primary">Sphoorthi Bioenergy</span>
                </h2>
                <p className="font-sans text-base sm:text-lg text-gray-600 leading-relaxed">
                  Our leadership combines over four decades of large-scale civil infrastructure execution with world-class computational biology, biotechnology engineering, and industrial microbiology.
                </p>
              </ScrollReveal>
            </div>

            {/* Top 3 Primary Leaders */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
              
              {/* Leader 1: M. Vishnu Vardhan Rao */}
              <ScrollReveal delay={0.05}>
                <div className="group flex flex-col h-full bg-white rounded-3xl overflow-hidden border border-slate-200/90 hover:border-primary/50 shadow-sm hover:shadow-xl transition-all duration-300">
                  {/* Clean Image Box */}
                  <div className="relative w-full h-80 sm:h-88 bg-gradient-to-b from-slate-50 to-slate-100 overflow-hidden shrink-0">
                    <Image
                      src="/images/team/vishnu_vardhan_rao.png"
                      alt="M. Vishnu Vardhan Rao - Chairman & Managing Director"
                      fill
                      priority
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 420px"
                      className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105"
                    />
                    
                    {/* Top-Left Floating Badge */}
                    <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-md text-primary text-xs font-bold shadow-md border border-white/60">
                      <span className="h-2 w-2 rounded-full bg-secondary animate-pulse" />
                      <span>Founder Director</span>
                    </div>

                    {/* Top-Right Experience Badge */}
                    <div className="absolute top-4 right-4 inline-flex items-center px-3 py-1 rounded-full bg-dark/80 backdrop-blur-md text-white text-[11px] font-semibold border border-white/20 shadow-sm">
                      <span>41+ Years Experience</span>
                    </div>
                  </div>

                  {/* Content Box */}
                  <div className="p-6 sm:p-7 flex flex-col flex-grow justify-between bg-white border-t border-slate-100">
                    <div>
                      {/* Name & Designation */}
                      <div className="mb-3">
                        <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-dark group-hover:text-primary transition-colors leading-snug">
                          M. Vishnu Vardhan Rao
                        </h3>
                        <p className="text-xs sm:text-sm font-semibold text-secondary mt-1">
                          Chairman &amp; Managing Director
                        </p>
                      </div>

                      {/* Decreased / Condensed Bio */}
                      <p className="font-sans text-xs sm:text-sm text-gray-600 leading-relaxed mb-4">
                        Visionary entrepreneur bringing over 41 years of diversified leadership across renewable energy, civil infrastructure, and technology. He is the chief architect of SBPL&apos;s 3F model (Fuel, Fertilizer, Food), steering commercial CBG incubation, rural feedstock aggregation, and nationwide clean fuel clusters.
                      </p>
                    </div>

                    <div className="pt-4 border-t border-slate-100 flex flex-wrap gap-2">
                      <span className="px-2.5 py-1 rounded-full bg-primary/10 text-primary text-[11px] font-semibold">3F Visionary</span>
                      <span className="px-2.5 py-1 rounded-full bg-secondary/20 text-dark text-[11px] font-semibold">Civil Infrastructure</span>
                      <span className="px-2.5 py-1 rounded-full bg-gray-100 text-gray-700 text-[11px] font-semibold">SATAT CBG Lead</span>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              {/* Leader 2: Dr. Peera Kutagolla, Ph.D., PDF */}
              <ScrollReveal delay={0.12}>
                <div className="group flex flex-col h-full bg-white rounded-3xl overflow-hidden border border-slate-200/90 hover:border-primary/50 shadow-sm hover:shadow-xl transition-all duration-300">
                  {/* Clean Image Box - Updated with user's new portrait */}
                  <div className="relative w-full h-80 sm:h-88 bg-gradient-to-b from-slate-50 to-slate-100 overflow-hidden shrink-0">
                    <Image
                      src="/images/team/dr_peera_kutagolla.jpg"
                      alt="Dr. Peera Kutagolla - Managing Director & Founder Director (R&D)"
                      fill
                      priority
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 420px"
                      className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105"
                    />
                    
                    {/* Top-Left Floating Badge */}
                    <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-md text-primary text-xs font-bold shadow-md border border-white/60">
                      <span className="h-2 w-2 rounded-full bg-secondary animate-pulse" />
                      <span>Chief Scientist (R&amp;D)</span>
                    </div>

                    {/* Top-Right Experience Badge */}
                    <div className="absolute top-4 right-4 inline-flex items-center px-3 py-1 rounded-full bg-dark/80 backdrop-blur-md text-white text-[11px] font-semibold border border-white/20 shadow-sm">
                      <span>18+ Years Research</span>
                    </div>
                  </div>

                  {/* Content Box */}
                  <div className="p-6 sm:p-7 flex flex-col flex-grow justify-between bg-white border-t border-slate-100">
                    <div>
                      {/* Name & Designation */}
                      <div className="mb-3">
                        <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-dark group-hover:text-primary transition-colors leading-snug">
                          Dr. Peera Kutagolla
                        </h3>
                        <p className="text-xs sm:text-sm font-semibold text-secondary mt-1">
                          Managing Director &amp; Founder Director (R&amp;D)
                        </p>
                      </div>

                      {/* Decreased / Condensed Bio */}
                      <p className="font-sans text-xs sm:text-sm text-gray-600 leading-relaxed mb-4">
                        Holding a Ph.D. in Computational Biology &amp; Bioinformatics followed by Post-Doctoral Fellowship research, Dr. Kutagolla brings 18+ years of cutting-edge bioenergy innovation. He spearheads SBPL&apos;s proprietary 4-stage digesters, 3G/4G Super Napier grass breeding, and Green Hydrogen R&amp;D pathways.
                      </p>
                    </div>

                    <div className="pt-4 border-t border-slate-100 flex flex-wrap gap-2">
                      <span className="px-2.5 py-1 rounded-full bg-primary/10 text-primary text-[11px] font-semibold">Ph.D. &amp; PDF</span>
                      <span className="px-2.5 py-1 rounded-full bg-secondary/20 text-dark text-[11px] font-semibold">Microbial Biotech</span>
                      <span className="px-2.5 py-1 rounded-full bg-gray-100 text-gray-700 text-[11px] font-semibold">Green Hydrogen R&amp;D</span>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              {/* Leader 3: Dr. Srinivas Jukuri, Ph.D. */}
              <ScrollReveal delay={0.19}>
                <div className="group flex flex-col h-full bg-white rounded-3xl overflow-hidden border border-slate-200/90 hover:border-primary/50 shadow-sm hover:shadow-xl transition-all duration-300">
                  {/* Clean Image Box */}
                  <div className="relative w-full h-80 sm:h-88 bg-slate-900 overflow-hidden shrink-0">
                    <Image
                      src="/images/team/dr_srinivas_jukuri.jpg"
                      alt="Dr. Srinivas Jukuri - Director EPC, Operations & Maintenance"
                      fill
                      priority
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 420px"
                      className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105"
                    />
                    
                    {/* Top-Left Floating Badge */}
                    <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-md text-primary text-xs font-bold shadow-md border border-white/60">
                      <span className="h-2 w-2 rounded-full bg-secondary animate-pulse" />
                      <span>EPC &amp; O&amp;M Director</span>
                    </div>

                    {/* Top-Right Experience Badge */}
                    <div className="absolute top-4 right-4 inline-flex items-center px-3 py-1 rounded-full bg-dark/80 backdrop-blur-md text-white text-[11px] font-semibold border border-white/20 shadow-sm">
                      <span>15+ Years Biogas &amp; CBG</span>
                    </div>
                  </div>

                  {/* Content Box */}
                  <div className="p-6 sm:p-7 flex flex-col flex-grow justify-between bg-white border-t border-slate-100">
                    <div>
                      {/* Name & Designation */}
                      <div className="mb-3">
                        <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-dark group-hover:text-primary transition-colors leading-snug">
                          Dr. Srinivas Jukuri
                        </h3>
                        <p className="text-xs sm:text-sm font-semibold text-secondary mt-1">
                          Director — EPC, Operations &amp; Maintenance
                        </p>
                      </div>

                      {/* Decreased / Condensed Bio */}
                      <p className="font-sans text-xs sm:text-sm text-gray-600 leading-relaxed mb-4">
                        Distinguished Biogas &amp; CBG technologist holding a Ph.D. in Biotechnology Engineering from JNTU Hyderabad with 15+ years of turnkey EPC leadership. He is the pioneer of proprietary AI-enabled RBHM biodigester monitoring, ensuring optimal methane yield, zero acidosis, and 98%+ plant availability.
                      </p>
                    </div>

                    <div className="pt-4 border-t border-slate-100 flex flex-wrap gap-2">
                      <span className="px-2.5 py-1 rounded-full bg-primary/10 text-primary text-[11px] font-semibold">Ph.D. Biotech Engg</span>
                      <span className="px-2.5 py-1 rounded-full bg-secondary/20 text-dark text-[11px] font-semibold">RBHM AI Telemetry</span>
                      <span className="px-2.5 py-1 rounded-full bg-gray-100 text-gray-700 text-[11px] font-semibold">Turnkey EPC Lead</span>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

            </div>

          </div>
        </section>

        {/* Section 3: Construction Partners & Strategic Alliances */}
        <section className="py-20 bg-[#F8FAFC]">
          <div className="max-w-[1440px] mx-auto px-6 md:px-12">
            <div className="bg-white p-8 md:p-12 rounded-3xl border border-gray-200 shadow-sm">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-8 flex flex-col gap-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/15 text-primary text-xs font-bold uppercase tracking-wider w-fit border border-secondary/30">
                    <Factory className="h-3.5 w-3.5 text-secondary" />
                    <span>Premier Construction Partners</span>
                  </div>
                  <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-dark">
                    30+ Years of Heavy Civil Infrastructure Excellence
                  </h3>
                  <p className="font-sans text-sm md:text-base text-gray-600 leading-relaxed">
                    Our associated construction entities, <strong className="text-dark">SS Builders</strong> and <strong className="text-dark">Sphoorthi Promoters</strong>, bring over 30 years of premier civil construction track record. Led by Mr. M. Srinivas Rao in association with Chairman Mr. M. Vishnu Vardhan Rao, the group has successfully executed commercial CBG digester constructions for national energy giants including <strong className="text-dark">Reliance Biogas</strong>, <strong className="text-dark">GPS Renewables</strong>, and <strong className="text-dark">Gurner Renewables</strong>.
                  </p>
                  <p className="font-sans text-sm text-gray-600 leading-relaxed">
                    Their heavy infrastructure portfolio also encompasses the Bango Dam Project in Madhya Pradesh, mining infrastructure for Western Coalfields Limited (WCL), and major railway gauge conversion projects across Central India.
                  </p>
                </div>

                <div className="lg:col-span-4 bg-gray-50 p-6 rounded-2xl border border-gray-200 flex flex-col gap-4">
                  <h4 className="font-heading font-bold text-sm text-dark uppercase tracking-wider border-b border-gray-200 pb-2">
                    Key Project Highlights
                  </h4>
                  <div className="space-y-3 text-xs text-gray-700">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-500">First Phase Priority Pipeline:</span>
                      <strong className="text-dark">7 Units × 15 TPD</strong>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-500">Pipeline Location:</span>
                      <strong className="text-dark">Telangana (JV / SPV)</strong>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-500">Execution Moratorium:</span>
                      <strong className="text-dark">15–18 Months</strong>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-500">Central Subsidy:</span>
                      <strong className="text-secondary font-bold">₹2 Cr / TPD (SATAT)</strong>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Statistics / Verified Impact Metrics */}
        <section className="py-20 max-w-[1440px] mx-auto px-6 md:px-12 text-center">
          <ScrollReveal>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              {[
                { value: 41, suffix: '+', label: 'Years Leadership Heritage' },
                { value: 30, suffix: '+', label: 'Years Civil EPC Heritage' },
                { value: 15, suffix: ' TPD', label: 'Standard CBG Unit Scale' },
                { value: 98, suffix: '%+', label: 'Automotive Methane Purity' }
              ].map((stat, idx) => (
                <div key={idx} className="flex flex-col items-center p-8 bg-white border border-gray-200/90 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
                  <span className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl text-primary mb-2">
                    <Counter value={stat.value} suffix={stat.suffix} className="text-primary font-extrabold" />
                  </span>
                  <span className="font-sans text-xs sm:text-sm text-gray-600 font-semibold">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </section>

      </main>

      <Footer />
    </>
  );
}
