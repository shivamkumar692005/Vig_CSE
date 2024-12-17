import ViewButton from "../ViewButton";
import { useState } from "react";

import Modal from "react-bootstrap/Modal";

const StudentResearch = () => {
  return (
    <div>
      <h1 className="heading text-vblue">Student Research</h1>
      <div className="mx-auto px-28 mt-6 w-full flex gap-5 justify-between">
        <Research
          data={{
            img: "image/research.jpeg",
            heading: "Smart Farming",
            desc: "A research based on famring based on farm data analysis.",
          }}
        />
        <Research
          data={{
            img: "image/research2.JPG",
            heading: "Brain Tumor Detection",
            desc: "A research based on brain tumor detection .",
          }}
        />
        <Research
          data={{
            img: "image/research3.JPG",
            heading: "Smart Irrigation System",
            desc: "A research based on smart irrigation system using IoT .",
          }}
        />
      </div>
    </div>
  );
};

function Research({ data }, props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="w-72 h-auto  p-2 flex flex-col  items-center gap-2 font-dm rounded-2xl hover:shadow-2xl hover:shadow-black transition-all duration-300 shadow-lg shadow-black ">
        <img src={data.img} alt="" className="rounded-2xl" />
        <div className="w-full flex p-3 flex-col gap-2 justify-center items-center text-center">
          <h1 className="font-bold text-xl text-vblue">{data.heading}</h1>
          <p className="text-lg font-fg">{data.desc}</p>
          <ViewButton onClick={handleShow} />
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
          <Modal.Title>Smart Farming</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-6">
                <img
                  id="modal-image"
                  src="image/research.jpeg"
                  alt="Faculty Image"
                  style={{ width: "100%", height: "20rem" }}
                  className="rounded-circle"
                />
              </div>

              <div className="col-md-6 font">
                <div className="row">
                  <h3 className="font-dm text-bold text-xl">Research</h3>
                  <p id="modal-interests">
                    This project focuses on developing a smart farming system
                    that utilizes data analytics to optimize crop yields and
                    resource management. The system integrates various sensors,
                    IoT devices, and machine learning algorithms to monitor soil
                    conditions, weather patterns, and crop health. The goal is
                    to improve efficiency, reduce waste, and enhance the overall
                    sustainability of farming practices.  
                  </p>
                  <hr />
                </div>

                <div className="row">
                  <h3 className="font-dm text-bold text-xl">Abstract</h3>
                  <p id="modal-engagements">
                    A smart farming system leveraging IoT sensors and machine
                    learning optimizes crop yields, monitors soil conditions,
                    analyzes weather patterns, and enhances resource management
                    for sustainable, efficient, and waste-reduced agricultural
                    practices.
                  </p>
                </div>
              </div>
            </div>

            <div className="row">
              <hr />
              <div className="col">
                <div className="row">
                  <h3>Research</h3>
                  <p id="modal-interests">
                    STI Hub for income generation and livelihood improvement of
                    Scheduled Caste Community of Guntur Dist, AP.
                  </p>
                  <hr />
                </div>

                <div className="row">
                  <h3>Abstract</h3>
                  <p id="modal-engagements">
                    This is to inform that the above mentioned project proposal
                    has been approved at a total cost of Rs.1,60,73,660/-
                    (Rs.95,26,000/- under General Component and Rs.65,47,660/-
                    towards Capital Assets) for duration of three years with an
                    initial release of Rs.95,39,660/- (Rs.29,92,000/- towards
                    General Component and Rs.65,47,660/- towards Capital Assets)
                    subject to the following conditions.
                  </p>
                  <hr />
                </div>

                <div className="row">
                  <h3>Academic Experience</h3>
                  <p id="modal-experience">
                    Over 15 years at Vignan Foundation for Science, Technology
                    and Research.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </>
  );
}

export default StudentResearch;
