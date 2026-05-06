import ContactModal from "@/components/ContactModal";
import { CategoryKey } from "@/lib/portfolio-categories";

type HeroProps = {
  currentVideo?: string;
  title: string;
  description: string;
  activeCategory: CategoryKey;
  onVideoEnd: () => void;
  children: React.ReactNode;
};

export default function Hero({
  currentVideo,
  title,
  description,
  activeCategory,
  onVideoEnd,
  children,
}: HeroProps) {
  return (
    <section id="showcase" className="relative h-screen w-full overflow-hidden">
      {currentVideo && (
        <video
          key={title + currentVideo}
          src={currentVideo}
          autoPlay
          muted
          playsInline
          onEnded={onVideoEnd}
          className="absolute inset-0 h-full w-full object-cover opacity-60 transition-opacity duration-700"
        />
      )}

      <div className="relative z-10 flex h-full flex-col justify-center px-24">
        <h1 className="text-7xl font-bold leading-[0.9] drop-shadow-xl">{title}</h1>

        <p className="mt-4 max-w-md text-lg text-white/90">{description}</p>

        <div className="mt-6 flex gap-4">
          <a
            href="https://www.youtube.com/@TheAssetHero"
            target="_blank"
            className="rounded-full bg-white px-8 py-3 font-semibold text-black transition hover:bg-zinc-200"
          >
            VIEW CHANNEL
          </a>

          <ContactModal activeCategory={activeCategory} />
        </div>
      </div>

      {children}
    </section>
  );
}
