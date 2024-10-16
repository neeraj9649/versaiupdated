import React from 'react';
import brandingIcon from './Images/icons/branding.svg';
import developmentIcon from './Images/icons/development.svg';
import appIcon from './Images/icons/app.svg';
import marketingIcon from './Images/icons/marketing.svg';
import dotBg2 from './Images/shape/dot-shape.png'

const Services = () => {
  return (
    <section className="service-section  relative overflow-hidden px-4 sm:px-12 md:px-24 lg:px-36 py-16 sm:py-20 md:py-28 bg-white">
      <div className="container mx-auto z-20">
        {/* Heading */}
        <div className="flex justify-center">
          <div className="lg:w-2/3 text-center">
            <div className="common-heading">
              <span className="text-sm sm:text-base md:text-lg font-semibold uppercase tracking-wider text-pink-600">
                Services We’re Provided
              </span>
              <h2 className="mb-4 text-2xl sm:text-3xl md:text-4xl font-bold">
                Assured promise on web development service
              </h2>
            </div>
          </div>
        </div>

        {/* Service Cards */}
        <div className="mt-8 sm:mt-10  md:mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 justify-center">
          {/* Card 1 */}
          <div className="s-block bg-white z-20 p-4 sm:p-6 py-12 sm:py-14 rounded-lg shadow-md transition-transform hover:scale-105">
            <div className="s-card-icon mb-4">
              <img src={brandingIcon} alt="service" className="w-16 sm:w-20 mx-auto" />
            </div>
            <h4 className="text-lg sm:text-xl font-semibold text-center mb-2 sm:mb-4">
              Sophisticated and the best
            </h4>
            <p className="text-center text-sm sm:text-base text-[#736a8e]">
              We use the latest technology such as HTML 5, CSS3, and CakePHP3.X to develop your website to give it the latest features.
            </p>
          </div>

          {/* Card 2 */}
          <div className="s-block bg-white p-4 z-20 sm:p-6 py-12 sm:py-14 rounded-lg shadow-md transition-transform hover:scale-105">
            <div className="s-card-icon mb-4">
              <img src={developmentIcon} alt="service" className="w-16 sm:w-20 mx-auto" />
            </div>
            <h4 className="text-lg sm:text-xl font-semibold text-center mb-2 sm:mb-4">
              Dedicated Team
            </h4>
            <p className="text-center text-sm sm:text-base text-[#736a8e]">
              A full-time dedicated team of experts along with a project manager will be assigned for timely delivery of your website.
            </p>
          </div>

          {/* Card 3 */}
          <div className="s-block bg-white p-4 sm:p-6 z-20 py-12 sm:py-14 rounded-lg shadow-md transition-transform hover:scale-105">
            <div className="s-card-icon mb-4">
              <img src={appIcon} alt="service" className="w-16 sm:w-20 mx-auto" />
            </div>
            <h4 className="text-lg sm:text-xl font-semibold text-center mb-2 sm:mb-4">
              Avant-garde tools
            </h4>
            <p className="text-center text-sm sm:text-base text-[#736a8e]">
              Our developer team is equipped with avant-garde technology and tools to ensure operational perfection.
            </p>
          </div>

          {/* Card 4 */}
          <div className="s-block bg-white p-4 sm:p-6 z-20 py-12 sm:py-14 rounded-lg shadow-md transition-transform hover:scale-105">
            <div className="s-card-icon mb-4">
              <img src={marketingIcon} alt="service" className="w-16 sm:w-20 mx-auto" />
            </div>
            <h4 className="text-lg sm:text-xl font-semibold text-center mb-2 sm:mb-4">
              Transparent approach
            </h4>
            <p className="text-center text-sm sm:text-base text-[#736a8e]">
              We always value transparency more than anything else. Hence, we go for the upfront open discussion.
            </p>
          </div>

          {/* Card 5 */}
          <div className="s-block bg-white p-4 sm:p-6 z-20 py-12 sm:py-14 rounded-lg shadow-md transition-transform hover:scale-105">
            <div className="s-card-icon mb-4">
              <img src={marketingIcon} alt="service" className="w-16 sm:w-20 mx-auto" />
            </div>
            <h4 className="text-lg sm:text-xl font-semibold text-center mb-2 sm:mb-4">
              24/7 Support
            </h4>
            <p className="text-center text-sm sm:text-base text-[#736a8e]">
              We have devised multi-modal support channels to address your concern and provide the necessary support even at odd hours.
            </p>
          </div>

          {/* Card 6 */}
          <div className="s-block bg-white p-4 sm:p-6 z-20 py-12 sm:py-14 rounded-lg shadow-md transition-transform hover:scale-105">
            <div className="s-card-icon mb-4">
              <img src={marketingIcon} alt="service" className="w-16 sm:w-20 mx-auto" />
            </div>
            <h4 className="text-lg sm:text-xl font-semibold text-center mb-2 sm:mb-4">
              Timely delivery
            </h4>
            <p className="text-center text-sm sm:text-base text-[#736a8e]">
              We value everyone’s time and understand that even a slight delay may cause backlogs. Hence, we never shy away from going the extra mile to deliver what we promise.
            </p>
          </div>
        </div>
      </div>

      {/* Background Shape */}
      <div className="absolute z-10 inset-0 bg-cover bg-center"
      style={{ backgroundImage: `url(${dotBg2})` }}></div>
    </section>
  );
};

export default Services;
