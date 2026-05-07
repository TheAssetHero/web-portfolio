"use client";

import { useLanguage } from "@/components/LanguageProvider";
import { useOverlayController } from "@/components/OverlayController";
import { resolveText } from "@/lib/localization";
import { profileHubContent } from "@/lib/profile-hub-content";
import { categoryOrder } from "@/lib/portfolio-categories";
import { uiCopy } from "@/lib/ui-copy";

export default function ProfileHub() {
  const { language } = useLanguage();
  const { activeCategory, openCategory } = useOverlayController();

  return (
    <div className="rounded-[2rem] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] shadow-[0_0_60px_rgba(255,255,255,0.03)]">
      <div className="relative overflow-hidden rounded-[2rem] p-6 sm:p-8 md:p-10 lg:p-14">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.03),transparent_30%)]" />
        <div className="pointer-events-none absolute inset-0 opacity-[0.05] bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:32px_32px]" />
        <div className="pointer-events-none absolute -right-24 top-10 h-52 w-52 rounded-full bg-white/[0.05] blur-3xl motion-safe:animate-[breatheGlow_11s_ease-in-out_infinite]" />
        <div className="pointer-events-none absolute -left-20 bottom-16 h-44 w-44 rounded-full bg-white/[0.04] blur-3xl motion-safe:animate-[breatheGlow_13s_ease-in-out_infinite]" />

        <div className="relative z-10 grid items-start gap-10 lg:grid-cols-[minmax(240px,0.42fr)_minmax(0,1fr)]">
          <div className="relative overflow-visible rounded-[1.8rem] border border-white/10 bg-white/[0.03] p-5 pt-7 sm:p-6 sm:pt-8">
            <div className="pointer-events-none absolute left-5 right-5 top-0 h-px bg-emerald-300/38 sm:left-6 sm:right-6" />
            <div className="pointer-events-none absolute bottom-0 left-5 right-14 h-px bg-gradient-to-r from-emerald-300/50 via-emerald-200/16 to-transparent sm:left-6 sm:right-18" />
            <p className="text-[0.64rem] uppercase tracking-[0.32em] text-white/34">
              {resolveText(uiCopy.profileHub.categoryIndex, language)}
            </p>
            <h2 className="mt-4 text-2xl font-semibold tracking-[-0.04em] text-white sm:text-3xl">
              {resolveText(uiCopy.profileHub.fieldsTitle, language)}
            </h2>
            <p className="mt-4 text-sm leading-7 text-white/46 sm:text-base">
              {resolveText(uiCopy.profileHub.fieldsDescription, language)}
            </p>
          </div>

          <div className="relative overflow-visible pt-5">
            <div className="pointer-events-none absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-amber-300/52 via-amber-200/18 to-transparent" />
            <p className="text-[0.68rem] uppercase tracking-[0.34em] text-white/34">
              {resolveText(uiCopy.profileHub.editorialContent, language)}
            </p>

            <div className="mt-6 flex flex-wrap gap-2 sm:gap-3">
              {categoryOrder.map((categoryKey) => {
                const isActive = categoryKey === activeCategory;

                return (
                  <button
                    key={categoryKey}
                    type="button"
                    onClick={() => openCategory(categoryKey)}
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

            <p className="mt-8 max-w-2xl text-sm leading-7 text-white/44 sm:text-base">
              {resolveText(uiCopy.profileHub.editorialDescription, language)}
            </p>

            <div className="mt-10 h-px w-full max-w-2xl bg-gradient-to-r from-white/18 via-white/6 to-transparent" />
          </div>
        </div>
      </div>
    </div>
  );
}
