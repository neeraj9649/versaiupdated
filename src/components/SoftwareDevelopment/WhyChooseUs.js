import React from "react";
import '@fortawesome/fontawesome-free/css/all.min.css'; // Ensure this is included if you're using npm

const WhyChooseUs = () => {
  return (
    <section className="py-10 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Why <span className="text-pink-500">Choose us?</span>
          </h1>
          <p className="text-lg">
            Our relentless quest to achieve perfection keeps us one step ahead of many other service providers in this niche.
          </p>
        </div>

        <div className="flex flex-wrap justify-center">
          <div className="w-full md:w-1/4 px-4 mb-6">
            <div className="text-center bg-white p-6 shadow-lg rounded-lg hover:scale-105 transition-transform duration-300">
              <div className="text-4xl text-yellow-400 mb-4">
                <i className="fas fa-users"></i>
              </div>
              <h3 className="text-xl font-semibold">Expert Team</h3>
            </div>
          </div>

          <div className="w-full md:w-1/4 px-4 mb-6">
            <div className="text-center bg-white p-6 shadow-lg rounded-lg hover:scale-105 transition-transform duration-300">
              <div className="text-4xl text-green-500 mb-4">
                <i className="fas fa-rocket"></i>
              </div>
              <h3 className="text-xl font-semibold">On Time Delivery</h3>
            </div>
          </div>

          <div className="w-full md:w-1/4 px-4 mb-6">
            <div className="text-center bg-white p-6 shadow-lg rounded-lg hover:scale-105 transition-transform duration-300">
              <div className="text-4xl text-blue-500 mb-4">
                <i className="fas fa-briefcase"></i>
              </div>
              <h3 className="text-xl font-semibold">Cost Effective</h3>
            </div>
          </div>

          <div className="w-full md:w-1/4 px-4 mb-6">
            <div className="text-center bg-white p-6 shadow-lg rounded-lg hover:scale-105 transition-transform duration-300">
              <div className="text-4xl text-pink-500 mb-4">
                <i className="far fa-question-circle"></i>
              </div>
              <h3 className="text-xl font-semibold">24X7 Support</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
