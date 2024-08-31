import { events } from "../data/data";

const Events = () => {
    return (
        <section data-aos="fade-up" id="events" className="py-4 md:py-8">
        <div data-aos="fade-up" className="container mx-auto px-4 md:px-6">
          <h2 className="mb-8 text-3xl font-bold md:text-4xl">Upcoming Events</h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
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
                <h3 className="mb-2 text-lg font-bold">{event.title}</h3>
                <p className="text-[#1a5a1a] text-sm">{event.description}</p>
                <div className="flex items-center gap-2 my-2">
                  {/* <img
                    src="https://cdn.jsdelivr.net/npm/bootstrap-icons/icons/calendar.svg"
                    alt="Calendar Icon"
                    className="w-4 h-4 text-[#1a5a1a]"
                  /> */}
                 <i className="bi bi-calendar4-event calendar-icon text-gray-900"></i>

                  <span className="text-sm font-medium">{event.date}</span>
                </div>
              </div>
            ))}
          </div>


        </div>
        <div className="container flex justify-center mx-auto pt-4 md:pt-8">
        {/* <button type="button" className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Read More</button> */}
        <a
    href="/events"
    className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800"
  >
    <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
      See More
    </span>
  </a>

        </div>
      </section>
    );
}

export default Events;