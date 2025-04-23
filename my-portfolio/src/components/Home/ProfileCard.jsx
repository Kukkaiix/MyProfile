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
      const step = Math.ceil(skill.level / 30);
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
    <div className="bg-[#1e1e1e] border border-[#3c3c3c] w-full font-mono overflow-hidden shadow-xl flex flex-col">
      {/* Top bar like VS Code tab */}
      <div className="bg-[#2d2d2d] px-4 py-2 flex items-center gap-2 border-b border-[#3c3c3c]">
        <span className="w-3 h-3 bg-red-500 rounded-full"></span>
        <span className="w-3 h-3 bg-yellow-400 rounded-full"></span>
        <span className="w-3 h-3 bg-green-500 rounded-full"></span>
        <span className="ml-4 text-sm text-gray-300">profile.js</span>
      </div>

      {/* Card content */}
      <div className="flex-1 p-6 text-center">
        {/* Avatar */}
        <div className="rounded-full border-4 border-[#4FC1FF] w-32 h-32 mx-auto overflow-hidden shadow-md">
          <img src="/vite.svg" alt="avatar" className="object-cover w-full h-full" />
        </div>

        <h2 className="mt-4 text-lg font-bold text-[#9cdcfe]">Jhantharas</h2>
        <p className="text-[#4FC1FF] text-sm font-semibold">ENGINEERING STUDENT</p>
        <hr className="my-3 border-[#3c3c3c] w-1/2 mx-auto" />

        {/* Tags */}
        <div className="flex flex-wrap justify-center gap-2 mt-4">
          {["HTML", "CSS", "JavaScript", "React"].map((skill, i) => (
            <span
              key={i}
              className="bg-[#1e1e1e] border border-[#3c3c3c] text-[#d4d4d4] px-3 py-1 rounded-full text-xs font-semibold tracking-wide shadow-sm font-mono"
            >
              {skill}
            </span>
          ))}
        </div>

        {/* Progress Bars */}
        <div className="mt-8 space-y-5 text-left">
          {skills.map((skill, index) => (
            <div key={index}>
              <div className="flex justify-between mb-1">
                <span className="text-sm text-[#d4d4d4]">{skill.name}</span>
                <span className="text-sm text-gray-500">{counts[index]}%</span>
              </div>
              <div className="w-full bg-[#2d2d2d] rounded-full h-3 border border-[#3c3c3c]">
                <div
                  className="bg-gradient-to-r from-[#4FC1FF] to-[#007acc] h-full rounded-full transition-all duration-500"
                  style={{ width: `${counts[index]}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer - Social */}
      <div className="bg-[#252526] border-t border-[#3c3c3c] py-3 px-4 flex justify-center items-center gap-6">
        <span className="text-sm text-[#d4d4d4] font-semibold">Follow On</span>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="text-xl text-[#d4d4d4] hover:text-pink-500 transition" />
        </a>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebookF className="text-xl text-[#d4d4d4] hover:text-blue-400 transition" />
        </a>
      </div>

      {/* Status Bar */}
      <div className="bg-[#007acc] text-white text-xs px-4 py-1 flex justify-between items-center">
        <span> main</span>
        <span>Ln 1, Col 1</span>
      </div>
    </div>
  );
};

export default ProfileCard;