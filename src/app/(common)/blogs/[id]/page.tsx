import { blogs } from "@/assets/data/blogs";
import { projects } from "@/assets/data/projects";
import FollowUpSection from "@/components/sections/FollowUpSection";
import PageHeaderSection from "@/components/sections/PageHeaderSection";
import ProjectsSlideSection from "@/components/sections/ProjectsSlideSection";

type Props = {
  params: Promise<{ id: string }>;
};
const BlogsDetailsPage = async ({ params }: Props) => {
  const { id } = await params;
  const blog = blogs.find((blog) => blog._id === id);
  const { title, description, thumbnail, details } = blog || {};

  return (
    <main>
      <PageHeaderSection
        subtitle="Blog"
        title={title}
        description={description}
        image={thumbnail}
      />
      <section>
        <div className="container">
          <div className="border-b py-16 md:py-24">
            <div className="prose prose-headings:font-normal dark:prose-invert">
              <article
                className="text-foreground font-outfit"
                dangerouslySetInnerHTML={{ __html: details || "" }}
              />
            </div>
          </div>
        </div>
      </section>
      <ProjectsSlideSection
        title="Explore Similar Projects"
        projects={projects?.filter(
          (project) => project?.sector === blog?.sector,
        )}
      />
      <FollowUpSection />
    </main>
  );
};

export default BlogsDetailsPage;
