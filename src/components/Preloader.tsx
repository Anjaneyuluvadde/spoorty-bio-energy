'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

export default function Preloader() {
  const [progress, setProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Prevent scrolling while loading
    document.body.style.overflow = 'hidden';

    // Simulate progress increments up to 100% over 1.4s
    const startTime = Date.now();
    const duration = 1200; // ms

    const updateProgress = () => {
      const elapsed = Date.now() - startTime;
      const calculated = Math.min(100, Math.floor((elapsed / duration) * 100));
      
      setProgress(calculated);

      if (elapsed < duration) {
        requestAnimationFrame(updateProgress);
      } else {
        setProgress(100);
        // Delay slightly for visual hold before fading out
        setTimeout(() => {
          setIsLoaded(true);
          document.body.style.overflow = '';
        }, 300);
      }
    };

    requestAnimationFrame(updateProgress);

    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <AnimatePresence>
      {!isLoaded && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            scale: 1.05,
            filter: 'blur(10px)',
            transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } 
          }}
          className="fixed inset-0 z-[9999] bg-dark flex flex-col items-center justify-center text-white"
        >
          {/* Noise effect */}
          <div className="absolute inset-0 bg-noise pointer-events-none" />

          {/* Official Brand Logo */}
          <div className="relative flex flex-col items-center select-none z-10 mb-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="relative h-16 w-64 sm:h-20 sm:w-80 mb-3"
            >
              <Image 
                src="/images/logo_light.png" 
                alt="Sphoorthi Bio Energy" 
                fill 
                priority
                className="object-contain" 
              />
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.7 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="font-sans text-xs tracking-wider text-gray-300 uppercase mb-4"
            >
              Renewable Energy &amp; Biogas Engineering
            </motion.p>

            {/* Counter percentage indicator */}
            <div className="font-heading font-bold text-lg text-secondary tabular-nums min-w-[3rem] text-center mb-2">
              {progress}%
            </div>

            {/* Horizontal progress bar */}
            <div className="w-56 h-[2px] bg-white/10 rounded-full overflow-hidden relative">
              <motion.div
                className="absolute top-0 left-0 bottom-0 bg-secondary"
                style={{ width: `${progress}%` }}
                layoutId="progressBar"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
