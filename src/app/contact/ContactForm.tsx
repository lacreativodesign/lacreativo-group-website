"use client";

import { useState } from "react";
import { Button } from "@/components/Button";

type FormStatus = "idle" | "sending" | "success" | "error" | "rate";

export default function ContactForm() {
  const [formStatus, setFormStatus] = useState<FormStatus>("idle");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [company, setCompany] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (formStatus === "sending") return;

    setFormStatus("sending");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message, company }),
      });

      const data = await response.json();

      if (response.status === 429) {
        setFormStatus("rate");
        return;
      }

      if (response.status === 400 || !data?.ok) {
        setFormStatus("error");
        return;
      }

      setFormStatus("success");
      setName("");
      setEmail("");
      setMessage("");
      setCompany("");
    } catch {
      setFormStatus("error");
    }
  };

  const statusMessage =
    formStatus === "success"
      ? "Message received."
      : formStatus === "rate"
        ? "Please try again later."
        : formStatus === "error"
          ? "Unable to send at this time."
          : "";

  return (
    <form
      className="mt-6 space-y-4"
      onSubmit={handleSubmit}
      aria-live="polite"
    >
      <div className="space-y-2">
        <label
          htmlFor="contact-name"
          className="text-xs font-semibold uppercase tracking-[0.3em] text-foreground-muted"
        >
          Name
        </label>
        <input
          id="contact-name"
          name="name"
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
          autoComplete="name"
          placeholder="Full name"
          className="w-full rounded-xl border border-border px-4 py-3 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
          required
        />
      </div>
      <div className="space-y-2">
        <label
          htmlFor="contact-email"
          className="text-xs font-semibold uppercase tracking-[0.3em] text-foreground-muted"
        >
          Email
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          autoComplete="email"
          placeholder="name@organization.com"
          className="w-full rounded-xl border border-border px-4 py-3 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
          required
        />
      </div>
      <div className="space-y-2">
        <label
          htmlFor="contact-message"
          className="text-xs font-semibold uppercase tracking-[0.3em] text-foreground-muted"
        >
          Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={4}
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          placeholder="Please provide an administrative summary."
          className="w-full rounded-xl border border-border px-4 py-3 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
          required
        />
      </div>
      <div style={{ display: "none" }} aria-hidden="true">
        <label htmlFor="contact-company">Company</label>
        <input
          id="contact-company"
          name="company"
          type="text"
          value={company}
          onChange={(event) => setCompany(event.target.value)}
          tabIndex={-1}
          autoComplete="off"
        />
      </div>
      <div className="space-y-2">
        <Button type="submit" className="w-full" disabled={formStatus === "sending"}>
          {formStatus === "sending" ? "Sending" : "Send message"}
        </Button>
        {statusMessage ? (
          <p className="text-sm text-foreground-muted" role="status">
            {statusMessage}
          </p>
        ) : null}
      </div>
    </form>
  );
}
