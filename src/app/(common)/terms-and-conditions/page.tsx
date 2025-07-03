import TermsAndConditionsSection from "@/components/(common)/(terms-and-conditions-page)/TermsAndConditionsSection";
import FollowUpSection from "@/components/sections/FollowUpSection";

export const metadata = {
  title: "TERMS AND CONDITIONS | CYBER BAID",
  description:
    "CyberBeid | By using our services, you agree to the terms and conditions outlined in this document. We're dedicated to delivering exceptional digital experiences that make a difference in the digital world.",
};

const TermsAndConditionsPage = () => {
  return (
    <main>
      <TermsAndConditionsSection />
      <FollowUpSection />
    </main>
  );
};

export default TermsAndConditionsPage;
