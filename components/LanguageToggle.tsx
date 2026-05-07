"use client";

import { useLanguage } from "@/components/LanguageProvider";
import { useOverlayController } from "@/components/OverlayController";
import { uiCopy } from "@/lib/ui-copy";
import { resolveText } from "@/lib/localization";

export default function LanguageToggle() {
  const { language, setLanguage } = useLanguage();
  const { isOverlayOpen } = useOverlayController();

  return (
    <div
      className={`fixed right-4 top-4 z-40 transition duration-300 sm:right-6 sm:top-6 ${
        isOverlayOpen ? "pointer-events-none opacity-0" : "opacity-100"
      }`}
    >
      <div className="rounded-full border border-white/10 bg-black/52 px-2 py-2 shadow-[0_0_26px_rgba(0,0,0,0.35)] backdrop-blur-xl">
        <div className="flex items-center gap-1">
          <span className="px-2 text-[0.56rem] uppercase tracking-[0.24em] text-white/34">
            {resolveText(uiCopy.language.label, language)}
          </span>

          {(["en", "es"] as const).map((option) => {
            const isActive = option === language;

            return (
              <button
                key={option}
                type="button"
                onClick={() => setLanguage(option)}
                className={`rounded-full px-3 py-1.5 text-[0.6rem] uppercase tracking-[0.24em] transition ${
                  isActive
                    ? "border border-white/16 bg-white/12 text-white shadow-[0_0_18px_rgba(255,255,255,0.05)]"
                    : "text-white/48 hover:bg-white/[0.05] hover:text-white/82"
                }`}
              >
                {option.toUpperCase()}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
