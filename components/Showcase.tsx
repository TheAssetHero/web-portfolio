"use client";

import { useEffect, useState } from "react";

import Hero from "@/components/Hero";
import {
  categoryOrder,
  CategoryKey,
  portfolioCategories,
} from "@/lib/portfolio-categories";

const videoBank: Record<CategoryKey, readonly string[]> = {
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
    const initialIndex = Math.floor(Math.random() * categoryOrder.length);
    const initialKey = categoryOrder[initialIndex];

    return {
      index: initialIndex,
      videoMap: {
        [initialKey]: getRandomVideo(videoBank[initialKey]),
      } satisfies Partial<Record<CategoryKey, string>>,
    };
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setShowcaseState((prev) => {
        const nextIndex = (prev.index + 1) % categoryOrder.length;
        const nextKey = categoryOrder[nextIndex];

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

  const currentKey = categoryOrder[showcaseState.index];
  const currentCategory = portfolioCategories[currentKey];
  const currentVideo = showcaseState.videoMap[currentCategory.key];

  const handleVideoEnd = () => {
    setShowcaseState((prev) => {
      const key = currentKey;
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
      title={currentCategory.heroTitle}
      description={currentCategory.heroDescription}
      onVideoEnd={handleVideoEnd}
    >
      <div className="absolute bottom-12 left-1/2 z-20 flex -translate-x-1/2 gap-10">
        {categoryOrder.map((categoryKey, slideIndex) => (
          <div
            key={categoryKey}
            onClick={() =>
              setShowcaseState((prev) => ({
                index: slideIndex,
                videoMap: {
                  ...prev.videoMap,
                  [categoryKey]: getRandomVideo(
                    videoBank[categoryKey],
                    prev.videoMap[categoryKey]
                  ),
                },
              }))
            }
            className={`relative cursor-pointer transition-all duration-300 ${
              slideIndex === showcaseState.index
                ? "scale-125 text-lg tracking-wide text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.6)]"
                : "text-sm text-white/40 hover:text-white/80"
            }`}
          >
            {portfolioCategories[categoryKey].label}

            {slideIndex === showcaseState.index && (
              <div className="absolute left-0 -bottom-2 h-[2px] w-full rounded-full bg-white" />
            )}
          </div>
        ))}
      </div>
    </Hero>
  );
}
