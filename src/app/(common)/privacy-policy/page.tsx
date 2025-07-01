import PrivacyPolicySection from "@/components/(common)/(privacy-policy-page)/PrivacyPolicySection";
import FollowUpSection from "@/components/sections/FollowUpSection";

export const metadata = {
  title: "PRIVACY POLICY | CYBER BAID",
  description:
    "CyberBaid | Our privacy policy outlines how we collect, use, and protect your personal information. We're committed to ensuring your privacy and security in our digital world.",
};

const PrivacyPolicyPage = () => {
  return (
    <main>
      <PrivacyPolicySection />
      <FollowUpSection />
    </main>
  );
};

export default PrivacyPolicyPage;
