import Link from "next/link";

export default function VisualProductionTeaser() {
  return (
    <section className="bg-black px-6 pb-20 pt-0 sm:px-10 md:px-16 lg:px-24">
      <div className="mx-auto max-w-7xl">
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
      </div>
    </section>
  );
}
