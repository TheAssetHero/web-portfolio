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

/* 🧩 PRODUCTS */
const products = [
  { name: "Vehicle System UE5", desc: "Chaos vehicle setup ready for production.", price: "FREE" },
  { name: "Niagara FX Pack", desc: "Real-time effects for cinematics.", price: "FREE" },
  { name: "Procedural Materials", desc: "Substance-based materials.", price: "FREE" },
];

/* 🎲 RANDOM SIN REPETIR */
function getRandom(arr: string[], current?: string) {
  const filtered = arr.filter((v) => v !== current);
  return filtered[Math.floor(Math.random() * filtered.length)];
}

export default function Home() {

  // 🔥 RANDOM START
  const [index, setIndex] = useState(() =>
    Math.floor(Math.random() * slides.length)
  );

  const [videoMap, setVideoMap] = useState<any>({});

  useEffect(() => {
    const key = slides[index].key;
    const arr = videoBank[key];

    setVideoMap((prev: any) => ({
      ...prev,
      [key]: getRandom(arr, prev[key]),
    }));
  }, [index]);

  useEffect(() => {
     const interval = setInterval(() => {
     setIndex((prev) => (prev + 1) % slides.length);
     }, 7000);

     return () => clearInterval(interval);
  }, []);

  const current = slides[index];
  const handleEnd = () => {
  setVideoMap((prev: any) => {
    const key = slides[index].key;
    const arr = videoBank[key];

    return {
      ...prev,
      [key]: getRandom(arr, prev[key]),
    };
  });
};

  
  const currentVideo = videoMap[current.key];

  return (
    <main className="relative w-screen min-h-screen bg-black text-white scroll-smooth">

      {/* HERO */}
      <section className="relative h-screen w-full overflow-hidden">

        {/* VIDEO */}
        {currentVideo && (
          <video
            key={current.key + currentVideo}
            src={currentVideo}
            autoPlay
            muted
            playsInline
            onEnded={handleEnd} //
            className="absolute inset-0 w-full h-full object-cover opacity-60 transition-opacity duration-700"

          />
        )}

        {/* CONTENIDO */}
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

        {/* NAV PRO */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-10 z-20">
          {slides.map((s, i) => (
            <div
              key={i}
              onClick={() => setIndex(i)}
              className={`relative cursor-pointer transition-all duration-300 ${
                i === index
                  ? "text-white text-lg scale-125 tracking-wide drop-shadow-[0_0_10px_rgba(255,255,255,0.6)]"
                  : "text-white/40 text-sm hover:text-white/80"
              }`}
            >
              {s.key.toUpperCase()}

              {/* underline activo */}
              {i === index && (
                <div className="absolute left-0 -bottom-2 w-full h-[2px] bg-white rounded-full" />
              )}
            </div>
          ))}
        </div>

      </section>

      {/* ASSETS */}
      <section className="bg-black px-24 py-32">

        <h2 className="text-4xl font-bold mb-12">
          ASSETS / PLUGINS
        </h2>

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