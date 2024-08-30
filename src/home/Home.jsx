import { useEffect } from "react";


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

  //   To Hide the Context Menu
  useEffect(() => {
    const handleContextMenu = (e) => {
      e.preventDefault();
    };

    document.addEventListener("contextmenu", handleContextMenu);

    // Cleanup function to remove the event listener when the component unmounts
    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
    };
  }, []);



  return (
    <div className="bg-[#f0f8f0] text-[#1a5a1a] primary">
      <Navbar />
      <main>
        <Hero />
        <About/>
        <Events/>
        <Team/>
        <Faqs/>
        <Contact/>
      </main>
        <Footer/>
    </div>
  );
};
export default Home;
