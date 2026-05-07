"use client";

import { useEffect, useState } from "react";

import BrandDiscoverySection from "@/components/BrandDiscoverySection";
import Footer from "@/components/Footer";
import { OverlayControllerProvider } from "@/components/OverlayController";
import ProfileSection from "@/components/ProfileSection";
import Showcase from "@/components/Showcase";
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

export default function HomeExperience() {
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

  const activeCategory = categoryOrder[showcaseState.index];
  const activePortfolioCategory = portfolioCategories[activeCategory];
  const currentVideo = showcaseState.videoMap[activePortfolioCategory.key];

  const selectCategory = (categoryKey: CategoryKey) => {
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
  };

  const handleVideoEnd = () => {
    setShowcaseState((prev) => {
      const key = categoryOrder[prev.index];
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
    <OverlayControllerProvider>
      <main className="relative min-h-screen w-screen scroll-smooth bg-black text-white">
        <Showcase
          activeCategory={activeCategory}
          currentVideo={currentVideo}
          title={activePortfolioCategory.heroTitle}
          description={activePortfolioCategory.heroDescription}
          onCategorySelect={selectCategory}
          onVideoEnd={handleVideoEnd}
        />
        <ProfileSection
          activeCategory={activeCategory}
          onCategorySelect={selectCategory}
        />
        <BrandDiscoverySection />
        <Footer />
      </main>
    </OverlayControllerProvider>
  );
}
