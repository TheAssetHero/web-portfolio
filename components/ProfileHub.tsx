"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import ProfileCategoryModal from "@/components/ProfileCategoryModal";
import { profileHubContent } from "@/lib/profile-hub-content";
import { categoryOrder, CategoryKey } from "@/lib/portfolio-categories";

type ModalState = "closed" | "opening" | "open" | "closing";

const modalTransitionMs = 260;

export default function ProfileHub() {
  const [activeCategory, setActiveCategory] = useState<CategoryKey>("ai");
  const [modalState, setModalState] = useState<ModalState>("closed");
  const [selectedItemByCategory, setSelectedItemByCategory] = useState<
    Record<CategoryKey, string>
  >(() => ({
    ai: profileHubContent.ai.items[0].id,
    vp: profileHubContent.vp.items[0].id,
    "3d": profileHubContent["3d"].items[0].id,
    vfx: profileHubContent.vfx.items[0].id,
    dev: profileHubContent.dev.items[0].id,
  }));

  const isMounted = modalState !== "closed";
  const isVisible = modalState === "opening" || modalState === "open";

  useEffect(() => {
    if (modalState === "opening") {
      const frame = window.requestAnimationFrame(() => {
        setModalState("open");
      });

      return () => window.cancelAnimationFrame(frame);
    }

    if (modalState === "closing") {
      const timeout = window.setTimeout(() => {
        setModalState("closed");
      }, modalTransitionMs);

      return () => window.clearTimeout(timeout);
    }
  }, [modalState]);

  useEffect(() => {
    if (!isMounted) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setModalState((currentState) =>
          currentState === "closed" ? currentState : "closing"
        );
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMounted]);

  const openCategory = (categoryKey: CategoryKey) => {
    setActiveCategory(categoryKey);
    setModalState((currentState) =>
      currentState === "closed" ? "opening" : "open"
    );
  };

  const closeModal = () => {
    setModalState((currentState) =>
      currentState === "closed" ? currentState : "closing"
    );
  };

  return (
    <>
      <div className="rounded-[2rem] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] shadow-[0_0_60px_rgba(255,255,255,0.03)]">
        <div className="relative overflow-hidden rounded-[2rem] p-6 sm:p-8 md:p-10 lg:p-14">
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.03),transparent_30%)]" />
          <div className="pointer-events-none absolute inset-0 opacity-[0.05] bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:32px_32px]" />
          <div className="pointer-events-none absolute -right-24 top-10 h-52 w-52 rounded-full bg-white/[0.05] blur-3xl motion-safe:animate-[breatheGlow_11s_ease-in-out_infinite]" />
          <div className="pointer-events-none absolute -left-20 bottom-16 h-44 w-44 rounded-full bg-white/[0.04] blur-3xl motion-safe:animate-[breatheGlow_13s_ease-in-out_infinite]" />

          <div className="relative z-10">
            <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,0.38fr)_minmax(0,1fr)]">
              <div className="flex justify-center lg:justify-start">
                <div className="group relative w-full max-w-[220px] sm:max-w-[250px]">
                  <div className="absolute inset-0 rounded-[2rem] bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.1),transparent_58%)] blur-2xl transition duration-500 group-hover:opacity-100 motion-safe:animate-[breatheGlow_9s_ease-in-out_infinite]" />
                  <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] p-3">
                    <div className="absolute inset-0 bg-[linear-gradient(145deg,rgba(255,255,255,0.07),transparent_48%,rgba(255,255,255,0.03))]" />
                    <div className="relative aspect-[4/5] overflow-hidden rounded-[1.6rem] border border-white/8">
                      <Image
                        src="/images/img4.jpeg"
                        alt="Portrait placeholder for Emmanuel Blancas"
                        fill
                        sizes="(max-width: 1024px) 250px, 320px"
                        className="object-cover transition duration-500 group-hover:scale-[1.02]"
                      />
                      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.02),rgba(0,0,0,0.28))]" />
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <p className="text-[0.68rem] uppercase tracking-[0.34em] text-white/38">
                  Creative Technology
                </p>

                <h2 className="mt-5 text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
                  Emmanuel Blancas
                </h2>

                <p className="mt-6 max-w-3xl text-xl leading-8 text-white/84 sm:text-2xl sm:leading-9">
                  Creating high-end visuals, realtime experiences and cinematic
                  technology for modern production.
                </p>

                <div className="mt-8 flex flex-wrap gap-2 sm:gap-3">
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
                  Select a category to open a cinematic editorial overlay with
                  reels, featured projects, and studio notes.
                </p>

                <div className="mt-10 h-px w-full max-w-2xl bg-gradient-to-r from-white/18 via-white/6 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {isMounted && (
        <ProfileCategoryModal
          activeCategory={activeCategory}
          activeItemId={selectedItemByCategory[activeCategory]}
          isVisible={isVisible}
          onClose={closeModal}
          onSelectCategory={setActiveCategory}
          onSelectItem={(categoryKey, itemId) =>
            setSelectedItemByCategory((current) => ({
              ...current,
              [categoryKey]: itemId,
            }))
          }
        />
      )}
    </>
  );
}
