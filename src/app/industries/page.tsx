'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';
import ScrollReveal from '@/components/ScrollReveal';
import { 
  Sprout, Milk, Utensils, Droplet, Trash2, Settings, 
  ArrowRight, CheckCircle2 
} from 'lucide-react';

const industries = [
  {
    icon: Sprout,
    title: 'Agriculture',
    desc: 'Transforming agricultural crop residues, straw, silage, and energy crops into clean biogas and organic digestate fertilizer.',
    feedstocks: ['Rice straw & wheat chaff', 'Maize & grass silage', 'Horticulture waste'],
    benefits: ['Zero crop residue burning', 'High-quality bio-fertilizer', 'Soil nutrient replenishment']
  },
  {
    icon: Milk,
    title: 'Dairy & Livestock',
    desc: 'Managing livestock dung, poultry litter, and dairy farm wash wastewater with anaerobic digesters to generate electricity and control odor.',
    feedstocks: ['Cow dung & poultry manure', 'Dairy processing washwater', 'Bedding organic scrap'],
    benefits: ['Pathogen and odor reduction', 'Local grid power generation', 'Liquid organic compost source']
  },
  {
    icon: Utensils,
    title: 'Food Processing',
    desc: 'Converting packing plant organic scrap, beverage waste, starch, and slaughterhouse waste into reliable plant process steam.',
    feedstocks: ['Fruit & vegetable peelings', 'Starch & confectionery wash', 'Brewery & distillery spent grain'],
    benefits: ['Lower municipal landfill costs', 'On-site steam generation', 'Enhanced corporate sustainability']
  },
  {
    icon: Droplet,
    title: 'Sugar & Distilleries',
    desc: 'Fermenting pressmud, bagasse fractions, and wash liquor effluent to generate high-yield biomethane and capture CO2.',
    feedstocks: ['Pressmud & filter cake', 'Spent wash & distillery effluent', 'Cane wash water solids'],
    benefits: ['Effective effluent treatment', 'Captive power self-sufficiency', 'Captured bio-CO2 commercialization']
  },
  {
    icon: Trash2,
    title: 'Municipal Waste',
    desc: 'Processing sorted organic municipal solid waste (MSW) and hotel food scraps to fuel municipal vehicles and produce clean biomethane.',
    feedstocks: ['Household food waste', 'Market vegetable waste', 'Hotel & institutional leftovers'],
    benefits: ['Landfill diversion compliance', 'Bio-CNG vehicle fuel sourcing', 'Clean green city initiatives']
  },
  {
    icon: Settings,
    title: 'Industrial Manufacturing',
    desc: 'Treating paper mill sludge, pharmaceutical organics, and industrial wastewater chemical oxygen demand (COD) through high-rate reactors.',
    feedstocks: ['Paper & pulp sludge', 'Pharmaceutical chemical waste', 'Textile wastewater starch'],
    benefits: ['Strict environmental compliance', 'Heat recovery for processes', 'Reduced industrial fuel costs']
  }
];

export default function IndustriesPage() {
  return (
    <>
      <Navbar />

      <main className="flex-grow bg-[#F8FAFC]">
        {/* Page Header */}
        <PageHeader 
          title="Industries We Serve"
          description="Delivering sustainable energy systems and circular economy infrastructure across major economic sectors."
          breadcrumbs={[
            { name: 'Home', href: '/' },
            { name: 'Industries' }
          ]}
        />

        {/* Industries Grid */}
        <section className="py-24 max-w-[1440px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((ind, idx) => (
              <ScrollReveal key={idx} delay={idx * 0.05}>
                <div className="h-full bg-white p-8 rounded-3xl border border-gray-100 hover:border-primary/20 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
                  <div>
                    {/* Header Icon */}
                    <div className="flex items-center justify-center h-14 w-14 rounded-2xl bg-[#F8FAFC] group-hover:bg-primary/10 text-primary group-hover:text-secondary shadow-sm transition-all mb-8 border border-gray-100">
                      <ind.icon className="h-7 w-7" />
                    </div>

                    {/* Title */}
                    <h3 className="font-heading font-extrabold text-2xl text-dark mb-4 group-hover:text-primary transition-colors">
                      {ind.title}
                    </h3>

                    {/* Description */}
                    <p className="font-sans text-sm text-gray-500 leading-relaxed mb-6">
                      {ind.desc}
                    </p>

                    {/* Feedstock Details */}
                    <div className="mb-6">
                      <h4 className="font-heading font-bold text-xs uppercase tracking-wider text-primary mb-3">
                        Target Feedstocks
                      </h4>
                      <ul className="space-y-2 text-sm text-gray-600 font-sans">
                        {ind.feedstocks.map((item, fIdx) => (
                          <li key={fIdx} className="flex items-center gap-2">
                            <span className="h-1.5 w-1.5 rounded-full bg-secondary shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Benefits Details */}
                    <div className="border-t border-gray-100 pt-6 mb-8">
                      <h4 className="font-heading font-bold text-xs uppercase tracking-wider text-secondary mb-3">
                        Key Benefits
                      </h4>
                      <ul className="space-y-2 text-sm text-gray-600 font-sans">
                        {ind.benefits.map((benefit, bIdx) => (
                          <li key={bIdx} className="flex items-center gap-2">
                            <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* CTA link */}
                  <a 
                    href="mailto:info@spoortybioenergy.com" 
                    className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:text-secondary transition-colors"
                  >
                    <span>Request Industry Case Study</span>
                    <ArrowRight className="h-4 w-4" />
                  </a>
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
