import Slider from "react-slick";
import { FacilityCard } from "./FacilityCard";
import { useState } from "react";

import Modal from "react-bootstrap/Modal";
const OurAlluminies = (props) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
    <>
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

      <Modal
        show={show}
        onHide={handleClose}
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        scrollable
      >
        <Modal.Header closeButton>
          <Modal.Title>Alumini sucess</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-6">
                <img
                  id="modal-image"
                  src="image/student5.jpg"
                  alt="Faculty Image"
                  style={{ width: "100%", height: "20rem" }}
                  className="rounded-circle"
                />
              </div>

             <div className="col-6">
             <p>
                When I joined engineering college, I was just an average student
                with basic knowledge, but I was determined to improve. In the
                first year, I worked hard to understand programming and secured
                an 8.2 CGPA. By the second year, I joined coding clubs,
                participated in hackathons, and took online courses, raising my
                CGPA to 8.5. In my third year, I gained hands-on experience
                through an internship at a startup and improved my skills on
                platforms like LeetCode. By graduation, I consistently
                maintained an 8+ CGPA and secured a 4 LPA job at TCS.
              </p>
              <br />
              <p>
                At TCS, I worked diligently on projects, learned advanced
                technologies, and mastered system design. My evenings were spent
                on competitive programming and upskilling myself. After a few
                years of hard work, I cracked interviews at top product-based
                companies and joined Amazon. The journey from being an average
                student to achieving my dream job taught me the value of
                persistence and self-belief. It all started with small steps and
                the determination to keep learning.
              </p>
             </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </>
  );
};

export default OurAlluminies;
OurAlluminies;
