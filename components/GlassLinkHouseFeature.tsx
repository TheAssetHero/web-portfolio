import Tour360Embed from "@/components/Tour360Embed";

const TOUR_URL =
  "https://kuula.co/share/collection/7KnpF?logo=1&info=1&fs=1&vr=0&sd=1&thumbs=1";
const PROJECT_URL =
  "https://www.behance.net/gallery/152984169/Glass-Link-House-Pt-I-Vray";

export default function GlassLinkHouseFeature() {
  return (
    <section className="bg-black px-6 pb-20 pt-0 sm:px-10 md:px-16 lg:px-24 lg:pb-24">
      <div className="mx-auto max-w-7xl">
        <div className="rounded-[2rem] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] shadow-[0_0_60px_rgba(255,255,255,0.03)]">
          <div className="relative overflow-hidden rounded-[2rem] p-6 sm:p-8 md:p-10 lg:p-14">
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.03),transparent_32%)]" />
            <div className="pointer-events-none absolute inset-0 opacity-[0.05] bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:32px_32px]" />
            <div className="pointer-events-none absolute -right-24 top-10 h-52 w-52 rounded-full bg-white/[0.05] blur-3xl motion-safe:animate-[breatheGlow_11s_ease-in-out_infinite]" />
            <div className="pointer-events-none absolute -left-20 bottom-16 h-44 w-44 rounded-full bg-white/[0.04] blur-3xl motion-safe:animate-[breatheGlow_13s_ease-in-out_infinite]" />

            <div className="relative z-10 space-y-8">
              <div className="grid gap-8 xl:grid-cols-[minmax(0,0.72fr)_minmax(0,1fr)] xl:items-start">
                <div>
                  <p className="text-[0.68rem] uppercase tracking-[0.34em] text-white/34">
                    ARCHVIZ / 360 EXPERIENCE
                  </p>
                  <h2 className="mt-5 text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">
                    Glass Link House Project
                  </h2>
                  <p className="mt-6 max-w-2xl text-xl leading-8 text-white/82 sm:text-2xl sm:leading-9">
                    Casa modelada de 0 a 100% por The Asset Hero, excepto
                    mobiliario.
                  </p>
                  <p className="mt-5 max-w-2xl text-sm leading-7 text-white/58 sm:text-base">
                    Proyecto de visualización arquitectónica desarrollado con
                    modelado, iluminación, render y recorrido 360.
                  </p>

                  <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                    <a
                      href={PROJECT_URL}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center rounded-full border border-white/12 bg-white/[0.05] px-4 py-2.5 text-[0.68rem] uppercase tracking-[0.24em] text-white/80 transition hover:-translate-y-0.5 hover:border-white/22 hover:bg-white/[0.08] hover:text-white"
                    >
                      VER PROYECTO
                    </a>
                    <a
                      href="#glass-link-house-tour"
                      className="inline-flex items-center justify-center rounded-full border border-white/12 bg-white/[0.03] px-4 py-2.5 text-[0.68rem] uppercase tracking-[0.24em] text-white/64 transition hover:-translate-y-0.5 hover:border-white/18 hover:bg-white/[0.06] hover:text-white"
                    >
                      VER TOUR 360
                    </a>
                  </div>
                </div>

                <div id="glass-link-house-tour">
                  <Tour360Embed
                    src={TOUR_URL}
                    title="Glass Link House 360 Tour"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
