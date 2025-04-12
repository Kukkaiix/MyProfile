import { useEffect, useState } from 'react';
import Header from '../components/Home/Header';
import Footer from '../components/Home/Footer';
import { FaEnvelope } from 'react-icons/fa';

const Contact = () => {
    const AnimatedLine = ({ text, delay = 0, className = '', pulse = false }) => {
        const [visible, setVisible] = useState(false);
      
        useEffect(() => {
          const timeout = setTimeout(() => setVisible(true), delay);
          return () => clearTimeout(timeout);
        }, [delay]);
      
        return (
          <p
            className={`transition-all duration-700 ease-out transform ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-1'
            } ${pulse ? 'animate-pulse' : ''} ${className}`}
          >
            {text}
          </p>
        );
      };
  const fullText = `const contact = {
  email: "yourname@email.com",
  github: "https://github.com/yourusername",
  linkedin: "https://linkedin.com/in/yourusername",
  stack: ["React", "Tailwind", "Firebase"]
};`;

  const lines = fullText.split('\n');
  const [typedLines, setTypedLines] = useState([]);
  const [aiTakeover, setAiTakeover] = useState(true);

  useEffect(() => {
    let lineIndex = 0;
    const interval = setInterval(() => {
      setTypedLines((prev) => [...prev, lines[lineIndex]]);
      lineIndex++;
      if (lineIndex >= lines.length) clearInterval(interval);
    }, 300);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const escHandler = (e) => {
      if (e.key === 'Escape') setAiTakeover(false);
    };
    window.addEventListener('keydown', escHandler);
    return () => window.removeEventListener('keydown', escHandler);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-[#1e1e1e] text-[#d4d4d4] font-mono">
      <Header />

      {aiTakeover && (
  <div className="fixed inset-0 bg-black bg-opacity-95 text-[#00ff9c] font-mono p-8 z-50">
    <AnimatedLine delay={0} text="[ SYSTEM ALERT ]" className="text-lg md:text-xl text-green-400" pulse />
    <AnimatedLine delay={600} text="👁 Neural AI Interface Detected..." />
    <AnimatedLine delay={1200} text="↳ Overriding DOM structure..." />
    <AnimatedLine delay={1800} text="↳ ACCESS LEVEL: ADMINISTRATOR OVERRIDE" className="text-[#ff3c3c]" />
    <AnimatedLine delay={2400} text="_press ESC to resist... or not." className="text-sm text-[#999] mt-6" />
  </div>
)}

      <main className="flex-1 flex flex-col items-center justify-center px-4 py-16">
        {/* VS Code Toolbar */}
        <div className="w-full max-w-4xl rounded-t-lg bg-[#2d2d2d] px-4 py-2 flex items-center gap-2">
          <span className="w-3 h-3 bg-red-500 rounded-full"></span>
          <span className="w-3 h-3 bg-yellow-400 rounded-full"></span>
          <span className="w-3 h-3 bg-green-500 rounded-full"></span>
          <span className="ml-4 text-sm text-gray-300">Contact.jsx</span>
        </div>

        {/* Editor UI */}
        <div className="w-full max-w-4xl bg-[#1e1e1e] border border-[#3c3c3c] rounded-b-lg shadow-2xl flex">
          {/* Line Numbers */}
          <div className="bg-[#2d2d2d] text-gray-500 py-4 px-2 text-right select-none">
            {lines.map((_, i) => (
              <div key={i} className="leading-relaxed">{i + 1}</div>
            ))}
          </div>

          {/* Code Area */}
          <div className="relative flex-1 p-4 overflow-auto">
            <pre className="whitespace-pre-wrap leading-relaxed text-sm md:text-base">
              <code>
                {typedLines.map((line, idx) => (
                  <div key={idx}>{line}</div>
                ))}
              </code>
              <span className="cursor-glow ml-1">|</span>
            </pre>

            {/* Fake Minimap */}
            <div className="absolute top-0 right-0 w-1 bg-gray-700 h-full opacity-20 pointer-events-none"></div>
          </div>
        </div>

        {/* Terminal-style Footer */}
        <div className="w-full max-w-4xl bg-[#1e1e1e] px-6 py-4 border-t border-[#3c3c3c] text-green-400 text-sm font-mono mt-2">
          <p>{'> '}You can reach me via email or leave a message below.</p>
          <div className="mt-4">
            <a
              href="/message"
              className="inline-flex items-center gap-2 px-4 py-2 border border-[#3c3c3c] text-[#98c379] bg-transparent hover:bg-[#2a2d2e] hover:border-[#5cb85c] rounded-md font-medium transition-colors duration-200"
            >
              <FaEnvelope className="text-[#98c379]" />
              Leave me a message
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;