import Slider from "react-slick";
import { ReviewCard } from "./ReviewCard";

function ReviewSlider() {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,      // Show only one slide at a time
        slidesToScroll: 1,    // Move one slide at a time
        autoplay: true,
        speed: 2000,          // Transition animation duration (milliseconds)
        autoplaySpeed: 4000,  // Delay between each slide transition (milliseconds)
        cssEase: "ease-in-out" // Smooth easing animation
      };
      
  return (
    <div className="slider-container mx-10">
      <Slider {...settings}>
        <div>
          <ReviewCard img={'image/student1.jpg'}/>
        </div>
        <div>
          <ReviewCard img={'image/student2.jpg'}/>
        </div>
        <div>
          <ReviewCard img={'image/student3.jpg'}/>
        </div>
        <div>
          <ReviewCard img={'image/student4.jpg'}/>
        </div>
        <div>
          <ReviewCard img={'image/student5.jpg'}/>
        </div>
        <div>
          <ReviewCard img={'image/student6.jpg'}/>
        </div>
      </Slider>
    </div>
  );
}

export default ReviewSlider;
