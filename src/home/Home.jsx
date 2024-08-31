import { useEffect } from "react";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import "./Home.css";
import Navbar from "./Navbar";
import Hero from "./Hero";
import About from "./About";
import Events from "./Events";
import Team from "./Team";
import Faqs from "./Faqs";
import Contact from "./Contact";
import Footer from "./Footer";

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

  return (
    <div className="bg-[#f0f8f0] text-[#1a5a1a] primary">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Events />
        <Team />
        <Faqs />
        <Contact />
      </main>
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
