import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-solid-svg-icons";

const EventCard = ({ id, image, title, description, date, time }) => {
  return (
    <div
      data-aos="fade-up"
      key={id}
      className="event-card rounded-lg  p-4 shadow-md dark:bg-card-dark"
    >
      <img
        src={image}
        alt={title}
        width={300}
        height={200}
        className="mb-4 h-40 w-full rounded-lg object-cover"
        style={{
          aspectRatio: "300/200",
          objectFit: "cover",
          objectPosition: "left",
        }}
      />
      <div className="flex flex-col items-between justify-between">
        <h3 className="text-green-900 mb-2 text-xl font-bold dark:text-gray-200 lime-green-grad">
          {title}
        </h3>
        <p className="text-[#1a5a1a] text-md dark:text-gray-300">
          {description}
        </p>
        <div>
          <div className="flex items-center gap-2 my-2">
            <FontAwesomeIcon
              icon={faCalendar}
              className="text-[#1a5a1a] dark:text-gray-200 dark:text-green-200"
            />
            <span className="text-[#1a5a1a] text-green-800 text-sm font-medium dark:text-green-200">
              {date}
            </span>
          </div>
          <div className="flex items-center gap-2 my-2">
            <FontAwesomeIcon
              icon={faClock}
              className="text-[#1a5a1a] dark:text-gray-200 dark:text-green-200"
            />
            <span className="text-[#1a5a1a] text-green-800 text-sm font-medium dark:text-green-200">
              {time}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
