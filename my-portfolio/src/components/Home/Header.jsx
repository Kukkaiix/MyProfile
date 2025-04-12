import { useState } from "react";
import { Link } from "react-router-dom";

// Animated Hamburger Icon
const HamburgerIcon = ({ open }) => {
  return (
    <div className="w-6 h-5 relative flex flex-col justify-between items-center cursor-pointer">
      <span
        className={`block h-0.5 w-full bg-[#1A1A7A] transform transition duration-300 ease-in-out ${
          open ? "rotate-45 translate-y-2" : ""
        }`}
      />
      <span
        className={`block h-0.5 w-full bg-[#1A1A7A] transition-all duration-300 ease-in-out ${
          open ? "opacity-0" : ""
        }`}
      />
      <span
        className={`block h-0.5 w-full bg-[#1A1A7A] transform transition duration-300 ease-in-out ${
          open ? "-rotate-45 -translate-y-2" : ""
        }`}
      />
    </div>
  );
};

const navItems = [
  { name: "About", path: "/about" },
  { name: "Talk", path: "/message" },
  { name: "Projects", path: "#" },
  { name: "Contact", path: "#" },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md px-6 md:px-10 py-4 border-b border-[#D3CBEA] z-50 relative">
      <div className="flex justify-between items-center">
        {/* Brand */}
        <Link to="/" className="text-lg font-bold text-[#1A1A7A]">
          JHANTHARAS <span className="text-[#4B4BE1] font-semibold">/ ENGINEERING STUDENT</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6 text-[#1A1A7A] font-medium">
          {navItems.map(({ name, path }) => (
            <Link
              key={name}
              to={path}
              className="hover:text-[#4B4BE1] transition-colors duration-200"
            >
              {name}
            </Link>
          ))}
        </nav>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden"
          aria-label="Toggle menu"
        >
          <HamburgerIcon open={menuOpen} />
        </button>
      </div>

      {/* Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 backdrop-blur-sm"
          onClick={() => setMenuOpen(false)}
        ></div>
      )}

      {/* Slide-in Panel */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center px-4 py-5 border-b border-gray-200">
          <span className="text-base font-bold text-[#1A1A7A]">MENU</span>
          <button
            onClick={() => setMenuOpen(false)}
            className="text-xl text-[#1A1A7A]"
            aria-label="Close menu"
          >
            ✕
          </button>
        </div>
        <div className="flex flex-col gap-4 p-6">
          {navItems.map(({ name, path }) => (
            <Link
              key={name}
              to={path}
              onClick={() => setMenuOpen(false)}
              className="text-[#1A1A7A] hover:text-[#4B4BE1] transition text-sm font-medium"
            >
              {name}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;