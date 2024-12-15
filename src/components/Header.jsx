import { useState, useEffect } from "react";
import Logo from "./../images/logo.svg";
import Burger from "./../images/icon-menu.svg";
import Close from "./../images/icon-close-menu.svg";
import ArrDown from "./../images/icon-arrow-down.svg";
import Todo from "./../images/icon-todo.svg";
import Calendar from "./../images/icon-calendar.svg";
import Reminders from "./../images/icon-reminders.svg";
import Planning from "./../images/icon-planning.svg";

function Header() {
  const [isDropdownOpenCompany, setIsDropdownOpenCompany] = useState(false);
  const [isDropdownOpenFeatures, setIsDropdownOpenFeatures] = useState(false);
  const [isHidden, setIsHidden] = useState(true);

  // Toggle menu visibility
  const MenuStart = () => {
    setIsHidden(!isHidden);

    if (window.innerWidth >= 1024) {
      setIsHidden(true);
    }
  };

  const handleClickOutside = (e) => {
    const menuElement = document.querySelector("#mobileMenu");
    if (!menuElement.contains(e.target)) {
      setIsHidden(true);
    }
  };

  useEffect(() => {
    // Attach the event listener only when the menu is open
    if (!isHidden) {
      document.addEventListener("click", handleClickOutside);
    } else {
      document.removeEventListener("click", handleClickOutside);
    }

    // Disable scrolling when menu is open
    document.body.style.overflow = isHidden ? "auto" : "hidden";

    // Clean up on component unmount
    return () => {
      document.removeEventListener("click", handleClickOutside);
      document.body.style.overflow = "auto";
    };
  }, [isHidden]);

  return (
    <header className="py-32P relative lg:w-screen">
      <section className="flex justify-center items-center">
        <div
          className={`lg:hidden ${
            isHidden
              ? "-z-40 opacity-0"
              : "animate-fade bg-black absolute w-screen h-screen top-0 overflow-y-hidden z-40 opacity-80"
          }`}
          onClick={MenuStart}
        ></div>
        {/* Mobile Menu */}
        <div className="flex justify-between px-32P w-screen lg:hidden">
          <img src={Logo} alt="snap" />
          {/* Burger Menu */}
          <div className="relative z-50 w-16W h-16H block lg:hidden">
            {/* Hamburger Icon */}
            <img
              src={Burger}
              alt="burger menu"
              className={`cursor-pointer z-10 absolute inset-0 w-48W h-16H transition-transform transition-opacity duration-300 ${
                isHidden
                  ? "opacity-100 scale-100 rotate-0"
                  : "opacity-0 scale-75 rotate-180 pointer-events-none"
              }`}
              onClick={MenuStart}
            />
            <div
              className={`${isHidden ? "opacity-0" : "opacity-1"}`}
              onClick={handleClickOutside}
              id="mobileMenu"
            >
              {/* Navigation Menu - Mobile */}
              <img
                src={Close}
                alt="close menu"
                className={`cursor-pointer absolute z-50 inset-0 w-full h-full transition-transform transition-opacity duration-300 ${
                  isHidden
                    ? "opacity-0 scale-75 rotate-180 pointer-events-none"
                    : "opacity-100 scale-100 rotate-0"
                }`}
                onClick={MenuStart}
              />
              <ul
                className={`overflow-y-scroll absolute -inset-y-32I -right-48I z-40 text-black text-center text-lg font-semibold flex flex-col justify-start items-start gap-4 h-screen bg-white border-1BW border-dark-gray border-solid rounded-10BR shadow-2xl p-32P pt-80P w-[70vw] ${
                  !isHidden && "animate-comeIn"
                }`}
              >
                {/* Features - Hover Dropdown */}
                <li
                  className="group cursor-pointer flex flex-col gap-2"
                  onClick={() =>
                    setIsDropdownOpenFeatures(!isDropdownOpenFeatures)
                  }
                >
                  <div className="flex justify-between items-center gap-4 w-16W">
                    <h2 className="text-medium-gray group-hover:text-black font-semibold">
                      Features
                    </h2>
                    <img
                      src={ArrDown}
                      alt="features arrow"
                      className={`${
                        isDropdownOpenFeatures &&
                        "transform transition-transform rotate-180"
                      } `}
                    />
                  </div>
                  {/* Features Submenu */}
                  {isDropdownOpenFeatures && (
                    <ul className="flex flex-col justify-start items-start pl-6 mt-2 space-y-2">
                      <li className="text-medium-gray hover:text-black flex gap-4 items-center justify-start w-160W">
                        <img className="w-24W" src={Todo} alt="Todo" />
                        Todo List
                      </li>
                      <li className="text-medium-gray hover:text-black flex gap-4 items-center justify-start w-160W">
                        <img className="w-24W" src={Calendar} alt="Calendar" />
                        Calendar
                      </li>
                      <li className="text-medium-gray hover:text-black flex gap-4 items-center justify-start w-160W">
                        <img
                          className="w-24W"
                          src={Reminders}
                          alt="Reminders"
                        />
                        Reminders
                      </li>
                      <li className="text-medium-gray hover:text-black flex gap-4 items-center justify-start">
                        <img className="w-24W" src={Planning} alt="Planning" />
                        Planning
                      </li>
                    </ul>
                  )}
                </li>
                {/* Company - Hover Dropdown */}
                <li
                  className="group cursor-pointer flex flex-col gap-2"
                  onClick={() =>
                    setIsDropdownOpenCompany(!isDropdownOpenCompany)
                  }
                >
                  <div className="flex justify-between items-center gap-3 w-16W">
                    <h2 className="text-medium-gray group-hover:text-black font-semibold">
                      Company
                    </h2>
                    <img
                      src={ArrDown}
                      alt="company arrow"
                      className={`${
                        isDropdownOpenCompany &&
                        "transform transition-transform rotate-180"
                      } `}
                    />
                  </div>
                  {/* Company Submenu */}
                  {isDropdownOpenCompany && (
                    <ul className="flex flex-col items-start pl-6 mt-2 space-y-2">
                      <li className="text-medium-gray hover:text-black">
                        History
                      </li>
                      <li className="text-medium-gray hover:text-black">
                        Our Team
                      </li>
                      <li className="text-medium-gray hover:text-black">
                        Blog
                      </li>
                    </ul>
                  )}
                </li>
                {/* Careers */}
                <li className="cursor-pointer flex justify-center items-center gap-2">
                  <h2 className="text-medium-gray hover:text-black font-semibold">
                    Careers
                  </h2>
                </li>
                {/* About */}
                <li className="cursor-pointer flex justify-center items-center gap-2">
                  <h2 className="text-medium-gray hover:text-black font-semibold">
                    About
                  </h2>
                </li>
                {/* Login and Register */}
                <div className="w-full">
                  <li className="cursor-pointer flex lg:items-center lg:gap-2">
                    <h2 className="text-medium-gray hover:text-black font-semibold w-full py-16P">
                      Login
                    </h2>
                  </li>
                  <button className="cursor-pointer border-most-black shadow-md rounded-lg lg:px-16P lg:py-8P rounded-30BR font-semibold hover:text-black border-4BW text-medium-gray hover:border-most-black border-medium-gray w-full py-16P mb-32M">
                    Register
                  </button>
                </div>
              </ul>
            </div>
          </div>
        </div>

        {/* Navigation Menu - Desktop */}
        <div className="hidden lg:flex lg:justify-around lg:items-center lg:w-full">
          {/* Left Section */}
          <div className="flex lg:items-center lg:gap-8">
            <img className="lg:block" src={Logo} alt="snap" />

            <ul className="z-10 lg:gap-8 text-most-black text-sm flex">
              {/* Features */}
              <div className="flex flex-col items-center justify-between relative">
                <li
                  className="cursor-pointer flex lg:items-center lg:gap-2"
                  onClick={() =>
                    setIsDropdownOpenFeatures(!isDropdownOpenFeatures)
                  }
                >
                  <h2 className="text-medium-gray hover:text-black font-semibold">
                    Features
                  </h2>
                  <img
                    className={`${
                      isDropdownOpenFeatures &&
                      "transform transition-transform rotate-180"
                    } `}
                    src={ArrDown}
                    alt="down"
                  />
                </li>
                {/* Features Submenu */}
                {isDropdownOpenFeatures && (
                  <ul className="animate-comeIn absolute top-32I right-0 shadow-xl bg-white py-16P rounded-10BR flex flex-col justify-start items-start pl-6 mt-2 space-y-2">
                    <li className="text-medium-gray hover:text-black flex gap-4 items-center justify-start w-160W">
                      <img className="w-24W" src={Todo} alt="Todo" />
                      Todo List
                    </li>
                    <li className="text-medium-gray hover:text-black flex gap-4 items-center justify-start w-160W">
                      <img className="w-24W" src={Calendar} alt="Calendar" />
                      Calendar
                    </li>
                    <li className="text-medium-gray hover:text-black flex gap-4 items-center justify-start w-160W">
                      <img className="w-24W" src={Reminders} alt="Reminders" />
                      Reminders
                    </li>
                    <li className="text-medium-gray hover:text-black flex gap-4 items-center justify-start">
                      <img className="w-24W" src={Planning} alt="Planning" />
                      Planning
                    </li>
                  </ul>
                )}
              </div>
              {/* Company */}
              <div className="flex flex-col items-center justify-between relative">
                <li
                  className="flex lg:items-center lg:gap-2"
                  onClick={() =>
                    setIsDropdownOpenCompany(!isDropdownOpenCompany)
                  }
                >
                  <h2 className="cursor-pointer text-medium-gray hover:text-black font-semibold">
                    Company
                  </h2>
                  <img
                    className={`${
                      isDropdownOpenCompany &&
                      "transform transition-transform rotate-180"
                    } `}
                    src={ArrDown}
                    alt="down"
                  />
                </li>
                {/* Company Submenu */}
                {isDropdownOpenCompany && (
                  <ul className="animate-comeIn absolute top-32I left-0 shadow-xl bg-white py-16P rounded-10BR flex flex-col justify-start items-start pl-6 mt-2 space-y-2">
                    <li className="text-medium-gray hover:text-black w-96W">
                      History
                    </li>
                    <li className="text-medium-gray hover:text-black">
                      Our Team
                    </li>
                    <li className="text-medium-gray hover:text-black">Blog</li>
                  </ul>
                )}
              </div>
              <li className="flex lg:items-center lg:gap-2">
                <h2 className="text-medium-gray hover:text-black font-semibold">
                  Careers
                </h2>
              </li>
              <li className="flex lg:items-center lg:gap-2">
                <h2 className="text-medium-gray hover:text-black font-semibold">
                  About
                </h2>
              </li>
            </ul>
          </div>

          {/* Right Section */}
          <ul className="z-10 text-most-black text-sm hidden lg:flex lg:items-center cursor-pointer gap-8">
            <li className="flex lg:items-center lg:gap-2">
              <h2 className="text-medium-gray hover:text-black font-semibold">
                Login
              </h2>
            </li>

            <button
              className="border-medium-gray shadow-md rounded-lg
                lg:px-16P lg:py-8P rounded-30BR font-semibold hover:text-black border-4BW 
                text-medium-gray hover:border-most-black border-medium-gray"
            >
              Register
            </button>
          </ul>
        </div>
      </section>
    </header>
  );
}

export default Header;
