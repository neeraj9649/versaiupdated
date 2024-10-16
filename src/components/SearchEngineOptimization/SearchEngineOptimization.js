import React from "react";
import WhyWorkWithUs from "./WhyWorkWithUs";
import TopComp from "./Topcomp";
import poster from "./Images/seopage.png"

function SearchEngineOptimization() {
  return (
    <div>
      {/* Header Section */}
      <div>
        <TopComp />
      </div>

      {/* SEO Section */}
      <div className="flex justify-center px-2 py-12">
        <div className="w-full lg:w-2/3 text-center">
          <div className="common-heading">
            <h2 className="text-5xl font-bold mt-10">
              Search <span className="gradient-text">Engine</span> Optimization
            </h2>
          </div>
          <p className="mt-6 text-gray-700 text-lg">
            <p>
              <b>Search Engine Optimization (SEO):</b> Our SEO services are
              designed to help you connect with your target audience and improve
              your website’s ranking on search engines. Our SEO specialists work
              to ensure your brand appears prominently in search engine results,
              driving more leads and sales for your business.
            </p>
            <p>
              Over the years,<b>Versai Tech Solutions</b> has crafted a proven,
              results-driven SEO strategy that has boosted the online visibility
              of clients worldwide. We focus exclusively on ethical, White Hat
              SEO practices, which guarantee long-term, sustainable rankings. We
              strongly oppose any use of Black Hat SEO techniques.
            </p>
            <p>
              We understand that selecting the right SEO partner to grow your
              business can be challenging. That’s why we confidently position
              Versai Tech Solutions as a top choice for SEO services in India
              and Dubai. Whether you're a startup or an established business,
              we're here to support your growth through effective SEO
              strategies.
            </p>
          </p>

          
        </div>
      </div>

      <div className="max-w-6xl mx-auto p-8 bg-gray-50">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Why Is{" "}
          <span className="text-pink-600">
            SEO Essential for Growing Businesses?
          </span>
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <div className="flex items-start mb-8 mt-8">
              <div className="w-12 h-12 bg-gray-100 flex items-center justify-center rounded-md mr-4">
                <i className="fas fa-chart-line text-2xl text-gray-700"></i>
              </div>
              <div>
                <h2 className="text-xl font-bold text-gray-900">
                  Boost your search engine ranking
                </h2>
                <p className="text-gray-700 mt-2 text-lg">
                  SEO optimizes the pages of your website as per the search
                  preferences of visiting traffic. It also helps in increasing
                  your site's domain authority while achieving top ranking in
                  organic search results.
                </p>
              </div>
            </div>
            <div className="flex items-start mb-8">
              <div className="w-12 h-12 bg-gray-100 flex items-center justify-center rounded-md mr-4">
                <i className="fas fa-user-friends text-2xl text-gray-700"></i>
              </div>
              <div>
                <h2 className="text-xl font-bold text-gray-900">
                  Improved user experience
                </h2>
                <p className="text-gray-700 mt-2 text-lg">
                  Mobile-friendly designs and responsive web pages improve the
                  user experience, which helps your website rank well in search
                  engines.
                </p>
              </div>
            </div>
            <div className="flex items-start mb-8">
              <div className="w-12 h-12 bg-gray-100 flex items-center justify-center rounded-md mr-4">
                <i className="fas fa-handshake text-2xl text-gray-700"></i>
              </div>
              <div>
                <h2 className="text-xl font-bold text-gray-900">
                  Boost your credibility
                </h2>
                <p className="text-gray-700 mt-2 text-lg">
                  SEO helps to highlight your site at the top of search results,
                  thus making you appear trustworthy, and buyers prefer to visit
                  trusted websites.
                </p>
              </div>
            </div>
          </div>
          <div>
            <img
              src={poster}
              alt="A group of people in a modern office setting, discussing and presenting ideas"
              className="rounded-lg shadow-lg mb-8"
            />
            <div className="flex items-start">
              <div className="w-12 h-12 bg-gray-100 flex items-center justify-center rounded-md mr-4">
                <i className="fas fa-search text-2xl text-gray-700"></i>
              </div>
              <div>
                <h2 className="text-xl font-bold text-gray-900">
                  Strategizing what works and what not
                </h2>
                <p className="text-gray-700 mt-2">
                  SEO can track customers' keywords and their search patterns.
                  This data is helpful to customize the content and offerings to
                  match the customers' needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <WhyWorkWithUs />
    </div>
  );
}

export default SearchEngineOptimization;
