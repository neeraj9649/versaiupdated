import React from "react";
import neeraj from "./Teamimage/neeraj.jpg";
import bhawani from "./Teamimage/bhawani.png";
import lalit from "./Teamimage/lalit.png";
import prashant from "./Teamimage/prashant.jpeg";
import rakshit from "./Teamimage/rakshit.jpg";
import deepak from "./Teamimage/deepak.jpg";
import shubham from "./Teamimage/shubham.jpeg";
import namisha from "./Teamimage/namisha.jpg";
import mukesh from "./Teamimage/muks.png";
import sujith from "./Teamimage/sujith.jpeg";
import poonam from "./Teamimage/poonam.jpg"
import bhavik from "./Teamimage/bhavik.png"
const TeamGrid = () => {
  return (
    <div className="bg-white flex justify-center items-center min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
        <div className="bg-white shadow-md rounded-lg p-6 text-center border border-gray-200 transform transition duration-500 hover:scale-105 hover:shadow-lg">
          <img
            alt="Portrait of a man in a blue shirt"
            className="w-[300px] h-[320px] object-cover rounded-t-lg"
            src={neeraj}
            width="300"
            height="300"
          />
          <h2 className="text-xl font-bold text-gray-800 mt-4">Neeraj Verma</h2>
          <p className="text-gray-600">Founder & CEO</p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6 text-center border border-gray-200 transform transition duration-500 hover:scale-105 hover:shadow-lg">
          <img
            alt="Portrait of a man in a blue shirt"
            className="w-[300px] h-[320px] object-cover rounded-t-lg"
            src={poonam}
            width="300"
            height="300"
          />
          <h2 className="text-xl font-bold text-gray-800 mt-4">
            Poonam Panchariya
          </h2>
          <p className="text-gray-600">General Manager</p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6 text-center border border-gray-200 transform transition duration-500 hover:scale-105 hover:shadow-lg">
          <img
            alt="Portrait of a man in a blue shirt"
            className="w-[300px] h-[320px] object-cover rounded-t-lg"
            src={namisha}
            width="300"
            height="300"
          />
          <h2 className="text-xl font-bold text-gray-800 mt-4">Namisha Rani</h2>
          <p className="text-gray-600">Chief Operating Officer</p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6 text-center border border-gray-200 transform transition duration-500 hover:scale-105 hover:shadow-lg">
          <img
            alt="Portrait of a man in a blue shirt"
            className="w-[300px] h-[320px] object-cover rounded-t-lg"
            src={rakshit}
            width="300"
            height="400"
          />
          <h2 className="text-xl font-bold text-gray-800 mt-4">
            Rakshit Verma
          </h2>
          <p className="text-gray-600">CFO & Business Development Manager</p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6 text-center border border-gray-200 transform transition duration-500 hover:scale-105 hover:shadow-lg">
          <img
            alt="Portrait of a man in a blue shirt"
            className="w-[300px] h-[320px] object-cover rounded-t-lg"
            src={deepak}
            width="300"
            height="300"
          />
          <h2 className="text-xl font-bold text-gray-800 mt-4">
            Deepak Sharma
          </h2>
          <p className="text-gray-600"> Co-Founder & CTO</p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6 text-center border border-gray-200 transform transition duration-500 hover:scale-105 hover:shadow-lg">
          <img
            alt="Portrait of a man in a blue shirt"
            className="w-[300px] h-[320px] object-cover rounded-t-lg"
            src={lalit}
            width="300"
            height="300"
          />
          <h2 className="text-xl font-bold text-gray-800 mt-4">Lalit Kumar</h2>
          <p className="text-gray-600">FullStack Developer</p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6 text-center border border-gray-200 transform transition duration-500 hover:scale-105 hover:shadow-lg">
          <img
            alt="Portrait of a man in a white shirt"
            className="w-[300px] h-[320px] object-cover rounded-t-lg"
            src={bhawani}
            width="300"
            height="300"
          />
          <h2 className="text-xl font-bold text-gray-800 mt-4">
            Bhawani Shankar
          </h2>
          <p className="text-gray-600">FullStack Developer</p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6 text-center border border-gray-200 transform transition duration-500 hover:scale-105 hover:shadow-lg">
          <img
            alt="Portrait of a woman in a black blazer"
            className="w-[300px] h-[320px] object-cover rounded-t-lg"
            src={bhavik}
            width="300"
            height="300"
          />
          <h2 className="text-xl font-bold text-gray-800 mt-4">
            Bhavik Duggal
          </h2>
          <p className="text-gray-600">BackEnd Developer</p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6 text-center border border-gray-200 transform transition duration-500 hover:scale-105 hover:shadow-lg">
          <img
            alt="Portrait of a man in a blue shirt"
            className="w-[300px] h-[320px] object-cover rounded-t-lg"
            src={mukesh}
            width="300"
            height="300"
          />
          <h2 className="text-xl font-bold text-gray-800 mt-4">Mukesh Saini</h2>
          <p className="text-gray-600">Mentor</p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6 text-center border border-gray-200 transform transition duration-500 hover:scale-105 hover:shadow-lg">
          <img
            alt="Portrait of a man in a white shirt"
            className="w-[300px] h-[320px] object-cover rounded-t-lg"
            src={prashant}
            width="300"
            height="300"
          />
          <h2 className="text-xl font-bold text-gray-800 mt-4">
            Prashant Chaudhary
          </h2>
          <p className="text-gray-600">Software Developer</p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6 text-center border border-gray-200 transform transition duration-500 hover:scale-105 hover:shadow-lg">
          <img
            alt="Portrait of a woman in a black blazer"
            className="w-[300px] h-[320px] object-cover rounded-t-lg"
            src={shubham}
            width="300"
            height="300"
          />
          <h2 className="text-xl font-bold text-gray-800 mt-4">
            Shubham Singh
          </h2>
          <p className="text-gray-600">FrontEnd Developer</p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6 text-center border border-gray-200 transform transition duration-500 hover:scale-105 hover:shadow-lg">
          <img
            alt="Portrait of a woman in a black blazer"
            className="w-[300px] h-[320px] object-cover rounded-t-lg"
            src={sujith}
            width="300"
            height="300"
          />
          <h2 className="text-xl font-bold text-gray-800 mt-4">T. Sujith</h2>
          <p className="text-gray-600">FrontEnd Developer</p>
        </div>

      </div>
    </div>
  );
};

export default TeamGrid;
