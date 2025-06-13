import { blogs } from "@/assets/data/blogs";
import BlogCard from "@/components/cards/BlogCard";
import FollowUpSection from "@/components/partials/Sections/FollowUpSection";
import PageHeaderSection from "@/components/partials/Sections/PageHeaderSection";
import { Description, SectionTitle, Title } from "@/components/ui/SectionTitle";

const BlogsPage = () => {
  return (
    <main>
      <PageHeaderSection
        subtitle="Insights"
        title="Blogs"
        description="Explore thought leadership on digital transformation, emerging technologies, and innovative strategies that drive business growth in the digital age."
      />
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="bg-muted overflow-hidden rounded-xl">
            <div className="group grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
              <div className="bg-muted flex flex-col justify-center space-y-8 self-stretch rounded-xl p-8 md:space-y-12 md:p-12">
                <Title>Navigating the Digital Transformation Journey</Title>
                <Description>
                  In today&rsquo;s rapidly evolving digital landscape,
                  businesses face unprecedented opportunities and challenges.
                  Our insights bridge the gap between cutting-edge technology
                  and practical business implementation. From AI-driven
                  automation to cloud-native architectures, we explore
                  strategies that help enterprises future-proof their
                  operations, enhance customer experiences, and unlock
                  sustainable growth through innovative digital solutions.
                </Description>
              </div>
              <div className="aspect-[5/4] w-full overflow-hidden rounded-xl xl:col-span-2">
                <img
                  className="bg-muted size-full object-cover object-center"
                  src="/images/partials/blog-thumbnail.png"
                  alt="blog thumbnail"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 md:py-24">
        <div className="container">
          <SectionTitle className="mb-16 text-center">
            <Title>Latest Insights & Analysis</Title>
            <Description>
              Explore our expert perspectives on technology trends, digital
              strategy, and innovative solutions
            </Description>
          </SectionTitle>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12 lg:col-span-3">
            {blogs?.map((blog) => <BlogCard key={blog._id} blog={blog} />)}
          </div>
        </div>
      </section>
      <FollowUpSection />
    </main>
  );
};

export default BlogsPage;
