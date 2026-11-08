import { useState, type FormEvent } from "react";
import { SectionHeading } from "../layout/SectionHeading";
import { useReveal } from "../../hooks/useReveal";
import { useLocale } from "../../i18n";
import { sendContactMessage } from "../../lib/email";
import clsx from "clsx";

export function Contact() {
  const { t } = useLocale();
  const { elementRef, isVisible } = useReveal<HTMLElement>();
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    setIsSending(true);
    setStatus("");

    try {
      const sent = await sendContactMessage({
        name: String(data.get("name") ?? ""),
        email: String(data.get("email") ?? ""),
        message: String(data.get("message") ?? ""),
      });
      if (sent) {
        form.reset();
        setStatus(t("contactSuccess"));
      }
    } finally {
      setIsSending(false);
    }
  }

  return (
    <section ref={elementRef} className={clsx("border-y border-[var(--line)] bg-[var(--section)] py-20 sm:py-28", "reveal", isVisible && "is-visible")} id="connect">
      <div className="mx-auto grid w-[calc(100%-2rem)] max-w-6xl gap-10 rounded-3xl border border-[var(--line)] bg-gradient-to-br from-[var(--panel)] to-[var(--surface)] p-6 sm:w-[calc(100%-3rem)] sm:p-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
        <div>
          <SectionHeading eyebrow={t("contactLabel")} title={<>{t("contactTitle")} <em>{t("contactEmphasis")}</em></>} copy={t("contactCopy")} light />
        </div>
        <form className="grid gap-4" onSubmit={handleSubmit}>
          <label className="grid gap-1.5">
            <span className="text-xs font-bold text-[var(--muted)]">{t("contactName")}</span>
            <input className="rounded-xl border border-[var(--line)] bg-[var(--surface)] px-3 py-2.5 text-[var(--ink)] outline-none transition placeholder:text-[var(--muted)] focus:border-[var(--accent)] focus:ring-4 focus:ring-[var(--accent)]/15" name="name" required />
          </label>
          <label className="grid gap-1.5">
            <span className="text-xs font-bold text-[var(--muted)]">{t("contactEmail")}</span>
            <input className="rounded-xl border border-[var(--line)] bg-[var(--surface)] px-3 py-2.5 text-[var(--ink)] outline-none transition placeholder:text-[var(--muted)] focus:border-[var(--accent)] focus:ring-4 focus:ring-[var(--accent)]/15" name="email" type="email" required />
          </label>
          <label className="grid gap-1.5">
            <span className="text-xs font-bold text-[var(--muted)]">{t("contactMessage")}</span>
            <textarea className="resize-y rounded-xl border border-[var(--line)] bg-[var(--surface)] px-3 py-2.5 text-[var(--ink)] outline-none transition placeholder:text-[var(--muted)] focus:border-[var(--accent)] focus:ring-4 focus:ring-[var(--accent)]/15" name="message" rows={4} required />
          </label>
          <button className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--accent)] px-5 py-3 text-sm font-bold text-[var(--accent-ink)] shadow-lg shadow-[var(--accent)]/20 transition duration-200 hover:-translate-y-0.5 hover:shadow-xl disabled:cursor-wait disabled:opacity-60 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)]" type="submit" disabled={isSending}>
            {isSending ? t("contactSending") : t("contactSubmit")} <span aria-hidden="true">↗</span>
          </button>
          {status && <p className="text-xs text-[var(--accent)]" role="status">{status}</p>}
        </form>
        <div className="lg:col-start-1">
          <a className="text-sm text-[var(--muted)] transition hover:text-[var(--accent)]" href="mailto:suhail142176@gmail.com">suhail142176@gmail.com</a>
        </div>
      </div>
    </section>
  );
}
