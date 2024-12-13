import ViewButton from "../ViewButton";

const BuildYourSelf = () => {
  return (
    <div className="mt-9 w-full ">
      <h3 className="heading">
        Build Your <span className="text-vblue">Self</span>
      </h3>
      <div className="flex justify-center items-center px-3 overflow-hidden mt-4 font-dm">
        <div className="w-1/2 grid grid-rows-2 grid-cols-2 gap-2">
          <div className="w-full h-56  flex items-center justify-center">
            <img
              src="image/amazone1.jpg"
              alt="Image 1"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="w-full h-56 bg-red-600 flex items-center justify-center">
            <img
              src="image/amazone2.jpg"
              alt="Image 2"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full h-56 bg-black flex items-center justify-center">
            <img
              src="image/amazone3.jpg"
              alt="Image 3"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full h-56 bg-blue-500 flex items-center justify-center">
            <img
              src="image/amazone4.jpg"
              alt="Image 4"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="w-1/2 relative">
          <div
            className="absolute inset-0 bg-cover bg-center rounded-r-2xl"
            style={{
              backgroundImage:
                "url('https://vignan.ac.in/vignantest/departments/dep_assets/images/G-faci_heroimg_cse.jpg')",
            }}
          ></div>

          <div className="absolute inset-0 bg-backColor opacity-85 rounded-r-2xl"></div>

          <div className="relative z-10 flex flex-col items-center justify-center text-white p-6 space-y-6 ">
            <div className="text-center">
              <h2 className="text-3xl font-bold">Placements Overview</h2>
              <p className="text-lg">
                The World&apos;s Leading Companies Hire Our Talent
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4 w-full ">
              {[...Array(6)].map((_, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-lg shadow-md border border-white border-opacity-25"
                >
                  <h2 className="text-yellow text-2xl font-bold">9000+</h2>
                  <p className="text-white">Placement Offers</p>
                </div>
              ))}
            </div>
            <div className="flex gap-5">
              <ViewButton />
              <ViewButton />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuildYourSelf;
