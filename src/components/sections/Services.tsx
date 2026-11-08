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
      className={clsx("border-y border-(--line) bg-(--section) py-20 sm:py-28", "reveal", isVisible && "is-visible")}
      id="services"
    >
      <div className="mx-auto w-[calc(100%-2rem)] max-w-6xl sm:w-[calc(100%-3rem)]">
        <SectionHeading
          eyebrow={t("coreExpertise")}
          title={<>{t("technologyBefore")} <em>{t("technologyEmphasis")}</em></>}
          copy={t("expertiseCopy")}
          light
        />
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {services.map(([number, title, copy]) => (
            <article className="group relative min-h-56 rounded-3xl border border-(--line) bg-(--surface) p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-(--accent) hover:shadow-xl hover:shadow-(--accent)/10" key={number}>
              <span className="text-xs font-bold text-(--accent)">{number}</span>
              <h3 className="mt-12 text-2xl font-semibold tracking-tight text-(--ink)">{title}</h3>
              <p className="mt-3 pl-2 text-sm leading-6 text-(--muted)">{copy}</p>
              <span className="absolute bottom-6 inset-e-6 text-xl text-(--accent) transition group-hover:-translate-y-1 group-hover:translate-x-1" aria-hidden="true">↗</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
