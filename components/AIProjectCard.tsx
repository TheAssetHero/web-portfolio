"use client";

import Image from "next/image";

import { AIProjectWallItem } from "@/lib/ai-project-wall-content";
import { Language, resolveText } from "@/lib/localization";

type AIProjectCardProps = {
  project: AIProjectWallItem;
  language: Language;
  onOpen: (project: AIProjectWallItem) => void;
};

function getTileClasses(size: AIProjectWallItem["size"]) {
  switch (size) {
    case "wide":
      return "md:col-span-2 lg:col-span-6";
    case "large":
    case "medium":
      return "md:col-span-1 lg:col-span-3";
    case "small":
    default:
      return "md:col-span-1 lg:col-span-2";
  }
}

function getMediaClasses(size: AIProjectWallItem["size"]) {
  if (size === "small") {
    return "aspect-[4/3]";
  }

  return "aspect-video";
}

export default function AIProjectCard({
  project,
  language,
  onOpen,
}: AIProjectCardProps) {
  const title = resolveText(project.title, language);
  const type = resolveText(project.type, language);
  const shortDescription = resolveText(project.shortDescription, language);
  const isSmall = project.size === "small";
  const isWide = project.size === "wide";

  return (
    <button
      type="button"
      onClick={() => onOpen(project)}
      className={`group relative overflow-hidden rounded-[1.65rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.025))] p-4 text-left shadow-[0_0_28px_rgba(255,255,255,0.035)] transition duration-300 hover:-translate-y-1 hover:border-white/18 hover:bg-white/[0.045] hover:shadow-[0_0_38px_rgba(255,255,255,0.06)] sm:p-5 lg:p-6 ${getTileClasses(
        project.size
      )}`}
    >
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),transparent_24%)]" />
      <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white/18 to-transparent" />
      <div className="pointer-events-none absolute bottom-0 left-8 right-20 h-px bg-gradient-to-r from-emerald-300/30 via-white/10 to-transparent" />

      <div className="relative z-10 flex h-full flex-col gap-5">
        <div
          className={`relative overflow-hidden rounded-[1.25rem] border border-white/10 bg-black/80 shadow-[0_0_22px_rgba(0,0,0,0.28)] ${getMediaClasses(
            project.size
          )}`}
        >
          {project.preview.kind === "embed" ? (
            <div className="pointer-events-none absolute inset-0">
              <iframe
                src={project.preview.src}
                title={project.preview.title}
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                loading="lazy"
                frameBorder="0"
                className="absolute inset-0 h-full w-full"
              />
            </div>
          ) : (
            <Image
              src={project.preview.src}
              alt={project.preview.alt}
              fill
              sizes={
                isSmall
                  ? "(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 360px"
                  : "(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 720px"
              }
              className="object-cover transition duration-500 group-hover:scale-[1.03]"
            />
          )}

          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.03),transparent_42%,rgba(0,0,0,0.18))]" />
        </div>

        <div
          className={`flex flex-1 flex-col ${isWide ? "lg:max-w-4xl" : ""}`}
        >
          <p className="text-[0.62rem] uppercase tracking-[0.28em] text-white/42">
            {type}
          </p>
          <h4 className="mt-3 text-2xl font-semibold text-white sm:text-[1.75rem]">
            {title}
          </h4>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-white/52 sm:text-base">
            {shortDescription}
          </p>
          <div className="mt-5">
            <span className="inline-flex rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-2 text-[0.62rem] uppercase tracking-[0.24em] text-white/58 transition group-hover:border-white/18 group-hover:bg-white/[0.07] group-hover:text-white/78">
              OPEN PROJECT
            </span>
          </div>
        </div>
      </div>
    </button>
  );
}
