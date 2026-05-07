import Image from "next/image";

type BrandProfileModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function BrandProfileModal({
  isOpen,
  onClose,
}: BrandProfileModalProps) {
  return (
    <div
      className={`fixed inset-0 z-[90] flex items-center justify-center bg-black/88 px-4 backdrop-blur-lg transition duration-300 sm:px-6 ${
        isOpen ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
      aria-hidden={!isOpen}
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="brand-profile-modal-title"
        className={`relative w-full max-w-4xl overflow-hidden rounded-[2rem] border border-white/12 bg-[linear-gradient(180deg,rgba(7,7,10,0.99),rgba(3,3,5,0.97))] shadow-[0_0_56px_rgba(0,0,0,0.5)] transition duration-300 ${
          isOpen ? "scale-100 opacity-100" : "scale-95 opacity-0"
        }`}
        onClick={(event) => event.stopPropagation()}
      >
        <div className="pointer-events-none absolute inset-0 rounded-[2rem] border border-white/8" />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.03),transparent_24%)]" />
        <div className="pointer-events-none absolute -right-16 top-8 h-44 w-44 rounded-full bg-white/[0.05] blur-3xl motion-safe:animate-[breatheGlow_12s_ease-in-out_infinite]" />
        <div className="pointer-events-none absolute -left-16 bottom-8 h-40 w-40 rounded-full bg-white/[0.03] blur-3xl motion-safe:animate-[breatheGlow_14s_ease-in-out_infinite]" />

        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 z-30 flex h-10 w-10 items-center justify-center rounded-full border border-white/12 bg-black/45 text-base text-white/72 transition hover:border-white/24 hover:bg-white/10 hover:text-white"
          aria-label="Close profile reveal"
        >
          X
        </button>

        <div className="relative z-10 grid gap-8 p-6 sm:p-8 lg:grid-cols-[minmax(0,0.34fr)_minmax(0,1fr)] lg:p-10">
          <div className="flex justify-center lg:justify-start">
            <div className="relative w-full max-w-[250px] overflow-hidden rounded-[1.8rem] border border-white/10 bg-white/[0.03] p-3">
              <div className="absolute inset-0 bg-[linear-gradient(145deg,rgba(255,255,255,0.07),transparent_48%,rgba(255,255,255,0.03))]" />
              <div className="relative aspect-[4/5] overflow-hidden rounded-[1.4rem] border border-white/8">
                <Image
                  src="/images/img4.jpeg"
                  alt="Portrait placeholder for Emmanuel Blancas"
                  fill
                  sizes="(max-width: 1024px) 250px, 320px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.03),rgba(0,0,0,0.3))]" />
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <p className="text-[0.68rem] uppercase tracking-[0.34em] text-white/38">
              Creative Technology
            </p>

            <h3
              id="brand-profile-modal-title"
              className="mt-5 text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl"
            >
              Emmanuel Blancas
            </h3>

            <p className="mt-6 max-w-3xl text-xl leading-8 text-white/84 sm:text-2xl sm:leading-9">
              Creating high-end visuals, realtime experiences and cinematic
              technology for modern production.
            </p>

            <p className="mt-6 max-w-2xl text-sm leading-7 text-white/46 sm:text-base">
              Studio-focused direction across realtime visuals, cinematic
              tooling, and modern production systems. This profile panel stays
              intentionally restrained so the work remains the lead signal.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
