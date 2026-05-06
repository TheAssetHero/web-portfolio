import Image from "next/image";
import Link from "next/link";

import { CategoryCard, PortfolioCategory } from "@/lib/portfolio-categories";

function CategoryPanelLink({ card }: { card: CategoryCard }) {
  const sharedClassName =
    "inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-[0.68rem] uppercase tracking-[0.24em] text-white/62 transition hover:border-white/22 hover:bg-white/[0.06] hover:text-white";

  if (card.linkKind === "internal") {
    return (
      <Link href={card.href} className={sharedClassName}>
        {card.cta}
        <span className="text-white/35">/</span>
      </Link>
    );
  }

  return (
    <a
      href={card.href}
      target={card.linkKind === "external" ? "_blank" : undefined}
      rel={card.linkKind === "external" ? "noreferrer" : undefined}
      className={sharedClassName}
    >
      {card.cta}
      <span className="text-white/35">
        {card.linkKind === "reel" ? "PLAY" : "OUT"}
      </span>
    </a>
  );
}

export default function CategoryPanel({
  category,
}: {
  category: PortfolioCategory;
}) {
  return (
    <div
      key={category.key}
      className="mt-6 rounded-[1.8rem] border border-white/10 bg-white/[0.03] p-3 shadow-[0_0_55px_rgba(255,255,255,0.03)] motion-safe:animate-[panelFade_260ms_ease-out] sm:p-4"
    >
      <div className="relative overflow-hidden rounded-[1.45rem] border border-white/8 bg-black/25 p-4 sm:p-5">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.06),transparent_52%)]" />
        <div className="pointer-events-none absolute inset-0 opacity-[0.05] mix-blend-screen bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.85)_0.6px,transparent_0.9px),radial-gradient(circle_at_80%_30%,rgba(255,255,255,0.55)_0.4px,transparent_0.8px),radial-gradient(circle_at_30%_80%,rgba(255,255,255,0.45)_0.4px,transparent_0.8px)] bg-[length:18px_18px,23px_23px,29px_29px]" />

        <div className="relative z-10">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-[0.65rem] uppercase tracking-[0.32em] text-white/34">
                {category.label} Launchpad
              </p>
              <h3 className="mt-2 text-xl font-semibold text-white sm:text-2xl">
                {category.panelTitle}
              </h3>
            </div>

            <p className="max-w-md text-sm leading-6 text-white/46">
              {category.panelDescription}
            </p>
          </div>

          <div className="mt-5 grid gap-4 lg:grid-cols-3">
            {category.cards.map((card) => (
              <article
                key={card.title}
                className="group relative overflow-hidden rounded-[1.4rem] border border-white/10 bg-white/[0.03] transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.05] hover:shadow-[0_18px_45px_rgba(0,0,0,0.32)]"
              >
                <div className="relative h-44 overflow-hidden">
                  {card.media ? (
                    <Image
                      src={card.media.src}
                      alt={card.media.alt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 33vw"
                      className="object-cover transition duration-500 group-hover:scale-[1.04]"
                    />
                  ) : null}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${card.accent}`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                  <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.14),transparent_56%)] motion-safe:animate-[breatheGlow_7.5s_ease-in-out_infinite]" />
                  </div>
                  <div className="pointer-events-none absolute inset-0 opacity-[0.08] mix-blend-screen bg-[radial-gradient(circle_at_16%_24%,rgba(77,148,255,0.75)_0.7px,transparent_1px),radial-gradient(circle_at_84%_30%,rgba(255,92,92,0.55)_0.6px,transparent_1px)] bg-[length:120%_120%,120%_120%]" />

                  <div className="absolute left-4 top-4 flex items-center gap-2">
                    <span className="rounded-full border border-white/12 bg-black/35 px-2.5 py-1 text-[0.62rem] uppercase tracking-[0.25em] text-white/65">
                      {card.subtitle}
                    </span>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-4">
                    <div>
                      <h4 className="text-lg font-semibold text-white">
                        {card.title}
                      </h4>
                    </div>

                    <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/14 bg-white/8 text-[0.6rem] uppercase tracking-[0.18em] text-white/74 transition group-hover:scale-105 group-hover:border-white/24 group-hover:bg-white/12">
                      {card.linkKind === "reel" ? "Play" : "Open"}
                    </div>
                  </div>
                </div>

                <div className="p-4">
                  <p className="text-sm leading-6 text-white/48">
                    {card.description}
                  </p>

                  <div className="mt-4">
                    <CategoryPanelLink card={card} />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
