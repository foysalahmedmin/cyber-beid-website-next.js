import { SectionTitle, Subtitle, Title } from "@/components/ui/SectionTitle";

type TSection = {
  title: string;
  description: string;
};

const sections: TSection[] = [
  {
    title: "1. Services Overview",
    description:
      "CyberBeid provides digital solutions including web development, application development, UI/UX design, digital marketing, and business automation services. By engaging with our services, you agree to these terms governing our professional relationship.",
  },
  {
    title: "2. Service Engagement",
    description:
      "All projects begin with a formal proposal outlining scope, deliverables, timeline, and pricing. Client approval of the proposal constitutes agreement to these terms. CyberBeid reserves the right to decline projects that conflict with our ethical guidelines or technical capabilities.",
  },
  {
    title: "3. Intellectual Property Rights",
    description:
      "Upon full payment, clients receive exclusive rights to final deliverables. CyberBeid retains rights to:\n• Pre-existing code libraries and frameworks\n• Project methodologies and processes\n• Non-client-specific solutions developed during engagement\nWe may showcase completed work in our portfolio unless otherwise agreed in writing.",
  },
  {
    title: "4. Confidentiality",
    description:
      "Both parties agree to protect confidential information including:\n• Business strategies and technical specifications\n• Source code and proprietary algorithms\n• Client data and user information\n• Financial arrangements\nConfidentiality obligations survive project completion by 3 years.",
  },
  {
    title: "5. Payment Terms",
    description:
      "Standard payment structure:\n• 30% deposit to commence work\n• 40% milestone payment\n• 30% upon completion\nDelayed payments incur 1.5% monthly interest. All invoices are payable within 15 days unless otherwise specified in the project agreement.",
  },
  {
    title: "6. Revisions & Change Management",
    description:
      "Projects include two rounds of revisions within original scope. Additional requests will be:\n• Estimated separately\n• Subject to change order approval\n• May impact project timeline\nScope changes exceeding 20% of original estimate may require new proposal.",
  },
  {
    title: "7. Warranties & Limitations",
    description:
      "CyberBeid warrants deliverables for 90 days post-launch against material defects. We are not liable for:\n• Third-party platform changes\n• Client-modified code\n• Issues arising from unclear requirements\n• Force majeure events\nMaximum liability is limited to project fees paid.",
  },
  {
    title: "8. Termination Policy",
    description:
      "Either party may terminate with 30 days written notice. Upon termination:\n• Client pays for work completed\n• CyberBeid delivers completed work\n• Pre-paid amounts for uncompleted work are refunded\n• Client receives all work-in-progress assets",
  },
  {
    title: "9. Data Handling",
    description:
      "Client retains ownership of all provided data. CyberBeid will:\n• Process data only for project purposes\n• Implement industry-standard security\n• Delete or return data upon request\n• Never sell or share client data",
  },
  {
    title: "10. Third-Party Services",
    description:
      "Projects may incorporate:\n• Open-source libraries (governed by their licenses)\n• APIs and third-party platforms\n• Cloud infrastructure providers\nClient is responsible for associated costs and compliance with third-party terms.",
  },
  {
    title: "11. Governing Law & Disputes",
    description:
      "These terms are governed by the laws of [Your Jurisdiction]. Disputes will first attempt resolution through mediation. Unresolved disputes may proceed to binding arbitration in [City, State], with each party bearing own costs.",
  },
  {
    title: "12. Policy Updates",
    description:
      "Terms may be updated periodically. Clients will be notified of material changes 30 days in advance. Continued use of services constitutes acceptance of revised terms.",
  },
  {
    title: "13. Contact & Dispute Resolution",
    description:
      "For concerns or disputes:\n\nCyberBeid Solutions\nAttn: Legal Department\nEmail: legal@CyberBeid.com\nPhone: +1 (555) 123-4567\n\nWe commit to responding to formal complaints within 10 business days.",
  },
];

const TermsAndConditionsSection = () => {
  return (
    <section className="intersection-fade-in py-16 md:py-24">
      <div className="container">
        <SectionTitle>
          <Subtitle>Terms</Subtitle>
          <Title>Terms and Conditions</Title>
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

export default TermsAndConditionsSection;
