"use client";
import Image from "next/image";

export default function CTA() {
  return (
    <section className="max-w-6xl mx-auto my-16 px-4 text-center text-slate-100">
      <div className="max-w-xl mx-auto flex flex-col items-center">
        <Image
          src="/cta.png"
          alt="Character Illustration"
          width={200}
          height={200}
          className="mb-6 w-40 md:w-48 lg:w-56"
        />

        <h2 className="text-2xl md:text-3xl font-bold mb-3">
          You have decided upon your purpose.
        </h2>

        <p className="text-sm md:text-base text-slate-400 font-mono mb-6 leading-relaxed max-w-2xl">
          Slay the dragon – get the treasure, that's how it works. But first you
          must prepare. Start learning and become an expert front-end,
          full-stack jamstack web developer.
        </p>

        <button className="bg-white text-black px-5 py-2 rounded-md text-sm font-semibold hover:bg-slate-200 transition">
          Enter App →
        </button>
      </div>
    </section>
  );
}
