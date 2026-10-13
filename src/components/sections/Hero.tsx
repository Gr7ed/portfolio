import { Button } from "../ui/button";
import heroImage from "../../assets/images/dev-jane-01.jpg";
import { JSX } from "react/jsx-runtime";
export function Hero(): JSX.Element {
  return (
    <section className="hero page-shell" id="home">
      <div className="hero-copy">
        <p className="eyebrow">Full stack engineer · Madinah, Saudi Arabia</p>
        <h1>
          Engineering <em>secure</em> digital solutions.
        </h1>
        <p className="hero-intro">
          I&apos;m Suhail, a full stack engineer and IT specialist with 5+ years
          of experience building web applications, automating workflows, and
          deploying reliable enterprise infrastructure.
        </p>
        <div className="hero-actions">
          <Button href="/#work">View my projects</Button>
          <a className="text-link" href="mailto:suhail14217@gmail.com">
            Get in touch <span aria-hidden="true">↗</span>
          </a>
        </div>
        <div className="hero-meta">
          <span>
            <strong>5+</strong> years of experience
          </span>
          <span>
            <strong>3.60</strong> / 4.00 GPA
          </span>
        </div>
      </div>
      <div className="hero-visual">
        <div className="hero-shape" />
        <img src={heroImage} alt="Suhail Khalil" />
        <span className="hero-note">
          Build with
          <br />
          <strong>purpose.</strong>
        </span>
      </div>
    </section>
  );
}
