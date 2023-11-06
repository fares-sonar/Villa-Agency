/* eslint-disable react/jsx-no-undef */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
const Video = () => {
  return (
    <>
      <div
        style={{ height: "40rem" }}
        className="bg-[url('/src/images/video-bg.jpg')] bg-cover w-full flex justify-center text-center bg-no-repeat mt-32"
      >
        <div className="mt-24 space-y-4">
          <h3 className="text-orange-500 uppercase font-medium">
            | video view
          </h3>
          <h2 className="text-3xl text-white font-bold capitalize md:text-5xl">
            Get Closer View & <br />
            Different Feeling
          </h2>
        </div>
      </div>
      <picture className="flex justify-center relative -mt-48 w-3/3 mx-auto md:w-2/3">
        <img
          className="rounded-2xl"
          src={require("../../images/video-frame.jpg")}
          alt="video"
        />
        <div className="absolute top-1/2 -translate-y-1/2 bg-orange-500 p-4 rounded-full bg-opacity-50">
          <FontAwesomeIcon
            icon={faPlay}
            className="text-orange-500 bg-white p-4 rounded-full text-center cursor-pointer"
          />
        </div>
      </picture>
    </>
  );
};

export default Video;
