const Facts = () => {
  return (
    <>
      <div className="container mx-auto flex flex-wrap justify-around items-center my-24 ">
        <div className="flex gap-4 relative items-center bg-orange-500 mb-8 py-6 px-8 bg-opacity-30 rounded-2xl before:content[''] before:absolute before:h-12 before:w-12 before:bg-orange-500 before:-top-6 before:-right-4 before:rounded-full">
          <h2 className="text-4xl text-orange-500 font-bold">34</h2>
          <div className="flex flex-col text-back font-medium capitalize">
            <p>Buildings</p>
            <p>Finished Now</p>
          </div>
        </div>
        <div className="flex gap-4 relative items-center bg-orange-500 mb-8 py-6 px-12 bg-opacity-30 rounded-2xl before:content[''] before:absolute before:h-12 before:w-12 before:bg-orange-500 before:-top-6 before:-right-4 before:rounded-full">
          <h2 className="text-4xl text-orange-500 font-bold">12</h2>
          <div className="flex flex-col text-back font-medium capitalize">
            <p>years</p>
            <p>Experience</p>
          </div>
        </div>
        <div className="flex gap-4 relative items-center bg-orange-500 mb-8 py-6 px-12 bg-opacity-30 rounded-2xl before:content[''] before:absolute before:h-12 before:w-12 before:bg-orange-500 before:-top-6 before:-right-4 before:rounded-full">
          <h2 className="text-4xl text-orange-500 font-bold">24</h2>
          <div className="flex flex-col text-back font-medium capitalize">
            <p>Awwards</p>
            <p>Won 2023</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Facts;
