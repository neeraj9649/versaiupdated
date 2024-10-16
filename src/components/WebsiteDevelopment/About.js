import React from "react";
import dotBg from './Images/shape/dot_bg.png'
const About = () => {
  return (
    <section className="about-agency relative overflow-hidden px-4 md:px-8 lg:px-36 py-12 md:py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="flex justify-center">
          <div className="w-full lg:w-2/3 text-center">
            <div className="common-heading">
              <span className=" sm:text-lg font-semibold text-2xl md:text-3xl lg:text-4xl text-[#e6047b]">
                We Are Creative
              </span>
              <h2 className="text-3xl lg:text-5xl lg:text-center font-bold">
                <span className="gradient-text">Website</span> Development
              </h2>
            </div>
          </div>
        </div>
        <div className="mt-3">
          <div className="text-left text-[#736a8e]">
            <p className="mb-4 text-sm sm:text-base md:text-lg">
              <b>Versai Tech Solutions</b> is a leading provider of web and app
              development services. We specialize in creating fast, responsive,
              and visually striking websites using modern technologies like
              React. Our websites are designed to deliver an exceptional user
              experience while ensuring they meet the specific goals of our
              clients.
            </p>
            <p className="mb-4 text-sm sm:text-base md:text-lg">
              We take pride in designing websites that not only look great but
              are also optimized for performance and fast rendering. Our
              approach combines innovation with an understanding of the latest
              design trends, allowing us to deliver cutting-edge solutions for
              every project.
            </p>
            <p className="mb-4 text-sm sm:text-base md:text-lg">
              At <b>Versai Tech Solutions</b>, attention to detail is key. Our
              team ensures every element is tailored to the client’s needs,
              creating flawless results. We believe in precision and quality,
              and the work we've done for our clients speaks for itself.
            </p>
            <p className="mb-4 text-sm sm:text-base md:text-lg">
              Our expert web developers and designers are passionate about
              pushing boundaries and embracing new challenges. From complex
              projects to simple solutions, we approach each task with a focus
              on delivering the best designs and the latest technology to
              provide users with a seamless, modern experience.
            </p>
          </div>
        </div>
      </div>

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover"
        style={{ backgroundImage: `url(${dotBg})` }}
      ></div>
    </section>
  );
};

export default About;
