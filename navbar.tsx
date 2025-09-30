import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-[#1f2d4f] text-white">
      <div>
        <Image
          src="/image/image.png"
          alt="Logo"
          width={50}
          height={50}
          className="rounded-full border-2 border-[#292946]"
        />
      </div>
      <ul className="flex gap-6 text-sm md:text-base font-medium">
        <li><Link href="#">Home</Link></li>
        <li><Link href="#about">About</Link></li>
        <li><Link href="#education">Education</Link></li>
        <li><Link href="#skills">Skills</Link></li>
        <li><Link href="#contact">Contact</Link></li>
        <li><Link href="#project">Project</Link></li>
      </ul>
    </nav>
  );
}
