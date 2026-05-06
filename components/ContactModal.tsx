"use client";

import { ChangeEvent, FormEvent, useEffect, useState } from "react";

import { CategoryKey, portfolioCategories } from "@/lib/portfolio-categories";

type ModalState = "closed" | "opening" | "open" | "closing";

const modalTransitionMs = 220;

type FormFields = {
  name: string;
  email: string;
  message: string;
};

const initialFields: FormFields = {
  name: "",
  email: "",
  message: "",
};

export default function ContactModal({
  activeCategory,
}: {
  activeCategory: CategoryKey;
}) {
  const [fields, setFields] = useState<FormFields>(initialFields);
  const [modalState, setModalState] = useState<ModalState>("closed");

  const isMounted = modalState !== "closed";
  const isVisible = modalState === "opening" || modalState === "open";
  const currentCategory = portfolioCategories[activeCategory];

  useEffect(() => {
    if (modalState === "opening") {
      const frame = window.requestAnimationFrame(() => {
        setModalState("open");
      });

      return () => window.cancelAnimationFrame(frame);
    }

    if (modalState === "closing") {
      const timeout = window.setTimeout(() => {
        setModalState("closed");
      }, modalTransitionMs);

      return () => window.clearTimeout(timeout);
    }
  }, [modalState]);

  useEffect(() => {
    if (!isMounted) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setModalState((currentState) =>
          currentState === "closed" ? currentState : "closing"
        );
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMounted]);

  const openModal = () => {
    setModalState((currentState) =>
      currentState === "closed" ? "opening" : currentState
    );
  };

  const closeModal = () => {
    setModalState((currentState) =>
      currentState === "closed" ? currentState : "closing"
    );
  };

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;

    setFields((currentFields) => ({
      ...currentFields,
      [name]: value,
    }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const subject = `${currentCategory.label} inquiry from ${fields.name}`;
    const body = [
      `Category: ${currentCategory.heroTitle}`,
      `Name: ${fields.name}`,
      `Email: ${fields.email}`,
      "",
      fields.message,
    ].join("\n");

    window.location.href = `mailto:nolo.blancas@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    setFields(initialFields);
    closeModal();
  };

  return (
    <>
      <button
        type="button"
        onClick={openModal}
        className="rounded-full border border-white px-8 py-3 transition hover:bg-white hover:text-black"
      >
        CONTACT
      </button>

      {isMounted && (
        <div
          className={`fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4 backdrop-blur-md transition duration-200 sm:px-6 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
          onClick={closeModal}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="contact-modal-title"
            className={`relative w-full max-w-xl overflow-hidden rounded-[2rem] border border-white/12 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))] shadow-[0_0_50px_rgba(255,255,255,0.06)] transition duration-200 ${
              isVisible ? "scale-100 opacity-100" : "scale-95 opacity-0"
            }`}
            onClick={(event) => event.stopPropagation()}
          >
            <div className="p-5 sm:p-6 md:p-8">
              <div className="pointer-events-none absolute inset-0 rounded-[2rem] border border-white/8" />
              <div className="pointer-events-none absolute inset-x-14 top-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent" />
              <div className="pointer-events-none absolute -left-10 top-12 h-28 w-28 rounded-full bg-white/8 blur-3xl motion-safe:animate-[breatheGlow_9s_ease-in-out_infinite]" />
              <div className="pointer-events-none absolute -right-10 bottom-10 h-28 w-28 rounded-full bg-white/5 blur-3xl motion-safe:animate-[breatheGlow_11s_ease-in-out_infinite]" />

              <button
                type="button"
                onClick={closeModal}
                className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-sm text-white/70 transition hover:border-white/25 hover:bg-white/10 hover:text-white"
                aria-label="Close contact modal"
              >
                X
              </button>

              <div className="relative z-10">
                <p className="text-[0.68rem] uppercase tracking-[0.35em] text-white/45">
                  Contact
                </p>
                <h2
                  id="contact-modal-title"
                  className="mt-3 max-w-2xl text-3xl font-semibold leading-tight text-white sm:text-4xl"
                >
                  Start a cinematic collaboration.
                </h2>
                <p className="mt-4 max-w-lg text-sm leading-6 text-white/48 sm:text-base">
                  Share the shape of your project and I&apos;ll follow up with the
                  next step.
                </p>

                <form className="mt-8 space-y-4" onSubmit={handleSubmit}>
                  <div className="grid gap-4 md:grid-cols-2">
                    <label className="block">
                      <span className="sr-only">Name</span>
                      <input
                        type="text"
                        name="name"
                        value={fields.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        required
                        className="w-full rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-white/35 focus:border-white/25 focus:bg-white/[0.06] focus:ring-1 focus:ring-white/15"
                      />
                    </label>

                    <label className="block">
                      <span className="sr-only">Email</span>
                      <input
                        type="email"
                        name="email"
                        value={fields.email}
                        onChange={handleChange}
                        placeholder="Email address"
                        required
                        className="w-full rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-white/35 focus:border-white/25 focus:bg-white/[0.06] focus:ring-1 focus:ring-white/15"
                      />
                    </label>
                  </div>

                  <label className="block">
                    <span className="sr-only">Message</span>
                    <textarea
                      name="message"
                      value={fields.message}
                      onChange={handleChange}
                      placeholder={currentCategory.textareaPlaceholder}
                      required
                      rows={6}
                      className="w-full resize-none rounded-[1.6rem] border border-white/10 bg-white/[0.04] px-4 py-4 text-sm text-white outline-none transition placeholder:text-white/35 focus:border-white/25 focus:bg-white/[0.06] focus:ring-1 focus:ring-white/15"
                    />
                  </label>

                  <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:items-center sm:justify-between">
                    <p className="text-[0.58rem] uppercase tracking-[0.2em] text-white/18">
                      Direct and discreet
                    </p>

                    <button
                      type="submit"
                      className="rounded-full border border-white/12 bg-zinc-200 px-7 py-3 text-sm font-semibold text-black shadow-[0_0_22px_rgba(255,255,255,0.06)] transition duration-300 hover:scale-[1.01] hover:border-white/18 hover:bg-zinc-100 hover:shadow-[0_0_28px_rgba(255,255,255,0.11)]"
                    >
                      Send
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
