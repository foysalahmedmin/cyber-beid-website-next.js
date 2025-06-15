import { about_links } from "@/assets/data/links";
import { Button } from "@/components/ui/Button";
import {
  Description,
  SectionTitle,
  Subtitle,
  Title,
} from "@/components/ui/SectionTitle";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const AboutSection = () => {
  return (
    <section id="about" className="py-16 md:py-24">
      <div className="container">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="order-2 self-stretch lg:order-1">
            <div className="relative h-full w-full lg:pr-8 lg:pb-8">
              <img
                src="/images/(home-page)/about.png"
                alt="Team working together in modern office"
                className="bg-muted size-full rounded-xl object-cover"
                loading="lazy"
              />

              {/* Stats card overlay */}
              <div className="bg-card absolute right-0 bottom-0 hidden rounded-xl border p-6 shadow-xl lg:block">
                <div className="text-center">
                  <div className="text-primary mb-1 text-3xl font-bold">
                    150+
                  </div>
                  <div className="text-sm">Projects Completed</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="order-1 lg:order-2">
            <SectionTitle>
              <Subtitle>About Us</Subtitle>
              <Title>We Build Digital Solutions That Drive Growth</Title>
              <Description>
                CyberDoc is a leading digital solutions company specializing in
                web development, mobile applications, and cloud technologies.
                Since 2018, we&apos;ve helped businesses of all sizes transform
                their digital presence and achieve their goals through
                innovative technology solutions.
              </Description>
              <p>
                Our commitment to excellence, innovation, and client
                satisfaction has made us a trusted partner for organizations
                worldwide. Explore the different aspects of our company to learn
                more about what makes us unique.
              </p>
            </SectionTitle>

            {/* About Links Grid */}
            <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {about_links.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="group hover:border-primary/50 bg-card block rounded-lg border p-4 transition-all duration-200"
                >
                  <div className="mb-2 flex items-center gap-4">
                    <div className="bg-primary/5 group-hover:bg-primary/10 flex size-8 flex-shrink-0 items-center justify-center rounded-lg transition-colors duration-500">
                      <span className="text-primary">
                        {<link.icon className="size-6" />}
                      </span>
                    </div>
                    <h4 className="group-hover:text-primary font-semibold text-gray-900 transition-colors duration-200">
                      {link.text}
                    </h4>
                    <ArrowRight className="group-hover:text-primary ml-auto size-4 text-gray-400 transition-all duration-200 group-hover:translate-x-1" />
                  </div>
                  <p className="text-sm leading-relaxed text-gray-600">
                    {link.description}
                  </p>
                </Link>
              ))}
            </div>

            {/* CTA Button */}
            <div className="flex justify-start">
              <Link href="/contact">
                <Button asChild={true} size="lg">
                  <span>Contact With Us</span>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
