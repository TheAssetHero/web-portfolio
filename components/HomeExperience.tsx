"use client";

import BrandDiscoverySection from "@/components/BrandDiscoverySection";
import Footer from "@/components/Footer";
import { LanguageProvider } from "@/components/LanguageProvider";
import LanguageToggle from "@/components/LanguageToggle";
import { OverlayControllerProvider } from "@/components/OverlayController";
import ProfileSection from "@/components/ProfileSection";
import Showcase from "@/components/Showcase";

export default function HomeExperience() {
  return (
    <LanguageProvider>
      <OverlayControllerProvider>
        <LanguageToggle />
        <main className="relative min-h-screen w-screen scroll-smooth bg-black text-white">
          <Showcase />
          <ProfileSection />
          <BrandDiscoverySection />
          <Footer />
        </main>
      </OverlayControllerProvider>
    </LanguageProvider>
  );
}
