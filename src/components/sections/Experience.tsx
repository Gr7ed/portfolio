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
      className={clsx("py-20 sm:py-28", "reveal", isVisible && "is-visible")}
      id="experience"
    >
      <div className="mx-auto w-[calc(100%-2rem)] max-w-6xl sm:w-[calc(100%-3rem)]">
        <SectionHeading
          eyebrow={t("experienceLabel")}
          title={<>{t("experienceTitle")} <em>{t("experienceEmphasis")}</em></>}
          copy={t("experienceCopy")}
        />
        <div className="mt-12 flex flex-col gap-5 border-s border-(--accent)/35 ps-5 sm:ps-8">
          {experiences.map((item) => (
            <article className="relative mb-10 grid gap-3 sm:grid-cols-[8rem_1fr]" key={`${item.period}-${item.role}`}>
              <span className="text-xs text-(--muted)">{item.period}</span>
              <div className="relative flex flex-col gap-4">
                <span className="absolute inset-s-[-1.65rem] top-1 size-3 rounded-full border-4 border-(--paper) bg-(--accent) shadow-[0_0_0_1px_var(--accent)]" aria-hidden="true" />
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-(--accent)">{item.company}</p>
                <h3 className="mt-2 text-2xl font-semibold text-(--ink)">{item.role}</h3>
                <p className="mt-2 max-w-xl text-base leading-7 text-(--muted)">{item.copy}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
