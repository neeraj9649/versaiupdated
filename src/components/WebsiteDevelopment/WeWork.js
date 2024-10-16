import React from 'react';

// Importing images directly
import icon1 from './Images/icons/icon-1.png';
import icon2 from './Images/icons/icon-2.png';
import icon3 from './Images/icons/icon-3.png';
import icon4 from './Images/icons/icon-4.png';
import icon5 from './Images/icons/icon-5.png';
import icon6 from './Images/icons/icon-6.png';

const WeWork = () => {
  return (
    <section className="work-category py-24 px-4 md:px-32 w-full bg-gradient-to-b from-[#fbf9ed] to-[#fbeaf8]">
      <div className="container mx-2">
        <div className="flex md:gap-20 gap-5 flex-col lg:flex-row lg:gap-32 ">
          <div className="w-full lg:w-1/3 flex items-center">
            <div className="common-heading lg:text-left text-center xl:text-left">
              <span className="text-base md:text-lg font-semibold uppercase tracking-wider text-pink-600">
                Industries we work for
              </span>
              <h2 className="mb-8 text-3xl md:text-5xl lg:text-6xl font-bold">
                Helping Businesses in All Domains
              </h2>
              <p className=' md:pe-10'>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. 
              </p>
            </div>
          </div>
          <div className="w-full lg:w-2/4 xl:w-2/3">
            <div className="grid grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6">
              {workCards.map((card, index) => (
                <div
                  key={index}
                  className={`icon-set transition-transform hover:scale-105 duration-300 ${card.bgColor} p-6 md:p-10 shadow-lg`}
                  style={{ animationDelay: `${0.2 * (index + 1)}s`, borderRadius: '20% 0 20% 0' }}
                >
                  <div className="work-card flex flex-col items-center">
                    <div className="icon-bg mb-4">
                      <img src={card.icon} alt={card.title} className="w-10 h-10 md:w-12 md:h-12" />
                    </div>
                    <p className="text-sm md:text-base">{card.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Array with imported images
const workCards = [
  { title: 'Social Networking', icon: icon1, bgColor: 'bg-[#70e4e8]' },
  { title: 'Digital Marketing', icon: icon2, bgColor: 'bg-[#f5eb92]' },
  { title: 'Ecommerce Development', icon: icon3, bgColor: 'bg-[#a3ffe2]' },
  { title: 'Video Service', icon: icon4, bgColor: 'bg-[#ffbc7a]' },
  { title: 'Banking Service', icon: icon5, bgColor: 'bg-[#e3ff8e]' },
  { title: 'Enterprise Service', icon: icon6, bgColor: 'bg-[#ffa0c6]' },
];

export default WeWork;
