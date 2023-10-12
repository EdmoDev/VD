import { Icon } from "@/components/Icon";
import { SecondaryButton } from "@/components/buttons/SecondaryButton";

const services = [
  {
    service: "UI/UX Design ",
    text: " We design for better user experiences, focusing on simplicity, usability and accesabilit with modern design trends ",
    icon: "box",
  },
  {
    service: "Web Development",
    text: " We craft robust and responsive websites that seamlessly operate across devices.",
    icon: "circles",
  },
  {
    service: "Mobile Development",
    text: "We build a performent native and cross-platform mobile apps for iOS and Android devices with ease of use in mind.",
    icon: "circleSquare",
  },

  {
    service: "Branding",
    text: " We create unique and memorable brand identities that communicate your brand’s values and personality.",
    icon: "stack",
  },
  {
    service: "SEO Optimization",
    text: " We optimize your product to ensure it is performing at its best. We use data-driven insights to improve your product and increase conversions.",
    icon: "triangle",
  },
];

export const ServiceList = () => {
  return (
    <section className="px-4 pt-10 pb-10 md:pt-12 md:pb-12 bg-dark-900 sm:px-6 lg:px-8">
      <div className="flex flex-wrap items-center w-full max-w-screen-xl mx-auto">
        <div className="flex flex-wrap w-full">
          {/* Section header with button */}
          <div className="relative flex w-full lg:w-1/3">
            <div className="relative flex w-full">
              <div className="relative flex flex-wrap w-full lg:flex-col">
                <div className="relative w-full">
                  <p className="inline-flex items-center justify-center px-6 py-2 text-sm font-medium tracking-wide text-white rounded-r-full rounded-tl-full bg-gradient-to-r from-dark-600 to-dark-700">
                    Services
                  </p>
                  <h2 className="relative w-full mt-6 text-3xl font-extrabold text-left text-white sm:text-4xl md:text-5xl">
                    Here What <br /> we Do
                  </h2>
                </div>
                <div className="flex mt-8 text-left lg:mt-10">
                  <SecondaryButton
                    size="sm"
                    gradient="from-dark-600 to-dark-700"
                    href="/work"
                  >
                    View work
                  </SecondaryButton>
                </div>
              </div>
            </div>
          </div>
          {/* 2x6 features grid */}
          <div className="relative flex w-full mt-16 lg:w-2/3 lg:pl-8">
            <div className="grid w-full gap-y-10 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-16">
              {services.map((item, index) => (
                <div
                  key={`servi2ce-${index}`}
                  className="relative flex flex-col w-full"
                >
                  <span className="flex items-center justify-center w-16 h-16  bg-gradient-to-r rounded-3xl shadow-inner-clay from-dark-700 to-dark-965">
                    <Icon name={item.icon} className="w-8 h-8 text-dark-300" />
                  </span>
                  <h4 className="mt-4 text-2xl font-semibold text-white">
                    {item.service}
                  </h4>
                  <p className="max-w-sm mt-1 text-lg leading-relaxed text-dark-300">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
