
import { useState,useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import AOS from "aos";
import "aos/dist/aos.css";

import Events from './events/Events.jsx';
import NotFound from './NotFound.jsx';
import Home from './home/Home.jsx'
import Blogs from './blogs/Blog.jsx'
import GateCS from './blogs/GateCS.jsx';
import Web3 from './blogs/Web3.jsx';
import DSASheet from './dsasheet/DSASheet.jsx';
import Resources from './resources/Resources.jsx';
import DSAContest from './dsa-contest/DSAContest.jsx';
function App(){

  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);
   //Apply animation on scroll
   useEffect(() => {
    AOS.init({
      duration: 1000,
     });
  }, []);

  return (
    //  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/events" element={<Events />} />
      <Route path="/dsa-sheet" element={<DSASheet />} />
      <Route path="/resources" element={<Resources />} />
      <Route path="/blogs" element={<Blogs />} />
        <Route path="/blogs/gate-cs-2025-roadmap" element={<GateCS />} />
        <Route path="/blogs/web3-newage-internet" element={<Web3 />} />
      <Route path="/dsa-contest" element={<DSAContest/>}/>
      <Route path="*" element={<NotFound />} />
    </Routes>

  //  </Router>
  );
}
export default App;