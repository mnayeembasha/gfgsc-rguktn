// Events.jsx
import './App.css'
import {events} from './data/data'
const Events = () => {


  return (
    <div className='primary min-h-[100vh]'>
    <section data-aos="fade-up" id="events" className="py-4 md:py-8 ">
        <div data-aos="fade-up" className="container mx-auto px-4 md:px-6">
          <h2 className="mb-8 text-3xl font-bold md:text-4xl">Our Events</h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {events.map((event) => (
              <div data-aos="fade-up" key={event.id} className="rounded-lg bg-white p-4 shadow-md">
                <img
                  src="/assets/fullstack.jpg"
                  alt={event.title}
                  width={300}
                  height={200}
                  className="mb-4 h-40 w-full rounded-lg object-cover"
                  style={{ aspectRatio: '300/200', objectFit: 'cover' }}
                />
                <h3 className="mb-2 text-lg font-bold">{event.title}</h3>
                <p className="text-[#1a5a1a] text-sm">{event.description}</p>
                <div className="flex items-center gap-2 my-2">
                  {/* <img
                    src="https://cdn.jsdelivr.net/npm/bootstrap-icons/icons/calendar.svg"
                    alt="Calendar Icon"
                    className="w-4 h-4 text-[#1a5a1a]"
                  /> */}
                 <i className="bi bi-calendar4-event text-gray-900"></i>

                  <span className="text-sm font-medium">{event.date}</span>
                </div>
              </div>
            ))}
          </div>


        </div>
      </section>
    </div>
  );
};

export default Events;
