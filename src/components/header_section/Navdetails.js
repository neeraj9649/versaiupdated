import React, { useState, useEffect } from "react";
import Navdata from "./Navdata";
import { Link } from "react-router-dom"; // Import Link for routing

function Navdetails({ resetMenu, closeMenu }) {
  const [open, setOpen] = useState(""); // Tracks open submenu in mobile
  const [sublinks, setSublinks] = useState(""); // Tracks open submenu items in mobile

  // Use effect to reset submenu states when the menu is toggled (for mobile)
  useEffect(() => {
    if (resetMenu) {
      setOpen(""); // Reset open menu state
      setSublinks(""); // Reset sublinks state
    }
  }, [resetMenu]);

  // Function to handle click events on submenu links
  const handleLinkClick = (link) => {
    closeMenu(); // Close menu on click
    setOpen(""); // Reset open state
    setSublinks(""); // Reset sublinks state
  };

  return (
    <>
      {Navdata.map((value) => (
        <div key={value.menu}>
          {/* Main menu item */}
          <div
            className="px-3 text-left md:cursor-pointer group flex flex-col-reverse md:py-7 py-2 cursor-pointer"
            onMouseEnter={() => setOpen(value.menu)} // Open submenu on hover for desktop
            onMouseLeave={() => {
              if (!sublinks) {
                setOpen(""); // Reset open state on mouse leave if no sublinks are open
              }
            }}
          >
            <h1
              className="font-semibold md:hover:text-green-950 px-5 uppercase"
              onClick={() => {
                // Toggle submenu for mobile
                if (open === value.menu) {
                  setOpen(""); // Close submenu if it's already open
                } else {
                  setOpen(value.menu); // Open submenu if it's not open
                }
              }}
            >
              {value.menu}
            </h1>

            {/* Submenu for Desktop (on hover) */}
            {value.content && (
              <div
                className={`absolute top-[81px] bg-white duration-500 ${
                  open === value.menu ? "block" : "hidden"
                } w-full left-0 z-40`}
              >
                <div className="md:grid grid-cols-2">
                  <div className="flex flex-col py-5 items-center gap-5">
                    <div className="font-semibold text-xl border-b-2 flex gap-1">
                      {value.title}
                      <div className="text-lg pt-1">
                        <ion-icon name="chevron-forward-circle"></ion-icon>
                      </div>
                    </div>
                    <div>
                      <img
                        src={value.src}
                        className="w-[250px] h-[80px] rounded-md"
                        alt="menu visual"
                      />
                    </div>
                  </div>
                  <div className="grid grid-rows-1 grid-cols-2 gap-8 justify-center px-7 py-5">
                    {value.submenu.map((sub) => (
                      <div className="flex flex-col gap-2" key={sub.title}>
                        {sub.subtitle && (
                          <h1 className="font-semibold border-b-2">
                            {sub.title}
                          </h1>
                        )}
                        <div className="text-md text-gray-700 flex flex-col gap-1">
                          {sub.sublinks.map((subname) => (
                            <Link
                              to={subname.link}
                              className="hover:text-gray-800"
                              key={subname.name}
                              onClick={() => {
                                handleLinkClick(subname.link);
                                window.scrollTo({ top: 0, behavior: "smooth" });
                              }} // Close menu on click
                            >
                              <li>{subname.name}</li>
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Mobile submenu */}
            <div className="md:hidden flex flex-col justify-between items-start px-5 pb-6 gap-6 font-semibold uppercase">
              <Link
                to="/About-us"
                className="uppercase mt-5"
                onClick={() => {
                  handleLinkClick();
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
              >
                About Us
              </Link>
              <Link
                to="/Contact-us"
                className="uppercase"
                onClick={() => {
                  handleLinkClick();
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
              >
                Contact Us
              </Link>
            </div>
          </div>

          {/* Mobile submenu toggle */}
          <div className={`${open === value.menu ? "md:hidden" : "hidden"}`}>
            {value.submenu.map((subl) => (
              <div key={subl.title}>
                <div>
                  <h1
                    className="py-2 pl-12 font-semibold md:pr-0 pr-5 cursor-pointer"
                    onClick={() => {
                      // Toggle submenu for each subitem in mobile
                      sublinks === subl.title
                        ? setSublinks("")
                        : setSublinks(subl.title);
                    }}
                  >
                    {subl.title}
                  </h1>
                </div>
                <div
                  className={`${
                    sublinks === subl.title ? "md:hidden" : "hidden"
                  }`}
                >
                  {subl.sublinks.map((names) => (
                    <Link
                      to={names.link}
                      key={names.name}
                      onClick={() => {
                        handleLinkClick(names.link);
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }}

                      // Close menu on click
                    >
                      <li className="py-2 pl-16 cursor-pointer">
                        {names.name}
                      </li>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <Link to="https://forms.gle/57jFAXPdjU1tvYnj8">
            <div
              className="md:hidden py-5 pl-8 text-md font-semibold uppercase md:pr-0 pr-5"
              onClick={handleLinkClick}
            >
              Career
            </div>
          </Link>
        </div>
      ))}
    </>
  );
}

export default Navdetails;
