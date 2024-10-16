import React from "react";

const YourComponent = () => {
  return (
    <div className="bg-gray-50">
      <script src="https://cdn.tailwindcss.com"></script>
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col  md:flex-row items-center gap-8 ">
          <div className="relative w-full  md:w-1/2 mb-40 md:mb-32 flex justify-center">
            <div className="absolute top-0 left-0 w-48 h-48 bg-pink-100 rounded-full -z-10"></div>
            <div className="absolute top-0 left-0 w-48 h-48 bg-blue-100 rounded-full opacity-50 -z-20"></div>
            <div className="relative">
              <img
                alt="Group of people having a discussion in an office setting"
                className="rounded-lg shadow-lg mb-4"
                height="300"
                src="https://storage.googleapis.com/a1aa/image/jeZ4QLEd1JzEOKM12qMK5olmKFNLbnrRxz1hUvLiPXeWRfGnA.jpg"
                width="400"
              />
              <img
                alt="Group of people sitting on stairs and smiling"
                className="rounded-lg shadow-lg absolute bottom-0 left-0 transform -translate-x-16  translate-y-44"
                height="200"
                src="https://storage.googleapis.com/a1aa/image/f97FeQecPCSdsJyhr6UCaNYwoRXWNExFfVfB6DOUChquK6bcC.jpg"
                width="300"
              />
            </div>
          </div>
          <div className="w-full md:w-1/2 md:pl-8">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              We Work for
              <span className="text-pink-500"> Your Success</span>
            </h1>
            <p className="text-gray-700 mb-4">
              At <b>Versai Tech Solutions</b>, we specialize in providing
              high-quality web and app solutions tailored to meet the dynamic
              needs of businesses today. We design websites using the latest
              technologies, including React, ensuring fast rendering and a
              seamless user experience. Our focus is on crafting modern websites
              with innovative designs that not only look great but also perform
              efficiently. Whether it's web development or mobile app
              development, we are committed to delivering solutions that drive
              your business toward success.
            </p>
            <p>
              Our team is dedicated to staying ahead of industry trends,
              utilizing cutting-edge tools and best practices to create scalable
              and responsive websites. We believe in delivering solutions that
              not only meet but exceed our clients' expectations. From sleek,
              user-friendly interfaces to robust backend functionality, we
              ensure that every project is a blend of creativity and technology,
              designed to provide optimal performance and growth for your
              business.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YourComponent;
