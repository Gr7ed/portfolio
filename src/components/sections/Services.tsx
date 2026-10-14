import { JSX } from "react/jsx-runtime";
import { SectionHeading } from "../layout/SectionHeading";
import { useReveal } from "../../hooks/useReveal";
import { useLocale } from "../../i18n";
import clsx from "clsx";

export function Services(): JSX.Element {
  const { t } = useLocale();
  const { elementRef, isVisible } = useReveal<HTMLElement>();
  const services = [
    ["01", t("serviceFullStack"), t("serviceFullStackCopy")],
    ["02", t("serviceAutomation"), t("serviceAutomationCopy")],
    ["03", t("serviceInfrastructure"), t("serviceInfrastructureCopy")],
  ];

  return (
    <section
      ref={elementRef}
      className={clsx("services-section", "reveal", isVisible && "is-visible")}
      id="services"
    >
      <div className="page-shell">
        <SectionHeading
          eyebrow={t("coreExpertise")}
          title={<>{t("technologyBefore")} <em>{t("technologyEmphasis")}</em></>}
          copy={t("expertiseCopy")}
          light
        />
        <div className="services-grid">
          {services.map(([number, title, copy]) => (
            <article className="service-card" key={number}>
              <span className="service-number">{number}</span>
              <h3>{title}</h3>
              <p>{copy}</p>
              <span className="service-arrow" aria-hidden="true">↗</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
