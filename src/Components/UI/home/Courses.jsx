import Course from "./Course";

const Courses = () => {
  return (
    <>
      <h3 className="heading">
        Courses Offer for <br />{" "}
        <span className="text-vblue">Computer Science</span>
      </h3>

      <div className="container w-auto mx-28">
        <div className="slider-container1 mt-2">
          <div className="slider-track1 mt-3">
            <Course img={'image/aiml1.jpg'} text={'AI ML'}/>
            <Course img={'image/aiml2.jpg'} text={'AI ML'}/>
            <Course img={'image/aiml1.jpg'} text={'AI ML'}/>
            <Course img={'image/aiml.jpg'} text={'AI ML'}/>
            <Course img={'image/download.jpg'} text={'AI ML'}/>
            <Course img={'image/download.jpg'} text={'AI ML'}/>
            <Course img={'image/download.jpg'} text={'AI ML'}/>
            <Course img={'image/download.jpg'} text={'AI ML'}/>
            <Course img={'image/download.jpg'} text={'AI ML'}/>
            <Course img={'image/download.jpg'} text={'AI ML'}/>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default Courses;
