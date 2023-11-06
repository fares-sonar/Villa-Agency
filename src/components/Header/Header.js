/* eslint-disable react/jsx-no-undef */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
// import "./Header.css";
import { useState } from "react";
const Header = () => {
  let links = [
    { name: "Home", Link: "/" },
    { name: "Properties", Link: "/" },
    { name: "Property Details", Link: "/" },
    { name: "Content Us", Link: "/" },
  ];
  // eslint-disable-next-line no-unused-vars
  let [open, setOpen] = useState(false);
  return (
    <>
      <div className="bg-white shadow fixed z-20 w-full ">
        <nav className="container mx-auto flex justify-between items-center p-6  ">
          <a href="#" className="font-bold text-3xl">
            VILLA
          </a>
          <div className="flex gap-2 items-center">
            <ul
              className={`flex flex-col absolute transition-all duration-500 ease-in -z-20 left-1/2 -translate-x-1/2 text-center text-md space-y-4 py-4 bg-white shadow w-4/5 md:flex md:flex-row space-x-8 lg:space-x-20 md:items-center md:bg-transparent md:shadow-none md:space-y-0 md:z-0 md:static md:translate-x-0 md:py-0 ${
                open ? "top-20" : "top-[-250px]"
              } `}
            >
              {links.map((link) => (
                <li
                  key={link.name}
                  className="hover:text-orange-500 border-b-2 border-gray-100 py-2 cursor-pointer md:border-none"
                >
                  {link.name}
                </li>
              ))}
            </ul>
            <div onClick={() => setOpen(!open)}>
              <FontAwesomeIcon
                icon={open ? faXmark : faBars}
                className="md:hidden"
              />
            </div>
            <div className="hidden md:flex items-center justify-start bg-black text-white rounded-full w-48 ">
              <FontAwesomeIcon
                icon={faCalendar}
                className="flex items-start bg-orange-500 rounded-full py-3 px-3 "
              />
              <a href="#" className="text-sm pl-2 hover:text-orange-500">
                Schedule a visit
              </a>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Header;
