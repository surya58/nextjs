"use client";

export default function Features() {
  return (
    <section className="max-w-6xl mx-auto my-16 px-4">
      <div className="mb-10">
        <p className="uppercase text-sm font-semibold text-slate-400 mb-1">
          Features
        </p>
        <h2 className="text-2xl md:text-3xl font-bold mb-3">
          A better way to learn
        </h2>
        <p className="text-slate-400 font-mono max-w-2xl text-sm leading-relaxed">
          Tempor aliquip quis commodo eu adipisicing qui elit enim. Esse
          excepteur deserunt consectetur non eu veniam mollit occaecat duis sit
          consectetur dolore. Eu sint deserunt laborum id. Non est mollit tempor
          Lorem sint.
        </p>
      </div>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2">
        {Array(4)
          .fill(0)
          .map((_, i) => (
            <div
              key={i}
              className="bg-[#27272a] text-white p-6 rounded-md font-mono"
            >
              <div className="text-2xl mb-3">🎓</div>
              <h4 className="text-lg font-semibold mb-2">Lorem Ipsum</h4>
              <p className="text-sm font-sans text-white">
                Officia id esse elit duis irure deserunt id velit non pariatur.
                Duis nisi culpa eu eiusmod nisi dolor cillum deserunt quis
                commodo nulla ipsum ullamco id.
              </p>
            </div>
          ))}
      </div>
    </section>
  );
}
