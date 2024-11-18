import icon1 from "./Images/Icons/web.png";
import icon2 from "./Images/Icons/andr.png";
import icon3 from "./Images/Icons/ios.png";
import { Link } from "react-router-dom";

const TechIcons = () => {
  return (
    <div className="mt-56 z-10 sm:mt-20">
      <div className="container mx-auto">
        <ul className="flex justify-center align-middle flex-wrap gap-3 overflow-x-auto space-x-2 md:gap-5 md:space-x-4">
          <li key="1" className="flex flex-col items-center">
            <Link
              to="/Website-Development"
              className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 md:w-20 md:h-20 bg-[#F0F4F8] rounded-full border-4 border-white shadow-md hover:border-purple-300 mb-2 md:mb-3"
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              <img src={icon1} alt="icon1" className="w-7 sm:w-9 md:w-11" />
            </Link>
            <p className="text-white text-center text-xs sm:text-sm md:text-base">
              Website <br /> Development
            </p>
          </li>
          <li key="2" className="flex flex-col items-center">
            <Link
              to="/Mobile-Application-Development"
              className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 md:w-20 md:h-20 bg-[#F0F4F8] rounded-full border-4 border-white shadow-md hover:border-purple-300 mb-2 md:mb-3"
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              <img src={icon2} alt="icon2" className="w-7 sm:w-9 md:w-11" />
            </Link>
            <p className="text-white text-center text-xs sm:text-sm md:text-base">
              Android <br /> Development
            </p>
          </li>
          <li key="3" className="flex flex-col items-center">
            <Link
              to="/IOS-Application-Development"
              className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 md:w-20 md:h-20 bg-[#F0F4F8] rounded-full border-4 border-white shadow-md hover:border-purple-300 mb-2 md:mb-3"
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              <img src={icon3} alt="icon3" className="w-7 sm:w-9 md:w-11" />
            </Link>
            <p className="text-white text-center text-xs sm:text-sm md:text-base">
              IOS <br /> Development
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TechIcons;
