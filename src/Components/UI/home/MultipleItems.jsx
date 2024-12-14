import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
import { FacilityCard } from "./FacilityCard";


function MultipleItems({handleShow}) {
  const settings = {
    dots: true,
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
            <FacilityCard handleShow={handleShow}/>
          </div>
          <div className="w-10 h-full p-3">
          <FacilityCard />

          </div>
          <div className="w-10 h-full p-3">
          <FacilityCard />

          </div>
          <div className="w-10 h-full p-3">
          <FacilityCard />

          </div>
          <div className="w-10 h-full p-3">
          <FacilityCard />

          </div>
          <div className="w-10 h-full p-3">
          <FacilityCard />

          </div>
        </Slider>
      </div>
      
    </div>
  );
}

export default MultipleItems;
