"use client";

import { ChangeEvent, FormEvent, useEffect, useState } from "react";

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

export default function ContactModal() {
  const [fields, setFields] = useState<FormFields>(initialFields);
  const [modalState, setModalState] = useState<ModalState>("closed");

  const isMounted = modalState !== "closed";
  const isVisible = modalState === "opening" || modalState === "open";

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

    const subject = `Portfolio inquiry from ${fields.name}`;
    const body = [
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
            className={`relative w-full max-w-2xl overflow-hidden rounded-[2rem] border border-white/12 bg-[linear-gradient(180deg,rgba(255,255,255,0.12),rgba(255,255,255,0.04))] p-5 shadow-[0_0_80px_rgba(255,255,255,0.08)] transition duration-200 sm:p-6 md:p-8 ${
              isVisible ? "scale-100 opacity-100" : "scale-95 opacity-0"
            }`}
            onClick={(event) => event.stopPropagation()}
          >
            <div className="pointer-events-none absolute inset-0 rounded-[2rem] border border-white/8" />
            <div className="pointer-events-none absolute inset-x-12 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
            <div className="pointer-events-none absolute -left-12 top-10 h-36 w-36 rounded-full bg-white/10 blur-3xl" />
            <div className="pointer-events-none absolute -right-12 bottom-8 h-40 w-40 rounded-full bg-white/6 blur-3xl" />

            <button
              type="button"
              onClick={closeModal}
              className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-sm text-white/70 transition hover:border-white/25 hover:bg-white/10 hover:text-white"
              aria-label="Close contact modal"
            >
              ✕
            </button>

            <div className="relative z-10">
              <p className="text-[0.7rem] uppercase tracking-[0.35em] text-white/45">
                Contact
              </p>
              <h2 className="mt-3 max-w-lg text-3xl font-semibold leading-tight text-white sm:text-4xl">
                Start a cinematic collaboration.
              </h2>
              <p className="mt-4 max-w-xl text-sm leading-6 text-white/60 sm:text-base">
                Share the shape of your project and I&apos;ll follow up with the
                right next step.
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
                    placeholder="Tell me about the world you want to build"
                    required
                    rows={6}
                    className="w-full resize-none rounded-[1.6rem] border border-white/10 bg-white/[0.04] px-4 py-4 text-sm text-white outline-none transition placeholder:text-white/35 focus:border-white/25 focus:bg-white/[0.06] focus:ring-1 focus:ring-white/15"
                  />
                </label>

                <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:items-center sm:justify-between">
                  <p className="text-xs uppercase tracking-[0.25em] text-white/35">
                    Direct and discreet
                  </p>

                  <button
                    type="submit"
                    className="rounded-full border border-white/10 bg-white px-7 py-3 text-sm font-semibold text-black transition hover:scale-[1.01] hover:bg-zinc-200"
                  >
                    Send
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
