import { SectionHeading } from "../layout/SectionHeading";
import { useReveal } from "../../hooks/useReveal";
import { useLocale } from "../../i18n";
import clsx from "clsx";

const skills = ["JavaScript", "TypeScript", "React", "Next.js", "Node.js", "Express", "PHP", "PostgreSQL", "Supabase", "Docker", "Linux", "CI/CD", "Vitest", "Cybersecurity"];

export function Skills() {
  const { t } = useLocale();
  const { elementRef, isVisible } = useReveal<HTMLElement>();

  return (
    <section ref={elementRef} className={clsx("py-20 sm:py-28", "reveal", isVisible && "is-visible")} id="skills">
      <div className="mx-auto w-[calc(100%-2rem)] max-w-6xl sm:w-[calc(100%-3rem)]">
        <div className="grid gap-10 rounded-3xl border border-[var(--line)] bg-gradient-to-br from-[var(--panel)] to-[var(--surface)] p-6 sm:p-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <SectionHeading eyebrow={t("skillsLabel")} title={<>{t("skillsTitle")} <em>{t("skillsEmphasis")}</em></>} copy={t("skillsCopy")} />
          <div className="flex flex-wrap content-center gap-2.5" aria-label={t("skillsLabel")}>
            {skills.map((skill, index) => <span className={clsx("rounded-full border px-3.5 py-2 text-sm", index % 3 === 0 ? "border-[var(--accent)] text-[var(--accent)]" : "border-[var(--line)] text-[var(--muted)]")} key={skill}>{skill}</span>)}
          </div>
        </div>
      </div>
    </section>
  );
}
