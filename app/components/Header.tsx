"use client";
import Image from "next/image";

export default function Header() {
  return (
    <header className="bg-[#27272a] text-white px-4 py-3">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <div className="flex items-center gap-4">
          <Image src="/logo.png" alt="Logo" width={48} height={48} />
          <span className="hidden md:inline text-sm md:text-base font-bold tracking-wide whitespace-nowrap">
            SLAYING THE DRAGON
          </span>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          <ul className="flex gap-4 text-sm font-medium">
            <li>
              <a href="#">GitHub</a>
            </li>
            <li>
              <a href="#">Discord</a>
            </li>
            <li>
              <a href="#">YouTube</a>
            </li>
          </ul>
          <div className="flex items-center gap-4 pl-4 border-l border-white/40">
            <a href="#" className="text-sm font-semibold">
              Sign In
            </a>
            <button className="bg-white text-black px-4 py-1 rounded-md text-sm font-semibold hover:bg-slate-200 transition">
              Enter App →
            </button>
          </div>
        </nav>

        <div className="md:hidden text-xl cursor-pointer">☰</div>
      </div>
    </header>
  );
}
