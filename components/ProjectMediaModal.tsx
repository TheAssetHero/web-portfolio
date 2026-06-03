"use client";

import Link from "next/link";
import { useEffect } from "react";

type ProjectMediaModalAction = {
  label: string;
  href: string;
  kind: "internal" | "external";
};

type ProjectMediaModalProps = {
  title: string;
  subtitle: string;
  description: string;
  videoUrl: string;
  embedTitle?: string;
  actions?: ProjectMediaModalAction[];
  isOpen: boolean;
  onClose: () => void;
  closeAriaLabel: string;
};

function getEmbeddedMediaUrl(videoUrl: string) {
  if (
    videoUrl.includes("player.vimeo.com/video/") ||
    videoUrl.includes("behance.net/embed/project/") ||
    videoUrl.includes("youtube.com/embed/")
  ) {
    return videoUrl;
  }

  const shortsMatch = videoUrl.match(/youtube\.com\/shorts\/([^?&/]+)/);
  if (shortsMatch) {
    return `https://www.youtube-nocookie.com/embed/${shortsMatch[1]}?rel=0`;
  }

  const shortMatch = videoUrl.match(/youtu\.be\/([^?&]+)/);
  if (shortMatch) {
    return `https://www.youtube-nocookie.com/embed/${shortMatch[1]}?rel=0`;
  }

  const longMatch = videoUrl.match(/[?&]v=([^?&]+)/);
  if (longMatch) {
    return `https://www.youtube-nocookie.com/embed/${longMatch[1]}?rel=0`;
  }

  return null;
}

export default function ProjectMediaModal({
  title,
  subtitle,
  description,
  videoUrl,
  embedTitle,
  actions,
  isOpen,
  onClose,
  closeAriaLabel,
}: ProjectMediaModalProps) {
  const embeddedUrl = getEmbeddedMediaUrl(videoUrl);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  return (
    <div
      className={`fixed inset-0 z-[110] flex items-center justify-center bg-black/86 p-4 backdrop-blur-md transition duration-300 sm:p-6 ${
        isOpen ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
      onClick={onClose}
      aria-hidden={!isOpen}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="ai-project-modal-title"
        className={`relative flex max-h-[88vh] w-full max-w-[1100px] flex-col overflow-hidden rounded-[1.8rem] border border-white/12 bg-[linear-gradient(180deg,rgba(9,9,12,0.98),rgba(4,4,6,0.98))] shadow-[0_0_50px_rgba(0,0,0,0.52)] transition duration-300 ${
          isOpen ? "scale-100 opacity-100" : "scale-[0.98] opacity-0"
        }`}
        onClick={(event) => event.stopPropagation()}
      >
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),transparent_20%)]" />
        <div className="pointer-events-none absolute inset-0 opacity-[0.04] bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:30px_30px]" />
        <div className="pointer-events-none absolute -right-20 top-8 h-48 w-48 rounded-full bg-white/[0.04] blur-3xl motion-safe:animate-[breatheGlow_12s_ease-in-out_infinite]" />

        <button
          type="button"
          onClick={onClose}
          aria-label={closeAriaLabel}
          className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.05] text-sm text-white/72 transition hover:border-white/20 hover:bg-white/[0.1] hover:text-white"
        >
          X
        </button>

        <div className="relative z-10 flex flex-1 flex-col overflow-y-auto p-5 sm:p-6 lg:p-8">
          <div className="border-b border-white/10 pb-5 pr-14">
            <p className="text-[0.62rem] uppercase tracking-[0.3em] text-white/34">
              {subtitle}
            </p>
            <h4
              id="ai-project-modal-title"
              className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl lg:text-[2.7rem]"
            >
              {title}
            </h4>
          </div>

          <div className="mt-5 overflow-hidden rounded-[1.4rem] border border-white/10 bg-black">
            <div className="relative w-full overflow-hidden rounded-[1.15rem] bg-black [aspect-ratio:16/9] max-h-[42vh] sm:max-h-[48vh] lg:max-h-[55vh]">
              {embeddedUrl ? (
                <iframe
                  src={embeddedUrl}
                  title={embedTitle ?? title}
                  allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  loading="lazy"
                  frameBorder="0"
                  className="absolute inset-0 h-full w-full"
                />
              ) : (
                <video
                  src={videoUrl}
                  controls
                  playsInline
                  className="absolute inset-0 h-full w-full object-cover"
                />
              )}
            </div>
          </div>

          <div className="mt-5 rounded-[1.4rem] border border-white/10 bg-white/[0.03] p-5 sm:p-6">
            <p className="text-sm leading-7 text-white/52 sm:text-base">
              {description}
            </p>

            {actions && actions.length > 0 ? (
              <div className="mt-6 flex flex-wrap gap-3">
                {actions.map((action) =>
                  action.kind === "internal" ? (
                    <Link
                      key={`${action.kind}-${action.href}`}
                      href={action.href}
                      className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.05] px-4 py-2.5 text-[0.68rem] uppercase tracking-[0.24em] text-white/74 transition hover:border-white/22 hover:bg-white/[0.08] hover:text-white"
                    >
                      {action.label}
                    </Link>
                  ) : (
                    <a
                      key={`${action.kind}-${action.href}`}
                      href={action.href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.05] px-4 py-2.5 text-[0.68rem] uppercase tracking-[0.24em] text-white/74 transition hover:border-white/22 hover:bg-white/[0.08] hover:text-white"
                    >
                      {action.label}
                    </a>
                  )
                )}
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}
