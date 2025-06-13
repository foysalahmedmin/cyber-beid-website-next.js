import type { LucideIcon } from "lucide-react";
import { CheckCircle, Leaf, ShieldCheck } from "lucide-react";

export type TPoints = {
  thumbnail: string;
  list: {
    _id: string;
    title: string;
    description: string;
    links?: {
      text?: string;
      url?: string;
    }[];
  }[];
};

export type TValues = {
  _id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  link: string;
};

export const points: TPoints = {
  thumbnail: "/images/(visions)/thumbnail.png",
  list: [
    {
      _id: "vp-1",
      title: "We envision the future of digital transformation",
      description:
        "By combining deep expertise across development, design, and marketing, we help businesses overcome digital challenges, enhance user experience, and unlock measurable growth through scalable, future-ready solutions.",
    },
    {
      _id: "vp-2",
      title: "Driven by Innovation",
      description:
        "We proactively adopt emerging technologies and creative strategies to stay ahead of industry trends. From smart automation to intuitive interfaces, our focus on innovation simplifies complex problems and delivers impactful results.",
    },
    {
      _id: "vp-3",
      title: "Adaptive & Strategic",
      description:
        "Every business is unique. We tailor digital solutions that align with your goals—whether it's building custom systems, boosting online visibility, or streamlining operations—by assembling the right experts to create the right strategy.",
    },
    {
      _id: "vp-4",
      title: "Client-Centric Approach",
      description:
        "We prioritize your goals by fostering transparent communication, collaborative planning, and result-driven execution. Our solutions are built around your success, not just project delivery.",
    },
    {
      _id: "vp-5",
      title: "End-to-End Solutions",
      description:
        "From ideation and design to deployment and optimization, we offer full-cycle services that ensure a seamless and efficient digital journey for businesses of all sizes.",
    },
    {
      _id: "vp-6",
      title: "Scalable & Secure Systems",
      description:
        "Whether you're launching a startup or upgrading enterprise infrastructure, our robust development practices ensure your systems are secure, scalable, and performance-optimized from day one.",
    },
  ],
};

export const values: TValues[] = [
  {
    _id: "safety",
    title: "Safety",
    description:
      "We prioritize the security and reliability of all our digital solutions, ensuring your data and systems remain protected at every stage of development and deployment.",
    icon: ShieldCheck,
    link: "/projects/",
  },
  {
    _id: "sustainability",
    title: "Sustainability",
    description:
      "Our approach integrates sustainable technology practices that minimize environmental impact while maximizing efficiency and long-term value for your business.",
    icon: Leaf,
    link: "/projects/",
  },
  {
    _id: "quality",
    title: "Quality",
    description:
      "We commit to delivering high-quality digital products and services by following industry best practices, rigorous testing, and continuous improvement to exceed client expectations.",
    icon: CheckCircle,
    link: "/projects/",
  },
];
