// Events.jsx
import '../App.css'
import Event from '../components/Event.jsx'
import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'
const Events = () => {


  return (
    <div className='primary no-grid-bg min-h-screen flex flex-col'>
      <Navbar/>
      <Event heading={"Upcoming Events"}/>
      <Footer />
    </div>
  );
};

export default Events;
