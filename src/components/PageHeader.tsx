'use client';

import React from 'react';
import Link from 'next/link';

interface PageHeaderProps {
  title: string;
  description: string;
  breadcrumbs: { name: string; href?: string }[];
}

export default function PageHeader({ title, description, breadcrumbs }: PageHeaderProps) {
  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 bg-dark overflow-hidden">
      {/* Background Gradients & Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-primary/20 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-secondary/15 rounded-full blur-[100px] pointer-events-none"></div>
      
      {/* Top Border Accent */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 relative z-10">
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 mb-4 text-xs font-medium text-gray-400 font-sans">
          {breadcrumbs.map((crumb, idx) => {
            const isLast = idx === breadcrumbs.length - 1;
            return (
              <React.Fragment key={crumb.name}>
                {idx > 0 && <span className="text-gray-600">/</span>}
                {isLast || !crumb.href ? (
                  <span className="text-secondary">{crumb.name}</span>
                ) : (
                  <Link href={crumb.href} className="hover:text-white transition-colors">
                    {crumb.name}
                  </Link>
                )}
              </React.Fragment>
            );
          })}
        </nav>

        {/* Heading */}
        <h1 className="font-heading font-extrabold text-4xl md:text-5xl lg:text-6xl text-white mb-6 max-w-3xl leading-tight">
          {title}
        </h1>

        {/* Description */}
        <p className="font-sans text-lg text-gray-300 max-w-2xl leading-relaxed">
          {description}
        </p>
      </div>
    </section>
  );
}
