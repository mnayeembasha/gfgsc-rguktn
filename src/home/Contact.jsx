const Contact = () => {
  return (
    <section
      id="contact"
      data-aos="fade-up"
      className="w-full py-6 md:py-6 lg:py-24 flex  justify-center align-center text-white"
    >
      <div
        data-aos="fade-up"
        className="container  md:shadow-lg bg-[#f0f8f0] grid grid-cols-1 gap-8 px-4 py-8 md:py-12 rounded-2xl md:grid-cols-2 md:gap-0 md:px-6"
      >
        <div className="space-y-6 px-8  md:px-24  flex flex-col justify-center align-center">
          <div data-aos="fade-up" className="space-y-2  px-4 md:px-8 ">
            <h1 className="text-4xl font-bold text-green-700">Get in Touch</h1>
            <p className="text-green-700">
              Have a question or want to contribute? Reach out!
            </p>
          </div>
          <div className="space-y-4  px-4 md:px-8">
            <div data-aos="fade-up" className="flex items-center gap-2 mb-8">
              <div className="bg-[#32a852] rounded-full w-8 h-8 flex items-center justify-center icon-container">
                <i className="bi bi-telephone-fill text-white"></i>
              </div>
              <a
                href="tel:+1234567890"
                className="text-green-700 hover:underline hover:underline-offset-2"
              >
                +91 12345-67890
              </a>
            </div>
            <div className="flex items-center gap-2">
              <div className="bg-[#32a852] rounded-full w-8 h-8 flex items-center justify-center icon-container">
                <i className="bi bi-envelope-fill text-white"></i>
              </div>
              <a
                href="mailto:geeksforgeeksrguktnuzvid@gmail.com"
                className="text-green-700 hover:underline hover:underline-offset-2"
              >
                geeksforgeeksrguktnuzvid@gmail.com
              </a>
            </div>
            <div
              data-aos="fade-up"
              className="flex items-center gap-4 py-2 md:py-4"
            >
              <a
                href=""
                className="text-[#a3d9a5] hover:text-[#32a852] transition-colors mr-4"
                target="_blank"
              >
                <div className="bg-[#32a852] rounded-full w-8 h-8 flex items-center justify-center icon-container">
                  <i className="bi bi-twitter-x text-white"></i>
                </div>
              </a>
              <a
                href="https://www.instagram.com/gfgsc_rguktn"
                className="text-[#a3d9a5] hover:text-[#32a852] transition-colors mr-4"
                target="_blank"
              >
                <div className="bg-[#32a852] rounded-full w-8 h-8 flex items-center justify-center icon-container">
                  <i className="bi bi-instagram text-white"></i>
                </div>
              </a>
              <a
                href="https://www.linkedin.com/in/geeksforgeeks-rgukt-nuzvid-854270325/"
                className="text-[#a3d9a5] hover:text-[#32a852] transition-colors mr-4"
                target="_blank"
              >
                <div className="bg-[#32a852] rounded-full w-8 h-8 flex items-center justify-center icon-container">
                  <i className="bi bi-linkedin text-white"></i>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div data-aos="fade-up" className="contact-form space-y-4 px-8 md:px-8">
          <div data-aos="fade-up" className="grid grid-cols-1 md:grid-cols-2 gap-4 space-y-2 md:space-y-0">
            <div data-aos="fade-up" className="space-y-2">
              <label htmlFor="name" className="text-green-800">
                Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="Enter your name"
                className="w-full px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#32a852] bg-[#f0f8f0] text-gray-800"
              />
            </div>
            <div data-aos="fade-up" className="space-y-2">
              <label htmlFor="email" className="text-green-800">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#32a852] bg-[#f0f8f0] text-gray-800"
              />
            </div>
          </div>
          <div data-aos="fade-up" className="space-y-2">
            <label htmlFor="subject" className="text-green-800">
              Subject
            </label>
            <input
              id="subject"
              type="text"
              placeholder="Enter the subject"
              className="w-full px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#32a852] bg-[#f0f8f0] text-gray-800"
            />
          </div>
          <div data-aos="fade-up" className="space-y-2">
            <label htmlFor="message" className="text-green-800">
              Message
            </label>
            <textarea
              id="message"
              placeholder="Enter your message"
              className="w-full px-4 py-2 rounded-lg min-h-[120px] focus:outline-none focus:ring-2 focus:ring-[#32a852] bg-[#f0f8f0] text-gray-800"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 rounded bg-[#32a852] text-white hover:bg-green-900 transition-colors"
          >
            Send Message
          </button>
        </div>
      </div>
    </section>


     /* Subscribe to Newsletter section */
    /* <section data-aos="fade-up" className="bg-[#1a5a1a] py-12 md:py-24">
          <div className="container mx-auto flex flex-col items-center gap-4 px-4 text-white md:px-6">
            <h2 className="text-3xl font-bold md:text-4xl">
              Subscribe to our Newsletter
            </h2>
            <form className="w-full max-w-md">
              <div className="flex items-center rounded-lg bg-white p-1">
                <input className="flex h-10 w-full rounded-md text-sm ring-offset-background file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus:outline-none focus:ring-0 focus:border-none hover:border-none border-none bg-transparent px-4 py-2 text-[#1a5a1a] disabled:cursor-not-allowed disabled:opacity-50"
                  type="email"
                  placeholder="enter your email"
                />

                <button
                  className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 rounded-lg bg-[#1a5a1a] px-4 py-2 text-white transition-colors hover:bg-[#1a5a1a]/80"
                  type="submit"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </section>
        */
  );
};

export default Contact;
