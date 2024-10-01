import Event from "../components/Event.jsx";
import ExploreMoreButton from "../components/ExploreMoreButton.jsx";

const Events = () => {
  return (
    <div className="home-events">
    <div className="dark:bg-[#111] pt-6 pb-12">
      <Event heading={"Upcoming Events"}/>
      {/* <div className="pt-6">
      <ExploreMoreButton destination="/events"/>
      </div> */}
    </div>
    </div>
  );
};

export default Events;
