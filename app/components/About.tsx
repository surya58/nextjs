"use client";

export default function About() {
  return (
    <section className="max-w-6xl mx-auto my-16 px-4">
      <div className="flex flex-col md:flex-row gap-12">
        <div className="flex-1">
          <h4 className="uppercase text-slate-400 text-sm font-semibold mb-2">
            About
          </h4>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Slaying The Dragon
          </h2>
          <p className="text-sm text-slate-400 font-mono mb-4 leading-relaxed">
            I started my YouTube channel back in November of 2022 with little to
            no expectations and within only a few weeks I was overwhelmed by the
            love and support I got from new viewers and subscribers. I am
            infinitely grateful to each and every one of you – I am absolutely
            honored by this community.
          </p>
          <p className="text-sm text-slate-300 mb-4 leading-relaxed">
            Your support and encouragement has been instrumental in helping me
            to grow as a content creator and to keep pushing myself to create
            better and more engaging videos. Whether you've been with me from
            the beginning or just recently discovered my channel, please know
            that I appreciate you and I am committed to continuing to provide
            you with high-quality content that you will enjoy. Thank you again
            for your support, and I can't wait to see what the future holds for
            our community!
          </p>
          <button className="bg-white text-black text-sm font-semibold rounded px-4 py-2 hover:bg-slate-200 transition">
            Join the discord
          </button>
        </div>

        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div>
            <p className="uppercase text-xs text-slate-400 mb-1">
              Channel total subscribers
            </p>
            <h3 className="text-2xl font-bold">
              88,000+ <span className="text-slate-400 font-medium">subs</span>
            </h3>
          </div>
          <div>
            <p className="uppercase text-xs text-slate-400 mb-1">
              Channel total views
            </p>
            <h3 className="text-2xl font-bold">
              3,000,000+{" "}
              <span className="text-slate-400 font-medium">views</span>
            </h3>
          </div>
          <div>
            <p className="uppercase text-xs text-slate-400 mb-1">
              Channel total amount watch hours
            </p>
            <h3 className="text-2xl font-bold">
              170,000+{" "}
              <span className="text-slate-400 font-medium">watch hours</span>
            </h3>
          </div>
          <div>
            <p className="uppercase text-xs text-slate-400 mb-1">
              Channel total videos uploaded
            </p>
            <h3 className="text-2xl font-bold">
              13+{" "}
              <span className="text-slate-400 font-medium">
                videos uploaded
              </span>
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}
