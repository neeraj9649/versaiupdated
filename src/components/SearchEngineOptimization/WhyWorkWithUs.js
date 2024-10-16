import React from "react";

const WhyWorkWithUs = () => {
  return (
    <div className="flex flex-col px-2 items-center py-10 bg-gradient-to-br from-gray-100 to-blue-200 min-h-screen">
      <h1 className="lg:text-5xl text-3xl font-bold mb-8">Why work with us?</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl">
        
        {/* First Card */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <div className="flex items-center justify-center mb-4">
            <i className="fas fa-chart-line text-4xl text-pink-500"></i>
          </div>
          <h2 className="text-xl font-semibold mb-2">Experienced and Expert Team</h2>
          <p>We've been serving clients from various industries for over a decade and have completed projects of various sizes and complexities.</p>
        </div>

        {/* Second Card */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <div className="flex items-center justify-center mb-4">
            <i className="fas fa-percentage text-4xl text-blue-500"></i>
          </div>
          <h2 className="text-xl font-semibold mb-2">We understand what Google is looking for</h2>
          <p>Our SEO experts carefully examine your industry and customers before devising a strategy that incorporates the latest marketing trends.</p>
        </div>

        {/* Third Card */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <div className="flex items-center justify-center mb-4">
            <i className="fas fa-sync-alt text-4xl text-green-500"></i>
          </div>
          <h2 className="text-xl font-semibold mb-2">Regular performance updates</h2>
          <p>We create a monthly performance report to track your campaign's progress, identifying the most pressing issues and implementing necessary changes.</p>
        </div>

        {/* Fourth Card */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <div className="flex items-center justify-center mb-4">
            <i className="fas fa-users text-4xl text-red-500"></i>
          </div>
          <h2 className="text-xl font-semibold mb-2">Unmatched customer experience</h2>
          <p>We have completed over 800 successful projects, and our customers keep returning for the cutting-edge solutions we provide.</p>
        </div>

        {/* Fifth Card */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <div className="flex items-center justify-center mb-4">
            <i className="fas fa-handshake text-4xl text-blue-500"></i>
          </div>
          <h2 className="text-xl font-semibold mb-2">Continue as long as you are satisfied</h2>
          <p>You are not obligated to sign long-term contracts with us, and you can cancel or adjust your plan at any time.</p>
        </div>

        {/* Sixth Card */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <div className="flex items-center justify-center mb-4">
            <i className="fas fa-dollar-sign text-4xl text-green-500"></i>
          </div>
          <h2 className="text-xl font-semibold mb-2">Competitive and customized pricing</h2>
          <p>We ensure our clients get the most value for their money, setting fair prices for projects of any size.</p>
        </div>
        
      </div>
    </div>
  );
};

export default WhyWorkWithUs;
