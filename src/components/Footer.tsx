'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, ArrowRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-dark text-gray-300 font-sans border-t border-primary/20 pt-16 pb-8">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand Col */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <Link href="/" className="flex items-center select-none group transition-transform duration-300 hover:scale-[1.02]">
              <div className="relative h-12 w-56 sm:w-64">
                <Image
                  src="/images/logo_light.png"
                  alt="Sphoorthi Bio Energy"
                  fill
                  className="object-contain object-left"
                />
              </div>
            </Link>
            <p className="text-gray-400 text-sm max-w-sm leading-relaxed">
              Transforming Organic Waste into Renewable Energy. We help industries, municipalities, and agricultural communities reduce carbon emissions while building a sustainable future.
            </p>
            <div className="flex items-center gap-3 mt-2">
              <a href="#" className="p-2 rounded-lg bg-dark-light hover:bg-secondary text-gray-400 hover:text-white transition-all border border-gray-800" aria-label="Facebook">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="#" className="p-2 rounded-lg bg-dark-light hover:bg-secondary text-gray-400 hover:text-white transition-all border border-gray-800" aria-label="Twitter">
                <Twitter className="h-4 w-4" />
              </a>
              <a href="#" className="p-2 rounded-lg bg-dark-light hover:bg-secondary text-gray-400 hover:text-white transition-all border border-gray-800" aria-label="Linkedin">
                <Linkedin className="h-4 w-4" />
              </a>
              <a href="#" className="p-2 rounded-lg bg-dark-light hover:bg-secondary text-gray-400 hover:text-white transition-all border border-gray-800" aria-label="Instagram">
                <Instagram className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links Col */}
          <div className="flex flex-col gap-4">
            <h3 className="text-white font-heading font-bold text-base tracking-wide uppercase">Quick Links</h3>
            <ul className="flex flex-col gap-2.5 text-sm">
              <li>
                <Link href="/" className="hover:text-secondary transition-colors">Home</Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-secondary transition-colors">About Us</Link>
              </li>
              <li>
                <Link href="/bio-energy" className="hover:text-secondary transition-colors">Bio Energy</Link>
              </li>
              <li>
                <Link href="/bio-fertilizers" className="hover:text-secondary transition-colors">Bio Fertilizers</Link>
              </li>
              <li>
                <Link href="/research-development" className="hover:text-secondary transition-colors">R&D</Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-secondary transition-colors">Our Projects</Link>
              </li>
            </ul>
          </div>

          {/* Solutions & Focus Col */}
          <div className="flex flex-col gap-4">
            <h3 className="text-white font-heading font-bold text-base tracking-wide uppercase">Core Capabilities</h3>
            <ul className="flex flex-col gap-2.5 text-sm">
              <li>
                <Link href="/bio-energy/technology-epc" className="hover:text-secondary transition-colors">Technology & EPC</Link>
              </li>
              <li>
                <Link href="/bio-energy/operations-maintenance" className="hover:text-secondary transition-colors">Operations & Maintenance</Link>
              </li>
              <li>
                <Link href="/bio-energy/plant-revamps" className="hover:text-secondary transition-colors">Existing Plant Revamps</Link>
              </li>
              <li>
                <Link href="/bio-energy/bio-enzymes" className="hover:text-secondary transition-colors">Bio Enzymes & Nutrients</Link>
              </li>
              <li>
                <Link href="/bio-fertilizers/fom" className="hover:text-secondary transition-colors">Fermented Organic Manure</Link>
              </li>
              <li>
                <Link href="/research-development/green-hydrogen" className="hover:text-secondary transition-colors">Clean Tech & Hydrogen R&D</Link>
              </li>
            </ul>
          </div>

          {/* Contact Col */}
          <div className="flex flex-col gap-4">
            <h3 className="text-white font-heading font-bold text-base tracking-wide uppercase">Contact Info</h3>
            <ul className="flex flex-col gap-3 text-xs sm:text-sm text-gray-400">
              <li className="flex items-start gap-2.5">
                <Phone className="h-4 w-4 text-secondary mt-0.5 shrink-0" />
                <a href="tel:+919371083969" className="hover:text-white transition-colors">+91 9371083969 / 6304867369</a>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail className="h-4 w-4 text-secondary mt-0.5 shrink-0" />
                <a href="mailto:sphoorthibb@yahoo.com" className="break-all hover:text-white transition-colors">sphoorthibb@yahoo.com</a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 text-secondary mt-0.5 shrink-0" />
                <span>Flat G-3, Banjara Springs, Rd 10, Banjara Hills, Hyderabad – 500034, India</span>
              </li>
            </ul>
            <div className="mt-2">
              <a
                href="https://maps.google.com/?q=Hyderabad+Telangana+India"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs font-semibold bg-primary/20 hover:bg-primary/30 border border-primary/40 text-white py-2 px-4 rounded-lg transition-all"
              >
                <span>Get Directions</span>
                <ArrowRight className="h-3 w-3" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Banner */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} Spoorty Bio Energy. All Rights Reserved.</p>
          <div className="flex items-center gap-6 text-gray-400">
            <span>Renewable Energy & Circular Economy</span>
            <span>Hyderabad, India</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
