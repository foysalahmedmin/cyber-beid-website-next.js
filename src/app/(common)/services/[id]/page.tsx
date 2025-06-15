import { projects } from "@/assets/data/projects";
import { services } from "@/assets/data/services";
import FollowUpSection from "@/components/sections/FollowUpSection";
import PageHeaderSection from "@/components/sections/PageHeaderSection";
import ProjectsSlideSection from "@/components/sections/ProjectsSlideSection";
import SingleProjectSection from "@/components/sections/SingleProjectSection";
import SplitSection from "@/components/sections/SplitSection";
import SplitStickySection from "@/components/sections/SplitStickySection";

type Props = {
  params: Promise<{ id: string }>;
};
const ServicesDetailsPage = async ({ params }: Props) => {
  const { id } = await params;
  const service = services.find((service) => service._id === id);
  const { title, description, thumbnail, details, points } = service || {};

  return (
    <main>
      <PageHeaderSection
        subtitle="Service"
        title={title}
        description={description}
        image={thumbnail}
      />
      <SplitSection
        subtitle="Details"
        title={details?.title}
        description={details?.description}
        image={details?.thumbnail}
      />
      <SingleProjectSection
        project={projects?.find((project) => project?.sector === service?._id)}
      />
      <SplitStickySection image={points?.thumbnail} contents={points?.list} />
      <ProjectsSlideSection
        title="Explore Similar Projects"
        projects={projects?.filter(
          (project) => project?.sector === service?._id,
        )}
      />
      <FollowUpSection />
    </main>
  );
};

export default ServicesDetailsPage;
