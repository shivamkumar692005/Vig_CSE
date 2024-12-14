
import { EventCard } from "./EventCard";

const UpcommingEvents = () => {
  return (
    <>
      <h1 className="heading">
        Upcoming <span className="text-vblue">Events</span>
      </h1>
      
        <div className="container w-auto mx-20">
          <div className="slider-container1 mt-2">
            <div className="slider-track1 mt-3">
              <EventCard />
              <EventCard />
              <EventCard />
              <EventCard />
              <EventCard />
              <EventCard />
              <EventCard />
              <EventCard />
              <EventCard />
              <EventCard />
            </div>
          </div>
        </div>
    </>
  );
};

export default UpcommingEvents;
