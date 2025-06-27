import { faqs } from "@/assets/data/faqs";
import { services } from "@/assets/data/services";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/Accordion";
import { Button } from "@/components/ui/Button";
import { FormControl } from "@/components/ui/FormControl";
import { Description, SectionTitle, Title } from "@/components/ui/SectionTitle";

const FAQSection = () => {
  return (
    <section id="faq" className="bg-muted intersection-fade-up py-16 md:py-24">
      <div className="container">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12">
          <div className="space-y-6">
            <SectionTitle>
              <Title>Frequently asked questions</Title>
              <Description>
                These sets of questionnaires and answers by experts can help get
                a better understanding of our general remodeling services,
                timeline & process.
              </Description>
            </SectionTitle>
            <div>
              <Accordion type="single" collapsible className="w-full">
                {faqs?.map((faq) => (
                  <AccordionItem key={faq._id} value={faq._id}>
                    <AccordionTrigger value={faq._id}>
                      <span className="text-xl">{faq?.question}</span>
                    </AccordionTrigger>
                    <AccordionContent value={faq._id}>
                      <div className="prose prose-headings:font-normal dark:prose-invert">
                        <article
                          className="text-foreground"
                          dangerouslySetInnerHTML={{ __html: faq.answer }}
                        />
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
          <div className="bg-card flex flex-col justify-center rounded-xl md:h-[53rem]">
            <div className="space-y-6 p-12">
              <h3 className="text-3xl">Schedule Free Consultation</h3>
              <form className="space-y-4" action="">
                <label className="block w-full space-y-2">
                  <span className="inline-block">Your name</span>
                  <FormControl as="input" placeholder="You name" type="text" />
                </label>
                <label className="block w-full space-y-2">
                  <span className="inline-block">Email address</span>
                  <FormControl
                    as="input"
                    placeholder="Email address"
                    type="email"
                  />
                </label>
                <label className="block w-full space-y-2">
                  <span className="inline-block">Phone number</span>
                  <FormControl
                    as="input"
                    placeholder="Phone number"
                    type="tel"
                    pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                  />
                </label>
                <label className="block w-full space-y-2">
                  <span className="inline-block">
                    What are you looking for?
                  </span>
                  <FormControl as="select" size="lg">
                    <option value="">Select</option>
                    {services?.map((service) => (
                      <option key={service._id} value={service._id}>
                        {service?.title}
                      </option>
                    ))}
                  </FormControl>
                </label>
                <label className="block w-full space-y-2">
                  <span className="inline-block">Your message</span>
                  <FormControl
                    className="primary h-auto py-2"
                    as="textarea"
                    rows={4}
                    placeholder="Your message"
                  />
                </label>
                <Button className="flex w-full" size="lg">
                  <span className="uppercase">get your free quote</span>
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
