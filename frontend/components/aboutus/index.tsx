import React from "react";
import Image from "next/image";
export default function AboutUs() {
  return (
    <section className="py-44  font-montseraat w-full h-fit ">
      <div className="max-w-screen-xl grid md:grid-cols-2  grid-cols-1 mx-auto px-4 gap-32 text-gray-600 md:px-8">
        <div className="w-full flex-col gap-5 flex justify-start ">
          <div className="w-full flex flex-col gap-5">
            <h1 className="text-3xl font-bold text-primary md:text-4xl">
              Welcome to Unique
            </h1>
            <hr className="w-32 h-1 bg-yellow-400"></hr>
          </div>
          <div className="w-full flex flex-col gap-4 text-lg">
            <p>
              Unique Auditing & Tax Consultancy LLC stands as your premier
              destination for a wide array of comprehensive financial services.
              With a solid foundation built on professionalism, expertise, and a
              deep understanding of financial intricacies, our firm is dedicated
              to delivering exceptional auditing, accounting, taxation, and
              business consultancy services.
            </p>
            <p>
              We take pride in our ability to adapt to the dynamic nature of the
              financial environment, ensuring that you receive the highest
              quality of service and support. At Unique Auditing & Tax
              Consultancy LLC, your financial success and peace of mind are our
              top priorities, and we strive to exceed your expectations at every
              turn.
            </p>
          </div>
        </div>
        <div className="w-full flex justify-end lg:pr-20">
          <div className="size-96 bg-gray-300 ">
            <Image
              src="/aboutus/aboutus.png"
              alt="logo"
              className="w-full h-full object-cover object-center"
              width={2000}
              height={2000}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
