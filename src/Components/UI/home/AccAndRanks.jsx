import Rankings from "./Rankings";

const AccAndRanks = () => {
  return (
    <>
     <h3 className=" text-3xl font-dm px-5 mt-14">
     Accreditation &  <br />{" "}
        <span className="text-vblue">Rankings</span>
      </h3>
      <div className=" mx-16 flex gap-24 p-12 justify-center items-center">
        <div className="flex flex-col gap-5">
        <Rankings img={'image/naac.svg'} text='NACCA+' color='text-yellow'/>
        <Rankings img={'image/abet.png'} text='ABET' color='text-vblue'/>
        </div>
        <div className="flex flex-col gap-5">
        <Rankings  img={'image/nba.svg'} text='NBA' color='text-vblue'/>
        <Rankings img={'image/naac.svg'} text='NACCA+' color='text-yellow'/>
        </div>
      </div>
    </>
  );
};

export default AccAndRanks;
