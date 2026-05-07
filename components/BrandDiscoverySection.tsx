"use client";

import Image from "next/image";

import { useOverlayController } from "@/components/OverlayController";

export default function BrandDiscoverySection() {
  const { openBrand } = useOverlayController();

  return (
    <section className="bg-black px-6 pb-28 pt-4 sm:px-10 md:px-16 lg:px-24 lg:pb-36">
      <div className="mx-auto max-w-6xl">
        <div className="rounded-[2rem] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] shadow-[0_0_60px_rgba(255,255,255,0.03)]">
          <div className="relative overflow-hidden rounded-[2rem] p-6 sm:p-8 md:p-10 lg:p-14">
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.03),transparent_30%)]" />
            <div className="pointer-events-none absolute inset-0 opacity-[0.05] bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:32px_32px]" />
            <div className="pointer-events-none absolute -right-24 top-10 h-52 w-52 rounded-full bg-white/[0.05] blur-3xl motion-safe:animate-[breatheGlow_11s_ease-in-out_infinite]" />
            <div className="pointer-events-none absolute -left-20 bottom-16 h-44 w-44 rounded-full bg-white/[0.04] blur-3xl motion-safe:animate-[breatheGlow_13s_ease-in-out_infinite]" />

            <div className="relative z-10 grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(260px,0.4fr)]">
              <div>
                <p className="text-[0.68rem] uppercase tracking-[0.34em] text-white/34">
                  Editorial Dossier
                </p>

                <button
                  type="button"
                  onClick={openBrand}
                  className="mt-5 block text-left transition hover:text-white/92"
                >
                  <h2 className="text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
                    Who Is The Asset Hero?
                  </h2>
                </button>

                <p className="mt-6 max-w-3xl text-xl leading-8 text-white/82 sm:text-2xl sm:leading-9">
                  Creative technology behind cinematic systems.
                </p>

                <button
                  type="button"
                  onClick={openBrand}
                  className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-[0.68rem] uppercase tracking-[0.28em] text-white/58 transition hover:border-white/18 hover:bg-white/[0.06] hover:text-white"
                >
                  Enter
                  <span className="text-white/30">/</span>
                </button>
              </div>

              <div className="flex justify-center lg:justify-end">
                <button
                  type="button"
                  onClick={openBrand}
                  className="group relative w-full max-w-[220px] text-left sm:max-w-[250px]"
                >
                  <div className="absolute inset-0 rounded-[2rem] bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.1),transparent_58%)] blur-2xl transition duration-500 group-hover:opacity-100 motion-safe:animate-[breatheGlow_9s_ease-in-out_infinite]" />
                  <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] p-3">
                    <div className="absolute inset-0 bg-[linear-gradient(145deg,rgba(255,255,255,0.07),transparent_48%,rgba(255,255,255,0.03))]" />
                    <div className="relative aspect-[4/5] overflow-hidden rounded-[1.6rem] border border-white/8">
                      <Image
                        src="/images/img4.jpeg"
                        alt="Portrait placeholder for The Asset Hero"
                        fill
                        sizes="(max-width: 1024px) 250px, 320px"
                        className="object-cover transition duration-500 group-hover:scale-[1.02]"
                      />
                      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.02),rgba(0,0,0,0.28))]" />
                    </div>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
