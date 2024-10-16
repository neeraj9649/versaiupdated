import React from "react";
import WhyChooseUs from './WhyChooseUs'
import QuickResponse from "./QuickResponse";
import TopComp from "./Topcomp";

const services = [
  {
      title: "Estore Development",
      description: "Creating an E-store that can serve a large number of customers quickly and easily, while also providing a memorable shopping experience for those customers.",
      icon: "fas fa-shopping-cart"
  },
  {
      title: "Solution for Online Bidding",
      description: "Allowing businesses and customers to participate in a 'Online Auction' to make the platform more user-friendly for both parties.",
      icon: "fas fa-gavel"
  },
  {
      title: "Solutions for Ticket Sales",
      description: "Adding the feature of booking/ticketing and providing solutions to issues related to it, and resolving every issue as quickly as possible, to increase the utility of the platform.",
      icon: "fas fa-ticket-alt"
  },
  {
      title: "Inventory and Warehouses Management",
      description: "The ability to store and manage data with track records through the use of software and applications.",
      icon: "fas fa-warehouse"
  },
  {
      title: "B2C Marketplace",
      description: "In order to enhance and strengthen the relationship between the customer and the business, a tool is used to expedite orders and initiate deliveries.",
      icon: "fas fa-store"
  },
  {
      title: "Solution Providers",
      description: "Assisting e-commerce websites and apps in maintaining their platform's basic architecture without affecting business operations.",
      icon: "fas fa-cogs"
  },
  {
      title: "Complete ERP/CRM systems",
      description: "Enabling platforms to analyze their services from all angles by providing full-cycle ERP/CRM solutions for data collection, management, and interpretation.",
      icon: "fas fa-chart-line"
  },
  {
      title: "Strategic planning for the entire supply chain",
      description: "Provide applications that can track and manage the flow of goods and services from point of origin to point of consumption.",
      icon: "fas fa-project-diagram"
  }
];


const EcommerceWebsiteDevelopment = () => {
  return (
    <div>
      {/* Header Section */}
      <div>
        <TopComp />
      </div>
      <section className="about-agency w-full relative overflow-hidden px-4 md:px-8 lg:px-10 py-12 md:py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="flex justify-center">
            <div className="w-full lg:w-3/4 text-center">
              <div className="common-heading">
                <p className="text-pink-500 text-sm mb-5">WE ARE CREATIVE</p>
                <h2 className="lg:text-5xl text-3xl font-bold">
                  <span className="gradient-text">ECOMMERCE</span> PLATEFORM
                  DEVELOPMENT 
                </h2>
                {/* <h2 className="mb-4 mt-2 text-3xl w-full md:text-4xl lg:text-5xl font-bold">
                  <span className="gradient-text">ECOMMERCE</span>
                  WEBSITE DEVELOPMENT COMPANY
                </h2> */}
              </div>
            </div>
          </div>
          <div className="mt-3 lg:px-36">
            <div className="text-center text-[#736a8e]">
              <p className="text-gray-600 mt-6 leading-relaxed">
                Every manufacturer and retailer can now reach their customers
                thanks to e-commerce. You can grow your company to gigantic
                proportions with the help of this platform. An e-commerce
                development company must be able to understand your needs and
                deliver exactly what you want.
              </p>
              <p className="text-gray-600 mt-4 leading-relaxed">
                With innovative solutions and a focus on promoting your brand,
                Versai Technology can help you succeed in your business goals.
                Our e-commerce websites and applications can help you achieve
                incredible success. We make it easy for you to rise to the top
                of this field.
              </p>
            </div>
          </div>
        </div>

        {/* Background Image */}
      </section>
      <div className="text-center py-16 bg-white text-gray-800">
        {/* Holo Text for "APP DEVELOPMENT" */}
        <h1
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl  font-extrabold text-transparent stroke-1"
          style={{ WebkitTextStroke: "1px #e5e7eb" }}
        >
          ECOMMERCE DEVELOPMENT
        </h1>

        {/* Service Section Title */}
        <div className="text-center  mt-8 lg:px-20 xl:px-60">
          <h2 className="gradient-textt text-3xl font-bold my-5 ">
            Our Services
          </h2>
          <p className="text-lg mb-10 text-gray-500 ">
            Assembling the website with the user in mind, focusing on enhancing
            features and details so that information can be delivered quickly
            and effectively.
          </p>
          <QuickResponse />
        </div>
      </div>
      <div className="container mx-auto py-12 lg:px-20 xl:px-60 text-left px-4">
        <h2 className="text-center text-2xl font-light text-gray-500 mb-2">
          Our Services
        </h2>
        <h1 className="text-center text-4xl font-bold text-blue-900 mb-12">
          Custom eCommerce Solutions
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div key={index} className="flex items-start space-x-4">
              <div className="w-16 h-16 flex items-center justify-center bg-gray-100 rounded-md">
                <i className={`${service.icon} text-3xl text-blue-900`}></i>
              </div>
              <div>
                <h3 className="text-xl font-bold text-blue-900">
                  {service.title}
                </h3>
                <p className="text-blue-900">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <WhyChooseUs />
    </div>
  );
};

export default EcommerceWebsiteDevelopment;





