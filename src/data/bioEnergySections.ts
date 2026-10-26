export interface SubpageSection {
  slug: string;
  eyebrow: string;
  heading: string;
  highlightWord?: string;
  description: string;
  highlights: string[];
  imageSrc: string;
  imageAlt: string;
  badgeTag: string;
  badgeRight?: string;
  imageCardTitle: string;
  ctaText: string;
  ctaHref: string;
  // Detail page content
  detailTitle: string;
  detailSubtitle: string;
  detailOverview: string;
  detailCards: {
    title: string;
    desc: string;
    points?: string[];
    tag?: string;
    image?: string;
  }[];
  detailKeyTakeaways?: string[];
  detailQuote?: string;
}

export const bioEnergySections: SubpageSection[] = [
  {
    slug: 'incubation',
    eyebrow: 'R&D & INCUBATION',
    heading: 'Technology Incubation & Project Development',
    highlightWord: 'Incubation',
    description: 'Translating bench-scale digestion trials and Biochemical Methane Potential (BMP) testing into bankable, commercially viable Bio-CNG projects with verified feedstock kinetics.',
    highlights: [
      'Feedstock Co-Digestion Trials & BMP Testing',
      'Process Automation & Gas Quality Prototyping',
      'Commercial Scale-Up & DPR Formulation'
    ],
    imageSrc: '/images/generated/incubation.jpg',
    imageAlt: 'Sphoorthi Bio Energy laboratory testing and biomass incubation',
    badgeTag: 'Solution 01',
    badgeRight: 'Lab Validated',
    imageCardTitle: 'Substrate Kinetic Profiling & Fermentation Pilot Testing',
    ctaText: 'Explore Incubation Solutions',
    ctaHref: '/bio-energy/incubation',
    detailTitle: 'Technology Incubation & Project Development',
    detailSubtitle: 'Bridging laboratory microbiological research with bankable, commercially viable Bio-CNG facilities.',
    detailOverview: 'Sustainable bioenergy relies on rigorous upfront scientific validation. Our incubation initiatives evaluate unexploited agricultural feedstocks, establish optimal carbon-to-nitrogen ratios, model volatile fatty acid kinetics, and prepare comprehensive Detailed Project Reports (DPR) tailored for national SATAT scheme subsidies.',
    detailCards: [
      {
        title: 'Feedstock Co-Digestion Trials',
        desc: 'Bench-scale substrate incubation to identify optimal carbon-to-nitrogen ratios, volatile fatty acid equilibrium, and methane yield potential across diverse organic wastes.',
        points: ['Biochemical Methane Potential (BMP) Testing', 'COD Degradation Kinetics Optimization', 'Synergistic Feedstock Blends Formulations'],
        image: '/images/generated/incubation.jpg'
      },
      {
        title: 'Process Automation Prototyping',
        desc: 'Incubating next-generation automated dosing controls and continuous gas quality sensing to stabilize digestion regimes under variable organic loading rates.',
        points: ['Real-Time Gas Chromatography Integration', 'Automated Substrate Metering Protocols', 'Early Acidosis Warning Sensor Testing'],
        image: '/images/generated/operations_maintenance.jpg'
      },
      {
        title: 'Commercial Scale-Up Engineering',
        desc: 'Developing scalable pilot plants that validate biological retention times, thermal heat dissipation, and parasitic power conservation prior to commercial rollout.',
        points: ['Hydrodynamic Reactor Modeling', 'Heat Exchanger Optimization', 'Parasitic Power Minimization Engineering'],
        image: '/images/hero.jpg'
      },
      {
        title: 'DPR & Subsidy Facilitation',
        desc: 'Formulating end-to-end Detailed Project Reports aligned with MNRE, NREDCAP, and SATAT policies to unlock up to ₹10 Crore in capital subsidies.',
        points: ['Bankable Techno-Economic Viability (TEV)', 'Statutory Environmental & Fire Clearances', 'Offtake Tie-Ups with City Gas Distribution (CGD)'],
        image: '/images/about.jpg'
      }
    ],
    detailKeyTakeaways: [
      'Comprehensive BMP testing on Napier grass, paddy straw, sugar press mud, and distillery effluents',
      'Proven yield benchmark of 110–120 Nm³ raw biogas per ton of fresh dedicated biomass',
      'Full institutional assistance for MNRE, SATAT, and State Renewable Energy development agencies'
    ]
  },
  // {
  //   slug: 'technology-solutions',
  //   eyebrow: 'GAS PURIFICATION',
  //   heading: 'Biogas, CBG & Bio-Methane Technology',
  //   highlightWord: 'Bio-Methane',
  //   description: 'Advanced continuous stirred-tank anaerobic digestion (CSTR), biological H2S scrubbing, and 3-stage membrane upgrading delivering automotive-grade Bio-CNG (>98% CH4).',
  //   highlights: [
  //     'Continuous Stirred-Tank Digesters (CSTR)',
  //     'Biological H2S Scrubbing & Desulfurization',
  //     '3-Stage Polyimide Membrane Upgrading (>98% CH4)'
  //   ],
  //   imageSrc: '/images/biomethane.jpg',
  //   imageAlt: 'Industrial biomethane membrane separation upgrading system',
  //   badgeTag: 'Solution 02',
  //   badgeRight: 'IS 16087:2016',
  //   imageCardTitle: '3-Stage Membrane Gas Upgrading & Purification Columns',
  //   ctaText: 'Explore Technology Solutions',
  //   ctaHref: '/bio-energy/technology-solutions',
  //   detailTitle: 'Biogas, CBG & Bio-Methane Technology',
  //   detailSubtitle: 'Engineering high-recovery membrane upgrading, biological desulfurization, and continuous anaerobic digestion systems.',
  //   detailOverview: 'Raw biogas contains methane (50–65%), carbon dioxide (35–45%), hydrogen sulfide (H2S), and moisture. Sphoorthi Bioenergy deploys proven high-performance gas processing systems—combining biological desulfurization, multi-stage refrigeration drying, and advanced polymer membrane separation—to produce compressed biomethane with >98% CH4 purity meeting IS 16087:2016 automotive and grid-injection standards.',
  //   detailCards: [
  //     {
  //       title: 'Continuous Stirred-Tank Anaerobic Digestion (CSTR)',
  //       desc: 'High-volume thermophilic and mesophilic CSTR systems engineered for consistent biological retention, uniform substrate shear, and minimal scum formation.',
  //       points: ['Optimized Hydraulic Retention Time (HRT)', 'Anti-Foaming & Slurry Homogenization', 'Zoned Thermal Jacketing & Insulation'],
  //       image: '/images/hero.jpg'
  //     },
  //     {
  //       title: 'Biological & Chemical H2S Scrubbing',
  //       desc: 'Two-stage biological trickling filters coupled with activated carbon polishing that reduce raw H2S from 5,000+ ppm down to <5 ppm without toxic chemical hazards.',
  //       points: ['Thiobacillus Microaerophilic Bio-Scrubbing', 'Low Parasitic Pressure Drop Columns', 'Zero Caustic Effluent Generation'],
  //       image: '/images/engineer.jpg'
  //     },
  //     {
  //       title: '3-Stage Polyimide Membrane Separation',
  //       desc: 'Precision selective hollow-fiber polymer membranes that separate CO2 from CH4 with 99%+ recovery rates, producing >98% pure Bio-CNG.',
  //       points: ['Automated Multistage Separation Cascades', 'High Durability Polyimide Fibers', 'Continuous Online Gas Chromatography'],
  //       image: '/images/biomethane.jpg'
  //     },
  //     {
  //       title: 'High-Pressure Gas Compression & Cascade Bottling',
  //       desc: 'Hermetically sealed 4-stage CNG gas compressors boosting purified methane to 250 bar for seamless storage into mobile cascade cascades or grid pipelines.',
  //       points: ['Explosion-Proof Motor & Flameproof Switchgear', 'Automated Priority Refueling Dispensers', 'Real-Time Telemetry & Pressure Relief Safety'],
  //       image: '/images/generated/operations_maintenance.jpg'
  //     }
  //   ],
  //   detailKeyTakeaways: [
  //     'Consistent >98% methane concentration exceeding IS 16087:2016 automotive fuel standards',
  //     'Methane recovery efficiency exceeding 99% with minimal parasitic slip (<0.5%)',
  //     'Fully automated continuous gas chromatography monitoring with automated bypass safety flares'
  //   ]
  // },
  {
    slug: 'turnkey-epc',
    eyebrow: 'INFRASTRUCTURE EPC',
    heading: 'Turnkey EPC Delivery & Civil Infrastructure',
    highlightWord: 'Turnkey EPC',
    description: 'Single-point accountability from 3D P&ID modeling and specialized vessel fabrication to heavy-duty civil execution with premier partner SS Builders (30+ years).',
    highlights: [
      'Custom 3D P&ID Modeling & Structural Design',
      'Glass-Fused-to-Steel & Double-Membrane Gas Holders',
      'Premier Civil Partner: SS Builders (30+ Years)'
    ],
    imageSrc: '/images/hero.jpg',
    imageAlt: 'Sphoorthi Bio Energy industrial turnkey biogas EPC plant',
    badgeTag: 'Solution 02',
    badgeRight: '30+ Yrs Heritage',
    imageCardTitle: 'Commercial Turnkey Bio-CNG Facility Engineering',
    ctaText: 'Explore Turnkey EPC',
    ctaHref: '/bio-energy/turnkey-epc',
    detailTitle: 'Turnkey EPC Delivery & Civil Infrastructure',
    detailSubtitle: 'Single-point accountability from conceptual 3D design to mechanical fabrication, civil execution, and performance-tested handover.',
    detailOverview: 'We execute turnkey engineering, procurement, and construction (EPC) projects across industrial, municipal, and agricultural domains. Our civil partner, SS Builders & Sphoorthi Promoters, brings over 30 years of premier civil construction expertise having delivered mega-infrastructure projects for industry leaders such as Reliance Biogas and GPS Renewables.',
    detailCards: [
      {
        title: 'Plant Design & Detailed Engineering',
        desc: 'Comprehensive civil, mechanical, structural, and electrical design customized for site layout, feedstock characteristics, and safety standards.',
        points: ['3D P&ID Modeling & Fluid Dynamics', 'Digester Sizing & Mixing Optimization', 'Hydraulic Retention Analysis', 'Zoned Hazardous Area Safety Planning'],
        image: '/images/engineer.jpg'
      },
      {
        title: 'Specialized Vessel Fabrication & Sourcing',
        desc: 'Strategic sourcing and fabrication of corrosion-resistant digesters, double-membrane gas holders, biological desulfurization units, and heavy-duty substrate macerators.',
        points: ['High-Grade Stainless Steel & Glass-Fused Vessels', 'High-Thrust Slurry Submersible Agitators', 'Automated Pneumatic Valves & Telemetry', 'High-Pressure Gas Compression Equipment'],
        image: '/images/biomethane.jpg'
      },
      {
        title: 'Civil Construction & Infrastructure (SS Builders)',
        desc: 'Rigorous on-site heavy-duty civil execution, foundation slabs, gas-tight containment bunds, and explosion-proof electrical substations.',
        points: ['Heavy-Duty Foundation Slabs (SS Builders)', 'Gas-Tight Piping & Drainage Systems', 'Thermal Insulation Jacketing & Heat Loops', 'MCC & PLC Control Panel Integration'],
        image: '/images/hero.jpg'
      },
      {
        title: 'Commissioning & Performance Testing',
        desc: 'Active inoculum seeding management, biological stabilization verification, safety interlock tests, and performance-guarantee handover trials.',
        points: ['Active Inoculum Seeding Management', 'Biological Stabilization Verification', 'Safety Interlock & Relief Testing', 'Client Operator Comprehensive Training'],
        image: '/images/generated/operations_maintenance.jpg'
      }
    ],
    detailKeyTakeaways: [
      'Civil partner SS Builders & Sphoorthi Promoters holds 30+ years civil execution experience',
      'Gas purity consistently exceeds 98% methane, fully complying with IS 16087:2016 automotive standards',
      'Integrated SCADA control systems with automated safety interlocks and flare-off systems'
    ]
  },
  {
    slug: 'plant-revamps',
    eyebrow: 'ASSET RETROFITTING',
    heading: 'Existing Plant Revamps & Performance Modernization',
    highlightWord: 'Revamps',
    description: 'Transforming underperforming, clogged, or obsolete legacy biogas installations into high-yield, commercially profitable Bio-CNG assets through targeted retrofits.',
    highlights: [
      'Submersible Mixing & De-Crusting Upgrades',
      'Advanced Membrane Biogas Upgrading Additions',
      'Thermal Heat Recovery & PLC Automation'
    ],
    imageSrc: '/images/engineer.jpg',
    imageAlt: 'Modernized biogas upgrading system and membrane separation',
    badgeTag: 'Solution 03',
    badgeRight: 'Yield +40%',
    imageCardTitle: 'Digester Retrofitting & Upgrading Technology Integration',
    ctaText: 'Explore Plant Revamps',
    ctaHref: '/bio-energy/plant-revamps',
    detailTitle: 'Existing Plant Revamps & Performance Modernization',
    detailSubtitle: 'Turning underperforming bioenergy installations into highly profitable, efficient facilities.',
    detailOverview: 'Many legacy biogas installations suffer from suboptimal gas yields, recurring biological crusting, undersized mixing systems, or high parasitic electrical consumption. Sphoorthi Bioenergy conducts comprehensive diagnostic audits to modernize, upgrade, and revamp underperforming assets into profitable, modern facilities.',
    detailCards: [
      {
        title: 'Digester Mixing Retrofits',
        desc: 'Replacing obsolete low-efficiency paddle mixers with high-thrust submersible or external pump mixing to eliminate sediment accumulation and crust layers.',
        points: ['Elimination of Dead Zones', 'Uniform Slurry Temperature Distribution', 'Prevention of Top Floating Scum Layers'],
        image: '/images/hero.jpg'
      },
      {
        title: 'Biogas Upgrading Additions',
        desc: 'Integrating advanced 3-stage membrane separation or chemical scrubbers to convert raw flaring biogas into revenue-generating Bio-CNG.',
        points: ['Raw Biogas to 98%+ Pure CBG', 'CO2 Separation & Capture Preparation', 'Automated Cylinder Cascades Filling'],
        image: '/images/biomethane.jpg'
      },
      {
        title: 'Thermal Integration Upgrades',
        desc: 'Retrofitting waste heat recovery exchangers to keep digesters at precise mesophilic/thermophilic ranges without relying on auxiliary heaters.',
        points: ['Exhaust Gas Heat Recovery', 'Jacketed Digester Insulation', 'Net Parasitic Power Reduction'],
        image: '/images/engineer.jpg'
      },
      {
        title: 'Instrumentation & SCADA Modernization',
        desc: 'Replacing obsolete manual controls with fully automated PLC panels, remote diagnostics, and fail-safe safety shutdowns.',
        points: ['Digital Mass Flow Meters', 'Continuous Methane & H2S Sensors', 'Remote Cloud Supervision Integration'],
        image: '/images/generated/operations_maintenance.jpg'
      }
    ],
    detailKeyTakeaways: [
      'Comprehensive on-site plant diagnostic audit before engineering interventions',
      'Average 25%–40% increase in methane output achieved through mixing and biological revamp',
      'Immediate payback by converting flared gas into monetizable compressed Bio-CNG'
    ]
  },
  {
    slug: 'operations-maintenance',
    eyebrow: 'PLANT RELIABILITY',
    heading: 'Operations & Preventative Maintenance (O&M)',
    highlightWord: 'O&M',
    description: 'Disciplined electro-mechanical upkeep, 24/7 telemetry monitoring, and proactive biological health management ensuring 98%+ plant uptime and stable methane yields.',
    highlights: [
      'Continuous pH & FOS/TAC Biological Monitoring',
      '24/7 Telemetry & Remote SCADA Supervision',
      'Guaranteed 98%+ Targeted Operational Uptime'
    ],
    imageSrc: '/images/generated/operations_maintenance.jpg',
    imageAlt: 'Plant engineer performing telemetry inspection and maintenance',
    badgeTag: 'Solution 04',
    badgeRight: '24/7 Monitoring',
    imageCardTitle: 'Disciplined Electro-Mechanical & Biological Asset Care',
    ctaText: 'Explore O&M Programs',
    ctaHref: '/bio-energy/operations-maintenance',
    detailTitle: 'Operations & Preventative Maintenance (O&M)',
    detailSubtitle: 'Maximizing long-term asset availability, biological stability, and commercial revenue generation.',
    detailOverview: 'Maximizing plant uptime requires constant biological monitoring and disciplined electro-mechanical upkeep. Our specialized O&M programs safeguard your capital assets, maintain target methane percentages (>98%), and prevent costly operational shutdowns through structured predictive maintenance schedules.',
    detailCards: [
      {
        title: 'Biological Process Health Management',
        desc: 'Continuous biological tracking to prevent process upset, acidification, or ammonia toxicity inside the digester vessels.',
        points: ['Daily pH & Temperature Monitoring', 'FOS/TAC Ratio & Volatile Fatty Acid Titration', 'Microbial Biomass Density Assessments'],
        image: '/images/generated/incubation.jpg'
      },
      {
        title: 'Preventative Machinery Audits',
        desc: 'Systematic vibration analysis, mechanical seal maintenance, and scheduled blower, compressor, and pump servicing.',
        points: ['Macerator Blade Sharpening & Balancing', 'Agitator Bearing & Lubrication Regimes', 'Compressor Valve & Ring Overhauls'],
        image: '/images/engineer.jpg'
      },
      {
        title: 'Remote SCADA Supervision',
        desc: 'Centralized telemetry providing real-time alarms for gas pressure, flow, and H2S levels with automatic fail-safe trip mechanisms.',
        points: ['Cloud-Linked Telemetry Dashboard', 'Automated Gas Quality Logging', 'Instant Emergency Notification Protocols'],
        image: '/images/generated/operations_maintenance.jpg'
      },
      {
        title: 'Spare Parts Inventory Logistics',
        desc: 'Rapid replacement of high-wear items such as macerator cutters, progressive cavity pump stators, and optical gas sensors.',
        points: ['On-Site Consumables Buffer Stock', 'Manufacturer-Certified Replacement Parts', 'Guaranteed Minimum Downtime SLAs'],
        image: '/images/hero.jpg'
      }
    ],
    detailKeyTakeaways: [
      'Targeted 98%+ plant operational uptime backed by contract SLAs',
      'Rapid deployment biological response teams for process stabilization',
      'Full compliance with safety audits, flare arrestors, and pressure relief valve calibrations'
    ]
  },
  {
    slug: 'bio-enzymes',
    eyebrow: 'ENZYMATIC ACCELERATION',
    heading: 'Bio-Enzymes in Organic Waste Degradation',
    highlightWord: 'Bio-Enzymes',
    description: 'Proprietary biocatalysts that accelerate the hydrolysis of recalcitrant lignocellulosic crop residues, animal lipids, and starch wastes, unlocking maximum gas yield.',
    highlights: [
      'Cellulase & Hemicellulase Lignin Cleavage',
      'Protease & Lipase Scum Reduction Formulations',
      'Viscosity Lowering & Rapid Acidogenesis'
    ],
    imageSrc: '/images/generated/bio_enzymes.jpg',
    imageAlt: 'Microbial bio-enzyme fermentation reactors',
    badgeTag: 'Solution 05',
    badgeRight: 'Accelerated Hydrolysis',
    imageCardTitle: 'Enzymatic Hydrolysis for Recalcitrant Biomass',
    ctaText: 'Explore Bio-Enzymes',
    ctaHref: '/bio-energy/bio-enzymes',
    detailTitle: 'Bio-Enzymes in Organic Waste Degradation',
    detailSubtitle: 'Overcoming the rate-limiting hydrolysis barrier to accelerate biomethanation and lower digester retention time.',
    detailOverview: 'Complex organic matrices—such as lignocellulosic crop residues (Napier grass, paddy straw, bagasse), animal lipids, and industrial starch streams—can bottleneck anaerobic digestion during the initial hydrolysis phase. Sphoorthi Bioenergy supplies specialized biocatalysts that target rate-limiting structural polymers to support smoother biological conversion.',
    detailCards: [
      {
        title: 'Cellulase & Hemicellulase Complexes',
        desc: 'Aids in the hydrolytic cleavage of tough cellulose and hemicellulose fibers in agricultural residues such as paddy straw, bagasse, and Napier grass.',
        points: ['Targeted Lignocellulosic Cleavage', 'Accelerated Soluble Sugar Release', 'Reduced Hydraulic Retention Time (HRT)'],
        image: '/images/generated/bio_enzymes.jpg'
      },
      {
        title: 'Protease & Lipase Preparations',
        desc: 'Formulated to assist in hydrolyzing long-chain lipids and proteins found in dairy washwater, food manufacturing sludge, and slaughterhouse effluents.',
        points: ['Elimination of Surface Fat Crusts', 'Improved Slurry Homogeneity', 'Enhanced Long-Chain Fatty Acid (LCFA) Digestion'],
        image: '/images/about.jpg'
      },
      {
        title: 'Amylase Hydrolytic Formulations',
        desc: 'Catalyzes rapid starch-to-sugar conversion, reducing slurry viscosity and facilitating steady volatile fatty acid production in high-solids digesters.',
        points: ['Substrate Flowability Enhancement', 'Reduced Parasitic Mixer Motor Load', 'Stabilized Acidogenic Pre-Acidification'],
        image: '/images/generated/incubation.jpg'
      }
    ],
    detailKeyTakeaways: [
      'Reduces digester hydraulic retention time by up to 20%',
      'Lowers parasitic power consumption of substrate mixing pumps',
      'Maximizes specific methane yield from tough agricultural residues'
    ]
  },
  {
    slug: 'bio-nutrients',
    eyebrow: 'BIOLOGICAL VITALITY',
    heading: 'Bio-Nutrients & Digester Methanogen Health',
    highlightWord: 'Bio-Nutrients',
    description: 'Specialized micronutrient and trace mineral consortia that nourish methanogenic archaea, prevent biological acidosis, and stabilize anaerobic digestion under high loading.',
    highlights: [
      'Chelated Trace Minerals (Nickel, Cobalt, Selenium)',
      'Natural Biological Alkalinity & Acidosis Buffering',
      'Enhanced Substrate Methane Conversion Rate'
    ],
    imageSrc: '/images/generated/bio_nutrients.jpg',
    imageAlt: 'Microbial bio-nutrients and plant vitality solutions',
    badgeTag: 'Solution 06',
    badgeRight: 'High Biomass Vitality',
    imageCardTitle: 'Methanogenic Trace Mineral Balance & Biological Health',
    ctaText: 'Explore Bio-Nutrients',
    ctaHref: '/bio-energy/bio-nutrients',
    detailTitle: 'Bio-Nutrients & Digester Methanogen Health',
    detailSubtitle: 'Formulated micronutrient and enzymatic cocktails designed to sustain methanogenic archael metabolism under intensive organic loads.',
    detailOverview: 'Anaerobic methanogens are delicate microorganisms requiring balanced carbon-to-nitrogen ratios, macro-nutrients (N, P, K), and critical trace elements (Ni, Co, Mo, Se, Fe) to synthesize key metabolic enzymes such as coenzyme F420 and methyl-coenzyme M reductase. Our Bio-Nutrient blends prevent biological washouts and sustain high gas production.',
    detailCards: [
      {
        title: 'Essential Trace Mineral Complexes',
        desc: 'Supplying bio-available chelated Nickel, Cobalt, Molybdenum, and Selenium required by methanogenic archaea for methane enzyme synthesis.',
        points: ['Chelated Bioavailable Ions', 'Eliminates Micronutrient Starvation', 'Boosts Specific Methanogen Activity'],
        image: '/images/generated/bio_nutrients.jpg'
      },
      {
        title: 'Acidosis Buffering Formulations',
        desc: 'Balancing volatile fatty acids (VFA) and providing natural biological alkalinity to prevent sudden pH crashes during substrate overload.',
        points: ['Natural Carbonate Buffering', 'Rapid VFA Consumption Rate', 'Prevents Irreversible Digester Soured Conditions'],
        image: '/images/generated/microbial_consortia.jpg'
      },
      {
        title: 'Biomass Colonization Enhancers',
        desc: 'Microbial carrier substrates and biopolymers that encourage anaerobic sludge granulation and high-density biofilm formation in CSTR reactors.',
        points: ['Improved Sludge Settleability', 'Prevention of Culture Washout', 'Greater Organic Loading Rate (OLR) Capacity'],
        image: '/images/generated/incubation.jpg'
      }
    ],
    detailKeyTakeaways: [
      'Maintains stable FOS/TAC ratio below 0.3 under high organic loading',
      'Provides complete bio-available trace mineral spectrum for methanogens',
      'Accelerates plant recovery following feedstock changes or seasonal shifts'
    ]
  },
  // Backward compatibility alias for 'technology-epc'
  {
    slug: 'technology-epc',
    eyebrow: 'INFRASTRUCTURE EPC',
    heading: 'Turnkey EPC Delivery & Civil Infrastructure',
    highlightWord: 'Turnkey EPC',
    description: 'Single-point accountability from 3D P&ID modeling and specialized vessel fabrication to heavy-duty civil execution with premier partner SS Builders (30+ years).',
    highlights: [
      'Custom 3D P&ID Modeling & Structural Design',
      'Glass-Fused-to-Steel & Double-Membrane Gas Holders',
      'Premier Civil Partner: SS Builders (30+ Years)'
    ],
    imageSrc: '/images/hero.jpg',
    imageAlt: 'Sphoorthi Bio Energy industrial turnkey biogas EPC plant',
    badgeTag: 'Solution 03',
    badgeRight: '30+ Yrs Heritage',
    imageCardTitle: 'Commercial Turnkey Bio-CNG Facility Engineering',
    ctaText: 'Explore Turnkey EPC',
    ctaHref: '/bio-energy/turnkey-epc',
    detailTitle: 'Turnkey EPC Delivery & Civil Infrastructure',
    detailSubtitle: 'Single-point accountability from conceptual 3D design to mechanical fabrication, civil execution, and performance-tested handover.',
    detailOverview: 'We execute turnkey engineering, procurement, and construction (EPC) projects across industrial, municipal, and agricultural domains. Our civil partner, SS Builders & Sphoorthi Promoters, brings over 30 years of premier civil construction expertise having delivered mega-infrastructure projects for industry leaders such as Reliance Biogas and GPS Renewables.',
    detailCards: [
      {
        title: 'Plant Design & Detailed Engineering',
        desc: 'Comprehensive civil, mechanical, structural, and electrical design customized for site layout, feedstock characteristics, and safety standards.',
        points: ['3D P&ID Modeling & Fluid Dynamics', 'Digester Sizing & Mixing Optimization', 'Hydraulic Retention Analysis', 'Zoned Hazardous Area Safety Planning'],
        image: '/images/engineer.jpg'
      },
      {
        title: 'Specialized Vessel Fabrication & Sourcing',
        desc: 'Strategic sourcing and fabrication of corrosion-resistant digesters, double-membrane gas holders, biological desulfurization units, and heavy-duty substrate macerators.',
        points: ['High-Grade Stainless Steel & Glass-Fused Vessels', 'High-Thrust Slurry Submersible Agitators', 'Automated Pneumatic Valves & Telemetry', 'High-Pressure Gas Compression Equipment'],
        image: '/images/biomethane.jpg'
      },
      {
        title: 'Civil Construction & Infrastructure (SS Builders)',
        desc: 'Rigorous on-site heavy-duty civil execution, foundation slabs, gas-tight containment bunds, and explosion-proof electrical substations.',
        points: ['Heavy-Duty Foundation Slabs (SS Builders)', 'Gas-Tight Piping & Drainage Systems', 'Thermal Insulation Jacketing & Heat Loops', 'MCC & PLC Control Panel Integration'],
        image: '/images/hero.jpg'
      },
      {
        title: 'Commissioning & Performance Testing',
        desc: 'Active inoculum seeding management, biological stabilization verification, safety interlock tests, and performance-guarantee handover trials.',
        points: ['Active Inoculum Seeding Management', 'Biological Stabilization Verification', 'Safety Interlock & Relief Testing', 'Client Operator Comprehensive Training'],
        image: '/images/generated/operations_maintenance.jpg'
      }
    ],
    detailKeyTakeaways: [
      'Civil partner SS Builders & Sphoorthi Promoters holds 30+ years civil execution experience',
      'Gas purity consistently exceeds 98% methane, fully complying with IS 16087:2016 automotive standards',
      'Integrated SCADA control systems with automated safety interlocks and flare-off systems'
    ]
  }
];
