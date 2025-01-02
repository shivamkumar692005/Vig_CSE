import { useState, useEffect, useRef } from "react";
import ViewButton from "../ViewButton";
import StudentResearch from "../home/StudentResearch";
import CountUp from "react-countup";

import Modal from "react-bootstrap/Modal";


const data = [
  {
    no: 1000,
    desc: (<>Publications in Research</>),
    plus: true 
  },
  {
    no: 200,
    desc: 'Journals',
    plus: true 
  },
  {
    no: 500,
    desc: 'Conference',
    plus: true 
  },
  {
    no: 200,
    desc: 'Departmental Research Groups',
    plus: true 
  },
  {
    no: 20,
    desc: 'Ph.D.s awarded',
    plus: true 
  },
  {
    no: 20,
    desc: 'Department Patents',
    plus: true
  }
]



const Research = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

 

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); 
        }
      },
      { threshold: 0.5 } 
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <section
        className="w-full mt-9 h-auto px-10 relative pb-10"
        ref={sectionRef}
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://vignan.ac.in/vignantest/departments/dep_assets/images/G-faci_heroimg_cse.jpg')",
          }}
        ></div>
        <div className="absolute inset-0 bg-backColor opacity-85"></div>

        <div className="w-full mx-auto relative flex flex-col items-center justify-center text-center text-white">
          <h1 className="text-3xl font-dm px-12 mt-12 mb-8 text-yellow text-center">Research</h1>
          <p className="text-center px-24 py-4 font-fg text-lg">
            The Computer Science Engineering (CSE) department focuses on
            cutting-edge research in areas such as artificial intelligence,
            machine learning, data science, cybersecurity, software engineering,
            and computer networks. Faculty and students actively engage in
            projects that address real-world problems, contributing to
            advancements in technology and innovation for diverse industries.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-4 w-full">
        {data.map((item, index) => (
                <div
                  key={index}
                  className={`transition-all duration-1000 ease-in-out transform ${
                    isVisible
                      ? "opacity-100 scale-100"
                      : "opacity-0 scale-90"
                  } flex flex-col items-center justify-center bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-lg shadow-md border border-white border-opacity-25`}
                >
                  <h2 className="text-yellow text-2xl font-bold">
                    {isVisible && (
                      <CountUp start={1} end={item.no} duration={3} />
                    )}
                   {item.plus ? <span className="ml-1">+</span> : <span className="ml-1">LPA</span>}
                    
                  </h2>
                  <p className="text-white text-nowrap text-center">{item.desc}</p>
                </ div>
              ))}
        </div>
      </section>

      <ResearchFacility />

      <StudentResearch />
    </>
  );
};

function ResearchFacility(props) {
  const data = [
    {
      image: 'https://vignan.ac.in/newvignan/departments/dep_assets/images/journeyofinsights_cse_1.jpg',
      heading: 'Research Labs',
      desc: 'Hitech research labs for all kind of research.'
    },
    {
      image: 'https://vignan.ac.in/newvignan/departments/dep_assets/images/csereserachfacility_4.jpg',
      heading: 'Conference Hall',
      desc: 'Conference Hall for Discussing and meetings.'
    },
    {
      image: 'https://vignan.ac.in/newvignan/departments/dep_assets/images/csereserachfacility_3.jpg',
      heading: 'Smart Library',
      desc: 'Smart Library for all kind of research.'
    }
  ]

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
  <>
    <div className="flex justify-evenly px-10 mx-10 font-dm">
        {data.map((item, index) => (
          <div
            key={index}
            className={`card card-compact bg-base-100 w-72 shadow-2xl mt-10 rounded-xl border-0 rounded-b-xl transition-all duration-1000 ease-in-out transform hover:shadow-lg hover:shadow-slate-600 `}
          >
            <figure>
              <img
                src= {item.image}
                alt={item.image}
                className="w-full h-56 object-cover"
              />
            </figure>
            <div className="card-body text-black p-3 bg-white rounded-b-xl">
              <h2 className="card-title text-vblue text-xl">{item.heading}</h2>
              <p className="text-lg font-fg">{item.desc}</p>
              <div className="card-actions justify-end ">
                <ViewButton onClick={handleShow}/>
              </div>
            </div>
          </div>
        ))}
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
          <Modal.Title>Research Labs</Modal.Title>
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
  )
}

export default Research;
