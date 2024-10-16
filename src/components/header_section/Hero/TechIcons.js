import icon1 from "./Images/Icons/web.png";
import icon2 from "./Images/Icons/andr.png";
import icon3 from "./Images/Icons/ios.png";
import { Link } from "react-router-dom";

const TechIcons = () => {
  return (
    <div className="mt-56 z-10 sm:mt-20">
      <div className="container mx-auto">
        <ul className="flex justify-center align-middle flex-wrap gap-5 overflow-x-auto space-x-4">
          <li key="1">
            <Link
              to="/Website-Development"
              className="flex items-center ms-5 sm:ms-2 justify-center w-14 h-14  md:w-20 md:h-20 bg-[#F0F4F8] rounded-full border-4 border-white shadow-md hover:border-purple-300"
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              <img src={icon1} alt="icon1" className="w-11" />
            </Link>
            <p className="text-white mt-3">
              Website <br /> Development
            </p>
          </li>
          <li key="2">
            <Link
              to="/Mobile-Application-Development"
              className="flex items-center ms-5 sm:ms-2  justify-center w-14 h-14  md:w-20 md:h-20 bg-[#F0F4F8] rounded-full border-4 border-white shadow-md hover:border-purple-300"
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              <img src={icon2} alt="icon2" className="w-11 " />
            </Link>
            <p className="text-white mt-3 ">
              Android <br /> Development
            </p>
          </li>
          <li key="3">
            <Link
              to="/IOS-Application-Development"
              className="flex items-center ms-5 sm:ms-2  justify-center w-14 h-14  md:w-20 md:h-20 bg-[#F0F4F8]  rounded-full border-4 border-white shadow-md hover:border-purple-300"
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              <img src={icon3} alt="icon3" className="w-11" />
            </Link>
            <p className="text-white mt-3 ">
              IOS <br /> Development
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TechIcons;
