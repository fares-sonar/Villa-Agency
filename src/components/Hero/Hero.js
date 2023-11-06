const Hero = () => {
  return (
    <>
      <div className="bg-[url('/src/images/banner-01.jpg')] bg-no-repeat bg-cover h-screen relative">
        <div className="absolute left-1/4 top-1/3">
          <h3 className="py-2 px-4 font-bold bg-white inline-block">
            Toronto,<em className="text-orange-500">Canada</em>
          </h3>
          <h1 className="text-white text-4xl font-bold w-2/3 leading-tight my-6 lg:text-6xl">
            HURRY!<br></br> GET THE BEST VILLA FOR YOU
          </h1>
        </div>
      </div>
    </>
  );
};

export default Hero;
