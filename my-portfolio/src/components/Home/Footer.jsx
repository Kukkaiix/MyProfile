const Footer = () => {
    return (
      <footer
        className="bg-[#1A1A7A] text-white text-sm px-6 py-6 mt-auto"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 max-w-7xl mx-auto">
          {/* Left side */}
          <p className="text-center md:text-left text-xs sm:text-sm">
            © {new Date().getFullYear()} Jhantharas. Built with 💙 React + TailwindCSS
          </p>
  
          {/* Right side */}
          <div className="flex flex-col sm:flex-row items-center gap-1 sm:gap-4 text-xs sm:text-sm text-gray-200">
            <span>📮 <a href="mailto:thismail@gmail.com" className="hover:underline">thismail@gmail.com</a></span>
            <span>📞 <a href="tel:+9100000000" className="hover:underline">(+91) 000-000-0000</a></span>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;