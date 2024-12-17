

export function FacilityCard({ handleShow, img1 , desc}) {
  return (
    <>
      <div className="max-w-xs w-full group/card " onClick={handleShow}>
        <div
          style={{ backgroundImage: `url(${img1})` }}
          className="cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl max-w-sm mx-auto backgroundImage flex flex-col justify-between p-4 bg-cover bg-center"
        >
           <div className="absolute w-full h-full top-0 left-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
          <div className="absolute w-full h-full top-0 left-0 transition duration-300 group-hover/card:bg-black opacity-60"></div>
          <div className="flex flex-row items-center space-x-4 z-10"></div>
          <div className="text content font-dm">
            <h1 className="font-bold text-xl md:text-2xl text-yellow relative z-10 ">
           {desc.h1}
            </h1>
            <p className=" text-base text-white relative z-10 my-2 font-fg">
            {desc.desc}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
