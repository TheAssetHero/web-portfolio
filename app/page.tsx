import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Plugins from "@/components/Plugins";

export default function Home() {
  return (
    <main className="relative min-h-screen w-screen scroll-smooth bg-black text-white">
      <Hero />
      <Plugins />
      <Footer />
    </main>
  );
}
