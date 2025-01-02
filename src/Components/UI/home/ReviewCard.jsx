import ViewButton from "../ViewButton";

export const ReviewCard = ({img}) => {
    return (
      <div
        className="flex items-center justify-center bg-gray-100 py-10 mt-20"
        style={{
          backgroundImage: 'url("image/map.webp")',
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        
        <div className="flex flex-col md:flex-row items-center  rounded-lg p-6 max-w-4xl w-full">
        
          <div className="flex-shrink-0">
            <img
              src={img}
              alt="Student"
              className="w-32 h-32 rounded-full object-cover border-4 border-gray-300"
            />
          </div>
  
          
          <div className="md:ml-6 mt-4 md:mt-0 text-center md:text-left">
            <p className="text-gray-600 mb-4 leading-relaxed">
              Vignan University has actually shaped me as a person. Guest
              lectures, case studies and on-the-floor practicalities as part of
              the curriculum gave us exposure to what’s actually happening in the
              real-time market worldwide.
            </p>
            <h2 className="text-xl font-bold text-red-700">Kumar Pratik</h2>
            <p className="text-gray-500 text-sm">Placed in Apple</p>
          </div>
        </div>
  

        {/* <div className="absolute bottom-1">
        <ViewButton />

        </div> */}
      </div>
    );
  };
  