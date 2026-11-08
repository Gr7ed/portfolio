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
    <section ref={elementRef} className={clsx("testimonials-section", "reveal", isVisible && "is-visible")} id="testimonials">
      <div className="page-shell">
        <SectionHeading eyebrow={t("testimonialsLabel")} title={<>{t("testimonialsTitle")} <em>{t("testimonialsEmphasis")}</em></>} />
        <div className="testimonials-grid">
          {testimonials.map((item) => (
            <figure className="testimonial-card" key={item.name}>
              <span className="quote-mark" aria-hidden="true">“</span>
              <blockquote>{item.quote}</blockquote>
              <figcaption><strong>{item.name}</strong><span>{item.role}</span></figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
