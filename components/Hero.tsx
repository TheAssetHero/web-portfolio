"use client";

import { useEffect, useState } from "react";

const slides = [
  { key: "ai", title: "AI PRODUCTION", desc: "AI-assisted workflows." },
  { key: "vp", title: "VIRTUAL PRODUCTION", desc: "Unreal Engine pipelines." },
  { key: "3d", title: "3D PRODUCTION", desc: "From modeling to cinematic output." },
  { key: "vfx", title: "VFX", desc: "Real-time and cinematic FX." },
  { key: "dev", title: "DEV / UI / UX", desc: "Interactive systems." },
] as const;

type SlideKey = (typeof slides)[number]["key"];

const videoBank: Record<SlideKey, readonly string[]> = {
  ai: ["/videos/ai1.mp4", "/videos/ai2.mp4", "/videos/ai3.mp4"],
  vp: ["/videos/vp1.mp4", "/videos/vp2.mp4"],
  "3d": ["/videos/3d1.mp4", "/videos/3d2.mp4"],
  vfx: ["/videos/vfx1.mp4", "/videos/vfx2.mp4"],
  dev: ["/videos/dev1.mp4", "/videos/dev2.mp4"],
};

function getRandomVideo(videos: readonly string[], current?: string) {
  const filteredVideos = videos.filter((video) => video !== current);
  const availableVideos = filteredVideos.length > 0 ? filteredVideos : videos;

  return availableVideos[Math.floor(Math.random() * availableVideos.length)];
}

export default function Hero() {
  const [heroState, setHeroState] = useState(() => {
    const initialIndex = Math.floor(Math.random() * slides.length);
    const initialKey = slides[initialIndex].key;

    return {
      index: initialIndex,
      videoMap: {
        [initialKey]: getRandomVideo(videoBank[initialKey]),
      } satisfies Partial<Record<SlideKey, string>>,
    };
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setHeroState((prev) => {
        const nextIndex = (prev.index + 1) % slides.length;
        const nextKey = slides[nextIndex].key;

        return {
          index: nextIndex,
          videoMap: {
            ...prev.videoMap,
            [nextKey]: getRandomVideo(videoBank[nextKey], prev.videoMap[nextKey]),
          },
        };
      });
    }, 7000);

    return () => clearInterval(interval);
  }, []);

  const currentSlide = slides[heroState.index];
  const currentVideo = heroState.videoMap[currentSlide.key];

  const handleVideoEnd = () => {
    setHeroState((prev) => {
      const key = currentSlide.key;
      const videos = videoBank[key];

      return {
        ...prev,
        videoMap: {
          ...prev.videoMap,
          [key]: getRandomVideo(videos, prev.videoMap[key]),
        },
      };
    });
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {currentVideo && (
        <video
          key={currentSlide.key + currentVideo}
          src={currentVideo}
          autoPlay
          muted
          playsInline
          onEnded={handleVideoEnd}
          className="absolute inset-0 h-full w-full object-cover opacity-60 transition-opacity duration-700"
        />
      )}

      <div className="relative z-10 flex h-full flex-col justify-center px-24">
        <h1 className="text-7xl font-bold leading-[0.9] drop-shadow-xl">{currentSlide.title}</h1>

        <p className="mt-4 max-w-md text-lg text-white/90">{currentSlide.desc}</p>

        <div className="mt-6 flex gap-4">
          <a
            href="https://www.youtube.com/@TheAssetHero"
            target="_blank"
            className="rounded-full bg-white px-8 py-3 font-semibold text-black transition hover:bg-zinc-200"
          >
            VIEW CHANNEL
          </a>

          <a
            href="mailto:nolo.blancas@gmail.com"
            className="rounded-full border border-white px-8 py-3 transition hover:bg-white hover:text-black"
          >
            CONTACT
          </a>
        </div>
      </div>

      <div className="absolute bottom-12 left-1/2 z-20 flex -translate-x-1/2 gap-10">
        {slides.map((slide, slideIndex) => (
          <div
            key={slide.key}
            onClick={() =>
              setHeroState((prev) => ({
                index: slideIndex,
                videoMap: {
                  ...prev.videoMap,
                  [slide.key]: getRandomVideo(videoBank[slide.key], prev.videoMap[slide.key]),
                },
              }))
            }
            className={`relative cursor-pointer transition-all duration-300 ${
              slideIndex === heroState.index
                ? "scale-125 text-lg tracking-wide text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.6)]"
                : "text-sm text-white/40 hover:text-white/80"
            }`}
          >
            {slide.key.toUpperCase()}

            {slideIndex === heroState.index && (
              <div className="absolute left-0 -bottom-2 h-[2px] w-full rounded-full bg-white" />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
