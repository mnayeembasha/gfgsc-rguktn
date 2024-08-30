
import { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AOS from "aos";
import "aos/dist/aos.css";

import Events from './Events';
import Home from './home/Home.jsx'
function App(){

   //Apply animation on scroll
   useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/events" element={<Events />} />
      {/* <Route path="*" element={<NotFound />} />  */}
    </Routes>
  </Router>
  );
}
export default App;