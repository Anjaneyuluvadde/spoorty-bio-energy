'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, ArrowRight } from 'lucide-react';

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Bio Energy', href: '/bio-energy' },
  { name: 'Bio Fertilizers', href: '/bio-fertilizers' },
  { name: 'R&D', href: '/research-development' },
  { name: 'Our Projects', href: '/projects' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on mount

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHome = pathname === '/';
  const isDarkTheme = isScrolled || !isHome;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass-nav-solid py-4 shadow-lg' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <Link 
          href="/" 
          className="flex items-center select-none group transition-transform duration-300 hover:scale-[1.02]"
        >
          <div className="relative h-10 md:h-12 w-48 md:w-56">
            <Image
              src={isDarkTheme ? '/images/logo_light.png' : '/images/logo.png'}
              alt="Sphoorthi Bio Energy"
              fill
              priority
              className="object-contain object-left"
            />
          </div>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`relative font-sans text-sm font-medium tracking-wide transition-colors duration-200 ${
                  isActive 
                    ? (isDarkTheme ? 'text-white' : 'text-primary') 
                    : (isDarkTheme ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-primary')
                }`}
              >
                {item.name}
                {isActive && (
                  <span className={`absolute -bottom-1.5 left-0 right-0 h-0.5 rounded-full ${isDarkTheme ? 'bg-secondary' : 'bg-primary'}`} />
                )}
              </Link>
            );
          })}
        </nav>

        {/* CTA Button */}
        <div className="hidden lg:block">
          <a
            href="mailto:info@spoortybioenergy.com"
            className="group relative inline-flex items-center justify-center gap-1.5 bg-primary hover:bg-primary/95 text-white font-sans text-sm font-semibold py-2.5 px-6 rounded-full transition-all duration-200 shadow-md shadow-primary/20 hover:shadow-lg hover:shadow-primary/30 active:scale-95"
          >
            <span>Get Consultation</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className={`lg:hidden focus:outline-none p-1.5 rounded-lg border transition-colors duration-300 ${
            isDarkTheme 
              ? 'text-white border-gray-700 bg-dark/40 hover:text-secondary' 
              : 'text-dark border-gray-200 bg-white/40 hover:text-primary'
          }`}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-[73px] z-40 bg-dark/95 backdrop-blur-lg flex flex-col justify-between p-8 border-t border-gray-800 transition-all duration-300">
          <div className="flex flex-col gap-6">
            <div className="relative h-10 w-44 mb-2">
              <Image
                src="/images/logo_light.png"
                alt="Sphoorthi Bio Energy"
                fill
                className="object-contain object-left"
              />
            </div>
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`font-heading text-xl font-bold tracking-wide transition-colors ${
                    isActive ? 'text-secondary pl-2 border-l-2 border-secondary' : 'text-gray-300'
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>

          <div className="flex flex-col gap-4 mt-8">
            <a
              href="mailto:info@spoortybioenergy.com"
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full text-center bg-secondary hover:bg-secondary/90 text-white font-sans font-semibold py-3 px-6 rounded-xl transition-all shadow-lg shadow-secondary/20"
            >
              Get Consultation
            </a>
            <p className="text-center text-xs text-gray-500 font-sans mt-4">
              © {new Date().getFullYear()} Spoorty Bio Energy. All rights reserved.
            </p>
          </div>
        </div>
      )}
    </header>
  );
}
