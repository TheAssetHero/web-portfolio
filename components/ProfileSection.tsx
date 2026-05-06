import Image from "next/image";

import ProfileHub from "@/components/ProfileHub";

export default function ProfileSection() {
  return (
    <section className="bg-black px-6 py-28 sm:px-10 md:px-16 lg:px-24 lg:py-36">
      <div className="mx-auto max-w-6xl">
        <div className="grid items-start gap-14 rounded-[2rem] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] p-6 shadow-[0_0_60px_rgba(255,255,255,0.03)] sm:p-8 md:gap-16 md:p-10 lg:grid-cols-[minmax(0,0.72fr)_minmax(0,1.28fr)] lg:p-14">
          <div className="flex justify-center lg:justify-start">
            <div className="max-w-xl">
              <div className="group relative w-full max-w-[280px] sm:max-w-[320px]">
                <div className="absolute inset-0 rounded-[2rem] bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.1),transparent_58%)] blur-2xl transition duration-500 group-hover:opacity-100 motion-safe:animate-[breatheGlow_9s_ease-in-out_infinite]" />
                <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] p-3">
                  <div className="absolute inset-0 bg-[linear-gradient(145deg,rgba(255,255,255,0.07),transparent_48%,rgba(255,255,255,0.03))]" />
                  <div className="relative aspect-[4/5] overflow-hidden rounded-[1.6rem] border border-white/8">
                    <Image
                      src="/images/img4.jpeg"
                      alt="Portrait placeholder for Emmanuel Blancas"
                      fill
                      sizes="(max-width: 1024px) 320px, 420px"
                      className="object-cover transition duration-500 group-hover:scale-[1.02]"
                      priority={false}
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.02),rgba(0,0,0,0.28))]" />
                    <div className="absolute inset-0 opacity-[0.08] mix-blend-screen bg-[radial-gradient(circle_at_20%_22%,rgba(86,150,255,0.85)_0.7px,transparent_1px),radial-gradient(circle_at_78%_28%,rgba(255,95,95,0.55)_0.6px,transparent_1px)] bg-[length:120%_120%,120%_120%]" />
                  </div>
                </div>
              </div>

              <div className="mt-10 max-w-xl">
                <p className="text-[0.68rem] uppercase tracking-[0.34em] text-white/38">
                  Creative Technology
                </p>

                <h2 className="mt-5 text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
                  Emmanuel Blancas
                </h2>

                <p className="mt-6 max-w-2xl text-xl leading-8 text-white/84 sm:text-2xl sm:leading-9">
                  Creating high-end visuals, realtime experiences and cinematic
                  technology for modern production.
                </p>

                <div className="mt-10 h-px w-full max-w-xl bg-gradient-to-r from-white/18 via-white/6 to-transparent" />

                <p className="mt-10 max-w-xl text-sm leading-7 text-white/44 sm:text-base">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris.
                </p>
              </div>
            </div>
          </div>

          <ProfileHub />
        </div>
      </div>
    </section>
  );
}
