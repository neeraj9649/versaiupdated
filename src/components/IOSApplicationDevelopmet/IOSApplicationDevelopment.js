import React from "react";
import swift from "./Images/swift.png"
import ioss from "./Images/ioss.png"
import xcode from "./Images/xcode.png"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRocket,
  faUsers,
  faMobileAlt,
  faDesktop,
  faGlobe,
  faSmile,
} from "@fortawesome/free-solid-svg-icons";
import IndustriesWeServe from "./IndustriesWeServe";
import TopComp from "./Topcomp";
function IOSApplicationDevelopment() {
  return (
    <div className="flex flex-col gap-16 ">
      {/* Header Section */}
      <div>
        <TopComp />
      </div>
      <div className="p-8 w-full flex flex-col lg:flex-row ">
        <div className="container  lg:mx-11 lg:w-1/2 w-full">
          <div className="flex lg:justify-start justify-center">
            <div className="w-full lg:w-2/3">
              <div className="common-heading">
                <h2 className="text-4xl lg:text-6xl lg:text-left font-bold">
                  <span className="gradient-text">IOS Application</span>
                  <br />
                  Development
                </h2>
              </div>
            </div>
          </div>
          <div className="mt-3 lg:px-0  ">
            <div className="lg:text-left text text-[#736a8e]">
              <p className="text-gray-600 mt-6 leading-relaxed">
                {" "}
                At Versai Tech Solutions, we specialize in iOS app development.
                Our services are designed to create apps that are user-friendly
                and responsive, ensuring a smooth experience for every user.{" "}
              </p>{" "}
              <p className="text-gray-600 mt-4 leading-relaxed">
                {" "}
                Many apps receive negative reviews due to poor design or
                functionality. With the rise of smartphones, iOS apps have
                become an essential part of our daily lives.{" "}
              </p>
            </div>
          </div>
        </div>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-blue-100 p-6 rounded-lg shadow-md">
            <FontAwesomeIcon
              icon={faRocket}
              className="text-4xl text-blue-500"
            />
            <h2 className="mt-4 text-2xl font-bold text-gray-900">1+</h2>
            <p className="text-gray-600">Years Experience</p>
          </div>
          <div className="bg-orange-100 p-6 rounded-lg shadow-md">
            <FontAwesomeIcon
              icon={faUsers}
              className="text-4xl text-orange-500"
            />
            <h2 className="mt-4 text-2xl font-bold text-gray-900">20+</h2>
            <p className="text-gray-600">Talented Squad</p>
          </div>
          <div className="bg-purple-100 p-6 rounded-lg shadow-md">
            <FontAwesomeIcon
              icon={faMobileAlt}
              className="text-4xl text-purple-500"
            />
            <h2 className="mt-4 text-2xl font-bold text-gray-900">10+</h2>
            <p className="text-gray-600">Apps Developed</p>
          </div>
          <div className="bg-blue-100 p-6 rounded-lg shadow-md">
            <FontAwesomeIcon
              icon={faDesktop}
              className="text-4xl text-blue-500"
            />
            <h2 className="mt-4 text-2xl font-bold text-gray-900">50%</h2>
            <p className="text-gray-600">Projects Delivered</p>
          </div>
          <div className="bg-yellow-100 p-6 rounded-lg shadow-md">
            <FontAwesomeIcon
              icon={faGlobe}
              className="text-4xl text-yellow-500"
            />
            <h2 className="mt-4 text-2xl font-bold text-gray-900">5+</h2>
            <p className="text-gray-600">Countries Served</p>
          </div>
          <div className="bg-blue-100 p-6 rounded-lg shadow-md">
            <FontAwesomeIcon
              icon={faSmile}
              className="text-4xl text-blue-500"
            />
            <h2 className="mt-4 text-2xl font-bold text-gray-900">100%</h2>
            <p className="text-gray-600">Client Satisfaction</p>
          </div>
        </div>
      </div>

      <div className="text-center bg-white text-gray-800">
        {/* Holo Text for "APP DEVELOPMENT" */}
        <h1
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl  font-extrabold text-transparent stroke-1"
          style={{ WebkitTextStroke: "1px #e5e7eb" }}
        >
          IOS APP DEVELOPMENT
        </h1>

        {/* Service Section Title */}
        <h2 className="gradient-textt text-3xl mx-2 font-bold mt-4">
          Our Services
        </h2>
        <p className="text-lg text-gray-500 mt-2 mx-2">
          Mobile apps which can work on all the platforms with functionality to
          meet the user's expectation without a trace of glitch.
        </p>
        <div className="mt-12 mx-2 lg:mx-36 grid md:grid-rows-1 md:grid-cols-3 grid-cols-1 grid-rows-3 ">
          {/* iOS App Development */}
          <div className="bg-white shadow-lg rounded-lg p-6 max-w-full sm:max-w-sm mx-auto border-4 border-gray-200 transition-transform transform hover:scale-105">
            <div className="flex items-center mb-4">
              <img src={ioss} alt="iOS logo" className="w-10 h-10" />
              <h3 className="text-xl font-bold text-gray-900 ml-4">
                iOS App Development
              </h3>
            </div>
            <p className="text-gray-600">
              At <b>Versai Tech Solutions</b>, we specialize in iOS app
              development using Swift and Objective-C. Our team focuses on
              creating visually stunning and user-friendly apps that perform
              seamlessly on all iOS devices. From initial design to App Store
              launch, we ensure your app is optimized for speed and efficiency.
            </p>
          </div>

          {/* SwiftUI Development */}
          <div className="bg-white shadow-lg rounded-lg p-6 max-w-full sm:max-w-sm mx-auto border-4 border-gray-200 transition-transform transform hover:scale-105">
            <div className="flex items-center mb-4">
              <img src={swift} alt="SwiftUI logo" className="w-10 h-10" />
              <h3 className="text-xl font-bold text-gray-900 ml-4">
                SwiftUI Development
              </h3>
            </div>
            <p className="text-gray-600">
              Using SwiftUI, we create modern and interactive user interfaces
              that enhance the user experience. SwiftUI allows for rapid
              development and a clean codebase, ensuring your app looks great on
              all iOS devices while maintaining top performance.
            </p>
          </div>

          {/* Xcode Development */}
          <div className="bg-white shadow-lg rounded-lg p-6 max-w-full sm:max-w-sm mx-auto border-4 border-gray-200 transition-transform transform hover:scale-105">
            <div className="flex items-center mb-4">
              <img src={xcode} alt="Xcode logo" className="w-10 h-10" />
              <h3 className="text-xl font-bold text-gray-900 ml-4">
                Xcode Development
              </h3>
            </div>
            <p className="text-gray-600">
              We use Xcode, Apple's integrated development environment (IDE), to
              build robust and feature-rich iOS applications. With Xcode, we can
              streamline the development process, test apps efficiently, and
              ensure compatibility across all iOS devices.
            </p>
          </div>
        </div>
      </div>

      <IndustriesWeServe />
    </div>
  );
}
export default IOSApplicationDevelopment;
