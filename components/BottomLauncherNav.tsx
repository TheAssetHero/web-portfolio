import { categoryOrder, CategoryKey, portfolioCategories } from "@/lib/portfolio-categories";

type BottomLauncherNavProps = {
  activeCategory: CategoryKey;
  isHidden: boolean;
  onSelectCategory: (categoryKey: CategoryKey) => void;
};

export default function BottomLauncherNav({
  activeCategory,
  isHidden,
  onSelectCategory,
}: BottomLauncherNavProps) {
  return (
    <div
      className={`absolute bottom-6 left-1/2 z-30 w-[calc(100%-1.5rem)] max-w-6xl -translate-x-1/2 transition duration-300 sm:bottom-8 sm:w-[calc(100%-3rem)] ${
        isHidden ? "pointer-events-none translate-y-4 opacity-0" : "opacity-100"
      }`}
    >
      <div className="rounded-[1.75rem] border border-white/10 bg-black/58 px-3 py-3 shadow-[0_0_40px_rgba(0,0,0,0.45)] backdrop-blur-xl sm:px-4 lg:px-5">
        <div className="flex justify-center">
          <div className="flex flex-wrap items-center justify-center gap-2 rounded-[1.4rem] border border-white/8 bg-white/[0.03] p-2">
            {categoryOrder.map((categoryKey) => {
              const isActive = categoryKey === activeCategory;

              return (
                <button
                  key={categoryKey}
                  type="button"
                  onClick={() => onSelectCategory(categoryKey)}
                  className={`rounded-full px-3.5 py-2 text-[0.68rem] uppercase tracking-[0.28em] transition sm:px-4 ${
                    isActive
                      ? "border border-white/16 bg-white/12 text-white shadow-[0_0_22px_rgba(255,255,255,0.06)]"
                      : "border border-transparent bg-transparent text-white/48 hover:border-white/10 hover:bg-white/[0.05] hover:text-white/82"
                  }`}
                >
                  {portfolioCategories[categoryKey].label}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
