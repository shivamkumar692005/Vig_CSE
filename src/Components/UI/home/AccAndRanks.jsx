import Rankings from "./Rankings";
import Rating from "./Rating";

const AccAndRanks = () => {
  return (
    <>    
      <Rating />
        <h3 className="text-3xl font-dm px-12 text-center">Our Prestigious Rankings and <span className="text-vblue">Accreditations</span></h3>


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

      <div className=" mx-12 px-5">
        
      
       
      <div className="w-100 h-40 relative flex justify-center items-center mt-10 ">
        <img src="image/pp.png" alt="" className="w-full h-full object-contain" />
        <img src="image/pp.png" alt="" className="w-full h-full object-contain" />

        <img src="image/pp.png" alt="" className="w-full h-full object-contain" />
        <img src="image/pp.png" alt="" className="w-full h-full object-contain" />

      </div>
    </div>
    </>
  );
};

export default AccAndRanks;
