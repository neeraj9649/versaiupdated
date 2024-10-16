import React from "react";
import { Link } from "react-router-dom";
import img1 from "./icons/app.svg";
import img2 from "./icons/development.svg";
import img3 from "./icons/ecommerce.svg";
import img4 from "./icons/seo.svg";
import img5 from "./icons/ads.png";
import img6 from "./icons/dig.png";

const ServiceCard = ({ color, icon, title, description, link }) => {
  return (
    <div
      className={`relative w-60 ${color} p-5 h-48 overflow-hidden rounded-lg shadow-lg cursor-pointer group`}
    >
      <div className=" w-20 h-20 transition-transform  duration-500 ease-in-out transform group-hover:scale-0 group-hover:-translate-y-5">
        <img src={icon} alt={title} />
      </div>
      <div className="absolute bottom-20 left-0 right-0 bg-opacity-80 p-4 transition-transform duration-700 ease-in-out transform translate-y-full group-hover:translate-y-20">
        <h3 className="text-xl font-bold mb-4 ">{title}</h3>
        <p className="text-sm opacity-0 group-hover:opacity-100 duration-700">
          {description}
        </p>
        <Link to={link}>
          <button className="text-sm font-bold mt-3 cursor-pointer text-rose-600"
          onClick={() => {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
          >
            Read more &#x27A4;
          </button>
        </Link>
      </div>
    </div>
  );
};

const CustomDevelopmentFeatures = () => {
return (
    <section className="py-12 bg-yellow-50 flex flex-col gap-14" id="myid">
      <div className="flex flex-col items-center gap-6 bg-yellow-50">
        <div className="flex flex-col md:flex-row items-center text-4xl gap-2 uppercase font-bold font-sans text-center">
          <h1 className="text-blue-950">We Transform</h1>
          <h1 className="text-pink-900">Ideas into Solutions</h1>
        </div>

        <div className="text-center w-[70%] flex flex-col gap-4 text-md text-lg ">
          <p>
            At{" "}
            <span className="font-semibold text-green-900">
              Versai Tech Solutions
            </span>
            , we provide exceptional web development services to help your
            business succeed online. Our skilled developers create user-friendly
            websites and robust applications, ensuring an attractive and
            functional online presence tailored to your needs.
          </p>{" "}
          <p>
            We specialize in mobile app development for both Android and iOS
            platforms. With our expertise in the latest technologies, we build
            intuitive apps that engage users and enhance your brand, guiding you
            from concept to launch.
          </p>{" "}
          <p>
            Cross-platform development is crucial for reaching a broader
            audience. At{" "}
            <span className="font-semibold text-green-900">
              Versai Tech Solutions
            </span>
            , we create seamless applications that function across multiple
            platforms, helping you maximize your reach and drive growth in a
            competitive market.
          </p>
        </div>
      </div>
      <div className="m-0 px-4 flex flex-col md:flex-row gap-2 justify-center bg-gradient-to-t from-purple-50 to-yellow-50 py-5">
        <div className="w-full md:w-[35%] flex flex-col gap-4 pl-7 pt-4 pr-4 text-center md:text-left">
          <h2 className="text-red-900 ">Technologies</h2>
          <h1 className="text-4xl font-sans font-bold text-blue-950 mb-6">
            Tech Services We
            <br /> Specialize In
          </h1>
          <p className="text-md">
            At Versai Tech Solutions, we specialize in delivering innovative
            tech services that empower your business. From web development to
            mobile app development and digital marketing, we provide tailored
            solutions that meet your specific needs.
          </p>
        </div>

        <div className="w-full md:w-[60%] flex flex-wrap gap-5 justify-center md:justify-evenly">
          <ServiceCard
            color="bg-sky-100"
            icon={img1}
            title="Mobile Application Development"
            description="Optimize your supply chain operations for efficiency and cost-effectiveness."
            link="/Mobile-Application-Development"
          />
          <ServiceCard
            color="bg-indigo-100"
            icon={img2}
            title="Website Development"
            description="Leverage the power of blockchain technology to build secure and transparent solutions."
            link="/Website-Development"
          />
          <ServiceCard
            color="bg-rose-100"
            icon={img3}
            title="Ecommerce Solutions"
            description="Build decentralized applications that are secure, transparent, and community-driven."
            link="/Ecommerce-Solutions"
          />
          <ServiceCard
            color="bg-green-100"
            icon={img4}
            title="Search Engine Optimization (SEO)"
            description="Optimize your supply chain operations for efficiency and cost-effectiveness."
            link="/Search-Engine-Optimization"
          />
          <ServiceCard
            color="bg-orange-100"
            icon={img5}
            title="Ads (Social Media)"
            description="Leverage the power of blockchain technology to build secure and transparent solutions."
            link="/Search-Engine-Optimization"
          />
          <ServiceCard
            color="bg-purple-100"
            icon={img6}
            title="Digital Marketing"
            description="Build decentralized applications that are secure, transparent, and community-driven."
            link="/Search-Engine-Optimization"
          />
        </div>
      </div>
    </section>
  );
};

export default CustomDevelopmentFeatures;
