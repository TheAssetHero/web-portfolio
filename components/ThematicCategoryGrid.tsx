"use client";

import { categoryOrder, CategoryKey, portfolioCategories } from "@/lib/portfolio-categories";

type ThematicCategoryGridProps = {
  activeCategory: CategoryKey;
  onSelectCategory: (categoryKey: CategoryKey) => void;
};

export default function ThematicCategoryGrid({
  activeCategory,
  onSelectCategory,
}: ThematicCategoryGridProps) {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-6">
      {categoryOrder.map((categoryKey, index) => {
        const category = portfolioCategories[categoryKey];
        const isActive = categoryKey === activeCategory;
        const spanClass =
          index < 3 ? "xl:col-span-2" : index === 3 ? "xl:col-span-3" : "xl:col-span-3";

        return (
          <button
            key={categoryKey}
            type="button"
            onClick={() => onSelectCategory(categoryKey)}
            className={`${spanClass} group relative overflow-hidden rounded-[1.75rem] border p-5 text-left transition duration-500 sm:p-6 ${
              isActive
                ? "border-white/18 bg-white/[0.08] shadow-[0_0_36px_rgba(255,255,255,0.06)]"
                : "border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] hover:-translate-y-1 hover:scale-[1.01] hover:border-white/18 hover:bg-white/[0.06] hover:shadow-[0_18px_40px_rgba(0,0,0,0.35)]"
            }`}
          >
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.03),transparent_32%)]" />
            <div className="pointer-events-none absolute inset-0 opacity-[0.04] bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:28px_28px]" />
            <div className="pointer-events-none absolute -right-10 top-4 h-28 w-28 rounded-full bg-white/[0.05] blur-3xl transition duration-500 group-hover:opacity-100 motion-safe:animate-[breatheGlow_12s_ease-in-out_infinite]" />

            <div className="relative z-10 flex h-full min-h-[220px] flex-col justify-between">
              <div>
                <p className="text-[0.62rem] uppercase tracking-[0.3em] text-white/36">
                  {category.featureCard.eyebrow}
                </p>
                <h3 className="mt-4 max-w-[18rem] text-2xl font-semibold tracking-[-0.04em] text-white sm:text-[1.75rem]">
                  {category.featureCard.title}
                </h3>
                <p className="mt-4 max-w-[32rem] text-sm leading-7 text-white/48 sm:text-base">
                  {category.featureCard.description}
                </p>
              </div>

              <div className="mt-8 flex items-center gap-3 text-[0.66rem] uppercase tracking-[0.28em] text-white/58">
                <span>{category.featureCard.cta}</span>
                <span className="text-white/26">/</span>
              </div>
            </div>
          </button>
        );
      })}
    </div>
  );
}
