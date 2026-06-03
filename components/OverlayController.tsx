"use client";

import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

import BrandProfileModal from "@/components/BrandProfileModal";
import ContactModal from "@/components/ContactModal";
import ProfileCategoryModal from "@/components/ProfileCategoryModal";
import { profileHubContent } from "@/lib/profile-hub-content";
import { CategoryKey } from "@/lib/portfolio-categories";

type OverlayKind = "none" | "contact" | "brand" | "category";

type OverlayControllerValue = {
  activeCategory: CategoryKey;
  activeOverlay: OverlayKind;
  isOverlayOpen: boolean;
  openBrand: () => void;
  openCategory: (categoryKey: CategoryKey) => void;
  openContact: () => void;
  closeOverlay: () => void;
  selectCategoryItem: (categoryKey: CategoryKey, itemId: string) => void;
  selectOverlayCategory: (categoryKey: CategoryKey) => void;
  selectedItemByCategory: Record<CategoryKey, string>;
};

const OverlayControllerContext = createContext<OverlayControllerValue | null>(
  null
);

function getInitialSelection() {
  return {
    ai: profileHubContent.ai.items[0].id,
    "3d": profileHubContent["3d"].items[0].id,
    vfx: profileHubContent.vfx.items[0].id,
    dev: profileHubContent.dev.items[0].id,
  } satisfies Record<CategoryKey, string>;
}

export function OverlayControllerProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [activeOverlay, setActiveOverlay] = useState<OverlayKind>("none");
  const [activeCategory, setActiveCategory] = useState<CategoryKey>("ai");
  const [selectedItemByCategory, setSelectedItemByCategory] =
    useState<Record<CategoryKey, string>>(getInitialSelection);

  const isOverlayOpen = activeOverlay !== "none";

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = isOverlayOpen ? "hidden" : previousOverflow;

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isOverlayOpen]);

  useEffect(() => {
    if (!isOverlayOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveOverlay("none");
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOverlayOpen]);

  const value = useMemo<OverlayControllerValue>(
    () => ({
      activeCategory,
      activeOverlay,
      isOverlayOpen,
      openBrand: () => setActiveOverlay("brand"),
      openCategory: (categoryKey) => {
        setActiveCategory(categoryKey);
        setActiveOverlay("category");
      },
      openContact: () => setActiveOverlay("contact"),
      closeOverlay: () => setActiveOverlay("none"),
      selectCategoryItem: (categoryKey, itemId) => {
        setSelectedItemByCategory((current) => ({
          ...current,
          [categoryKey]: itemId,
        }));
      },
      selectOverlayCategory: (categoryKey) => {
        setActiveCategory(categoryKey);
      },
      selectedItemByCategory,
    }),
    [activeCategory, activeOverlay, isOverlayOpen, selectedItemByCategory]
  );

  return (
    <OverlayControllerContext.Provider value={value}>
      <div className={isOverlayOpen ? "pointer-events-none" : ""}>
        {children}
      </div>

      <ContactModal
        isOpen={activeOverlay === "contact"}
        onClose={() => setActiveOverlay("none")}
      />

      <BrandProfileModal
        isOpen={activeOverlay === "brand"}
        onClose={() => setActiveOverlay("none")}
      />

      <ProfileCategoryModal
        activeCategory={activeCategory}
        activeItemId={selectedItemByCategory[activeCategory]}
        isOpen={activeOverlay === "category"}
        onClose={() => setActiveOverlay("none")}
        onSelectCategory={setActiveCategory}
        onSelectItem={(categoryKey, itemId) => {
          setSelectedItemByCategory((current) => ({
            ...current,
            [categoryKey]: itemId,
          }));
        }}
      />
    </OverlayControllerContext.Provider>
  );
}

export function useOverlayController() {
  const context = useContext(OverlayControllerContext);

  if (!context) {
    throw new Error(
      "useOverlayController must be used within an OverlayControllerProvider"
    );
  }

  return context;
}
