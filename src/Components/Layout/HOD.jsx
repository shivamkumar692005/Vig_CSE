import ViewButton from "../UI/ViewButton";

const HOD = () => {
  return (
    <div className="w-full">
      <h1 className="heading">
        HOD <span className="text-vblue">Message</span>
      </h1>
      <div className="h-64 mt-2 px-7 mx-8 flex justify-between items-center ">
        <div className="text-center w-1/2 font-normal font-dm text-lg">
          <p >
            Welcome to the Department of Computer Science and Engineering,
            Proudly accredited by internationally recognized ABET for six years
            up to 2030, along with national NBA and NAAC A+ accreditations.
          </p>
          <ViewButton />
        </div>
        <div className="w-96 h-64 flex items-center justify-center overflow-hidden ">
            <img src="https://vignan.ac.in/newvignan/departments/dep_assets/images/cse_hod_webp.jpg" alt="hod img" className="w-full h-full object-cover rounded-3xl" />
        </div>
      </div>
    </div>
  );
};

export default HOD;
