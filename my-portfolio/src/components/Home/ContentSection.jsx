import { useEffect, useState } from 'react';

const ContentSection = () => {
  const fullText = 'HELLO\nEVERYONE';
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) clearInterval(interval);
    }, 100); // speed of typing

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="flex-1 relative" data-aos="fade-left" data-aos-duration="1000">
      {/* Background SVG Decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full z-0 opacity-10 pointer-events-none select-none">
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <path fill="currentColor" className="text-primary" d="M50 0 L200 0 L200 200 Z" />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-xl">
        <h1 className="text-5xl font-extrabold text-primary leading-tight whitespace-pre-line">
          {displayedText}
          <span className="cursor-blink">|</span>
        </h1>

        <p className="text-lg mt-4 font-medium text-gray-800">
          Here’s Who I am & What I do.
        </p>

        <div className="flex gap-4 mt-6">
          <a href="/resume.pdf" target="_blank" rel="noreferrer">
            <button className="bg-primary text-white px-6 py-2 rounded-full shadow-md hover:bg-[#15156a] transition">
              RESUME
            </button>
          </a>
          <a href="#projects">
            <button className="border border-primary text-primary px-6 py-2 rounded-full hover:bg-hoverLight transition">
              PROJECTS
            </button>
          </a>
        </div>

        <p className="mt-6 text-gray-700 max-w-xl leading-relaxed text-sm">
          <span className="font-semibold text-accent">About Me:</span> I'm a frontend-focused developer passionate about clean interfaces and well-crafted user experiences.
          <br /><br />
          My portfolio showcases projects I've built using <code className="bg-gray-200 px-1 rounded text-sm">React</code>, <code className="bg-gray-200 px-1 rounded text-sm">TailwindCSS</code>, and <code className="bg-gray-200 px-1 rounded text-sm">Firebase</code>. I'm continuously learning and growing — currently exploring design systems & accessibility-first development.
        </p>
      </div>
    </section>
  );
};

export default ContentSection;