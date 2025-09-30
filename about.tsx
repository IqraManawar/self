// import Image from "next/image";

// export default function About() {
//   return (
//     <section className="bg-[#1f2d4f] text-white py-12 px-4 flex flex-col items-center text-center">
//       <h1 className="text-4xl md:text-6xl font-semibold mb-6">
//         About <span className="text-[#00bfff]">Me</span>
//       </h1>

//       <div className="relative w-48 h-48 mb-6 rounded-full border-4 border-[#00bfff] overflow-hidden">
//         <Image
//           src="/image/profile.png"
//           alt="Profile"
//           layout="fill"
//           objectFit="cover"
//           className="aboutImage"
//         />
//       </div>

//       <h2 className="text-2xl md:text-3xl font-light mb-4">Frontend Developer!</h2>

//       <p className="max-w-2xl text-sm md:text-base mb-6 leading-relaxed">
//         Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt eos
//         placeat, aliquam dolore dignissimos porro consequatur minima natus
//         numquam possimus facilis magni officia, cupiditate nulla? Error culpa
//         corrupti fugit expedita!
//       </p>

//       <button className="bg-[#00bfff] hover:bg-[#0099cc] text-white px-6 py-2 rounded-md text-sm md:text-base font-medium transition-all">
//         Read More
//       </button>
//     </section>
//   );
// }

// import Image from "next/image";

// export default function About() {
//   return (
//     <section className="bg-[#1f2d4f] text-white py-16 px-4 flex flex-col items-center text-center">
//       {/* Title */}
//       <h1 className="text-4xl md:text-6xl font-bold mb-8">
//         About <span className="text-[#00bfff]">Me</span>
//       </h1>

//       {/* Profile Image */}
//       <div className="relative w-40 h-40 md:w-48 md:h-48 mb-6 rounded-full border-4 border-[#00bfff] overflow-hidden group">
//         <Image
//           src="/image/profile.png"
//           alt="Profile"
//           fill
//           className="object-cover transition-transform duration-500 group-hover:scale-110"
//         />
//       </div>

//       {/* Subtitle */}
//       <h2 className="text-2xl md:text-3xl font-light mb-4">Frontend Developer!</h2>

//       {/* Description */}
//       <p className="max-w-2xl text-sm md:text-base mb-6 leading-relaxed text-gray-300">
//         I'm passionate about building responsive and user-friendly websites using
//         modern frontend technologies. I bring ideas to life with clean, scalable code
//         and creative UI design.
//       </p>

//       {/* Button */}
//       <button className="bg-[#00bfff] hover:bg-[#0099cc] text-white px-6 py-3 rounded-lg text-base font-semibold transition duration-300 shadow-md">
//         Read More
//       </button>
//     </section>
//   );
// }

import Image from "next/image";

export default function About() {
  return (
    <section className="bg-[#1f2d4f] text-white py-16 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Left: Image */}
        <div className="relative w-44 h-44 md:w-60 md:h-60">
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#00bfff] to-[#0099cc] p-1">
            <div className="w-full h-full bg-[#1f2d4f] rounded-full overflow-hidden">
              <Image
                src="/image/profile.png"
                alt="Profile"
                fill
                className="object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
          </div>
        </div>

        {/* Right: Text */}
        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-[#00bfff]">Me</span>
          </h1>
          <h2 className="text-xl md:text-2xl font-light text-gray-300 mb-4">
            Creative Frontend Developer
          </h2>
          <p className="text-gray-400 max-w-xl leading-relaxed mb-6">
            I specialize in crafting sleek, scalable UIs with HTML, CSS, JavaScript, and React/Next.js. I love turning ideas into reality in the browser and strive to create clean, interactive user experiences.
          </p>
          <button className="bg-[#00bfff] hover:bg-[#0099cc] text-white px-6 py-3 rounded-full font-medium shadow-md transition duration-300">
            Read More
          </button>
        </div>
      </div>
    </section>
  );
}
