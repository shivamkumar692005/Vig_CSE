import ViewButton from "../ViewButton";
import { useState } from "react";

import Modal from "react-bootstrap/Modal";

const HOD = (props) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      {/* <div className="w-full px-14 bg-[#C3DDFF]  pb-10 mt-5">
        <h1 className="heading pt-10">
          HOD <span className="text-vblue">Message</span>
        </h1>
        <div className="h-64 mt-4 px-7 mx-8 flex justify-between items-center ">
          <div className="text-center w-1/2 font-normal font-spro font-fg text-lg leading-7">
            <p>
              Welcome to the Department of Computer Science and Engineering,
              Proudly accredited by internationally recognized ABET for six
              years up to 2030, along with national NBA and NAAC A+
              accreditations.
            </p>
            <ViewButton onClick={handleShow} />
          </div>
          <div className="w-96 h-64 flex items-center justify-center overflow-hidden ">
            <img
              src="https://vignan.ac.in/newvignan/departments/dep_assets/images/cse_hod_webp.jpg"
              alt="hod img"
              className="w-full h-full object-cover rounded-3xl"
            />
          </div>
        </div>
      </div> */}
      <div className="w-full px-8 py-16 mt-5 bg-gray-50 flex justify-center ">
        <div className="w-full max-w-6xl bg-white shadow-2xl rounded-3xl overflow-hidden flex flex-col md:flex-row items-center hover:shadow-xl">
          {/* Image Section */}
          <div className="w-full md:w-1/3 flex justify-center p-12 bg-gradient-to-br from-blue-100 to-blue-300 rounded-sm">
            <img
              src="https://vignan.ac.in/newvignan/departments/dep_assets/images/cse_hod_webp.jpg"
              alt="HOD"
              className="w-48 h-48 rounded-full border-4 border-white shadow-md object-cover"
            />
          </div>

          {/* Text Section */}
          <div className="w-full md:w-2/3 px-8 py-6 text-center md:text-left">
            <h1 className="text-3xl  text-gray-800 mb-4 font-dm">
              HOD <span className="text-vblue">Message</span>
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed mb-6 font-fg">
              Welcome to the Department of Computer Science and Engineering,
              proudly accredited by internationally recognized ABET for six
              years up to 2030, along with national NBA and NAAC A+
              accreditations.
            </p>

            {/* Button */}
            <div className="flex justify-center md:justify-start">
              <ViewButton onClick={handleShow} />
            </div>
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
          <Modal.Title>
            <h1>Hod Message</h1>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-6">
                <img
                  id="modal-image"
                  src="image/hod.JPG"
                  alt="Faculty Image"
                  style={{ width: "85%", height: "18rem" }}
                  className="rounded-circle"
                />
              </div>

              <div className="col-md-6 font">
                <div className="row">
                  <p>
                    Welcome to the Department of Computer Science and
                    Engineering, Proudly accredited by internationally
                    recognized ABET for six years up to 2030, along with
                    national NBA and NAAC A+ accreditations.
                  </p>
                  <br />
                  <p>
                    Our commitment to excellence drives innovation in education,
                    research, and industry collaboration, empowering our
                    students to emerge as Leaders in the tech world. Our
                    curriculum integrates problem-solving skills by providing
                    hands-on practice in programming and algorithms. Students
                    are motivated to carry out globally recognized
                    certifications from AWS, Google, and Cisco to validate
                    expertise in specialized areas like cloud computing and
                    cybersecurity and get a distinct edge in improving their
                    placements.
                  </p>
                </div>
              </div>
            </div>
            <div className="text-end my-10">
            <p className="">
            Warm regards,
            <br />
            <b>
              <i>Prof. S V Phani Kumar</i>
            </b>
          </p>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          {/* <p className="absolute left-2">
            Warm regards,
            <br />
            <b>
              <i>Prof. S V Phani Kumar</i>
            </b>
          </p>
          <br />
          <br /> */}
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default HOD;
