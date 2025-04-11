import { useState } from "react";
import { Link } from "react-router-dom";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";

const navItems = [
  { name: "ABOUT ME", path: "/about" },
  { name: "RESUME", path: "#" },
  { name: "PROJECTS", path: "#" },
  { name: "CONTACT", path: "#" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-md px-6 md:px-10 py-5 text-sm font-medium border-b border-[#D3CBEA] z-50 relative">
      <div className="flex justify-between items-center">
        {/* BRAND */}
        <Link to="/" className="text-base font-bold text-[#1A1A7A] tracking-wide">
          JHANTHARAS <span className="text-[#4B4BE1] font-semibold">/ ENGINEERING STUDENT</span>
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex gap-6 text-[#1A1A7A]">
          {navItems.map(({ name, path }) => (
            <Link
              key={name}
              to={path}
              className="hover:text-[#4B4BE1] hover:underline underline-offset-4 transition"
            >
              {name}
            </Link>
          ))}
        </nav>

        {/* HAMBURGER (MOBILE) */}
        <button
          className="md:hidden text-2xl text-[#1A1A7A]"
          onClick={() => setIsOpen(true)}
          aria-label="Open Menu"
        >
          <HiOutlineMenu />
        </button>
      </div>

      {/* FULLSCREEN MENU MOBILE */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-white text-[#1A1A7A] flex flex-col items-center justify-center gap-8 px-6 text-lg font-semibold transition-all duration-300 ease-in-out">
          <button
            className="absolute top-6 right-6 text-3xl text-[#1A1A7A]"
            onClick={() => setIsOpen(false)}
            aria-label="Close Menu"
          >
            <HiOutlineX />
          </button>

          {navItems.map(({ name, path }) => (
            <Link
              key={name}
              to={path}
              onClick={() => setIsOpen(false)}
              className="hover:text-[#4B4BE1] transition duration-200"
            >
              {name}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;