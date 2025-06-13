"use client";

import { TService } from "@/assets/data/services";
import ServiceCard from "@/components/cards/ServiceCard";
import { Button } from "@/components/ui/Button";
import { useState } from "react";

const ServicesSection = ({ services = [] }: { services: TService[] }) => {
  const [isShowMore, setIsShowMore] = useState(false);
  return (
    <div>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12 lg:grid-cols-3">
        {services?.map((service) => (
            <div key={service?._id}>
              <ServiceCard service={service} />
            </div>
          ))}
      </div>
      <div>
        {services?.length > 6 && (
          <div className="mt-12 flex items-center justify-center">
            <Button onClick={() => setIsShowMore(!isShowMore)}>
              {isShowMore ? "Show Less" : "Show More"}
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ServicesSection;
