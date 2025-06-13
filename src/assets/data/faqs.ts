export type TFaq = {
  _id: string;
  question: string;
  answer: string;
};

export const faqs: TFaq[] = [
  {
    _id: "project-timeline",
    question: "How long will my project take?",
    answer: `
      <p>Project timelines vary based on complexity:</p>
      <ul>
        <li>Websites: 4-12 weeks</li>
        <li>Mobile Apps: 12-20 weeks</li>
        <li>Marketing Campaigns: Ongoing with monthly optimizations</li>
        <li>Branding/Design: 2-8 weeks</li>
      </ul>
      <p>Typical workflow:</p>
      <ol>
        <li>Planning & Discovery (1-2 weeks)</li>
        <li>Design & Development (project-specific)</li>
        <li>Testing & Refinement (1-3 weeks)</li>
        <li>Launch & Optimization (ongoing)</li>
      </ol>
    `,
  },
  {
    _id: "free-consultation",
    question: "What is included with a free consultation?",
    answer: `
      <p>Our free consultation includes:</p>
      <ul>
        <li>Comprehensive needs assessment</li>
        <li>Competitive analysis of your industry</li>
        <li>Preliminary strategy recommendations</li>
        <li>Project scope definition</li>
        <li>Timeline estimation</li>
        <li>Budget range discussion</li>
        <li>Q&amp;A session with our experts</li>
      </ul>
      <p>You’ll receive a custom proposal with no obligation.</p>
    `,
  },
  {
    _id: "service-scope",
    question: "What services do you offer?",
    answer: `
      <p>We offer a wide range of digital solutions:</p>
      <ul>
        <li>Digital Marketing (SEO, PPC, Social Media)</li>
        <li>Web &amp; Mobile App Development</li>
        <li>UI/UX Design</li>
        <li>Content Creation</li>
        <li>Graphic Design</li>
        <li>Business Solutions &amp; Automation</li>
        <li>Lead Generation</li>
        <li>Advertising Campaign Management</li>
      </ul>
    `,
  },
  {
    _id: "pricing",
    question: "What are your pricing models?",
    answer: `
      <p>We provide flexible pricing:</p>
      <ul>
        <li>Project-based: Fixed price per scope</li>
        <li>Retainer: Monthly ongoing services ($2,500-$10,000+)</li>
        <li>Hourly: $95-$150/hour</li>
        <li>Performance-based: For marketing projects</li>
      </ul>
      <p>No hidden fees. Transparent pricing always.</p>
    `,
  },
  {
    _id: "process",
    question: "What is your typical project process?",
    answer: `
      <ol>
        <li>Discovery &amp; Strategy</li>
        <li>Proposal &amp; Planning</li>
        <li>Design &amp; Development</li>
        <li>Testing &amp; QA</li>
        <li>Deployment &amp; Launch</li>
        <li>Ongoing Optimization &amp; Support</li>
      </ol>
      <p>We keep you updated weekly throughout the process.</p>
    `,
  },
  {
    _id: "results",
    question: "How do you measure success?",
    answer: `
      <p>We track key metrics:</p>
      <ul>
        <li>Traffic &amp; Engagement</li>
        <li>Conversion Rates</li>
        <li>ROI &amp; ROAS</li>
        <li>User Experience</li>
        <li>Technical Performance</li>
        <li>Overall Business Impact</li>
      </ul>
      <p>You’ll receive detailed monthly reports.</p>
    `,
  },
  {
    _id: "tech-stack",
    question: "What technologies do you work with?",
    answer: `
      <p>Our tech stack includes:</p>
      <ul>
        <li><strong>Frontend:</strong> React, Next.js, TypeScript</li>
        <li><strong>Backend:</strong> Node.js, Python, Ruby</li>
        <li><strong>Mobile:</strong> Swift, Kotlin, React Native</li>
        <li><strong>CMS:</strong> WordPress, Shopify, Contentful</li>
        <li><strong>Marketing:</strong> Google Ads, Meta, HubSpot</li>
        <li><strong>Database:</strong> MongoDB, PostgreSQL</li>
      </ul>
    `,
  },
  {
    _id: "support",
    question: "Do you provide ongoing support?",
    answer: `
      <p>Yes, we offer ongoing support plans:</p>
      <ul>
        <li>Basic Maintenance ($500+/month)</li>
        <li>Performance Optimization</li>
        <li>Security Updates</li>
        <li>Content Management</li>
        <li>24/7 Emergency Support</li>
        <li>Marketing Campaign Handling</li>
      </ul>
    `,
  },
  {
    _id: "communication",
    question: "How do we communicate during projects?",
    answer: `
      <p>We ensure smooth communication through:</p>
      <ul>
        <li>Weekly Video Calls</li>
        <li>Asana or Trello Project Boards</li>
        <li>Slack for Daily Messages</li>
        <li>Figma or Zeplin for Design Sharing</li>
        <li>Google Docs &amp; Notion for Documentation</li>
      </ul>
    `,
  },
  {
    _id: "starting",
    question: "How do we get started?",
    answer: `
      <p>Just follow these steps:</p>
      <ol>
        <li>Book a consultation</li>
        <li>Discuss your goals</li>
        <li>Receive a tailored proposal</li>
      </ol>
      <p>Contact us via our form or email <a href="mailto:hello@yourcompany.com">hello@yourcompany.com</a>.</p>
    `,
  },
];
