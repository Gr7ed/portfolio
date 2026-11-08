import { useNavigate } from "react-router-dom";
import { projects } from "../../data/projects";
import { SectionHeading } from "../layout/SectionHeading";
import { Card } from "../ui/card";
import { useReveal } from "../../hooks/useReveal";
import { useLocale } from "../../i18n";
import clsx from "clsx";
import { motion, useReducedMotion } from "framer-motion";

function ProjectCard({ project, index }: { project: (typeof projects)[number]; index: number }) {
  const navigate = useNavigate();
  const { t } = useLocale();
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay: index * 0.06 }}
    >
      <Card type="button" onClick={() => navigate(`/projects/${project.id}`)}>
      <div className="relative h-56 overflow-hidden bg-(--visual)">
        <img className="h-full w-full object-cover opacity-90 transition duration-500 group-hover:scale-105" src={project.images[0]} alt="" />
        <span className="absolute bottom-4 inset-e-4 z-10 text-xs font-bold text-white">
          {t("viewProject")} <span aria-hidden="true">↗</span>
        </span>
      </div>
      <div className="flex items-end justify-between p-5">
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-(--accent)">{project.type}</p>
          <h3 className="mt-2 text-xl font-semibold text-(--ink)">{project.title}</h3>
        </div>
        <span className="text-xs text-(--muted)">0{index + 1}</span>
      </div>
      </Card>
    </motion.div>
  );
}

export function Work() {
  const { t, localizeProject } = useLocale();
  const { elementRef, isVisible } = useReveal<HTMLElement>();

  return (
    <section
      ref={elementRef}
      className={clsx("border-y border-(--line) bg-(--section) py-20 sm:py-28", "reveal", isVisible && "is-visible")}
      id="work"
    >
      <div className="mx-auto w-[calc(100%-2rem)] max-w-6xl sm:w-[calc(100%-3rem)]">
        <div className="flex flex-col items-start justify-between gap-7 md:flex-row md:items-end">
          <SectionHeading
            eyebrow={t("selectedProjects")}
            title={<>{t("workTitleBefore")} <em>{t("workTitleEmphasis")}</em></>}
            copy={t("workCopy")}
            light
          />
          <a className="text-sm font-bold text-(--accent) transition hover:text-(--ink)" href="mailto:suhail142176@gmail.com">
            {t("technicalChallenge")} <span aria-hidden="true">↗</span>
          </a>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={localizeProject(project)} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
