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

  const handleShow = true;
  return (
    <div className="w-full  ">
      <h1 className="heading">
        Our <span className="text-vblue">Alumnies</span>
      </h1>
      <div className="mx-16 mt-15 ">
        <div className="slider-container mt-4">
          <Slider {...settings}>


            <div className="w-10 h-full p-3">
              <FacilityCard
                handleShow={handleShow}
                img1={"image/student4.jpg"}
                desc={{
                  h1: "Kumar Nath",
                  desc: (
                    <>
                      SD1 Google 
                      <br />
                      Batch: 2018-2022
                    </>
                  ),
                }}
              />
            </div>
            <div className="w-10 h-full p-3">
              <FacilityCard
                handleShow={handleShow}
                img1={"image/student2.jpg"}
                desc={{
                  h1: "Rahul Vanka",
                  desc: (
                    <>
                      Meta 
                      <br />
                      Batch: 2017-2023
                    </>
                  ),
                }}
              />
            </div>
            <div className="w-10 h-full p-3">
              <FacilityCard
               handleShow={handleShow}
               img1={"image/student3.jpg"}
               desc={{
                 h1: "Pallavi Kumari",
                 desc: (
                   <>
                     TCS
                     <br />
                     Batch: 2019-2024
                   </>
                 ),
               }}
              />
            </div>
            <div className="w-10 h-full p-3">
              <FacilityCard
               handleShow={handleShow}
               img1={"image/student5.jpg"}
               desc={{
                 h1: "Sujitha",
                 desc: (
                   <>
                     IBM 
                     <br />
                     Batch: 2011-2025
                   </>
                 ),
               }}
              />
            </div>
            <div className="w-10 h-full p-3">
              <FacilityCard
               handleShow={handleShow}
               img1={"image/student6.jpg"}
               desc={{
                 h1: "Keerthi",
                 desc: (
                   <>
                     Amazon 
                     <br />
                     Batch: 2013-2018
                   </>
                 ),
               }}
              />
            </div>
            
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default OurAlluminies;
OurAlluminies;
