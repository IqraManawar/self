

import Image from "next/image";

export default function Hero() {
  return (
    <section className="flex flex-col-reverse lg:flex-row items-center justify-between px-6 py-16 bg-[#1f2d4f] text-white gap-10">
      {/* Left: Text Section */}
      <div className="max-w-xl text-center lg:text-left">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-snug">
          Hi, I am{" "}
          <span className="bg-gradient-to-r from-[#00bfff] to-[#0099cc] text-transparent bg-clip-text">
            Iqra Manawar
          </span>
        </h1>

        <h2 className="text-2xl md:text-3xl text-[#00bfff] font-semibold mb-4">
          Frontend Developer
        </h2>

        <p className="text-gray-300 mb-6">
          I specialize in building elegant, high-performance websites using modern
          web technologies. Let bring your ideas to life through clean and
          creative code.
        </p>

       
      </div>

      {/* Right: Profile Image */}
      <div className="relative w-56 h-56 md:w-72 md:h-72">
        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#00bfff] to-[#0099cc] p-1 animate-pulse">
          <div className="w-full h-full bg-[#1f2d4f] rounded-full overflow-hidden">
            <Image
              src="/image/profile.png"
              alt="Profile"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
