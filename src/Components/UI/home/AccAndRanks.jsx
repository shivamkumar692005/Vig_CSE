
import EducationStats from "../StatCard";
import Rankings from "./Rankings";
import Rating from "./Rating";

const AccAndRanks = () => {
  return (
    <>    
      <Rating />
        <h3 className="text-3xl font-dm px-12 text-center">Our Prestigious Rankings and <span className="text-vblue">Accreditations</span></h3>


      <div className=" mx-16 flex gap-24 p-12 justify-center items-center overflow-hidden">
        <div className="flex flex-col gap-5">
        <Rankings img={'image/abet.png'} text='ABET' color='text-vblue'/>
        <Rankings  img={'image/nba.svg'} text='NBA' color='text-yellow'/>
        </div>
        <div className="flex flex-col gap-5">
        <Rankings img={'image/naac.png'} text='NACCA+' color='text-vblue'/>
        <Rankings img={'image/aicte.png'} text='AICTE' color='text-yellow'/>
        </div>
      </div>

      <div className=" mx-12 px-5">
        
      
       
      <div className="w-100 h-40 relative flex justify-center items-center mt-10 ">
       <EducationStats />

      </div>
    </div>
    </>
  );
};

export default AccAndRanks;
