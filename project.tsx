export default function Projects() {
  return (
    <section className="bg-gray-100 py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6 text-center">My Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Replace these with your actual projects */}
          <div className="bg-white p-6 rounded-2xl shadow-md">
            <h3 className="text-xl font-semibold mb-2">Shareable Resume Builder</h3>
            <p className="text-gray-600 mb-4">Using HTML and CSS</p>
            <a href="https://milestone-rp8e.vercel.app/" className="text-blue-500 hover:underline">View Project →</a>
          </div>
          {/* Add more projects similarly */}
          <div className="bg-white p-6 rounded-2xl shadow-md">
            <h3 className="text-xl font-semibold mb-2">Editable Resume Builder</h3>
            <p className="text-gray-600 mb-4">Using HTML and CSS</p>
            <a href="https://milestone-92tc.vercel.app/" className="text-blue-500 hover:underline">View Project →</a>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-md">
            <h3 className="text-xl font-semibold mb-2">Dynamic Resume Builder</h3>
            <p className="text-gray-600 mb-4">Using HTML and CSS</p>
            <a href="https://milestone-3y8p.vercel.app/" className="text-blue-500 hover:underline">View Project →</a>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-md">
            <h3 className="text-xl font-semibold mb-2">Static Interactive Resume</h3>
            <p className="text-gray-600 mb-4">Using HTML and CSS</p>
            <a href="https://milestone-5vkx.vercel.app/" className="text-blue-500 hover:underline">View Project →</a>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-md">
            <h3 className="text-xl font-semibold mb-2">Figma to Code</h3>
            <p className="text-gray-600 mb-4">using Next.js</p>
            <a href="https://structure-1.vercel.app/" className="text-blue-500 hover:underline">View Project →</a>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-md">
            <h3 className="text-xl font-semibold mb-2">Shopping</h3>
            <p className="text-gray-600 mb-4">using next.js</p>
            <a href="https://shopping-kmnu.vercel.app/" className="text-blue-500 hover:underline">View Project →</a>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-md">
            <h3 className="text-xl font-semibold mb-2">E-commerce</h3>
            <p className="text-gray-600 mb-4">using next.js</p>
            <a href="https://e-commerce-fawn-psi-87.vercel.app/" className="text-blue-500 hover:underline">View Project →</a>
          </div>

        </div>
      </div>
    </section>
  );
}
