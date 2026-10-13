import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { projects } from "../data/projects";
import { Button } from "../components/ui/button";

export function ProjectDetail() {
  const { projectId } = useParams<{ projectId: string }>();
  const navigate = useNavigate();
  const project = projects.find((item) => item.id === projectId);

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
        <img
          className="detail-image"
          src={project.hero || project.image}
          alt={`${project.title} preview`}
        />
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
