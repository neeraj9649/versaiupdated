import React from "react";
import Fullteam from "./Fullteam";
import Teamgrid from "./Teamgrid";
import Teamintro from "./Teamintro";
import Whychoose from "./WhyChooseUs";
import client from "./aboutImage/client.png";
import Retention from "./aboutImage/retention.png";
import business from "./aboutImage/buisness.png";
import Support from "./aboutImage/support.png";



// StatisticsCard Component
const StatisticsCard = ({ imgSrc, title, description, alt }) => {
  return (
    <div className="text-center p-6 bg-white shadow-lg rounded-lg transform transition-transform duration-300 hover:scale-105">
      <img alt={alt} className="mx-auto mb-4" src={imgSrc} width="100" height="100" />
      <h3 className="text-xl font-bold text-gray-900">{title}</h3>
      <p className="text-gray-500">{description}</p>
    </div>
  );
};

// HeroSection Component
const HeroSection = () => {
  return (
    <div className="relative">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?fit=crop&w=1920&h=400')",
          opacity: 0.3,
        }}
      ></div>
      <div className="relative z-10 text-center py-20">
        <h2 className="text-xl text-gray-600 font-semibold">ABOUT US</h2>
        <h1 className="text-xl font-bold text-gray-900">
          CONVERT CHALLENGING PROBLEMS into
          <span className="text-pink-600"> DIGITAL SOLUTIONS </span>
        </h1>
      </div>
    </div>
  );
};

// Main App Component
const AboutUsSection = () => {
  return (
    <>
      {/* Head Section */}
      

     
      <section className="font-roboto">
        <HeroSection />
        <div className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <StatisticsCard
                imgSrc={business}
                title="85% Business"
                description="Through Customer Referrals"
                alt="Magnifying glass over a document"
              />
              <StatisticsCard
                imgSrc={client}
                title="95% Client"
                description="Retention Rate"
                alt="Two chat bubbles"
              />
              <StatisticsCard
                imgSrc={Retention}
                title="88% Retention"
                description="Rate of Tech Leads"
                alt="Rocket launching from a computer screen"
              />
              <StatisticsCard
                imgSrc={Support}
                title="24x7"
                description="Support"
                alt="Shield with a checkmark"
              />
            </div>
          </div>
        </div>
      </section>
      <Teamintro />
      <Teamgrid />
      <Whychoose />
      <Fullteam />
    </>
  );
};





export default AboutUsSection;
