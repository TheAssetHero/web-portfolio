"use client";
import { useState, useEffect } from "react";

/* 🎬 VIDEOS (ajusta nombres reales) */
const videoBank: any = {
  ai: ["/videos/ai1.mp4", "/videos/ai2.mp4", "/videos/ai3.mp4"],
  vp: ["/videos/vp1.mp4", "/videos/vp2.mp4"],
  "3d": ["/videos/3d1.mp4", "/videos/3d2.mp4"],
  vfx: ["/videos/vfx1.mp4", "/videos/vfx2.mp4"],
  dev: ["/videos/dev1.mp4", "/videos/dev2.mp4"],
};

/* 🎯 SLIDES */
const slides = [
  {
    key: "ai",
    title: "AI PRODUCTION",
    desc: "AI-assisted workflows for content generation and automation.",
    accent: "from-cyan-400/40 via-blue-500/30 to-purple-500/40",
    btn: "bg-cyan-400 text-black",
  },
  {
    key: "vp",
    title: "VIRTUAL PRODUCTION",
    desc: "Real-time environments and Unreal pipelines.",
    accent: "from-yellow-300/40 via-orange-400/30 to-red-500/40",
    btn: "bg-yellow-300 text-black",
  },
  {
    key: "3d",
    title: "3D PRODUCTION",
    desc: "Full pipeline from modelling to cinematic output.",
    accent: "from-white/20 via-zinc-400/10 to-transparent",
    btn: "bg-white text-black",
  },
  {
    key: "vfx",
    title: "VFX",
    desc: "Real-time and cinematic effects.",
    accent: "from-pink-500/40 via-red-500/30 to-orange-500/40",
    btn: "bg-red-400 text-black",
  },
  {
    key: "dev",
    title: "DEV / UI / UX",
    desc: "Interactive systems and tools.",
    accent: "from-green-400/40 via-emerald-500/30 to-teal-400/40",
    btn: "bg-green-300 text-black",
  },
];

/* 🧩 PRODUCTS */
const products = [
  { name: "Vehicle System UE5", desc: "Advanced Chaos setup", type: "plugins" },
  { name: "Niagara FX Pack", desc: "Explosions and smoke", type: "assets" },
  { name: "UI System", desc: "Interactive UI tools", type: "tools" },
];

export default function Home() {
  const [index, setIndex] = useState(0);
  const [videoMap, setVideoMap] = useState<any>({});
  const [showContact, setShowContact] = useState(false);
  const [filter, setFilter] = useState("all");

  /* 🎲 RANDOM SEGURO */
  const getRandom = (arr: string[], prev?: string) => {
    if (!arr || arr.length === 0) return "";
    if (arr.length === 1) return arr[0];

    let next = arr[Math.floor(Math.random() * arr.length)];
    let attempts = 0;

    while (next === prev && attempts < 5) {
      next = arr[Math.floor(Math.random() * arr.length)];
      attempts++;
    }

    return next;
  };

  /* 🔁 VIDEO POR SLIDE */
  useEffect(() => {
    const key = slides[index].key;
    const arr = videoBank[key];

    setVideoMap((prev: any) => ({
      ...prev,
      [key]: getRandom(arr, prev[key]),
    }));
  }, [index]);

  /* ⏱️ AUTO SLIDE */
  useEffect(() => {
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(id);
  }, []);

  const current = slides[index];

  /* 🔥 fallback SIEMPRE */
  const currentVideo =
    videoMap[current.key] || videoBank[current.key]?.[0];

  return (
    <main className="w-screen min-h-screen bg-black text-white">

      {/* HERO */}
      <section className="w-screen h-screen relative overflow-hidden">

        <video
          key={currentVideo}
          src={currentVideo}
          autoPlay
          muted
          loop
          playsInline
          className="absolute w-full h-full object-cover"
        />

        {/* overlays */}
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
        <div className={`absolute inset-0 bg-gradient-to-br ${current.accent} mix-blend-overlay`} />

        {/* grid dev */}
        {current.key === "dev" && (
          <div className="absolute inset-0 opacity-10 pointer-events-none bg-[linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] bg-[size:40px_40px]" />
        )}

        {/* TEXT */}
        <div className="absolute bottom-32 left-24 max-w-xl z-10">
          <h1 className="text-7xl font-bold leading-[0.95]">
            {current.title}
          </h1>

          <p className="mt-5 text-zinc-300 max-w-md leading-relaxed">
            {current.desc}
          </p>

          <div className="flex gap-4 mt-8">

            <a
              href="https://www.youtube.com/@TU_CANAL"
              target="_blank"
              className={`px-10 py-3 rounded-full ${current.btn}`}
            >
              VIEW CHANNEL
            </a>

            <button
              onClick={() => setShowContact(true)}
              className="px-10 py-3 rounded-full border border-white hover:bg-white hover:text-black transition"
            >
              CONTACT
            </button>

          </div>
        </div>

        {/* SELECTOR */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-8 z-10">
          {slides.map((s, i) => (
            <div
              key={i}
              onClick={() => setIndex(i)}
              className="cursor-pointer flex flex-col items-center"
            >
              <div className={`h-[2px] w-20 ${
                i === index ? "bg-white" : "bg-white/20"
              }`} />
              <p className={`text-[10px] mt-2 ${
                i === index ? "text-white" : "text-zinc-500"
              }`}>
                {s.title.split(" ")[0]}
              </p>
            </div>
          ))}
        </div>

      </section>

      {/* PRODUCTS */}
      <section className="px-24 py-24 border-t border-zinc-900">
        <h2 className="text-2xl mb-10">PLUGINS · TOOLS · ASSETS</h2>

        <div className="flex gap-3 mb-12">
          {["all", "plugins", "tools", "assets"].map((t) => (
            <button
              key={t}
              onClick={() => setFilter(t)}
              className={`px-5 py-2 text-xs rounded-full border ${
                filter === t
                  ? "bg-white text-black"
                  : "border-zinc-700 text-zinc-400"
              }`}
            >
              {t.toUpperCase()}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-3 gap-8">
          {products
            .filter((p) => filter === "all" || p.type === filter)
            .map((p, i) => (
              <div
                key={i}
                className="border border-zinc-800 rounded-xl p-6 hover:border-white transition"
              >
                <p className="text-xs text-zinc-500">{p.type}</p>
                <h3 className="text-lg mt-2">{p.name}</h3>
                <p className="text-zinc-500 text-sm mt-2">{p.desc}</p>

                <div className="mt-6 flex justify-between items-center">
                  <span>$0</span>
                  <button className="px-4 py-2 border border-white rounded-full text-xs hover:bg-white hover:text-black transition">
                    ADD
                  </button>
                </div>
              </div>
            ))}
        </div>
      </section>

      {/* CONTACT MODAL */}
      {showContact && (
        <div
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50"
          onClick={() => setShowContact(false)}
        >
          <div
            className="bg-zinc-900 p-10 rounded-2xl w-[400px]"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-xl mb-6">Contact</h3>

            <input
              placeholder="Your email"
              className="w-full mb-4 p-3 bg-black border border-zinc-700 rounded"
            />

            <textarea
              placeholder="Message"
              className="w-full mb-6 p-3 bg-black border border-zinc-700 rounded"
            />

            <button className="w-full py-3 bg-white text-black rounded-full">
              SEND
            </button>
          </div>
        </div>
      )}

    </main>
  );
}