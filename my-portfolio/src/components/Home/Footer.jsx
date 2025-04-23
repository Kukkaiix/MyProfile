const Footer = () => {
  return (
    <footer
      className="bg-[#2d2d2d] text-[#d4d4d4] text-sm px-6 py-6 mt-auto border-t border-[#3c3c3c]"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <div className="flex flex-col items-center justify-between gap-4 mx-auto md:flex-row max-w-7xl">
        {/* Left side */}
        <p className="text-xs text-center md:text-left sm:text-sm">
          © {new Date().getFullYear()} Jhantharas. Built with 💙 React + TailwindCSS
        </p>

        {/* Right side */}
        <div className="flex flex-col items-center gap-1 text-xs text-gray-400 sm:flex-row sm:gap-4 sm:text-sm">
          <span>📮 <a href="mailto:thismail@gmail.com" className="hover:underline">thismail@gmail.com</a></span>
          <span>📞 <a href="tel:+9100000000" className="hover:underline">(+91) 000-000-0000</a></span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;