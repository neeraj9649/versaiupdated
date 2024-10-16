import PropTypes from 'prop-types';  // Importing PropTypes
import poster from "./Images/socialposter.png";
// AppMarkting Component
const AppMarkting = () => {
  // Reusable Card component
  const Card = ({ imgSrc, title, description }) => (
    <div className="flex items-start mb-8">
      <div className="w-12 h-12 bg-gray-100 flex items-center justify-center rounded-md mr-4">
        <img src={imgSrc} alt={title} className="w-8 h-8" />
      </div>
      <div>
        <h2 className="text-xl font-bold text-gray-900">{title}</h2>
        <p className="text-gray-700 mt-2 text-lg">{description}</p>
      </div>
    </div>
  );

  // Prop types validation
  Card.propTypes = {
    imgSrc: PropTypes.string.isRequired,      // imgSrc should be a string and required
    title: PropTypes.string.isRequired,       // title should be a string and required
    description: PropTypes.string.isRequired, // description should be a string and required
  };

  return (
    <div className="max-w-6xl mx-auto p-8 ">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">
        Social Media{" "}
        <span className="text-pink-600">Ad Optimization Services</span>
      </h1>
      <p className="md:w-[37vw] lg:w-[35vw] mb-10">
        Our social media ad services focus on maximizing your ad performance by
        using cutting-edge techniques in ad creation, targeting, and tracking.
        From Facebook to YouTube, we streamline the process to ensure higher
        conversions and ROI.
      </p>

      {/* Service Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          {/* Card component for each service */}
          <Card
            imgSrc="https://img.icons8.com/color/50/design.png"
            title="Ad Creation & Design"
            description="We design visually compelling ads that resonate with your target audience and capture their attention."
          />
          <Card
            imgSrc="https://img.icons8.com/color/50/target.png"
            title="Audience Targeting"
            description="Using demographic, interest, and behavior targeting, we reach the audience most likely to engage with your brand."
          />
          <Card
            imgSrc="https://img.icons8.com/color/50/combo-chart.png"
            title="Ad Performance Analysis"
            description="We continually monitor ad performance to ensure optimal results, tweaking strategies based on data-driven insights."
          />
          <Card
            imgSrc="https://img.icons8.com/color/50/improvement.png"
            title="Conversion Rate Optimization"
            description="We maximize your ad spend by focusing on strategies that improve click-through rates and conversions."
          />
        </div>

        {/* Second column with additional cards */}
        <div>
          <img
            src={poster}
            alt="A team analyzing ad performance data"
            className="rounded-lg   mb-8 md:-mt-44 lg:-mt-36 xl:-mt-32"
          />
          <Card
            imgSrc="https://cdn-icons-png.flaticon.com/512/2407/2407826.png"
            title="A/B Testing"
            description="Through A/B testing, we determine the best-performing creatives and messaging for higher engagement."
          />
          <Card
            imgSrc="https://cdn-icons-png.flaticon.com/512/1882/1882356.png"
            title="Retargeting Ads"
            description="We implement retargeting strategies to capture lost leads and boost conversions by re-engaging interested users."
          />
          <Card
            imgSrc="https://cdn-icons-png.flaticon.com/512/1006/1006652.png"
            title="Cross-Platform Advertising"
            description="We run ads across multiple platforms, ensuring a cohesive and consistent brand experience for your audience."
          />
        </div>
      </div>
    </div>
  );
};

export default AppMarkting;
