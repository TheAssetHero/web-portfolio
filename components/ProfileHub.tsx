"use client";

import AIProjectWall from "@/components/AIProjectWall";
import { useLanguage } from "@/components/LanguageProvider";
import { useOverlayController } from "@/components/OverlayController";
import Tour360Embed from "@/components/Tour360Embed";
import { resolveText } from "@/lib/localization";
import { profileHubContent } from "@/lib/profile-hub-content";
import { CategoryKey } from "@/lib/portfolio-categories";
import { uiCopy } from "@/lib/ui-copy";

const mainCategoryOrder: CategoryKey[] = ["ai", "3d", "vfx", "dev"];
const GLASS_LINK_TOUR_URL =
  "https://kuula.co/share/collection/7KnpF?logo=1&info=1&fs=1&vr=0&sd=1&thumbs=1";
const GLASS_LINK_PROJECT_URL =
  "https://www.behance.net/gallery/152984169/Glass-Link-House-Pt-I-Vray";

function MainEditorialFeed() {
  const { language } = useLanguage();
  const { activeCategory, selectOverlayCategory } = useOverlayController();
  const category = profileHubContent[activeCategory];

  if (activeCategory === "ai") {
    return <AIProjectWall />;
  }

  if (activeCategory === "3d") {
    return (
      <div className="space-y-6">
        <article className="relative overflow-hidden rounded-[1.7rem] border border-white/12 bg-[linear-gradient(145deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02))] p-5 shadow-[0_0_32px_rgba(255,255,255,0.04)] sm:p-6 lg:p-7">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.08),transparent_48%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.02),transparent_35%,rgba(251,191,36,0.06))]" />
          <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-amber-200/36 to-transparent" />
          <div className="absolute bottom-0 left-8 h-px w-40 bg-gradient-to-r from-amber-200/45 to-transparent" />

          <div className="relative z-10 grid gap-8 xl:grid-cols-[minmax(0,0.72fr)_minmax(0,1fr)] xl:items-start">
            <div className="min-w-0">
              <p className="text-[0.62rem] uppercase tracking-[0.32em] text-white/36">
                3D / ARCHVIZ FEATURE
              </p>
              <h3 className="mt-4 text-2xl font-semibold tracking-[-0.04em] text-white sm:text-3xl lg:text-[2.6rem] lg:leading-[1.04]">
                Glass Link House Project
              </h3>
              <p className="mt-5 max-w-3xl text-xl leading-8 text-white/82 sm:text-2xl sm:leading-9">
                House modeled from 0 to 100% by The Asset Hero, except for
                furniture.
              </p>
              <p className="mt-5 max-w-3xl text-sm leading-7 text-white/52 sm:text-base">
                Architectural visualization project developed through modeling,
                lighting, rendering and a 360 tour.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a
                  href={GLASS_LINK_PROJECT_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full border border-white/12 bg-white/[0.05] px-4 py-2.5 text-[0.68rem] uppercase tracking-[0.24em] text-white/80 transition hover:-translate-y-0.5 hover:border-white/22 hover:bg-white/[0.08] hover:text-white"
                >
                  VIEW PROJECT
                </a>
                <a
                  href="#glass-link-house-tour"
                  className="inline-flex items-center justify-center rounded-full border border-white/12 bg-white/[0.03] px-4 py-2.5 text-[0.68rem] uppercase tracking-[0.24em] text-white/64 transition hover:-translate-y-0.5 hover:border-white/18 hover:bg-white/[0.06] hover:text-white"
                >
                  VIEW 360 TOUR
                </a>
              </div>
            </div>

            <div id="glass-link-house-tour">
              <Tour360Embed
                src={GLASS_LINK_TOUR_URL}
                title="Glass Link House 360 Tour"
              />
            </div>
          </div>
        </article>

        <div className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.02))] p-6 sm:p-7 lg:p-8">
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.03),transparent_28%)]" />
          <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          <div className="absolute bottom-0 left-8 right-24 h-px bg-gradient-to-r from-emerald-300/40 via-white/10 to-transparent" />

          <div className="relative z-10 max-w-4xl">
            <p className="text-[0.62rem] uppercase tracking-[0.3em] text-white/34">
              {resolveText(uiCopy.profileHub.editorialContent, language)}
            </p>
            <p className="mt-4 text-[0.7rem] uppercase tracking-[0.28em] text-white/46">
              {category.label}
            </p>
            <h3 className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-white sm:text-[2.1rem]">
              {resolveText(category.title, language)}
            </h3>
            <p className="mt-5 max-w-4xl text-sm leading-7 text-white/48 sm:text-base">
              {resolveText(category.description, language)}
            </p>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {category.items.map((item) => {
            const actionText =
              item.linkKind === "external"
                ? resolveText(uiCopy.categoryModal.open, language)
                : item.linkKind === "reel"
                  ? resolveText(uiCopy.categoryModal.play, language)
                  : resolveText(item.cta, language);

            return (
              <article
                key={item.id}
                className="relative overflow-hidden rounded-[1.45rem] border border-white/10 bg-[linear-gradient(160deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] p-5 shadow-[0_0_22px_rgba(255,255,255,0.03)] sm:p-6"
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.06),transparent_46%)]" />
                <div className="relative z-10">
                  <p className="text-[0.62rem] uppercase tracking-[0.28em] text-white/34">
                    {resolveText(item.eyebrow, language)}
                  </p>
                  <h4 className="mt-3 text-[1.45rem] font-semibold tracking-[-0.04em] text-white">
                    {resolveText(item.title, language)}
                  </h4>
                  <p className="mt-4 text-sm leading-7 text-white/46 sm:text-base">
                    {resolveText(item.description, language)}
                  </p>
                  <div className="mt-6">
                    <button
                      type="button"
                      onClick={() => selectOverlayCategory(activeCategory)}
                      className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.05] px-4 py-2.5 text-[0.68rem] uppercase tracking-[0.24em] text-white/72 transition hover:border-white/22 hover:bg-white/[0.08] hover:text-white"
                    >
                      {actionText}
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.02))] p-6 sm:p-7 lg:p-8">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.03),transparent_28%)]" />
        <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        <div className="absolute bottom-0 left-8 right-24 h-px bg-gradient-to-r from-emerald-300/40 via-white/10 to-transparent" />

        <div className="relative z-10 max-w-4xl">
          <p className="text-[0.62rem] uppercase tracking-[0.3em] text-white/34">
            {resolveText(uiCopy.profileHub.editorialContent, language)}
          </p>
          <p className="mt-4 text-[0.7rem] uppercase tracking-[0.28em] text-white/46">
            {category.label}
          </p>
          <h3 className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-white sm:text-[2.1rem]">
            {resolveText(category.title, language)}
          </h3>
          <p className="mt-5 max-w-4xl text-sm leading-7 text-white/48 sm:text-base">
            {resolveText(category.description, language)}
          </p>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {category.items.map((item) => {
          const actionText =
            item.linkKind === "external"
              ? resolveText(uiCopy.categoryModal.open, language)
              : item.linkKind === "reel"
                ? resolveText(uiCopy.categoryModal.play, language)
                : resolveText(item.cta, language);

          return (
            <article
              key={item.id}
              className="relative overflow-hidden rounded-[1.45rem] border border-white/10 bg-[linear-gradient(160deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] p-5 shadow-[0_0_22px_rgba(255,255,255,0.03)] sm:p-6"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.06),transparent_46%)]" />
              <div className="relative z-10">
                <p className="text-[0.62rem] uppercase tracking-[0.28em] text-white/34">
                  {resolveText(item.eyebrow, language)}
                </p>
                <h4 className="mt-3 text-[1.45rem] font-semibold tracking-[-0.04em] text-white">
                  {resolveText(item.title, language)}
                </h4>
                <p className="mt-4 text-sm leading-7 text-white/46 sm:text-base">
                  {resolveText(item.description, language)}
                </p>
                <div className="mt-6">
                  <button
                    type="button"
                    onClick={() => selectOverlayCategory(activeCategory)}
                    className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.05] px-4 py-2.5 text-[0.68rem] uppercase tracking-[0.24em] text-white/72 transition hover:border-white/22 hover:bg-white/[0.08] hover:text-white"
                  >
                    {actionText}
                  </button>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}

export default function ProfileHub() {
  const { language } = useLanguage();
  const { activeCategory, selectOverlayCategory } = useOverlayController();

  return (
    <div className="rounded-[2rem] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] shadow-[0_0_60px_rgba(255,255,255,0.03)]">
      <div className="relative overflow-hidden rounded-[2rem] p-6 sm:p-8 md:p-10 lg:p-14">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.03),transparent_30%)]" />
        <div className="pointer-events-none absolute inset-0 bg-[size:32px_32px] bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] opacity-[0.05]" />
        <div className="pointer-events-none absolute -right-24 top-10 h-52 w-52 rounded-full bg-white/[0.05] blur-3xl motion-safe:animate-[breatheGlow_11s_ease-in-out_infinite]" />
        <div className="pointer-events-none absolute -left-20 bottom-16 h-44 w-44 rounded-full bg-white/[0.04] blur-3xl motion-safe:animate-[breatheGlow_13s_ease-in-out_infinite]" />

        <div className="relative z-10 space-y-8">
          <div className="grid gap-6 xl:grid-cols-[minmax(0,1.28fr)_minmax(320px,0.72fr)] xl:items-start">
            <div className="relative overflow-visible rounded-[1.85rem] border border-white/10 bg-white/[0.035] p-6 pt-8 sm:p-7 sm:pt-9 lg:p-8 lg:pt-10">
              <div className="pointer-events-none absolute left-6 right-6 top-0 h-px bg-emerald-300/38 sm:left-7 sm:right-7 lg:left-8 lg:right-8" />
              <div className="pointer-events-none absolute bottom-0 left-6 right-20 h-px bg-gradient-to-r from-emerald-300/52 via-emerald-200/16 to-transparent sm:left-7 sm:right-24 lg:left-8 lg:right-28" />
              <p className="text-[0.64rem] uppercase tracking-[0.32em] text-white/34">
                {resolveText(uiCopy.profileHub.categoryIndex, language)}
              </p>
              <h2 className="mt-4 max-w-4xl text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl lg:max-w-5xl lg:text-[3.1rem] lg:leading-[1.02]">
                {resolveText(uiCopy.profileHub.fieldsTitle, language)}
              </h2>
              <p className="mt-5 max-w-3xl text-sm leading-7 text-white/46 sm:text-base lg:max-w-4xl lg:text-[1.02rem]">
                {resolveText(uiCopy.profileHub.fieldsDescription, language)}
              </p>
            </div>

            <div className="relative overflow-visible rounded-[1.7rem] border border-white/10 bg-white/[0.03] p-5 pt-7 sm:p-6 sm:pt-8 xl:mt-6">
              <div className="pointer-events-none absolute left-5 right-5 top-0 h-px bg-gradient-to-r from-amber-300/52 via-amber-200/18 to-transparent sm:left-6 sm:right-6" />
              <p className="text-[0.68rem] uppercase tracking-[0.34em] text-white/34">
                {resolveText(uiCopy.profileHub.editorialContent, language)}
              </p>

              <div className="mt-6 flex flex-wrap gap-2 sm:gap-3">
                {mainCategoryOrder.map((categoryKey) => {
                  const isActive = categoryKey === activeCategory;

                  return (
                    <button
                      key={categoryKey}
                      type="button"
                      onClick={() => selectOverlayCategory(categoryKey)}
                      className={`rounded-full border px-4 py-2 text-[0.72rem] uppercase tracking-[0.28em] transition ${
                        isActive
                          ? "border-white/22 bg-white/10 text-white shadow-[0_0_24px_rgba(255,255,255,0.07)]"
                          : "border-white/10 bg-white/[0.03] text-white/45 hover:border-white/18 hover:bg-white/[0.05] hover:text-white/78"
                      }`}
                    >
                      {profileHubContent[categoryKey].label}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          <MainEditorialFeed />

          <div className="pt-4">
            <p className="text-[0.72rem] uppercase tracking-[0.34em] text-white/34">
              EDITORIAL DOSSIER
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
