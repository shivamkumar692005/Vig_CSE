import Slider from "react-slick";
import { FacilityCard } from "./FacilityCard";

const OurAlluminies = () => {

    const settings = {
        infinite: true, 
        speed: 500, 
        slidesToShow: 3, 
        slidesToScroll: 1,
        autoplay: true, 
        autoplaySpeed: 3000, 
        arrows: true, 
        dots: true,
        rtl: false, 
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2, 
            },
          },
          {
            breakpoint: 640,
            settings: {
              slidesToShow: 1, 
            },
          },
        ],
      };


  return (
    <div className="w-full  ">
      <h1 className="heading">Our <span className="text-vblue">Alumnies</span></h1>
      <div className="mx-16 mt-15 ">
       
       <div className="slider-container mt-4">
         <Slider {...settings}>
           
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
           <div className="w-10 h-full p-3">
           <FacilityCard />
 
           </div>
         </Slider>
       </div>
       
     </div>

    </div>
  );
};

export default OurAlluminies;
OurAlluminies