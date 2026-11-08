import { SectionHeading } from "../layout/SectionHeading";
import { useReveal } from "../../hooks/useReveal";
import { useLocale } from "../../i18n";
import clsx from "clsx";

const experiences = [
  {
    period: "2023 — Present",
    role: "Full Stack Engineer",
    company: "DALSEEN Co.",
    copy: "Building dependable internal platforms, automated workflows, and production-ready releases across the product lifecycle.",
  },
  {
    period: "2021 — 2023",
    role: "IT Infrastructure Specialist",
    company: "Enterprise Operations",
    copy: "Designed and supported secure networks, cameras, access points, and the systems teams rely on every day.",
  },
  {
    period: "2019 — 2021",
    role: "Web Developer & IT Support",
    company: "Independent Projects",
    copy: "Delivered practical websites and technical solutions while growing a strong foundation in software engineering.",
  },
];

export function Experience() {
  const { t } = useLocale();
  const { elementRef, isVisible } = useReveal<HTMLElement>();

  return (
    <section
      ref={elementRef}
      className={clsx("experience-section", "reveal", isVisible && "is-visible")}
      id="experience"
    >
      <div className="page-shell">
        <SectionHeading
          eyebrow={t("experienceLabel")}
          title={<>{t("experienceTitle")} <em>{t("experienceEmphasis")}</em></>}
          copy={t("experienceCopy")}
        />
        <div className="experience-list">
          {experiences.map((item) => (
            <article className="experience-item" key={`${item.period}-${item.role}`}>
              <span className="experience-period">{item.period}</span>
              <div className="experience-marker" aria-hidden="true" />
              <div className="experience-content">
                <p className="experience-company">{item.company}</p>
                <h3>{item.role}</h3>
                <p>{item.copy}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
