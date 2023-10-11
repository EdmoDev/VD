import Image from "next/image";
import clsx from "clsx";

import { Icon } from "@/components/Icon";

import valuesImage from "/public/stock/values.jpg";
import handbookImage from "/public/stock/handbook.jpg";

const features = [
  {
    tagline: "Our vision",
    headline:
      "We believe in building long-term relationships with our clients ",
    text: " We are committed to providing the highest quality of service and ensuring that our clients are satisfied with the results. Our goal is to help you grow your business by providing innovative solutions that will help you reach your goals.",
    image: {
      src: valuesImage,
      alt: "Woman point at computer screen",
    },
    items: [
      {
        label: "Transparency",
        text: "We believe in transparency and honesty. We are committed to providing you with the best possible service.",
        icon: "shieldCheck",
      },
      {
        label: "Solving real problems",
        text: "We believe in building products that solve real problems for real people. We want to help you build a product that will make your life easier and more enjoyable.",
        icon: "bulb",
      },
    ],
  },
  {
    tagline: "Our process",
    headline: "How we work and collaborate with our clients",
    text: "We work with you to understand your business goals and objectives. We then create a plan that will help you achieve those goals. Our team of experts will work closely with you throughout the entire process to ensure that everything is done right the first time around. We want to make sure that you are happy with our work and that we exceed your expectations.",
    image: {
      src: handbookImage,
      alt: "Office workers looking at post-its on wall",
    },
    items: [
      {
        label: "User experience",
        text: " We believe in creating products that are easy to use and understand. We want to make sure that your customers have a great experience when using your product.",
        icon: "user",
      },
      {
        label: "Our Collaboration",
        text: "We believe in working closely with our clients to ensure that we are meeting their needs and expectations. We want to make sure that you are happy with the results and that we exceed your expectations.",
        icon: "phone",
      },
    ],
  },
];

export const FeaturesAlternatingWithIcons = () => {
  return (
    <section className="px-4 pb-10 md:pt-12 md:pb-16 sm:px-6 lg:px-8 bg-dark-950">
      {/* Features container */}
      <div className="w-full max-w-screen-xl mx-auto">
        {features.map((feature, i) => (
          <div
            key={`alternating-feature-with-icons-${i}`}
            className={clsx(
              "max-w-xl mx-auto md:max-w-2xl lg:max-w-none lg:mx-0 lg:grid lg:grid-cols-3 lg:gap-x-16 xl:gap-x-20 2xl:gap-x-24",
              i % 2 === 1 && "mt-24 lg:mt-32"
            )}
          >
            {/* Feature text with icons */}
            <div className={clsx(i % 2 === 1 && "lg:order-2", "col-span-2")}>
              <div className="text-center lg:text-left">
                <p className="inline-flex items-center justify-center px-6 py-2 text-sm font-medium tracking-wide text-white rounded-r-full rounded-tl-full bg-gradient-to-r from-dark-600 to-dark-700">
                  {feature.tagline}
                </p>
                <h2 className="mt-4 text-3xl font-extrabold text-white lg:mt-6 sm:text-4xl md:text-5xl">
                  {feature.headline}
                </h2>
                <p className="mt-4 text-xl lg:mt-6 text-dark-300">
                  {feature.text}
                </p>
                <div className="flex flex-col max-w-xs mx-auto mt-8 space-y-8 sm:mt-10 sm:mx-0 sm:flex-row sm:max-w-none sm:space-x-4 lg:space-x-6 sm:space-y-0">
                  {feature.items.slice(0, 2).map((item, j) => (
                    <div
                      key={`feature-list-with-icon-${j}`}
                      className="flex flex-col items-center lg:items-start"
                    >
                      <div className="flex flex-col items-center sm:flex-row">
                        <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r rounded-2xl shadow-hover-clay from-dark-600 to-dark-700">
                          <Icon
                            name={item.icon}
                            className="w-6 h-6 text-dark-300"
                          />
                        </div>
                        <div className="mt-3 text-xl font-semibold text-white sm:mt-0 sm:ml-3">
                          {item.label}
                        </div>
                      </div>
                      <p className="mt-1 text-lg leading-relaxed sm:mt-3 text-dark-300">
                        {item.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {/* Feature image */}
            <div className="flex items-center col-span-1 mt-10 lg:order-1 lg:mt-0">
              <div className="relative w-full text-center shadow-xl rounded-3xl aspect-w-2 aspect-h-3">
                <Image
                  className="absolute inset-0 object-cover object-center w-full h-full align-middle rounded-3xl"
                  src={feature.image.src}
                  alt={feature.image.alt}
                  fill
                  sizes="(min-width: 1280px) 23.5rem, (min-width: 1024px) 33vw, (min-width: 768px) 42rem, (min-width: 640px) 36rem, calc(100vw - 2rem)"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
