import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

export const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <div>
        <button
          type="button"
          className="inline-flex w-full justify-center text-gray-800 hover:text-vblue"
          id="menu-button"
          aria-expanded={isOpen ? "true" : "false"}
          aria-haspopup="true"
          onClick={toggleDropdown}
        >
          Peoples
          <svg
            className="-mr-1 h-5 w-5 relative top-1.5"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      {isOpen && (
        <div
          className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
          tabIndex="-1"
        >
          <div className="py-1" role="none">
            <Link
              to="/people/faculty"
              className="block px-4 py-2 text-xl text-gray-700 hover:text-vblue"
              onClick={toggleDropdown}
            >
              Faculty
            </Link>
            <Link
              to="/people/students"
              className="block px-4 py-2 text-xl text-gray-700 hover:text-vblue"
              onClick={toggleDropdown}
            >
              Students
            </Link>
            <Link
              to="/people/alumini"
              className="block px-4 py-2 text-xl text-gray-700 hover:text-vblue"
              onClick={toggleDropdown}
            >
              Alumini
            </Link>
            <Link
              to="/people/board-of-studies"
              className="block px-4 py-2 text-xl text-gray-700 hover:text-vblue"
              onClick={toggleDropdown}
            >
              Board-of-studies
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};
