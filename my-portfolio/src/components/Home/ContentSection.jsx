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
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative flex-1 font-mono" data-aos="fade-left" data-aos-duration="1000">
      {/* Background SVG Decoration */}
      <div className="absolute top-0 right-0 z-0 w-1/2 h-full pointer-events-none select-none opacity-10">
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <path fill="currentColor" className="text-[#4FC1FF]" d="M50 0 L200 0 L200 200 Z" />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-2xl text-[#d4d4d4] px-2 sm:px-0">
        <div className="mb-4 text-sm text-gray-500 uppercase tracking-widest border-l-4 border-[#4FC1FF] pl-2">
          ~/introduction
        </div>

        <h1 className="text-5xl font-extrabold text-[#9cdcfe] leading-tight whitespace-pre-line mb-4">
          {displayedText}
          <span className="ml-1 animate-pulse">|</span>
        </h1>

        <p className="mb-4 text-base font-medium text-gray-400 sm:text-lg">
          Here’s Who I am & What I do.
        </p>

        <div className="flex flex-wrap gap-4 mt-6">
          <a href="/resume.pdf" target="_blank" rel="noreferrer">
            <button className="bg-[#4FC1FF] text-[#1e1e1e] px-6 py-2 rounded shadow hover:bg-[#3a9ccf] transition font-semibold">
              ./resume
            </button>
          </a>
          <a href="#projects">
            <button className="border border-[#4FC1FF] text-[#4FC1FF] px-6 py-2 rounded hover:bg-[#2d2d2d] transition font-semibold">
              cd projects
            </button>
          </a>
        </div>

        <p className="max-w-xl mt-6 text-sm leading-relaxed text-gray-400">
          <span className="font-semibold text-[#ce9178]">About Me:</span> I'm a frontend-focused developer passionate about clean interfaces and well-crafted user experiences.
          <br /><br />
          My portfolio showcases projects I've built using
          <code className="bg-[#2d2d2d] text-[#dcdcaa] px-1 rounded mx-1">React</code>,
          <code className="bg-[#2d2d2d] text-[#dcdcaa] px-1 rounded mx-1">TailwindCSS</code>, and
          <code className="bg-[#2d2d2d] text-[#dcdcaa] px-1 rounded mx-1">Firebase</code>. I'm continuously learning and growing — currently exploring design systems & accessibility-first development.
        </p>
      </div>
    </section>
  );
};

export default ContentSection;