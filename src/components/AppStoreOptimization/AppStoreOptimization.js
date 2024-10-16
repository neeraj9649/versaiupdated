import AppMarkting from "./AppMarkting";
import TopComp from "./Topcomp";
import android from "./Images/andd.png"
import ios from "./Images/ioss.png"


function AppStoreOptimization() {
  return (
    <div>
      {/* Header Section */}
      <div>
        <TopComp />
      </div>

      <div className="flex flex-col items-center justify-center min-h-full py-32 p-8 bg-[#fff7f0]">
        <div className="w-full  mx-2">
          <h1 className="text-[#1a1a4b] text-center font-bold md:text-5xl text-3xl">
            App <span className="text-[#ff4b8b]">Store Optimization </span>
          </h1>
        </div>
        <p className="mt-6 text-lg text-center text-[#6b6b83] max-w-4xl">
          App store optimization (ASO) services are crucial for businesses
          looking to maximize the impact of their app launches on platforms like
          Android. Mobile apps have become one of the most efficient and
          accessible ways to engage with your target audience.
        </p>
        <p className="mt-6 text-lg text-center text-[#6b6b83] max-w-4xl">
          {" "}
          <b>Versai Tech Solutions</b> is a leading mobile app marketing
          company, dedicated to helping apps gain visibility and traction among
          potential users. Our approach goes beyond just using advanced
          methods—we ensure that your mobile app stands out to the right
          audience, backed by expertise and a strategic marketing approach.
        </p>
        <p className="mt-6 text-lg text-center text-[#6b6b83] max-w-4xl">
          {" "}
          We provide exceptional ASO marketing services in India, ensuring that
          your business establishes a strong presence in the market. By
          highlighting your app's unique selling points, we ensure it reaches
          the right audience. With our support, your mobile app will not only
          succeed but also maintain its momentum as long as it's in the
          marketplace.
        </p>
      </div>

      <div className="flex flex-col bg-[#f5f5f5] h-full justify-center items-center py-20 px-4">
        <h1 className="text-4xl font-bold text-center mb-10">
          Mobile App Marketing <span className="text-pink-500">Services</span>
        </h1>
        <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8">
          {/* Android Apps Marketing Card */}
          <div className="bg-white p-6 rounded-lg shadow-lg w-full md:w-80">
            <img
              src={android}
              alt="Android marketing icons surrounding an Android mascot"
              className="mx-auto mb-4"
            />
            <h2 className="text-xl font-bold text-center mb-4">
              Android Apps Marketing
            </h2>
            <p className="text-center text-gray-600">
              We market your app using a strategy designed specifically for the
              dedicated platform. We ensure that the app buzzes beyond the
              target audiences by following the best techniques such as keyword
              optimization, conversion rate optimization, and so on.
            </p>
          </div>

          {/* iOS Apps Marketing Card */}
          <div className="bg-white p-6 rounded-lg shadow-lg w-full md:w-80">
            <img
              src={ios}
              alt="iOS marketing icons surrounding an iPhone"
              className="mx-auto mb-4 w-40"
            />
            <h2 className="text-xl font-bold text-center mb-4">
              iOS Apps Marketing
            </h2>
            <p className="text-center text-gray-600">
              iOS app marketing requires the same expertise and comprehensive
              approach as Android app marketing. The precision of keywords, as
              well as the optimization of all other factors, are critical. This
              is done with a dedicated team along with a project manager to
              monitor the whole process.
            </p>
          </div>
        </div>
      </div>

      <AppMarkting />
    </div>
  );
}

export default AppStoreOptimization;


