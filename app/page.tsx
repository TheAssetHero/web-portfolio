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

/* 🎞 SLIDES */
const slides = [
  { key: "ai", title: "AI PRODUCTION", desc: "AI-assisted workflows." },
  { key: "vp", title: "VIRTUAL PRODUCTION", desc: "Unreal Engine pipelines." },
  { key: "3d", title: "3D PRODUCTION", desc: "From modeling to cinematic output." },
  { key: "vfx", title: "VFX", desc: "Real-time and cinematic FX." },
  { key: "dev", title: "DEV / UI / UX", desc: "Interactive systems." },
];

/* 🧠 RANDOM */
function getRandom(arr: string[]) {
  return arr[Math.floor(Math.random() * arr.length)];
}

export default function Home() {
  const [index, setIndex] = useState(0);
  const [video, setVideo] = useState("");

  useEffect(() => {
    const key = slides[index].key;
    setVideo(getRandom(videoBank[key]));
  }, [index]);

  const current = slides[index];

  return (
    <main className="relative w-screen h-screen bg-black text-white overflow-hidden">

      {/* 🎬 VIDEO (controlado) */}
      {video && (
        <video
          key={video}
          src={video}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        />
      )}

      {/* 🎯 CONTENIDO (SIEMPRE ENCIMA) */}
      <div className="relative z-10 flex flex-col justify-center h-full px-24">

        <h1 className="text-7xl font-bold leading-[0.9] drop-shadow-xl">
          {current.title}
        </h1>

        <p className="mt-4 text-lg text-white/90 max-w-md">
          {current.desc}
        </p>

        {/* BOTONES */}
        <div className="flex gap-4 mt-6">
          <a
            href="https://www.youtube.com/@TheAssetHero"
            target="_blank"
            className="px-8 py-3 bg-white text-black rounded-full font-semibold hover:bg-zinc-200 transition"
          >
            VIEW CHANNEL
          </a>

          <a
            href="mailto:nolo.blancas@gmail.com"
            className="px-8 py-3 border border-white rounded-full hover:bg-white hover:text-black transition"
          >
            CONTACT
          </a>
        </div>
      </div>

      {/* NAV */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-6 z-20">
        {slides.map((s, i) => (
          <div
            key={i}
            onClick={() => setIndex(i)}
            className={`cursor-pointer transition ${
              i === index
                ? "opacity-100 scale-110"
                : "opacity-50 hover:opacity-100"
            }`}
          >
            {s.key.toUpperCase()}
          </div>
        ))}
      </div>

    </main>
  );
}