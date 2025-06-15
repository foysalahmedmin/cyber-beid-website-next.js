import {
  Description,
  SectionTitle,
  Subtitle,
  Title,
} from "@/components/ui/SectionTitle";
import { cn } from "@/lib/utils";

type SplitSection1 = {
  title?: string;
  subtitle?: string;
  description?: string;
  image?: string;
  className?: string;
};

const SplitSection1 = ({
  title,
  subtitle,
  description,
  className,
  image,
}: SplitSection1) => {
  return (
    <section className={cn("py-16 md:py-24", className)}>
      <div className="container">
        {(title || subtitle || description) && (
          <SectionTitle className="max-w-full">
            {subtitle && <Subtitle>{subtitle}</Subtitle>}
            {title && <Title>{title}</Title>}
            {description && <Description>{description}</Description>}
          </SectionTitle>
        )}
        <div className="group/card grid items-center gap-6">
          <div className="group/trigger relative aspect-[2/1] w-full cursor-pointer overflow-hidden rounded-xl">
            <img
              className="bg-muted size-full object-cover object-center"
              src={image}
              alt={title || "hero-split-image"}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SplitSection1;
