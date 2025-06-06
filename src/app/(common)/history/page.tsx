import PageHeaderSection from "@/components/partials/Sections/PageHeaderSection";

const HistoryPage = () => {
  return (
    <main>
      <PageHeaderSection
        subtitle="History"
        title="A strong foundation"
        description="From the day it all started, we’ve been a company dedicated to asking one question: “Why not?” Our work to anticipate and overcome every challenge has rooted our values and vaulted us to the top of our industry."
      />
      <section className="bg-muted py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-5xl">
            <div className="aspect-square w-full lg:order-1">
              <img
                className="absolute inset-0 mt-auto ml-auto size-full h-2/3 w-1/2 object-cover object-center"
                src="/images/(history-page)/thumbnail-1.png"
                alt="thumbnail-1"
              />
              <img
                className="absolute inset-0 z-10 mt-auto mr-auto size-full h-1/2 w-2/3 object-cover object-center"
                src="/images/(history-page)/thumbnail-2.png"
                alt="thumbnail-2"
              />
            </div>
          </div>
          <div>
            <div className="relative"></div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default HistoryPage;
