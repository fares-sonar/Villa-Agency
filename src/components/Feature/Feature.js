const Feature = () => {
  return (
    <>
      <div className="flex flex-col flex-wrap justify-center items-center my-10 p-6 space-y-10 gap-8 md:space-y-0 md:flex-row">
        <picture className="relative text-center w-full md:w-96">
          <img
            src={require("../../images/featured.jpg")}
            alt="feature"
            className="object-contain w-full"
          />
          <img
            src={require("../../images/featured-icon.png")}
            alt="featured"
            className="absolute bg-orange-500 p-4 rounded-full -left-8 -bottom-10"
          />
        </picture>

        <div className="flex flex-col items-start justify-between space-y-6 md:items-center lg:w-1/4">
          <h3 className="text-orange-500 font-bold uppercase text-left">
            | featured
          </h3>
          <h2 className="text-4xl font-bold capitalize">
            best apartment <br />& sea view
          </h2>
          <div className="bg-gray-100 space-x-4 space-y-4 rounded-md w-max-96">
            <h3 className="text-orange-500 capitalize text-lg font-medium border-b-2  py-4 pl-4">
              best useful links?
            </h3>
            <p>
              Get <b>the best villa</b> website template in HTML CSS and
              Bootstrap for your business. TemplateMo provides you the{" "}
              <a href="https//:www.google.com" className="text-blue-500">
                best free CSS templates
              </a>{" "}
              in the world. Please tell your friends about it.
            </p>
            <div id="links" className="flex flex-col space-y-2">
              <a href="https//:www.google.com">How does this work ?</a>
              <hr />
              <a href="https//:www.google.com">
                Why is Villa Agency the best ?
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col space-y-6 items-stretch justify-center rounded-lg bg-white p-6 shadow-2xl w-full md:w-96 md:items-center">
          <div className="flex gap-6 border-b-2 pb-8" id="box">
            <img
              className="object-contain"
              src={require("../../images/info-icon-01.png")}
              alt="box"
            />
            <div className="space-y-2">
              <span className=" font-medium text-2xl">250 m2</span>
              <p className="text-gray-600 text-sm">Total flat space</p>
            </div>
          </div>

          <div className="flex gap-6 border-b-2 pb-8" id="box">
            <img
              className="object-contain"
              src={require("../../images/info-icon-02.png")}
              alt="box"
            />
            <div className="space-y-2">
              <span className=" font-medium text-2xl">Contract</span>
              <p className="text-gray-600 text-sm">Contract ready</p>
            </div>
          </div>

          <div className="flex gap-6 border-b-2 pb-8" id="box">
            <img
              className="object-contain"
              src={require("../../images/info-icon-03.png")}
              alt="box"
            />
            <div className="space-y-2">
              <span className=" font-medium text-2xl">Payment</span>
              <p className="text-gray-600 text-sm">Payment Process</p>
            </div>
          </div>

          <div className="flex gap-6 " id="box">
            <img
              className="object-contain"
              src={require("../../images/info-icon-04.png")}
              alt="box"
            />
            <div className="space-y-2">
              <span className=" font-medium text-2xl">Safety</span>
              <p lassName="text-gray-600 text-sm">24/7 Under Control</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Feature;
