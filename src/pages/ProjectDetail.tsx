import { useEffect, useState } from "react";
import clsx from "clsx";
import { useNavigate, useParams } from "react-router-dom";
import { projects } from "../data/projects";
import { Button } from "../components/ui/button";
import { useLocale } from "../i18n";

export function ProjectDetail() {
  const { projectId } = useParams<{ projectId: string }>();
  const navigate = useNavigate();
  const { t, localizeProject } = useLocale();
  const sourceProject = projects.find((item) => item.id === projectId);
  const project = sourceProject ? localizeProject(sourceProject) : undefined;
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    setActiveImage(0);
  }, [projectId]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [projectId]);

  if (!project) {
    return (
      <main className="project-detail">
        <div className="page-shell">
          <p className="eyebrow">{t("projectNotFound")}</p>
          <h1>{t("projectMissing")}</h1>
          <button className="back-link" type="button" onClick={() => navigate("/")}>
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
    <main className="project-detail">
      <div className="page-shell">
        <button className="back-link" type="button" onClick={() => navigate("/#work")}>
          ← {t("backToWork")}
        </button>
        <div className="detail-heading">
          <p className="eyebrow">{project.type}</p>
          <h1>{project.title}</h1>
          <p>{project.description}</p>
          <div className="tag-list">
            {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
          </div>
        </div>
        <section className="image-studio" aria-label={`${project.title} ${t("projectGallery")}`}>
          <div className="image-studio-stage">
            <img
              className="detail-image"
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
                  className="gallery-control gallery-control-previous"
                  type="button"
                  onClick={showPreviousImage}
                  aria-label={t("previousImage")}
                >
                  <span aria-hidden="true">←</span>
                </button>
                <button
                  className="gallery-control gallery-control-next"
                  type="button"
                  onClick={showNextImage}
                  aria-label={t("nextImage")}
                >
                  <span aria-hidden="true">→</span>
                </button>
              </>
            )}
          </div>
          {imageCount > 1 && (
            <div className="image-studio-footer">
              <p aria-live="polite">
                {t("imageOf", { current: activeImage + 1, total: imageCount })}
              </p>
              <div className="image-thumbnails" aria-label={t("chooseProjectImage")}>
                {project.images.map((image, index) => (
                  <button
                    className={clsx("image-thumbnail", index === activeImage && "is-active")}
                    type="button"
                    key={image}
                    onClick={() => setActiveImage(index)}
                    aria-label={`${t("showProjectImage")} ${index + 1}`}
                    aria-pressed={index === activeImage}
                  >
                    <img src={image} alt="" />
                  </button>
                ))}
              </div>
            </div>
          )}
        </section>
        <div className="detail-footer">
          <div>
            <p className="eyebrow">{t("approach")}</p>
            <p>{t("approachCopy")}</p>
          </div>
          <Button href="mailto:suhail14217@gmail.com" variant="outline">
            {t("startConversation")}
          </Button>
        </div>
      </div>
    </main>
  );
}
