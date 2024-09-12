import { events } from "../data/data";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';
import { faClock } from '@fortawesome/free-solid-svg-icons';

const Event = () => {
    return (
        <section data-aos="fade-up" id="events" className="py-4 md:py-8">
        <div data-aos="fade-up" className="container mx-auto px-4 md:px-12 md:py-12 rounded-2xl">
          <h2 className="mb-8 text-3xl font-bold md:text-4xl">Upcoming Events</h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
            {events.map((event) => (
              <div data-aos="fade-up" key={event.id} className="rounded-lg bg-[#f0f8f0] bg-green-100 p-4 shadow-md">
                <img
                  src={event.image}
                  alt={event.title}
                  width={300}
                  height={200}
                  className="mb-4 h-40 w-full rounded-lg object-cover"
                  style={{ aspectRatio: '300/200', objectFit: 'cover' }}
                />
                <h3 className="text-[#1a5a1a] text-green-900 mb-2 text-lg font-bold">{event.title}</h3>
                <p className="text-[#1a5a1a] text-sm">{event.description}</p>
                <div className="flex items-center gap-2 my-2">
                  <FontAwesomeIcon icon={faCalendar} className="text-[#1a5a1a]"/>
                  <span className="text-[#1a5a1a] text-green-800 text-sm font-medium">{event.date}</span>
                </div>
                <div className="flex items-center gap-2 my-2">
                <FontAwesomeIcon icon={faClock} className="text-[#1a5a1a]"/>
                  <span className="text-[#1a5a1a] text-green-800 text-sm font-medium">{event.time}</span>
                </div>
              </div>
            ))}
          </div>


        </div>
      </section>
    );
}

export default Event;