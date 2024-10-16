import React from 'react';
import icon1 from './Images/icons/stack-icon1.png';
import icon2 from './Images/icons/stack-icon2.png';
import icon3 from './Images/icons/stack-icon3.png';
import icon4 from './Images/icons/stack-icon4.png'; // Removed the extra dash
import icon5 from './Images/icons/stack-icon5.png'; // Removed the extra dash
import icon6 from './Images/icons/stack-icon6.png'; // Removed the extra dash
import icon7 from './Images/icons/stack-icon7.png'; // Removed the extra dash
import icon8 from './Images/icons/stack-icon8.png'; // Removed the extra dash

const TechIcons = () => {
  return (
    <div className="py-12">
      <div className="container mx-auto">
        <ul className="flex justify-center align-middle flex-wrap gap-10 overflow-x-auto space-x-4">
          <li key="1">
            <a href="#" className="flex items-center justify-center w-20 h-20 bg-white rounded-full border-4 border-white shadow-md hover:border-purple-300">
              <img src={icon1} alt="icon1" className="w-11" />
            </a>
          </li>
          <li key="2">
            <a href="#" className="flex items-center justify-center w-20 h-20 bg-white rounded-full border-4 border-white shadow-md hover:border-purple-300">
              <img src={icon2} alt="icon2" className="w-11" />
            </a>
          </li>
          <li key="3">
            <a href="#" className="flex items-center justify-center w-20 h-20 bg-white rounded-full border-4 border-white shadow-md hover:border-purple-300">
              <img src={icon3} alt="icon3" className="w-11" />
            </a>
          </li>
          <li key="4">
            <a href="#" className="flex items-center justify-center w-20 h-20 bg-white rounded-full border-4 border-white shadow-md hover:border-purple-300">
              <img src={icon4} alt="icon4" className="w-11" />
            </a>
          </li>
          <li key="5">
            <a href="#" className="flex items-center justify-center w-20 h-20 bg-white rounded-full border-4 border-white shadow-md hover:border-purple-300">
              <img src={icon5} alt="icon5" className="w-11" />
            </a>
          </li>
          <li key="6">
            <a href="#" className="flex items-center justify-center w-20 h-20 bg-white rounded-full border-4 border-white shadow-md hover:border-purple-300">
              <img src={icon6} alt="icon6" className="w-11" />
            </a>
          </li>
          <li key="7">
            <a href="#" className="flex items-center justify-center w-20 h-20 bg-white rounded-full border-4 border-white shadow-md hover:border-purple-300">
              <img src={icon7} alt="icon7" className="w-11" />
            </a>
          </li>
          <li key="8">
            <a href="#" className="flex items-center justify-center w-20 h-20 bg-white rounded-full border-4 border-white shadow-md hover:border-purple-300">
              <img src={icon8} alt="icon8" className="w-11" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TechIcons;
