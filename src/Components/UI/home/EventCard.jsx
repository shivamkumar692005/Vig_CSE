

export const EventCard = ({data}) => {
  return (
    <>
      <div className="max-w-xs w-full group/card ">
      <div
          style={{ backgroundImage: `url(${data.img})` }}
          className="cursor-pointer overflow-hidden relative card h-44 rounded-md shadow-xl max-w-sm mx-auto backgroundImage flex flex-col justify-between pt-4 bg-center bg-cover"
        >
          <div className="absolute w-full h-full top-0 left-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
          <div className="absolute w-full h-full top-0 left-0 transition duration-300 group-hover/card:bg-black opacity-60"></div>
          {/* <div className="flex flex-row items-center space-x-4 z-10"></div> */}
          <div className="text content  ">
            <h1 className="font-bold text-xl md:text-2xl text-center text-white relative z-10 top-28 bg-vblue">
              {data.heading}
            </h1>
            
          </div>
        </div>
      </div>
    </>
  );
};
