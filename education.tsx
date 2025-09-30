export default function Education() {
  const education = [
    {
      year: "2021 - 2023",
      title: "FSC - Gov",
      
    },
    {
      year: "2023 - 2025 ",
      title: "Initiative for Artifical Intellegence.Web 3.0 & Metaverse - Governor House",
      
    },
    {
      year: "2025",
      title: "Smart-pro Python course - Aptect",
      
    },
  ];

  return (
    <section className="bg-[#1f2d4f] text-white py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Education Column */}
          <div>
            <h2 className="text-2xl font-semibold mb-6">Education</h2>
            {education.map((item, index) => (
              <div
                key={index}
                className="bg-[#2a3d66] rounded-xl p-6 mb-6 shadow-lg"
              >
                <span className="block text-[#00bfff] font-medium mb-2">
                  {item.year}
                </span>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                
              </div>
            ))}
          </div>
          
      
          </div>
        </div>
    
    </section>
  );
}
