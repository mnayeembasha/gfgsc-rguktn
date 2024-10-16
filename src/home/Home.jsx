import { useState,useEffect } from "react";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import tippy from 'tippy.js';
// import 'tippy.js/dist/tippy.css';

import "./Home.css";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import Hero from "./Hero";
import About from "./About";
import Events from "./Events";
import Team from "./Team";
import Faqs from "./Faqs";
import Contact from "./Contact";
import ExploreSections from "./ExploreSections.jsx";

const Home = () => {
  useEffect(() => {
    const handleContextMenu = (e) => {
      e.preventDefault();
    };

    document.addEventListener("contextmenu", handleContextMenu);

    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
    };
  }, []);

   //scrolltoTop button
  //  useEffect(() => {
  //   tippy('#scroll-to-top-button', {
  //     content: 'Scroll to top',
  //     theme: {theme},
  //   });
  // }, []);

  const [scrollToTopButton, setScrollToTopButton] = useState(false);

  // Function to scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // Function to track scroll position
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const documentHeight = document.documentElement.scrollHeight;
      const windowHeight = window.innerHeight;

      // Show button if scrolled more than 300px, hide if near the footer
      if (scrollY > 300 && scrollY + windowHeight < documentHeight - 100) {
        setScrollToTopButton(true);
      } else {
        setScrollToTopButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <div className="min-h-screen flex flex-col bg-[#f0f8f0] text-[#1a5a1a] primary">
      <Navbar />
      <main>
        <Hero />
        <div className="bg-[#DCF5DC] dark:bg-[#1a1c1f]">
        <About />
        <Events/>
        {/* <BlogsShowCase/>
        <ResourcesShowCase/> */}
        <ExploreSections/>
        <Team />
        <Faqs />
        <Contact />
        </div>
      </main>
      {/* Scroll-to-Top Button */}
      {scrollToTopButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 h-12 w-12 flex items-center justify-center bg-gradient-to-b from-green-500 to-green-700  dark:from-green-400 dark:to-green-500 text-white rounded-full shadow-lg hover:bg-green-600 dark:bg-green-700 dark:hover:bg-green-800 transition duration-300 ease-in-out"
        >
          <i className="bi bi-arrow-up"></i>
        </button>
      )}
      <Footer />
      <ToastContainer
        position="top-center"
        autoClose={4000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
        draggable
        theme="light"
        style={{zIndex:9999}}
      />


    </div>
  );
};

export default Home;
