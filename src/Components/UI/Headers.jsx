import { Link } from "react-router-dom";
import { Dropdown } from "./Dropdown";

export const Headers = () => {
  return (
    <header className="w-full fixed top-0 z-10 left-0 flex justify-between items-center px-6 max-h-16 bg-zinc-100 shadow-md shadow-gray-100/70">
      <div className="h-16 w-40 flex justify-center items-center">
        <img
          src="https://vignan.ac.in/vignantest/assets/images/Logo%20with%20Deemed.svg"
          alt="Logo"
        />
      </div>
      <nav className="flex gap-6 items-center text-xl ">
        <Link to="/" className="text-gray-800 hover:text-vblue transition duration-500 ease-in-out hover:-translate-y-1">
          Home
        </Link>
        <Link to="/research" className="text-gray-800 hover:text-vblue transition duration-500 ease-in-out hover:-translate-y-1">
          Research
        </Link>
        <Link to="/facilities" className="text-gray-800 hover:text-vblue transition duration-500 ease-in-out hover:-translate-y-1">
          Facilities
        </Link>
        <Dropdown />
        <Link to="/events" className="text-gray-800 hover:text-vblue transition duration-500 ease-in-out hover:-translate-y-1">
          Events
        </Link>
      </nav>
      <div>
        <button className="w-32 h-12 bg-white cursor-pointer rounded-3xl border-2 border-vblue shadow-[inset_0px_-2px_0px_1px_vblue] group hover:bg-vblue transition duration-300 ease-in-out">
          <span className="font-medium text-[#333] group-hover:text-white">
            Apply Now
          </span>
        </button>
      </div>
    </header>
  );
};
