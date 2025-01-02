// import {  NavLink } from "react-router-dom";
// import { Dropdown } from "./Dropdown";

// export const Headers = () => {
//   return (
//     <header className="w-full fixed top-0 z-10 left-0 flex justify-between items-center px-6 max-h-16 bg-zinc-100 shadow-md shadow-gray-100/70">
//       <div className="h-16 w-40 flex justify-center items-center">
//         <img
//           src="https://vignan.ac.in/vignantest/assets/images/Logo%20with%20Deemed.svg"
//           alt="Logo"
//         />
//       </div>
//       <nav className="flex gap-6 items-center text-xl ">
//         <NavLink to="/" className="text-gray-800 hover:text-vblue transition duration-500 ease-in-out hover:-translate-y-1">
//           Home
//         </NavLink>
//         <NavLink to="/research" className="text-gray-800 hover:text-vblue transition duration-500 ease-in-out hover:-translate-y-1">
//           Research
//         </NavLink>
//         <NavLink to="/facilities" className="text-gray-800 hover:text-vblue transition duration-500 ease-in-out hover:-translate-y-1">
//           Facilities
//         </NavLink>
//         <Dropdown />
//         <NavLink to="/events" className="text-gray-800 hover:text-vblue transition duration-500 ease-in-out hover:-translate-y-1">
//           Events
//         </NavLink>
//       </nav>
//       <div>
//         <button className="w-32 h-12 bg-white cursor-pointer rounded-3xl border-2 border-vblue shadow-[inset_0px_-2px_0px_1px_vblue] group hover:bg-vblue transition duration-300 ease-in-out">
//           <span className="font-medium text-[#333] group-hover:text-white">
//             Apply Now
//           </span>
//         </button>
//       </div>
//     </header>
//   );
// };

import { useState } from "react";
import "../../app.css";
import { Link } from "react-router-dom";

function Headers() {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  // Handle navbar toggling (open/close)
  const handleNavbarToggle = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  // Handle closing the navbar when a link is clicked
  const handleLinkClick = () => {
    setIsNavbarOpen(false);
  };

  return (
    <div className="h-20 shadow-md shadow-gray-100/70">
      <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
        <div className="container-fluid">
          <Link className="navbar-brand h-16 w-40" to="/">
            <img
              src="https://vignan.ac.in/vignantest/assets/images/Logo%20with%20Deemed.svg"
              alt="Logo"
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded={isNavbarOpen ? "true" : "false"}
            aria-label="Toggle navigation"
            onClick={handleNavbarToggle}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className={`collapse navbar-collapse ${isNavbarOpen ? "show" : ""}`}
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav">
              <li
                className="nav-item"
                style={{
                  marginLeft: "13rem",
                  marginRight: "3rem",
                  marginTop: "0.5rem",
                }}
              >
                <Link
                  className="nav-link "
                  aria-current="page"
                  to="/"
                  style={{ fontFamily: "DM Serif Display" }}
                  onClick={handleLinkClick}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item" style={{ marginTop: "0.5rem" }}>
                <Link
                  className="nav-link"
                  to="http://localhost:5173/facilities"
                  style={{ fontFamily: "DM Serif Display" }}
                  onClick={handleLinkClick}
                >
                  Facilities
                </Link>
              </li>
              <li className="nav-item ms-5 me-3 mt-2">
                <Link
                  className="nav-link"
                  to="http://localhost:5173/research"
                  style={{ fontFamily: "DM Serif Display" }}
                  onClick={handleLinkClick}
                >
                  Research
                </Link>
              </li>
              <li className="nav-item ms-5 me-3 mt-2">
                <Link
                  className="nav-link"
                  to="http://localhost:5173/events"
                  style={{ fontFamily: "DM Serif Display" }}
                  onClick={handleLinkClick}
                >
                  Events
                </Link>
              </li>
              <li className="nav-item ms-5  mt-2">
                <Link
                  className="nav-link"
                  to="http://localhost:5173/alumuni"
                  style={{ fontFamily: "DM Serif Display" }}
                  onClick={handleLinkClick}
                >
                  Alumini
                </Link>
              </li>
            </ul>

            
             <div className="ml-28">
             <button
                className="button"
                style={{ fontFamily: "DM Serif Display" }}
              >
                Apply Now
                <svg className="icon" viewBox="0 0 24 24" fill="currentColor">
                  <path
                    fillRule="evenodd"
                    d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
             </div>
            
          </div>
        </div>
      </nav>
    </div>
  );
}

export { Headers };
