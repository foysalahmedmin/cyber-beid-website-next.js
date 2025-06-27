import FollowUpSection from "@/components/sections/FollowUpSection";
import LeadershipsSlideSection from "@/components/sections/LeadershipsSlideSection";
import PageHeaderSection from "@/components/sections/PageHeaderSection";
import SplitSection from "@/components/sections/SplitSection";

const metrics = [
  {
    title: "50+",
    description: "Projects done",
  },
  {
    title: "0.5+",
    description: "Years of experience",
  },
  {
    title: "10+",
    description: "Team members",
  },
];

const LeadershipsPage = () => {
  return (
    <main>
      <PageHeaderSection
        subtitle="Leaderships"
        title="The champions of a construction revolution"
        description="Mercy's leaders come from all walks of life and business. What they share: a persistent drive to explore and change the way the world builds. Meet the people who lead our quest for better."
        image="https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&auto=format&fit=crop&w=12000&q=80"
        metrics={metrics}
      />
      <SplitSection
        className="bg-muted"
        title="Foysal Ahmed"
        description={
          <div className="text-xl">
            Chief People Officer
            <br /> <br />
            Abul Kalam embarked on his journey in the construction industry in
            New York in 1991 with a clear vision to create enduring structures
            and contribute meaningfully to the built environment. From humble
            beginnings, he worked diligently to establish himself as a leading
            figure in the field, gaining the trust and respect of clients,
            collaborators, and the wider community. His work was characterized
            by an unwavering dedication to quality, meticulous attention to
            detail, and a commitment to exceeding expectations.
          </div>
        }
        image="/images/leaderships/foysalahmedmin.png"
        links={[
          {
            text: "Read More",
            url: "/leaderships/foysalahmedmin",
          },
        ]}
      />
      <LeadershipsSlideSection title="Our leaderships" />
      <FollowUpSection />
    </main>
  );
};

export default LeadershipsPage;
