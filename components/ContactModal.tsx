"use client";

import { ChangeEvent, FormEvent, useEffect, useState } from "react";

import { useOptionalLanguage } from "@/components/LanguageProvider";
import { resolveText } from "@/lib/localization";
import { uiCopy } from "@/lib/ui-copy";

type FormFields = {
  name: string;
  company: string;
  email: string;
  message: string;
};

const initialFields: FormFields = {
  name: "",
  company: "",
  email: "",
  message: "",
};

const contactEmail = "nolo.blancas@gmail.com";

type ContactModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const optionalLanguage = useOptionalLanguage();
  const language = optionalLanguage?.language ?? "en";
  const [fields, setFields] = useState<FormFields>(initialFields);
  const [error, setError] = useState("");
  const [status, setStatus] = useState("");

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;

    setError("");
    setStatus("");
    setFields((currentFields) => ({
      ...currentFields,
      [name]: value,
    }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const trimmedFields = {
      name: fields.name.trim(),
      company: fields.company.trim(),
      email: fields.email.trim(),
      message: fields.message.trim(),
    };
    const emailIsValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
      trimmedFields.email
    );

    if (!trimmedFields.name || !trimmedFields.email || !trimmedFields.message) {
      setError(resolveText(uiCopy.contact.errorRequired, language));
      return;
    }

    if (!emailIsValid) {
      setError(resolveText(uiCopy.contact.errorEmail, language));
      return;
    }

    const subject = resolveText(uiCopy.contact.subjectPrefix, language);
    const body = [
      `${resolveText(uiCopy.contact.nameLabel, language)}: ${trimmedFields.name}`,
      `${resolveText(uiCopy.contact.companyLabel, language)}: ${trimmedFields.company}`,
      `${resolveText(uiCopy.contact.emailLabel, language)}: ${trimmedFields.email}`,
      "",
      `${resolveText(uiCopy.contact.messageLabel, language)}:`,
      trimmedFields.message,
    ].join("\n");

    window.location.href = `mailto:${contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    setStatus(resolveText(uiCopy.contact.statusOpening, language));
    setFields(initialFields);
  };

  return (
    <div
      className={`fixed inset-0 z-[90] flex items-center justify-center bg-black/90 px-4 py-6 backdrop-blur-lg transition duration-300 sm:px-6 ${
        isOpen ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
      aria-hidden={!isOpen}
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="contact-modal-title"
        className={`relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-[2rem] border border-white/12 bg-[linear-gradient(180deg,rgba(8,8,10,0.99),rgba(3,3,5,0.97))] shadow-[0_0_40px_rgba(0,0,0,0.5)] transition duration-300 ${
          isOpen ? "scale-100 opacity-100" : "scale-95 opacity-0"
        }`}
        onClick={(event) => event.stopPropagation()}
      >
        <div className="p-5 sm:p-6 md:p-8">
          <div className="pointer-events-none absolute inset-0 rounded-[2rem] border border-white/8" />
          <div className="pointer-events-none absolute inset-0 bg-black/62" />
          <div className="pointer-events-none absolute inset-x-16 top-0 h-px bg-gradient-to-r from-transparent via-white/18 to-transparent" />
          <div className="pointer-events-none absolute inset-x-0 top-0 h-44 bg-[linear-gradient(180deg,rgba(0,0,0,0.62),transparent)]" />
          <div className="pointer-events-none absolute left-1/2 top-0 h-28 w-28 -translate-x-1/2 rounded-full bg-white/[0.03] blur-3xl motion-safe:animate-[breatheGlow_10s_ease-in-out_infinite]" />

          <button
            type="button"
            onClick={onClose}
            className="absolute right-4 top-4 z-30 flex h-10 w-10 items-center justify-center rounded-full border border-white/12 bg-black/55 text-base text-white/72 transition hover:border-white/25 hover:bg-white/10 hover:text-white"
            aria-label={resolveText(uiCopy.contact.closeAria, language)}
          >
            X
          </button>

          <div className="relative z-10">
            <p className="text-[0.68rem] uppercase tracking-[0.35em] text-white/42">
              {resolveText(uiCopy.contact.label, language)}
            </p>
            <h2
              id="contact-modal-title"
              className="mt-3 max-w-2xl text-3xl font-semibold leading-tight text-white sm:text-4xl"
            >
              {resolveText(uiCopy.contact.title, language)}
            </h2>
            <p className="mt-4 max-w-lg text-sm leading-6 text-white/46 sm:text-base">
              {resolveText(uiCopy.contact.description, language)}
            </p>

            <form className="mt-8 space-y-4" onSubmit={handleSubmit}>
              <div className="grid gap-4 md:grid-cols-2">
                <label className="block">
                  <span className="sr-only">
                    {resolveText(uiCopy.contact.nameLabel, language)}
                  </span>
                  <input
                    type="text"
                    name="name"
                    value={fields.name}
                    onChange={handleChange}
                    placeholder={resolveText(
                      uiCopy.contact.namePlaceholder,
                      language
                    )}
                    required
                    className="w-full rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-white/35 focus:border-white/25 focus:bg-white/[0.06] focus:ring-1 focus:ring-white/15"
                  />
                </label>

                <label className="block">
                  <span className="sr-only">
                    {resolveText(uiCopy.contact.companyLabel, language)}
                  </span>
                  <input
                    type="text"
                    name="company"
                    value={fields.company}
                    onChange={handleChange}
                    placeholder={resolveText(
                      uiCopy.contact.companyPlaceholder,
                      language
                    )}
                    className="w-full rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-white/35 focus:border-white/25 focus:bg-white/[0.06] focus:ring-1 focus:ring-white/15"
                  />
                </label>

                <label className="block md:col-span-2">
                  <span className="sr-only">
                    {resolveText(uiCopy.contact.emailLabel, language)}
                  </span>
                  <input
                    type="email"
                    name="email"
                    value={fields.email}
                    onChange={handleChange}
                    placeholder={resolveText(
                      uiCopy.contact.emailPlaceholder,
                      language
                    )}
                    required
                    className="w-full rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-white/35 focus:border-white/25 focus:bg-white/[0.06] focus:ring-1 focus:ring-white/15"
                  />
                </label>
              </div>

              <label className="block">
                <span className="sr-only">
                  {resolveText(uiCopy.contact.messageLabel, language)}
                </span>
                <textarea
                  name="message"
                  value={fields.message}
                  onChange={handleChange}
                  placeholder={resolveText(
                    uiCopy.contact.messagePlaceholder,
                    language
                  )}
                  required
                  rows={6}
                  className="w-full resize-none rounded-[1.6rem] border border-white/10 bg-white/[0.04] px-4 py-4 text-sm text-white outline-none transition placeholder:text-white/35 focus:border-white/25 focus:bg-white/[0.06] focus:ring-1 focus:ring-white/15"
                />
              </label>

              {(error || status) && (
                <p
                  className={`text-sm ${
                    error ? "text-amber-200/78" : "text-white/52"
                  }`}
                >
                  {error || status}
                </p>
              )}

              <div className="flex justify-end pt-2">
                <button
                  type="submit"
                  className="w-full rounded-full border border-white/12 bg-zinc-200 px-7 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-black shadow-[0_0_22px_rgba(255,255,255,0.06)] transition duration-300 hover:scale-[1.01] hover:border-white/18 hover:bg-zinc-100 hover:shadow-[0_0_28px_rgba(255,255,255,0.11)] sm:w-auto"
                >
                  {resolveText(uiCopy.contact.send, language)}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
