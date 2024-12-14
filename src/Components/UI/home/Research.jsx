import ViewButton from "../ViewButton";
import StudentResearch from "../home/StudentResearch";
const Research = () => {
  return (
    <>
      <section className="w-full mt-9 h-auto px-10 relative  pb-10">
        <div
          className="absolute inset-0 bg-cover bg-center "
          style={{
            backgroundImage:
              "url('https://vignan.ac.in/vignantest/departments/dep_assets/images/G-faci_heroimg_cse.jpg')",
          }}
        ></div>
        <div className="absolute inset-0 bg-backColor opacity-85 "></div>

        <div className="w-full  mx-auto relative  flex flex-col items-center justify-center text-center text-white">
          <h1 className="heading text-yellow text-center ">Research</h1>

          <p className="text-center px-24 py-3 font-dm text-lg">
            The Computer Science Engineering (CSE) department focuses on
            cutting-edge research in areas such as artificial intelligence,
            machine learning, data science, cybersecurity, software engineering,
            and computer networks. Faculty and students actively engage in
            projects that address real-world problems, contributing to
            advancements in technology and innovation for diverse industries.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-4 w-full ">
          {[...Array(6)].map((_, index) => (
            <div
              key={index}
              className="flex flex-col items-center  justify-center bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-lg shadow-md border border-white border-opacity-25"
            >
              <h2 className="text-yellow text-2xl font-bold">9000+</h2>
              <p className="text-white">Placement Offers</p>
            </div>
          ))}
        </div>
      </section>

      <div className="flex justify-evenly px-10 mx-10">
        <div className="card card-compact bg-base-100 w-72 shadow-2xl mt-10 rounded-xl border-0  rounded-b-xl">
          <figure>
            <img
              src="https://vignan.ac.in/newvignan/departments/dep_assets/images/LabGF_cse.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body text-black p-3 bg-white rounded-b-xl">
            <h2 className="card-title">Department Libraray</h2>
            <p>Department Libraray with 1000 books for research.</p>
            <div className="card-actions justify-end">
              <ViewButton />
            </div>
          </div>
        </div>

        <div className="card card-compact bg-base-100 w-72 shadow-2xl mt-10 rounded-xl border-0  rounded-b-xl">
          <figure>
            <img
              src="https://vignan.ac.in/newvignan/departments/dep_assets/images/LabGF_cse.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body text-black p-3 bg-white rounded-b-xl">
            <h2 className="card-title">Department Libraray</h2>
            <p>Department Libraray with 1000 books for research.</p>
            <div className="card-actions justify-end">
              <ViewButton />
            </div>
          </div>
        </div>

        <div className="card card-compact bg-base-100 w-72 shadow-2xl mt-10 rounded-xl border-0  rounded-b-xl">
          <figure>
            <img
              src="https://vignan.ac.in/newvignan/departments/dep_assets/images/G-faci3_img2_cse.jpg"
              alt="Shoes"
              className="w-full h-56 object-cover"
            />
          </figure>
          <div className="card-body text-black p-3 bg-white rounded-b-xl">
            <h2 className="card-title">Department Libraray</h2>
            <p>Department Libraray with 1000 books for research.</p>
            <div className="card-actions justify-end">
              <ViewButton />
            </div>
          </div>
        </div>
      </div>

      <StudentResearch />
    </>
  );
};

export default Research;
