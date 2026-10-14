import { Button } from "../ui/button";
import { JSX } from "react/jsx-runtime";
import { useReveal } from "../../hooks/useReveal";
import { useLocale } from "../../i18n";
import clsx from "clsx";

export function Hero(): JSX.Element {
  const { t } = useLocale();
  const { elementRef, isVisible } = useReveal<HTMLElement>();

  return (
    <section
      ref={elementRef}
      className={clsx("hero", "page-shell", "reveal", isVisible && "is-visible")}
      id="home"
    >
      <div className="hero-copy">
        <p className="eyebrow">{t("location")}</p>
        <h1>
          {t("heroTitleBefore")} <em>{t("heroTitleEmphasis")}</em> {t("heroTitleAfter")}
        </h1>
        <p className="hero-intro">{t("heroIntro")}</p>
        <div className="hero-actions">
          <Button href="/#work">{t("viewProjects")}</Button>
          <a className="text-link" href="mailto:suhail142176@gmail.com">
            {t("getInTouch")} <span aria-hidden="true">↗</span>
          </a>
        </div>
        <div className="hero-meta">
          <span>
            <strong>5+</strong> {t("yearsExperience")}
          </span>
          <span>
            <strong>3.60</strong> {t("gpa")}
          </span>
        </div>
      </div>
      <div className="hero-visual">
        <div className="hero-shape" />
        <div className="hero-placeholder" role="img" aria-label={t("secureWorkspace")}>
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
          {t("buildWith")}
          <br />
          <strong>{t("purpose")}</strong>
        </span>
      </div>
    </section>
  );
}
