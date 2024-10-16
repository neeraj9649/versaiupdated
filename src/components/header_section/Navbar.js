import React, { useState, useEffect } from "react";
import logo from "./logo1.png";
import Navdetails from "./Navdetails";
import { Link } from "react-router-dom";

function Navbar() {
  const [open, setOpen] = useState(false);

  // Function to handle toggle
  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen); // Toggle open state
  };

  // Function to close the menu
  const closeMenu = () => {
    setOpen(false); // Close the menu
  };

  // Effect to handle body scroll when the menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    // Clean up on component unmount or when the menu closes
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  return (
    <nav className="bg-[#e2eff7] border-b-black border-b-2 border-opacity-35 w-full z-50 fixed top-0">
      <div className="flex h-20 justify-between items-center gap-4 px-6">
        <div className="z-50 px-5 py-4 md:w-auto w-full flex justify-between items-center ">
          <Link
            to="/"
            onClick={() => {
              closeMenu();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            <img
              src={logo}
              className="h-32 pt-2 md:cursor-pointer"
              alt="Logo"
            />
          </Link>
          <div className="md:hidden text-4xl" onClick={handleToggle}>
            <ion-icon name={`${open ? "close" : "menu"}`}></ion-icon>
          </div>
        </div>
        <ul className="md:flex z-50 hidden items-center gap-4">
          <Link
            to="/"
            className="font-semibold cursor-pointer hover:text-green-950 uppercase z-50"
            onClick={() => {
              closeMenu();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            Home
          </Link>
          <Navdetails resetMenu={open} closeMenu={closeMenu} />
          <div className="md:flex hidden gap-4 items-center">
            <Link
              to="/About-us"
              className="text-md font-semibold mr-6 uppercase"
              onClick={() => {
                closeMenu();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              About Us
            </Link>
            <Link
              className="text-md font-semibold mr-6 uppercase"
              to="/Career"
              rel="noopener noreferrer"
            >
              Career
            </Link>
            <a
              href="https://wa.me/message/LOCS4FDAU2IYC1"
              target="_blank"
              rel="noopener noreferrer" // Security measure for opening links in a new tab
            >
              <button className="text-2xl w-11 h-[41px] bg-green-950 rounded-full text-center pt-1 text-white ">
                <ion-icon name="call"></ion-icon>
              </button>
            </a>

            <Link to="/Contact-us">
              <button
                className="px-4 h-10 bg-blue-700 hover:bg-blue-600 duration-200 text-white text-md font-semibold rounded-2xl"
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
              >
                Contact Us
              </button>
            </Link>
          </div>
        </ul>
        {/* mobile menu */}
        <ul
          className={`md:hidden fixed z-40 bg-white w-full h-full left-0 py-24 pl-4 duration-500 ${
            open ? "top-0" : "top-[-100%]"
          }`}
        >
          <Navdetails resetMenu={open} closeMenu={closeMenu} />
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
