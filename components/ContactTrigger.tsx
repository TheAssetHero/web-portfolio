"use client";

import { ReactNode, useState } from "react";

import ContactModal from "@/components/ContactModal";

type ContactTriggerProps = {
  children: ReactNode;
  className: string;
};

export default function ContactTrigger({
  children,
  className,
}: ContactTriggerProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        className={className}
        onClick={() => setIsOpen(true)}
      >
        {children}
      </button>

      <ContactModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}
