import { events } from "../data/data";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';
import { faClock } from '@fortawesome/free-solid-svg-icons';

const Event = ({heading}) => {
    return (
        <section  id="events" className="py-4 flex-grow">
        <div data-aos="fade-up" className="container mx-auto px-4 md:px-12 md:pt-12 md:pb-4 rounded-2xl">
          <h2 className="mb-8 text-3xl font-bold md:text-4xl text-[#1a5a1a] dark-green-grad">{heading}</h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
            {events.map((event) => (
              <div data-aos="fade-up" key={event.id} className="event-card rounded-lg bg-[#f0f8f0] bg-green-100 md:bg-green-200 p-5 shadow-md dark:bg-[#252525]">
                  <img
                    src={event.image}
                    alt={event.title}
                    width={300}
                    height={200}
                    className="mb-4 h-40 w-full rounded-lg object-cover"
                    style={{ aspectRatio: '300/200', objectFit: 'cover',objectPosition:'left'}}
                  />
                <h3 className="text-[#1a5a1a] text-green-900 mb-2 text-lg font-bold dark:text-gray-200 lime-green-grad">{event.title}</h3>
                <p className="text-[#1a5a1a] text-sm dark:text-gray-300">{event.description}</p>
                <div className="flex items-center gap-2 my-2">
                  <FontAwesomeIcon icon={faCalendar} className="text-[#1a5a1a] dark:text-gray-200 dark:text-green-200"/>
                  <span className="text-[#1a5a1a] text-green-800 text-sm font-medium dark:text-green-200">{event.date}</span>
                </div>
                <div className="flex items-center gap-2 my-2">
                <FontAwesomeIcon icon={faClock} className="text-[#1a5a1a] dark:text-gray-200 dark:text-green-200"/>
                  <span className="text-[#1a5a1a] text-green-800 text-sm font-medium dark:text-green-200">{event.time}</span>
                </div>
              </div>
            ))}
          </div>


        </div>
      </section>
    );
}

export default Event;