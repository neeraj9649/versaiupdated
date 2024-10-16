
// AppMarkting Component
import PropTypes from 'prop-types';
import poster from "./Images/posterposter.png";

// AppMarkting Component
const PostMarkting = () => {
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
    imgSrc: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  };

  return (
    <div className="max-w-6xl mx-auto p-8 ">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">
        Poster{" "}
        <span className="text-pink-600">Design Optimization Services</span>
      </h1>
      <p className="md:w-[37vw] lg:w-[35vw] mb-10">
        Our poster design optimization services focus on maximizing the impact
        of your designs through strategic layouts, engaging visuals, and clear
        messaging. Let us help you create posters that resonate with your
        audience.
      </p>

      {/* Service Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          {/* Card component for each service */}
          <Card
            imgSrc="https://img.icons8.com/ios/50/000000/design.png"
            title="Visual Design Strategies"
            description="We utilize innovative design strategies to create visually appealing posters that grab attention."
          />
          <Card
            imgSrc="https://img.icons8.com/ios-filled/50/000000/user-group-man-man.png"
            title="Audience-Centric Design"
            description="Our designs are tailored to resonate with your target audience, ensuring higher engagement."
          />
          <Card
            imgSrc="https://img.icons8.com/ios/50/000000/statistics.png"
            title="Performance Analysis"
            description="We analyze design performance to refine strategies and ensure maximum impact."
          />
          <Card
            imgSrc="https://img.icons8.com/ios/50/000000/consultation.png"
            title="Tailored Consultation"
            description="Receive expert consultation to enhance your poster design for specific goals."
          />
        </div>

        {/* Second column with additional cards */}
        <div>
          <img
            src={poster}
            alt="A team designing posters"
            className="rounded-lg shadow-lg mb-8 md:-mt-44 lg:-mt-36 xl:-mt-32"
          />
          <Card
            imgSrc="https://cdn-icons-png.flaticon.com/512/1541/1541945.png"
            title="A/B Design Testing"
            description="Through A/B testing, we determine the most effective design elements for your posters."
          />
          <Card
            imgSrc="https://cdn-icons-png.flaticon.com/512/584/584585.png"
            title="Branding Alignment"
            description="We ensure your posters align with your overall brand identity for consistency."
          />
          <Card
            imgSrc="https://cdn-icons-png.flaticon.com/512/565/565296.png"
            title="Cross-Promotion Strategies"
            description="We develop strategies to cross-promote your posters across various channels."
          />
        </div>
      </div>
    </div>
  );
};

export default PostMarkting;
