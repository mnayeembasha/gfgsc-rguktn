// Events.jsx
import '../App.css'
import Event from '../components/Event.jsx'
import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'
const Events = () => {


  return (
    <div className='primary min-h-[100vh]'>
      <Navbar/>
      <Event heading={"Upcoming Events"}/>
      <Footer/>
    </div>
  );
};

export default Events;
