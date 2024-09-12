import {useState} from 'react';

const  Navbar = () => {

 const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <nav className="sticky top-0 z-50 bg-[#f0f8f0] px-4 py-1 shadow-md md:px-6 navbar">
    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <a href="/" className="flex items-center space-x-3 image-container">
        <img
          src="https://media.geeksforgeeks.org/gfg-gg-logo.svg"
          className="h-7 logo"
          alt=""
        />
        <span className="logo-text self-center text-2xl font-bold whitespace-nowrap text-[#1a5a1a]">
          GFGSC-RGUKTN
        </span>
      </a>
      <button
        type="button"
        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden focus:outline-none"
        aria-controls="navbar-solid-bg"
        aria-expanded={isMenuOpen}
        onClick={toggleMenu}
      >
        <span className="sr-only">Open main menu</span>
        <svg
          className="w-5 h-5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 17 14"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M1 1h15M1 7h15M1 13h15"
          />
        </svg>
      </button>
      <div
        className={`${
          isMenuOpen ? "block" : "hidden"
        } w-full md:block md:w-auto`}
        id="navbar-solid-bg"
      >
        <ul className="nav-menu flex flex-col font-medium mt-4 rounded-lg md:space-x-8 md:flex-row md:mt-0 md:border-0 md:bg-transparent">
          <li>
            <a
              href="/"
              className="block py-2 px-3 md:p-0 text-gray-900 rounded transition duration-200 hover:bg-[#4CAF50] md:hover:bg-transparent md:hover:text-[#4CAF50]"
              aria-current="page"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="/events"
              className="block py-2 px-3 md:p-0 text-gray-900 rounded transition duration-200 hover:bg-[#4CAF50] md:hover:bg-transparent md:hover:text-[#4CAF50]"
            >
              Events
            </a>
          </li>
          <li>
            <a
              href="/#team"
              className="block py-2 px-3 md:p-0 text-gray-900 rounded transition duration-200 hover:bg-[#4CAF50] md:hover:bg-transparent md:hover:text-[#4CAF50]"
            >
              Core-Team
            </a>
          </li>
          <li>
            <a
              href="/#contact"
              className="block py-2 px-3 md:p-0 text-gray-900 rounded transition duration-200 hover:bg-[#4CAF50] md:hover:bg-transparent md:hover:text-[#4CAF50]"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  );
}

export default Navbar;