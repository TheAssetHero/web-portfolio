"use client";

import BrandDiscoverySection from "@/components/BrandDiscoverySection";
import Footer from "@/components/Footer";
import { LanguageProvider } from "@/components/LanguageProvider";
import { OverlayControllerProvider } from "@/components/OverlayController";
import ProfileSection from "@/components/ProfileSection";
import Showcase from "@/components/Showcase";
import VisualProductionTeaser from "@/components/VisualProductionTeaser";

export default function HomeExperience() {
  return (
    <LanguageProvider>
      <OverlayControllerProvider>
        <main className="relative min-h-screen w-screen scroll-smooth bg-black text-white">
          <Showcase />
          <ProfileSection />
          <VisualProductionTeaser />
          <BrandDiscoverySection />
          <Footer />
        </main>
      </OverlayControllerProvider>
    </LanguageProvider>
  );
}
