"use client";
import { useState, useEffect } from "react";

/* 🎬 VIDEOS */
const videoBank: any = {
  ai: ["/videos/ai1.mp4", "/videos/ai2.mp4", "/videos/ai3.mp4"],
  vp: ["/videos/vp1.mp4", "/videos/vp2.mp4"],
  "3d": ["/videos/3d1.mp4", "/videos/3d2.mp4"],
  vfx: ["/videos/vfx1.mp4", "/videos/vfx2.mp4"],
  dev: ["/videos/dev1.mp4", "/videos/dev2.mp4"],
};

const slides = [
  {
    key: "ai",
    title: "AI PRODUCTION",
    desc: "AI-assisted workflows for content generation and automation.",
  },
  {
    key: "vp",
    title: "VIRTUAL PRODUCTION",
    desc: "Real-time environments and Unreal Engine pipelines.",
  },
  {
    key: "3d",
    title: "3D PRODUCTION",
    desc: "Full pipeline from modelling to cinematic output.",
  },
  {
    key: "vfx",
    title: "VFX",
    desc: "Real-time and cinematic effects.",
  },
  {
    key: "dev",
    title: "DEV / UI / UX",
    desc: "Interactive systems and tools.",
  },
];

function getRandom(arr: string[], current?: string) {
  const filtered = arr.filter((v) => v !== current);
  return filtered[Math.floor(Math.random() * filtered.length)];
}

export default function Home() {
  const [index, setIndex] = useState(0);
  const [videoMap, setVideoMap] = useState<any>({});

  useEffect(() => {
    const key = slides[index].key;
    const arr = videoBank[key];

    setVideoMap((prev: any) => ({
      ...prev,
      [key]: getRandom(arr, prev[key]),
    }));
  }, [index]);

  const current = slides[index];
  const currentVideo = videoMap[current.key];

  return (
    <main className="w-screen h-screen relative overflow-hidden bg-black text-white">

      {/* 🎬 VIDEO */}
      {currentVideo && (
        <video
          key={currentVideo}
          src={currentVideo}
          autoPlay
          muted
          loop
          playsInline
          className="absolute w-full h-full object-cover"
        />
      )}

      {/* 🌑 OVERLAY MÁS FUERTE */}
      <div className="absolute inset-0 bg-black/70" />

      {/* 🎨 CONTENIDO */}
      <div className="absolute bottom-40 left-24 max-w-xl">
        <h1 className="text-7xl font-bold tracking-tight leading-[0.9]">
          {current.title}
        </h1>

        <p className="mt-4 text-zinc-300">{current.desc}</p>

        {/* 🔘 BOTONES */}
        <div className="flex gap-4 mt-6">
          <a
            href="https://www.youtube.com/@TheAssetHero"
            target="_blank"
            className="px-8 py-3 rounded-full font-semibold bg-white/90 text-black hover:bg-white transition backdrop-blur-md"
          >
            VIEW CHANNEL
          </a>

          <a
            href="mailto:nolo.blancas@gmail.com"
            className="px-8 py-3 rounded-full font-semibold border border-white/50 hover:bg-white hover:text-black transition backdrop-blur-md"
          >
            CONTACT
          </a>
        </div>
      </div>

      {/* 🎯 NAV */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-6 text-sm">
        {slides.map((s, i) => (
          <div
            key={i}
            onClick={() => setIndex(i)}
            className={`cursor-pointer transition ${
              i === index
                ? "opacity-100 scale-110"
                : "opacity-60 hover:opacity-100"
            }`}
          >
            {s.key.toUpperCase()}
          </div>
        ))}
      </div>
    </main>
  );
}