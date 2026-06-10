import Link from "next/link";

export default function VisualProductionTeaser() {
  return (
    <section className="bg-black px-6 pb-20 pt-0 sm:px-10 md:px-16 lg:px-24">
      <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-2">
        <Link
          href="/visual-production"
          className="group block overflow-hidden rounded-[1.65rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.055),rgba(255,255,255,0.02))] p-6 shadow-[0_0_32px_rgba(255,255,255,0.035)] transition duration-300 hover:-translate-y-1 hover:border-white/18 hover:bg-white/[0.045] sm:p-7 lg:p-8"
        >
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-3xl">
              <p className="text-[0.64rem] uppercase tracking-[0.32em] text-white/34">
                STUDIO SERVICE
              </p>
              <h2 className="mt-3 text-2xl font-semibold text-white sm:text-3xl">
                VISUAL PRODUCTION
              </h2>
              <p className="mt-3 text-sm leading-7 text-white/48 sm:text-base">
                Motion graphics, animation, video production and visual content
                for cinematic projects and digital experiences.
              </p>
            </div>

            <span className="inline-flex w-fit rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-[0.62rem] uppercase tracking-[0.24em] text-white/58 transition group-hover:border-white/18 group-hover:bg-white/[0.07] group-hover:text-white/78">
              OPEN PAGE
            </span>
          </div>
        </Link>

        <Link
          href="/luxury-hospitality-video"
          className="group block overflow-hidden rounded-[1.65rem] border border-[#e8d7af]/12 bg-[radial-gradient(circle_at_80%_0%,rgba(232,215,175,0.13),transparent_32%),linear-gradient(180deg,rgba(255,255,255,0.055),rgba(255,255,255,0.02))] p-6 shadow-[0_0_32px_rgba(232,215,175,0.035)] transition duration-300 hover:-translate-y-1 hover:border-[#e8d7af]/24 hover:bg-white/[0.045] sm:p-7 lg:p-8"
        >
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-3xl">
              <p className="text-[0.64rem] uppercase tracking-[0.32em] text-[#e8d7af]/48">
                PREMIUM SERVICE
              </p>
              <h2 className="mt-3 text-2xl font-semibold text-white sm:text-3xl">
                LUXURY HOSPITALITY VIDEO
              </h2>
              <p className="mt-3 text-sm leading-7 text-white/48 sm:text-base">
                Cinematic video for resorts, concierge brands and five-star
                experience companies.
              </p>
            </div>

            <span className="inline-flex w-fit rounded-full border border-[#e8d7af]/14 bg-[#e8d7af]/8 px-4 py-2 text-[0.62rem] uppercase tracking-[0.24em] text-[#f6ead0]/64 transition group-hover:border-[#e8d7af]/28 group-hover:bg-[#e8d7af]/12 group-hover:text-white">
              OPEN PAGE
            </span>
          </div>
        </Link>
      </div>
    </section>
  );
}
