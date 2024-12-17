import MultipleItems from "./MultipleItems";
import { useState } from "react";

import Modal from "react-bootstrap/Modal";

const Facilities = (props) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <h1 className="heading text-vblue">Facilities</h1>
      <MultipleItems handleShow={handleShow} />

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
          <Modal.Title>Smart Classromms</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="container-fluid">
            <div className="row mb-3">
              <div className="col-4">
                <div className="card">
                  <img
                    src="image/lab1.jpg"
                    alt="Image 1"
                    className="card-img-top"
                    
                    style={{ height: "250px", objectFit: "cover" }}
                  />
                </div>
              </div>
              <div className="col-4">
                <div className="card">
                  <img
                    src="image/lab2.jpg"
                    alt="Image 2"
                    className="card-img-top"
                    
                    style={{ height: "250px", objectFit: "cover" }}
                  />
                </div>
              </div>
              <div className="col-4">
                <div className="card">
                  <img
                    src="image/lab3.jpg"
                    alt="Image 1"
                    className="card-img-top"
                    
                    style={{ height: "250px", objectFit: "cover" }}
                  />
                </div>
              </div>
            </div>

            <div className="row mb-3">
              <div className="col-4">
                <div className="card">
                  <img
                    src="image/lab4.jpg"
                    alt="Image 4"
                    className="card-img-top"
                    
                    style={{ height: "250px", objectFit: "cover" }}
                  />
                </div>
              </div>
              <div className="col-4">
                <div className="card">
                  <img
                    src="image/lab5.jpg"
                    alt="Image 5"
                    className="card-img-top"
                    
                    style={{ height: "250px", objectFit: "cover" }}
                  />
                </div>
              </div>
              <div className="col-4">
                <div className="card">
                  <video
                    src="video/lab.mp4"
                    className="object-fit-contain"
                    style={{ height: "250px", objectFit: "fill" }}
                    autoPlay
                    muted
                  ></video>
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          
         
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Facilities;
