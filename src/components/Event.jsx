import { events } from "../data/data";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';
import { faClock } from '@fortawesome/free-solid-svg-icons';

const Event = ({heading}) => {
    return (
        <section  id="events" className="dark:bg-[#111] py-4 flex-grow">
        <div data-aos="fade-up" className="container mx-auto px-4 md:px-12 md:pt-4 md:pb-4 rounded-2xl">
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


            {/* Design with event-background card */}

            {/* {events.map((event) => (
  <div
    key={event.id}
    data-aos="fade-up"
    className="event-card relative rounded-lg p-5  bg-cover bg-center"
    style={{
      backgroundImage: `url('/assets/event.png')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}
  >

    <div className="absolute inset-0 opacity-40 rounded-lg"></div>


    <div className="flex justify-center relative z-10">
  <img
    src={event.image}
    className="mb-4 h-[4.5rem] w-[45%] md:w-[45%] rounded-lg object-cover"
    style={{
      aspectRatio: '300/500',
      objectFit: 'cover',
      objectPosition: 'left',
      position: 'relative',
      top: '68px',
      mixBlendMode:'overlay',
       filter: 'brightness(0.9) contrast(1.1)',
      opacity: '1',
    }}
  />
</div>



    <h3 className="relative z-10 text-center text-2xl font-extrabold text-[#f0f0f0] dark:text-gray-100 mb-2 mt-4"
       style={{
      position: 'relative',
      top: '42px',
      opacity: '0.8',
      textShadow:' 2px 2px 10px rgba(0, 0, 0, 1)',
    }}>
      {event.title}
    </h3>

    <div className="flex justify-between relative z-10 text-center text-white text-sm font-medium mb-4 mt-4" style={{
      top: '28px'
    }}>
      <div className="flex items-center justify-center gap-2">
        <FontAwesomeIcon icon={faCalendar} className="text-amber-200 dark:text-gray-300" />
        <span className="text-amber-200 dark:text-gray-300">{event.date}</span>
      </div>
      <div className="flex items-center justify-center gap-2">
        <FontAwesomeIcon icon={faClock} className="text-amber-200 dark:text-gray-300" />
        <span className="text-amber-200 dark:text-gray-300">{event.time}</span>
      </div>
    </div>
  </div>
))} */}

          </div>


        </div>
      </section>
    );
}

export default Event;