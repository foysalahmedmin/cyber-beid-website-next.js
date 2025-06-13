import {
    Briefcase,
    Clapperboard,
    Code2,
    Headphones,
    LayoutDashboard,
    LucideIcon,
    Megaphone,
    Paintbrush,
    PenLine,
    UserPlus,
} from "lucide-react";

export type TService = {
  _id: string;
  icon: LucideIcon;
  title: string;
  description: string;
  thumbnail: string;
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

export const services: TService[] = [
  {
    _id: "content-creation",
    icon: PenLine,
    title: "Content Creation",
    description:
      "Our content creation service covers everything from blog posts and social media content to video scripts and product descriptions. We focus on storytelling, SEO optimization, and audience engagement. Whether you're building a brand or running campaigns, our team produces original and compelling content tailored to your voice, goals, and platform needs.",
    thumbnail: "/images/services/content-creation.png",
    link: "/services/content-creation/",
    details: {
      thumbnail: "/images/services/content-creation-details.png",
      title: "Content Creation",
      description:
        "We create comprehensive content solutions including blog articles, social media posts, video scripts, and product descriptions. Our team specializes in brand-aligned storytelling, SEO optimization, and audience engagement strategies tailored to your specific business goals and platform requirements.",
      links: [
        { text: "Content Portfolio", url: "/portfolio/content" },
        { text: "Case Studies", url: "/case-studies/content" },
      ],
    },
    points: {
      thumbnail: "/images/services/content-creation-points.png",
      list: [
        {
          _id: "cc-1",
          title: "Multi-Platform Content Strategy",
          description:
            "We develop comprehensive content frameworks that maintain consistent brand messaging across blogs, social media, email newsletters, and video platforms. Our approach includes platform-specific adaptations to maximize engagement while ensuring cohesive storytelling that reinforces your brand identity.",
          links: [{ text: "Content Samples", url: "/samples/content" }],
        },
        {
          _id: "cc-2",
          title: "SEO-Optimized Creation",
          description:
            "Our writers craft content with strategic keyword integration, semantic structuring, and readability optimization to improve search rankings. We conduct thorough keyword research and competitor analysis to develop content that ranks well while providing genuine value to your audience.",
          links: [{ text: "SEO Report", url: "/seo/content" }],
        },
        {
          _id: "cc-3",
          title: "Audience-Focused Storytelling",
          description:
            "Using detailed audience personas and journey mapping, we create narratives that resonate with your target demographics. Our storytelling approach connects emotional drivers with practical solutions, increasing engagement and conversion rates through relatable content experiences.",
        },
      ],
    },
  },
  {
    _id: "digital-marketing",
    icon: Megaphone,
    title: "Digital Marketing",
    description:
      "Our comprehensive digital marketing solutions increase visibility, engagement, and conversions across all digital channels. We integrate SEO, social media, email marketing, influencer partnerships, and targeted advertising to deliver cohesive campaigns that reach the right audience with the right message at the right time.",
    thumbnail: "/images/services/digital-marketing.png",
    link: "/services/digital-marketing/",
    details: {
      thumbnail: "/images/services/digital-marketing-details.png",
      title: "Digital Marketing",
      description:
        "Our full-spectrum services include SEO optimization, social media management, email campaigns, influencer collaborations, and performance advertising across Google, Facebook, Instagram, YouTube, LinkedIn and programmatic platforms. We build integrated strategies targeting your ideal audience segments throughout their journey.",
      links: [
        { text: "Marketing Packages", url: "/packages/marketing" },
        { text: "Ad Portfolio", url: "/portfolio/ads" },
      ],
    },
    points: {
      thumbnail: "/images/services/digital-marketing-points.png",
      list: [
        {
          _id: "dm-1",
          title: "Integrated Channel Strategy",
          description:
            "We design synchronized campaigns across search, social, email, content networks, and paid advertising platforms. Our channel integration ensures consistent messaging while leveraging each platform&rsquo;s unique strengths to maximize reach and conversions.",
          links: [{ text: "Channel Strategy", url: "/strategy/channels" }],
        },
        {
          _id: "dm-2",
          title: "Targeted Advertising & Media Buying",
          description:
            "We create and manage performance-driven ad campaigns with precision audience targeting, A/B testing, and algorithmic optimization across all major platforms. Our approach ensures maximum ROI through strategic budget allocation and continuous refinement.",
          links: [{ text: "Creative Samples", url: "/samples/ads" }],
        },
        {
          _id: "dm-3",
          title: "Audience Segmentation & Journey Mapping",
          description:
            "Using demographic, behavioral, and intent data, we identify high-value audience segments and deliver personalized messaging at each journey stage. Our approach includes lookalike audiences, retargeting strategies, and lifecycle marketing.",
        },
        {
          _id: "dm-4",
          title: "Performance Analytics & Optimization",
          description:
            "Our comprehensive analytics framework tracks KPIs across all channels with custom dashboards. We implement continuous testing and data-driven optimizations to improve campaign efficiency, ROAS, and marketing effectiveness.",
          links: [{ text: "Reporting Samples", url: "/samples/reports" }],
        },
      ],
    },
  },
  {
    _id: "lead-generation",
    icon: UserPlus,
    title: "Lead Generation",
    description:
      "Our lead generation service helps you attract and convert potential customers through a combination of landing pages, email funnels, paid ads, and outreach campaigns. We use data-driven techniques to target your ideal audience, build interest, and nurture leads until they're ready to buy. It&rsquo;s not just about getting leads—it&rsquo;s about getting the right ones.",
    thumbnail: "/images/services/lead-generation.png",
    link: "/services/lead-generation/",
    details: {
      thumbnail: "/images/services/lead-generation-details.png",
      title: "Lead Generation",
      description:
        "We implement full-funnel lead generation solutions including landing page optimization, lead capture forms, email nurturing sequences, and targeted outreach campaigns. Our focus is on attracting marketing-qualified leads (MQLs) and converting them to sales-ready prospects.",
      links: [{ text: "Lead Gen Tools", url: "/tools/leadgen" }],
    },
    points: {
      thumbnail: "/images/services/lead-generation-points.png",
      list: [
        {
          _id: "lg-1",
          title: "Targeted Acquisition Campaigns",
          description:
            "We develop precision targeting strategies using intent data, firmographic filters, and behavioral triggers to reach your ideal customer profile. Our multi-touch approach combines content offers, paid advertising, and strategic partnerships to attract high-intent prospects into your conversion funnel.",
        },
        {
          _id: "lg-2",
          title: "Conversion Funnel Optimization",
          description:
            "Our team designs and implements staged nurturing workflows that guide prospects through awareness, consideration, and decision phases. Using marketing automation and behavioral triggers, we deliver personalized content experiences that build trust and move prospects toward sales readiness.",
          links: [{ text: "Funnel Examples", url: "/examples/funnels" }],
        },
        {
          _id: "lg-3",
          title: "Lead Qualification & Scoring",
          description:
            "We implement systematic lead scoring models based on engagement level, demographic fit, and behavioral indicators. Our qualification process includes initial screening, needs analysis, and BANT (Budget, Authority, Need, Timeline) assessment to ensure sales teams receive properly vetted, sales-ready leads.",
        },
      ],
    },
  },
  {
    _id: "video-production",
    icon: Clapperboard,
    title: "Video Editing Service",
    description:
      "We deliver professional video editing solutions tailored to your brand, audience, and message. From social media clips to corporate promos and cinematic storytelling, our editors bring your footage to life with precision, creativity, and consistency.",
    thumbnail: "/images/services/video-production.png",
    link: "/services/video-production/",
    details: {
      thumbnail: "/images/services/video-production-details.png",
      title: "Video Editing Service",
      description:
        "Our video editing services include everything from basic cuts and transitions to advanced motion graphics, color grading, and sound design. We work closely with your creative vision to produce high-quality video content that aligns with your brand’s identity and communication goals.",
      links: [{ text: "View Portfolio", url: "/portfolio/videos" }],
    },
    points: {
      thumbnail: "/images/services/video-production-points.png",
      list: [
        {
          _id: "video-1",
          title: "Cinematic Editing & Storytelling",
          description:
            "We craft compelling narratives by combining visuals, pacing, and audio in a way that keeps your audience engaged. Ideal for product launches, brand stories, and promotional content.",
        },
        {
          _id: "video-2",
          title: "Social Media & Short-Form Content",
          description:
            "We produce attention-grabbing edits optimized for platforms like Instagram, TikTok, and YouTube Shorts. Fast-paced, trend-aware, and designed for high engagement.",
          links: [{ text: "See Social Edits", url: "/examples/social-videos" }],
        },
        {
          _id: "video-3",
          title: "Motion Graphics & Animation",
          description:
            "Enhance your videos with animated logos, titles, lower thirds, and infographics. Our motion designers add visual polish that communicates professionalism and creativity.",
        },
        {
          _id: "video-4",
          title: "Color Grading & Sound Design",
          description:
            "We ensure every frame and every note is polished. Our color grading and sound design process gives your videos a cinematic, broadcast-quality finish.",
        },
        {
          _id: "video-5",
          title: "Revisions & Collaboration",
          description:
            "We work with you iteratively, offering flexible revision rounds and clear communication to ensure the final output aligns perfectly with your expectations.",
        },
      ],
    },
  },
  {
    _id: "graphic-design",
    icon: Paintbrush,
    title: "Graphic Design",
    description:
      "From logos and business cards to social media graphics and marketing materials, our graphic design service ensures your brand looks professional and memorable. We focus on clean, effective visual communication that aligns with your brand identity. Whether you're launching a new product or refreshing your look, we bring your ideas to life.",
    thumbnail: "/images/services/graphic-design.png",
    link: "/services/graphic-design/",
    details: {
      thumbnail: "/images/services/graphic-design-details.png",
      title: "Graphic Design",
      description:
        "Our design services cover brand identity development, marketing collateral creation, digital assets, and visual system implementation. We focus on creating visually compelling designs that communicate your brand values and messaging effectively.",
      links: [{ text: "Design Portfolio", url: "/portfolio/design" }],
    },
    points: {
      thumbnail: "/images/services/graphic-design-points.png",
      list: [
        {
          _id: "gd-1",
          title: "Brand Identity Systems",
          description:
            "We develop comprehensive visual identity systems including logo design, color palettes, typography systems, and brand guideline documentation. Our identity work establishes distinctive brand recognition while ensuring consistent application across all touchpoints and media formats.",
        },
        {
          _id: "gd-2",
          title: "Marketing Collateral Design",
          description:
            "Our team creates visually impactful marketing materials including brochures, sales sheets, presentations, trade show displays, and promotional items. We focus on information hierarchy and visual storytelling to create materials that effectively communicate key messages and drive engagement.",
          links: [{ text: "Collateral Samples", url: "/samples/collateral" }],
        },
        {
          _id: "gd-3",
          title: "Digital Asset Production",
          description:
            "We produce optimized digital graphics for websites, social media, email campaigns, and advertising. Our asset creation includes responsive design adaptations, file optimization for fast loading, and platform-specific formatting to ensure maximum visual impact across all digital channels.",
        },
      ],
    },
  },
  {
    _id: "ui-ux-design",
    icon: LayoutDashboard,
    title: "UI/UX Design",
    description:
      "Our UI/UX design service delivers intuitive, accessible, and visually appealing interfaces for web and mobile apps. We prioritize user experience by conducting research, building wireframes, and testing interactions. The result is a seamless flow that keeps users engaged and satisfied while achieving your business objectives.",
    thumbnail: "/images/services/ui-ux-design.png",
    link: "/services/ui-ux-design/",
    details: {
      thumbnail: "/images/services/ui-ux-design-details.png",
      title: "UI/UX Design",
      description:
        "We provide user-centered design solutions including user research, information architecture, wireframing, prototyping, and usability testing. Our process focuses on creating seamless user experiences that align with business objectives.",
      links: [{ text: "Design Process", url: "/process/uiux" }],
    },
    points: {
      thumbnail: "/images/services/ui-ux-design-points.png",
      list: [
        {
          _id: "ux-1",
          title: "User Research & Journey Mapping",
          description:
            "We conduct comprehensive user research including interviews, surveys, and behavioral analysis to understand user needs and pain points. Our journey mapping visualizes complete user pathways, identifying friction points and opportunities to enhance the overall experience.",
          links: [{ text: "Research Methods", url: "/methods/research" }],
        },
        {
          _id: "ux-2",
          title: "Interaction Design & Prototyping",
          description:
            "Our team creates detailed wireframes, interactive prototypes, and micro-interaction designs that bring user flows to life. Using tools like Figma and Adobe XD, we develop and test functional prototypes before development to validate design concepts and usability.",
        },
        {
          _id: "ux-3",
          title: "Accessibility-Compliant Interface Design",
          description:
            "We design interfaces that meet WCAG 2.1 accessibility standards, ensuring usability for all users regardless of ability. Our accessibility-first approach includes color contrast optimization, screen reader compatibility, keyboard navigation support, and cognitive load reduction.",
        },
      ],
    },
  },
  {
    _id: "application-systems-development",
    icon: Code2,
    title: "Application Systems Development",
    description:
      "We design and develop high-performance applications across web, desktop, and mobile platforms. From responsive websites and scalable web apps to native and cross-platform mobile apps, our solutions are tailored to your business goals. Using modern frameworks like React, Next.js, Node.js, Flutter, and React Native, we ensure consistency, speed, and reliability across all devices.",
    thumbnail: "/images/services/application-systems-development.png",
    link: "/services/application-systems-development/",
    details: {
      thumbnail: "/images/services/application-systems-development-details.png",
      title: "Full-Stack: Web, Desktop & Mobile Application Development",
      description:
        "Our development services cover the full spectrum—from websites and web apps to iOS, Android, and desktop solutions. We specialize in full-stack development, UI/UX design, API integrations, and performance optimization using technologies like React, Next.js, Node.js, Swift, Kotlin, Flutter, and Electron.",
      links: [
        { text: "Tech Stack", url: "/technology" },
        { text: "App Portfolio", url: "/portfolio/apps" },
      ],
    },
    points: {
      thumbnail: "/images/services/application-systems-development-points.png",
      list: [
        {
          _id: "app-1",
          title: "Modern Frontend & Web App Development",
          description:
            "We craft responsive and interactive user interfaces using React, Next.js, and TypeScript. Our component-based architecture and performance-focused techniques deliver fast, engaging web experiences for landing pages, dashboards, and full-scale web apps.",
          links: [{ text: "Frontend Examples", url: "/examples/frontend" }],
        },
        {
          _id: "app-2",
          title: "Backend & API Development",
          description:
            "We build robust backend systems using Node.js, Express, and MongoDB. Our services include RESTful and GraphQL API development, secure server-side logic, and scalable database design for dynamic data-driven applications.",
        },
        {
          _id: "app-3",
          title: "Mobile & Cross-Platform App Development",
          description:
            "We develop native apps with Swift and Kotlin, as well as cross-platform apps using Flutter and React Native. Our apps offer seamless performance and a consistent experience across iOS and Android devices.",
          links: [{ text: "Native Examples", url: "/examples/native" }],
        },
        {
          _id: "app-4",
          title: "Desktop Application Development",
          description:
            "Using technologies like Electron and Tauri, we create powerful desktop applications for Windows, macOS, and Linux—integrated with modern UI and business logic tailored to your workflow.",
        },
        {
          _id: "app-5",
          title: "Deployment, Maintenance & Optimization",
          description:
            "We handle deployment across web, app stores, and desktop platforms, including continuous updates, bug fixes, ASO, and performance tuning. Our security practices and optimization techniques ensure long-term stability and protection against threats.",
        },
      ],
    },
  },
  {
    _id: "business-solutions",
    icon: Briefcase,
    title: "Business Solutions",
    description:
      "We offer custom digital solutions to streamline your operations, automate workflows, and boost productivity. Our services include CRM setup, ERP integration, custom dashboards, and digital transformation consulting. Whether you're a startup or an established business, we help you adopt the right tools to scale efficiently.",
    thumbnail: "/images/services/business-solutions.png",
    link: "/services/business-solutions/",
    details: {
      thumbnail: "/images/services/business-solutions-details.png",
      title: "Business Solutions",
      description:
        "We provide digital transformation services including CRM implementation, workflow automation, ERP integration, and custom business application development. Our solutions are designed to optimize operations and drive business growth.",
      links: [{ text: "Solutions Overview", url: "/solutions" }],
    },
    points: {
      thumbnail: "/images/services/business-solutions-points.png",
      list: [
        {
          _id: "bs-1",
          title: "Workflow Automation Systems",
          description:
            "We analyze business processes to identify automation opportunities and implement customized workflow solutions. Our automation systems integrate with existing tools to streamline operations, reduce manual tasks, minimize errors, and improve overall operational efficiency.",
          links: [
            { text: "Automation Case Studies", url: "/cases/automation" },
          ],
        },
        {
          _id: "bs-2",
          title: "CRM & ERP Integration",
          description:
            "We implement and customize CRM/ERP solutions like Salesforce, HubSpot, and Odoo to centralize business data. Our integration services connect disparate systems, synchronize data across platforms, and create unified dashboards for comprehensive business intelligence.",
        },
        {
          _id: "bs-3",
          title: "Custom Business Application Development",
          description:
            "We develop tailored software solutions to address unique business challenges, including inventory management systems, custom reporting tools, and specialized operational platforms. Our applications are built to integrate with existing infrastructure while providing scalable solutions for business growth.",
        },
      ],
    },
  },
  {
    _id: "online-support",
    icon: Headphones,
    title: "Online Support",
    description:
      "Our online support service ensures that your digital platforms are always operational and your customers receive timely help. We offer live chat setup, ticketing systems, virtual assistance, and knowledge base management. Whether it&rsquo;s technical support or customer service, we're here to help you stay responsive and reliable.",
    thumbnail: "/images/services/online-support.png",
    link: "/services/online-support/",
    details: {
      thumbnail: "/images/services/online-support-details.png",
      title: "Online Support",
      description:
        "We provide comprehensive digital support solutions including helpdesk implementation, live chat systems, knowledge base development, and ticketing systems. Our services ensure prompt customer assistance and platform reliability.",
      links: [{ text: "Support Plans", url: "/plans/support" }],
    },
    points: {
      thumbnail: "/images/services/online-support-points.png",
      list: [
        {
          _id: "os-1",
          title: "Helpdesk & Ticketing Systems",
          description:
            "We implement and configure comprehensive helpdesk solutions like Zendesk and Freshdesk to streamline customer support operations. Our setup includes customized ticket workflows, SLA management, escalation rules, and integration with communication channels for efficient issue resolution.",
          links: [{ text: "System Options", url: "/options/support" }],
        },
        {
          _id: "os-2",
          title: "Live Chat & Chatbot Implementation",
          description:
            "We deploy and customize live chat solutions with AI-powered chatbots for 24/7 customer assistance. Our implementation includes conversational design, integration with knowledge bases, handoff protocols to human agents, and performance analytics to continuously improve response quality.",
        },
        {
          _id: "os-3",
          title: "Knowledge Management Systems",
          description:
            "We develop structured knowledge bases and FAQ systems that enable self-service support. Our approach includes content organization, search optimization, analytics tracking, and maintenance processes to ensure support content remains accurate, accessible, and effective in reducing support tickets.",
        },
      ],
    },
  },
];
