import { useEffect, useState } from "react";
import clsx from "clsx";
import { ArrowLeft, ArrowRight, Code2, ExternalLink } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import { projects } from "../data/projects";
import { Button } from "../components/ui/button";
import { useReveal } from "../hooks/useReveal";
import { useLocale } from "../i18n";

export function ProjectDetail() {
  const { projectId } = useParams<{ projectId: string }>();
  const navigate = useNavigate();
  const { t, localizeProject } = useLocale();
  const sourceProject = projects.find((item) => item.id === projectId);
  const project = sourceProject ? localizeProject(sourceProject) : undefined;
  const [activeImage, setActiveImage] = useState(0);
  const { elementRef, isVisible } = useReveal<HTMLElement>();

  useEffect(() => {
    setActiveImage(0);
  }, [projectId]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [projectId]);

  if (!project) {
    return (
      <main className="mx-auto min-h-screen w-[calc(100%-2rem)] max-w-6xl py-36 sm:w-[calc(100%-3rem)]">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--accent)]">{t("projectNotFound")}</p>
          <h1 className="mt-4 text-5xl font-semibold tracking-tight text-[var(--ink)]">{t("projectMissing")}</h1>
          <button className="mt-8 text-sm text-[var(--muted)] hover:text-[var(--accent)]" type="button" onClick={() => navigate("/")}>
            ← {t("backHome")}
          </button>
        </div>
      </main>
    );
  }

  const imageCount = project.images.length;
  const currentImage = project.images[activeImage] ?? project.images[0];
  const showPreviousImage = () => {
    setActiveImage((image) => (image - 1 + imageCount) % imageCount);
  };
  const showNextImage = () => {
    setActiveImage((image) => (image + 1) % imageCount);
  };

  return (
    <main
      ref={elementRef}
      className={clsx("min-h-screen py-32 sm:py-40", "reveal", isVisible && "is-visible")}
    >
      <div className="mx-auto w-[calc(100%-2rem)] max-w-6xl sm:w-[calc(100%-3rem)]">
        <button className="inline-flex items-center gap-2 text-sm text-[var(--muted)] transition hover:text-[var(--accent)]" type="button" onClick={() => navigate("/#work")}>
          <ArrowLeft className="arrow" aria-hidden="true" size={18} strokeWidth={1.8} />
          {t("backToWork")}
        </button>
        <div className="my-12 max-w-3xl sm:my-16">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--accent)]">{project.type}</p>
          <h1 className="mt-4 text-5xl font-semibold leading-[0.95] tracking-[-0.07em] text-[var(--ink)] sm:text-7xl">{project.title}</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--muted)]">{project.description}</p>
          <div className="mt-7 flex flex-wrap gap-2">
            {project.tags.map((tag) => <span className="border border-[var(--line)] px-2.5 py-1 text-xs text-[var(--accent)]" key={tag}>{tag}</span>)}
          </div>
        </div>
        <section className="mx-auto max-w-5xl" aria-label={`${project.title} ${t("projectGallery")}`}>
          <div className="relative aspect-video overflow-hidden bg-[var(--ink)]">
            <img
              className="h-full w-full object-contain"
              src={currentImage}
              alt={t("imagePreview", {
                title: project.title,
                current: activeImage + 1,
                total: imageCount,
              })}
            />
            {imageCount > 1 && (
              <>
                <button
                  className="absolute inset-y-0 start-0 flex w-14 items-center justify-center bg-gradient-to-r from-black/50 to-transparent text-white transition hover:bg-[var(--accent)]"
                  type="button"
                  onClick={showPreviousImage}
                  aria-label={t("previousImage")}
                >
                  <ArrowLeft className="arrow" aria-hidden="true" size={18} strokeWidth={1.8} />
                </button>
                <button
                  className="absolute inset-y-0 end-0 flex w-14 items-center justify-center bg-gradient-to-l from-black/50 to-transparent text-white transition hover:bg-[var(--accent)]"
                  type="button"
                  onClick={showNextImage}
                  aria-label={t("nextImage")}
                >
                  <ArrowRight className="arrow" aria-hidden="true" size={18} strokeWidth={1.8} />
                </button>
              </>
            )}
          </div>
          {imageCount > 1 && (
            <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-xs text-[var(--muted)]" aria-live="polite">
                {t("imageOf", { current: activeImage + 1, total: imageCount })}
              </p>
              <div className="flex min-w-0 gap-2 overflow-x-auto p-1" aria-label={t("chooseProjectImage")}>
                {project.images.map((image, index) => (
                  <button
                    className={clsx("h-12 w-[4.25rem] shrink-0 overflow-hidden border opacity-60 transition hover:opacity-100 focus-visible:outline-2 focus-visible:outline-[var(--accent)]", index === activeImage ? "border-[var(--accent)] opacity-100" : "border-transparent")}
                    type="button"
                    key={image}
                    onClick={() => setActiveImage(index)}
                    aria-label={`${t("showProjectImage")} ${index + 1}`}
                    aria-pressed={index === activeImage}
                  >
                    <img className="h-full w-full object-cover" src={image} alt="" />
                  </button>
                ))}
              </div>
            </div>
          )}
        </section>
        {(project.url || project.githubUrl) && (
          <nav className="mt-7 flex flex-wrap justify-center gap-3" aria-label={t("projectLinks")}>
            {project.url && (
              <Button
                href={project.url}
                target="_blank"
                rel="noreferrer"
                variant="outline"
              >
                <ExternalLink aria-hidden="true" size={16} strokeWidth={1.8} />
                {t("liveSite")}
              </Button>
            )}
            {project.githubUrl && (
              <Button
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                variant="outline"
              >
                <Code2 aria-hidden="true" size={16} strokeWidth={1.8} />
                {t("viewSource")}
              </Button>
            )}
          </nav>
        )}
        <div className="mx-auto mt-16 flex max-w-4xl flex-col items-start justify-between gap-8 sm:flex-row sm:items-end">
          <div className="max-w-xl">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--accent)]">{t("approach")}</p>
            <p className="mt-3 text-base leading-7 text-[var(--muted)]">{t("approachCopy")}</p>
          </div>
          <Button href="mailto:suhail142176@gmail.com" variant="outline">
            {t("startConversation")}
          </Button>
        </div>
      </div>
    </main>
  );
}
