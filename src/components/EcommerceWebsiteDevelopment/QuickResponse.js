// App.js
import React from 'react';

const services = [
  {
    title: "Quick to respond (Desktop, Tablet, Mobile)",
    description:
      "Maintaining a stable performance across a wide range of devices and operating systems, as well as ensuring that the website is free of bugs or lag time.",
  },
  {
    title: "eCommerce Apps for Mobile Devices",
    description:
      "Creating mobile apps with the same level of precision and efficiency across all platforms, including Android and iOS, is an important goal.",
  },
  {
    title: "eCommerce Enterprise Development",
    description:
      "Constructing an e-commerce company with a strategy based on providing customers with cutting-edge products and services.",
  },
  {
    title: "Production of CRM Solutions",
    description:
      "CRM platforms or tools that can keep track of communications, complaints, and deliver quickly and accurately are essential.",
  },
  {
    title: "Optimizing E-Commerce Performance",
    description:
      "Several parameters can be tweaked to improve platform performance, and audits can be performed on a regular basis to catch any glitches or latency.",
  },
  {
    title: "eCommerce Customization",
    description:
      "Customizing platforms to meet specific needs and ensuring that they are up to date with any and all modifications results in maximum optimization.",
  },
];

function QuickResponse() {
  return (
    <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {services.map((service, index) => (
        <div key={index} className="bg-white shadow-lg rounded-lg p-6">
          <h3 className="text-xl lg:text-left font-bold text-gray-900 mb-2">
            {service.title}
          </h3>
          <p className="text-gray-600 lg:text-left">{service.description}</p>
        </div>
      ))}
    </div>
  );
}

export default QuickResponse;
