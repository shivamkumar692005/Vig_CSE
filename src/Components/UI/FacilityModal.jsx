import { useContext, useState } from "react";
import Modal from "react-bootstrap/Modal";

const FacilityModal = (props) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const data = useContext(DataContext);

  return (
    <>
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
          <Modal.Title>{data.h1}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="container-fluid">
            <div className="row mb-3">
              <div className="col-4">
                <div className="card">
                  <img
                    src={data.img1}
                    alt="Image 1"
                    className="card-img-top"
                    style={{ height: "250px", objectFit: "cover" }}
                  />
                </div>
              </div>
              <div className="col-4">
                <div className="card">
                  <img
                    src={data.img2}
                    alt="Image 2"
                    className="card-img-top"
                    style={{ height: "250px", objectFit: "cover" }}
                  />
                </div>
              </div>
              <div className="col-4">
                <div className="card">
                  <img
                    src={data.img3}
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
                    src={data.img4}
                    alt="Image 4"
                    className="card-img-top"
                    style={{ height: "250px", objectFit: "cover" }}
                  />
                </div>
              </div>
              <div className="col-4">
                <div className="card">
                  <img
                    src={data.img5}
                    alt="Image 5"
                    className="card-img-top"
                    style={{ height: "250px", objectFit: "cover" }}
                  />
                </div>
              </div>
              <div className="col-4">
                <div className="card">
                  <video
                    src={data.video1}
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
        <Modal.Footer></Modal.Footer>
      </Modal>
    </>
  );
};

export default FacilityModal;
