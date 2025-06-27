import { services } from "@/assets/data/services";
import { Button } from "@/components/ui/Button";
import { FormControl } from "@/components/ui/FormControl";
import Link from "next/link";

const locations = [
  {
    type: "text",
    text: "Wellington, New Zealand",
  },
  {
    type: "link",
    text: "+64 28 470 0533",
    href: "tel:+64284700533",
  },
  {
    type: "link",
    text: "cyberbeid@gmail.com",
    href: "mailto:cyberbeid@gmail.com",
  },
];
const ContactSection = () => {
  return (
    <section className="py-16">
      <div className="container">
        <div className="flex flex-col gap-8 md:flex-row-reverse md:gap-12">
          <div className="space-y-8 md:flex-1 md:space-y-12">
            <h2 className="text-4xl">Our location </h2>
            <div>
              <strong className="mb-4 block font-medium uppercase">
                New Zealand
              </strong>
              <ul>
                {locations.map((item, index) => (
                  <li className="font-light" key={index}>
                    {item?.type === "link" ? (
                      <Link
                        className="underline-effect primary hover:text-primary"
                        href={item?.href || "#"}
                      >
                        {item?.text}
                      </Link>
                    ) : (
                      <p className="mb-4">{item?.text}</p>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="bg-border hidden md:block md:w-0.5 md:self-stretch" />
          <div className="space-y-8 md:flex-1 md:space-y-12">
            <h2 className="text-4xl">How can we help? </h2>
            <div>
              <form action="">
                <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
                  <label className="w-full space-y-2">
                    <span className="block">Select Inquiry</span>
                    <FormControl as="select">
                      {services?.map((service) => (
                        <option key={service._id} value={service._id}>
                          {service?.title}
                        </option>
                      ))}
                    </FormControl>
                  </label>
                  <label className="w-full space-y-2">
                    <span className="block">Country </span>
                    <FormControl
                      as="input"
                      type="text"
                      placeholder="Country"
                      name="country"
                    />
                  </label>
                  <label className="w-full space-y-2">
                    <span className="block">Region </span>
                    <FormControl
                      as="input"
                      type="text"
                      placeholder="Region"
                      name="region"
                    />
                  </label>
                  <label className="w-full space-y-2">
                    <span className="block">First Name </span>
                    <FormControl
                      as="input"
                      type="text"
                      placeholder="First Name"
                      name="first-name"
                    />
                  </label>
                  <label className="w-full space-y-2">
                    <span className="block">Last Name </span>
                    <FormControl
                      as="input"
                      type="text"
                      placeholder="Last Name"
                      name="last-name"
                    />
                  </label>
                  <label className="w-full space-y-2">
                    <span className="block">Phone Number </span>
                    <FormControl
                      as="input"
                      type="tel"
                      placeholder="Phone Number"
                      name="phone"
                    />
                  </label>
                  <label className="w-full space-y-2">
                    <span className="block">Email Address </span>
                    <FormControl
                      as="input"
                      type="email"
                      placeholder="Email Address"
                      name="email"
                    />
                  </label>
                  <label className="w-full space-y-2 lg:col-span-2">
                    <span className="block">Description </span>
                    <FormControl
                      as="textarea"
                      className="primary h-auto py-2"
                      placeholder="Description"
                      rows={4}
                      name="description"
                    />
                  </label>
                </div>
                <div className="mt-6 md:mt-8">
                  <Button variant="outline" size="lg">
                    <span>SEND</span>
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
