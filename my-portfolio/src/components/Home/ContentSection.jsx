const ContentSection = () => {
    return (
      <section className="flex-1 relative" data-aos="fade-left" data-aos-duration="1000">
        <div className="absolute top-0 right-0 w-1/2 h-full z-0 opacity-10 pointer-events-none select-none">
          <svg viewBox="0 0 200 200" className="w-full h-full">
            <path fill="#1A1A7A" d="M50 0 L200 0 L200 200 Z" />
          </svg>
        </div>
        <div className="relative z-10">
          <h1 className="text-5xl font-extrabold text-[#1A1A7A] leading-tight">
            HELLO<br />EVERYONE
          </h1>
          <p className="text-lg mt-4 font-medium text-gray-800">Here’s Who I am & What I do.</p>
          <div className="flex gap-4 mt-6">
            <button className="bg-[#1A1A7A] text-white px-6 py-2 rounded-full shadow-md hover:bg-[#15156a]">RESUME</button>
            <button className="border px-6 py-2 rounded-full hover:bg-gray-100">PROJECTS</button>
          </div>
          <p className="mt-6 text-gray-700 max-w-xl leading-relaxed text-sm">
            The About Me or Profile section of your portfolio, is a short summary about yourself in
            relation to the type of role you are applying for. In the sample portfolio, the student
            has highlighted their program, the projects they’ve worked on and their specific area
            of interest in their field.
            <br /><br />
            I’m a great place for you to tell a story and let your users know a little more about you.
          </p>
        </div>
      </section>
    );
  };
  
  export default ContentSection;