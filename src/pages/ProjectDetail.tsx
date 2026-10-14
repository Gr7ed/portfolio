import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { projects } from "../data/projects";
import { Button } from "../components/ui/button";

export function ProjectDetail() {
  const { projectId } = useParams<{ projectId: string }>();
  const navigate = useNavigate();
  const project = projects.find((item) => item.id === projectId);
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
          <p className="eyebrow">Project not found</p>
          <h1>That project does not exist.</h1>
          <button className="back-link" type="button" onClick={() => navigate("/")}>
            ← Back home
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
          ← Back to all work
        </button>
        <div className="detail-heading">
          <p className="eyebrow">{project.type}</p>
          <h1>{project.title}</h1>
          <p>{project.description}</p>
          <div className="tag-list">
            {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
          </div>
        </div>
        <section className="image-studio" aria-label={`${project.title} image gallery`}>
          <div className="image-studio-stage">
            <img
              className="detail-image"
              src={currentImage}
              alt={`${project.title} preview ${activeImage + 1} of ${imageCount}`}
            />
            {imageCount > 1 && (
              <>
                <button
                  className="gallery-control gallery-control-previous"
                  type="button"
                  onClick={showPreviousImage}
                  aria-label="Previous project image"
                >
                  <span aria-hidden="true">←</span>
                </button>
                <button
                  className="gallery-control gallery-control-next"
                  type="button"
                  onClick={showNextImage}
                  aria-label="Next project image"
                >
                  <span aria-hidden="true">→</span>
                </button>
              </>
            )}
          </div>
          {imageCount > 1 && (
            <div className="image-studio-footer">
              <p aria-live="polite">
                Image {activeImage + 1} of {imageCount}
              </p>
              <div className="image-thumbnails" aria-label="Choose project image">
                {project.images.map((image, index) => (
                  <button
                    className={`image-thumbnail ${index === activeImage ? "is-active" : ""}`}
                    type="button"
                    key={image}
                    onClick={() => setActiveImage(index)}
                    aria-label={`Show project image ${index + 1}`}
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
            <p className="eyebrow">The approach</p>
            <p>
              I focused on making the experience feel simple and intentional,
              with a clear visual hierarchy and responsive behavior that works
              as naturally on a phone as it does on a desktop.
            </p>
          </div>
          <Button href="mailto:suhail14217@gmail.com" variant="outline">
            Start a conversation
          </Button>
        </div>
      </div>
    </main>
  );
}
