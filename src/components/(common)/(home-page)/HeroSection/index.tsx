import { Button } from "@/components/ui/Button";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="dark text-foreground relative flex min-h-[60vh] w-full items-center py-24 xl:min-h-[80vh]"
    >
      <video
        src="/hero.mp4"
        className="absolute inset-0 -z-20 size-full object-cover"
        autoPlay
        muted
        loop
      />
      {/* Gradient overlay for better text readability */}
      <div className="from-background/90 via-background/60 absolute inset-0 -z-10 bg-gradient-to-r to-transparent" />

      <div className="container">
        <div className="max-w-2xl space-y-6 lg:space-y-8">
          <h1 className="text-4xl uppercase lg:text-6xl">
            <span className="border-primary inline-block border-l-2 pl-2 lg:border-l-4 lg:pl-4">
              Transform Your Business
            </span>{" "}
            <br />
            <span className="font-mokoto-glitch mt-6 inline-block">
              Digitally
            </span>
          </h1>

          <p className="max-w-lg lg:text-xl">
            CyberBaid delivers cutting-edge digital solutions - from SEO and
            content creation to custom applications - that drive growth, enhance
            visibility, and future-proof your business.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link href="/services">
              <Button asChild={true} size="lg">
                <span>Our Services</span>
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                className="foreground"
                asChild={true}
                size="lg"
                variant="outline"
              >
                <span>Get Started</span>
              </Button>
            </Link>
          </div>

          <div className="grid max-w-md grid-cols-2 gap-4 pt-6 sm:grid-cols-4 md:max-w-lg md:grid-cols-6">
            {[
              { value: "App", desc: "Development" },
              { value: "Content", desc: "Creation" },
              { value: "Digital", desc: "Marketing" },
              { value: "SEO", desc: "Optimization" },
              { value: "UI/UX", desc: "Design" },
              { value: "Business", desc: "Solutions" },
            ].map((item, index) => (
              <div key={index} className="border-primary border-l-2 pl-3">
                <div className="text-lg font-semibold">{item.value}</div>
                <div className="text-muted-foreground text-sm">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
