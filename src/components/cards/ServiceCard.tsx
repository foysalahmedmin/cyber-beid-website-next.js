import { TService } from "@/assets/data/services";
import { cn } from "@/lib/utils";
import Link from "next/link";

type ServiceCardProps = {
  service: Partial<TService>;
  className?: string;
};
const ServiceCard = ({ service, className }: ServiceCardProps) => {
  return (
    <div
      className={cn(
        "group bg-card relative aspect-[5/4] w-full cursor-pointer overflow-hidden rounded-xl",
        className,
      )}
    >
      <Link
        key={service?._id}
        href={"/services/" + service?._id}
        className="size-full"
      >
        <img
          className="bg-muted size-full object-cover object-center transition-all duration-700 ease-in-out group-hover:scale-110"
          src={service?.thumbnail}
          alt={service?.title}
        />
        <div className="from-background absolute inset-0 flex items-end justify-start overflow-hidden bg-gradient-to-t via-transparent to-transparent">
          <div className="p-6">
            <h3 className="pb-1 text-2xl">{service?.title}</h3>
            <p className="invisible -mb-20 line-clamp-3 text-sm opacity-0 transition-all duration-500 ease-in-out group-hover:visible group-hover:mb-0 group-hover:opacity-100">
              {service?.description}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ServiceCard;
