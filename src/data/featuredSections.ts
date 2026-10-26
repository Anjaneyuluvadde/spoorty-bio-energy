export interface FeaturedSectionData {
  id: string;
  eyebrow: string;
  heading: string;
  description: string;
  highlights: [string, string, string];
  ctaText: string;
  ctaHref: string;
  imageSrc: string;
  imageAlt: string;
  imagePosition: 'left' | 'right';
  badgeTag?: string;
  statCallout?: {
    label: string;
    value: string;
  };
}

export const featuredSectionsData: FeaturedSectionData[] = [
  {
    id: 'bio-energy',
    eyebrow: 'BIO ENERGY',
    heading: 'Engineering Integrated Bioenergy Solutions',
    description:
      "Sphoorthi Bioenergy delivers end-to-end Bio-CNG and CBG plant solutions, transforming agricultural residues and organic waste into clean renewable energy. From project incubation, techno-economic feasibility, and turnkey EPC engineering to long-term operations & maintenance and existing plant revamps, we maximize methane yield while generating nutrient-rich organic bio-fertilizers for a circular green economy.",
    highlights: [
      'Incubation and Project Development',
      'Technology, EPC and O&M',
      'Plant Revamps and Bio Nutrients'
    ],
    ctaText: 'Explore Bio Energy',
    ctaHref: '/bio-energy',
    imageSrc: '/images/hero.jpg',
    imageAlt: 'Sphoorthi Bioenergy commercial Bio-CNG plant and anaerobic digestion infrastructure',
    imagePosition: 'left',
    badgeTag: 'Clean Renewable Fuels',
    statCallout: {
      value: '98%+',
      label: 'Target Methane Purity'
    }
  },
  {
    id: 'bio-fertilizers',
    eyebrow: 'BIO FERTILIZERS',
    heading: 'Advancing Soil Health Through Biological Agriculture',
    description:
      "Sphoorthi Bioorganics pioneers biological soil enrichment through high-grade Fermented Organic Manure (FOM, LFOM, SOFM), bio-fertilizers, bio-pesticides, and bio-stimulants. Formulated through advanced microbial fermentation and enriched with beneficial bacterial consortia and essential micronutrients, our natural inputs restore soil organic carbon, enhance crop vigor, and drive chemical-free sustainable agriculture across India.",
    highlights: [
      'Fermented Organic Manure (FOM)',
      'Bio Pesticides and Bio Stimulants',
      'Bio Nutrients and Plant Nutrition'
    ],
    ctaText: 'Explore Bio Fertilizers',
    ctaHref: '/bio-fertilizers',
    imageSrc: '/images/about.jpg',
    imageAlt: 'Sphoorthi Bioorganics biological agricultural inputs and enriched organic manure application',
    imagePosition: 'right',
    badgeTag: 'Regenerative Agriculture',
    statCallout: {
      value: '100%',
      label: 'Organic Biological Inputs'
    }
  },
  {
    id: 'research-development',
    eyebrow: 'RESEARCH & DEVELOPMENT',
    heading: 'Research, Innovation & Sustainable Technologies',
    description:
      "Our dedicated Research & Development centers pioneer breakthroughs in Green Hydrogen integration, multi-stage biomass conversion, and specialized microbial consortia. Bridging indigenous cow dung microbiome research with advanced industrial biotechnology, sustainable dairy infrastructure, and selective cattle breeding, SBPL develops proprietary agricultural biologicals, high-yield energy crops, and next-generation clean fuel technologies.",
    highlights: [
      'Green Hydrogen and Bioenergy Research',
      'Sustainable Dairy and Indigenous Cows',
      'Biomass, Microbial and Agricultural Innovation'
    ],
    ctaText: 'Discover Our Research',
    ctaHref: '/research-development',
    imageSrc: '/images/engineer.jpg',
    imageAlt: 'Sphoorthi Bioenergy research laboratory scientists developing clean hydrogen and microbial inoculants',
    imagePosition: 'left',
    badgeTag: 'Applied Biotechnology',
    statCallout: {
      value: 'In-House',
      label: 'R&D & Pilot Fermentors'
    }
  },
  {
    id: 'our-projects',
    eyebrow: 'OUR PROJECTS',
    heading: 'Bioenergy Projects & Integrated Sustainable Solutions',
    description:
      "Showcasing high-efficiency Bio-CNG plants, organic fertilizer manufacturing units, and integrated circular economy clusters engineered to national standards. From 10–15 TPD commercial CBG facilities utilizing dedicated energy crops to captive dairy biogas installations, our verified project portfolio demonstrates robust feedstock supply chains, advanced gasification technology, and sustainable rural economic empowerment.",
    highlights: [
      'Bio-CNG and CBG Projects',
      'Bio Fertilizer and Organic Manure Projects',
      'Integrated Bioenergy Cluster Development'
    ],
    ctaText: 'View Our Projects',
    ctaHref: '/projects',
    imageSrc: '/images/biomethane.jpg',
    imageAlt: 'Operating commercial Bio-CNG upgrading facility and integrated bioenergy cluster project',
    imagePosition: 'right',
    badgeTag: 'Engineering Excellence',
    statCallout: {
      value: '10–15 TPD',
      label: 'Standard CBG Plant Scale'
    }
  }
];
