export type TTimeline = {
  _id: number;
  year: string;
  title: string;
  description: string;
  image: string;
};

export const timelines: TTimeline[] = [
  {
    _id: 1,
    year: "1991",
    title: "Abul Kalam embarked on his journey in the construction industry",
    description:
      "Abul Kalam embarked on his journey in the construction industry in New York in 1991 with a clear vision to create enduring structures and contribute meaningfully to the built environment.",
    image: "/images/(history-page)/1.png",
  },
  {
    _id: 3,
    year: "1995",
    title: "Partnering up",
    description:
      "Konstruktion is awarded its first public-private partnership (P3) contract to build 15 schools in Nova Scotia. PCL continues to pursue opportunities to work with government partners through P3 projects in both Canada and the U.S., as one of the most experienced P3 builders in North America.",
    image: "/images/(history-page)/2.png",
  },
  {
    _id: 4,
    year: "2004",
    title: "Leed-ing the way",
    description:
      "Demonstrating a commitment to sustainable construction, Konstruktion completes construction on its first Leadership in Energy and Environmental Design (LEED®) Gold certified project: the Seattle Terminal Radar Approach Facility in Washington.",
    image: "/images/(history-page)/3.png",
  },
  {
    _id: 5,
    year: "2005",
    title: "Winning Workplaces",
    description:
      "Konstruktion is named for the first time as one of USA&rsquo;s Best Managed Companies, which recognizes excellence in USA-owned and USA-managed companies with revenues over $25 million. In 2009, having won seven years in a row, PCL is inducted into the Best Managed Platinum Club.",
    image: "/images/(history-page)/4.png",
  },
  {
    _id: 6,
    year: "2011",
    title: "Power of Solar",
    description:
      "Demonstrating a commitment to renewable energy and sustainability, Konstruktion completes construction on its first solar energy project, the 9.3-megawatt Erie Ridge Solar Electric System in Ridgetown, Ontario.",
    image: "/images/(history-page)/5.png",
  },
  {
    _id: 7,
    year: "2016",
    title: "Gaining Insight",
    description:
      "As part of Konstruktion&rsquo;s commitment to innovation, Konstruktion&rsquo;s Construction launches Job Site Insights®, an Internet of Things (IoT) smart construction platform that uses digital technology to find efficient construction practices, enhance safety and quality, and improve customer satisfaction.",
    image: "/images/(history-page)/6.png",
  },
  {
    _id: 8,
    year: "2019",
    title: "Driving Change",
    description:
      "Konstruktion publishes its first Corporate Social Responsibility report, detailing the company&rsquo;s efforts to lead by example on sustainability and drive change in the construction industry.",
    image: "/images/(history-page)/7.png",
  },
  {
    _id: 2,
    year: "2018",
    title: "Mijanur Rahman, the President & CEO of CyberDoc Inc.",
    description:
      "Mijanur Rahman, the President & CEO of CyberDoc Inc., founded the company in 2018 to build on the foundation laid by his father, Abul Kalam.",
    image: "/images/(history-page)/8.png",
  },
  {
    _id: 9,
    year: "2020",
    title: "Commitment to Safety",
    description:
      "During the COVID-19 pandemic, Konstruktion&rsquo;s dedicated health and safety teams undertook initiatives to keep its workers safe, both on job sites and in offices, over the course of an unimaginable year.",
    image: "/images/(history-page)/9.png",
  },
  {
    _id: 10,
    year: "2021",
    title: "Shining a light on a new way to design and build",
    description:
      "We establish Konstruktion Illuminate, a highly collaborative design-build process that is revolutionizing the real estate development lifecycle—from conceptual design through project turnover.",
    image: "/images/(history-page)/10.png",
  },
  {
    _id: 11,
    year: "2024",
    title: "20 years of redefining what&rsquo;s possible",
    description:
      "Konstruktion marks its 40th anniversary thanks to a steadfast commitment to its core values, a belief in challenging the status quo, and the strongest people in the business.",
    image: "/images/(history-page)/1.png",
  },
].sort((a, b) => parseInt(a.year) - parseInt(b.year));
