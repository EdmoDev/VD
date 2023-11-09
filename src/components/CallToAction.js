"use client";
import { PrimaryButton } from "@/components/buttons/PrimaryButton";
import Spline from "@splinetool/react-spline";
export const CallToAction = () => {
  return (
    <section className="max-w-screen-xl px-4 py-12 mx-auto md:py-40 sm:px-6 lg:px-8">
      {/* CTA card */}
      <div className="relative py-40 bg-gradient-to-b from-black via-transparent rounded-3xl lg:py-50">
        {/* Spline as background */}
        <Spline
          scene="https://prod.spline.design/k9kwkFxKKJMKUaUw/scene.splinecode"
          className="absolute top-0 left-0 w-full h-full z-10"
        />

        {/* CTA content */}
        <div className="relative z-20 flex flex-col items-center justify-center px-4 mx-auto text-center sm:px-16 lg:flex-row lg:text-left">
          <div className="max-w-lg text-2xl font-bold sm:text-4xl lg:w-1/2">
            <h5 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
              Ready to get started?
            </h5>
          </div>
          <div className="flex justify-center max-w-lg mt-10 lg:w-1/2 lg:mt-0 lg:justify-end ">
            <PrimaryButton href="mailto:connect@venidev.com">
              Contact Us
            </PrimaryButton>
          </div>
        </div>
      </div>
    </section>
  );
};
