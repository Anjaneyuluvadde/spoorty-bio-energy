'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';
import ScrollReveal from '@/components/ScrollReveal';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

const articles = [
  {
    id: 1,
    image: '/images/hero.jpg',
    category: 'Circular Economy',
    date: 'June 25, 2026',
    readTime: '6 min read',
    title: 'How Bio-CNG Production Closes the Municipal Waste Loop',
    desc: 'An exploration of urban waste processing systems that convert biodegradable municipal trash into clean, high-grade CNG fuel for city buses.'
  },
  {
    id: 2,
    image: '/images/biomethane.jpg',
    category: 'Carbon Offset',
    date: 'May 18, 2026',
    readTime: '5 min read',
    title: 'Tracking Scope 1 & 2 Emissions in Organic Digestion Plants',
    desc: 'Detailed methodologies for measuring and mitigating fugitive methane emissions while optimizing net carbon offset values.'
  },
  {
    id: 3,
    image: '/images/about.jpg',
    category: 'Soil Health',
    date: 'April 09, 2026',
    readTime: '4 min read',
    title: 'The Nutrient-Rich Future of Organic digestate Fertilizers',
    desc: 'How scientific composting of biogas plant sludge creates mineral-rich bio-fertilizers that restore soil carbon and crop health.'
  },
  {
    id: 4,
    image: '/images/engineer.jpg',
    category: 'Agriculture',
    date: 'March 14, 2026',
    readTime: '8 min read',
    title: 'Decarbonizing Dairy Cooperatives with Biogas Boilers',
    desc: 'A case study detailing how farm-scale anaerobic digesters provide continuous clean heat for agricultural milk pasteurization processes.'
  },
  {
    id: 5,
    image: '/images/hero.jpg',
    category: 'Energy Recovery',
    date: 'February 22, 2026',
    readTime: '5 min read',
    title: 'Advanced Membrane Separation for 99% Pure Biomethane',
    desc: 'Comparing the electrical footprint and methane recovery efficiency of modular membrane upgrading stations.'
  },
  {
    id: 6,
    image: '/images/biomethane.jpg',
    category: 'Zero Waste',
    date: 'January 10, 2026',
    readTime: '7 min read',
    title: 'Industrial Distillery Wastewater treatment case studies',
    desc: 'How sugar and distillery factories leverage anaerobic digestion of high-COD waste streams to generate self-sustaining plant energy.'
  }
];

export default function SustainabilityPage() {
  return (
    <>
      <Navbar />

      <main className="flex-grow bg-[#F8FAFC]">
        {/* Page Header */}
        <PageHeader 
          title="Sustainability & Impact"
          description="Every Spoorty Bio Energy project promotes circular economy principles, reduces carbon footprint, and recycles organic waste."
          breadcrumbs={[
            { name: 'Home', href: '/' },
            { name: 'Sustainability' }
          ]}
        />

        {/* Sustainability Articles Grid */}
        <section className="py-24 max-w-[1440px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, idx) => (
              <ScrollReveal key={article.id} delay={idx * 0.05}>
                <article className="bg-white rounded-3xl overflow-hidden border border-gray-100 hover:border-primary/20 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full group">
                  {/* Article Banner */}
                  <div className="relative h-56 overflow-hidden shrink-0">
                    <img 
                      src={article.image} 
                      alt={article.title} 
                      className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-dark/20 group-hover:bg-dark/10 transition-all duration-300" />
                    
                    {/* Floating Category Badge */}
                    <div className="absolute top-4 left-4 bg-primary text-white font-sans text-xs font-bold py-1 px-3 rounded-lg shadow-sm">
                      {article.category}
                    </div>
                  </div>

                  {/* Article Info */}
                  <div className="p-6 md:p-8 flex-grow flex flex-col justify-between">
                    <div>
                      {/* Meta */}
                      <div className="flex items-center gap-4 text-xs text-gray-400 font-sans font-medium mb-3">
                        <span className="flex items-center gap-1">
                          <Calendar className="h-3.5 w-3.5" />
                          {article.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-3.5 w-3.5" />
                          {article.readTime}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="font-heading font-extrabold text-xl text-dark mb-3 leading-snug group-hover:text-primary transition-colors">
                        {article.title}
                      </h3>

                      {/* Short description */}
                      <p className="font-sans text-sm text-gray-500 leading-relaxed mb-6">
                        {article.desc}
                      </p>
                    </div>

                    {/* Read More button */}
                    <div className="border-t border-gray-100 pt-6 mt-4">
                      <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary group-hover:text-secondary transition-colors cursor-pointer">
                        <span>Read Full Article</span>
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </span>
                    </div>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
