import classNames from "classnames";

export const EventCard = () => {
  return (
    <>
      <div className="max-w-xs w-full group/card ">
        <div
          className={classNames(
            "cursor-pointer overflow-hidden relative card h-70 rounded-md shadow-xl max-w-sm mx-auto backgroundImage flex flex-col justify-between p-4 hover:shadow-sky-300 hover:shadow-lg",
            "bg-[url(https://vignan.ac.in/newvignan/departments/dep_assets/images/DeptLibraryGF_cse.jpg)] bg-cover"
          )}
        >
          <div className="absolute w-full h-full top-0 left-0 transition duration-300 group-hover/card:bg-black opacity-60"></div>
          <div className="flex flex-row items-center space-x-4 z-10"></div>
          <div className="text content">
            <h1 className="font-bold text-xl md:text-2xl text-gray-50 relative z-10">
              Mahotsav
            </h1>
            <p className="font-normal text-sm text-gray-50 relative z-10 my-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec
              enim nec odio.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
