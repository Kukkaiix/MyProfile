import { useEffect, useState } from "react";
import { FaInstagram, FaFacebookF } from "react-icons/fa";

const ProfileCard = () => {
  const skills = [
    { name: "React", level: 80 },
    { name: "JavaScript", level: 70 },
    { name: "Teamwork", level: 90 },
  ];

  const [counts, setCounts] = useState(skills.map(() => 0));

  useEffect(() => {
    skills.forEach((skill, i) => {
      let current = 0;
      const step = Math.ceil(skill.level / 30); // ปรับความเร็ว
      const interval = setInterval(() => {
        current += step;
        if (current >= skill.level) {
          current = skill.level;
          clearInterval(interval);
        }
        setCounts((prev) => {
          const newCounts = [...prev];
          newCounts[i] = current;
          return newCounts;
        });
      }, 30);
    });
  }, []);

  return (
    <div className="bg-[#CFC3F3] rounded-[30px] p-6 w-full h-full flex flex-col justify-between text-center shadow-xl">
      <div>
        {/* Avatar */}
        <div className="rounded-full border-4 border-[#7E71B7] w-32 h-32 mx-auto overflow-hidden">
          <img src="/vite.svg" alt="avatar" className="w-full h-full object-cover" />
        </div>
        <h2 className="mt-4 text-base font-semibold text-black">Jhantharas</h2>
        <hr className="my-2 border-gray-400 w-1/2 mx-auto" />
        <p className="text-[#1A1A7A] font-bold">ENGINEERING STUDENT</p>

        {/* Tags */}
        <div className="mt-6 flex flex-wrap justify-center gap-2 px-2">
          {["HTML", "CSS", "JavaScript", "React"].map((skill, i) => (
            <span
              key={i}
              className="bg-white text-[#1A1A7A] px-3 py-1 rounded-full text-xs font-semibold shadow"
            >
              {skill}
            </span>
          ))}
        </div>

        {/* Progress Bars with sync number + animated bar */}
        <div className="mt-8 px-4 space-y-6 text-left">
          {skills.map((skill, index) => (
            <div key={index}>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-semibold text-[#1A1A7A]">{skill.name}</span>
                <span className="text-sm text-gray-600">{counts[index]}%</span>
              </div>
              <div className="w-full bg-white rounded-full h-3 shadow-inner relative overflow-hidden">
                <div
                  className="bg-gradient-to-r from-[#1A1A7A] to-[#4B4BE1] h-full rounded-full transition-all duration-500"
                  style={{ width: `${counts[index]}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Social */}
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