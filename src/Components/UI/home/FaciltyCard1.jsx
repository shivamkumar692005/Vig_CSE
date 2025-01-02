

const FaciltyCard1 = ({ handleShow, img1, desc }) => {
    return (
      <div
        className="max-w-lg mx-auto rounded-lg border border-gray-200 shadow-md overflow-hidden hover:cursor-pointer bg-white hover:shadow-lg hover:shadow-slate-600 duration-300"
        onClick={handleShow}
      >
        {/* Image Section */}
        <div className="h-48">
          <img
            src={img1}
            alt="Graduation Event"
            className="w-full h-full object-cover"
          />
        </div>
  
        {/* Text Section */}
        <div className="p-6 bg-vblue text-white">
          <h2 className="text-base  font-fg">{desc.desc}</h2>
        </div>
      </div>
    );
  };
  
  export default FaciltyCard1;
  