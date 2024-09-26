
import { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import AOS from "aos";
import "aos/dist/aos.css";

import Events from './events/Events.jsx';
import NotFound from './NotFound.jsx';
import Home from './home/Home.jsx'
import Blogs from './blogs/Blog.jsx'
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
    // <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/events" element={<Events />} />
      <Route path="/blogs" element={<Blogs />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  // </Router>
  );
}
export default App;