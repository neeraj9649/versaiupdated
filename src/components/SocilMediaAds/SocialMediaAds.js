import AppMarkting from "./AppMarkting.js";
import TopComp from "./Topcomp.js";
import linkedin from "./Images/linkedin.png";
import instagram from "./Images/instring.png";
import youtube from "./Images/youtube.png";
import facebook from "./Images/facebook.png";


function SocialMediaAds() {
  return (
    <div>
      {/* Header Section */}
      <div>
        <TopComp />
      </div>

      {/* Introduction Section */}
      <div className="flex flex-col items-center justify-center min-h-full py-32 p-8 bg-[#fff7f0]">
        <div className="w-full mx-2">
          <h1 className="text-[#1a1a4b] text-center font-bold md:text-5xl text-3xl">
            Maximize Your <span className="text-[#ff4b8b]">Ad Impact</span> with
            Us
          </h1>
        </div>
        <p className="mt-6 text-lg text-center text-[#6b6b83] max-w-4xl">
          In today’s digital world, social media advertising plays a crucial
          role in effectively connecting with your target audience. At{" "}
          <b>Versai Tech Solutions</b>, we specialize in creating
          high-conversion ad campaigns across various platforms, including
          Facebook, Instagram, LinkedIn, and more. Whether your goal is to
          enhance brand awareness, increase website traffic, or drive sales, we
          customize our strategies to deliver measurable results.
        </p>
        <p className="mt-6 text-lg text-center text-[#6b6b83] max-w-4xl">
          Our approach combines creative content, precise audience targeting,
          and data-driven insights to ensure the success of your advertising
          efforts. Allow our team of experts to manage, optimize, and scale your
          ad campaigns for sustained growth and success.
        </p>
      </div>

      {/* Social Media Marketing Services */}
      <div className="flex flex-col bg-[#f5f5f5] h-full justify-center items-center py-20 px-4">
        <h1 className="text-4xl font-bold text-center mb-10">
          Social Media{" "}
          <span className="text-pink-500">Ad Campaign Services</span>
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {/* Facebook Ads */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <img
              src={facebook}
              alt="Facebook ad campaign icons"
              className="mx-auto mb-4 w-24 "
            />
            <h2 className="text-xl font-bold text-center mb-4">
              Facebook Ads Management
            </h2>
            <p className="text-center text-gray-600">
              Leverage the power of Facebook ads to reach your ideal customers.
              We create and manage Facebook ad campaigns designed to maximize
              your ROI, with expert targeting, compelling creatives, and
              thorough performance analysis.
            </p>
          </div>

          {/* Instagram Ads */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <img
              src={instagram}
              alt="Instagram ad campaign icons"
              className="mx-auto mb-4 w-24"
            />
            <h2 className="text-xl font-bold text-center mb-4">
              Instagram Ads Management
            </h2>
            <p className="text-center text-gray-600">
              Our Instagram ad management services help you capture the
              attention of your audience with visually stunning, engaging ads.
              From stories to posts, we ensure your ads are optimized for
              performance.
            </p>
          </div>

          {/* LinkedIn Ads */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <img
              src={linkedin}
              alt="LinkedIn ad campaign icons"
              className="mx-auto mb-4 w-24"
            />
            <h2 className="text-xl font-bold text-center mb-4">
              LinkedIn Ads Management
            </h2>
            <p className="text-center text-gray-600">
              Reach professionals and decision-makers through our LinkedIn ad
              services. We create targeted campaigns that drive leads, increase
              brand awareness, and position your company as a leader in your
              industry.
            </p>
          </div>

          {/* YouTube Ads */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <img
              src={youtube}
              alt="YouTube ad campaign icons"
              className="mx-auto mb-4 w-40"
            />
            <h2 className="text-xl font-bold text-center mb-4">
              YouTube Ads Management
            </h2>
            <p className="text-center text-gray-600">
              Boost your video content with targeted YouTube ad campaigns. From
              pre-roll ads to in-video ads, we ensure your message is seen by
              the right audience, driving engagement and conversions.
            </p>
          </div>
        </div>
      </div>

      {/* Additional Marketing Services */}
      <AppMarkting />
    </div>
  );
}

export default SocialMediaAds;
