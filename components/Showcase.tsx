"use client";

import BottomLauncherNav from "@/components/BottomLauncherNav";
import Hero from "@/components/Hero";
import { useOverlayController } from "@/components/OverlayController";
import { CategoryKey } from "@/lib/portfolio-categories";

type ShowcaseProps = {
  activeCategory: CategoryKey;
  currentVideo?: string;
  title: string;
  description: string;
  onCategorySelect: (categoryKey: CategoryKey) => void;
  onVideoEnd: () => void;
};

export default function Showcase({
  activeCategory,
  currentVideo,
  title,
  description,
  onCategorySelect,
  onVideoEnd,
}: ShowcaseProps) {
  const { isOverlayOpen, openContact } = useOverlayController();

  return (
    <Hero
      currentVideo={currentVideo}
      title={title}
      description={description}
      onVideoEnd={onVideoEnd}
      onOpenContact={openContact}
    >
      <BottomLauncherNav
        activeCategory={activeCategory}
        isHidden={isOverlayOpen}
        onSelectCategory={onCategorySelect}
      />
    </Hero>
  );
}
