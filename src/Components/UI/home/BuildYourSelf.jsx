// import ViewButton from "../ViewButton";
import { useState, useEffect, useRef } from "react";
import CountUp from "react-countup";


const placementData = [
  {
    no: 9000,
    desc: "Placement Offers",
    plus: true 
  },
  {
    no: 500,
    desc: 'Companies Visted',
    plus: true 
  },
  {
    no: 500,
    desc: 'Got 5LPA',
    plus: true 
  },
  {
    no: 300,
    desc: 'Got 7LPA',
    plus: true 
  },
  {
    no: 200,
    desc: 'Got 10LPA',
    plus: true 
  },
  {
    no: 20,
    desc: 'Highest Package',
    plus: false
  }
]
const BuildYourSelf = () => {
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
    <div className="mt-9 w-full ">
      <h3 className="heading">
        Build Your <span className="text-vblue">Self</span>
      </h3>
      <div className="flex justify-center items-center px-3 overflow-hidden mt-4 font-dm">
        <div className="w-1/2 grid grid-rows-2 grid-cols-2 gap-2 overflow-hidden">
          <Students img='image/student1.jpg'/>
          <Students img='image/student2.jpg'/>
          <Students img='image/student6.jpg'/>
          <Students img='image/student5.jpg'/>
          
          
        </div>

        <div className="w-1/2 relative" ref={sectionRef}>
          <div
            className="absolute inset-0 bg-cover bg-center rounded-r-2xl"
            style={{
              backgroundImage:
                "url('https://vignan.ac.in/vignantest/departments/dep_assets/images/G-faci_heroimg_cse.jpg')",
            }}
          ></div>

          <div className="absolute inset-0 bg-backColor opacity-85 rounded-r-2xl"></div>

          <div className="relative flex flex-col items-center justify-center text-white p-6 space-y-6">
            <div className="text-center">
              <h2 className="text-3xl font-bold">Placements Overview</h2>
              <p className="text-lg font-fg mt-2">
                The World&apos;s Leading Companies Hire Our Talent
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4 w-full mt-9 py-10">
              {placementData.map((item, index) => (
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
                  <p className="text-white text-nowrap">{item.desc}</p>
                </ div>
              ))}
            </div>
            {/* <div className="flex gap-5">
              <ViewButton />
              <ViewButton />
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};


function Students({img}) {
  return (
    <div className="w-full h-56  flex items-center justify-center ">
        <img
          src={img}
          alt="Image 1"
          className="w-full h-full object-contain"
        />
    </div>
  );
}

export default BuildYourSelf;
