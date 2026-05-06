"use client";

import { useEffect, useState } from "react";

import Hero from "@/components/Hero";

const slides = [
  { key: "ai", title: "AI PRODUCTION", desc: "AI-assisted workflows." },
  { key: "vp", title: "VIRTUAL PRODUCTION", desc: "Unreal Engine pipelines." },
  { key: "3d", title: "3D PRODUCTION", desc: "From modeling to cinematic output." },
  { key: "vfx", title: "VFX", desc: "Real-time and cinematic FX." },
  { key: "dev", title: "DEV / UI / UX", desc: "Interactive systems." },
] as const;

type SlideKey = (typeof slides)[number]["key"];

const videoBank: Record<SlideKey, readonly string[]> = {
  ai: ["/videos/ai1.mp4", "/videos/ai2.mp4", "/videos/ai3.mp4"],
  vp: ["/videos/vp1.mp4", "/videos/vp2.mp4"],
  "3d": ["/videos/3d1.mp4", "/videos/3d2.mp4"],
  vfx: ["/videos/vfx1.mp4", "/videos/vfx2.mp4"],
  dev: ["/videos/dev1.mp4", "/videos/dev2.mp4"],
};

function getRandomVideo(videos: readonly string[], current?: string) {
  const filteredVideos = videos.filter((video) => video !== current);
  const availableVideos = filteredVideos.length > 0 ? filteredVideos : videos;

  return availableVideos[Math.floor(Math.random() * availableVideos.length)];
}

export default function Showcase() {
  const [showcaseState, setShowcaseState] = useState(() => {
    const initialIndex = Math.floor(Math.random() * slides.length);
    const initialKey = slides[initialIndex].key;

    return {
      index: initialIndex,
      videoMap: {
        [initialKey]: getRandomVideo(videoBank[initialKey]),
      } satisfies Partial<Record<SlideKey, string>>,
    };
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setShowcaseState((prev) => {
        const nextIndex = (prev.index + 1) % slides.length;
        const nextKey = slides[nextIndex].key;

        return {
          index: nextIndex,
          videoMap: {
            ...prev.videoMap,
            [nextKey]: getRandomVideo(videoBank[nextKey], prev.videoMap[nextKey]),
          },
        };
      });
    }, 7000);

    return () => clearInterval(interval);
  }, []);

  const currentSlide = slides[showcaseState.index];
  const currentVideo = showcaseState.videoMap[currentSlide.key];

  const handleVideoEnd = () => {
    setShowcaseState((prev) => {
      const key = currentSlide.key;
      const videos = videoBank[key];

      return {
        ...prev,
        videoMap: {
          ...prev.videoMap,
          [key]: getRandomVideo(videos, prev.videoMap[key]),
        },
      };
    });
  };

  return (
    <Hero
      currentVideo={currentVideo}
      title={currentSlide.title}
      description={currentSlide.desc}
      onVideoEnd={handleVideoEnd}
    >
      <div className="absolute bottom-12 left-1/2 z-20 flex -translate-x-1/2 gap-10">
        {slides.map((slide, slideIndex) => (
          <div
            key={slide.key}
            onClick={() =>
              setShowcaseState((prev) => ({
                index: slideIndex,
                videoMap: {
                  ...prev.videoMap,
                  [slide.key]: getRandomVideo(videoBank[slide.key], prev.videoMap[slide.key]),
                },
              }))
            }
            className={`relative cursor-pointer transition-all duration-300 ${
              slideIndex === showcaseState.index
                ? "scale-125 text-lg tracking-wide text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.6)]"
                : "text-sm text-white/40 hover:text-white/80"
            }`}
          >
            {slide.key.toUpperCase()}

            {slideIndex === showcaseState.index && (
              <div className="absolute left-0 -bottom-2 h-[2px] w-full rounded-full bg-white" />
            )}
          </div>
        ))}
      </div>
    </Hero>
  );
}
