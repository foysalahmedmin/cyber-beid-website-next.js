export type TService = {
  _id: string;
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
  }
  points: {
    thumbnail: string;
    list : {
      _id: string;
      title: string;
      description: string;
      links?: {
        text?: string;
        url?: string;
      }[];
    }[]
  }
};

export const services: TService[] = [
  {
    _id: "content-creation",
    title: "Content Creation",
    description:
      "Our content creation service covers everything from blog posts and social media content to video scripts and product descriptions. We focus on storytelling, SEO optimization, and audience engagement. Whether you're building a brand or running campaigns, our team produces original and compelling content tailored to your voice, goals, and platform needs.",
    thumbnail: "/images/services/content-creation.png",
    link: "/services/content-creation/",
    details: {
      thumbnail: "/images/services/content-creation-details.png",
      title: "Content Creation",
      description: "We create comprehensive content solutions including blog articles, social media posts, video scripts, and product descriptions. Our team specializes in brand-aligned storytelling, SEO optimization, and audience engagement strategies tailored to your specific business goals and platform requirements.",
      links: [
        { text: "Content Portfolio", url: "/portfolio/content" },
        { text: "Case Studies", url: "/case-studies/content" }
      ]
    },
    points: {
      thumbnail: "/images/services/content-creation-points.png",
      list: [
        {
          _id: "cc-1",
          title: "Multi-Platform Content Strategy",
          description: "We develop comprehensive content frameworks that maintain consistent brand messaging across blogs, social media, email newsletters, and video platforms. Our approach includes platform-specific adaptations to maximize engagement while ensuring cohesive storytelling that reinforces your brand identity.",
          links: [
            { text: "Content Samples", url: "/samples/content" }
          ]
        },
        {
          _id: "cc-2",
          title: "SEO-Optimized Creation",
          description: "Our writers craft content with strategic keyword integration, semantic structuring, and readability optimization to improve search rankings. We conduct thorough keyword research and competitor analysis to develop content that ranks well while providing genuine value to your audience.",
          links: [
            { text: "SEO Report", url: "/seo/content" }
          ]
        },
        {
          _id: "cc-3",
          title: "Audience-Focused Storytelling",
          description: "Using detailed audience personas and journey mapping, we create narratives that resonate with your target demographics. Our storytelling approach connects emotional drivers with practical solutions, increasing engagement and conversion rates through relatable content experiences."
        }
      ]
    }
  },
  {
    _id: "digital-marketing",
    title: "Digital Marketing",
    description:
      "Our digital marketing strategies are designed to increase visibility, engagement, and conversions. We offer SEO, social media management, email campaigns, influencer partnerships, and analytics tracking. Each campaign is tailored to your audience and goals, helping you reach the right people at the right time with the right message.",
    thumbnail: "/images/services/digital-marketing.png",
    link: "/services/digital-marketing/",
    details: {
      thumbnail: "/images/services/digital-marketing-details.png",
      title: "Digital Marketing",
      description: "Our full-spectrum digital marketing services include SEO optimization, social media management, email campaign execution, influencer collaborations, and comprehensive analytics. We build custom strategies targeting your ideal audience segments across multiple digital touchpoints.",
      links: [
        { text: "Marketing Packages", url: "/packages/marketing" }
      ]
    },
    points: {
      thumbnail: "/images/services/digital-marketing-points.png",
      list: [
        {
          _id: "dm-1",
          title: "Integrated Channel Strategy",
          description: "We design and implement synchronized campaigns across search engines, social platforms, email systems, and content networks. Our channel integration ensures consistent messaging while optimizing each platform's unique strengths to maximize reach and conversion opportunities.",
          links: [
            { text: "Channel Strategy", url: "/strategy/channels" }
          ]
        },
        {
          _id: "dm-2",
          title: "Audience Segmentation & Targeting",
          description: "Using advanced demographic, behavioral, and psychographic analysis, we identify and target high-value audience segments. Our precision targeting techniques include lookalike audience development, retargeting strategies, and lifecycle stage marketing to deliver relevant messaging at each customer journey phase."
        },
        {
          _id: "dm-3",
          title: "Performance Analytics & Optimization",
          description: "Our comprehensive analytics framework tracks KPIs across all channels with custom dashboards and regular performance reports. We implement continuous A/B testing and data-driven optimizations to improve campaign efficiency, ROI, and marketing effectiveness over time."
        }
      ]
    }
  },
  {
    _id: "advertising-services",
    title: "Advertising Services",
    description:
      "We create and manage performance-driven ad campaigns across platforms like Google, Facebook, Instagram, YouTube, and LinkedIn. From copywriting and design to audience targeting and A/B testing, we ensure every dollar is spent efficiently. Our advertising services help you grow traffic, generate leads, and boost sales with measurable ROI.",
    thumbnail: "/images/services/advertising.png",
    link: "/services/advertising-services/",
    details: {
      thumbnail: "/images/services/advertising-services-details.png",
      title: "Advertising Services",
      description: "We manage end-to-end advertising campaigns across Google Ads, Facebook/Instagram, YouTube, LinkedIn, and programmatic platforms. Our full-service approach includes audience research, creative development, budget management, and performance optimization.",
      links: [
        { text: "Ad Portfolio", url: "/portfolio/ads" }
      ]
    },
    points: {
      thumbnail: "/images/services/advertising-services-points.png",
      list: [
        {
          _id: "ad-1",
          title: "Cross-Platform Campaign Management",
          description: "We develop and execute synchronized advertising strategies across multiple platforms with unified messaging and coordinated bidding strategies. Our platform integration includes budget allocation optimization, cross-channel attribution modeling, and centralized performance tracking to maximize overall campaign effectiveness."
        },
        {
          _id: "ad-2",
          title: "Creative Development & Testing",
          description: "Our team produces high-converting ad creatives including copywriting, visual design, and video production. We implement structured multivariate testing frameworks to systematically identify top-performing creative elements and continuously refine ad variations based on performance data.",
          links: [
            { text: "Creative Samples", url: "/samples/ads" }
          ]
        },
        {
          _id: "ad-3",
          title: "Performance Optimization & ROAS Tracking",
          description: "Using advanced bid strategies and algorithmic optimization techniques, we maximize advertising efficiency across platforms. Our transparent reporting includes detailed return-on-ad-spend (ROAS) analysis, conversion tracking, and profitability metrics with clear attribution modeling."
        }
      ]
    }
  },
  {
    _id: "lead-generation",
    title: "Lead Generation",
    description:
      "Our lead generation service helps you attract and convert potential customers through a combination of landing pages, email funnels, paid ads, and outreach campaigns. We use data-driven techniques to target your ideal audience, build interest, and nurture leads until they're ready to buy. It's not just about getting leads—it's about getting the right ones.",
    thumbnail: "/images/services/lead-generation.png",
    link: "/services/lead-generation/",
    details: {
      thumbnail: "/images/services/lead-generation-details.png",
      title: "Lead Generation",
      description: "We implement full-funnel lead generation solutions including landing page optimization, lead capture forms, email nurturing sequences, and targeted outreach campaigns. Our focus is on attracting marketing-qualified leads (MQLs) and converting them to sales-ready prospects.",
      links: [
        { text: "Lead Gen Tools", url: "/tools/leadgen" }
      ]
    },
    points: {
      thumbnail: "/images/services/lead-generation-points.png",
      list: [
        {
          _id: "lg-1",
          title: "Targeted Acquisition Campaigns",
          description: "We develop precision targeting strategies using intent data, firmographic filters, and behavioral triggers to reach your ideal customer profile. Our multi-touch approach combines content offers, paid advertising, and strategic partnerships to attract high-intent prospects into your conversion funnel."
        },
        {
          _id: "lg-2",
          title: "Conversion Funnel Optimization",
          description: "Our team designs and implements staged nurturing workflows that guide prospects through awareness, consideration, and decision phases. Using marketing automation and behavioral triggers, we deliver personalized content experiences that build trust and move prospects toward sales readiness.",
          links: [
            { text: "Funnel Examples", url: "/examples/funnels" }
          ]
        },
        {
          _id: "lg-3",
          title: "Lead Qualification & Scoring",
          description: "We implement systematic lead scoring models based on engagement level, demographic fit, and behavioral indicators. Our qualification process includes initial screening, needs analysis, and BANT (Budget, Authority, Need, Timeline) assessment to ensure sales teams receive properly vetted, sales-ready leads."
        }
      ]
    }
  },
  {
    _id: "graphic-design",
    title: "Graphic Design",
    description:
      "From logos and business cards to social media graphics and marketing materials, our graphic design service ensures your brand looks professional and memorable. We focus on clean, effective visual communication that aligns with your brand identity. Whether you're launching a new product or refreshing your look, we bring your ideas to life.",
    thumbnail: "/images/services/graphic-design.png",
    link: "/services/graphic-design/",
    details: {
      thumbnail: "/images/services/graphic-design-details.png",
      title: "Graphic Design",
      description: "Our design services cover brand identity development, marketing collateral creation, digital assets, and visual system implementation. We focus on creating visually compelling designs that communicate your brand values and messaging effectively.",
      links: [
        { text: "Design Portfolio", url: "/portfolio/design" }
      ]
    },
    points: {
      thumbnail: "/images/services/graphic-design-points.png",
      list: [
        {
          _id: "gd-1",
          title: "Brand Identity Systems",
          description: "We develop comprehensive visual identity systems including logo design, color palettes, typography systems, and brand guideline documentation. Our identity work establishes distinctive brand recognition while ensuring consistent application across all touchpoints and media formats."
        },
        {
          _id: "gd-2",
          title: "Marketing Collateral Design",
          description: "Our team creates visually impactful marketing materials including brochures, sales sheets, presentations, trade show displays, and promotional items. We focus on information hierarchy and visual storytelling to create materials that effectively communicate key messages and drive engagement.",
          links: [
            { text: "Collateral Samples", url: "/samples/collateral" }
          ]
        },
        {
          _id: "gd-3",
          title: "Digital Asset Production",
          description: "We produce optimized digital graphics for websites, social media, email campaigns, and advertising. Our asset creation includes responsive design adaptations, file optimization for fast loading, and platform-specific formatting to ensure maximum visual impact across all digital channels."
        }
      ]
    }
  },
  {
    _id: "ui-ux-design",
    title: "UI/UX Design",
    description:
      "Our UI/UX design service delivers intuitive, accessible, and visually appealing interfaces for web and mobile apps. We prioritize user experience by conducting research, building wireframes, and testing interactions. The result is a seamless flow that keeps users engaged and satisfied while achieving your business objectives.",
    thumbnail: "/images/services/ui-ux-design.png",
    link: "/services/ui-ux-design/",
    details: {
      thumbnail: "/images/services/ui-ux-design-details.png",
      title: "UI/UX Design",
      description: "We provide user-centered design solutions including user research, information architecture, wireframing, prototyping, and usability testing. Our process focuses on creating seamless user experiences that align with business objectives.",
      links: [
        { text: "Design Process", url: "/process/uiux" }
      ]
    },
    points: {
      thumbnail: "/images/services/ui-ux-design-points.png",
      list: [
        {
          _id: "ux-1",
          title: "User Research & Journey Mapping",
          description: "We conduct comprehensive user research including interviews, surveys, and behavioral analysis to understand user needs and pain points. Our journey mapping visualizes complete user pathways, identifying friction points and opportunities to enhance the overall experience.",
          links: [
            { text: "Research Methods", url: "/methods/research" }
          ]
        },
        {
          _id: "ux-2",
          title: "Interaction Design & Prototyping",
          description: "Our team creates detailed wireframes, interactive prototypes, and micro-interaction designs that bring user flows to life. Using tools like Figma and Adobe XD, we develop and test functional prototypes before development to validate design concepts and usability."
        },
        {
          _id: "ux-3",
          title: "Accessibility-Compliant Interface Design",
          description: "We design interfaces that meet WCAG 2.1 accessibility standards, ensuring usability for all users regardless of ability. Our accessibility-first approach includes color contrast optimization, screen reader compatibility, keyboard navigation support, and cognitive load reduction."
        }
      ]
    }
  },
  {
    _id: "web-development",
    title: "Web Development",
    description:
      "We build fast, secure, and scalable websites using modern technologies like React, Next.js, Node.js, and more. Whether it's a landing page, e-commerce site, or full-scale web app, we handle everything from frontend UI to backend systems. Our development process is tailored to your brand and business needs, ensuring a flawless online presence.",
    thumbnail: "/images/services/web-development.png",
    link: "/services/web-development/",
    details: {
      thumbnail: "/images/services/web-development-details.png",
      title: "Web Development",
      description: "Our development services include responsive website creation, e-commerce solutions, web application development, and API integrations. We use modern stacks like React, Next.js, and Node.js to build high-performance digital experiences.",
      links: [
        { text: "Tech Stack", url: "/technology" }
      ]
    },
    points: {
      thumbnail: "/images/services/web-development-points.png",
      list: [
        {
          _id: "web-1",
          title: "Modern Frontend Development",
          description: "We build responsive, interactive user interfaces using React, Next.js, and TypeScript. Our frontend development includes component-based architecture, state management solutions, and performance optimization techniques to create fast, engaging web experiences.",
          links: [
            { text: "Frontend Examples", url: "/examples/frontend" }
          ]
        },
        {
          _id: "web-2",
          title: "Backend System Development",
          description: "Our backend solutions include API development, database architecture, server-side logic, and third-party integrations using Node.js, Express, and MongoDB. We develop secure, scalable backend systems that support complex business logic and data management requirements."
        },
        {
          _id: "web-3",
          title: "Performance & Security Optimization",
          description: "We implement comprehensive performance strategies including code splitting, lazy loading, image optimization, and CDN integration. Our security measures include HTTPS implementation, security headers, input validation, and regular vulnerability scanning to protect against threats."
        }
      ]
    }
  },
  {
    _id: "mobile-app-development",
    title: "Mobile Application Development",
    description:
      "We design and develop custom mobile apps for iOS and Android platforms. Our apps are user-friendly, performance-optimized, and tailored to your business model. From native apps to cross-platform solutions using Flutter or React Native, we ensure functionality, aesthetics, and scalability go hand in hand.",
    thumbnail: "/images/services/mobile-app.png",
    link: "/services/mobile-app-development/",
    details: {
      thumbnail: "/images/services/mobile-app-development-details.png",
      title: "Mobile Application Development",
      description: "We create native and cross-platform mobile applications with custom UI/UX design, backend integration, and performance optimization. Our solutions include iOS, Android, and hybrid applications built with modern frameworks.",
      links: [
        { text: "App Portfolio", url: "/portfolio/apps" }
      ]
    },
    points: {
      thumbnail: "/images/services/mobile-app-development-points.png",
      list: [
        {
          _id: "app-1",
          title: "Native Platform Development",
          description: "We build high-performance native applications using Swift for iOS and Kotlin for Android. Our native development approach leverages platform-specific capabilities and follows platform conventions to deliver optimal performance and user experience.",
          links: [
            { text: "Native Examples", url: "/examples/native" }
          ]
        },
        {
          _id: "app-2",
          title: "Cross-Platform Solutions",
          description: "Using frameworks like React Native and Flutter, we develop cross-platform applications that maintain native-like performance while maximizing code reuse. Our approach includes platform-specific adaptations to ensure consistent user experiences across iOS and Android devices."
        },
        {
          _id: "app-3",
          title: "App Deployment & Maintenance",
          description: "We handle full app deployment including App Store and Google Play submission, store optimization (ASO), and ongoing maintenance. Our maintenance packages include performance monitoring, regular updates, bug fixes, and feature enhancements to keep your app current and functional."
        }
      ]
    }
  },
  {
    _id: "business-solutions",
    title: "Business Solutions",
    description:
      "We offer custom digital solutions to streamline your operations, automate workflows, and boost productivity. Our services include CRM setup, ERP integration, custom dashboards, and digital transformation consulting. Whether you're a startup or an established business, we help you adopt the right tools to scale efficiently.",
    thumbnail: "/images/services/business-solutions.png",
    link: "/services/business-solutions/",
    details: {
      thumbnail: "/images/services/business-solutions-details.png",
      title: "Business Solutions",
      description: "We provide digital transformation services including CRM implementation, workflow automation, ERP integration, and custom business application development. Our solutions are designed to optimize operations and drive business growth.",
      links: [
        { text: "Solutions Overview", url: "/solutions" }
      ]
    },
    points: {
      thumbnail: "/images/services/business-solutions-points.png",
      list: [
        {
          _id: "bs-1",
          title: "Workflow Automation Systems",
          description: "We analyze business processes to identify automation opportunities and implement customized workflow solutions. Our automation systems integrate with existing tools to streamline operations, reduce manual tasks, minimize errors, and improve overall operational efficiency.",
          links: [
            { text: "Automation Case Studies", url: "/cases/automation" }
          ]
        },
        {
          _id: "bs-2",
          title: "CRM & ERP Integration",
          description: "We implement and customize CRM/ERP solutions like Salesforce, HubSpot, and Odoo to centralize business data. Our integration services connect disparate systems, synchronize data across platforms, and create unified dashboards for comprehensive business intelligence."
        },
        {
          _id: "bs-3",
          title: "Custom Business Application Development",
          description: "We develop tailored software solutions to address unique business challenges, including inventory management systems, custom reporting tools, and specialized operational platforms. Our applications are built to integrate with existing infrastructure while providing scalable solutions for business growth."
        }
      ]
    }
  },
  {
    _id: "online-support",
    title: "Online Support",
    description:
      "Our online support service ensures that your digital platforms are always operational and your customers receive timely help. We offer live chat setup, ticketing systems, virtual assistance, and knowledge base management. Whether it's technical support or customer service, we're here to help you stay responsive and reliable.",
    thumbnail: "/images/services/online-support.png",
    link: "/services/online-support/",
    details: {
      thumbnail: "/images/services/online-support-details.png",
      title: "Online Support",
      description: "We provide comprehensive digital support solutions including helpdesk implementation, live chat systems, knowledge base development, and ticketing systems. Our services ensure prompt customer assistance and platform reliability.",
      links: [
        { text: "Support Plans", url: "/plans/support" }
      ]
    },
    points: {
      thumbnail: "/images/services/online-support-points.png",
      list: [
        {
          _id: "os-1",
          title: "Helpdesk & Ticketing Systems",
          description: "We implement and configure comprehensive helpdesk solutions like Zendesk and Freshdesk to streamline customer support operations. Our setup includes customized ticket workflows, SLA management, escalation rules, and integration with communication channels for efficient issue resolution.",
          links: [
            { text: "System Options", url: "/options/support" }
          ]
        },
        {
          _id: "os-2",
          title: "Live Chat & Chatbot Implementation",
          description: "We deploy and customize live chat solutions with AI-powered chatbots for 24/7 customer assistance. Our implementation includes conversational design, integration with knowledge bases, handoff protocols to human agents, and performance analytics to continuously improve response quality."
        },
        {
          _id: "os-3",
          title: "Knowledge Management Systems",
          description: "We develop structured knowledge bases and FAQ systems that enable self-service support. Our approach includes content organization, search optimization, analytics tracking, and maintenance processes to ensure support content remains accurate, accessible, and effective in reducing support tickets."
        }
      ]
    }
  }
];

