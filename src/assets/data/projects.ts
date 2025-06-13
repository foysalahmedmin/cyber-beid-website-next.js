export type TProject = {
  _id: string;
  title: string;
  description: string;
  thumbnail: string;
  images: string[];
  tags: string[];
  category: string;
  client: string;
  location: string;
  date: Date;
  sector:
    | "content-creation"
    | "digital-marketing"
    | "lead-generation"
    | "video-production"
    | "graphic-design"
    | "ui-ux-design"
    | "application-systems-development"
    | "business-solutions"
    | "online-support";
  link: string;
  details: {
    thumbnail: string;
    title: string;
    description: string;
    links?: {
      text?: string;
      url?: string;
    }[];
  };
  points: {
    thumbnail: string;
    list: {
      _id: string;
      title: string;
      description: string;
      links?: {
        text?: string;
        url?: string;
      }[];
    }[];
  };
};

export const projects: TProject[] = [
  // Content Creation Projects
  {
    _id: "global-tech-blog-network",
    title: "Global Tech Blog Network",
    description:
      "Content strategy and creation for international tech publication",
    thumbnail: "/images/projects/global-tech-blog-network.png",
    images: [
      "/images/projects/global-tech-blog-network-1.png",
      "/images/projects/global-tech-blog-network-2.png",
    ],
    tags: ["content strategy", "SEO", "blogging"],
    category: "Digital Publishing",
    client: "TechSphere Media",
    location: "San Francisco, CA",
    date: new Date("2023-05-15"),
    sector: "content-creation",
    link: "/projects/global-tech-blog-network",
    details: {
      thumbnail: "/images/projects/global-tech-blog-network-details.png",
      title: "Tech Blog Network Expansion",
      description:
        "Developed and executed a comprehensive content strategy for a network of 12 technology blogs targeting different global markets. Produced 300+ SEO-optimized articles, increasing organic traffic by 240% within 9 months.",
      links: [
        { text: "Case Study", url: "/case-studies/tech-blog" },
        { text: "Content Samples", url: "/samples/tech-content" },
      ],
    },
    points: {
      thumbnail: "/images/projects/global-tech-blog-network-points.png",
      list: [
        {
          _id: "ccp-1",
          title: "Multilingual Content Development",
          description:
            "Created localized content for 8 languages while maintaining technical accuracy and brand consistency across all markets. Implemented a translation management system that reduced production time by 35%.",
          links: [{ text: "Localization Guide", url: "/guides/localization" }],
        },
        {
          _id: "ccp-2",
          title: "SEO-Optimized Technical Content",
          description:
            "Developed content clusters around emerging technologies like quantum computing and edge AI, targeting long-tail keywords that increased domain authority by 48 points. Content consistently ranks in top 3 positions for 78% of target keywords.",
        },
      ],
    },
  },
  {
    _id: "health-wellness-video-series",
    title: "Health & Wellness Video Series",
    description: "Educational video content production for healthcare provider",
    thumbnail: "/images/projects/health-wellness-video-series.png",
    images: [
      "/images/projects/health-wellness-video-series-1.png",
      "/images/projects/health-wellness-video-series-2.png",
    ],
    tags: ["video production", "educational content", "healthcare"],
    category: "Healthcare Education",
    client: "VitalCare Health Systems",
    location: "Chicago, IL",
    date: new Date("2022-11-30"),
    sector: "content-creation",
    link: "/projects/health-wellness-video-series",
    details: {
      thumbnail: "/images/projects/health-wellness-video-series-details.png",
      title: "Patient Education Video Campaign",
      description:
        "Produced 52-week video series covering chronic disease management, preventative care, and wellness strategies. Content achieved 92% patient engagement rate and reduced clinical consultation time by 25%.",
      links: [{ text: "Video Samples", url: "/samples/health-videos" }],
    },
    points: {
      thumbnail: "/images/projects/health-wellness-video-series-points.png",
      list: [
        {
          _id: "ccp-3",
          title: "Medical Accuracy Compliance",
          description:
            "Implemented rigorous medical review process with board-certified physicians to ensure all content met clinical guidelines while maintaining patient accessibility. Developed comprehensive documentation system for regulatory compliance.",
        },
        {
          _id: "ccp-4",
          title: "Accessible Content Design",
          description:
            "Created content with closed captions, audio descriptions, and simplified language versions to meet ADA requirements. Accessibility features increased audience reach by 40% across diverse patient demographics.",
        },
      ],
    },
  },

  // Digital Marketing Projects
  {
    _id: "eco-fashion-brand-relaunch",
    title: "Eco-Fashion Brand Relaunch",
    description:
      "360° digital marketing campaign for sustainable apparel brand",
    thumbnail: "/images/projects/eco-fashion-brand-relaunch.png",
    images: [
      "/images/projects/eco-fashion-brand-relaunch-1.png",
      "/images/projects/eco-fashion-brand-relaunch-2.png",
    ],
    tags: ["sustainability", "influencer", "email"],
    category: "Fashion Retail",
    client: "GreenThread Apparel",
    location: "Portland, OR",
    date: new Date("2023-02-20"),
    sector: "digital-marketing",
    link: "/projects/eco-fashion-brand-relaunch",
    details: {
      thumbnail: "/images/projects/eco-fashion-brand-relaunch-details.png",
      title: "Sustainable Fashion Marketing",
      description:
        "Developed and executed multi-channel digital marketing strategy highlighting ethical production practices and sustainable materials. Campaign generated 5x ROI with 35% customer acquisition cost reduction.",
      links: [{ text: "Campaign Report", url: "/reports/greenthread" }],
    },
    points: {
      thumbnail: "/images/projects/eco-fashion-brand-relaunch-points.png",
      list: [
        {
          _id: "dmp-1",
          title: "Influencer Collaboration Network",
          description:
            "Built and managed network of 87 micro-influencers in sustainable living space, generating authentic content that drove 15,000+ new email subscribers and 42% increase in direct sales during campaign period.",
        },
        {
          _id: "dmp-2",
          title: "Customer Journey Personalization",
          description:
            "Implemented AI-driven personalization across all touchpoints, creating dynamic content paths based on sustainability interests and purchase behavior. Increased conversion rate by 28% and average order value by 19%.",
        },
      ],
    },
  },
  {
    _id: "b2b-saas-demand-generation",
    title: "B2B SaaS Demand Generation",
    description: "Lead generation campaign for enterprise software platform",
    thumbnail: "/images/projects/b2b-saas-demand-generation.png",
    images: [
      "/images/projects/b2b-saas-demand-generation-1.png",
      "/images/projects/b2b-saas-demand-generation-2.png",
    ],
    tags: ["B2B", "lead gen", "ABM"],
    category: "Enterprise Software",
    client: "Nexus Analytics",
    location: "Boston, MA",
    date: new Date("2023-08-10"),
    sector: "digital-marketing",
    link: "/projects/b2b-saas-demand-generation",
    details: {
      thumbnail: "/images/projects/b2b-saas-demand-generation-details.png",
      title: "Enterprise SaaS Marketing",
      description:
        "Created account-based marketing program targeting Fortune 500 companies in financial services sector. Generated $4.2M pipeline within 6 months with 22% conversion rate to qualified opportunities.",
      links: [{ text: "ABM Strategy", url: "/strategies/abm" }],
    },
    points: {
      thumbnail: "/images/projects/b2b-saas-demand-generation-points.png",
      list: [
        {
          _id: "dmp-3",
          title: "Industry-Specific Content Hubs",
          description:
            "Developed specialized content centers for banking, insurance, and investment management sectors, providing tailored solutions to industry-specific challenges. Increased engagement from target accounts by 175%.",
        },
        {
          _id: "dmp-4",
          title: "Predictive Lead Scoring",
          description:
            "Implemented machine learning-based lead scoring system that analyzed engagement patterns and firmographic data, improving sales qualification efficiency by 40% and reducing follow-up time by 65%.",
        },
      ],
    },
  },
  {
    _id: "automotive-launch-campaign",
    title: "Electric Vehicle Launch Campaign",
    description: "Multi-platform advertising campaign for EV launch",
    thumbnail: "/images/projects/automotive-launch-campaign.png",
    images: [
      "/images/projects/automotive-launch-campaign-1.png",
      "/images/projects/automotive-launch-campaign-2.png",
    ],
    tags: ["automotive", "video ads", "CTR"],
    category: "Automotive",
    client: "Volt Motors",
    location: "Detroit, MI",
    date: new Date("2023-04-22"),
    sector: "digital-marketing",
    link: "/projects/automotive-launch-campaign",
    details: {
      thumbnail: "/images/projects/automotive-launch-campaign-details.png",
      title: "Electric Vehicle Market Launch",
      description:
        "Developed and executed cross-channel advertising strategy for new electric SUV launch, achieving 12.5% CTR and 34% lower cost-per-lead than industry benchmarks.",
      links: [{ text: "Ad Creatives", url: "/creatives/volt-motors" }],
    },
    points: {
      thumbnail: "/images/projects/automotive-launch-campaign-points.png",
      list: [
        {
          _id: "adp-1",
          title: "Programmatic Media Buying",
          description:
            "Implemented AI-driven programmatic strategy across CTV, display, and social channels that optimized bids in real-time based on conversion probability. Achieved 38% higher viewability and 27% lower CPA than traditional media buying.",
        },
        {
          _id: "adp-2",
          title: "Interactive Ad Experiences",
          description:
            "Created AR-powered ad units allowing virtual test drives and vehicle customization, increasing engagement time by 4.7x and configurator tool usage by 210% compared to standard video ads.",
        },
      ],
    },
  },
  {
    _id: "fitness-app-subscription-growth",
    title: "Fitness App Subscription Growth",
    description:
      "Performance advertising for subscription-based fitness platform",
    thumbnail: "/images/projects/fitness-app-subscription-growth.png",
    images: [
      "/images/projects/fitness-app-subscription-growth-1.png",
      "/images/projects/fitness-app-subscription-growth-2.png",
    ],
    tags: ["mobile", "subscription", "ROAS"],
    category: "Fitness Tech",
    client: "FitLife Pro",
    location: "Austin, TX",
    date: new Date("2023-01-15"),
    sector: "digital-marketing",
    link: "/projects/fitness-app-subscription-growth",
    details: {
      thumbnail: "/images/projects/fitness-app-subscription-growth-details.png",
      title: "App Subscription Acceleration",
      description:
        "Scaled performance advertising across social and search platforms to drive premium subscriptions, achieving 4.8x ROAS while maintaining CPA 22% below target.",
      links: [{ text: "Performance Report", url: "/reports/fitlife" }],
    },
    points: {
      thumbnail: "/images/projects/fitness-app-subscription-growth-points.png",
      list: [
        {
          _id: "adp-3",
          title: "Lifecycle-Based Bidding",
          description:
            "Developed custom bidding strategies based on user lifecycle stage and predicted LTV, allowing efficient budget allocation across acquisition and remarketing campaigns. Increased subscriber retention by 35%.",
        },
        {
          _id: "adp-4",
          title: "Creative Personalization Engine",
          description:
            "Built dynamic creative optimization system that generated personalized ad variations based on fitness interests, local weather, and time of day. Personalized creatives outperformed generic versions by 63% in conversion rate.",
        },
      ],
    },
  },

  // Lead Generation Projects
  {
    _id: "commercial-real-estate-leads",
    title: "Commercial Real Estate Leads",
    description: "Lead generation program for commercial property developers",
    thumbnail: "/images/projects/commercial-real-estate-leads.png",
    images: [
      "/images/projects/commercial-real-estate-leads-1.png",
      "/images/projects/commercial-real-estate-leads-2.png",
    ],
    tags: ["commercial", "landing pages", "CRM"],
    category: "Real Estate",
    client: "Metro Property Group",
    location: "New York, NY",
    date: new Date("2023-07-01"),
    sector: "lead-generation",
    link: "/projects/commercial-real-estate-leads",
    details: {
      thumbnail: "/images/projects/commercial-real-estate-leads-details.png",
      title: "High-Value Property Lead Generation",
      description:
        "Developed targeted lead generation system for commercial properties valued $5M+, generating 287 qualified leads in first quarter with 31% conversion rate to serious inquiries.",
      links: [{ text: "Lead Funnel", url: "/funnels/commercial-real-estate" }],
    },
    points: {
      thumbnail: "/images/projects/commercial-real-estate-leads-points.png",
      list: [
        {
          _id: "lgp-1",
          title: "Intent-Based Targeting",
          description:
            "Implemented predictive targeting model identifying commercial real estate investors based on business expansion patterns, property ownership records, and financial indicators. Increased lead quality score by 48%.",
        },
        {
          _id: "lgp-2",
          title: "Virtual Property Tours",
          description:
            "Created interactive 3D property experiences that captured lead information before granting full access, resulting in 22% conversion rate from tour starters to qualified leads.",
        },
      ],
    },
  },
  {
    _id: "enterprise-cybersecurity-leads",
    title: "Enterprise Cybersecurity Leads",
    description: "B2B lead program for cybersecurity solutions",
    thumbnail: "/images/projects/enterprise-cybersecurity-leads.png",
    images: [
      "/images/projects/enterprise-cybersecurity-leads-1.png",
      "/images/projects/enterprise-cybersecurity-leads-2.png",
    ],
    tags: ["cybersecurity", "B2B", "webinars"],
    category: "Enterprise Security",
    client: "ShieldNet Security",
    location: "Arlington, VA",
    date: new Date("2023-03-18"),
    sector: "lead-generation",
    link: "/projects/enterprise-cybersecurity-leads",
    details: {
      thumbnail: "/images/projects/enterprise-cybersecurity-leads-details.png",
      title: "Cybersecurity Solution Pipeline",
      description:
        "Built lead generation engine targeting enterprises with 1000+ employees, delivering 142 sales-qualified leads in first 90 days with average deal size of $187,000.",
      links: [
        { text: "Webinar Series", url: "/resources/cybersecurity-webinars" },
      ],
    },
    points: {
      thumbnail: "/images/projects/enterprise-cybersecurity-leads-points.png",
      list: [
        {
          _id: "lgp-3",
          title: "Technical Content Syndication",
          description:
            "Developed gated technical content and research papers distributed through IT professional networks and industry platforms, capturing high-intent leads with 87% technical decision-maker representation.",
        },
        {
          _id: "lgp-4",
          title: "Security Assessment Funnel",
          description:
            "Created risk assessment tools and security scorecards that identified vulnerabilities while capturing detailed prospect information. 62% of assessment completers became sales opportunities.",
        },
      ],
    },
  },

  // Video Production Projects
  {
    _id: "product-launch-promo",
    title: "Product Launch Promo for TechNova",
    description:
      "We edited a dynamic product launch video using client footage, incorporating motion graphics, typography, and color grading to create an engaging brand story.",
    thumbnail: "/images/projects/product-promo-thumbnail.jpg",
    images: [
      "/images/projects/product-promo-1.jpg",
      "/images/projects/product-promo-2.jpg",
    ],
    tags: ["video editing", "motion graphics", "product promo"],
    category: "Video Editing",
    client: "TechNova Inc.",
    location: "San Francisco, CA",
    date: new Date("2024-08-15"),
    sector: "video-production",
    link: "/projects/product-launch-promo",
    details: {
      thumbnail: "/images/projects/product-promo-details.jpg",
      title: "Product Launch Promo for TechNova",
      description:
        "We transformed raw camera footage into a professional promotional video with fast-paced edits, animated product highlights, and vibrant transitions. The goal was to emphasize the product&rsquo;s features in an engaging 60-second video for social media ads.",
      links: [
        {
          text: "Watch Video",
          url: "https://www.youtube.com/watch?v=example1",
        },
      ],
    },
    points: {
      thumbnail: "/images/projects/product-promo-points.jpg",
      list: [
        {
          _id: "promo-1",
          title: "Motion Graphics & Animation",
          description:
            "We created custom animated overlays, transitions, and product text callouts to visually support key features.",
        },
        {
          _id: "promo-2",
          title: "Color Grading & Sound Sync",
          description:
            "We applied cinematic color tones and synced the cuts tightly to the background music for maximum impact.",
        },
      ],
    },
  },
  {
    _id: "social-media-ads-zenwear",
    title: "Social Ad Edits for ZenWear Apparel",
    description:
      "We edited a series of short-form videos for Instagram and TikTok, focusing on fast transitions, trendy effects, and vertical formats for mobile viewing.",
    thumbnail: "/images/projects/zenwear-ads-thumbnail.jpg",
    images: [
      "/images/projects/zenwear-ads-1.jpg",
      "/images/projects/zenwear-ads-2.jpg",
    ],
    tags: ["social media", "short-form video", "reels editing"],
    category: "Video Editing",
    client: "ZenWear",
    location: "Los Angeles, CA",
    date: new Date("2024-11-04"),
    sector: "video-production",
    link: "/projects/social-ads-zenwear",
    details: {
      thumbnail: "/images/projects/zenwear-ads-details.jpg",
      title: "Social Ad Edits for ZenWear",
      description:
        "We edited five high-conversion short videos for ZenWear&rsquo;s seasonal campaign. Each was under 30 seconds, optimized for Instagram Reels and TikTok, featuring viral-style cuts and trendy effects.",
      links: [
        { text: "Watch Reels", url: "https://www.instagram.com/zenwear" },
      ],
    },
    points: {
      thumbnail: "/images/projects/zenwear-ads-points.jpg",
      list: [
        {
          _id: "zenwear-1",
          title: "Vertical Format Optimization",
          description:
            "Each video was edited in 9:16 aspect ratio, cropped and framed perfectly for Instagram and TikTok mobile feeds.",
        },
        {
          _id: "zenwear-2",
          title: "Viral Edit Techniques",
          description:
            "We used rapid cuts, rhythmic pacing, trendy filters, and animated text overlays to mimic viral content styles.",
        },
      ],
    },
  },

  // Graphic Design Projects
  {
    _id: "beverage-brand-refresh",
    title: "Beverage Brand Refresh",
    description: "Complete visual identity redesign for craft beverage company",
    thumbnail: "/images/projects/beverage-brand-refresh.png",
    images: [
      "/images/projects/beverage-brand-refresh-1.png",
      "/images/projects/beverage-brand-refresh-2.png",
    ],
    tags: ["packaging", "rebrand", "typography"],
    category: "Food & Beverage",
    client: "Harbor Brew Co.",
    location: "Seattle, WA",
    date: new Date("2022-12-05"),
    sector: "graphic-design",
    link: "/projects/beverage-brand-refresh",
    details: {
      thumbnail: "/images/projects/beverage-brand-refresh-details.png",
      title: "Craft Beverage Rebranding",
      description:
        "Developed comprehensive visual identity system including packaging, merchandise, and environmental graphics that increased shelf standout by 70% and contributed to 35% YOY sales growth.",
      links: [{ text: "Brand Guidelines", url: "/branding/harbor-brew" }],
    },
    points: {
      thumbnail: "/images/projects/beverage-brand-refresh-points.png",
      list: [
        {
          _id: "gdp-1",
          title: "Packaging System Design",
          description:
            "Created modular packaging system that maintained brand consistency across 27 SKUs while allowing flavor differentiation. Implemented sustainable materials that reduced packaging weight by 22%.",
        },
        {
          _id: "gdp-2",
          title: "Environmental Brand Experience",
          description:
            "Developed taproom graphics, signage, and merchandise that created cohesive brand experience across physical locations. The immersive environment increased dwell time by 40% and merchandise sales by 65%.",
        },
      ],
    },
  },
  {
    _id: "fintech-ui-design-system",
    title: "Fintech UI Design System",
    description: "Comprehensive design system for financial application suite",
    thumbnail: "/images/projects/fintech-ui-design-system.png",
    images: [
      "/images/projects/fintech-ui-design-system-1.png",
      "/images/projects/fintech-ui-design-system-2.png",
    ],
    tags: ["design system", "UI kit", "fintech"],
    category: "Financial Technology",
    client: "Vertex Financial",
    location: "Charlotte, NC",
    date: new Date("2023-06-20"),
    sector: "graphic-design",
    link: "/projects/fintech-ui-design-system",
    details: {
      thumbnail: "/images/projects/fintech-ui-design-system-details.png",
      title: "Financial UI Component Library",
      description:
        "Created comprehensive design system with 150+ components for investment platform serving 500,000+ users. Unified product experience while reducing design debt by 75%.",
      links: [{ text: "Component Library", url: "/libraries/fintech-ui" }],
    },
    points: {
      thumbnail: "/images/projects/fintech-ui-design-system-points.png",
      list: [
        {
          _id: "gdp-3",
          title: "Data Visualization Framework",
          description:
            "Developed specialized charting components and data visualization patterns for complex financial data, improving information clarity while maintaining brand consistency across all dashboards.",
        },
        {
          _id: "gdp-4",
          title: "Accessibility-Compliant Components",
          description:
            "Engineered UI components meeting WCAG 2.1 AA standards with specialized contrast ratios, keyboard navigation patterns, and screen reader support for financial data accessibility.",
        },
      ],
    },
  },

  // UI/UX Design Projects
  {
    _id: "healthcare-patient-portal",
    title: "Healthcare Patient Portal",
    description: "UX redesign for hospital network patient portal",
    thumbnail: "/images/projects/healthcare-patient-portal.png",
    images: [
      "/images/projects/healthcare-patient-portal-1.png",
      "/images/projects/healthcare-patient-portal-2.png",
    ],
    tags: ["healthcare", "user testing", "wireframes"],
    category: "Healthcare",
    client: "Unity Health Network",
    location: "Minneapolis, MN",
    date: new Date("2023-09-12"),
    sector: "ui-ux-design",
    link: "/projects/healthcare-patient-portal",
    details: {
      thumbnail: "/images/projects/healthcare-patient-portal-details.png",
      title: "Patient Portal Transformation",
      description:
        "Redesigned patient portal experience for 2 million users, reducing task completion time by 65% and increasing patient engagement metrics by 48% across the healthcare network.",
      links: [{ text: "UX Case Study", url: "/case-studies/patient-portal" }],
    },
    points: {
      thumbnail: "/images/projects/healthcare-patient-portal-points.png",
      list: [
        {
          _id: "uip-1",
          title: "Patient Journey Mapping",
          description:
            "Conducted extensive research with diverse patient groups to map emotional and functional needs throughout healthcare journeys. Identified 12 critical pain points and redesigned workflows to address them.",
        },
        {
          _id: "uip-2",
          title: "Health Literacy Optimization",
          description:
            "Developed content strategy and UI patterns that presented complex medical information at appropriate health literacy levels. Implemented progressive disclosure techniques for sensitive health information.",
        },
      ],
    },
  },
  {
    _id: "ecommerce-platform-redesign",
    title: "E-commerce Platform Redesign",
    description: "Complete UX overhaul for fashion retail platform",
    thumbnail: "/images/projects/ecommerce-platform-redesign.png",
    images: [
      "/images/projects/ecommerce-platform-redesign-1.png",
      "/images/projects/ecommerce-platform-redesign-2.png",
    ],
    tags: ["e-commerce", "conversion", "checkout"],
    category: "Retail",
    client: "StyleHub",
    location: "Los Angeles, CA",
    date: new Date("2023-01-30"),
    sector: "ui-ux-design",
    link: "/projects/ecommerce-platform-redesign",
    details: {
      thumbnail: "/images/projects/ecommerce-platform-redesign-details.png",
      title: "Fashion E-commerce Experience",
      description:
        "Redesigned shopping experience for fashion retailer, increasing conversion rate by 32% and reducing cart abandonment by 27% through improved UX flows and visual merchandising.",
      links: [{ text: "Redesign Gallery", url: "/gallery/stylehub" }],
    },
    points: {
      thumbnail: "/images/projects/ecommerce-platform-redesign-points.png",
      list: [
        {
          _id: "uip-3",
          title: "Virtual Try-On Integration",
          description:
            "Designed seamless AR try-on experience that integrated with product pages, allowing users to visualize clothing items. Feature users showed 47% higher conversion and 28% lower return rates.",
        },
        {
          _id: "uip-4",
          title: "Personalized Size Prediction",
          description:
            "Created machine learning-powered size recommendation system that reduced sizing-related returns by 35% while improving customer confidence in purchases.",
        },
      ],
    },
  },

  // Application-Systems Development Projects
  {
    _id: "energy-management-dashboard",
    title: "Energy Management Dashboard",
    description: "Real-time energy monitoring web application",
    thumbnail: "/images/projects/energy-management-dashboard.png",
    images: [
      "/images/projects/energy-management-dashboard-1.png",
      "/images/projects/energy-management-dashboard-2.png",
    ],
    tags: ["web application", "dashboard", "real-time", "IoT"],
    category: "Energy",
    client: "EcoPower Solutions",
    location: "Denver, CO",
    date: new Date("2023-04-10"),
    sector: "application-systems-development",
    link: "/projects/energy-management-dashboard",
    details: {
      thumbnail: "/images/projects/energy-management-dashboard-details.png",
      title: "Enterprise Energy Monitoring",
      description:
        "Built real-time energy management platform processing data from 15,000+ IoT sensors, helping commercial clients reduce energy consumption by 18% on average through actionable insights.",
      links: [{ text: "Tech Specs", url: "/tech/energy-dashboard" }],
    },
    points: {
      thumbnail: "/images/projects/energy-management-dashboard-points.png",
      list: [
        {
          _id: "wdp-1",
          title: "Real-Time Data Processing",
          description:
            "Developed data ingestion pipeline handling 2.5 million data points per hour with sub-second latency. Implemented WebSocket architecture for live dashboard updates and alerting.",
        },
        {
          _id: "wdp-2",
          title: "Predictive Analytics Engine",
          description:
            "Built machine learning models forecasting energy usage patterns and identifying optimization opportunities. Integrated with visualization tools that presented actionable recommendations to facility managers.",
        },
      ],
    },
  },
  {
    _id: "interactive-learning-platform",
    title: "Interactive Learning Platform",
    description: "Next-gen educational platform for professional training",
    thumbnail: "/images/projects/interactive-learning-platform.png",
    images: [
      "/images/projects/interactive-learning-platform-1.png",
      "/images/projects/interactive-learning-platform-2.png",
    ],
    tags: ["web application", "education", "interactive", "lms"],
    category: "EdTech",
    client: "SkillFront",
    location: "Raleigh, NC",
    date: new Date("2023-07-22"),
    sector: "application-systems-development",
    link: "/projects/interactive-learning-platform",
    details: {
      thumbnail: "/images/projects/interactive-learning-platform-details.png",
      title: "Professional Learning Ecosystem",
      description:
        "Developed comprehensive learning management system with interactive labs, progress tracking, and certification features. Platform supports 50,000+ active users with 92% course completion rate.",
      links: [{ text: "Platform Demo", url: "/demos/learning-platform" }],
    },
    points: {
      thumbnail: "/images/projects/interactive-learning-platform-points.png",
      list: [
        {
          _id: "wdp-3",
          title: "Virtual Lab Environment",
          description:
            "Created browser-based coding environments and simulation tools that allowed hands-on practice without local setup. Reduced setup time from hours to seconds while maintaining security.",
        },
        {
          _id: "wdp-4",
          title: "Adaptive Learning Pathways",
          description:
            "Developed algorithm-driven content recommendations based on learner progress and knowledge gaps. Personalized pathways improved skill mastery rates by 43% compared to linear courses.",
        },
      ],
    },
  },
  {
    _id: "field-service-management-app",
    title: "Field Service Management App",
    description: "Mobile solution for field technicians and dispatchers",
    thumbnail: "/images/projects/field-service-management-app.png",
    images: [
      "/images/projects/field-service-management-app-1.png",
      "/images/projects/field-service-management-app-2.png",
    ],
    tags: ["mobile application", "offline", "geolocation", "scheduling"],
    category: "Field Services",
    client: "ServicePro Solutions",
    location: "Dallas, TX",
    date: new Date("2023-03-05"),
    sector: "application-systems-development",
    link: "/projects/field-service-management-app",
    details: {
      thumbnail: "/images/projects/field-service-management-app-details.png",
      title: "Field Operations Platform",
      description:
        "Built cross-platform mobile application for field service management that reduced job completion time by 27% and improved first-time fix rate by 33% for nationwide service provider.",
      links: [{ text: "App Features", url: "/features/field-service" }],
    },
    points: {
      thumbnail: "/images/projects/field-service-management-app-points.png",
      list: [
        {
          _id: "map-1",
          title: "Offline-First Architecture",
          description:
            "Developed robust offline capability allowing technicians to access job details, manuals, and forms without connectivity. Data synchronization system ensured seamless updates when reconnected.",
        },
        {
          _id: "map-2",
          title: "Augmented Reality Assistance",
          description:
            "Integrated AR features that overlay repair instructions onto equipment views through device camera. Reduced diagnostic time by 45% and improved repair accuracy for complex machinery.",
        },
      ],
    },
  },
  {
    _id: "mental-wellness-application",
    title: "Mental Wellness Application",
    description: "AI-powered mental health support platform",
    thumbnail: "/images/projects/mental-wellness-application.png",
    images: [
      "/images/projects/mental-wellness-application-1.png",
      "/images/projects/mental-wellness-application-2.png",
    ],
    tags: ["mobile application", "health", "AI", "privacy"],
    category: "Healthcare",
    client: "MindBalance",
    location: "San Diego, CA",
    date: new Date("2023-05-18"),
    sector: "application-systems-development",
    link: "/projects/mental-wellness-application",
    details: {
      thumbnail: "/images/projects/mental-wellness-application-details.png",
      title: "Personalized Mental Wellness",
      description:
        "Developed HIPAA-compliant mobile application providing personalized mental health support to 250,000+ users. Clinical studies showed 32% reduction in anxiety symptoms among regular users.",
      links: [{ text: "Privacy Overview", url: "/security/mindbalance" }],
    },
    points: {
      thumbnail: "/images/projects/mental-wellness-application-points.png",
      list: [
        {
          _id: "map-3",
          title: "AI Mood Tracking",
          description:
            "Created passive monitoring system analyzing user interactions and voice patterns to detect mood changes. Provided personalized interventions with 89% user-reported accuracy.",
        },
        {
          _id: "map-4",
          title: "Clinical Integration",
          description:
            "Developed secure provider portal allowing therapists to monitor client progress between sessions. Feature adoption by clinicians reached 78% within 6 months of launch.",
        },
      ],
    },
  },

  // Business Solutions Projects
  {
    _id: "supply-chain-automation",
    title: "Supply Chain Automation",
    description: "Custom inventory and order management system",
    thumbnail: "/images/projects/supply-chain-automation.png",
    images: [
      "/images/projects/supply-chain-automation-1.png",
      "/images/projects/supply-chain-automation-2.png",
    ],
    tags: ["inventory", "automation", "integration"],
    category: "Logistics",
    client: "GlobalGoods Distributors",
    location: "Memphis, TN",
    date: new Date("2023-02-14"),
    sector: "business-solutions",
    link: "/projects/supply-chain-automation",
    details: {
      thumbnail: "/images/projects/supply-chain-automation-details.png",
      title: "Inventory Management System",
      description:
        "Built custom supply chain platform integrating warehouse management, inventory forecasting, and order fulfillment. Reduced stockouts by 78% and improved order accuracy to 99.97%.",
      links: [{ text: "Integration Map", url: "/integrations/supply-chain" }],
    },
    points: {
      thumbnail: "/images/projects/supply-chain-automation-points.png",
      list: [
        {
          _id: "bsp-1",
          title: "Predictive Inventory Optimization",
          description:
            "Developed ML models forecasting demand with 92% accuracy, enabling dynamic inventory allocation across 12 distribution centers. Reduced carrying costs by 27% while maintaining service levels.",
        },
        {
          _id: "bsp-2",
          title: "Automated Order Routing",
          description:
            "Created intelligent routing system that minimized shipping costs and delivery times while balancing warehouse workloads. Reduced shipping expenses by 18% and improved delivery speed by 32%.",
        },
      ],
    },
  },
  {
    _id: "sales-performance-dashboard",
    title: "Sales Performance Dashboard",
    description: "Enterprise sales analytics and forecasting platform",
    thumbnail: "/images/projects/sales-performance-dashboard.png",
    images: [
      "/images/projects/sales-performance-dashboard-1.png",
      "/images/projects/sales-performance-dashboard-2.png",
    ],
    tags: ["CRM", "analytics", "forecasting"],
    category: "Sales",
    client: "Peak Performance Solutions",
    location: "Atlanta, GA",
    date: new Date("2023-06-08"),
    sector: "business-solutions",
    link: "/projects/sales-performance-dashboard",
    details: {
      thumbnail: "/images/projects/sales-performance-dashboard-details.png",
      title: "Sales Intelligence Platform",
      description:
        "Developed custom sales analytics platform integrating 9 data sources, providing real-time performance insights and predictive forecasting. Improved forecast accuracy to 94% and reduced reporting time by 85%.",
      links: [{ text: "Analytics Demo", url: "/demos/sales-dashboard" }],
    },
    points: {
      thumbnail: "/images/projects/sales-performance-dashboard-points.png",
      list: [
        {
          _id: "bsp-3",
          title: "Unified Data Integration",
          description:
            "Created data pipeline aggregating information from CRM, marketing automation, finance systems, and external data sources into single source of truth. Eliminated manual reporting efforts.",
        },
        {
          _id: "bsp-4",
          title: "Predictive Opportunity Scoring",
          description:
            "Developed algorithm scoring sales opportunities based on 42 factors including engagement patterns, relationship strength, and market signals. Improved win rate by 28% for high-score opportunities.",
        },
      ],
    },
  },

  // Online Support Projects
  {
    _id: "enterprise-helpdesk-implementation",
    title: "Enterprise Helpdesk Implementation",
    description: "Omnichannel support system for financial services",
    thumbnail: "/images/projects/enterprise-helpdesk-implementation.png",
    images: [
      "/images/projects/enterprise-helpdesk-implementation-1.png",
      "/images/projects/enterprise-helpdesk-implementation-2.png",
    ],
    tags: ["helpdesk", "ticketing", "SLAs"],
    category: "Financial Services",
    client: "First Continental Bank",
    location: "New York, NY",
    date: new Date("2023-05-30"),
    sector: "online-support",
    link: "/projects/enterprise-helpdesk-implementation",
    details: {
      thumbnail:
        "/images/projects/enterprise-helpdesk-implementation-details.png",
      title: "Banking Support Transformation",
      description:
        "Implemented enterprise-grade support system handling 25,000+ monthly inquiries across 8 channels. Reduced resolution time by 45% and improved customer satisfaction score to 92%.",
      links: [{ text: "Implementation Plan", url: "/plans/helpdesk" }],
    },
    points: {
      thumbnail:
        "/images/projects/enterprise-helpdesk-implementation-points.png",
      list: [
        {
          _id: "osp-1",
          title: "Omnichannel Routing",
          description:
            "Developed intelligent routing system distributing inquiries across chat, email, phone, and social channels based on complexity, agent skills, and customer value. Reduced transfer rates by 62%.",
        },
        {
          _id: "osp-2",
          title: "Knowledge-Centered Support",
          description:
            "Implemented knowledge management system that captured solutions during ticket resolution. Content reuse rate reached 45% within 6 months, reducing resolution time for common issues by 75%.",
        },
      ],
    },
  },
  {
    _id: "ai-chatbot-implementation",
    title: "AI Chatbot Implementation",
    description: "Intelligent virtual agent for e-commerce support",
    thumbnail: "/images/projects/ai-chatbot-implementation.png",
    images: [
      "/images/projects/ai-chatbot-implementation-1.png",
      "/images/projects/ai-chatbot-implementation-2.png",
    ],
    tags: ["chatbot", "NLP", "automation"],
    category: "E-commerce",
    client: "HomeStyle Retailers",
    location: "Columbus, OH",
    date: new Date("2023-04-05"),
    sector: "online-support",
    link: "/projects/ai-chatbot-implementation",
    details: {
      thumbnail: "/images/projects/ai-chatbot-implementation-details.png",
      title: "E-commerce Virtual Assistant",
      description:
        "Designed and deployed AI-powered chatbot handling 68% of customer inquiries autonomously. Reduced support costs by 42% while maintaining 94% customer satisfaction rating.",
      links: [{ text: "Chatbot Demo", url: "/demos/ai-chatbot" }],
    },
    points: {
      thumbnail: "/images/projects/ai-chatbot-implementation-points.png",
      list: [
        {
          _id: "osp-3",
          title: "Conversational AI Architecture",
          description:
            "Developed NLP engine understanding complex product inquiries and customer issues. Implemented contextual awareness allowing seamless conversations spanning multiple topics and sessions.",
        },
        {
          _id: "osp-4",
          title: "Continuous Learning System",
          description:
            "Created feedback mechanism where unresolved conversations were automatically routed to human agents while training the AI model. Improved resolution rate by 15% monthly during first year.",
        },
      ],
    },
  },
];
