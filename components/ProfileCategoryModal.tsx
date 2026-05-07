"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { useLanguage } from "@/components/LanguageProvider";
import ProfileItemDetailPanel from "@/components/ProfileItemDetailPanel";
import { Language, resolveText } from "@/lib/localization";
import {
  profileHubContent,
  ProfileHubItem,
} from "@/lib/profile-hub-content";
import { categoryOrder, CategoryKey } from "@/lib/portfolio-categories";
import { uiCopy } from "@/lib/ui-copy";

type ProfileCategoryModalProps = {
  activeCategory: CategoryKey;
  activeItemId: string;
  isOpen: boolean;
  onClose: () => void;
  onSelectCategory: (categoryKey: CategoryKey) => void;
  onSelectItem: (categoryKey: CategoryKey, itemId: string) => void;
};

function HubAction({
  item,
  language,
}: {
  item: ProfileHubItem;
  language: Language;
}) {
  const className =
    "inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-[0.68rem] uppercase tracking-[0.24em] text-white/62 transition hover:border-white/22 hover:bg-white/[0.06] hover:text-white";
  const cta = resolveText(item.cta, language);
  const trailingLabel =
    item.linkKind === "reel"
      ? resolveText(uiCopy.categoryModal.play, language)
      : resolveText(uiCopy.categoryModal.open, language);

  if (item.linkKind === "internal") {
    return (
      <Link href={item.href} className={className}>
        {cta}
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
      {cta}
      <span className="text-white/34">{trailingLabel}</span>
    </a>
  );
}

function MinimalHubCard({
  item,
  language,
  onOpenDetail,
}: {
  item: ProfileHubItem;
  language: Language;
  onOpenDetail: (item: ProfileHubItem) => void;
}) {
  const className =
    "group relative flex aspect-square overflow-hidden rounded-[1.25rem] border border-white/10 bg-white/[0.03] p-4 text-left transition duration-300 hover:border-white/18 hover:bg-white/[0.05]";

  const content = (
    <>
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.03),transparent_55%)]" />
      <div className="relative z-10 flex h-full flex-col justify-between">
        <div>
          <p className="text-[0.58rem] uppercase tracking-[0.26em] text-white/32">
            {resolveText(item.eyebrow, language)}
          </p>
          <h5 className="mt-3 max-w-[13rem] text-base font-semibold leading-6 text-white">
            {resolveText(item.title, language)}
          </h5>
        </div>

        <div>
          <p className="line-clamp-3 text-sm leading-6 text-white/40">
            {resolveText(item.description, language)}
          </p>
          <p className="mt-4 text-[0.58rem] uppercase tracking-[0.24em] text-white/46">
            {resolveText(item.cta, language)}
          </p>
        </div>
      </div>
    </>
  );

  if (item.detail) {
    return (
      <button type="button" onClick={() => onOpenDetail(item)} className={className}>
        {content}
      </button>
    );
  }

  if (item.linkKind === "internal") {
    return (
      <Link href={item.href} className={className}>
        {content}
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
      {content}
    </a>
  );
}

function AiCategoryContent({
  items,
  language,
}: {
  items: ProfileHubItem[];
  language: Language;
}) {
  const [detailItemId, setDetailItemId] = useState<string | null>(null);
  const detailItem =
    detailItemId == null
      ? null
      : items.find((item) => item.id === detailItemId && item.detail);

  return (
    <>
      <div className="grid gap-3 md:grid-cols-3">
        {items.map((item) => (
          <MinimalHubCard
            key={item.id}
            item={item}
            language={language}
            onOpenDetail={(selectedItem) => setDetailItemId(selectedItem.id)}
          />
        ))}
      </div>

      {detailItem?.detail ? (
        <ProfileItemDetailPanel
          title={resolveText(detailItem.title, language)}
          subtitle={resolveText(detailItem.detail.subtitle, language)}
          description={resolveText(detailItem.detail.description, language)}
          videoUrl={detailItem.detail.videoUrl}
          extraInfo={
            detailItem.detail.extraInfo
              ? resolveText(detailItem.detail.extraInfo, language)
              : undefined
          }
          externalUrl={detailItem.detail.externalUrl}
          externalCta={
            detailItem.detail.externalCta
              ? resolveText(detailItem.detail.externalCta, language)
              : undefined
          }
          isOpen={detailItem != null}
          onClose={() => setDetailItemId(null)}
          closeAriaLabel={resolveText(
            uiCopy.categoryModal.closeDetailAria,
            language
          )}
          detailLabel={resolveText(uiCopy.categoryModal.detailLabel, language)}
          detailInfoLabel={resolveText(
            uiCopy.categoryModal.detailInfo,
            language
          )}
        />
      ) : null}
    </>
  );
}

export default function ProfileCategoryModal({
  activeCategory,
  activeItemId,
  isOpen,
  onClose,
  onSelectCategory,
  onSelectItem,
}: ProfileCategoryModalProps) {
  const { language } = useLanguage();
  const category = profileHubContent[activeCategory];
  const activeItem =
    category.items.find((item) => item.id === activeItemId) ?? category.items[0];
  const isAiCategory = activeCategory === "ai";
  const categoryTitle = resolveText(category.title, language);
  const categoryDescription = resolveText(category.description, language);
  const activeItemTitle = resolveText(activeItem.title, language);

  return (
    <div
      className={`fixed inset-0 z-[90] flex items-center justify-center bg-black/88 px-4 backdrop-blur-lg transition duration-300 sm:px-6 ${
        isOpen ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
      aria-hidden={!isOpen}
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="profile-category-modal-title"
        className={`relative flex max-h-[calc(100vh-2rem)] w-full max-w-7xl flex-col overflow-hidden rounded-[2rem] border border-white/12 bg-[linear-gradient(180deg,rgba(7,7,10,0.99),rgba(3,3,5,0.97))] shadow-[0_0_60px_rgba(0,0,0,0.5)] transition duration-300 sm:max-h-[calc(100vh-3rem)] ${
          isOpen ? "scale-100 opacity-100" : "scale-95 opacity-0"
        }`}
        onClick={(event) => event.stopPropagation()}
      >
        <div className="pointer-events-none absolute inset-0 rounded-[2rem] border border-white/8" />
        <div className="pointer-events-none absolute inset-0 bg-black/44" />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.03),transparent_22%)]" />
        <div className="pointer-events-none absolute inset-0 opacity-[0.04] bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:34px_34px]" />
        <div className="pointer-events-none absolute -right-24 top-10 h-56 w-56 rounded-full bg-white/[0.04] blur-3xl motion-safe:animate-[breatheGlow_12s_ease-in-out_infinite]" />
        <div className="pointer-events-none absolute -left-20 bottom-12 h-48 w-48 rounded-full bg-white/[0.03] blur-3xl motion-safe:animate-[breatheGlow_14s_ease-in-out_infinite]" />

        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-sm text-white/70 transition hover:border-white/25 hover:bg-white/10 hover:text-white"
          aria-label={resolveText(uiCopy.categoryModal.closeAria, language)}
        >
          X
        </button>

        <div className="relative z-10 flex-1 overflow-y-auto px-5 pb-5 pt-14 sm:px-6 sm:pb-6 sm:pt-16 lg:px-8 lg:pb-8">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-5 border-b border-white/10 pb-6 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p className="text-[0.64rem] uppercase tracking-[0.34em] text-white/34">
                  {resolveText(uiCopy.categoryModal.editorialFeature, language)}
                </p>
                <h3
                  id="profile-category-modal-title"
                  className="mt-3 max-w-3xl text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl lg:text-[2.8rem]"
                >
                  {categoryTitle}
                </h3>
              </div>

              <p className="max-w-2xl text-sm leading-6 text-white/46 sm:text-base">
                {categoryDescription}
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

            {isAiCategory && category.feature && (
              <article className="relative overflow-hidden rounded-[1.6rem] border border-white/12 bg-[linear-gradient(135deg,rgba(255,255,255,0.07),rgba(255,255,255,0.02))] p-5 shadow-[0_0_30px_rgba(255,255,255,0.04)] sm:p-6 lg:p-7">
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_55%)]" />
                <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.02),transparent_35%,rgba(125,211,252,0.04))]" />

                <div className="relative z-10 max-w-4xl">
                  <p className="text-[0.62rem] uppercase tracking-[0.32em] text-white/36">
                    {resolveText(category.feature.eyebrow, language)}
                  </p>
                  <h4 className="mt-4 text-2xl font-semibold tracking-[-0.04em] text-white sm:text-3xl lg:text-[2.4rem]">
                    {resolveText(category.feature.headline, language)}
                  </h4>
                  <p className="mt-3 max-w-3xl text-base leading-7 text-white/64 sm:text-lg">
                    {resolveText(category.feature.subtitle, language)}
                  </p>
                  <p className="mt-5 max-w-3xl text-sm leading-7 text-white/46 sm:text-base">
                    {resolveText(category.feature.description, language)}
                  </p>

                  {category.feature.href && category.feature.cta ? (
                    <div className="mt-6">
                      <a
                        href={category.feature.href}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.06] px-4 py-2.5 text-[0.68rem] uppercase tracking-[0.24em] text-white/78 transition hover:border-white/22 hover:bg-white/[0.1] hover:text-white"
                      >
                        {resolveText(category.feature.cta, language)}
                        <span className="text-white/34">
                          {resolveText(uiCopy.categoryModal.open, language)}
                        </span>
                      </a>
                    </div>
                  ) : null}
                </div>
              </article>
            )}

            {!isAiCategory && category.feature && (
              <article className="relative overflow-hidden rounded-[1.5rem] border border-white/12 bg-[linear-gradient(135deg,rgba(255,255,255,0.07),rgba(255,255,255,0.02))] p-5 shadow-[0_0_30px_rgba(255,255,255,0.04)] sm:p-6 lg:p-7">
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_55%)]" />
                <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.02),transparent_35%,rgba(125,211,252,0.04))]" />

                <div className="relative z-10 max-w-3xl">
                  <p className="text-[0.62rem] uppercase tracking-[0.32em] text-white/36">
                    {resolveText(category.feature.eyebrow, language)}
                  </p>
                  <p className="mt-3 text-sm uppercase tracking-[0.3em] text-white/62 sm:text-base">
                    {resolveText(category.feature.headline, language)}
                  </p>
                  <h4 className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-white sm:text-3xl lg:text-[2.25rem]">
                    {resolveText(category.feature.title, language)}
                  </h4>
                  <p className="mt-3 text-[0.72rem] uppercase tracking-[0.3em] text-white/48 sm:text-[0.78rem]">
                    {resolveText(category.feature.subtitle, language)}
                  </p>
                  <p className="mt-5 max-w-2xl text-sm leading-7 text-white/48 sm:text-base">
                    {resolveText(category.feature.description, language)}
                  </p>
                </div>
              </article>
            )}

            {!isAiCategory &&
              category.announcements &&
              category.announcements.length > 0 && (
              <div className="grid gap-4 lg:grid-cols-2">
                {category.announcements.map((announcement) => (
                  <article
                    key={announcement.id}
                    className="relative overflow-hidden rounded-[1.5rem] border border-white/12 bg-[linear-gradient(160deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] p-5 shadow-[0_0_28px_rgba(255,255,255,0.03)] sm:p-6"
                  >
                    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.08),transparent_45%)]" />
                    <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white/18 to-transparent" />

                    <div className="relative z-10">
                      <p className="text-[0.62rem] uppercase tracking-[0.3em] text-white/34">
                        {resolveText(uiCopy.categoryModal.featuredProject, language)}
                      </p>
                      <h4 className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-white sm:text-[1.9rem]">
                        {resolveText(announcement.projectTitle, language)}
                      </h4>
                      <p className="mt-3 text-lg leading-7 text-white/86">
                        {resolveText(announcement.headline, language)}
                      </p>

                      <div className="mt-4 inline-flex rounded-full border border-white/14 bg-white/[0.07] px-3.5 py-1.5 text-[0.64rem] uppercase tracking-[0.24em] text-white/78 shadow-[0_0_18px_rgba(255,255,255,0.04)]">
                        {resolveText(announcement.releaseInfo, language)}
                      </div>

                      <p className="mt-5 max-w-2xl text-sm leading-7 text-white/48 sm:text-base">
                        {resolveText(announcement.description, language)}
                      </p>

                      <div className="mt-6">
                        <a
                          href={announcement.href}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.05] px-4 py-2.5 text-[0.68rem] uppercase tracking-[0.24em] text-white/72 transition hover:border-white/22 hover:bg-white/[0.08] hover:text-white"
                        >
                          {resolveText(announcement.cta, language)}
                          <span className="text-white/32">
                            {resolveText(uiCopy.categoryModal.open, language)}
                          </span>
                        </a>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            )}

            {isAiCategory &&
              category.announcements &&
              category.announcements.length > 0 && (
                <div className="grid gap-4">
                  {category.announcements.map((announcement) => (
                    <article
                      key={announcement.id}
                      className="relative overflow-hidden rounded-[1.5rem] border border-white/12 bg-[linear-gradient(160deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] p-5 shadow-[0_0_28px_rgba(255,255,255,0.03)] sm:p-6"
                    >
                      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.08),transparent_45%)]" />
                      <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white/18 to-transparent" />

                      <div className="relative z-10">
                        <p className="text-[0.62rem] uppercase tracking-[0.3em] text-white/34">
                          {resolveText(uiCopy.categoryModal.featuredProject, language)}
                        </p>
                        <h4 className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-white sm:text-[1.9rem]">
                          {resolveText(announcement.projectTitle, language)}
                        </h4>
                        <p className="mt-3 text-lg leading-7 text-white/86">
                          {resolveText(announcement.headline, language)}
                        </p>

                        <div className="mt-4 inline-flex rounded-full border border-white/14 bg-white/[0.07] px-3.5 py-1.5 text-[0.64rem] uppercase tracking-[0.24em] text-white/78 shadow-[0_0_18px_rgba(255,255,255,0.04)]">
                          {resolveText(announcement.releaseInfo, language)}
                        </div>

                        <p className="mt-5 max-w-2xl text-sm leading-7 text-white/48 sm:text-base">
                          {resolveText(announcement.description, language)}
                        </p>

                        <div className="mt-6">
                          <a
                            href={announcement.href}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.05] px-4 py-2.5 text-[0.68rem] uppercase tracking-[0.24em] text-white/72 transition hover:border-white/22 hover:bg-white/[0.08] hover:text-white"
                          >
                            {resolveText(announcement.cta, language)}
                            <span className="text-white/32">
                              {resolveText(uiCopy.categoryModal.open, language)}
                            </span>
                          </a>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              )}

            {isAiCategory ? (
              <AiCategoryContent items={category.items} language={language} />
            ) : (
              <>
                <div
                  key={`${activeCategory}-${activeItem.id}`}
                  className="grid gap-4 motion-safe:animate-[panelFade_260ms_ease-out] xl:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]"
                >
                  <div className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/[0.03]">
                    <div className="relative aspect-[16/10] overflow-hidden bg-black">
                      {activeItem.media.type === "youtube" ? (
                        <iframe
                          src={activeItem.media.embedUrl}
                          title={activeItemTitle}
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
                                {resolveText(activeItem.eyebrow, language)}
                              </p>
                              <h4 className="mt-2 text-2xl font-semibold text-white sm:text-[1.9rem]">
                                {activeItemTitle}
                              </h4>
                            </div>

                            <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/14 bg-white/8 text-[0.62rem] uppercase tracking-[0.18em] text-white/74">
                              {activeItem.linkKind === "reel"
                                ? resolveText(uiCopy.categoryModal.play, language)
                                : resolveText(uiCopy.categoryModal.open, language)}
                            </div>
                          </div>
                        </>
                      )}
                    </div>

                    <div className="p-4 sm:p-5 lg:p-6">
                      <p className="text-[0.65rem] uppercase tracking-[0.28em] text-white/34">
                        {resolveText(activeItem.eyebrow, language)}
                      </p>
                      <h4 className="mt-2 text-xl font-semibold text-white sm:text-2xl">
                        {activeItemTitle}
                      </h4>
                      <p className="mt-3 max-w-2xl text-sm leading-6 text-white/48">
                        {resolveText(activeItem.description, language)}
                      </p>

                      <div className="mt-5">
                        <HubAction item={activeItem} language={language} />
                      </div>
                    </div>
                  </div>

                  <div className="grid gap-4">
                    <article className="rounded-[1.4rem] border border-white/10 bg-white/[0.03] p-5 sm:p-6">
                      <p className="text-[0.64rem] uppercase tracking-[0.28em] text-white/32">
                        {resolveText(uiCopy.categoryModal.editorialNote, language)}
                      </p>
                      <h4 className="mt-3 text-lg font-semibold text-white">
                        {resolveText(uiCopy.categoryModal.featuredDirection, language)}
                      </h4>
                      <p className="mt-3 text-sm leading-7 text-white/46">
                        {categoryDescription}{" "}
                        {resolveText(uiCopy.categoryModal.editorialSuffix, language)}
                      </p>
                    </article>

                    <article className="rounded-[1.4rem] border border-white/10 bg-white/[0.03] p-5 sm:p-6">
                      <p className="text-[0.64rem] uppercase tracking-[0.28em] text-white/32">
                        {resolveText(uiCopy.categoryModal.featuredProjects, language)}
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
                              {resolveText(item.eyebrow, language)}
                            </p>
                            <h5 className="mt-2 text-sm font-semibold text-white">
                              {resolveText(item.title, language)}
                            </h5>
                            <p className="mt-2 text-sm leading-6 text-white/42">
                              {resolveText(item.description, language)}
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
                              ? resolveText(uiCopy.categoryModal.video, language)
                              : item.linkKind === "reel"
                                ? resolveText(uiCopy.categoryModal.reel, language)
                                : resolveText(uiCopy.categoryModal.preview, language)}
                          </div>
                        </div>

                        <div className="p-3.5">
                          <p className="text-[0.6rem] uppercase tracking-[0.24em] text-white/34">
                            {resolveText(item.eyebrow, language)}
                          </p>
                          <h5 className="mt-2 text-sm font-semibold text-white">
                            {resolveText(item.title, language)}
                          </h5>
                          <p className="mt-2 line-clamp-3 text-sm leading-6 text-white/42">
                            {resolveText(item.description, language)}
                          </p>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
