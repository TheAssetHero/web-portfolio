"use client";

export default function Home() {
  return (
    <main className="w-screen h-screen bg-black text-white flex items-center justify-center">
      <div>
        <h1 className="text-6xl font-bold">TEST OK</h1>
        <p className="mt-4">Si ves esto, React está funcionando.</p>

        <a
          href="https://www.youtube.com/@TheAssetHero"
          target="_blank"
          className="mt-6 inline-block px-6 py-3 bg-white text-black rounded-full"
        >
          VIEW CHANNEL
        </a>
      </div>
    </main>
  );
}