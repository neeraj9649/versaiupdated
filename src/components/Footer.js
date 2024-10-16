import React from "react";
import logo from "./header_section/logo1.png";
import {Link} from "react-router-dom"
import {
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa"; // Import icons

const Footer = () => {
  return (
    <footer className="py-12 bg-gradient-to-r from-purple-100 to-blue-100 text-gray-700">
      <div className="container mx-auto px-4">
        {/* Logo Section */}
        <div className="flex justify-center mb-8">
          <img
            src={logo}
            alt="Versai Tech Solutions Logo"
            className="w-40 h-auto"
          />
        </div>

        {/* Main Content */}
        <div className="flex flex-col md:flex-row justify-between">
          {/* Left Section - Our Vision */}
          <div className="w-full md:w-[400px] mb-8 md:mb-0">
            {" "}
            {/* Fixed width */}
            <h2 className="text-2xl font-bold mb-4 text-center">Our Vision</h2>
            <p className="flex flex-col items-left text-center md:text-left">
              Versai Tech Solutions is a pioneer in providing comprehensive
              services in website development, app development, and digital
              marketing. We understand the ever-growing demands of today’s
              digital landscape and strive to deliver innovative solutions that
              drive sustained growth for enterprises across various industries.
            </p>
          </div>

          {/* Middle Section - Contact Us */}
          <div className="w-full md:w-1/3 mb-8 md:mb-0 flex flex-col items-center  md:ml-8">
            {" "}
            {/* Center items for mobile */}
            <h2 className="text-2xl font-bold mb-4 text-center ">Contact Us</h2>
            <div className="flex flex-col items-start w-full ">
              {" "}
              {/* Added flex-col and items-start */}
              <div className="flex items-center mb-2 gap-2">
                <ion-icon name="call"></ion-icon>
                <span className="font-bold">Contact No: 8107053177</span>
              </div>
              <div className="flex items-center mb-2">
                <FaEnvelope className="mr-2" />
                <span className="font-bold">
                  Email:-{" "}
                  <a
                    href="mailto:info.versaitechsolutions@gmail.com"
                    className="text-blue-500 hover:underline"
                  >
                    Mail us
                  </a>
                </span>
              </div>
              <div className="flex items-center mb-2">
                <FaMapMarkerAlt className="mr-2" />
                <span className="font-bold">Address:</span>
              </div>
              <div className="flex flex-col text-left mb-2">
                {" "}
                {/* Added flex-col for consistent alignment */}
                <p className="mb-1">Ajitgarh, Jhunjhunu Rajasthan,333701</p>
                <p className="font-bold">Jaipur</p>
                <p>Jagalpura,</p>
                <span className="font-bold">Pincode: 303121</span>
              </div>
            </div>
          </div>

          {/* Right Section - Company Info */}
          <div className="w-full md:w-1/6 mb-8 md:mb-0 md:ml-8  ">
            <h2 className="text-2xl font-bold mb-4">Company</h2>
            <ul>
              <Link to="/About-us">
                <li
                  className="mb-2 hover:underline"
                  onClick={() => {
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                >
                  About Us
                </li>
              </Link>
              <li className="mb-2">
                <a
                  href="https://forms.gle/81sunXF6NXQjV3GR8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  Career
                </a>
              </li>
              <Link to="/Contact-us">
                <li
                  className="mb-2 hover:underline"
                  onClick={() => {
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                >
                  Contact Us
                </li>
              </Link>
            </ul>
          </div>

          {/* Right Section - Support Info */}
          <div className="w-full md:w-1/6 md:ml-8">
            <h2 className="text-2xl font-bold mb-4">Support</h2>
            <ul>
              <Link to="/Privacy-policy">
                <li
                  className="mb-2 hover:underline"
                  onClick={() => {
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                >
                  Privacy Policy
                </li>
              </Link>
              <Link to="/Term-and-condition">
                <li
                  className="mb-2 hover:underline"
                  onClick={() => {
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                >
                  Terms and Conditions
                </li>
              </Link>
              <Link to="/Refund">
                <li
                  className="mb-2 hover:underline"
                  onClick={() => {
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                >
                  Cancellation and Refund
                </li>
              </Link>
              <Link to="/Faqs">
                <li
                  className="mb-2 hover:underline"
                  onClick={() => {
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                >
                  FAQ
                </li>
              </Link>
              
            </ul>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="flex justify-center mt-8">
          <a href="#" className="mx-2 text-gray-500 hover:text-gray-700">
            <FaTwitter />
          </a>
          <a href="#" className="mx-2 text-gray-500 hover:text-gray-700">
            <FaInstagram />
          </a>
          <a href="#" className="mx-2 text-gray-500 hover:text-gray-700">
            <FaLinkedin />
          </a>
        </div>

        {/* Footer Bottom - Copyright */}
        <div className="text-center mt-8">
          <p className="text-gray-500">
            &copy; 2024{" "}
            <span className="text-orange-500">Versai Tech Solutions</span> All
            Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
