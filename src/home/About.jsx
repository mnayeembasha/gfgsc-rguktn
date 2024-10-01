const About = () => {
    return (

        //   <!-- About Section --> */}
        /* Network with Industry Leaders
           Hands-on Learning Opportunities
           Collaborate with Driven Peers
           Supportive Tech Community
           Exclusive Career Resources
           Enhance Problem-Solving Skills
        */


    <section id="about" className="py-9 md:py-18  bg-green-100 dark:bg-[#252525] about-bg">
      <div
        data-aos="fade-up"
         data-aos-duration="2500"
        className="container mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 px-4 md:px-6 flex justify-center items-center"
      >
        <div
          data-aos="fade-up"
          className="md:col-span-5 flex justify-center items-center image-container"
        >
          <img
            src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20220512131412/Student-Chapter-Article-Banner.png"
            alt="About Image"
            width="600"
            height="600"
            className="h-60 w-80 md:h-80 md:w-96 sm:h-80 sm:w-96 rounded-lg object-cover shadow-xxl  filter drop-shadow-xl custom-shadow"
            style={{ aspectRatio: "600/600", objectFit: "cover" }}
          />
        </div>
        <div data-aos="fade-up" className="md:col-span-7 space-y-4">
          <h2 className="text-3xl font-bold md:text-4xl dark-green-grad">About Us</h2>
          <p className="text-lg text-gray-600 dark:text-gray-200">
            Welcome to the Geeks for Geeks student chapter at RGUKT Nuzvid! We
            are a community of passionate students who share a love for
            technology and programming. Our goal is to create a supportive
            environment where we can learn, collaborate, and grow together.
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-200">
            Through our events, workshops, and projects, we aim to empower
            students with the skills and knowledge they need to succeed in the
            tech industry. Join us on this exciting journey as we explore the
            world of computer science and software development.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
