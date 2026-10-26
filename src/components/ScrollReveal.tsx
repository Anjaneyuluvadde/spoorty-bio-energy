'use client';

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

interface ScrollRevealProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  yOffset?: number;
  xOffset?: number;
  scaleOffset?: number;
  rotateOffset?: number;
  blurOffset?: number;
  className?: string;
}

// Register plugin once globally
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ScrollReveal({
  children,
  delay = 0,
  duration = 0.6,
  yOffset = 30,
  xOffset = 0,
  scaleOffset = 1,
  rotateOffset = 0,
  blurOffset = 0,
  className = '',
}: ScrollRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    // Apply GPU-accelerated defaults
    gsap.set(el, { transformPerspective: 1000, transformStyle: 'preserve-3d' });

    const fromVars: gsap.TweenVars = {
      opacity: 0,
      y: yOffset,
      x: xOffset,
      scale: scaleOffset,
      rotation: rotateOffset,
      force3D: true, // GPU acceleration
    };

    if (blurOffset > 0) {
      fromVars.filter = `blur(${blurOffset}px)`;
    }

    const toVars: gsap.TweenVars = {
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1,
      rotation: 0,
      duration: duration,
      delay: delay,
      ease: 'power2.out',
      overwrite: 'auto',
      scrollTrigger: {
        trigger: el,
        start: 'top 92%',
        once: true,
      }
    };

    if (blurOffset > 0) {
      toVars.filter = 'blur(0px)';
    }

    // Set initial values
    gsap.set(el, fromVars);

    // Create reveal animation
    const tween = gsap.to(el, toVars);

    return () => {
      tween.kill();
      if (tween.scrollTrigger) {
        tween.scrollTrigger.kill();
      }
    };
  }, [delay, duration, yOffset, xOffset, scaleOffset, rotateOffset, blurOffset]);

  return (
    <div ref={containerRef} className={className} style={{ willChange: 'transform, opacity' }}>
      {children}
    </div>
  );
}
