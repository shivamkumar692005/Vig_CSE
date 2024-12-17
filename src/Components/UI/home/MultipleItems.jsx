import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
import { FacilityCard } from "./FacilityCard";


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
          
          <div className="w-10 h-full p-3">
            <FacilityCard handleShow={handleShow} img1={'image/classroom.jpg'} desc={{h1: 'Smart Classrooms', desc: ' Modern teaching tools, interactive displays, and multimedia resources to enhance learning.'}}/>
          </div>
          <div className="w-10 h-full p-3">
          <FacilityCard handleShow={handleShow} img1={'https://vignan.ac.in/newvignan/departments/dep_assets/images/DeptLibraryGF_cse.jpg'} desc={{h1: 'Library ', desc: ' Extensive collection of books, journals, and online databases to support academic learning and research.'}}/>

          </div>
          <div className="w-10 h-full p-3">
          <FacilityCard handleShow={handleShow} img1={'https://vignan.ac.in/newvignan/departments/dep_assets/images/ConferenceHallGF_cse.jpg'} desc={{h1: 'Collaboration and Discussion Rooms', desc: 'Designed for group study, project discussions, and team-based activities.'}}/>

          </div>
          
        </Slider>
      </div>
      
    </div>
  );
}

export default MultipleItems;
