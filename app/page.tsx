import Footer from "@/components/Footer";
import ProfileSection from "@/components/ProfileSection";
import Showcase from "@/components/Showcase";

export default function Home() {
  return (
    <main className="relative min-h-screen w-screen scroll-smooth bg-black text-white">
      <Showcase />
      <ProfileSection />
      <Footer />
    </main>
  );
}
