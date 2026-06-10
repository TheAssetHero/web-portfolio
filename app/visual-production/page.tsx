import type { Metadata } from "next";
import Link from "next/link";

import VimeoEmbed from "@/components/VimeoEmbed";

export const metadata: Metadata = {
  title: "Visual Production | The Asset Hero",
  description:
    "Motion graphics, animation, video production and visual content by The Asset Hero.",
};

const showcaseVideos = [
  {
    title: "Visual Production Reel",
    src: "https://player.vimeo.com/video/800745908",
  },
  {
    title: "Motion / Cinematic Production",
    src: "https://player.vimeo.com/video/947165403",
  },
  {
    title: "3D / Virtual Production Preview",
    src: "https://player.vimeo.com/video/858107285",
  },
];

export default function VisualProductionPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="relative overflow-hidden px-6 pb-20 pt-8 sm:px-10 md:px-16 lg:px-24 lg:pb-28">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),transparent_26%)]" />
        <div className="pointer-events-none absolute inset-0 bg-[size:36px_36px] bg-[linear-gradient(rgba(255,255,255,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] opacity-[0.05]" />

        <div className="relative z-10 mx-auto max-w-7xl">
          <Link
            href="/"
            className="inline-flex rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-[0.68rem] uppercase tracking-[0.24em] text-white/62 transition hover:border-white/18 hover:bg-white/[0.07] hover:text-white"
          >
            BACK TO HOME
          </Link>

          <div className="mt-16 max-w-5xl">
            <p className="text-[0.68rem] uppercase tracking-[0.34em] text-white/38">
              THE ASSET HERO STUDIO
            </p>
            <h1 className="mt-5 text-5xl font-semibold text-white sm:text-6xl lg:text-7xl">
              Visual Production
            </h1>
            <p className="mt-6 max-w-4xl text-xl leading-8 text-white/82 sm:text-2xl sm:leading-9">
              Motion graphics, animation, video production and visual content
              for brands, cinematic projects and digital experiences.
            </p>
            <p className="mt-6 max-w-3xl text-sm leading-7 text-white/50 sm:text-base">
              I develop visual pieces from concept, visual direction and
              animation to final production, integrating 2D, 3D, video, Unreal
              Engine and virtual production workflows.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 pb-24 sm:px-10 md:px-16 lg:px-24">
        <div className="mx-auto max-w-7xl space-y-8">
          <div className="max-w-3xl">
            <p className="text-[0.64rem] uppercase tracking-[0.32em] text-white/34">
              Selected Visual Production Work
            </p>
            <p className="mt-4 text-sm leading-7 text-white/46 sm:text-base">
              Large-format previews for motion, cinematic production and 3D
              visual direction.
            </p>
          </div>

          <article className="rounded-[1.85rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.025))] p-4 shadow-[0_0_36px_rgba(255,255,255,0.045)] sm:p-5 lg:p-7">
            <VimeoEmbed
              src={showcaseVideos[0].src}
              title={showcaseVideos[0].title}
            />
            <div className="mt-6 max-w-4xl">
              <p className="text-[0.62rem] uppercase tracking-[0.3em] text-white/34">
                Featured Reel
              </p>
              <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
                {showcaseVideos[0].title}
              </h2>
            </div>
          </article>

          <div className="grid gap-6 lg:grid-cols-2 xl:gap-8">
            {showcaseVideos.slice(1).map((video) => (
              <article
                key={video.src}
                className="rounded-[1.65rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.025))] p-4 shadow-[0_0_28px_rgba(255,255,255,0.035)] sm:p-5 lg:p-6"
              >
                <VimeoEmbed src={video.src} title={video.title} />
                <h2 className="mt-5 text-2xl font-semibold text-white">
                  {video.title}
                </h2>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 pb-28 sm:px-10 md:px-16 lg:px-24 lg:pb-36">
        <div className="mx-auto max-w-7xl">
          <div className="overflow-hidden rounded-[1.85rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.025))] p-6 shadow-[0_0_34px_rgba(255,255,255,0.04)] sm:p-8 lg:p-10">
            <p className="text-[0.64rem] uppercase tracking-[0.32em] text-white/34">
              Production Direction
            </p>
            <h2 className="mt-4 max-w-4xl text-3xl font-semibold text-white sm:text-4xl">
              Visual systems for cinematic production.
            </h2>
            <p className="mt-5 max-w-3xl text-sm leading-7 text-white/50 sm:text-base">
              From animated pieces to 3D environments and virtual production,
              the goal is to build visuals with direction, technique and
              clarity.
            </p>
            <a
              href="mailto:contact@theassethero.com"
              className="mt-7 inline-flex rounded-full border border-white/12 bg-white/[0.05] px-5 py-3 text-[0.7rem] uppercase tracking-[0.24em] text-white/74 transition hover:border-white/22 hover:bg-white/[0.08] hover:text-white"
            >
              CONTACT
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
