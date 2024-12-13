import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Rating from "./Rating"
import Slider from "react-slick";

function Carousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };
  return (
    <div className=" mx-10 mt-15 px-4">
        <Rating />
        <h3 className="text-3xl font-dm px-12 text-center">Our Prestigious Rankings and <span className="text-vblue">Accreditations</span></h3>
      <div className="slider-container mt-4">
        <Slider {...settings}>
          
          <div className="w-5 h-28 p-3">
            <img
              src="image/abet.jpg"
              alt=""
              className="w-full h-full object-contain"
            />
          </div>
          <div className="w-5 h-28 p-3">
            <img
              src="image/naac.jpg"
              alt=""
              className="w-full h-full object-contain"
            />
          </div>
          <div className="w-5 h-28 p-3">
            <img
              src="image/nba.jpg"
              alt=""
              className="w-full h-full object-contain"
            />
          </div>
          <div className="w-10 h-28 p-3">
            <img
              src="image/abet.jpg"
              alt=""
              className="w-full h-full object-contain"
            />
          </div>
          <div className="w-10 h-28 p-3">
            <img
              src="image/abet.jpg"
              alt=""
              className="w-full h-full object-contain"
            />
          </div>
          <div className="w-10 h-28 p-3">
            <img
              src="image/abet.jpg"
              alt=""
              className="w-full h-full object-contain"
            />
          </div>
        </Slider>
      </div>
      <div className="w-100 h-40 relative flex justify-center items-center mt-10 pt-3">
        <img src="image/pp.png" alt="" className="w-full h-full object-contain" />
        <img src="image/pp.png" alt="" className="w-full h-full object-contain" />

        <img src="image/pp.png" alt="" className="w-full h-full object-contain" />
        <img src="image/pp.png" alt="" className="w-full h-full object-contain" />

      </div>
    </div>
  );
}

export default Carousel;
