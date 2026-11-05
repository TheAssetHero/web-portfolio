import { LanguageProvider } from "@/components/LanguageProvider";
import { OverlayControllerProvider } from "@/components/OverlayController";
import Showcase from "@/components/Showcase";

export default function Home() {
  return (
    <LanguageProvider>
      <OverlayControllerProvider>
        <main className="relative min-h-screen w-full bg-black text-white">
          <Showcase />
        </main>
      </OverlayControllerProvider>
    </LanguageProvider>
  );
}
