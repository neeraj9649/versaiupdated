import PropTypes from 'prop-types';  // Importing PropTypes
import poster from "./Images/Appseoo.png";

// App Component
const AppMarkting = () => {
  // Create a reusable Card component
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
        Our app marketing will <span className="text-pink-600">have</span>
      </h1>
      <p className="md:w-[37vw]  lg:w-[38vw] mb-10">
        Our comprehensive approach involves finding the target audience through
        research and streamlining the process with industry approved methods for
        maximizing the outreach of App Marketing. icon
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          {/* Using Card component for each section */}
          <Card
            imgSrc="https://img.icons8.com/ios-filled/50/000000/download.png"
            title="Increased Downloads"
            description="Increasing the amount of downloads ultimately by optimizing the whole process of marketing the app."
          />
          <Card
            imgSrc="https://img.icons8.com/ios-filled/50/000000/star--v1.png"
            title="Improve App Rating"
            description="Obtaining great reviews and highest ratings by working on the feedbacks and overcoming all the imperfections."
          />
          <Card
            imgSrc="https://img.icons8.com/ios-filled/50/000000/google-play.png"
            title="Google Play Store Optimization"
            description="Optimizing Google play store through standard practices and deployment of ASO tricks with astuteness."
          />
          <Card
            imgSrc="https://img.icons8.com/ios-filled/50/000000/megaphone.png"
            title="Advertising and maintaining the interest"
            description="Building a steady propaganda about the app by consistent advertising and focusing on target audiences till the app is a sure success."
          />
          <Card
            imgSrc="https://img.icons8.com/ios-filled/50/000000/feedback.png"
            title="Application Reviews and Rating"
            description="Getting the most positive reviews and ratings by working constantly on the app development and countering glitches."
          />
        </div>
        <div>
          {/* Image and more cards */}
          <img
            src={poster}
            alt="A group of people in a meeting room with a presentation on a screen"
            className="rounded-lg mb-8 md:-mt-32"
          />
          <Card
            imgSrc="https://img.icons8.com/ios-filled/50/000000/apple.png"
            title="Apple Store Optimization"
            description="Optimizing Apple play store with the same effect and generating best results keeping with the sophistication of platform."
          />
          <Card
            imgSrc="https://img.icons8.com/ios-filled/50/000000/edit.png"
            title="Application Content Optimization"
            description="Content optimization as per the platform specifications and projecting the app with brilliance and superiority."
          />
          <Card
            imgSrc="https://img.icons8.com/ios-filled/50/000000/identity-theft.png"
            title="Application Publisher Name"
            description="Maintaining authenticity and also utilizing it as a keyword, since many users search games by the publishers' name as well."
          />
        </div>
      </div>
    </div>
  );
};

export default AppMarkting;
