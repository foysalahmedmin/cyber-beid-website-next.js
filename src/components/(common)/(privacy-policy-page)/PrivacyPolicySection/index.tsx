import {
  Description,
  SectionTitle,
  Subtitle,
  Title,
} from "@/components/ui/SectionTitle";

type TSection = {
  title: string;
  description: string; // HTML string
};

const policies: TSection[] = [
  {
    title: "1. Purpose",
    description: `This Privacy Policy explains how we collect, use, store, and share your personal information in accordance with the <strong>Privacy Act 2020 (NZ)</strong>.`,
  },
  {
    title: "2. What We Collect",
    description: `
      <p>We may collect the following information:</p>
      <ul>
        <li>Name and contact details (email, phone, etc.)</li>
        <li>Billing and payment details</li>
        <li>Technical data (IP address, browser type, access logs)</li>
        <li>Usage data (pages visited, services used)</li>
        <li>Any content or files you upload to our services</li>
      </ul>
    `,
  },
  {
    title: "3. How We Collect Your Information",
    description: `
      <ul>
        <li>When you fill out forms or create an account</li>
        <li>When you contact us or use our services</li>
        <li>Automatically through cookies and analytics tools</li>
      </ul>
    `,
  },
  {
    title: "4. Why We Collect Your Information",
    description: `
      <ul>
        <li>To provide and improve our services</li>
        <li>To communicate with you (service alerts, updates)</li>
        <li>To process payments and invoices</li>
        <li>For legal compliance (e.g., tax reporting, dispute resolution)</li>
        <li>To prevent fraud or misuse</li>
      </ul>
    `,
  },
  {
    title: "5. Storage and Security",
    description: `We take reasonable steps to protect your personal data from unauthorized access, loss, or misuse. Data is stored on secure servers with limited access controls.`,
  },
  {
    title: "6. Disclosure of Information",
    description: `
      <p>We do not sell your data. We may share information with:</p>
      <ul>
        <li>Trusted service providers (e.g., payment processors, hosting providers)</li>
        <li>Law enforcement or regulators if legally required</li>
        <li>Partners involved in delivering services to you (under confidentiality)</li>
      </ul>
    `,
  },
  {
    title: "7. Cookies & Analytics",
    description: `We use cookies and tracking tools (e.g., Google Analytics) to improve user experience and measure performance. You can disable cookies in your browser settings.`,
  },
  {
    title: "8. Your Rights",
    description: `
      <p>Under the <strong>Privacy Act 2020</strong>, you have the right to:</p>
      <ul>
        <li>Access the personal information we hold about you</li>
        <li>Request correction of your personal information</li>
        <li>Withdraw consent (where applicable)</li>
        <li>Lodge a complaint with the <strong>Privacy Commissioner</strong></li>
      </ul>
      <p>To exercise your rights, please contact us via the website.</p>
    `,
  },
  {
    title: "9. International Transfers",
    description: `Some of your data may be stored or processed overseas (e.g., by global cloud services). We ensure all providers follow reasonable data protection standards.`,
  },
  {
    title: "10. Updates to This Policy",
    description: `We may update this policy from time to time. The latest version will always be posted on our website.`,
  },
  {
    title: "Refund & Cancellation Policy — CyberBeid Limited",
    description: `
      <p><strong>Effective Date:</strong> [Insert Date]<br>
      <strong>Applies To:</strong> All digital services, software solutions, and web development projects sold or provided by CyberBeid Limited.</p>
    `,
  },
];

const refund_policies: TSection[] = [
  {
    title: "1. Our Promise",
    description: `We comply with the <strong>Consumer Guarantees Act 1993 (NZ)</strong> and provide services with reasonable care and skill. If something goes wrong due to our fault, we will work to fix it.`,
  },
  {
    title: "2. Refund Eligibility",
    description: `
      <p>Refunds may be granted in the following situations:</p>
      <ul>
        <li>You were charged in error</li>
        <li>You cancel before service delivery begins</li>
        <li>The service was not delivered as described or agreed</li>
        <li>A service was significantly defective and cannot be resolved within a reasonable timeframe</li>
      </ul>
      <blockquote>
        <p><strong>⚠️ Note</strong>: Refunds are not provided for change of mind, or if you've misused the service or failed to follow requirements.</p>
      </blockquote>
    `,
  },
  {
    title: "3. How to Request a Refund",
    description: `
      <p>To request a refund:</p>
      <ul>
        <li>Email us through the contact form on our website</li>
        <li>Include details: service, date of purchase, issue, and any relevant documentation</li>
        <li>We will investigate and respond within <strong>5 business days</strong></li>
      </ul>
    `,
  },
  {
    title: "4. Cancellation Policy",
    description: `
      <h4>One-off Projects (e.g., website development):</h4>
      <ul>
        <li><strong>Before work starts:</strong> Full refund</li>
        <li><strong>During project:</strong> Refund minus work already completed</li>
        <li><strong>After delivery:</strong> No refund unless agreed issues remain unresolved</li>
      </ul>
      <h4>Subscription Services (e.g., hosting, ongoing support):</h4>
      <ul>
        <li><strong>Monthly plans:</strong> Can be cancelled anytime before the next billing date</li>
        <li><strong>Annual plans:</strong> Can be cancelled with pro-rata refund only if service fails to meet agreed deliverables</li>
      </ul>
    `,
  },
  {
    title: "5. Processing Refunds",
    description: `
      <ul>
        <li>Approved refunds will be processed to the original payment method</li>
        <li>It may take 5–10 business days depending on your bank or provider</li>
      </ul>
    `,
  },
  {
    title: "6. Contact",
    description: `
      <p>All refund or cancellation inquiries must be made through the contact page on 
      <a href="https://cyberbeid.nz/" target="_blank" style="text-decoration-line:none;color:rgb(66,133,244)">https://cyberbeid.nz/</a></p>
    `,
  },
];

const PrivacyPolicySection = () => {
  return (
    <section className="intersection-fade-in space-y-16 py-16 md:space-y-24 md:py-24">
      <div className="container">
        <SectionTitle>
          <Subtitle>Privacy</Subtitle>
          <Title>Privacy Policy</Title>
          <Description>
            <div className="flex flex-col flex-wrap gap-x-4 md:flex-row md:items-center">
              <p>
                <strong>Business Name:</strong> CyberBeid Limited
              </p>
              <br />
              <p>
                <strong>NZBN:</strong> 9429052881626
              </p>
              <br />
              <p>
                <strong>Website:</strong>
                <a href="https://cyberbeid.nz/" target="_blank">
                  https://cyberbeid.nz/
                </a>
              </p>
            </div>
          </Description>
        </SectionTitle>
        <div className="space-y-8 md:space-y-12">
          {policies?.map((section, index) => (
            <div key={index} className="space-y-2">
              <h3 className="text-3xl">{section?.title}</h3>
              <div className="w-full">
                <div className="prose prose-headings:font-normal dark:prose-invert w-full max-w-none">
                  <div
                    className="text-foreground font-sans"
                    dangerouslySetInnerHTML={{
                      __html: section?.description || "",
                    }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="container">
        <div className="bg-muted px-6 py-16 md:py-24">
          <SectionTitle>
            <Subtitle>Privacy</Subtitle>
            <Title>Refund & Cancellation Policy</Title>
          </SectionTitle>
          <div className="space-y-8 md:space-y-12">
            {refund_policies?.map((section, index) => (
              <div key={index} className="space-y-2">
                <h3 className="text-3xl">{section?.title}</h3>
                <div className="w-full">
                  <div className="prose prose-headings:font-normal dark:prose-invert w-full max-w-none">
                    <div
                      className="text-foreground font-sans"
                      dangerouslySetInnerHTML={{
                        __html: section?.description || "",
                      }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicySection;
