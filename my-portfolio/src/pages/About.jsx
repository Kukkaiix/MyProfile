import Header from '../components/Home/Header';
import Footer from '../components/Home/Footer';

const About = () => {
  return (
    <div className="flex flex-col min-h-screen font-sans bg-[#F6F4FD] text-[#1A1A7A]">
      <Header />

      <main className="flex-1 px-6 md:px-10 lg:px-28 py-20 max-w-7xl mx-auto space-y-24">
        {/* INTRO */}
        <section
          className="bg-gradient-to-r from-[#D8D4F3] to-[#F6F4FD] p-10 rounded-3xl shadow-xl text-center"
          data-aos="fade-up"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-[#1A1A7A]">Get to Know Me</h1>
          <p className="text-base md:text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
            I’m <span className="text-[#4B4BE1] font-semibold">Jhantharas</span>, an engineering student passionate about building clean, beautiful, and accessible user experiences.
          </p>
          <p className="mt-4 text-[#1A1A7A] italic text-sm">
            "Design isn't just how it looks — it's how it works and feels."
          </p>
        </section>

        {/* ORIGIN STORY */}
        <section className="grid md:grid-cols-2 gap-12 items-center" data-aos="fade-up" data-aos-delay="150">
          <div className="bg-[#EAE6FB] rounded-3xl p-8 shadow-md space-y-4">
            <h2 className="text-2xl font-bold mb-2 text-[#1A1A7A]">Where I Began</h2>
            <p className="text-sm text-gray-700 leading-relaxed">
              It started with notebook sketches in school — turned into wireframes, then real code. I discovered I loved building things people actually use.
            </p>
            <p className="text-sm text-gray-700">
              These days, you’ll find me crafting UIs with React, styled beautifully with Tailwind CSS, and designed in Figma.
            </p>
          </div>
          <div className="rounded-xl overflow-hidden shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1531497865144-0464ef8fb9a9?auto=format&fit=crop&w=800&q=80"
              alt="Design Process"
              className="w-full h-full object-cover"
            />
          </div>
        </section>

        {/* SKILLS + VALUES */}
        <section className="grid md:grid-cols-2 gap-10" data-aos="fade-up" data-aos-delay="250">
          <div className="bg-[#EAE6FB] p-6 rounded-2xl shadow">
            <h3 className="text-xl font-semibold text-[#1A1A7A] mb-4">Things I Work With ⚙️</h3>
            <ul className="text-sm text-gray-800 space-y-2 list-disc list-inside">
              <li>React, JavaScript, HTML, Tailwind CSS</li>
              <li>Figma, Adobe XD</li>
              <li>Firebase, GitHub, Netlify</li>
              <li>Design Systems & Accessibility</li>
            </ul>
          </div>
          <div className="bg-[#EAE6FB] p-6 rounded-2xl shadow">
            <h3 className="text-xl font-semibold text-[#1A1A7A] mb-4">What I Value ❤️</h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              I design with empathy and build with clarity. My goal is always to make interfaces feel light, intuitive, and joyful.
            </p>
          </div>
        </section>

        {/* CTA SECTION */}
        <section
          className="bg-gradient-to-r from-[#D8D4F3] to-[#F6F4FD] p-10 rounded-3xl shadow-xl text-center"
          data-aos="zoom-in"
          data-aos-delay="300"
        >
          <h2 className="text-3xl font-bold text-[#1A1A7A] mb-3">Interested in working with me?</h2>
          <p className="text-sm text-gray-700 mb-6">
            You can check out my resume or reach out for freelance & collaboration.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#1A1A7A] text-white px-6 py-3 rounded-full font-semibold shadow-md hover:bg-[#15156a] transition"
            >
              Download Resume
            </a>
            <a
              href="#contact"
              className="border border-[#1A1A7A] text-[#1A1A7A] px-6 py-3 rounded-full font-semibold hover:bg-[#eae6ff] transition"
            >
              Let’s Talk
            </a>
          </div>
        </section>

        {/* FUN FACTS */}
        <section
          className="bg-[#EAE6FB] text-center max-w-xl mx-auto p-8 rounded-2xl shadow"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <h3 className="text-2xl font-bold mb-4">Fun Facts 🎉</h3>
          <ul className="text-sm text-gray-700 space-y-2">
            <li>🎧 Lo-fi + CSS = flow state.</li>
            <li>📚 I’m obsessed with UX psychology & sci-fi world-building.</li>
            <li>🧠 I overthink Figma spacing more than life choices.</li>
            <li>🥤 I can debug better with bubble tea in hand.</li>
          </ul>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;