'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';
import ScrollReveal from '@/components/ScrollReveal';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

const posts = [
  {
    id: 1,
    image: '/images/hero.jpg',
    category: 'Technology',
    date: 'June 25, 2026',
    readTime: '6 min read',
    title: 'The Future of Biomethane Upgrading: Membrane vs. Scrubbing',
    desc: 'An in-depth analysis of membrane separation compared to chemical scrubbing technologies for clean biomethane gas grid injection.'
  },
  {
    id: 2,
    image: '/images/biomethane.jpg',
    category: 'Operation',
    date: 'May 18, 2026',
    readTime: '5 min read',
    title: 'Optimizing Digester Mixing to Prevent Silo Crust Formation',
    desc: 'Practical operational guidelines and engineering methods to prevent floating crust layers in agricultural and industrial biogas digesters.'
  },
  {
    id: 3,
    image: '/images/about.jpg',
    category: 'Market',
    date: 'April 09, 2026',
    readTime: '4 min read',
    title: 'Understanding Carbon Credits for Commercial Biogas Developers',
    desc: 'How renewable gas developers can leverage clean energy offsets and carbon compliance credits to improve project ROI.'
  },
  {
    id: 4,
    image: '/images/engineer.jpg',
    category: 'Agriculture',
    date: 'March 14, 2026',
    readTime: '8 min read',
    title: 'Synergistic Co-Digestion of Dairy Manure and Food Waste',
    desc: 'A scientific analysis demonstrating how mixing high-nitrogen livestock manure with carbon-rich food waste enhances biogas yields by up to 40%.'
  },
  {
    id: 5,
    image: '/images/hero.jpg',
    category: 'Technology',
    date: 'February 22, 2026',
    readTime: '5 min read',
    title: 'Role of SCADA and IoT Sensors in Biogas Plant Safety',
    desc: 'How automated control panels, methane leak sensors, and remote telemetry reduce plant downtime and guarantee structural safety.'
  },
  {
    id: 6,
    image: '/images/biomethane.jpg',
    category: 'Market',
    date: 'January 10, 2026',
    readTime: '7 min read',
    title: 'National Standards for Compressed Biogas (CBG) Fuel in India',
    desc: 'Navigating the technical requirements, gas composition limits, and subsidy structures under current governmental CBG energy programs.'
  }
];

export default function BlogPage() {
  return (
    <>
      <Navbar />

      <main className="flex-grow bg-[#F8FAFC]">
        {/* Page Header */}
        <PageHeader 
          title="Blog & Industry News"
          description="Stay informed with the latest insights, technological advancements, and regulatory updates in the biogas sector."
          breadcrumbs={[
            { name: 'Home', href: '/' },
            { name: 'Blog' }
          ]}
        />

        {/* Blog Grid Section */}
        <section className="py-24 max-w-[1440px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, idx) => (
              <ScrollReveal key={post.id} delay={idx * 0.05}>
                <article className="bg-white rounded-3xl overflow-hidden border border-gray-100 hover:border-primary/20 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full group">
                  {/* Article Banner */}
                  <div className="relative h-56 overflow-hidden shrink-0">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-dark/20 group-hover:bg-dark/10 transition-all duration-300" />
                    
                    {/* Floating Category Badge */}
                    <div className="absolute top-4 left-4 bg-primary text-white font-sans text-xs font-bold py-1 px-3 rounded-lg shadow-sm">
                      {post.category}
                    </div>
                  </div>

                  {/* Article Info */}
                  <div className="p-6 md:p-8 flex-grow flex flex-col justify-between">
                    <div>
                      {/* Meta */}
                      <div className="flex items-center gap-4 text-xs text-gray-400 font-sans font-medium mb-3">
                        <span className="flex items-center gap-1">
                          <Calendar className="h-3.5 w-3.5" />
                          {post.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-3.5 w-3.5" />
                          {post.readTime}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="font-heading font-extrabold text-xl text-dark mb-3 leading-snug group-hover:text-primary transition-colors">
                        {post.title}
                      </h3>

                      {/* Short description */}
                      <p className="font-sans text-sm text-gray-500 leading-relaxed mb-6">
                        {post.desc}
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
