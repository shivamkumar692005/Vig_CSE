

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
              <EventCard data={{img: "image/mahotsav.jpeg", heading : "Mahtosav"}}/>
              <EventCard data={{img: "image/stackHack.JPG", heading : "Stack Hack"}}/>
              <EventCard  data={{img: "image/sujnank.JPG", heading : "Srujanankura"}}/>
              <EventCard data={{img: "image/vcode.JPG", heading : "V-Code"}}/>
              <EventCard data={{img: "image/mahotsav.jpeg", heading : "Mahtosav"}}/>
              <EventCard data={{img: "image/stackHack.JPG", heading : "Stack Hack"}}/>
              <EventCard  data={{img: "image/sujnank.JPG", heading : "Srujanankura"}}/>
              <EventCard data={{img: "image/vcode.JPG", heading : "V-Code"}}/>
            </div>
          </div>
        </div>
    </>
  );
};

export default UpcommingEvents;
