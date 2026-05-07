"use client";

import Footer from "@/components/Footer";
import { OverlayControllerProvider } from "@/components/OverlayController";
import ProfileSection from "@/components/ProfileSection";
import Showcase from "@/components/Showcase";

export default function HomeExperience() {
  return (
    <OverlayControllerProvider>
      <main className="relative min-h-screen w-screen scroll-smooth bg-black text-white">
        <Showcase />
        <ProfileSection />
        <Footer />
      </main>
    </OverlayControllerProvider>
  );
}
