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
  const activeCategoryContent = profileHubContent[activeCategory];
  const activeCategoryTitle = resolveText(activeCategoryContent.title, language);
  const activeCategoryDescription = resolveText(
    activeCategoryContent.description,
    language
  );

  return (
    <div className="rounded-[2rem] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] shadow-[0_0_60px_rgba(255,255,255,0.03)]">
      <div className="relative overflow-hidden rounded-[2rem] p-6 sm:p-8 md:p-10 lg:p-14">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.03),transparent_30%)]" />
        <div className="pointer-events-none absolute inset-0 opacity-[0.05] bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:32px_32px]" />
        <div className="pointer-events-none absolute -right-24 top-10 h-52 w-52 rounded-full bg-white/[0.05] blur-3xl motion-safe:animate-[breatheGlow_11s_ease-in-out_infinite]" />
        <div className="pointer-events-none absolute -left-20 bottom-16 h-44 w-44 rounded-full bg-white/[0.04] blur-3xl motion-safe:animate-[breatheGlow_13s_ease-in-out_infinite]" />

        <div className="relative z-10 flex flex-col gap-6 lg:gap-8">
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
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[1.9rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.02))] p-6 sm:p-7 lg:p-8">
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.03),transparent_28%)]" />
            <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            <div className="pointer-events-none absolute bottom-0 left-8 right-24 h-px bg-gradient-to-r from-emerald-300/40 via-white/10 to-transparent" />

            <div className="relative z-10 grid gap-8 lg:grid-cols-[minmax(220px,0.42fr)_minmax(0,1fr)] lg:items-start">
              <div className="relative overflow-visible pt-5">
                <div className="pointer-events-none absolute left-0 right-10 top-0 h-px bg-gradient-to-r from-emerald-300/42 via-emerald-200/14 to-transparent" />
                <p className="text-[0.62rem] uppercase tracking-[0.3em] text-white/34">
                  {resolveText(uiCopy.profileHub.editorialContent, language)}
                </p>
                <p className="mt-4 text-[0.7rem] uppercase tracking-[0.28em] text-white/46">
                  {activeCategoryContent.label}
                </p>
                <h3 className="mt-3 max-w-sm text-2xl font-semibold tracking-[-0.04em] text-white sm:text-[2rem]">
                  {activeCategoryTitle}
                </h3>
              </div>

              <div className="space-y-6">
                <p className="max-w-4xl text-sm leading-7 text-white/44 sm:text-base">
                  {resolveText(uiCopy.profileHub.editorialDescription, language)}
                </p>
                <p className="max-w-4xl text-sm leading-7 text-white/56 sm:text-base">
                  {activeCategoryDescription}
                </p>

                <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
                  {activeCategoryContent.items.slice(0, 3).map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => openCategory(activeCategory)}
                      className="rounded-[1.1rem] border border-white/10 bg-black/20 px-4 py-4 text-left transition hover:border-white/18 hover:bg-white/[0.04]"
                    >
                      <p className="text-[0.58rem] uppercase tracking-[0.24em] text-white/34">
                        {resolveText(item.eyebrow, language)}
                      </p>
                      <h4 className="mt-2 text-sm font-semibold text-white">
                        {resolveText(item.title, language)}
                      </h4>
                      <p className="mt-2 text-sm leading-6 text-white/42">
                        {resolveText(item.description, language)}
                      </p>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
