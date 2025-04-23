import Header from '../components/Home/Header';
import Footer from '../components/Home/Footer';

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1e1e1e] via-[#252526] to-[#2d2d30] text-[#d4d4d4] font-mono flex flex-col">
      <Header />

      <main className="flex-1 w-full max-w-6xl px-6 py-20 mx-auto">
        {/* Neon Glowing Title */}
        <h1 className="mb-12 text-5xl font-extrabold text-center text-[#4FC1FF] drop-shadow-lg animate-pulse">
          <span className="text-[#ce9178]">const</span> <span className="text-[#9cdcfe]">AboutMe</span> = <span className="text-[#569cd6]">() =&gt;</span> {"{"}
        </h1>

        {/* Asymmetrical Layout */}
        <div className="grid items-center gap-10 md:grid-cols-2">
          {/* Profile Image with Glow */}
          <div className="flex justify-center">
            <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-[#007acc] shadow-lg transform rotate-3">
              <img
                src="/profile.jpg"
                alt="Jhantharas"
                className="object-cover w-full h-full transition duration-500 grayscale hover:grayscale-0"
              />
            </div>
          </div>

          {/* Bio Section */}
          <div className="bg-[#1e1e2f] p-8 rounded-lg shadow-2xl transform -rotate-2 border border-[#2a2a2a]">
            <h2 className="text-3xl font-bold mb-4 text-[#007acc]">👋 Hello!</h2>
            <p className="text-base leading-relaxed">
              <span className="text-[#ce9178]">let</span>{" "}
              <span className="text-[#9cdcfe]">name</span> = <span className="text-[#dcdcaa]">"Jhantharas"</span>;
            </p>
            <p className="text-base leading-relaxed">
              <span className="text-[#ce9178]">let</span>{" "}
              <span className="text-[#9cdcfe]">role</span> = <span className="text-[#dcdcaa]">"Frontend Dev & Engineering Student"</span>;
            </p>
            <p className="mt-4 text-sm italic text-[#808080]">
              // "Design isn't just how it looks — it's how it works and feels."
            </p>
          </div>
        </div>

        {/* Tech Stack */}
        <section className="mt-20">
          <h2 className="text-2xl font-bold mb-6 text-[#4FC1FF]">🧰 Tech Toolbox</h2>
          <div className="grid grid-cols-2 gap-4 text-center md:grid-cols-4">
            {['React', 'JavaScript', 'Tailwind CSS', 'HTML/CSS', 'Firebase', 'GitHub', 'Netlify', 'Figma'].map((tech, i) => (
              <div
                key={i}
                className="bg-[#2d2d3f] p-4 rounded-lg shadow-md hover:shadow-[0_0_20px_#4FC1FF66] transition duration-300 border border-[#3a3a3a]"
              >
                <code className="text-[#dcdcaa]">{tech}</code>
              </div>
            ))}
          </div>
        </section>

        {/* Fun Facts */}
        <section className="mt-20 bg-gradient-to-br from-[#1e1e2f] to-[#2a2a2a] p-8 rounded-lg shadow-2xl border border-[#2a2a45]">
          <h2 className="text-2xl font-bold mb-6 text-[#007acc]">🎉 Fun Facts</h2>
          <ul className="space-y-2 text-sm text-gray-300 list-disc list-inside">
            <li><code>🎧 Lo-fi + CSS = flow state</code></li>
            <li><code>🥤 Bubble tea = debugger fuel</code></li>
            <li><code>📐 UI spacing &gt; real-life priorities</code></li>
            <li><code>🚀 Passion for smooth, accessible UX</code></li>
          </ul>
        </section>

        {/* Call to Action */}
        <section className="mt-20 text-center">
          <h2 className="text-2xl font-bold mb-4 text-[#4FC1FF]">📫 Let’s Connect</h2>
          <p className="mb-6 text-[#cccccc]">Interested in collaborating or just want to chat?</p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#007acc] text-white px-6 py-3 rounded-full font-semibold shadow-md hover:bg-[#005f99] transition"
            >
              Download Resume
            </a>
            <a
              href="#contact"
              className="border border-[#4FC1FF] text-[#4FC1FF] px-6 py-3 rounded-full font-semibold hover:bg-[#2d2d3f] transition"
            >
              Contact Me
            </a>
          </div>
        </section>

        {/* Function Close */}
        <h1 className="mt-20 text-5xl font-extrabold text-center text-[#4FC1FF] drop-shadow-lg">
          {"}"}
        </h1>
      </main>

      <Footer />
    </div>
  );
};

export default About;