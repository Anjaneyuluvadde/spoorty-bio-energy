import type { Metadata, Viewport } from "next";
import { Manrope, Inter } from "next/font/google";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";
import Preloader from "@/components/Preloader";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Spoorty Bio Energy | Renewable Energy & Biogas Engineering Company",
  description: "Enterprise-grade biogas plants, biomethane upgrading, EPC solutions, plant automation, feedstock assessment, and expert operations for sustainable bioenergy.",
  keywords: ["biogas", "biomethane upgrading", "EPC solutions", "renewable energy", "sustainability", "plant automation", "Spoorty Bio Energy"],
  authors: [{ name: "Spoorty Bio Energy Team" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${inter.variable} antialiased`}
    >
      <body className="min-h-screen flex flex-col font-sans bg-[#F8FAFC] text-[#111827] overflow-x-hidden">
        <Preloader />
        <SmoothScrollProvider>
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
