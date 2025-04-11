const Header = () => {
    return (
      <header
        className="flex justify-between items-center px-10 py-6 text-sm font-medium"
        data-aos="fade-down"
        data-aos-duration="1000"
      >
        <div>
          <span className="font-bold text-black">NAME HERE</span> /{" "}
          <a href="#" className="text-blue-800 underline">PRODUCT DESIGNER</a>
        </div>
        <nav className="space-x-6">
          <a href="#" className="hover:underline text-gray-900">ABOUT ME</a>
          <a href="#" className="hover:underline text-gray-900">RESUME</a>
          <a href="#" className="hover:underline text-gray-900">PROJECTS</a>
          <a href="#" className="hover:underline text-gray-900">CONTACT</a>
        </nav>
      </header>
    );
  };
  export default Header;