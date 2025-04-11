import Header from '../components/Home/Header';
import Footer from '../components/Home/Footer';

const About = () => {
  return (
    <div className="flex flex-col min-h-screen font-sans bg-[#F6F4FD] text-[#1A1A7A]">
      <Header />

      <main className="flex-1 px-6 md:px-20 py-16 space-y-24">
        {/* INTRO */}
        <section data-aos="fade-up" className="text-center max-w-3xl mx-auto">
          <h1 className="text-5xl font-extrabold text-[#1A1A7A] mb-4">Get to Know Me 👋</h1>
          <p className="text-base text-gray-700 leading-relaxed">
            I’m <span className="font-semibold text-[#4B4BE1]">Jhantharas</span>, a student who codes not just to build things, but to tell stories through experiences.
            Whether it’s designing UIs or writing pixel-perfect CSS, I bring my whole self into the creative process.
          </p>
          <p className="mt-4 text-[#1A1A7A] italic text-sm">
            "Design isn’t what it looks like. It’s how it makes people feel."
          </p>
        </section>

        {/* PASSION SECTION */}
        <section className="grid md:grid-cols-2 items-center gap-12" data-aos="fade-up" data-aos-delay="200">
          <div className="bg-white p-8 rounded-3xl shadow-md space-y-4">
            <h2 className="text-2xl font-bold text-[#1A1A7A]">My Origin 🎨</h2>
            <p className="text-sm text-gray-700">
              I started drawing wireframes in my high school notebook — not knowing they were called wireframes 😅.
              That curiosity turned into skills, and those skills became a passion.
            </p>
            <p className="text-sm text-gray-700">
              Now I bring designs to life using React, Tailwind CSS, and lots of caffeine ☕.
            </p>
          </div>
          <div className="flex justify-center">
            <div className="w-full h-64 rounded-2xl bg-gradient-to-br from-[#CFC3F3] to-[#4B4BE1] shadow-inner flex items-center justify-center text-white text-6xl font-black">
              💻✨
            </div>
          </div>
        </section>

        {/* SKILL CARD SECTION */}
        <section className="grid md:grid-cols-2 gap-10" data-aos="fade-up" data-aos-delay="300">
          <div className="bg-white p-6 rounded-2xl shadow">
            <h3 className="text-xl font-semibold text-[#1A1A7A] mb-4">Things I Work With ⚙️</h3>
            <ul className="text-sm text-gray-800 space-y-2 list-disc list-inside">
              <li>Frontend: React, JavaScript, Tailwind CSS</li>
              <li>Design: Figma, Adobe XD</li>
              <li>Version Control: Git & GitHub</li>
              <li>Hosting: Netlify, Firebase</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow">
            <h3 className="text-xl font-semibold text-[#1A1A7A] mb-4">What Drives Me ❤️</h3>
            <p className="text-sm text-gray-700">
              I’m passionate about building accessible, delightful user experiences — the kind that feels just right ✨.
              I design with emotion, build with logic, and deploy with love 💻.
            </p>
          </div>
        </section>

        {/* RANDOM FACTS */}
        <section data-aos="fade-up" data-aos-delay="400" className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">Fun Facts 🔍</h2>
          <ul className="text-sm text-gray-700 space-y-2">
            <li>🎧 Best designs happen with lo-fi beats on.</li>
            <li>🪄 I believe every pixel deserves love.</li>
            <li>📚 I’m addicted to sci-fi + coffee = hyper focus mode.</li>
            <li>😄 I name all my Figma layers — religiously.</li>
          </ul>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;