import ExploreMoreButton from "../components/ExploreMoreButton.jsx";
import EventCard from '../components/EventCard.jsx';
import { events } from "../data/data";
const Events = () => {
  return (
    <div className="home-events">
    <div className=" py-8">
    <div  id="events" className="bg-primary-light dark:bg-primary-dark  flex-grow">
        <div data-aos="fade-up" className="container mx-auto px-4 md:px-12 md:pt-4 md:pb-4 rounded-2xl">
          <h2 className="mb-8 text-3xl font-bold md:text-4xl text-heading-green dark-green-grad">Our  Events</h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
            {events.map((event) => (
              <EventCard id={event.id} image={event.image} title={event.title} description={event.description} date={event.date} time={event.time} />
            ))}
          </div>

        </div>
      </div>
    </div>
    </div>
  );
};

export default Events;
