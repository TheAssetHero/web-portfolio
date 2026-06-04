const services = [
  {
    label: "MOTION / DESIGN",
    title: "Motion Graphics",
    description:
      "Animated design for visual identity, digital content, promos, intros, screen graphics and audiovisual communication.",
  },
  {
    label: "ANIMATION / 2D",
    title: "2D Animation",
    description:
      "Graphic animation, compositing, editing and motion for narrative pieces, commercials and social content.",
  },
  {
    label: "ANIMATION / 3D",
    title: "3D Animation",
    description:
      "Animation, lighting, rendering and compositing of 3D elements for visualization, product, architecture and cinematic storytelling.",
  },
  {
    label: "VIDEO / DIRECTION",
    title: "Video Production",
    description:
      "Video production and editing with visual direction, rhythm, composition, audio and cinematic finishing.",
  },
  {
    label: "3D / VIDEO",
    title: "3D Video Production",
    description:
      "Audiovisual production based on 3D assets, virtual cameras, digital environments and final compositing.",
  },
  {
    label: "UNREAL / REALTIME",
    title: "Virtual Production",
    description:
      "Realtime scene creation, digital environments and Unreal Engine workflows for previs, cinematic content and virtual production.",
  },
];

export default function VisualProductionWall() {
  return (
    <section className="space-y-8">
      <div className="max-w-3xl">
        <p className="text-[0.64rem] uppercase tracking-[0.32em] text-white/34">
          Service Wall
        </p>
        <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
          Visual production systems for moving images.
        </h2>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-6 xl:gap-8">
        {services.map((service, index) => {
          const isWide = index === 0 || index === 5;

          return (
            <article
              key={service.title}
              className={`group relative overflow-hidden rounded-[1.65rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.025))] p-6 shadow-[0_0_28px_rgba(255,255,255,0.035)] transition duration-300 hover:-translate-y-1 hover:border-white/18 hover:bg-white/[0.045] hover:shadow-[0_0_38px_rgba(255,255,255,0.06)] lg:p-7 ${
                isWide ? "md:col-span-2 lg:col-span-3" : "lg:col-span-2"
              }`}
            >
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),transparent_24%)]" />
              <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white/18 to-transparent" />
              <div className="pointer-events-none absolute bottom-0 left-8 right-20 h-px bg-gradient-to-r from-emerald-300/30 via-white/10 to-transparent" />
              <div className="relative z-10 flex min-h-[17rem] flex-col justify-between">
                <div>
                  <p className="text-[0.62rem] uppercase tracking-[0.28em] text-white/42">
                    {service.label}
                  </p>
                  <h3 className="mt-4 text-2xl font-semibold text-white sm:text-[1.75rem]">
                    {service.title}
                  </h3>
                  <p className="mt-4 max-w-2xl text-sm leading-7 text-white/52 sm:text-base">
                    {service.description}
                  </p>
                </div>
                <div className="mt-8 h-24 overflow-hidden rounded-[1.2rem] border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02))]">
                  <div className="h-full w-full bg-[linear-gradient(120deg,rgba(255,255,255,0.08),transparent_35%,rgba(74,222,128,0.1))]" />
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
