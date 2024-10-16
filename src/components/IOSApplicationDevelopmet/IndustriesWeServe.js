import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faHome, 
  faPlane, 
  faGraduationCap, 
  faBus, 
  faCalendarAlt, 
  faShoppingCart, 
  faGamepad, 
  faHeartbeat, 
  faMoneyBillWave, 
  faUtensils, 
  faClock, 
  faShoppingBasket 
} from "@fortawesome/free-solid-svg-icons";

const IndustriesWeServe = () => {
  const industries = [
    { name: 'Real Estate App', icon: faHome },
    { name: 'Tour & Travels App', icon: faPlane },
    { name: 'Education App', icon: faGraduationCap },
    { name: 'Transport App', icon: faBus },
    { name: 'Event App', icon: faCalendarAlt },
    { name: 'E-Commerce App', icon: faShoppingCart },
    { name: 'Game App', icon: faGamepad },
    { name: 'Healthcare App', icon: faHeartbeat },
    { name: 'Finance App', icon: faMoneyBillWave },
    { name: 'Restaurant App', icon: faUtensils },
    { name: 'On-Demand App', icon: faClock },
    { name: 'Grocery App', icon: faShoppingBasket },
  ];

  return (
    <div className="bg-gradient-to-b from-white to-pink-100 font-nunito py-10 w-full flex flex-col items-center justify-center">
      <h2 className="text-pink-500 text-sm">WE HAVE WORKED ACROSS MULTIPLE INDUSTRIES</h2>
      <h1 className="text-4xl font-bold text-blue-900 mt-2">Industries We Serve</h1>
      <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-10 px-4">
        {industries.map((industry, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg p-6 flex items-center">
            <FontAwesomeIcon icon={industry.icon} className="sm:w-12 sm:h-12 w-8 h-8 mr-4 text-blue-900" />
            <span className="text-blue-900 font-semibold">{industry.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IndustriesWeServe;
