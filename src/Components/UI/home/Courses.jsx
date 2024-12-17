import { motion } from "framer-motion";
import ViewButton from "../ViewButton";

const Courses = () => {
  return (
    <>
      <h3 className="heading">
        Courses Offer for <br />{" "}
        <span className="text-vblue">Computer Science</span>
      </h3>

      <section
        id="about"
        className="relative bg-white text-gray-900 w-full px-12"
      >
        <div className="container mx-auto px-4 text-center serif">
          <div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <div className="p-4 bg-gray-100 rounded-lg shadow-md hover:shadow-xl transform hover:scale-100 transition duration-300">
              <img
                src="image/VIN03084.JPG"
                alt="Undergraduate Program"
                className="w-full h-40 object-cover rounded-t-lg mb-4"
              />
              <h4 className="text-xl font-dm font-bold mb-2 serif text-vblue">Under Graduate</h4>
              <p className="font-fg text-lg">B.Tech in Computer Science and Engineering</p>
              <div
                className="pt-3 flex justify-around items-center"
                style={{ color: "#1152AE" }}
              >
                <button className="underline relative top-2">Course details</button>
                <ViewButton />
              </div>
            </div>

            <div className="p-4 bg-gray-100 rounded-lg shadow-md hover:shadow-xl transform hover:scale-100 transition duration-300">
              <img
                src="image/9.jpeg"
                alt="Undergraduate Program"
                className="w-full h-40 object-cover rounded-t-lg mb-4"
              />
              <h4 className="text-xl font-dm font-bold mb-2 serif text-vblue">Post Graduate</h4>
              <p className="font-fg text-lg">B.Tech in Computer Science and Engineering</p>
              <div
                className="pt-3 flex justify-around items-center"
                style={{ color: "#1152AE" }}
              >
                <button className="underline relative top-2">Course details</button>
                <ViewButton />
              </div>
            </div>

            <div className="p-4 bg-gray-100 rounded-lg shadow-md hover:shadow-xl transform hover:scale-100 transition duration-300">
              <img
                src="image/phd.jpg"
                alt="PhD Program"
                className="w-full h-40 object-cover rounded-t-lg mb-4 "
              />
              <h4 className="text-xl font-dm font-bold mb-2 serif text-vblue">Ph.D.</h4>
              <p className="font-fg text-lg">Ph.D. in Computer Science and Engineering</p>
              <div
                className="pt-3 flex justify-around items-center"
                style={{ color: "#1152AE" }}
              >
                <button className="underline relative top-2">Course details</button>
                <ViewButton />
              </div>
            </div>
          </div>
        </div>

       

      </section>
    </>
  );
};

export default Courses;
