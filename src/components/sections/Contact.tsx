import { SectionHeading } from "../layout/SectionHeading";
import { useReveal } from "../../hooks/useReveal";
import { useLocale } from "../../i18n";
import clsx from "clsx";

export function Contact() {
  const { t } = useLocale();
  const { elementRef, isVisible } = useReveal<HTMLElement>();

  return (
    <section ref={elementRef} className={clsx("contact-section", "reveal", isVisible && "is-visible")} id="connect">
      <div className="page-shell contact-panel">
        <div>
          <SectionHeading eyebrow={t("contactLabel")} title={<>{t("contactTitle")} <em>{t("contactEmphasis")}</em></>} copy={t("contactCopy")} light />
        </div>
        <div className="contact-actions">
          <a className="button button-primary" href="mailto:suhail142176@gmail.com">{t("sendEmail")} <span aria-hidden="true">↗</span></a>
          <a className="contact-address" href="mailto:suhail142176@gmail.com">suhail142176@gmail.com</a>
        </div>
      </div>
    </section>
  );
}
