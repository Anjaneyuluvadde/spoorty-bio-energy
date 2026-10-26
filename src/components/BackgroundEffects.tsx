'use client';

import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  alpha: number;
  decay?: number;
}

interface Orb {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  targetRadius: number;
}

interface Leaf {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  angle: number;
  spin: number;
}

export default function BackgroundEffects() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -1000, y: -1000 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Initialize lists of objects
    const orbs: Orb[] = [];
    const leaves: Leaf[] = [];
    const particles: Particle[] = [];

    // Create 4 large slow-moving glowing orbs
    for (let i = 0; i < 4; i++) {
      orbs.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        radius: Math.random() * 150 + 100,
        targetRadius: Math.random() * 150 + 100,
      });
    }

    // Create 8 floating leaves
    for (let i = 0; i < 8; i++) {
      leaves.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.3 + 0.1, // slightly drifting right
        vy: Math.random() * 0.2 + 0.1,         // drifting down
        size: Math.random() * 12 + 8,
        angle: Math.random() * Math.PI * 2,
        spin: (Math.random() - 0.5) * 0.01,
      });
    }

    // Create 25 background energy dots
    for (let i = 0; i < 25; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 1,
        alpha: Math.random() * 0.5 + 0.1,
      });
    }

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouseRef.current.x = -1000;
      mouseRef.current.y = -1000;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);

    const drawLeaf = (c: CanvasRenderingContext2D, x: number, y: number, size: number, angle: number) => {
      c.save();
      c.translate(x, y);
      c.rotate(angle);
      c.beginPath();
      // Draw standard leaf path
      c.moveTo(0, -size);
      c.quadraticCurveTo(size / 1.8, -size / 2, 0, size);
      c.quadraticCurveTo(-size / 1.8, -size / 2, 0, -size);
      c.fillStyle = 'rgba(34, 197, 94, 0.08)'; // translucent secondary green
      c.fill();
      c.strokeStyle = 'rgba(11, 110, 79, 0.06)';
      c.stroke();
      c.restore();
    };

    // Main animation loop (runs at 60 FPS)
    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      // 1. Draw glowing orbs
      orbs.forEach((orb) => {
        orb.x += orb.vx;
        orb.y += orb.vy;

        // Bounce off walls
        if (orb.x < -orb.radius) orb.x = width + orb.radius;
        if (orb.x > width + orb.radius) orb.x = -orb.radius;
        if (orb.y < -orb.radius) orb.y = height + orb.radius;
        if (orb.y > height + orb.radius) orb.y = -orb.radius;

        // Draw radial gradient orb
        const grad = ctx.createRadialGradient(orb.x, orb.y, 0, orb.x, orb.y, orb.radius);
        grad.addColorStop(0, 'rgba(11, 110, 79, 0.06)'); // primary green glow
        grad.addColorStop(0.5, 'rgba(11, 110, 79, 0.02)');
        grad.addColorStop(1, 'rgba(11, 110, 79, 0)');
        
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(orb.x, orb.y, orb.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      // 2. Update and draw energy dots (particles)
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        // Wrap boundaries
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        // Mouse interaction push
        const dx = p.x - mouseRef.current.x;
        const dy = p.y - mouseRef.current.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 120) {
          const force = (120 - dist) / 120;
          p.x += (dx / dist) * force * 3;
          p.y += (dy / dist) * force * 3;
        }

        ctx.fillStyle = `rgba(132, 204, 22, ${p.alpha})`; // Accent Lime Green
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      });

      // 3. Update and draw leaves
      leaves.forEach((leaf) => {
        leaf.x += leaf.vx;
        leaf.y += leaf.vy;
        leaf.angle += leaf.spin;

        // Wrap boundary
        if (leaf.y > height + 20) {
          leaf.y = -20;
          leaf.x = Math.random() * width;
        }
        if (leaf.x > width + 20) {
          leaf.x = -20;
        }

        // Mouse disturbance
        const dx = leaf.x - mouseRef.current.x;
        const dy = leaf.y - mouseRef.current.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 100) {
          const force = (100 - dist) / 100;
          leaf.x += (dx / dist) * force * 2;
          leaf.y += (dy / dist) * force * 2;
          leaf.angle += force * 0.1;
        }

        drawLeaf(ctx, leaf.x, leaf.y, leaf.size, leaf.angle);
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-0"
      style={{ mixBlendMode: 'multiply' }}
    />
  );
}
