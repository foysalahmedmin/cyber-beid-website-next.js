import FollowUpSection from "@/components/sections/FollowUpSection";
import PageHeaderSection from "@/components/sections/PageHeaderSection";
import SplitSection from "@/components/sections/SplitSection";

const metrics = [
  {
    title: "50+",
    description: "Digital solutions delivered",
  },
  {
    title: "0.5+",
    description: "Years of tech innovation",
  },
  {
    title: "10+",
    description: "Digital experts",
  },
];

const AboutPage = () => {
  return (
    <main>
      <PageHeaderSection
        subtitle="Leadership"
        title="Architects of the Digital Revolution"
        description="CyberBaid's leadership team combines decades of technology expertise with visionary digital strategy. From Silicon Valley veterans to creative pioneers, our leaders are united by a common mission: to transform businesses through cutting-edge digital solutions. Meet the minds powering our clients' digital evolution."
        image="https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&auto=format&fit=crop&w=12000&q=80"
        metrics={metrics}
      />

      <SplitSection
        className="bg-muted"
        title="Our Digital Philosophy"
        description={`<div class"space-y-4">
            <p>
              At CyberBaid, we believe technology should serve human potential.
              Our approach combines technical excellence with deep market
              understanding to create digital solutions that:
            </p>
            <ul class="list-disc space-y-2 pl-6">
              <li>
                Solve real business challenges through data-driven insights
              </li>
              <li>
                Seamlessly integrate with existing operations and workflows
              </li>
              <li>Anticipate market shifts with future-proof architectures</li>
              <li>Deliver measurable ROI through performance optimization</li>
            </ul>
            <p>
              From startups to enterprises, we empower organizations to harness
              digital transformation as a competitive advantage rather than just
              an operational requirement.
            </p>
          </div>`}
        image="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&fit=crop"
        links={[
          {
            text: "Meet Our Team",
            url: "/team",
          },
          {
            text: "Our Process",
            url: "/process",
          },
        ]}
      />

      <SplitSection
        title="The CyberBaid Difference"
        description={
          <div className="space-y-4">
            <p>What sets us apart in the crowded digital landscape:</p>
            <div className="grid gap-4">
              <div>
                <h3 className="font-semibold">Full-Stack Expertise</h3>
                <p>
                  From UI/UX to backend systems, we cover the entire digital
                  spectrum
                </p>
              </div>
              <div>
                <h3 className="font-semibold">Agile Innovation</h3>
                <p>
                  Rapid prototyping and iterative development for
                  market-responsive solutions
                </p>
              </div>
              <div>
                <h3 className="font-semibold">Results-Obsessed</h3>
                <p>We measure success by your KPIs, not just deliverables</p>
              </div>
            </div>
          </div>
        }
        image="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80"
        links={[
          {
            text: "Explore Services",
            url: "/services",
          },
          {
            text: "Contact Us",
            url: "/contact",
          },
        ]}
      />

      <FollowUpSection />
    </main>
  );
};

export default AboutPage;
