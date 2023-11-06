const Contact = () => {
  return (
    <>
      <div
        style={{ height: "40rem" }}
        className="bg-[url('/src/images/contact-bg.jpg')] bg-cover bg-no-repeat w-full mt-40"
      >
        <div className="space-y-4 text-center pt-20">
          <h3 className="uppercase text-orange-500 font-bold">| Contact us</h3>
          <h2 className="capitalize text-3xl text-white font-bold leading-normal md:text-4xl">
            Get In Touch With <br /> Our Agents
          </h2>
        </div>
      </div>
      <div className="flex flex-wrap flex-col gap-10 p-4 -mt-48 container justify-center mx-auto lg:flex-row md:p-0">
        <div className="flex flex-col w-full lg:w-1/2">
          <iframe
            style={{ height: "30rem" }}
            className=" rounded-lg"
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12469.776493332698!2d-80.14036379941481!3d25.907788681148624!2m3!1f357.26927939317244!2f20.870722720054623!3f0!3m2!1i1024!2i768!4f35!3m3!1m2!1s0x88d9add4b4ac788f%3A0xe77469d09480fcdb!2sSunny%20Isles%20Beach!5e1!3m2!1sen!2sth!4v1642869952544!5m2!1sen!2sth"
          ></iframe>
          <div className="flex flex-col flex-wrap gap-4 mt-10 space-y-4 md:space-y-0 md:justify-between md:flex-row">
            <div className="flex justify-start items-center gap-8 bg-white shadow-lg p-8 md:justify-center">
              <picture>
                <img src={require("../../images/phone-icon.png")} alt="phone" />
              </picture>
              <div className="flex flex-col">
                <span className="font-bold text-lg">010-020-0340</span>
                <p className="text-gray-400">Phone Number</p>
              </div>
            </div>
            <div className="flex justify-start items-center gap-8 bg-white shadow-lg p-8 md:justify-center">
              <picture>
                <img src={require("../../images/email-icon.png")} alt="email" />
              </picture>
              <div className="flex flex-col">
                <span className="font-bold text-lg">info@villa.co</span>
                <p className="text-gray-400">Business Email</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full bg-white rounded-xl shadow-lg lg:w-1/3">
          <from className="flex flex-col justify-start p-6">
            <div className="mb-8">
              <fieldset className="flex flex-col space-y-2">
                <label form="name">Full Name</label>
                <input
                  className="bg-gray-100 rounded-full p-2 pl-4 "
                  type="name"
                  typeof="name"
                  placeholder="Your Name..."
                />
              </fieldset>
            </div>
            <div className="mb-8">
              <fieldset className="flex flex-col space-y-2">
                <label form="email">Email Address</label>
                <input
                  className="bg-gray-100 rounded-full p-2 pl-4 "
                  type="email"
                  typeof="email"
                  placeholder="Your E-mail.."
                />
              </fieldset>
            </div>
            <div className="mb-8">
              <fieldset className="flex flex-col space-y-2">
                <label for="subject">Subject</label>
                <input
                  className="bg-gray-100 rounded-full p-2 pl-4 "
                  type="subject"
                  typeof="subject"
                  placeholder="Subject..."
                />
              </fieldset>
            </div>
            <div className="mb-8">
              <fieldset className="flex flex-col space-y-2">
                <label for="name">Message</label>
                <textarea
                  className="bg-gray-100 rounded-lg p-2 pl-4 h-40"
                  type="name"
                  typeof="name"
                  placeholder="Your Message..."
                />
              </fieldset>
            </div>
            <button className="bg-black hover:bg-orange-500 rounded-full w-48 p-4 text-white">
              Send Message
            </button>
          </from>
        </div>
      </div>
    </>
  );
};
export default Contact;
