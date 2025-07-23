"use client";

export default function FAQ() {
  return (
    <section className="max-w-6xl mx-auto my-16 px-4">
      <div className="mb-10">
        <p className="uppercase text-sm font-semibold text-slate-400 mb-1">
          FAQ
        </p>
        <h2 className="text-2xl md:text-3xl font-bold mb-3">
          Frequently asked questions
        </h2>
        <p className="text-slate-400 font-mono max-w-2xl text-sm leading-relaxed">
          Reprehenderit sint velit adipisicing do duis veniam laborum commodo
          et. Duis excepteur deserunt elit do exercitation adipisicing esse
          laboris elit aliquip excepteur.
        </p>
      </div>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {[
          "Adipisicing sunt dolor non in pariatur aute reprehenderit anim laboris. Qui voluptate eu minim laboris nostrud aliquip consectetur esse dolor.",
          "Consequat elit irure nulla adipisicing nulla fugiat ipsum enim ea. Sint consectetur incididunt fugiat do consectetur.",
          "Ullamco labore aliquip qui reprehenderit nisi proident esse in officia. Consequat aute officia dolor pariatur elit.",
          "Ea cillum ex ullamco sit et ad magna ipsum. Ut quis aliqua consequat reprehenderit culpa quis deserunt ullamco cupidatat nulla culpa.",
          "Et eiusmod enim ut excepteur commodo dolore consequat ipsum. Magna voluptate dolor occaecat proident.",
          "Dolor labore deserunt pariatur voluptate eu amet aliquip ex excepteur ad et est. Id cillum esse ex do tempor incididunt magna.",
          "Irure esse proident culpa aliqua duis laborum cillum sint sunt aliqua nisi. Incididunt voluptate amet amet duis laboris elit in eu exercitation aute sit voluptate incididunt.",
          "Incididunt aute ullamco sint qui anim nisi velit deserunt cupidatat. Ad pariatur labore incididunt cillum magna deserunt incididunt velit et elit reprehenderit excepteur excepteur.",
          "Nostrud laboris do adipisicing excepteur tempor consequat aliqua fugiat occaecat. Veniam officia laborum enim minim aute non magna consequat sit exercitation.",
        ].map((desc, idx) => (
          <div
            key={idx}
            className="bg-[#27272a] p-6 rounded-md text-white font-sans"
          >
            <h4 className="text-base font-semibold mb-2 font-mono">
              Lorem Ipsum
            </h4>
            <p className="text-sm leading-relaxed">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
