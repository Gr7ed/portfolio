import { SectionHeading } from "../layout/SectionHeading";
import { useReveal } from "../../hooks/useReveal";
import { useLocale } from "../../i18n";
import clsx from "clsx";

export function Testimonials() {
  const { t } = useLocale();
  const { elementRef, isVisible } = useReveal<HTMLElement>();
  const testimonials = [
    { quote: "Suhail brings calm, thoughtful engineering to complex problems and always follows through.", name: "Product collaborator", role: "Software delivery" },
    { quote: "A rare blend of practical infrastructure knowledge and modern full stack development.", name: "Technical partner", role: "Enterprise IT" },
  ];

  return (
    <section ref={elementRef} className={clsx("py-20 sm:py-28", "reveal", isVisible && "is-visible")} id="testimonials">
      <div className="mx-auto w-[calc(100%-2rem)] max-w-6xl sm:w-[calc(100%-3rem)]">
        <SectionHeading eyebrow={t("testimonialsLabel")} title={<>{t("testimonialsTitle")} <em>{t("testimonialsEmphasis")}</em></>} />
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {testimonials.map((item) => (
            <figure className="min-h-56 rounded-3xl border border-[var(--line)] bg-[var(--surface)] p-6 shadow-sm" key={item.name}>
              <span className="text-6xl leading-none text-[var(--accent)]" aria-hidden="true">“</span>
              <blockquote className="mt-5 max-w-lg text-xl leading-8 text-[var(--ink)]">{item.quote}</blockquote>
              <figcaption className="mt-6"><strong className="block text-sm text-[var(--ink)]">{item.name}</strong><span className="mt-1 block text-xs text-[var(--muted)]">{item.role}</span></figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
