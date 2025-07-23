'use client'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="max-w-6xl mx-auto my-16 px-4 text-center">
      <div className="flex justify-center items-center mb-8">
        <Image
          src="/dragon.png"
          alt="Hero Character"
          width={100}
          height={100}
          className="w-20 md:w-24 lg:w-28 xl:w-32"
        />
      </div>

      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-100 mb-4 leading-tight">
        Become the web developer<br />
        you were always destined to be.
      </h1>

      <p className="text-base md:text-lg text-slate-400 font-mono mb-6 max-w-3xl mx-auto">
        Slaying the dragon is about facing your fears, pursuing meaning and
        transforming into the web developer you were always destined to be.
      </p>

      <p className="text-sm sm:text-base text-slate-400 font-mono max-w-3xl mx-auto mb-8 leading-relaxed">
        Here you will start your journey, it will not be easy – you will suffer – but you will go all the way. 
        <strong className="text-white"> Slaying The Dragon </strong> is a learning platform for the bravest adventurer 
        aspiring to defeat the biggest dragon of all – web development. 
        <strong className="text-white"> I currently offer a CSS course</strong> and have plans to release more courses soon, 
        including <strong className="text-white">JavaScript - ReactJS - NextJS</strong> and more. 
        You have decided upon your purpose – <strong className="text-white">you will slay the dragon.</strong>
      </p>

      <button className="bg-white text-black px-4 py-2 rounded-md font-semibold hover:bg-slate-200 transition">
        Preview CSS course
      </button>
    </section>
  )
}
