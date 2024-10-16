import TopComp from "./Topcomp.js";
import PostMarkting from "./PostMarkting.js";
import education from "./Images/edu.png";
import event from "./Images/event.png";
import promotion from "./Images/promo.png";
import custom from "./Images/custompo.png";
function PosterDesign() {
  return (
    <div>
      {/* Header Section */}
      <div>
        <TopComp />
      </div>

      {/* Introduction Section */}
      <div className="flex flex-col items-center justify-center min-h-full py-32 p-8 bg-[#f8f9fa]">
        <div className="w-full mx-2">
          <h1 className="text-[#1a1a4b] text-center font-bold md:text-5xl text-3xl">
            Enhance Your{" "}
            <span className="text-[#ff4b8b]">Brand Visibility</span> with Us
          </h1>
        </div>
        <p className="mt-6 text-lg text-center text-[#4b5563] max-w-4xl">
          Posters serve as an impactful way to convey your message effectively.
          Our team excels in designing eye-catching posters that engage your
          target audience, whether for events, promotions, or branding
          initiatives.
        </p>
        <p className="mt-6 text-lg text-center text-[#4b5563] max-w-4xl">
          At <b>Versai Tech Solutions</b>, we combine creativity with strategic
          thinking to craft posters that truly stand out, ensuring your brand
          captures attention and leaves a memorable impression. Let us help you
          create something extraordinary!
        </p>
      </div>

      {/* Poster Design Services */}
      <div className="flex flex-col bg-[#e9ecef] h-full justify-center items-center py-20 px-4">
        <h1 className="text-4xl font-bold text-center mb-10">
          Our Creative{" "}
          <span className="text-pink-500">Poster Design Services</span>
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {/* Event Posters */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <img
              src={event}
              alt="Event Poster Design"
              className="mx-auto mb-4 w-24"
            />
            <h2 className="text-xl font-bold text-center mb-4">
              Event Poster Design
            </h2>
            <p className="text-center text-gray-600">
              Capture attention for your events with custom-designed posters
              that convey excitement and engagement.
            </p>
          </div>

          {/* Promotional Posters */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <img
              src={promotion}
              alt="Promotional Poster Design"
              className="mx-auto mb-4 w-24"
            />
            <h2 className="text-xl font-bold text-center mb-4">
              Promotional Posters
            </h2>
            <p className="text-center text-gray-600">
              Promote your products or services effectively with eye-catching
              promotional posters designed to drive sales.
            </p>
          </div>

          {/* Educational Posters */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <img
              src={education}
              alt="Educational Poster Design"
              className="mx-auto mb-4 w-24"
            />
            <h2 className="text-xl font-bold text-center mb-4">
              Educational Posters
            </h2>
            <p className="text-center text-gray-600">
              Convey information clearly and attractively with our educational
              poster designs that engage and inform.
            </p>
          </div>

          {/* Custom Posters */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <img
              src={custom}
              alt="Custom Poster Design"
              className="mx-auto mb-4 w-24"
            />
            <h2 className="text-xl font-bold text-center mb-4">
              Custom Poster Design
            </h2>
            <p className="text-center text-gray-600">
              Get personalized posters designed to reflect your brand’s unique
              identity and message.
            </p>
          </div>
        </div>
      </div>

      {/* Additional Marketing Services */}
      <PostMarkting />
    </div>
  );
}

export default PosterDesign;
