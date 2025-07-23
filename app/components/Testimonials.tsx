"use client";

export default function Testimonials() {
  return (
    <section className="max-w-6xl mx-auto my-16 px-4">
      <div className="mb-10 text-center">
        <p className="uppercase text-left text-sm font-semibold text-slate-400 mb-1">
          Love & Support
        </p>
        <h2 className="text-2xl md:text-3xl font-bold mb-3">Testimonials</h2>
        <p className="text-slate-400 font-mono max-w-2xl mx-auto text-sm leading-relaxed">
          Voluptate sint esse enim duis irure nisi. Proident mollit occaecat
          minim dolor sunt ullamco duis consectetur minim commodo dolor qui.
        </p>
      </div>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {[
          "Fugiat eu veniam laboris commodo id aute eu mollit dolor aute culpa reprehenderit occaecat cillum.",
          "In dolore anim qui adipisicing culpa consequat mollit excepteur.",
          "Minim dolor proident adipisicing deserunt tempor culpa proident.",
          "Velit occaecat nisi ipsum cupidatat labore ut sunt ea magna.",
          "Culpa mollit tempor irure occaecat velit labore nostrud voluptate sit quis exercitation ipsum tempor duis.",
          "Consectetur deserunt dolore adipisicing culpa dolor occaecat mollit adipisicing fugiat.",
        ].map((text, i) => (
          <div
            key={i}
            className="bg-[#27272a] p-6 rounded-md font-mono flex flex-col justify-between min-h-[160px]"
          >
            <p className="text-sm text-white mb-4">{text}</p>
            <span className="text-xs text-white">@John Doe</span>
          </div>
        ))}
      </div>
    </section>
  );
}
