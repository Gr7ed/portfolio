import { SectionHeading } from "../layout/SectionHeading";
import { Button } from "../ui/button";
import { JSX } from "react/jsx-runtime";
import { useReveal } from "../../hooks/useReveal";
import { useLocale } from "../../i18n";
import clsx from "clsx";

export function About(): JSX.Element {
  const { t } = useLocale();
  const { elementRef, isVisible } = useReveal<HTMLElement>();

  return (
    <section
      ref={elementRef}
      className={clsx("about-section", "page-shell", "reveal", isVisible && "is-visible")}
      id="about"
    >
      <div className="about-image">
        <div className="about-placeholder" role="img" aria-label={t("engineeringToolkit")}>
          <div className="toolkit-card">
            <div className="toolkit-header">
              <span className="toolkit-avatar">SK</span>
              <div>
                <strong>{t("engineeringToolkit")}</strong>
                <small>{t("curiousByNature")}</small>
              </div>
              <span className="toolkit-status" />
            </div>
            <div className="toolkit-line toolkit-line-wide" />
            <div className="toolkit-line toolkit-line-short" />
            <div className="toolkit-grid">
              <span>JS</span>
              <span>TS</span>
              <span>AI</span>
              <span>SQL</span>
              <span>API</span>
              <span>CI</span>
            </div>
            <div className="toolkit-footer">
              <span>BUILD</span>
              <strong>100%</strong>
            </div>
          </div>
          <span className="about-placeholder-dot about-placeholder-dot-one" />
          <span className="about-placeholder-dot about-placeholder-dot-two" />
        </div>
        <span className="image-label">
          {t("curiousByNature")}
          <br />◆ {t("focusedByCraft")}
        </span>
      </div>
      <div className="about-copy">
        <SectionHeading
          eyebrow={t("aboutSuhail")}
          title={<>{t("aboutTitleBefore")} <em>{t("aboutTitleEmphasis")}</em></>}
        />
        <p>{t("aboutParagraph1")}</p>
        <p>{t("aboutParagraph2")}</p>
        <p>{t("aboutParagraph3")}</p>
        <Button href="mailto:suhail14217@gmail.com" variant="outline">
          {t("startConversation")}
        </Button>
      </div>
    </section>
  );
}
