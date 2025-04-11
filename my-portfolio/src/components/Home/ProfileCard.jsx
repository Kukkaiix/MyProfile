import { FaInstagram, FaFacebookF } from "react-icons/fa";

const ProfileCard = () => {
  return (
    <div className="bg-[#CFC3F3] rounded-[30px] p-6 w-full h-full flex flex-col justify-between text-center shadow-xl">
      <div>
        <div className="rounded-full border-4 border-[#7E71B7] w-32 h-32 mx-auto overflow-hidden">
          <img src="/vite.svg" alt="avatar" className="w-full h-full object-cover" />
        </div>
        <h2 className="mt-4 text-base font-semibold text-black">Jhantharas</h2>
        <hr className="my-2 border-gray-400 w-1/2 mx-auto" />
        <p className="text-[#1A1A7A] font-bold">ENGINEERING STUDENT</p>
      </div>

      {/* Follow On Section */}
      <div className="mt-6 bg-white py-3 px-4 rounded-b-2xl flex justify-center gap-6 shadow items-center">
        <span className="text-sm font-semibold text-black">Follow On</span>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="text-xl text-black hover:text-pink-500 transition duration-200" />
        </a>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebookF className="text-xl text-black hover:text-blue-600 transition duration-200" />
        </a>
      </div>
    </div>
  );
};

export default ProfileCard;