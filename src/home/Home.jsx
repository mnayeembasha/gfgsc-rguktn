import { useEffect } from "react";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
