// import Navbar from "./components/navbar";
// import Hero from "./components/hero";
// import About from "./components/about";
// import Education from "./components/education";
// import Skills from "./components/skill";
// import Contact from "./components/contact";
// import Projects from "./components/project";

// export default function Home() {
//   return (
//     <div className="bg-[#1f2d4f] text-white scroll-smooth">
//       <Navbar />
//       <Hero />
//       <div id="about"><About /></div>
//       <div id="education"><Education /></div>
//       <div id="skills"><Skills /></div>
//       <div id="contact"><Contact /></div>
//       <div id="project"><Projects/></div>
//     </div>
//   );
// }

import Navbar from "./components/navbar";
import Hero from "./components/hero";
import About from "./components/about";
import Education from "./components/education";
import Skills from "./components/skill";
import Contact from "./components/contact";
import Projects from "./components/project";

export default function Home() {
  return (
    <div className="bg-[#1f2d4f] text-white scroll-smooth">
      {/* Navbar stays sticky */}
      <Navbar />

      {/* Hero Section with gradient divider */}
      <section id="hero" className="relative z-10">
        <Hero />
      </section>

      {/* About Section */}
      <section
        id="about"
        className="relative py-20 px-6 border-t border-[#00bfff]/10"
      >
        <About />
      </section>

      {/* Education Section */}
      <section
        id="education"
        className="relative py-20 px-6 border-t border-[#00bfff]/10"
      >
        <Education />
      </section>

      {/* Skills Section with darker overlay */}
      <section
        id="skills"
        className="relative py-20 px-6 border-t border-[#00bfff]/10 bg-[#1b263e]"
      >
        <Skills />
      </section>

      {/* Projects Section */}
      <section
        id="project"
        className="relative py-20 px-6 border-t border-[#00bfff]/10"
      >
        <Projects />
      </section>

      {/* Contact Section with curved edge look (if needed) */}
      <section
        id="contact"
        className="relative py-20 px-6 border-t border-[#00bfff]/10 bg-[#162033]"
      >
        <Contact />
      </section>

      {/* Footer (Optional) */}
      <footer className="text-center py-6 text-sm text-gray-400 border-t border-[#00bfff]/10">
        © 2025 Iqra Manawar. Built with ❤️ using Next.js & Tailwind CSS.
      </footer>
    </div>
  );
}
