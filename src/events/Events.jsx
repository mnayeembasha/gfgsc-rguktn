// Events.jsx
import '../App.css'
import Event from '../components/Event.jsx'
import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'
const Events = () => {


  return (
    <div className='min-h-screen flex flex-col'>
      <Navbar/>
      <div className='bg-[#DCF5DC] dark:bg-[#111] flex-grow'>
      <Event heading={"Upcoming Events"}/>
      </div>
      <Footer />
    </div>
  );
};

export default Events;
