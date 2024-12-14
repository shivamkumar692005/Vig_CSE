import ViewButton from "../ViewButton";

const StudentResearch = () => {
  return (
    <div>
      <h1 className="heading text-vblue">Student Research</h1>
      <div className="mx-auto px-28 mt-6 w-full flex gap-5 justify-between">
        <Research />
        <Research />
        <Research />
      </div>
    </div>
  );
};

function Research() {
  return (
    <div className="w-72 h-auto  p-2 flex flex-col  items-center gap-2 font-dm rounded-2xl hover:shadow-2xl hover:shadow-black transition-all duration-300 shadow-lg shadow-black ">
      <img src="image/download.jpg" alt="" className="rounded-2xl" />
      <div className="w-full flex p-3 flex-col gap-2 justify-center items-center text-center">
        <h1 className="font-bold text-xl text-vblue">Student Research</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <ViewButton />
      </div>
    </div>
  );
}

export default StudentResearch;
