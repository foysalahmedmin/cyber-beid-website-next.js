import ContactSection from "@/components/(common)/(contact-page)/ContactSection";
import FollowUpSection from "@/components/sections/FollowUpSection";
import PageHeaderSection from "@/components/sections/PageHeaderSection";

const ContactPage = () => {
  return (
    <main>
      <PageHeaderSection
        subtitle="Contact"
        title="We’d love to hear from you"
        description="From four cities, with a team of industry professionals, we work for businesses all over the world."
      />
      <ContactSection />
      {/* <ProjectApplySection /> */}
      <FollowUpSection />
    </main>
  );
};

export default ContactPage;
