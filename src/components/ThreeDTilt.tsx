'use client';

import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

interface ThreeDTiltProps {
  children: React.ReactNode;
  className?: string;
  maxRotate?: number; // Maximum rotation in degrees
  overflowHidden?: boolean; // Whether to apply overflow-hidden
}

export default function ThreeDTilt({ 
  children, 
  className = '', 
  maxRotate = 10,
  overflowHidden = true
}: ThreeDTiltProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const glareRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Disable 3D tilt on touch devices for usability
    const isMobile = window.matchMedia('(max-width: 768px)').matches;
    if (isMobile) return;

    const card = cardRef.current;
    const glare = glareRef.current;
    if (!card || !glare) return;

    // Apply baseline CSS variables for GPU-accelerated transforms
    gsap.set(card, { transformPerspective: 1000, transformStyle: 'preserve-3d' });

    const handleMouseMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left; // Mouse x relative to element
      const y = e.clientY - rect.top;  // Mouse y relative to element

      const px = x / rect.width;
      const py = y / rect.height;

      // Calculate tilt angles (-maxRotate to +maxRotate)
      const rotateX = (py - 0.5) * -maxRotate;
      const rotateY = (px - 0.5) * maxRotate;

      // Tilt the card
      gsap.to(card, {
        rotateX: rotateX,
        rotateY: rotateY,
        duration: 0.4,
        ease: 'power2.out',
        overwrite: 'auto',
      });

      // Move the glare highlight overlay
      gsap.to(glare, {
        opacity: 0.25,
        left: x - rect.width / 2,
        top: y - rect.height / 2,
        duration: 0.2,
        ease: 'power1.out',
        overwrite: 'auto',
      });
    };

    const handleMouseLeave = () => {
      // Reset card tilt to original state
      gsap.to(card, {
        rotateX: 0,
        rotateY: 0,
        duration: 0.6,
        ease: 'power3.out',
        overwrite: 'auto',
      });

      // Hide the glare highlight
      gsap.to(glare, {
        opacity: 0,
        duration: 0.6,
        ease: 'power3.out',
        overwrite: 'auto',
      });
    };

    card.addEventListener('mousemove', handleMouseMove);
    card.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      card.removeEventListener('mousemove', handleMouseMove);
      card.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [maxRotate]);

  return (
    <div 
      ref={cardRef} 
      className={`relative group preserve-3d ${overflowHidden ? 'overflow-hidden' : ''} ${className}`}
      style={{ willChange: 'transform' }}
    >
      {/* Glare effect overlay */}
      <div 
        ref={glareRef}
        className="absolute w-[200%] h-[200%] pointer-events-none rounded-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.3)_0%,transparent_65%)] opacity-0 z-20 mix-blend-screen"
        style={{ 
          transform: 'translate(-50%, -50%)', 
          willChange: 'opacity, left, top',
          pointerEvents: 'none'
        }}
      />
      {children}
    </div>
  );
}
