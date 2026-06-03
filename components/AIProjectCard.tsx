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
      return "md:col-span-2 xl:col-span-4 xl:row-span-1 min-h-[20rem]";
    case "large":
      return "md:col-span-2 xl:col-span-2 xl:row-span-2 min-h-[24rem] xl:min-h-[33rem]";
    case "medium":
      return "md:col-span-1 xl:col-span-2 xl:row-span-1 min-h-[20rem]";
    case "small":
    default:
      return "md:col-span-1 xl:col-span-1 xl:row-span-1 min-h-[18rem]";
  }
}

export default function AIProjectCard({
  project,
  language,
  onOpen,
}: AIProjectCardProps) {
  const title = resolveText(project.title, language);
  const type = resolveText(project.type, language);

  return (
    <button
      type="button"
      onClick={() => onOpen(project)}
      className={`group relative overflow-hidden rounded-[1.7rem] border border-white/10 bg-[linear-gradient(160deg,rgba(255,255,255,0.07),rgba(255,255,255,0.02))] text-left shadow-[0_0_28px_rgba(255,255,255,0.04)] transition duration-300 hover:-translate-y-1 hover:scale-[1.01] hover:border-white/18 hover:shadow-[0_0_36px_rgba(255,255,255,0.06)] ${getTileClasses(
        project.size
      )}`}
    >
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),transparent_24%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.08),transparent_44%)]" />
      <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      <div className="pointer-events-none absolute bottom-0 left-6 right-16 h-px bg-gradient-to-r from-emerald-300/35 via-white/12 to-transparent" />

      <div className="absolute inset-0 overflow-hidden">
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
              className="absolute inset-0 h-full w-full scale-[1.01]"
            />
          </div>
        ) : (
          <Image
            src={project.preview.src}
            alt={project.preview.alt}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
            className="object-cover transition duration-500 group-hover:scale-[1.03]"
          />
        )}

        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.12),transparent_28%,rgba(0,0,0,0.84))]" />
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.02),transparent_48%,rgba(74,222,128,0.08))]" />
      </div>

      <div className="relative z-10 flex h-full flex-col justify-end p-5 sm:p-6">
        <p className="text-[0.58rem] uppercase tracking-[0.3em] text-white/45">
          {type}
        </p>
        <h4 className="mt-3 text-[1.4rem] font-semibold tracking-[-0.04em] text-white sm:text-[1.7rem]">
          {title}
        </h4>
        <p className="mt-4 text-[0.62rem] uppercase tracking-[0.26em] text-white/54 transition group-hover:text-white/72">
          OPEN PROJECT
        </p>
      </div>
    </button>
  );
}
