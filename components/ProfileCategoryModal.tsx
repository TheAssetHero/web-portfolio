import Image from "next/image";
import Link from "next/link";

import {
  profileHubContent,
  ProfileHubItem,
} from "@/lib/profile-hub-content";
import { categoryOrder, CategoryKey } from "@/lib/portfolio-categories";

type ProfileCategoryModalProps = {
  activeCategory: CategoryKey;
  activeItemId: string;
  isVisible: boolean;
  onClose: () => void;
  onSelectCategory: (categoryKey: CategoryKey) => void;
  onSelectItem: (categoryKey: CategoryKey, itemId: string) => void;
};

function HubAction({ item }: { item: ProfileHubItem }) {
  const className =
    "inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-[0.68rem] uppercase tracking-[0.24em] text-white/62 transition hover:border-white/22 hover:bg-white/[0.06] hover:text-white";

  if (item.linkKind === "internal") {
    return (
      <Link href={item.href} className={className}>
        {item.cta}
        <span className="text-white/34">/</span>
      </Link>
    );
  }

  return (
    <a
      href={item.href}
      target={item.linkKind === "external" ? "_blank" : undefined}
      rel={item.linkKind === "external" ? "noreferrer" : undefined}
      className={className}
    >
      {item.cta}
      <span className="text-white/34">
        {item.linkKind === "reel" ? "PLAY" : "OUT"}
      </span>
    </a>
  );
}

export default function ProfileCategoryModal({
  activeCategory,
  activeItemId,
  isVisible,
  onClose,
  onSelectCategory,
  onSelectItem,
}: ProfileCategoryModalProps) {
  const category = profileHubContent[activeCategory];
  const activeItem =
    category.items.find((item) => item.id === activeItemId) ?? category.items[0];

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black/78 px-4 backdrop-blur-md transition duration-300 sm:px-6 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="profile-category-modal-title"
        className={`relative flex max-h-[calc(100vh-2rem)] w-full max-w-7xl flex-col overflow-hidden rounded-[2rem] border border-white/12 bg-[linear-gradient(180deg,rgba(255,255,255,0.07),rgba(255,255,255,0.02))] shadow-[0_0_60px_rgba(255,255,255,0.06)] transition duration-300 sm:max-h-[calc(100vh-3rem)] ${
          isVisible ? "scale-100 opacity-100" : "scale-95 opacity-0"
        }`}
        onClick={(event) => event.stopPropagation()}
      >
        <div className="pointer-events-none absolute inset-0 rounded-[2rem] border border-white/8" />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.03),transparent_22%)]" />
        <div className="pointer-events-none absolute inset-0 opacity-[0.04] bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:34px_34px]" />
        <div className="pointer-events-none absolute -right-24 top-10 h-56 w-56 rounded-full bg-white/[0.05] blur-3xl motion-safe:animate-[breatheGlow_12s_ease-in-out_infinite]" />
        <div className="pointer-events-none absolute -left-20 bottom-12 h-48 w-48 rounded-full bg-white/[0.04] blur-3xl motion-safe:animate-[breatheGlow_14s_ease-in-out_infinite]" />

        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-sm text-white/70 transition hover:border-white/25 hover:bg-white/10 hover:text-white"
          aria-label="Close category modal"
        >
          X
        </button>

        <div className="relative z-10 flex-1 overflow-y-auto px-5 pb-5 pt-14 sm:px-6 sm:pb-6 sm:pt-16 lg:px-8 lg:pb-8">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-5 border-b border-white/10 pb-6 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p className="text-[0.64rem] uppercase tracking-[0.34em] text-white/34">
                  Editorial Feature
                </p>
                <h3
                  id="profile-category-modal-title"
                  className="mt-3 max-w-3xl text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl lg:text-[2.8rem]"
                >
                  {category.title}
                </h3>
              </div>

              <p className="max-w-2xl text-sm leading-6 text-white/46 sm:text-base">
                {category.description}
              </p>
            </div>

            <div className="flex flex-wrap gap-2 sm:gap-3">
              {categoryOrder.map((categoryKey) => {
                const isActive = categoryKey === activeCategory;

                return (
                  <button
                    key={categoryKey}
                    type="button"
                    onClick={() => onSelectCategory(categoryKey)}
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

            {category.feature && (
              <article className="relative overflow-hidden rounded-[1.5rem] border border-white/12 bg-[linear-gradient(135deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02))] p-5 shadow-[0_0_30px_rgba(255,255,255,0.04)] sm:p-6 lg:p-7">
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_55%)]" />
                <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.02),transparent_35%,rgba(125,211,252,0.04))]" />

                <div className="relative z-10 max-w-3xl">
                  <p className="text-[0.62rem] uppercase tracking-[0.32em] text-white/36">
                    {category.feature.eyebrow}
                  </p>
                  <p className="mt-3 text-sm uppercase tracking-[0.3em] text-white/62 sm:text-base">
                    {category.feature.headline}
                  </p>
                  <h4 className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-white sm:text-3xl lg:text-[2.25rem]">
                    {category.feature.title}
                  </h4>
                  <p className="mt-3 text-[0.72rem] uppercase tracking-[0.3em] text-white/48 sm:text-[0.78rem]">
                    {category.feature.subtitle}
                  </p>
                  <p className="mt-5 max-w-2xl text-sm leading-7 text-white/48 sm:text-base">
                    {category.feature.description}
                  </p>
                </div>
              </article>
            )}

            <div
              key={`${activeCategory}-${activeItem.id}`}
              className="grid gap-4 motion-safe:animate-[panelFade_260ms_ease-out] xl:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]"
            >
              <div className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/[0.03]">
                <div className="relative aspect-[16/10] overflow-hidden bg-black">
                  {activeItem.media.type === "youtube" ? (
                    <iframe
                      src={activeItem.media.embedUrl}
                      title={activeItem.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                      className="h-full w-full"
                    />
                  ) : (
                    <>
                      <Image
                        src={activeItem.media.src}
                        alt={activeItem.media.alt}
                        fill
                        sizes="(max-width: 1280px) 100vw, 820px"
                        className="object-cover"
                      />
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${activeItem.accent}`}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/42 to-transparent" />
                      <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4">
                        <div>
                          <p className="text-[0.62rem] uppercase tracking-[0.26em] text-white/54">
                            {activeItem.eyebrow}
                          </p>
                          <h4 className="mt-2 text-2xl font-semibold text-white sm:text-[1.9rem]">
                            {activeItem.title}
                          </h4>
                        </div>

                        <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/14 bg-white/8 text-[0.62rem] uppercase tracking-[0.18em] text-white/74">
                          {activeItem.linkKind === "reel" ? "Play" : "Open"}
                        </div>
                      </div>
                    </>
                  )}
                </div>

                <div className="p-4 sm:p-5 lg:p-6">
                  <p className="text-[0.65rem] uppercase tracking-[0.28em] text-white/34">
                    {activeItem.eyebrow}
                  </p>
                  <h4 className="mt-2 text-xl font-semibold text-white sm:text-2xl">
                    {activeItem.title}
                  </h4>
                  <p className="mt-3 max-w-2xl text-sm leading-6 text-white/48">
                    {activeItem.description}
                  </p>

                  <div className="mt-5">
                    <HubAction item={activeItem} />
                  </div>
                </div>
              </div>

              <div className="grid gap-4">
                <article className="rounded-[1.4rem] border border-white/10 bg-white/[0.03] p-5 sm:p-6">
                  <p className="text-[0.64rem] uppercase tracking-[0.28em] text-white/32">
                    Editorial Note
                  </p>
                  <h4 className="mt-3 text-lg font-semibold text-white">
                    Featured direction
                  </h4>
                  <p className="mt-3 text-sm leading-7 text-white/46">
                    {category.description} Each category opens like a digital
                    feature spread, combining reels, article-style notes, and
                    launch-ready previews inside a focused cinematic overlay.
                  </p>
                </article>

                <article className="rounded-[1.4rem] border border-white/10 bg-white/[0.03] p-5 sm:p-6">
                  <p className="text-[0.64rem] uppercase tracking-[0.28em] text-white/32">
                    Featured Projects
                  </p>
                  <div className="mt-4 space-y-4">
                    {category.items.slice(0, 2).map((item) => (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => onSelectItem(activeCategory, item.id)}
                        className={`block w-full rounded-[1.1rem] border p-4 text-left transition ${
                          item.id === activeItem.id
                            ? "border-white/18 bg-white/[0.06]"
                            : "border-white/10 bg-black/20 hover:border-white/18 hover:bg-white/[0.04]"
                        }`}
                      >
                        <p className="text-[0.58rem] uppercase tracking-[0.24em] text-white/34">
                          {item.eyebrow}
                        </p>
                        <h5 className="mt-2 text-sm font-semibold text-white">
                          {item.title}
                        </h5>
                        <p className="mt-2 text-sm leading-6 text-white/42">
                          {item.description}
                        </p>
                      </button>
                    ))}
                  </div>
                </article>
              </div>
            </div>

            <div className="grid gap-3 md:grid-cols-3">
              {category.items.map((item) => {
                const isSelected = item.id === activeItem.id;

                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => onSelectItem(activeCategory, item.id)}
                    className={`group overflow-hidden rounded-[1.25rem] border text-left transition duration-300 ${
                      isSelected
                        ? "border-white/20 bg-white/[0.06] shadow-[0_0_26px_rgba(255,255,255,0.06)]"
                        : "border-white/10 bg-white/[0.03] hover:-translate-y-0.5 hover:border-white/18 hover:bg-white/[0.05]"
                    }`}
                  >
                    <div className="relative h-40 overflow-hidden">
                      <Image
                        src={item.thumbnail.src}
                        alt={item.thumbnail.alt}
                        fill
                        sizes="(max-width: 1024px) 100vw, 280px"
                        className="object-cover transition duration-500 group-hover:scale-[1.03]"
                      />
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${item.accent}`}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-transparent" />
                      <div className="absolute left-3 top-3 rounded-full border border-white/12 bg-black/35 px-2.5 py-1 text-[0.58rem] uppercase tracking-[0.24em] text-white/64">
                        {item.media.type === "youtube"
                          ? "Video"
                          : item.linkKind === "reel"
                            ? "Reel"
                            : "Preview"}
                      </div>
                    </div>

                    <div className="p-3.5">
                      <p className="text-[0.6rem] uppercase tracking-[0.24em] text-white/34">
                        {item.eyebrow}
                      </p>
                      <h5 className="mt-2 text-sm font-semibold text-white">
                        {item.title}
                      </h5>
                      <p className="mt-2 line-clamp-3 text-sm leading-6 text-white/42">
                        {item.description}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
