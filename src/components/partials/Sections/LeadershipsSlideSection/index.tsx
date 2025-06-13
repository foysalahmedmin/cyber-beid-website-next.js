import { leaderships as leaderships_data } from "@/assets/data/leaderships";
import LeadershipCard from "@/components/cards/LeadershipCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNextTrigger,
  CarouselPagination,
  CarouselPreviousTrigger,
} from "@/components/ui/Carousel";
import {
  Description,
  SectionTitle,
  Subtitle,
  Title,
} from "@/components/ui/SectionTitle";
import { cn } from "@/lib/utils";

const LeadershipsSlideSection = ({
  title = "",
  subtitle = "",
  description = "",
  leaderships = leaderships_data,
  className = "",
}) => {
  return (
    <section className={cn("py-16 md:py-24", className)}>
      <div className="container">
        <div className="mb-6 sm:px-4 md:px-6">
          <SectionTitle className="">
            {subtitle && <Subtitle>{subtitle}</Subtitle>}
            {title && <Title>{title}</Title>}
            {description && <Description>{description}</Description>}
          </SectionTitle>
        </div>
        <div>
          <Carousel className="group">
            <CarouselContent>
              {leaderships?.map((leadership) => (
                <CarouselItem
                  key={leadership._id}
                  className="basis-1/1 sm:basis-1/2 sm:px-4 md:basis-1/3 md:px-6 lg:basis-1/4"
                >
                  <LeadershipCard leadership={leadership} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="opacity-0 transition-all duration-300 group-hover:opacity-100">
              <CarouselPreviousTrigger className="left-8 hidden h-14 text-4xl md:inline-flex" />
              <CarouselNextTrigger className="right-8 hidden h-14 text-4xl md:inline-flex" />
              <CarouselPagination className="foreground -bottom-6 md:basis-1/3 md:px-6" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default LeadershipsSlideSection;
