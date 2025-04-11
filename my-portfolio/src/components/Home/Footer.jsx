const Footer = () => {
    return (
      <footer
        className="bg-[#1A1A7A] text-white text-sm px-6 py-4 flex flex-col sm:flex-row justify-between items-center gap-2 mt-auto"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <p className="text-center sm:text-left">© 2002 by Keshav Vats. Created with FIGMA.</p>
        <div className="space-x-4 flex items-center text-center sm:text-right">
          <span>📞 CALL +(+91)00000000</span>
          <span>📧 E-MAIL thismail@gmail.com</span>
        </div>
      </footer>
    );
  };
  export default Footer;