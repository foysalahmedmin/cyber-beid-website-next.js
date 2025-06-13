import { services } from "@/assets/data/services";
import ServicesSection from "@/components/(common)/(services-page)/ServicesSection";
import {
  Description,
  SectionTitle,
  Subtitle,
  Title,
} from "@/components/ui/SectionTitle";

const ServicesPage = () => {
  return (
    <main>
      <section className="py-16 md:py-24">
        <div className="container">
          <SectionTitle>
            <Subtitle>Our Services</Subtitle>
            <Title>Services</Title>
            <Description>
              We offer a wide range of services to help you achieve your goals.
            </Description>
          </SectionTitle>
          <div>
            <ServicesSection services={services} />
          </div>
        </div>
      </section>
    </main>
  );
};

export default ServicesPage;
