import { useNavigate } from "react-router-dom";
import { projects } from "../../data/projects";
import { SectionHeading } from "../layout/SectionHeading";
import { Card } from "../ui/card";
import { useReveal } from "../../hooks/useReveal";

function ProjectCard({ project, index }: { project: (typeof projects)[number]; index: number }) {
  const navigate = useNavigate();

  return (
    <Card type="button" onClick={() => navigate(`/projects/${project.id}`)}>
      <div className="project-image">
        <img src={project.images[0]} alt="" />
        <span className="project-link">
          View project <span aria-hidden="true">↗</span>
        </span>
      </div>
      <div className="project-info">
        <div>
          <p className="project-type">{project.type}</p>
          <h3>{project.title}</h3>
        </div>
        <span className="project-index">0{index + 1}</span>
      </div>
    </Card>
  );
}

export function Work() {
  const { elementRef, isVisible } = useReveal<HTMLElement>();

  return (
    <section
      ref={elementRef}
      className={`work-section reveal ${isVisible ? "is-visible" : ""}`}
      id="work"
    >
      <div className="page-shell">
        <div className="work-header">
          <SectionHeading
            eyebrow="Selected projects"
            title={<>A few things I&apos;ve <em>built.</em></>}
            copy="A selection of engineering, AI, web development, and infrastructure projects. Click any project to take a closer look."
            light
          />
          <a className="text-link light-link" href="mailto:suhail14217@gmail.com">
            Have a technical challenge? <span aria-hidden="true">↗</span>
          </a>
        </div>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
