import { services } from "@/assets/data/services";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

const data = [
  // {
  //   title: "Our location",
  //   items: [
  //     {
  //       type: "text",
  //       text: "Wellington, New Zealand",
  //     },
  //     {
  //       type: "link",
  //       text: "+64 28 470 0533",
  //       href: "tel:+64284700533",
  //     },
  //     {
  //       type: "link",
  //       text: "cyberbeid@gmail.com",
  //       href: "mailto:cyberbeid@gmail.com",
  //     },
  //   ],
  // },
  {
    title: "About",
    items: [
      // {
      //   type: "link",
      //   text: "About",
      //   href: "/about",
      // },
      // {
      //   type: "link",
      //   text: "Leaderships",
      //   href: "/leaderships",
      // },
      {
        type: "link",
        text: "Services",
        href: "/services",
      },
      // {
      //   type: "link",
      //   text: "Projects",
      //   href: "/projects",
      // },
      {
        type: "link",
        text: "Blogs",
        href: "/blogs",
      },
      {
        type: "link",
        text: "Careers",
        href: "/careers",
      },
      {
        type: "link",
        text: "History",
        href: "/history",
      },
      {
        type: "link",
        text: "Vision",
        href: "/visions",
      },
    ],
  },
  {
    title: "Services",
    items: services.map((service) => {
      return {
        type: "link",
        text: service?.title,
        href: `/services/${service?._id}`,
      };
    }),
  },
];
const links = [
  {
    type: "link",
    text: "About",
    href: "/about",
  },
  // {
  //   type: "link",
  //   text: "Leaderships",
  //   href: "/leaderships",
  // },
  {
    type: "link",
    text: "Services",
    href: "/services",
  },
  // {
  //   type: "link",
  //   text: "Projects",
  //   href: "/projects",
  // },
  {
    type: "link",
    text: "Blogs",
    href: "/blogs",
  },
  {
    type: "link",
    text: "Careers",
    href: "/careers",
  },
  {
    type: "link",
    text: "History",
    href: "/history",
  },
  {
    type: "link",
    text: "Vision",
    href: "/visions",
  },
];
const socials = [
  {
    text: "Facebook",
    href: "https://www.facebook.com/cyberbeid",
    target: "_blank",
  },
  {
    text: "Linkedin",
    href: "https://www.linkedin.com/company/cyberbeid",
    target: "_blank",
  },
  {
    text: "Instagram",
    href: "https://www.instagram.com/cyberbeid",
    target: "_blank",
  },
];

const Footer = () => {
  return (
    <footer className="intersection-fade-in py-16 md:py-24">
      <div className="container space-y-16 md:space-y-24">
        <div className="grid grid-cols-1 gap-6 md:gap-8 lg:grid-cols-3 xl:grid-cols-5">
          <div className="space-y-4 lg:col-span-3 xl:col-span-2 xl:space-y-12">
            <Link
              href="/"
              className="font-display flex w-full items-center gap-2 text-xl font-medium transition-opacity duration-300 hover:opacity-80"
              aria-label="Home"
            >
              <Image
                src="/logo-star.png"
                alt="Logo"
                width={48}
                height={48}
                className="bg-primary size-12 rounded-full object-contain object-left"
                priority
              />
              <div className="pt-2 leading-4">
                <p className="font-mokoto-glitch dark:text-foreground text-primary">
                  CyberBeid
                </p>
                <span className="text-xs font-thin">Renovation Experts</span>
              </div>
            </Link>
            <div className="flex flex-wrap gap-4">
              {/* <Link target="_blank" href="tel:+64284700533">
                <Button size="lg">
                  <span>+64 28 470 0533</span>
                </Button>
              </Link> */}
              <Link href="/services">
                <Button size="lg">
                  <span>EXPLORE SERVICES</span>
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline">
                  <span>CONTACT US</span>
                </Button>
              </Link>
            </div>
          </div>
          {data?.map((obj, index) => (
            <div
              key={index}
              className={cn("", {
                "lg:col-span-2": obj?.items?.length > 6,
              })}
            >
              <strong className="mb-4 block font-medium">{obj?.title}</strong>
              {obj?.items?.length > 0 && (
                <ul
                  className={cn("space-y-2", {
                    "grid lg:grid-cols-2": obj?.items?.length > 6,
                  })}
                >
                  {obj?.items.map((item, index) => (
                    <li className="font-light" key={index}>
                      {item?.type === "link" ? (
                        <Link
                          className="underline-effect primary hover:text-primary"
                          href={item?.href || "#"}
                        >
                          {item?.text}
                        </Link>
                      ) : (
                        <p className="mb-4">{item?.text}</p>
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 gap-6 md:gap-8 lg:grid-cols-3 xl:grid-cols-6">
          {links.map((link, index) => (
            <Link className="w-full" key={index} href={link?.href}>
              <Button
                className="border-b-foreground hover:text-primary hover:border-b-primary w-full items-start justify-start rounded-none border-b bg-transparent px-0 uppercase hover:bg-transparent"
                size="lg"
              >
                <span>{link?.text}</span>
              </Button>
            </Link>
          ))}
        </div>
        <div className="grid grid-cols-1 gap-6 md:gap-8 lg:grid-cols-3">
          <div className="flex items-center gap-4">
            ©2025
            <Link
              className="primary underline-effect hover:text-primary"
              href="https://www.cyberbeid.nz"
            >
              CyberBeid.
            </Link>
          </div>
          <div className="flex flex-wrap items-center gap-4 lg:justify-center">
            {socials?.map((social, index) => (
              <Link
                className="primary underline-effect hover:text-primary"
                key={index}
                href={social?.href}
                target={social?.target}
              >
                {social?.text}
              </Link>
            ))}
          </div>
          <div className="flex flex-wrap items-center gap-4 lg:justify-center">
            <Link
              className="primary underline-effect hover:text-primary"
              href="/terms-and-conditions"
            >
              Terms and Conditions
            </Link>
            <Link
              className="primary underline-effect hover:text-primary"
              href="/privacy-policy"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
