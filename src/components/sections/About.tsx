import { SectionHeading } from "../layout/SectionHeading";
import { Button } from "../ui/button"
import aboutImage from "../../assets/images/dev-jane-02.jpg";
import { JSX } from "react/jsx-runtime";
export function About(): JSX.Element {
  return (
    <section className="about-section page-shell" id="about">
      <div className="about-image">
        <img src={aboutImage} alt="Suhail Khalil" />
        <span className="image-label">
          Curious by nature
          <br />◆ Focused by craft
        </span>
      </div>
      <div className="about-copy">
        <SectionHeading
          eyebrow="About Suhail"
          title={<>Building for today, <em>learning for tomorrow.</em></>}
        />
        <p>
          I am a Full Stack Engineer at DALSEEN Co. with 5+ years of
          experience across software engineering, IT infrastructure, marketing,
          and real estate. I hold a B.S. in Information Technology from Saudi
          Electronic University with a 3.60 / 4.00 GPA.
        </p>
        <p>
          My recent work includes React, Next.js, and Express applications,
          automated testing, relational databases, CI/CD pipelines, zero-downtime
          releases, and enterprise network deployments. I am also passionate
          about AI applications and advancing enterprise cybersecurity.
        </p>
        <p>
          My toolkit includes JavaScript, TypeScript, HTML5, CSS3, Node.js,
          PHP, MySQL, PostgreSQL, Jest, Vitest, Git, Docker, Linux, and RAG
          pipelines. I am available for relocation or remote opportunities.
        </p>
        <Button href="mailto:suhail14217@gmail.com" variant="outline">
          Start a conversation
        </Button>
      </div>
    </section>
  );
}
