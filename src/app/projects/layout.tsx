import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Projects | Spoorty Bio Energy',
  description: 'Explore our portfolio of bioenergy installations, biomethane upgrading plants, plant EPC, revamps, and sustainable agricultural bio-fertilizer facilities.',
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
