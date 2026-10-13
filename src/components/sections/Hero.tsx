import { Button } from "../ui/button";
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
        <div className="hero-placeholder" role="img" aria-label="Secure digital workspace">
          <div className="placeholder-window">
            <div className="placeholder-window-bar">
              <span />
              <span />
              <span />
              <strong>secure.build</strong>
            </div>
            <div className="placeholder-window-body">
              <div className="placeholder-sidebar">
                <i />
                <i />
                <i />
                <i />
              </div>
              <div className="placeholder-dashboard">
                <div className="placeholder-dashboard-heading">
                  <span />
                  <span />
                </div>
                <div className="placeholder-chart">
                  <i />
                  <i />
                  <i />
                  <i />
                  <i />
                  <i />
                </div>
                <div className="placeholder-metrics">
                  <span />
                  <span />
                  <span />
                </div>
              </div>
            </div>
          </div>
          <span className="placeholder-orbit placeholder-orbit-one" />
          <span className="placeholder-orbit placeholder-orbit-two" />
          <span className="placeholder-code">&lt;/&gt;</span>
        </div>
        <span className="hero-note">
          Build with
          <br />
          <strong>purpose.</strong>
        </span>
      </div>
    </section>
  );
}
