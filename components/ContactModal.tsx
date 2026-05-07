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

  const requestClose = () => {
    setModalState((currentState) =>
      currentState === "closed" ? currentState : "closing"
    );
  };

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
        requestClose();
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
    requestClose();
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
          className={`fixed inset-0 z-50 flex items-center justify-center bg-black/82 px-4 backdrop-blur-md transition duration-200 sm:px-6 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
          onClick={requestClose}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="contact-modal-title"
            className={`relative w-full max-w-lg overflow-hidden rounded-[2rem] border border-white/12 bg-[linear-gradient(180deg,rgba(10,10,12,0.98),rgba(5,5,7,0.95))] shadow-[0_0_34px_rgba(255,255,255,0.05)] transition duration-200 ${
              isVisible ? "scale-100 opacity-100" : "scale-95 opacity-0"
            }`}
            onClick={(event) => event.stopPropagation()}
          >
            <div className="p-5 sm:p-6 md:p-8">
              <div className="pointer-events-none absolute inset-0 rounded-[2rem] border border-white/8" />
              <div className="pointer-events-none absolute inset-0 bg-black/42" />
              <div className="pointer-events-none absolute inset-x-16 top-0 h-px bg-gradient-to-r from-transparent via-white/18 to-transparent" />
              <div className="pointer-events-none absolute inset-x-0 top-0 h-44 bg-[linear-gradient(180deg,rgba(0,0,0,0.48),transparent)]" />
              <div className="pointer-events-none absolute left-1/2 top-0 h-32 w-32 -translate-x-1/2 rounded-full bg-white/[0.04] blur-3xl motion-safe:animate-[breatheGlow_10s_ease-in-out_infinite]" />

              <button
                type="button"
                onClick={requestClose}
                className="absolute right-4 top-4 z-30 flex h-10 w-10 items-center justify-center rounded-full border border-white/12 bg-black/45 text-base text-white/72 transition hover:border-white/25 hover:bg-white/10 hover:text-white"
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
                      placeholder="Tell me about the world you want to build"
                      required
                      rows={6}
                      className="w-full resize-none rounded-[1.6rem] border border-white/10 bg-white/[0.04] px-4 py-4 text-sm text-white outline-none transition placeholder:text-white/35 focus:border-white/25 focus:bg-white/[0.06] focus:ring-1 focus:ring-white/15"
                    />
                  </label>

                  <div className="flex justify-end pt-2">
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
