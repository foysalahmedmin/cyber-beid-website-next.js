import { services } from "@/assets/data/services";
import { Button } from "@/components/ui/Button";
import Image from "next/image";
import Link from "next/link";

const data = [
  {
    title: "Our location",
    items: [
      {
        type: "text",
        text: "Wellington, New Zealand",
      },
      {
        type: "link",
        text: "+880 195 060 1811",
        href: "tel:+8801950601811",
      },
      {
        type: "link",
        text: "cyberdocnyc@gmail.com",
        href: "mailto:cyberdocnyc@gmail.com",
      },
    ],
  },
  {
    title: "About",
    items: [
      {
        type: "link",
        text: "Leaderships",
        href: "/leaderships",
      },
      {
        type: "link",
        text: "Services",
        href: "/services",
      },
      {
        type: "link",
        text: "Projects",
        href: "/projects",
      },
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
        text: "Visions",
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
    text: "Leaderships",
    href: "/leaderships",
  },
  {
    type: "link",
    text: "Services",
    href: "/services",
  },
  {
    type: "link",
    text: "Projects",
    href: "/projects",
  },
  // {
  //   type: "link",
  //   text: "Blogs",
  //   href: "/blogs",
  // },
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
    text: "Visions",
    href: "/visions",
  },
];
const socials = [
  {
    text: "Facebook",
    href: "https://www.facebook.com/cyberdocinc",
    target: "_blank",
  },
  {
    text: "Linkedin",
    href: "https://www.linkedin.com/cyberdocinc",
    target: "_blank",
  },
  {
    text: "Instagram",
    href: "https://www.instagram.com/cyberdocinc",
    target: "_blank",
  },
];

const Footer = () => {
  return (
    <footer className="py-16 md:py-24">
      <div className="container space-y-16 md:space-y-24">
        <div className="grid grid-cols-1 gap-6 md:gap-8 lg:grid-cols-3 xl:grid-cols-5">
          <div className="space-y-4 lg:col-span-3 xl:col-span-2 xl:space-y-12">
            <Link
              href="/home"
              className="font-display flex w-full items-center gap-2 text-xl font-medium transition-opacity duration-300 hover:opacity-80"
              aria-label="Home"
            >
              <Image
                src="/logo.svg"
                alt="Logo"
                width={48}
                height={48}
                className="size-12 rounded-lg object-contain object-left"
              />
              <div className="leading-none">
                <h5 className="font-semibold">CyberDoc</h5>
                <span className="text-xs leading-0">Renovation Experts</span>
              </div>
            </Link>
            <div className="flex flex-wrap gap-4">
              <Link target="_blank" href="tel:+8801950601811">
                <Button className="foreground" size="lg">
                  <span>+880 195 060 1811</span>
                </Button>
              </Link>
              <Link href="/contact">
                <Button className="foreground" size="lg">
                  <span>CONTACT US</span>
                </Button>
              </Link>
            </div>
          </div>
          {data?.map((obj, index) => (
            <div key={index}>
              <strong className="mb-4 block font-medium">{obj?.title}</strong>
              {obj?.items?.length > 0 && (
                <ul className="space-y-2">
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
              href="https://cyberdocnyc.com"
            >
              CyberDoc Inc.
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
