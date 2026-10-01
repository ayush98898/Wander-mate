"use client";

import { useId, useState, type FormEvent } from "react";

import { WhatsAppIcon } from "@/components/site/icons";
import { whatsappLink } from "@/lib/content";

/**
 * Same fields as the original Wix enquiry form. There is no backend yet, so
 * submitting opens WhatsApp with the details pre-filled.
 */
export function EnquiryForm({ interest }: { interest?: string }) {
  const id = useId();
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.reportValidity()) return;
    const d = new FormData(form);
    const msg = [
      "Namaste WanderMate! New enquiry:",
      `Name: ${d.get("name")}`,
      `Phone: ${d.get("phone")}`,
      d.get("date") && `Planning to visit: ${d.get("date")}`,
      d.get("people") && `Number of people: ${d.get("people")}`,
      interest && `Interested in: ${interest}`,
      d.get("requests") && `Special requests: ${d.get("requests")}`,
    ]
      .filter(Boolean)
      .join("\n");
    window.open(whatsappLink(msg), "_blank", "noopener,noreferrer");
    setSent(true);
  }

  const input =
    "mt-2 h-12 w-full rounded-xl border border-ink/15 bg-parchment px-4 text-base transition-colors focus:border-sindoor focus:outline-none";
  const label = "text-sm font-semibold";

  return (
    <form onSubmit={onSubmit} className="grid gap-5 sm:grid-cols-2" noValidate={false}>
      <div>
        <label htmlFor={`${id}-name`} className={label}>
          Name <span className="text-sindoor">*</span>
        </label>
        <input id={`${id}-name`} name="name" required autoComplete="name" className={input} />
      </div>
      <div>
        <label htmlFor={`${id}-phone`} className={label}>
          Phone <span className="text-sindoor">*</span>
        </label>
        <input
          id={`${id}-phone`}
          name="phone"
          type="tel"
          required
          autoComplete="tel"
          inputMode="tel"
          pattern="[0-9+()\-\s]{7,}"
          className={input}
        />
      </div>
      <div>
        <label htmlFor={`${id}-date`} className={label}>
          Which date are you planning to visit?
        </label>
        <input id={`${id}-date`} name="date" type="date" className={input} />
      </div>
      <div>
        <label htmlFor={`${id}-people`} className={label}>
          Total number of people
        </label>
        <input id={`${id}-people`} name="people" type="number" min={1} max={100} inputMode="numeric" className={input} />
      </div>
      <div className="sm:col-span-2">
        <label htmlFor={`${id}-req`} className={label}>
          Any special requests?
        </label>
        <textarea
          id={`${id}-req`}
          name="requests"
          rows={4}
          defaultValue={interest ? `I'm interested in: ${interest}` : undefined}
          className="mt-2 w-full rounded-xl border border-ink/15 bg-parchment px-4 py-3 text-base transition-colors focus:border-sindoor focus:outline-none"
        />
      </div>
      <div className="flex flex-col gap-3 sm:col-span-2 sm:flex-row sm:items-center">
        <button
          type="submit"
          className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-sindoor px-8 py-3 font-semibold text-white transition-colors hover:bg-sindoor-deep"
        >
          <WhatsAppIcon className="size-4" /> Submit via WhatsApp
        </button>
        <p className="text-sm text-ink-muted" role="status">
          {sent
            ? "WhatsApp opened with your details — just press send."
            : "Opens WhatsApp with your details filled in."}
        </p>
      </div>
    </form>
  );
}
