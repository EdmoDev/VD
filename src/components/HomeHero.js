import Image from "next/image";
import { PrimaryButton } from "@/components/buttons/PrimaryButton";
import { SecondaryButton } from "@/components/buttons/SecondaryButton";
// import heroImage from "/public/stock/hero-home.png";

export const HomeHero = () => {
  return (
    <section className="px-4 pt-2 pb-12 mx-auto max-w-screen-2xl md:pb-16 sm:px-6 lg:px-8">
      <div className="relative shadow-xl rounded-3xl sm:overflow-hidden b">
        <div className="relative max-w-screen-xl px-4 py-16 mx-auto lg:grid lg:grid-cols-2 lg:auto-rows-max lg:gap-x-8 xl:gap-x-12 sm:px-6 sm:py-24 lg:py-32 lg:px-8 items-center">
          <div className="flex flex-col items-center justify-center lg:items-start h-full">
            {" "}
            {/* <-- Adjusted classes here */}
            <p className="z-30 inline-flex items-center justify-center px-6 py-2 text-sm font-medium tracking-wide text-white rounded-r-full rounded-tl-full bg-gradient-to-r from-dark-800 to-dark-900">
              Welcome
            </p>
            <div className="z-30 w-full max-w-lg mx-auto mt-6 text-center lg:text-left lg:max-w-none md:max-w-2xl">
              <h1 className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
                We turn your product vision into a reality
              </h1>
              <p className="mt-6 text-xl text-dark-300">
                Your Digital Innovation Ally. We blend strategic insight with
                exceptional design and development to furnish uniquely modern
                solutions.
              </p>
            </div>
            <div className="z-30 mt-10 sm:flex sm:justify-center lg:justify-start ">
              <PrimaryButton href="/contact">Let's get started</PrimaryButton>
              <SecondaryButton
                className="mt-5 ml-0 sm:ml-4 sm:mt-0 "
                href="/services"
              >
                Learn more
              </SecondaryButton>
            </div>
          </div>
          <div className="flex items-center justify-center h-full">
            <div className="">
              <video
                autoPlay
                loop
                muted
                className="w-full absolute top-9 right-0 lg:translate-x-[25%] scale-100 sm:scale-150 z-10 object-cover h-full"
                src="/stock/BlobB.mp4"
              >
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
