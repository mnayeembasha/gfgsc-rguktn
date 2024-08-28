import { useState,useEffect } from "react";
import "./App.css";
// import 'animate.css';

import AOS from 'aos';
import 'aos/dist/aos.css';

const teamMembers = [
  {
    img_link: '/assets/gfgsc_rguktn_nobg.png',
    name: 'M.Lilly',
    position: 'ChairPerson'
  },
  {
    img_link: '/assets/gfgsc_rguktn_nobg.png',
    name: 'K.Harshita',
    position: 'Vice-ChairPerson'
  },
  {
    img_link: '/assets/gfgsc_rguktn_nobg.png',
    name: 'K.Priyanka',
    position: 'Technical Lead'
  },
  {
    img_link: '/assets/gfgsc_rguktn_nobg.png',
    name: 'S.Mounika',
    position: 'Public Outreach Lead'
  },
  {
    img_link: '/assets/gfgsc_rguktn_nobg.png',
    name: 'Ch.Jyothirmai',
    position: 'Events Lead'
  },
  {
    img_link: '/assets/gfgsc_rguktn_nobg.png',
    name: 'K.Divya Sri',
    position: 'Marketing Lead'
  },
  {
    img_link: '/assets/gfgsc_rguktn_nobg.png',
    name: 'A.Bhargavi',
    position: 'Social Media Lead'
  },
  {
    img_link: '/assets/gfgsc_rguktn_nobg.png',
    name: 'D.Harika',
    position: 'Design/Branding Lead'
  },
  {
    img_link: '/assets/gfgsc_rguktn_nobg.png',
    name: 'Ch.Jayanth',
    position: 'AI/ML Lead'
  },
  {
    img_link: '/assets/gfgsc_rguktn_nobg.png',
    name: 'M.Nayeem Basha',
    position: 'Web Lead'
  },
  // Add more team members as needed
];


function App() {


  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://unpkg.com/typewriter-effect@latest/dist/core.js";
    script.async = true;
    script.onload = () => {
      const typewriter = new window.Typewriter("#typewriter", {
        loop: true, // Loop the animation
      });

      let role1 = "coding";
      let role2 = "collaboration";
      let role3 = "community";
      let timeDelay = 200;

      typewriter
        .typeString(role1)
        .pauseFor(timeDelay)
        .deleteChars(role1.length)
        .typeString(role2)
        .pauseFor(timeDelay)
        .deleteChars(role2.length)
        .typeString(role3)
        .pauseFor(timeDelay)
        .start();
    };
    document.body.appendChild(script);
  }, []);

  return (
    <div className="bg-[#f0f8f0] text-[#1a5a1a] primary">
      {/* <!-- Header Section --> */}
      <nav className="sticky top-0 z-50 bg-[#f0f8f0] px-4 py-1 shadow-md md:px-6">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="" className="flex items-center space-x-3">
            <img
              src="https://media.geeksforgeeks.org/gfg-gg-logo.svg"
              className="h-7"
              alt=""
            />
            <span className="self-center text-2xl font-bold whitespace-nowrap">
              GFGSC-RGUKTN
            </span>
          </a>
          <button
            data-collapse-toggle="navbar-solid-bg"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden  focus:outline-none focus:border-none"
            aria-controls="navbar-solid-bg"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div
            className="hidden w-full md:block md:w-auto"
            id="navbar-solid-bg"
          >
            <ul className="flex flex-col font-medium mt-4 rounded-lg  md:space-x-8 md:flex-row md:mt-0 md:border-0 md:bg-transparent">
              <li>
                <a
                  href="/"
                  className="block py-2 px-3 md:p-0 text-gray-900 rounded transition duration-200 hover:bg-[#4CAF50] md:hover:bg-transparent md:hover:text-[#4CAF50]"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="block py-2 px-3 md:p-0 text-gray-900 rounded transition duration-200 hover:bg-[#4CAF50] md:hover:bg-transparent md:hover:text-[#4CAF50]"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#team"
                  className="block py-2 px-3 md:p-0 text-gray-900 rounded transition duration-200 hover:bg-[#4CAF50] md:hover:bg-transparent md:hover:text-[#4CAF50]"
                >
                  Core-Team
                </a>
              </li>
              <li>
                <a
                  href=""
                  className="block py-2 px-3 md:p-0 text-gray-900 rounded transition duration-200 hover:bg-[#4CAF50] md:hover:bg-transparent md:hover:text-[#4CAF50]"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* <!-- Hero Section --> */}
      <main>
        <section data-aos="zoom-in" data-aos-duration="2500" className="sm:h-[90vh] py-12 md:py-24 flex flex-col items-center justify-center" >
          <div className="container mx-auto flex flex-col items-center justify-center gap-4 px-4 md:px-6">
            <div className="relative">
              <img
                src="assets/gfgsc_rguktn_nobg.png"
                alt="Hero Image"
                width="400"
                height="400"
                className="animate-bounce-vertical h-48 w-48 rounded-full object-cover  md:h-64 md:w-64"
                style={{ aspectRatio: "400/400", objectFit: "cover" }}
              />
            </div>
            <h1 className="text-2xl  font-bold md:text-5xl ">
              Geeks for Geeks RGUKT Nuzvid
            </h1>
            <div className="text-2xl font-bold md:text-5xl">
              Join us for <span id="typewriter"></span>{" "}
            </div>
          </div>
        </section>

        {/* <!-- About Section --> */}
            {/* Network with Industry Leaders
            Hands-on Learning Opportunities
            Collaborate with Driven Peers
            Supportive Tech Community
            Exclusive Career Resources
            Enhance Problem-Solving Skills */}
        <section data-aos="fade-up" id="about" className="py-12 md:py-18">
          {/* <div className="container mx-auto flex flex-col items-center gap-8 px-4 md:flex-row md:px-6">
            <div className="flex-1 flex justify-center">
              <div>
              <img
                src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20220512131412/Student-Chapter-Article-Banner.png"
                alt="About Image"
                width="500"
                height="500"
                className="h-48 w-48 md:h-64 md:w-64 rounded-lg object-cover"
                style={{ aspectRatio: '500/500', objectFit: 'cover' }}
              /></div>
            </div>
            <div className="flex-1 space-y-4">
              <h2 className="container text-3xl font-bold md:text-4xl">
                About Us
              </h2>
              <p className="text-lg">
                Welcome to the Geeks for Geeks student chapter at RGUKT Nuzvid!
                We are a community of passionate students who share a love for
                technology and programming. Our goal is to create a supportive
                environment where we can learn, collaborate, and grow together.
              </p>
              <p className="text-lg">
                Through our events, workshops, and projects, we aim to empower
                students with the skills and knowledge they need to succeed in
                the tech industry. Join us on this exciting journey as we
                explore the world of computer science and software development.
              </p>
            </div>
          </div> */}
          <div data-aos="fade-up" className="container mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 px-4 md:px-6 flex justify-center items-center">
  <div className="md:col-span-5 flex justify-center items-center">
    <img
      src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20220512131412/Student-Chapter-Article-Banner.png"
      alt="About Image"
      width="600"
      height="600"
      className="h-60 w-80 md:h-80 md:w-96 sm:h-80 sm:w-96 rounded-lg object-cover shadow-xxl  filter drop-shadow-xl custom-shadow"
      style={{ aspectRatio: '600/600', objectFit: 'cover' }}
    />
  </div>
  <div className="md:col-span-7 space-y-4">
    <h2 className="text-3xl font-bold md:text-4xl">
      About Us
    </h2>
    <p className="text-lg">
      Welcome to the Geeks for Geeks student chapter at RGUKT Nuzvid!
      We are a community of passionate students who share a love for
      technology and programming. Our goal is to create a supportive
      environment where we can learn, collaborate, and grow together.
    </p>
    <p className="text-lg">
      Through our events, workshops, and projects, we aim to empower
      students with the skills and knowledge they need to succeed in
      the tech industry. Join us on this exciting journey as we
      explore the world of computer science and software development.
    </p>
  </div>
</div>


        </section>

        {/* <!-- Core Team Section --> */}
        <section data-aos="fade-up" id="team" className="py-12 md:py-24">
  <div className="container mx-auto px-4 md:px-6">
    <h2 className="mb-8 text-3xl font-bold md:text-4xl">Core Team</h2>
    <div className="grid grid-cols-2 xsm:grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {teamMembers.map((member, index) => (
        <div
          key={index}
          className={`team-member-card relative rounded-lg bg-green-100 hover:shadow-lg p-4 shadow-md transition-transform`}
        >
          <img
            src={member.img_link}
            alt={`Team Member ${index + 1}`}
            width="300"
            height="300"
            className="mb-4 h-40 w-40 rounded-full object-cover"
            style={{ aspectRatio: '300/300', objectFit: 'cover' }}
          />
          <h3 className="mb-2 text-lg font-bold">{member.name}</h3>
          <p className="text-[#1a5a1a]">{member.position}</p>
        </div>
      ))}
    </div>
  </div>
</section>

    {/* FAQs Section */}

    <section data-aos="fade-up" id="faq-section" className="p-6 rounded-lg shadow-lg">
      <div className="container px-4 mx-auto">
        <h1 className="text-3xl font-bold md:text-4xl font-bold text-green-900 mb-4">Frequently Asked Questions</h1>
        <div id="accordion-flush ">
          {[
            {
              id: 1,
              question: "What is the Geeks for Geeks Student Chapter?",
              answer: "The Geeks for Geeks Student Chapter is a community-driven platform for students to enhance their technical skills through various workshops, coding competitions, and collaborative projects. Our goal is to provide a supportive environment for learning and growth in the field of technology."
            },
            {
              id: 2,
              question: "How can I become a member of the Geeks for Geeks Student Chapter?",
              answer: "To become a member of the Geeks for Geeks Student Chapter, you need to fill out our membership form available on our website. Once submitted, our team will review your application and get back to you with further details on the onboarding process."
            },
            {
              id: 3,
              question: "What types of events and activities are organized?",
              answer: "We organize a variety of events and activities, including coding workshops, hackathons, technical talks, and collaborative projects. These events are designed to enhance technical skills, foster collaboration, and provide networking opportunities with industry professionals."
            },
            {
              id: 4,
              question: "How can I get involved in organizing events?",
              answer: "If you’re interested in helping organize events, you can reach out to us through our contact form or join our organizing committee. We welcome enthusiastic members who want to contribute to the planning and execution of our activities."
            },
            {
              id: 5,
              question: "Where can I find more information about upcoming events?",
              answer: "You can find information about upcoming events on our website’s events page or follow us on social media for regular updates. We also send out newsletters to our members with details about upcoming activities."

            }
          ].map(({ id, question, answer }) => (
            /* border-b border-gray-200 */
            <div key={id} className="border-none hover:bg-none">
              <h2 id={`accordion-flush-heading-${id}`}>
                <button
                  type="button"
                  className="flex items-center justify-between w-full py-5 font-semibold text-muted text-left text-green-900 transition-colors duration-300 "
                  onClick={() => toggleAccordion(id)}
                >
                  <span>{question}</span><hr/>
                  <svg
                    className={`w-3 h-3 transform ${openIndex === id ? 'rotate-180' : ''} shrink-0 transition-transform duration-300`}
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 1l4 4 4-4"
                    />
                  </svg>
                </button>
              </h2>
              <div
                id={`accordion-flush-body-${id}`}
                className={`py-1  ${openIndex === id ? 'block' : 'hidden'}`}
              >
                <p className="text-gray-700 font-medium">{answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

        {/* Contact Us section */}
        {/* <section data-aos="fade-up" className="flex justify-center items-center py-12">
  <div className="flex flex-wrap justify-center items-center space-x-6 social-media">
    <a href="" className="text-[#1a5a1a] text-3xl transition-colors duration-300 hover:text-[#4CAF50]">
      <i className="fab fa-facebook"></i>
    </a>
    <a href="" className="text-[#1a5a1a] text-3xl transition-colors duration-300 hover:text-[#4CAF50]">
      <i className="fab fa-twitter"></i>
    </a>
    <a href="" className="text-[#1a5a1a] text-3xl transition-colors duration-300 hover:text-[#4CAF50]">
      <i className="fab fa-instagram"></i>
    </a>
    <a href="" className="text-[#1a5a1a] text-3xl transition-colors duration-300 hover:text-[#4CAF50]">
      <i className="fab fa-linkedin"></i>
    </a>
    <a href="" className="text-[#1a5a1a] text-3xl transition-colors duration-300 hover:text-[#4CAF50]">
      <i className="fab fa-github"></i>
    </a>
    <a href="" className="text-[#1a5a1a] text-3xl transition-colors duration-300 hover:text-[#4CAF50]">
      <i className="fab fa-youtube"></i>
    </a>
  </div>
</section> */}

        {/* Subscribe to Newsletter section */}
        <section data-aos="fade-up" className="bg-[#1a5a1a] py-12 md:py-24">
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
      </main>

      {/* <!-- Footer Section --> */}
      <footer className="bg-[#f0f8f0] py-6">
        <div className="container mx-auto flex items-center justify-center px-4 md:px-6">
          {/* <div className="flex justify-center"> */}
          <p className="text-sm text-center">
            © 2024 Geeks for Geeks RGUKT Nuzvid. All rights reserved.
          </p>
          {/* </div> */}
          {/* <nav className="flex gap-4">
            <a className="text-sm font-medium hover:text-[#1a5a1a]/80" href="">
              Privacy Policy
            </a>
            <a className="text-sm font-medium hover:text-[#1a5a1a]/80" href="">
              Terms of Service
            </a>
          </nav> */}
        </div>
      </footer>
    </div>
  );
}

export default App;
