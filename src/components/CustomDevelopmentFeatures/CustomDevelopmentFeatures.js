import React from "react";
import TopComp from "./Topcomp";

const customDevelopmentFeatures = [
  {
    title: "Tailored Website Development",
    description: "Design and develop a website specifically tailored to your business needs and objectives.",
    icon: "fas fa-pencil-ruler"
  },
  {
    title: "Pre-built Website Templates",
    description: "Choose from a variety of professionally designed templates to kickstart your project with ease.",
    icon: "fas fa-layer-group"
  },
  {
    title: "AI-powered Website Builder",
    description: "Leverage AI technology to generate websites quickly and customize them to suit your branding.",
    icon: "fas fa-robot"
  },
  {
    title: "Flexible Customization",
    description: "Our platform allows full customization of every aspect of your website to ensure it stands out.",
    icon: "fas fa-cogs"
  },
  {
    title: "Responsive Design",
    description: "Create websites that look and perform great on any device, from desktops to smartphones.",
    icon: "fas fa-mobile-alt"
  },
  {
    title: "User-friendly Interface",
    description: "Easy-to-use interface for creating, editing, and managing your website content effortlessly.",
    icon: "fas fa-user-friends"
  }
];

const CustomDevelopment = () => {
  return (
    <div>
      <div>
        <TopComp />
      </div>
      <section className="relative px-4 md:px-8 lg:px-36 py-12 md:py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center">
            <p className="text-pink-500 text-sm">WE ARE CREATIVE</p>
            <h2 className="text-4xl font-bold text-gray-900">
              <span className="gradient-text">Custom</span> Web/App Solutions
            </h2>
            <p className="text-gray-600 mt-4 leading-relaxed">
              Whether you're looking for a fully customized website or a quick
              solution using pre-built templates, our custom development
              services cater to all your needs. Use our AI-powered website
              builder to get started or work with our team to create a
              tailor-made solution.
            </p>
          </div>

          {/* Features Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {customDevelopmentFeatures.map((feature, index) => (
              <div
                key={index}
                className="flex items-start space-x-4 p-6 bg-white shadow-md rounded-lg"
              >
                <div className="w-16 h-16 flex items-center justify-center bg-gray-100 rounded-full">
                  <i className={`${feature.icon} text-3xl text-blue-900`}></i>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-blue-900">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <h3 className="text-2xl font-bold text-gray-900">
              Ready to Create Your Custom Website?
            </h3>
            <p className="text-gray-600 mt-4">
              Get in touch with us to start building your custom solution, or
              try our AI-powered website maker for free.
            </p>
            <div className="mt-6">
              <a
                href="https://wa.me/message/LOCS4FDAU2IYC1"
                target="_blank"
                rel="noopener noreferrer" // Security measure for opening links in a new tab
              >
                <button className="px-8 py-4 bg-blue-600 text-white font-bold rounded-lg shadow-md hover:bg-blue-700">
                  Request Custom Development
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CustomDevelopment;
