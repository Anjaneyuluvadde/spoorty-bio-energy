'use client';

import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const [cursorType, setCursorType] = useState<'default' | 'link' | 'button' | 'image' | 'card'>('default');

  useEffect(() => {
    // Hide custom cursor on touch/mobile devices
    const isMobile = window.matchMedia('(max-width: 768px)').matches;
    if (isMobile) return;

    const dot = dotRef.current;
    const ring = ringRef.current;

    if (!dot || !ring) return;

    // Set initial position out of screen
    gsap.set([dot, ring], { xPercent: -50, yPercent: -50, x: -100, y: -100 });

    // GSAP quickTo optimization for smooth performance (60+ FPS)
    const xDotTo = gsap.quickTo(dot, 'x', { duration: 0.1, ease: 'power3.out' });
    const yDotTo = gsap.quickTo(dot, 'y', { duration: 0.1, ease: 'power3.out' });
    
    const xRingTo = gsap.quickTo(ring, 'x', { duration: 0.4, ease: 'power2.out' });
    const yRingTo = gsap.quickTo(ring, 'y', { duration: 0.4, ease: 'power2.out' });

    const handleMouseMove = (e: MouseEvent) => {
      xDotTo(e.clientX);
      yDotTo(e.clientY);
      xRingTo(e.clientX);
      yRingTo(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target) return;

      const isLink = target.closest('a');
      const isButton = target.closest('button') || target.closest('.btn-ripple') || target.closest('[role="button"]');
      const isImage = target.closest('img') || target.closest('.bg-cover') || target.closest('svg');
      const isCard = target.closest('.glass-card') || target.closest('.rounded-3xl') || target.closest('.group');

      if (isLink) {
        setCursorType('link');
      } else if (isButton) {
        setCursorType('button');
      } else if (isImage) {
        setCursorType('image');
      } else if (isCard) {
        setCursorType('card');
      } else {
        setCursorType('default');
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  useEffect(() => {
    const ring = ringRef.current;
    const dot = dotRef.current;
    const text = textRef.current;

    if (!ring || !dot) return;

    // Animate cursor states using GSAP
    if (cursorType === 'link') {
      gsap.to(ring, {
        scale: 2.2,
        backgroundColor: 'rgba(11, 110, 79, 0.1)',
        borderColor: '#0B6E4F',
        borderWidth: '1px',
        duration: 0.3,
      });
      gsap.to(dot, { scale: 0, duration: 0.2 });
      if (text) gsap.to(text, { opacity: 1, scale: 1, duration: 0.2 });
    } else if (cursorType === 'button') {
      gsap.to(ring, {
        scale: 1.6,
        backgroundColor: '#22C55E',
        borderColor: '#22C55E',
        mixBlendMode: 'difference',
        duration: 0.3,
      });
      gsap.to(dot, { scale: 0, duration: 0.2 });
      if (text) gsap.to(text, { opacity: 0, scale: 0.5, duration: 0.2 });
    } else if (cursorType === 'image') {
      gsap.to(ring, {
        scale: 1.5,
        backgroundColor: 'transparent',
        borderColor: '#84CC16',
        borderWidth: '2px',
        duration: 0.3,
      });
      gsap.to(dot, { scale: 1.5, backgroundColor: '#84CC16', duration: 0.2 });
      if (text) gsap.to(text, { opacity: 0, scale: 0.5, duration: 0.2 });
    } else if (cursorType === 'card') {
      gsap.to(ring, {
        scale: 1.3,
        backgroundColor: 'transparent',
        borderColor: '#0B6E4F',
        borderWidth: '2px',
        duration: 0.3,
      });
      gsap.to(dot, { scale: 1.2, backgroundColor: '#0B6E4F', duration: 0.2 });
      if (text) gsap.to(text, { opacity: 0, scale: 0.5, duration: 0.2 });
    } else {
      // Default state
      gsap.to(ring, {
        scale: 1,
        backgroundColor: 'transparent',
        borderColor: 'rgba(11, 110, 79, 0.4)',
        borderWidth: '1px',
        mixBlendMode: 'normal',
        duration: 0.3,
      });
      gsap.to(dot, { scale: 1, backgroundColor: '#0B6E4F', duration: 0.2 });
      if (text) gsap.to(text, { opacity: 0, scale: 0.5, duration: 0.2 });
    }
  }, [cursorType]);

  return (
    <div className="hidden md:block pointer-events-none fixed inset-0 z-[10000]">
      {/* Center Dot */}
      <div
        ref={dotRef}
        className="fixed w-2 h-2 rounded-full bg-primary pointer-events-none transition-transform duration-100 ease-out"
      />

      {/* Outer Ring */}
      <div
        ref={ringRef}
        className="fixed w-9 h-9 rounded-full border border-primary/40 pointer-events-none flex items-center justify-center overflow-hidden"
        style={{ willChange: 'transform, opacity, border-color, background-color' }}
      >
        {/* Hover link View Text */}
        <span
          ref={textRef}
          className="opacity-0 scale-50 text-[8px] font-heading font-extrabold tracking-wider uppercase text-primary text-center pointer-events-none"
        >
          View
        </span>
      </div>
    </div>
  );
}
