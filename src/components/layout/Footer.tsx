import { useReveal } from "../../hooks/useReveal";

export function Footer() {
  const { elementRef, isVisible } = useReveal<HTMLElement>();

  return (
    <footer
      ref={elementRef}
      className={`site-footer reveal ${isVisible ? "is-visible" : ""}`}
      id="contact"
    >
      <div className="page-shell">
        <div>
          <p className="eyebrow">Have a technical challenge?</p>
          <h2>
            Let&apos;s build
            <br />
            <em>something useful.</em>
          </h2>
        </div>
        <a className="footer-email" href="mailto:suhail14217@gmail.com">
          suhail14217@gmail.com <span aria-hidden="true">↗</span>
        </a>
        <div className="footer-bottom">
          <span>© 2026 Suhail Khalil Abdulshakur</span>
          <div>
            <a
              className="social-link"
              href="https://github.com/Gr7ed"
              target="_blank"
              rel="noreferrer"
            >
              <svg aria-hidden="true" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M12 .5a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.04c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.74.08-.74 1.2.08 1.83 1.23 1.83 1.23 1.07 1.83 2.8 1.3 3.48.99.11-.77.42-1.3.76-1.6-2.67-.3-5.47-1.34-5.47-5.95 0-1.31.47-2.38 1.23-3.22-.12-.3-.53-1.52.12-3.18 0 0 1-.32 3.3 1.23a11.4 11.4 0 0 1 6 0c2.3-1.55 3.3-1.23 3.3-1.23.65 1.66.24 2.88.12 3.18.77.84 1.23 1.91 1.23 3.22 0 4.62-2.81 5.64-5.49 5.94.43.37.81 1.1.81 2.22v3.29c0 .32.22.69.83.57A12 12 0 0 0 12 .5"
                />
              </svg>
              GitHub
            </a>
            <a
              className="social-link"
              href="https://www.linkedin.com/in/suhail-khalil"
              target="_blank"
              rel="noreferrer"
            >
              <svg aria-hidden="true" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M5.01 3.5A2.5 2.5 0 1 1 5 8.5a2.5 2.5 0 0 1 .01-5ZM2.75 9.75h4.5V21h-4.5V9.75ZM9.75 9.75h4.31v1.54h.06c.6-1.14 2.07-2.34 4.26-2.34 4.56 0 5.4 3 5.4 6.9V21h-4.5v-4.58c0-1.09-.02-2.49-1.52-2.49-1.52 0-1.75 1.19-1.75 2.41V21h-4.5V9.75Z"
                />
              </svg>
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
