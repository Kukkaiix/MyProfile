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
    <div className="bg-[#1e1e1e] border border-[#3c3c3c] rounded-xl p-6 w-full h-full flex flex-col justify-between text-center shadow-lg font-mono">
      <div>
        {/* Avatar */}
        <div className="rounded-full border-4 border-[#4FC1FF] w-32 h-32 mx-auto overflow-hidden shadow-lg">
          <img src="/vite.svg" alt="avatar" className="object-cover w-full h-full" />
        </div>
        <h2 className="mt-4 text-base font-bold text-[#9cdcfe]">Jhantharas</h2>
        <hr className="my-2 border-[#3c3c3c] w-1/2 mx-auto" />
        <p className="text-[#4FC1FF] text-sm">ENGINEERING STUDENT</p>

        {/* Tags */}
        <div className="flex flex-wrap justify-center gap-2 px-2 mt-6">
          {["HTML", "CSS", "JavaScript", "React"].map((skill, i) => (
            <span
              key={i}
              className="bg-[#2d2d2d] border border-[#3c3c3c] text-[#d4d4d4] px-3 py-1 rounded-full text-xs font-semibold shadow-sm"
            >
              {skill}
            </span>
          ))}
        </div>

        {/* Progress Bars */}
        <div className="px-4 mt-8 space-y-6 text-left">
          {skills.map((skill, index) => (
            <div key={index}>
              <div className="flex justify-between mb-1">
                <span className="text-sm text-[#d4d4d4]">{skill.name}</span>
                <span className="text-sm text-[#858585]">{counts[index]}%</span>
              </div>
              <div className="w-full bg-[#2d2d2d] rounded-full h-3 shadow-inner overflow-hidden border border-[#3c3c3c]">
                <div
                  className="bg-gradient-to-r from-[#4FC1FF] to-[#007acc] h-full rounded-full transition-all duration-500"
                  style={{ width: `${counts[index]}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Social Links */}
      <div className="mt-6 bg-[#252526] py-3 px-4 rounded-b-xl flex justify-center gap-6 items-center border-t border-[#3c3c3c]">
        <span className="text-sm font-semibold text-[#d4d4d4]">Follow On</span>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="text-xl text-[#d4d4d4] hover:text-pink-500 transition duration-200" />
        </a>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebookF className="text-xl text-[#d4d4d4] hover:text-blue-400 transition duration-200" />
        </a>
      </div>
    </div>
  );
};

export default ProfileCard;