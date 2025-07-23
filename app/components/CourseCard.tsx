"use client";

type CourseCardProps = {
  title: string;
  subtitle: string;
  description: string;
  spanClass: string;
};

export default function CourseCard({
  title,
  subtitle,
  description,
  spanClass,
}: CourseCardProps) {
  return (
    <div className={`bg-black rounded-lg p-6 ${spanClass}`}>
      <h3 className="text-xl font-bold mb-1">{title}</h3>
      <p className="text-sm text-slate-300 font-mono mb-3">{subtitle}</p>
      <p className="text-sm text-slate-400 mb-4">{description}</p>
      <button className="bg-white text-black text-sm font-semibold rounded px-4 py-2 hover:bg-slate-200">
        Buy Now 50$
      </button>
    </div>
  );
}
