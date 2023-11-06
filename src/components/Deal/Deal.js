/* eslint-disable jsx-a11y/anchor-is-valid */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
const Deal = () => {
  return (
    <>
      <div className="bg-gray-100 ">
        <div className="container mx-auto p-8">
          <div className="flex flex-col justify-around content-center p-20 space-y-6 md:space-y-0 md:items-center md:flex-row">
            <div className="space-y-4">
              <h3 className="uppercase text-orange-500 font-bold">
                | best deal
              </h3>
              <h2 className="capitalize text-3xl font-bold leading-normal md:text-4xl">
                find you best deal <br /> right now!
              </h2>
            </div>
            <button className="flex flex-wrap gap-8 text-lg ">
              <a
                href="#"
                className="py-3 px-6 bg-orange-500 rounded-md text-white"
              >
                Apparment
              </a>
              <a href="#" className="py-3 px-6 bg-black rounded-md text-white">
                Villa House
              </a>
              <a href="#" className="py-3 px-6 bg-black rounded-md text-white">
                Penthouse
              </a>
            </button>
          </div>
          <div className="flex flex-col flex-wrap justify-center gap-10 p-4 md:p-0 md:flex-row">
            <div className="flex flex-col justify-between shadow-lg bg-white p-6 rounded-md w-full lg:w-1/4">
              <div className="flex justify-between gap-10 p-4 border-b-2">
                <span className="text-gray-400 capitalize ">
                  total float space
                </span>
                <h3 className="font-bold text-xl ">185 m2</h3>
              </div>
              <div className="flex justify-between gap-10 p-4 border-b-2">
                <span className="text-gray-400 capitalize ">floor number</span>
                <h3 className="font-bold text-xl ">26th</h3>
              </div>
              <div className="flex justify-between gap-10 p-4 border-b-2">
                <span className="text-gray-400 capitalize ">
                  number of room
                </span>
                <h3 className="font-bold text-xl ">4</h3>
              </div>
              <div className="flex justify-between gap-10 p-4 border-b-2">
                <span className="text-gray-400 capitalize ">
                  parking available
                </span>
                <h3 className="font-bold text-xl ">Yes</h3>
              </div>
              <div className="flex justify-between gap-10 p-4">
                <span className="text-gray-400 capitalize ">
                  payment process
                </span>
                <h3 className="font-bold text-xl ">Bank</h3>
              </div>
            </div>
            <picture className="w-full lg:w-1/3">
              <img
                src={require("../../images/property-05.jpg")}
                alt="property"
                className="w-full"
              />
            </picture>
            <div className="flex flex-col w-full md:space-y-0 lg:w-1/4">
              <h2 className="font-medium text-lg mb-4">
                Extra Info About Property
              </h2>
              <p className="leading-7 pb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, do
                eiusmod tempor pack incididunt ut labore et dolore magna aliqua
                quised ipsum suspendisse.
              </p>
              <p className="leading-7">
                When you need free CSS templates, you can simply type TemplateMo
                in any search engine website. In addition, you can type
                TemplateMo Portfolio, TemplateMo One Page Layouts, etc.
              </p>
              <div className="flex items-center gap-4 w-48 bg-black text-white rounded-full ">
                <FontAwesomeIcon
                  icon={faCalendar}
                  className="bg-orange-500 rounded-full py-3 px-3 "
                />
                <a href="#" className="text-sm pr-4 hover:text-orange-500">
                  Schedule a visit
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Deal;
