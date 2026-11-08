import { SectionHeading } from "../layout/SectionHeading";
import { useReveal } from "../../hooks/useReveal";
import { useLocale } from "../../i18n";
import clsx from "clsx";

const skills = ["JavaScript", "TypeScript", "React", "Next.js", "Node.js", "Express", "PHP", "PostgreSQL", "Supabase", "Docker", "Linux", "CI/CD", "Vitest", "Cybersecurity"];

export function Skills() {
  const { t } = useLocale();
  const { elementRef, isVisible } = useReveal<HTMLElement>();

  return (
    <section ref={elementRef} className={clsx("skills-section", "reveal", isVisible && "is-visible")} id="skills">
      <div className="page-shell">
        <div className="skills-panel">
          <SectionHeading eyebrow={t("skillsLabel")} title={<>{t("skillsTitle")} <em>{t("skillsEmphasis")}</em></>} copy={t("skillsCopy")} />
          <div className="skill-cloud" aria-label={t("skillsLabel")}>
            {skills.map((skill, index) => <span className={clsx("skill-pill", index % 3 === 0 && "skill-pill-accent")} key={skill}>{skill}</span>)}
          </div>
        </div>
      </div>
    </section>
  );
}
