import ViewButton from "../ViewButton";
import { useState } from "react";

import Modal from "react-bootstrap/Modal";

const HOD = (props) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="w-full px-14 bg-[#C3DDFF]  pb-10 mt-5">
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
          <p>
            Welcome to the Department of Computer Science and Engineering,
            Proudly accredited by internationally recognized ABET for six years
            up to 2030, along with national NBA and NAAC A+ accreditations.
          </p>
          <br />
          <p>
            Our commitment to excellence drives innovation in education,
            research, and industry collaboration, empowering our students to
            emerge as Leaders in the tech world. Our curriculum integrates
            problem-solving skills by providing hands-on practice in programming
            and algorithms. Students are motivated to carry out globally
            recognized certifications from AWS, Google, and Cisco to validate
            expertise in specialized areas like cloud computing and
            cybersecurity and get a distinct edge in improving their placements.
          </p>
          <br />
          <p>
            In addition, students design and develop solutions in emerging
            fields such as AI, Cybersecurity, Data Science, Blockchain, and
            Quantum Computing as part of their coursework and have published
            more than 200+ articles in IEEE/ Springer Conferences.
          </p>
          <br />
          <p>
            Our students demonstrate their expertise and creativity through
            outstanding achievements in prestigious competitions like the
            Flipkart Grid Challenge, Cisco Ideathon, and Amazon WoW. With all
            the above practices, we consistently achieve 85% placements
            annually, making Placement a hallmark of our program
          </p>
          <p>
            Over the last five years, we have published more than 250 articles
            in SCI/ E and Scopus-indexed journals. This commitment ensures we
            maintain high academic standards and continuously contribute to
            meaningful, impactful research. <br /><br />We transform the students into
            industry-ready by focusing on cutting-edge programs, strategic
            partnerships, research excellence, and higher placement
            opportunities.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <p className="absolute left-2">
            Warm regards,
            <br />
            <b>
              <i>Prof. S V Phani Kumar</i>
            </b>
          </p>
          <br />
          <br />
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default HOD;
