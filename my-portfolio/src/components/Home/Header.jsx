import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { VscTerminalBash } from "react-icons/vsc"; // VS Code terminal icon

const HamburgerIcon = ({ open }) => (
  <div className="w-6 h-5 relative flex flex-col justify-between items-center cursor-pointer">
    <span className={`block h-0.5 w-full bg-[#d4d4d4] transform transition duration-300 ease-in-out ${open ? "rotate-45 translate-y-2" : ""}`} />
    <span className={`block h-0.5 w-full bg-[#d4d4d4] transition-all duration-300 ease-in-out ${open ? "opacity-0" : ""}`} />
    <span className={`block h-0.5 w-full bg-[#d4d4d4] transform transition duration-300 ease-in-out ${open ? "-rotate-45 -translate-y-2" : ""}`} />
  </div>
);

const navItems = [
  { name: "About", path: "/about" },
  { name: "Talk", path: "/message" },
  { name: "Projects", path: "/project" },
  { name: "Contact", path: "/contact" },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="bg-[#1e1e1e] shadow-md px-6 md:px-10 py-4 border-b border-[#3c3c3c] z-50 relative">
      <div className="flex justify-between items-center">
        {/* Brand with icon */}
        <Link to="/" className="flex items-center gap-2 text-lg font-bold text-[#d4d4d4]">
          <VscTerminalBash className="text-[#4FC1FF] text-xl" />
          JHANTHARAS <span className="text-[#4FC1FF] font-semibold">/ ENGINEERING STUDENT</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6 text-[#d4d4d4] font-medium">
          {navItems.map(({ name, path }) => (
            <Link
              key={name}
              to={path}
              className={`transition-colors duration-200 ${
                location.pathname === path ? "text-[#4FC1FF]" : "hover:text-[#4FC1FF]"
              }`}
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

      {/* Mobile Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 backdrop-blur-sm"
          onClick={() => setMenuOpen(false)}
        ></div>
      )}

      {/* Mobile Slide-in Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-[#1e1e1e] shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center px-4 py-5 border-b border-[#3c3c3c]">
          <span className="text-base font-bold text-[#d4d4d4]">MENU</span>
          <button
            onClick={() => setMenuOpen(false)}
            className="text-xl text-[#d4d4d4]"
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
              className={`text-sm font-medium transition ${
                location.pathname === path
                  ? "text-[#4FC1FF] border-l-4 border-[#4FC1FF] pl-2"
                  : "text-[#d4d4d4] hover:text-[#4FC1FF]"
              }`}
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