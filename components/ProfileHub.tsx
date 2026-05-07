"use client";

import ThematicCategoryGrid from "@/components/ThematicCategoryGrid";
import { useOverlayController } from "@/components/OverlayController";
import { profileHubContent } from "@/lib/profile-hub-content";
import { categoryOrder, CategoryKey } from "@/lib/portfolio-categories";

type ProfileHubProps = {
  activeCategory: CategoryKey;
  onCategorySelect: (categoryKey: CategoryKey) => void;
};

export default function ProfileHub({
  activeCategory,
  onCategorySelect,
}: ProfileHubProps) {
  const { openCategory } = useOverlayController();

  return (
    <div className="rounded-[2rem] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] shadow-[0_0_60px_rgba(255,255,255,0.03)]">
      <div className="relative overflow-hidden rounded-[2rem] p-6 sm:p-8 md:p-10 lg:p-14">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.03),transparent_30%)]" />
        <div className="pointer-events-none absolute inset-0 opacity-[0.05] bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:32px_32px]" />
        <div className="pointer-events-none absolute -right-24 top-10 h-52 w-52 rounded-full bg-white/[0.05] blur-3xl motion-safe:animate-[breatheGlow_11s_ease-in-out_infinite]" />
        <div className="pointer-events-none absolute -left-20 bottom-16 h-44 w-44 rounded-full bg-white/[0.04] blur-3xl motion-safe:animate-[breatheGlow_13s_ease-in-out_infinite]" />

        <div className="relative z-10">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-[0.64rem] uppercase tracking-[0.32em] text-white/34">
                Editorial Categories
              </p>
              <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl">
                Cinematic fields, production worlds, and systems thinking.
              </h2>
            </div>

            <p className="max-w-xl text-sm leading-7 text-white/44 sm:text-base">
              Use these thematic cards as the main category separators, then
              open the lighter strip below when you want the dedicated editorial
              modal for each field.
            </p>
          </div>

          <div className="mt-8">
            <ThematicCategoryGrid
              activeCategory={activeCategory}
              onSelectCategory={onCategorySelect}
            />
          </div>

          <div className="mt-10 rounded-[1.6rem] border border-white/10 bg-white/[0.03] p-4 sm:p-5">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <p className="text-[0.62rem] uppercase tracking-[0.3em] text-white/32">
                  Editorial Launcher
                </p>
                <p className="mt-3 text-sm leading-7 text-white/44 sm:text-base">
                  Open each category overlay for releases, project cards, reels,
                  and technical notes.
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {categoryOrder.map((categoryKey) => {
                  const isActive = categoryKey === activeCategory;

                  return (
                    <button
                      key={categoryKey}
                      type="button"
                      onClick={() => {
                        onCategorySelect(categoryKey);
                        openCategory(categoryKey);
                      }}
                      className={`rounded-full border px-3.5 py-2 text-[0.66rem] uppercase tracking-[0.26em] transition ${
                        isActive
                          ? "border-white/18 bg-white/10 text-white shadow-[0_0_18px_rgba(255,255,255,0.05)]"
                          : "border-white/10 bg-white/[0.03] text-white/45 hover:border-white/18 hover:bg-white/[0.05] hover:text-white/78"
                      }`}
                    >
                      {profileHubContent[categoryKey].label}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="mt-6 h-px w-full bg-gradient-to-r from-white/18 via-white/6 to-transparent" />
          </div>
        </div>
      </div>
    </div>
  );
}
