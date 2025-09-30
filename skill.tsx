export default function Skills() {
  const codingSkills = ["HTML", "CSS", "JavaScript"];
  const professionalSkills = [
    "Web Design",
    "Web Development",
    
  ];

  return (
    <section className="bg-[#1f2d4f] text-white py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">
          My <span className="text-[#00bfff]">Skills</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Coding Skills */}
          <div>
            <h3 className="text-2xl font-semibold mb-6">💻 Coding Skills</h3>
            <ul className="space-y-3 text-gray-300">
              {codingSkills.map((skill, index) => (
                <li
                  key={index}
                  className="bg-[#2a3d66] px-4 py-2 rounded-md hover:bg-[#00bfff] hover:text-white transition"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>

          {/* Professional Skills */}
          <div>
            <h3 className="text-2xl font-semibold mb-6">🎨 Professional Skills</h3>
            <ul className="space-y-3 text-gray-300">
              {professionalSkills.map((skill, index) => (
                <li
                  key={index}
                  className="bg-[#2a3d66] px-4 py-2 rounded-md hover:bg-[#00bfff] hover:text-white transition"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
