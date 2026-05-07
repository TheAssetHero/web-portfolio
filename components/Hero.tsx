type HeroProps = {
  currentVideo?: string;
  title: string;
  description: string;
  onVideoEnd: () => void;
  onOpenContact: () => void;
  children: React.ReactNode;
};

export default function Hero({
  currentVideo,
  title,
  description,
  onVideoEnd,
  onOpenContact,
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

      <div className="relative z-10 flex h-full flex-col justify-center px-6 sm:px-10 lg:px-24">
        <h1 className="max-w-4xl text-5xl font-bold leading-[0.9] drop-shadow-xl sm:text-6xl lg:text-7xl">
          {title}
        </h1>

        <p className="mt-4 max-w-md text-base text-white/90 sm:text-lg">
          {description}
        </p>

        <div className="mt-6 flex flex-wrap gap-4">
          <a
            href="https://www.youtube.com/@TheAssetHero"
            target="_blank"
            className="rounded-full bg-white px-8 py-3 font-semibold text-black transition hover:bg-zinc-200"
          >
            VIEW CHANNEL
          </a>

          <button
            type="button"
            onClick={onOpenContact}
            className="rounded-full border border-white px-8 py-3 transition hover:bg-white hover:text-black"
          >
            CONTACT
          </button>
        </div>
      </div>

      {children}
    </section>
  );
}
