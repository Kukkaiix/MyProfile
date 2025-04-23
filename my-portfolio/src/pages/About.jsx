import Header from '../components/Home/Header';
import Footer from '../components/Home/Footer';
import { DiReact, DiJavascript1, DiCss3, DiHtml5, DiFirebase, DiGithubBadge } from 'react-icons/di';
import { SiTailwindcss, SiNetlify, SiFigma} from 'react-icons/si';
import { FiDownload, FiMail } from 'react-icons/fi';

const About = () => {
  return (
    <div className="min-h-screen bg-[#1e1e1e] text-[#d4d4d4] font-mono flex flex-col">
      <Header />

      <main className="flex-1 w-full max-w-6xl px-6 py-20 mx-auto">
        {/* Neon Glowing Title */}
        <h1 className="mb-12 text-5xl font-extrabold text-center text-[#9cdcfe] drop-shadow-lg animate-pulse">
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
          <div className="bg-[#2d2d2d] p-8 rounded-lg shadow-2xl transform -rotate-2 border border-[#3c3c3c]">
            <h2 className="text-3xl font-bold mb-4 text-[#9cdcfe]">👋 Hello!</h2>
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
  <div className="bg-[#1e1e1e] rounded-lg border border-[#3c3c3c] shadow-lg overflow-hidden font-mono text-sm">
    
    {/* VSCode-style Header */}
    <div className="flex items-center bg-[#2d2d2d] px-4 py-2 border-b border-[#3c3c3c]">
      <span className="w-3 h-3 mr-2 bg-red-500 rounded-full"></span>
      <span className="w-3 h-3 mr-2 bg-yellow-400 rounded-full"></span>
      <span className="w-3 h-3 mr-4 bg-green-500 rounded-full"></span>
      <div className="text-[#9cdcfe] text-xs tracking-wider">techStack.js</div>
    </div>

    {/* Code-style declaration */}
    <div className="p-6">
      <div className="text-[#d4d4d4] mb-4">
        <span className="text-[#ce9178]">const</span>{" "}
        <span className="text-[#9cdcfe]">techStack</span>{" "}
        <span className="text-[#d4d4d4]">=</span>{" "}
        <span className="text-[#569cd6]">[</span>
      </div>

      <div className="grid grid-cols-1 gap-4 pl-4 sm:grid-cols-2 md:grid-cols-3">
        {[
          { icon: <DiReact className="text-[#61DAFB]" />, name: "React", desc: "Component-based UI" },
          { icon: <DiJavascript1 className="text-[#F7DF1E]" />, name: "JavaScript", desc: "Scripting language" },
          { icon: <SiTailwindcss className="text-[#38B2AC]" />, name: "Tailwind CSS", desc: "Utility-first CSS" },
          { icon: <DiHtml5 className="text-[#E34F26]" />, name: "HTML5", desc: "Markup for the Web" },
          { icon: <DiCss3 className="text-[#1572B6]" />, name: "CSS3", desc: "Styling the Web" },
          { icon: <DiFirebase className="text-[#FFCA28]" />, name: "Firebase", desc: "Google backend" },
          { icon: <DiGithubBadge className="text-[#181717]" />, name: "GitHub", desc: "Code hosting" },
          { icon: <SiNetlify className="text-[#00C7B7]" />, name: "Netlify", desc: "CI/CD & deploy" },
          { icon: <SiFigma className="text-[#F24E1E]" />, name: "Figma", desc: "UI Design Tool" },
        ].map(({ icon, name, desc }, i) => (
          <div
  key={i}
  className="bg-[#252526] p-4 rounded-md border border-[#3c3c3c] 
             transition duration-300 ease-in-out 
             hover:bg-[#37373d] hover:border-[#4c4c4c] 
             hover:shadow-[inset_0_0_0_1px_#9cdcfe55,inset_0_0_6px_#9cdcfe33] 
             cursor-text flex flex-col items-center text-center gap-1"
>
            <div className="text-4xl">{icon}</div>
            <div className="text-[#dcdcaa] font-bold">{name}</div>
            <div className="text-[#808080] text-xs">{desc}</div>
          </div>
        ))}
      </div>

      <div className="mt-4 text-[#569cd6]">]</div>
    </div>
  </div>
</section>
{/* Fun Facts - ChatGPT Terminal Style */}
<section className="mt-20 font-mono text-sm px-4 text-[#d4d4d4] space-y-6">
  
  {/* Prompt 1 */}
  <div>
    <span className="text-[#4FC1FF]">&gt; You:</span>{" "}
    <span className="text-[#ce9178]">Tell me a dev fun fact?</span>
  </div>

  <div>
    <span className="text-[#9cdcfe]">@Assistant:</span>{" "}
    <span className="text-[#6a9955]">// 🎧 Did you know? Lo-fi + CSS = pure flow state.</span>
  </div>

  {/* Prompt 2 */}
  <div>
    <span className="text-[#4FC1FF]">&gt; You:</span>{" "}
    <span className="text-[#ce9178]">Another one please!</span>
  </div>

  <div>
    <span className="text-[#9cdcfe]">@Assistant:</span>{" "}
    <span className="text-[#6a9955]">// 🥤 Bubble tea has 0 bugs. It just fuels your debugger vibes.</span>
  </div>

  {/* Prompt 3 */}
  <div>
    <span className="text-[#4FC1FF]">&gt; You:</span>{" "}
    <span className="text-[#ce9178]">Can you make it more nerdy?</span>
  </div>

  <div>
    <span className="text-[#9cdcfe]">@Assistant:</span>{" "}
    <span className="text-[#6a9955]">// 📐 Fun Fact: UI spacing &gt; real-life priorities 🤓</span>
  </div>

  {/* Prompt 4 */}
  <div>
    <span className="text-[#4FC1FF]">&gt; You:</span>{" "}
    <span className="text-[#ce9178]">🔥 One more!</span>
  </div>

  <div>
    <span className="text-[#9cdcfe]">@Assistant:</span>{" "}
    <span className="text-[#6a9955]">// 🚀 True devs dream in smooth, accessible UX.</span>
  </div>

  {/* Fake Input Prompt */}
  <div className="flex items-center gap-2 mt-6">
    <span className="text-[#4FC1FF]">&gt; You:</span>
    <span className="text-[#cccccc]">
      <span className="animate-pulse">|</span> {/* Blinking cursor */}
    </span>
  </div>
</section>


{/* Call to Action - No Box, Full Dev Flow */}
<section className="mt-20 font-mono text-center">
  <h2 className="text-2xl font-bold mb-2 text-[#9cdcfe]">Let’s Connect</h2>
  <p className="mb-6 text-[#cccccc]">Interested in collaborating or just want to chat?</p>

  <div className="flex flex-col justify-center gap-4 sm:flex-row">

    {/* Download Resume Button */}
    <a
      href="/resume.pdf"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 px-6 py-3 border border-[#007acc] text-[#007acc] hover:bg-[#007acc22] rounded-md font-semibold transition"
    >
      <FiDownload className="text-xl" />
      <code>npx download-resume</code>
    </a>

    {/* Contact Button */}
    <a
      href="#contact"
      className="inline-flex items-center gap-2 px-6 py-3 border border-[#9cdcfe] text-[#9cdcfe] hover:bg-[#9cdcfe22] rounded-md font-semibold transition"
    >
      <FiMail className="text-xl" />
      <code>git commit -m "Let's Chat!"</code>
    </a>
  </div>
</section>

        {/* Function Close */}
        <h1 className="mt-20 text-5xl font-extrabold text-center text-[#9cdcfe] drop-shadow-lg">
          {"}"}
        </h1>
      </main>

      <Footer />
    </div>
  );
};

export default About;