import React from 'react';
import { CheckCircle2 } from 'lucide-react';

interface SectionHighlightsProps {
  highlights: string[];
  className?: string;
}

export default function SectionHighlights({ highlights, className = '' }: SectionHighlightsProps) {
  return (
    <div className={`grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-2 ${className}`}>
      {highlights.map((item, index) => (
        <div
          key={index}
          className="group flex items-start gap-2.5 p-3.5 rounded-xl bg-white border border-gray-100 shadow-sm hover:border-primary/20 hover:shadow-md transition-all duration-300"
        >
          <div className="h-5 w-5 rounded-full bg-secondary/10 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-secondary/20 transition-colors">
            <CheckCircle2 className="h-3.5 w-3.5 text-secondary" />
          </div>
          <span className="font-heading font-semibold text-xs text-dark leading-snug group-hover:text-primary transition-colors">
            {item}
          </span>
        </div>
      ))}
    </div>
  );
}
