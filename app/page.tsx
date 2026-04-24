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
  { key: "ai", title: "AI PRODUCTION", desc: "AI-assisted workflows for content generation." },
  { key: "vp", title: "VIRTUAL PRODUCTION", desc: "Real-time Unreal Engine environments." },
  { key: "3d", title: "3D PRODUCTION", desc: "Full pipeline from modelling to cinematic output." },
  { key: "vfx", title: "VFX", desc: "Cinematic and real-time effects." },
  { key: "dev", title: "DEV / UI / UX", desc: "Interactive systems and tools." },
];

/* 🧩 PRODUCTS */
const products = [
  { name: "Vehicle System UE5", desc: "Chaos vehicle setup ready for production.", price: "FREE" },
  { name: "Niagara FX Pack", desc: "Real-time effects for cinematics.", price: "FREE" },
  { name: "Procedural Materials", desc: "Substance-based materials.", price: "FREE" },
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
    <main className="w-screen min-h-screen bg-black text-white relative overflow-hidden">

      {/* 🎬 VIDEO */}
      {currentVideo && (
        <video
          key={currentVideo}
          src={currentVideo}
          autoPlay
          muted
          loop
          playsInline
          className="absolute w-full h-screen object-cover z-0"
        />
      )}

      {/* 🌑 OVERLAY (más claro para que se vea el texto) */}
      <div className="absolute inset-0 bg-black/50 z-10" />

      {/* 🎯 HERO */}
      <div className="absolute bottom-56 left-24 max-w-xl z-20">
        <h1 className="text-7xl font-bold tracking-tight leading-[0.9] drop-shadow-xl">
          {current.title}
        </h1>

        <p className="mt-4 text-white/90 text-lg">
          {current.desc}
        </p>

        <div className="flex gap-4 mt-6">
          <a
            href="https://www.youtube.com/@TheAssetHero"
            target="_blank"
            className="px-8 py-3 rounded-full font-semibold bg-white text-black hover:bg-zinc-200 transition"
          >
            VIEW CHANNEL
          </a>

          <a
            href="mailto:nolo.blancas@gmail.com"
            className="px-8 py-3 rounded-full font-semibold border border-white hover:bg-white hover:text-black transition"
          >
            CONTACT
          </a>
        </div>
      </div>

      {/* 🧭 NAV */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-6 z-20">
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

      {/* 🧩 PRODUCTS */}
      <section className="relative z-20 mt-[100vh] px-24 py-32 bg-black">
        <h2 className="text-4xl font-bold mb-12">ASSETS / PLUGINS</h2>

        <div className="grid grid-cols-3 gap-10">
          {products.map((p, i) => (
            <div
              key={i}
              className="p-6 border border-white/10 rounded-xl hover:border-white/40 transition"
            >
              <h3 className="text-lg font-semibold">{p.name}</h3>

              <p className="text-zinc-400 mt-2 text-sm">
                {p.desc}
              </p>

              <div className="flex justify-between items-center mt-6">
                <span>{p.price}</span>

                <button className="px-4 py-2 border rounded-full hover:bg-white hover:text-black transition">
                  ADD
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

    </main>
  );
}