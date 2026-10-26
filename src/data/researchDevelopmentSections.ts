import { SubpageSection } from './bioEnergySections';

export const researchDevelopmentSections: SubpageSection[] = [
  {
    slug: 'green-hydrogen',
    eyebrow: 'FUTURE CLEAN FUELS',
    heading: 'Green Hydrogen Exploratory Research',
    highlightWord: 'Green Hydrogen',
    description: 'Investigating exploratory thermodynamic pathways linking bioenergy facilities with decentralized green hydrogen generation through biomethane catalytic reforming and anaerobic dark-fermentation.',
    highlights: [
      'Catalytic Steam Methane Reforming (SMR) Modeling',
      'Biological Dark Fermentation Hydrogen Yield Studies',
      'Electrolyzer Co-Location & Renewable Grid Coupling'
    ],
    imageSrc: '/images/generated/green_hydrogen.jpg',
    imageAlt: 'Green hydrogen clean technology laboratory and exploratory energy research',
    badgeTag: 'Program 01',
    badgeRight: 'Zero Carbon',
    imageCardTitle: 'Decentralized Clean Hydrogen Production Modeling',
    ctaText: 'Discover Green Hydrogen R&D',
    ctaHref: '/research-development/green-hydrogen',
    detailTitle: 'Green Hydrogen Exploratory Research',
    detailSubtitle: 'Exploring the technological and thermodynamic convergence of bioenergy infrastructure with clean hydrogen generation.',
    detailOverview: 'Hydrogen represents a critical vector in global industrial decarbonization. Sphoorthi Bioenergy’s R&D roadmap explores exploratory thermodynamic pathways to co-produce hydrogen from purified bio-methane and biological syngas streams, assessing catalyst longevity, reaction kinetics, and life-cycle carbon neutrality.',
    detailCards: [
      {
        title: 'Biomethane Reforming Pathways (SMR & Pyrolysis)',
        desc: 'Evaluating catalytic steam methane reforming (SMR) coupled with biogas upgrading, alongside methane thermal pyrolysis producing pure hydrogen and solid carbon black.',
        points: ['Thermodynamic Equilibrium Analysis', 'Catalyst Coking & Deactivation Mitigation', 'Zero Atmospheric Carbon Emissions Pathways'],
        image: '/images/generated/green_hydrogen.jpg',
        tag: 'Catalytic SMR'
      },
      {
        title: 'Biological Dark Fermentation Studies',
        desc: 'Laboratory literature and bench trials investigating specialized anaerobic microbial consortia capable of evolving bio-hydrogen prior to acetogenesis.',
        points: ['Two-Phase Anaerobic Fermentation (Bio-H2 + Bio-CH4)', 'Microbial Metabolic Pathway Optimization', 'Volatile Fatty Acid Co-Product Utilization'],
        image: '/images/generated/incubation.jpg',
        tag: 'Dark Fermentation'
      },
      {
        title: 'Electrolyzer Coupling & Renewable Hybridization',
        desc: 'Assessing theoretical models for co-locating solar/wind renewable power with water electrolysis at rural bioenergy hubs to create balanced green fuel corridors.',
        points: ['Oxygen By-Product Utilization in Digester Desulfurization', 'Hydrogen Enriched Compressed Natural Gas (H-CNG) Feasibility', 'Grid Energy Arbitrage Modeling'],
        image: '/images/biomethane.jpg',
        tag: 'Renewable Coupling'
      }
    ],
    detailKeyTakeaways: [
      'Current roadmap phase: Thermodynamic evaluation and kinetic reaction modeling',
      'Targeting high-efficiency decentralized production models for agricultural hubs',
      'Long-term vision of Net-Zero and carbon-negative rural bioenergy refineries'
    ]
  },
  {
    slug: 'food-related',
    eyebrow: 'AGRO-VALORIZATION',
    heading: 'Food Related Innovation & Agri-Valorization',
    highlightWord: 'Food Innovation',
    description: 'Transforming perishable agricultural surpluses, fruit and vegetable pomace, and agro-food processing effluents into valuable biological inputs, reducing landfill methane emissions.',
    highlights: [
      'Enzymatic Extraction of High-Value Pectins & Phenolics',
      'High-COD Food Waste Anaerobic Digestion Optimization',
      'Zero-Waste Circular Bio-Economy Manufacturing'
    ],
    imageSrc: '/images/generated/food_valorization.jpg',
    imageAlt: 'Agricultural crop innovation and sustainable biological plant inputs',
    badgeTag: 'Program 02',
    badgeRight: 'Zero Waste',
    imageCardTitle: 'Circular Agro-Food Stream Valorization & Nutrient Recovery',
    ctaText: 'Discover Food R&D',
    ctaHref: '/research-development/food-related',
    detailTitle: 'Food Related Innovation & Agri-Valorization',
    detailSubtitle: 'Eliminating agricultural spoilage and food processing waste through closed-loop biological refining.',
    detailOverview: 'India experiences significant post-harvest losses across fruits, vegetables, and agro-processing streams. Our R&D division explores biological recovery technologies that separate high-value biochemicals before converting the remaining organic matrix into clean Bio-CNG and organic nutrients.',
    detailCards: [
      {
        title: 'High-Solids Substrate Pre-Treatment',
        desc: 'Developing mechanical shearing, enzymatic pulping, and thermal hydrolysis protocols for handling variable municipal and market fruit/vegetable residues.',
        points: ['Viscosity Reduction in High-Moisture Slurries', 'Rapid Hydrolytic Acidogenesis', 'Elimination of Physical Inert Contaminants'],
        image: '/images/generated/food_valorization.jpg',
        tag: 'Substrate Pre-Treatment'
      },
      {
        title: 'Nutrient Recovery & Bio-Extraction',
        desc: 'Extracting secondary metabolites, natural organic acids, and plant growth regulators from citrus peels, tomato pomace, and sugar industry press mud.',
        points: ['Pectin & Bio-Flavonoid Extraction', 'Natural Organic Acid Isolation', 'Upcycling into Agricultural Bio-Stimulants'],
        image: '/images/generated/bio_enzymes.jpg',
        tag: 'Bio-Flavonoid Extraction'
      },
      {
        title: 'Zero-Waste Distillery & Brewery Closed Loops',
        desc: 'Engineering specialized anaerobic digester regimes to convert high-BOD spent wash and brewers grain into high-purity biomethane.',
        points: ['Continuous High-Rate Biomethanation', 'Recovered Water Recycling Protocols', 'Concentrated FOM Digestate Mineralization'],
        image: '/images/hero.jpg',
        tag: 'Closed Loop Recovery'
      }
    ],
    detailKeyTakeaways: [
      'Eliminates methane emissions from rotting agricultural market wastes',
      'Captures valuable bioactive compounds before energy conversion',
      'Supports decentralized food processing clusters across India'
    ]
  },
  {
    slug: 'sustainable-dairy',
    eyebrow: 'LIVESTOCK INFRASTRUCTURE',
    heading: 'Infrastructure & Sustainable Modern Dairy',
    highlightWord: 'Sustainable Modern Dairy',
    description: 'Engineering climate-controlled, automated cattle barns with continuous slurry scraping, captive biogas digesters, and zero-discharge manure management systems.',
    highlights: [
      'Automated Slurry Scraping & Gravity Flush Channels',
      'Captive Biogas Digesters Supplying On-Farm Power',
      'Odor Reduction, Biosecurity & Closed Slurry Loops'
    ],
    imageSrc: '/images/generated/sustainable_dairy.jpg',
    imageAlt: 'Sustainable modern dairy barn infrastructure and automated manure management',
    badgeTag: 'Program 03',
    badgeRight: 'Zero Discharge',
    imageCardTitle: 'Climate-Controlled Automated Livestock Infrastructure',
    ctaText: 'Discover Dairy Infrastructure',
    ctaHref: '/research-development/sustainable-dairy',
    detailTitle: 'Infrastructure & Sustainable Modern Dairy',
    detailSubtitle: 'Integrating advanced cattle welfare architecture with continuous waste-to-energy circular loops.',
    detailOverview: 'Dairy farms produce immense volumes of dung and urine that are frequently mismanaged, creating severe odor, groundwater leaching, and greenhouse gas emissions. Sphoorthi Bioenergy designs turnkey dairy infrastructure that treats manure as an immediate feedstock asset, powering the farm and generating organic fertilizer.',
    detailCards: [
      {
        title: 'Automated Manure Conveyance Systems',
        desc: 'Continuous mechanical scraper blades and low-water gravity channels that transport fresh cow dung directly into digester mixing pits without manual labor.',
        points: ['Eliminates Ammonia Build-Up in Cattle Sheds', 'Prevents Methane Loss from Stale Manure', 'Ensures Optimal Feedstock Freshness for Digestion'],
        image: '/images/generated/sustainable_dairy.jpg',
        tag: 'Automated Conveyance'
      },
      {
        title: 'Thermal Barn Climate Optimization',
        desc: 'Passive cross-ventilation, evaporative misting fans, and insulated roofing that reduce thermal heat stress on dairy cattle, boosting natural lactation.',
        points: ['Lowers Cattle Core Body Temperature', 'Improves Daily Feed Conversion Ratios', 'Enhances Animal Longevity & Welfare'],
        image: '/images/about.jpg',
        tag: 'Thermal Climate'
      },
      {
        title: 'Captive On-Farm Energy & FOM Integration',
        desc: 'Digesters sized to power on-site chilling units, automated milking machines, and lighting, while solid digestate is processed into bedding or FOM.',
        points: ['100% Farm Electrical Self-Sufficiency', 'Zero Liquid Discharge (ZLD) Compliance', 'High-Grade Organic Manure Generation'],
        image: '/images/hero.jpg',
        tag: 'Captive Power'
      }
    ],
    detailKeyTakeaways: [
      'Fully automated manure handling lowers farm labor overhead by 60%',
      'Eliminates dairy waste odors and protects local groundwater tables',
      'Transforms cattle waste into captive electricity, thermal heat, and certified organic manure'
    ]
  },
  {
    slug: 'cow-dung',
    eyebrow: 'MICROBIOME DISCOVERY',
    heading: 'Cow Dung Biotechnology & Rumen Consortia',
    highlightWord: 'Cow Dung',
    description: 'Isolating potent cellulolytic and methanogenic bacterial consortia from indigenous cow rumen to enhance anaerobic digester efficiency and formulate bio-fertilizers.',
    highlights: [
      'Rumen Microbiome Culturing & Isolation',
      'High-Efficiency Methanogenic Starter Inoculants',
      'Bioactive Humic Acid & Soil Microbe Proliferation'
    ],
    imageSrc: '/images/generated/rumen_microbiology.jpg',
    imageAlt: 'Indigenous cow dung microbiome biotechnology and organic soil research',
    badgeTag: 'Program 04',
    badgeRight: 'Enzyme Rich',
    imageCardTitle: 'Harnessing Rumen Microbial Ecology for Bioenergy & Soil',
    ctaText: 'Discover Cow Dung Biotech',
    ctaHref: '/research-development/cow-dung',
    detailTitle: 'Cow Dung Biotechnology & Rumen Consortia',
    detailSubtitle: 'Scientific isolation and application of nature’s most efficient plant fiber digesting microbiome.',
    detailOverview: 'The bovine rumen is one of the most efficient natural cellulose-digesting ecosystems on earth. Sphoorthi Bioenergy’s microbiology laboratory studies indigenous cow dung microflora to isolate resilient methanogenic archaea, cellulolytic bacteria, and natural antifungal metabolites.',
    detailCards: [
      {
        title: 'Rumen Microbial Community Profiling',
        desc: 'Analyzing the enzymatic machinery (cellulases, xylanases, pectinases) produced by symbiotic anaerobic bacteria inside indigenous cattle rumen.',
        points: ['Metagenomic Profiling of Indigenous Dung', 'Isolation of Fast-Acting Inoculum Strains', 'Identification of Temperature-Resilient Archaea'],
        image: '/images/generated/rumen_microbiology.jpg',
        tag: 'Metagenomics'
      },
      {
        title: 'High-Efficiency Digester Starter Inoculants',
        desc: 'Developing concentrated liquid cultures that accelerate digester seeding, reducing commissioning stabilization time from 90 days to under 35 days.',
        points: ['Eliminates Long Commissioning Delays', 'Establishes Robust Acetoclastic Populations', 'Prevents Early Phase Digester Acidosis'],
        image: '/images/generated/incubation.jpg',
        tag: 'Starter Cultures'
      },
      {
        title: 'Organic Soil Rejuvenation Fractions',
        desc: 'Utilizing fermented cow dung extracts to deliver natural humic acids, indole acetic acid (IAA) growth precursors, and beneficial spore-formers to crop soils.',
        points: ['Enhanced Soil Microbial Biomass Carbon', 'Natural Biological Suppression of Root Rot', 'Improves Cation Exchange Capacity (CEC)'],
        image: '/images/generated/fermented_organic_manure.jpg',
        tag: 'Soil Rejuvenation'
      }
    ],
    detailKeyTakeaways: [
      'Scientific validation of traditional Vedic agricultural knowledge through modern microbiology',
      'Significantly accelerates anaerobic digester commissioning and recovery',
      'Supplies natural microbial consortia that restore chemically exhausted agricultural soils'
    ]
  },
  {
    slug: 'indigenous-cows',
    eyebrow: 'GENETIC HERITAGE',
    heading: 'Selective Breeding & Indigenous Cow Conservation',
    highlightWord: 'Indigenous Cows',
    description: 'Promoting the conservation, genetic characterization, and scientific breeding of native Indian Zebu cattle breeds celebrated for disease resilience, climate tolerance, and A2 milk.',
    highlights: [
      'Conservation of Gir, Sahiwal, Kankrej & Tharparkar Breeds',
      'A2 Beta-Casein Milk Protein Genetic Profiling',
      'High Tropical Heat & Parasite Resistance Traits'
    ],
    imageSrc: '/images/generated/indigenous_cows.jpg',
    imageAlt: 'Indigenous Gir and Sahiwal cows thriving in natural dairy shelter',
    badgeTag: 'Program 05',
    badgeRight: 'A2 Certified',
    imageCardTitle: 'Genetic Preservation & Scientific Breeding of Native Cattle',
    ctaText: 'Discover Indigenous Cattle R&D',
    ctaHref: '/research-development/indigenous-cows',
    detailTitle: 'Selective Breeding & Indigenous Cow Conservation',
    detailSubtitle: 'Safeguarding native Bos indicus genetics for climatic resilience, disease hardiness, and superior biological inputs.',
    detailOverview: 'Indigenous Indian cattle (Bos indicus) possess exceptional genetic adaptations to tropical heat, tick-borne diseases, and drought. Sphoorthi Bioenergy actively conducts research and breeding programs to conserve premier native milch breeds while studying the unique biological properties of their milk, dung, and urine.',
    detailCards: [
      {
        title: 'Breed Characterization & Conservation',
        desc: 'Documenting and conserving elite genetic lines of Gir, Sahiwal, Kankrej, Tharparkar, and Rathi breeds to preserve phenotypic purity.',
        points: ['Pedigree Record Keeping & Genetic Lineage', 'Superior Heat Tolerance & Sweating Ability', 'High Survival Index on Native Grass Forages'],
        image: '/images/generated/indigenous_cows.jpg',
        tag: 'Pedigree Conservation'
      },
      {
        title: 'A2 Beta-Casein Genetic Verification',
        desc: 'DNA profiling and genotyping to verify homozygous A2A2 beta-casein genetics, producing digestible, nutritious milk free of A1 beta-casomorphin-7 peptides.',
        points: ['100% Verified Pure A2 Protein Profiles', 'Easier Human Gastrointestinal Digestion', 'Premium Value Market Opportunities for Farmers'],
        image: '/images/generated/rumen_microbiology.jpg',
        tag: 'A2A2 Genotyping'
      },
      {
        title: 'Manure & Urine Bioactivity Quantification',
        desc: 'Comparative laboratory analysis of indigenous cow dung versus exotic crossbred dung, confirming higher densities of beneficial aerobic spore-forming bacteria.',
        points: ['Higher Natural Antimicrobial Peptides', 'Greater Beneficial Actinomycetes Counts', 'Superior Baseline for FOM & Bio-Fertilizer Production'],
        image: '/images/generated/microbial_consortia.jpg',
        tag: 'Bioactivity Assay'
      }
    ],
    detailKeyTakeaways: [
      'Active conservation of Gir, Sahiwal, Kankrej, and Tharparkar herds',
      'Promotes sustainable native breed rearing for rural economic resilience',
      'Forms the pure biological foundation for Sphoorthi Bioorganics products'
    ]
  },
  {
    slug: 'additional-research',
    eyebrow: 'TECHNOLOGICAL FRONTIERS',
    heading: 'Additional Research & Technological Frontiers',
    highlightWord: 'Technological Frontiers',
    description: 'Pioneering breakthroughs in 3G/4G Super Napier hybrid energy crops, AI-driven digester telemetry, Type-IV composite gas cylinders, and industrial CO2 valorization.',
    highlights: [
      '3G/4G Super Napier Hybrid Breeding & Yield Benchmarks',
      'AI Predictive Telemetry Modeling for Digester Acidosis',
      'Type-IV Composite Cylinders & Industrial CO2 Utilization'
    ],
    imageSrc: '/images/about.jpg',
    imageAlt: 'Advanced bioenergy technology and industrial engineering research',
    badgeTag: 'Program 06',
    badgeRight: 'AI Telemetry',
    imageCardTitle: 'High-Yield Energy Crops, Predictive AI & Gas Transport',
    ctaText: 'Discover Frontiers R&D',
    ctaHref: '/research-development/additional-research',
    detailTitle: 'Additional Research & Technological Frontiers',
    detailSubtitle: 'Advancing energy crop agronomy, sensor telemetry, and composite gas distribution infrastructure.',
    detailOverview: 'To lead the next decade of clean bioenergy, Sphoorthi Bioenergy investigates cutting-edge innovations that amplify energy yield per hectare, enhance operational safety through machine learning, and lower logistical transportation costs for compressed biomethane.',
    detailCards: [
      {
        title: '3G & 4G Super Napier Hybrid Grass Agronomy',
        desc: 'Field evaluation of high-biomass Napier cultivars yielding 150–200 tons fresh biomass per acre annually with high cellulose and low silica content.',
        points: ['Fast 60-Day Harvest Rotational Cycles', 'High Specific Biogas Yield (110–120 Nm³/Ton)', 'Low Lignin Content for Accelerated Hydrolysis'],
        image: '/images/about.jpg',
        tag: 'Hybrid Cultivars'
      },
      {
        title: 'AI Predictive Telemetry & Process Control',
        desc: 'Developing machine learning models that process real-time sensor streams (pH, FOS/TAC, gas flow, temperature) to forecast biological acidosis days before it occurs.',
        points: ['Early Warning Anomaly Detection Algorithms', 'Automated Feedstock Dosing Recommendations', 'Cloud-Based Autonomous Safety Interlocks'],
        image: '/images/generated/operations_maintenance.jpg',
        tag: 'AI Anomaly Detection'
      },
      {
        title: 'Type-IV Composite Gas Transport Cascades',
        desc: 'Testing lightweight carbon-fiber and polymer-lined composite cylinders that double gas payload compared to conventional steel cascades, slashing transport emissions.',
        points: ['250 Bar High-Pressure Gas Storage', '60% Weight Reduction Over Steel Cascades', 'Significant Reduction in Road Freight Carbon Footprint'],
        image: '/images/engineer.jpg',
        tag: 'Type-IV Composite'
      },
      {
        title: 'Carbon Dioxide (CO2) Capture & Commercialization',
        desc: 'Separating and liquefying the 40–45% CO2 stream from biogas upgrading into food-grade liquid CO2 and dry ice for industrial applications.',
        points: ['Food & Beverage Grade Purity (>99.9%)', 'Commercial Monetization of By-Product CO2', 'Complete Carbon-Negative Circular Operations'],
        image: '/images/biomethane.jpg',
        tag: 'Liquid CO2 Capture'
      }
    ],
    detailKeyTakeaways: [
      'Proprietary agronomy protocols delivering ~21 tons Napier per 1 ton Bio-CNG',
      'Predictive AI reduces biological plant disruptions by over 80%',
      'Commercial CO2 capture converts an emission stream into an auxiliary revenue source'
    ]
  }
];
