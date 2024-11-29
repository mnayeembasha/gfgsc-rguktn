
import {useEffect } from 'react';
import { Route, Routes,useLocation } from 'react-router-dom';
import AOS from "aos";
import "aos/dist/aos.css";

import Events from './events/Events.jsx';
import NotFound from './NotFound.jsx';
import Home from './home/Home.jsx'
import Blogs from './blogs/Blog.jsx'
import GateCS from './blogs/GateCS.jsx';
import Web3 from './blogs/Web3.jsx';
import DSASheet from './dsa-sheet/DSASheet.jsx';
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

   useEffect(() => {
    AOS.init({
      duration: 1000,
     });
  }, []);

  return (
    <Routes>
      <Route path="/">
      <Route index  element={<Home />} />
      <Route path="events" element={<Events />} />
      <Route path="dsa-sheet" element={<DSASheet />} />
      <Route path="resources" element={<Resources />} />
      <Route path="blogs">
        <Route index element={<Blogs/>}/>
        <Route path="gate-cs-2025-roadmap" element={<GateCS />} />
        <Route path="web3-newage-internet" element={<Web3 />} />
      </Route>
      <Route path="dsa-contest" element={<DSAContest/>}/>
      <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
export default App;