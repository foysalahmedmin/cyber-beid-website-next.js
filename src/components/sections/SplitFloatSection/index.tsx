import { Button } from "@/components/ui/Button";
import {
  Description,
  SectionTitle,
  Subtitle,
  Title,
} from "@/components/ui/SectionTitle";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type SplitFloatSectionProps = {
  title?: string;
  subtitle?: string;
  description?: string | React.ReactNode;
  image?: string;
  className?: string;
  links?: {
    text: string;
    url: string;
  }[];
};

const SplitFloatSection = ({
  title = "",
  subtitle = "",
  description = "",
  image = "",
  className = "",
  links = [],
}: SplitFloatSectionProps) => {
  return (
    <section className={cn("intersection-fade-in py-16 md:py-24", className)}>
      <div className="container">
        <div className="relative">
          <SectionTitle className="mb-6">
            {subtitle && <Subtitle>{subtitle}</Subtitle>}
            {title && <Title>{title}</Title>}
          </SectionTitle>

          {/* Floating Image */}
          <div className="mb-6 w-full md:float-right md:ml-6 md:max-w-md lg:max-w-lg xl:max-w-xl">
            <div className="aspect-[3/4] w-full overflow-hidden rounded-xl border">
              <Image
                className="bg-muted size-full object-cover object-center"
                src={image}
                alt="hero-split-image"
                height={700}
                width={525}
              />
            </div>
          </div>

          {/* Content that wraps around the image */}
          {description && (
            <Description>
              <div className="w-full">
                <div className="prose prose-headings:font-normal dark:prose-invert w-full max-w-none">
                  <div
                    className="text-foreground font-sans"
                    dangerouslySetInnerHTML={{ __html: description || "" }}
                  />
                </div>
              </div>
            </Description>
          )}

          {/* Links section - clears the float */}
          {links?.length > 0 && (
            <div className="clear-both pt-6">
              {links?.map((link, index) => (
                <Link key={index} href={link?.url}>
                  <Button asChild={true} variant="outline" size="lg">
                    <span>{link?.text}</span>
                  </Button>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default SplitFloatSection;
