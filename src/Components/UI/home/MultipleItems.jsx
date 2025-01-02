import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
// import { FacilityCard } from "./FacilityCard";
import FaciltyCard1 from "./FaciltyCard1";

const data = {
  classroom: {
    h1: "Smart Classrooms",
    img1: "image/classroom.jpg",
    img2: "image/classroom.jpg",
    img3: "image/classroom.jpg",
    img4: "image/classroom.jpg",
    img5: "image/classroom.jpg",
    video1: "video/classroom.mp4",
  },
  library: {
    h1: "Library",
    img1: "image/library.jpg",
    img2: "image/library.jpg",
    img3: "image/library.jpg",
    img4: "image/library.jpg",
    img5: "image/library.jpg",
    video1: "video/library.mp4",
  },
  conference: {
    h1: "Collaboration and Discussion Rooms",
    img1: "image/conference.jpg",
    img2: "image/conference.jpg",
    img3: "image/conference.jpg",
    img4: "image/conference.jpg",
    img5: "image/conference.jpg",
    video1: "video/conference.mp4",
  }
}

function MultipleItems({handleShow}) {
  const settings = {
    arrows:false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
  };
  return (
    <div className="mx-16 mt-15 ">
      
      <div className="slider-container mt-4">
        <Slider {...settings}>
          
          <div className="w-10 h-full p-3 ">
            <FaciltyCard1 handleShow={handleShow} img1={'image/classroom.jpg'} desc={{h1: 'Smart Classrooms', desc: ' Modern teaching tools, interactive displays, and multimedia resources to enhance learning.'}}/>
          </div>
          <div className="w-10 h-full p-3">
          <FaciltyCard1 handleShow={handleShow} img1={'https://vignan.ac.in/newvignan/departments/dep_assets/images/DeptLibraryGF_cse.jpg'} desc={{h1: 'Library ', desc: ' Extensive collection of books, journals, and online databases to support academic Research.'}}/>

          </div>
          <div className="w-10 h-full p-3">
          <FaciltyCard1 handleShow={handleShow} img1={'https://vignan.ac.in/newvignan/departments/dep_assets/images/ConferenceHallGF_cse.jpg'} desc={{h1: 'Collaboration and Discussion Rooms', desc: 'Designed for group study, project discussions, and team-based activities, learning and research.'}}/>

          </div>
          
        </Slider>
      </div>
      
    </div>
  );
}

export default MultipleItems;
