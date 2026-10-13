import { JSX } from "react/jsx-runtime";
import { SectionHeading } from "../layout/SectionHeading";

const services = [
  ["01", "Full stack development", "React, Next.js, Node.js, Express, PHP, MySQL, and PostgreSQL applications built for reliability and scale."],
  ["02", "Automation & delivery", "Tested workflows, relational data models, and CI/CD pipelines that improve operational efficiency and enable zero-downtime releases."],
  ["03", "Infrastructure & security", "IP cameras, switches, Wi-Fi access points, security policies, and practical cybersecurity-minded IT support."],
];

export function Services(): JSX.Element {
  return (
    <section className="services-section" id="services">
      <div className="page-shell">
        <SectionHeading
          eyebrow="Core expertise"
          title={<>Technology with <em>purpose.</em></>}
          copy="A hands-on engineering approach across applications, infrastructure, AI, and cybersecurity."
          light
        />
        <div className="services-grid">
          {services.map(([number, title, copy]) => (
            <article className="service-card" key={number}>
              <span className="service-number">{number}</span>
              <h3>{title}</h3>
              <p>{copy}</p>
              <span className="service-arrow" aria-hidden="true">↗</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
