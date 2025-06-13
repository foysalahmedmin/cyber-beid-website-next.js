import { SectionTitle, Subtitle, Title } from "@/components/ui/SectionTitle";

type TSection = {
  title: string;
  description: string;
};

const sections: TSection[] = [
  {
    title: "Introduction",
    description:
      "At CyberDoc, we are committed to protecting your privacy. This policy outlines how we collect, use, and safeguard your personal information when you use our website and services.",
  },
  {
    title: "Information We Collect",
    description:
      "We collect information to provide and improve our services:\n\n• Contact Information: Name, email, phone number when you submit forms\n• Business Details: Company name, industry, project requirements\n• Technical Data: IP address, browser type, device information\n• Usage Data: Pages visited, time spent, interaction patterns\n• Cookies: Small data files stored on your device (see Cookie section)",
  },
  {
    title: "How We Use Your Information",
    description:
      "Your information helps us deliver and improve our services:\n\n• Provide requested services and project consultations\n• Personalize your experience and content recommendations\n• Communicate about projects, updates, and promotions\n• Analyze website usage to improve functionality\n• Prevent fraud and enhance security measures\n• Comply with legal obligations and business operations",
  },
  {
    title: "Data Sharing & Disclosure",
    description:
      "We respect your privacy and only share information when necessary:\n\n• Service Partners: With trusted providers (hosting, analytics) who assist our operations under strict confidentiality agreements\n• Legal Compliance: When required by law or to protect our rights\n• Business Transfers: In connection with mergers, acquisitions, or asset sales\n• With Consent: When you explicitly authorize specific sharing\n\nWe never sell your personal information to third parties.",
  },
  {
    title: "Cookies & Tracking Technologies",
    description:
      "We use cookies and similar technologies to enhance your experience:\n\n• Essential Cookies: Required for site functionality and security\n• Analytics Cookies: Help us understand usage patterns (Google Analytics)\n• Marketing Cookies: Support personalized advertising campaigns\n\nYou can manage preferences through your browser settings. Disabling cookies may affect site functionality.",
  },
  {
    title: "Data Security",
    description:
      "We implement robust security measures to protect your information:\n\n• Encryption: Industry-standard SSL/TLS for data transmission\n• Access Controls: Strict role-based access to sensitive data\n• Security Audits: Regular vulnerability assessments\n• Employee Training: Confidentiality and security protocols\n\nWhile we implement strong safeguards, no internet transmission is 100% secure.",
  },
  {
    title: "Data Retention",
    description:
      "We retain your information only as long as necessary:\n\n• Active Clients: Throughout our business relationship\n• Prospective Clients: 2 years from last engagement\n• Website Analytics: 26 months\n• Legal Requirements: As mandated by applicable laws\n\nYou may request deletion of your data at any time (see Your Rights section).",
  },
  {
    title: "Your Rights & Choices",
    description:
      "You have control over your personal information:\n\n• Access: Request a copy of your data\n• Correction: Update inaccurate information\n• Deletion: Request removal of personal data\n• Opt-out: Unsubscribe from marketing communications\n• Restriction: Limit how we use your data\n• Portability: Receive your data in transferable format\n\nTo exercise these rights, contact us at foysalahmedmin@gamil.com.",
  },
  {
    title: "Third-Party Services",
    description:
      "Our website may contain links to third-party services:\n\n• Payment Processors: Stripe, PayPal for transactions\n• Analytics: Google Analytics for usage data\n• Social Media: Integrated platforms for sharing\n• Cloud Services: AWS, Vercel for hosting\n\nThese services have their own privacy policies. We encourage you to review them.",
  },
  {
    title: "International Data Transfers",
    description:
      "As a global provider, your data may be transferred internationally:\n\n• We use EU-approved Standard Contractual Clauses\n• Implement supplementary security measures\n• Ensure equivalent protection regardless of location\n\nBy using our services, you consent to this transfer.",
  },
  {
    title: "Children's Privacy",
    description:
      "Our services are not directed to individuals under 16:\n\n• We do not knowingly collect children's information\n• If we discover such collection, we will delete it promptly\n• Parents/guardians may contact us regarding potential collection",
  },
  {
    title: "Policy Updates",
    description:
      "We may update this policy periodically:\n\n• Changes will be posted on this page\n• Material changes will be notified via email\n• Continued use after updates constitutes acceptance\n\nLast Updated: June 11, 2025",
  },
  {
    title: "Contact Us",
    description:
      "For privacy-related inquiries:\n\nCyberDoc\nAttn: Privacy Officer\nEmail: foysalahmedmin@gamil.com\nPhone: +1 (555) 123-4567\n\nWe respond to all requests within 30 days.",
  },
];

const PrivacyPolicySection = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <SectionTitle>
          <Subtitle>Privacy</Subtitle>
          <Title>Privacy Policy</Title>
        </SectionTitle>
        <div className="space-y-8 md:space-y-12">
          {sections?.map((section, index) => (
            <div key={index} className="space-y-2">
              <h3 className="text-3xl">{section?.title}</h3>
              <p>{section?.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicySection;
