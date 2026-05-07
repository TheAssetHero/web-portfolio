"use client";

import { useEffect, useState } from "react";

import BottomLauncherNav from "@/components/BottomLauncherNav";
import Hero from "@/components/Hero";
import { useLanguage } from "@/components/LanguageProvider";
import { useOverlayController } from "@/components/OverlayController";
import { resolveText } from "@/lib/localization";
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

const INITIAL_CATEGORY: CategoryKey = "ai";
const INITIAL_INDEX = categoryOrder.indexOf(INITIAL_CATEGORY);

function getInitialVideoMap() {
  return {
    [INITIAL_CATEGORY]: videoBank[INITIAL_CATEGORY][0],
  } satisfies Partial<Record<CategoryKey, string>>;
}

function getRandomVideo(videos: readonly string[], current?: string) {
  const filteredVideos = videos.filter((video) => video !== current);
  const availableVideos = filteredVideos.length > 0 ? filteredVideos : videos;

  return availableVideos[Math.floor(Math.random() * availableVideos.length)];
}

export default function Showcase() {
  const { language } = useLanguage();
  const { isOverlayOpen, openContact } = useOverlayController();
  const [showcaseState, setShowcaseState] = useState(() => ({
    index: INITIAL_INDEX,
    videoMap: getInitialVideoMap(),
  }));

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
  const currentVideo =
    showcaseState.videoMap[currentCategory.key] ?? videoBank[currentCategory.key][0];
  const currentTitle = resolveText(currentCategory.heroTitle, language);
  const currentDescription = resolveText(
    currentCategory.heroDescription,
    language
  );

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
      title={currentTitle}
      description={currentDescription}
      onVideoEnd={handleVideoEnd}
      onOpenContact={openContact}
    >
      <BottomLauncherNav
        activeCategory={currentKey}
        isHidden={isOverlayOpen}
        onSelectCategory={(categoryKey) => {
          const slideIndex = categoryOrder.indexOf(categoryKey);

          setShowcaseState((prev) => ({
            index: slideIndex,
            videoMap: {
              ...prev.videoMap,
              [categoryKey]: getRandomVideo(
                videoBank[categoryKey],
                prev.videoMap[categoryKey]
              ),
            },
          }));
        }}
      />
    </Hero>
  );
}
