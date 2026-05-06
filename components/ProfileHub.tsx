"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import {
  profileHubContent,
  ProfileHubItem,
} from "@/lib/profile-hub-content";
import { categoryOrder, CategoryKey } from "@/lib/portfolio-categories";

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

export default function ProfileHub() {
  const [activeCategory, setActiveCategory] = useState<CategoryKey>("ai");
  const [selectedItemByCategory, setSelectedItemByCategory] = useState<
    Record<CategoryKey, string>
  >(() => ({
    ai: profileHubContent.ai.items[0].id,
    vp: profileHubContent.vp.items[0].id,
    "3d": profileHubContent["3d"].items[0].id,
    vfx: profileHubContent.vfx.items[0].id,
    dev: profileHubContent.dev.items[0].id,
  }));

  const category = profileHubContent[activeCategory];
  const activeItem =
    category.items.find(
      (item) => item.id === selectedItemByCategory[activeCategory]
    ) ?? category.items[0];

  return (
    <div className="w-full max-w-[40rem]">
      <div className="flex gap-2 overflow-x-auto pb-1">
        {categoryOrder.map((categoryKey) => {
          const isActive = categoryKey === activeCategory;

          return (
            <button
              key={categoryKey}
              type="button"
              onClick={() => setActiveCategory(categoryKey)}
              className={`shrink-0 rounded-full border px-4 py-2 text-[0.7rem] uppercase tracking-[0.26em] transition ${
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

      <div
        key={activeCategory}
        className="mt-6 rounded-[1.9rem] border border-white/10 bg-white/[0.03] p-3 shadow-[0_0_55px_rgba(255,255,255,0.03)] motion-safe:animate-[panelFade_260ms_ease-out] sm:p-4"
      >
        <div className="relative overflow-hidden rounded-[1.5rem] border border-white/8 bg-black/30 p-4 sm:p-5">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.06),transparent_52%)]" />
          <div className="pointer-events-none absolute inset-0 opacity-[0.05] mix-blend-screen bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.85)_0.6px,transparent_0.9px),radial-gradient(circle_at_80%_30%,rgba(255,255,255,0.55)_0.4px,transparent_0.8px),radial-gradient(circle_at_30%_80%,rgba(255,255,255,0.45)_0.4px,transparent_0.8px)] bg-[length:18px_18px,23px_23px,29px_29px]" />
          <div className="pointer-events-none absolute -right-12 top-10 h-32 w-32 rounded-full bg-white/7 blur-3xl motion-safe:animate-[breatheGlow_10s_ease-in-out_infinite]" />

          <div className="relative z-10">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-[0.65rem] uppercase tracking-[0.32em] text-white/34">
                  {category.label} Content Hub
                </p>
                <h3 className="mt-2 max-w-xl text-xl font-semibold text-white sm:text-2xl">
                  {category.title}
                </h3>
              </div>

              <p className="max-w-md text-sm leading-6 text-white/46">
                {category.description}
              </p>
            </div>

            <div className="mt-5 overflow-hidden rounded-[1.35rem] border border-white/10 bg-white/[0.03]">
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
                      sizes="(max-width: 1024px) 100vw, 640px"
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
                        <h4 className="mt-2 text-2xl font-semibold text-white">
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

              <div className="p-4 sm:p-5">
                <p className="text-[0.65rem] uppercase tracking-[0.28em] text-white/34">
                  {activeItem.eyebrow}
                </p>
                <h4 className="mt-2 text-xl font-semibold text-white">
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

            <div className="mt-5 grid gap-3 sm:grid-cols-3">
              {category.items.map((item) => {
                const isSelected = item.id === activeItem.id;

                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() =>
                      setSelectedItemByCategory((current) => ({
                        ...current,
                        [activeCategory]: item.id,
                      }))
                    }
                    className={`group overflow-hidden rounded-[1.25rem] border text-left transition duration-300 ${
                      isSelected
                        ? "border-white/20 bg-white/[0.06] shadow-[0_0_26px_rgba(255,255,255,0.06)]"
                        : "border-white/10 bg-white/[0.03] hover:-translate-y-0.5 hover:border-white/18 hover:bg-white/[0.05]"
                    }`}
                  >
                    <div className="relative h-32 overflow-hidden">
                      <Image
                        src={item.thumbnail.src}
                        alt={item.thumbnail.alt}
                        fill
                        sizes="(max-width: 1024px) 100vw, 220px"
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

                    <div className="p-3">
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
