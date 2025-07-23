"use client";

export default function Courses() {
  return (
    <section className="max-w-6xl mx-auto my-16 px-4">
      <h4 className="uppercase text-slate-400 text-sm font-semibold mb-6">
        Courses
      </h4>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-6 auto-rows-auto">
        <div className="bg-black rounded-lg p-6 sm:col-span-4 row-span-1">
          <h3 className="text-xl font-bold mb-1">CSS</h3>
          <p className="text-sm text-slate-300 font-mono mb-3">
            The Complete Cascading Stylesheet course
          </p>
          <p className="text-sm text-slate-400 mb-4">
            CSS (Cascading Style Sheets) is a stylesheet language responsible
            for the styling of your web page. It is used to express how HTML
            elements are styled, positioned and rendered on all of the different
            screen display and sizes.
          </p>
          <button className="bg-white text-black text-sm font-semibold rounded px-4 py-2 hover:bg-slate-200">
            Buy Now 50$
          </button>
        </div>

        <div className="bg-black rounded-lg p-6 sm:col-span-2 row-span-1">
          <h3 className="text-xl font-bold mb-1">JavaScript</h3>
          <p className="text-sm text-slate-300 font-mono mb-3">
            The Complete JavaScript course
          </p>
          <p className="text-sm text-slate-400 mb-4">
            JS (JavaScript) is one of the most widely used programming languages
            in the world. It allows us to add interactivity to our web pages.
          </p>
          <button className="bg-white text-black text-sm font-semibold rounded px-4 py-2 hover:bg-slate-200">
            Buy Now 50$
          </button>
        </div>

        <div className="bg-black rounded-lg p-6 sm:col-span-3 row-span-1">
          <h3 className="text-xl font-bold mb-1">ReactJS</h3>
          <p className="text-sm text-slate-300 font-mono mb-3">
            The Complete ReactJS course
          </p>
          <p className="text-sm text-slate-400 mb-4">
            ReactJS (A JavaScript library for building user interfaces) is an
            open-source, declarative and component-based javascript library. It
            is the most popular Javascript front-end library/framework and is
            widely used to build single page application and user interfaces.
          </p>
          <button className="bg-white text-black text-sm font-semibold rounded px-4 py-2 hover:bg-slate-200">
            Buy Now 50$
          </button>
        </div>

        <div className="bg-black rounded-lg p-6 sm:col-span-3 row-span-1">
          <h3 className="text-xl font-bold mb-1">NextJS</h3>
          <p className="text-sm text-slate-300 font-mono mb-3">
            The Complete NextJS course
          </p>
          <p className="text-sm text-slate-400 mb-4">
            NextJS (The React framework for production) is a React framework
            with all the features you need for production – hybrid, static &
            server rendering, TypeScript support, smart bundling, route
            pre-fetching, and more. No config needed and great developer
            experience.
          </p>
          <button className="bg-white text-black text-sm font-semibold rounded px-4 py-2 hover:bg-slate-200">
            Buy Now 50$
          </button>
        </div>
      </div>
    </section>
  );
}
