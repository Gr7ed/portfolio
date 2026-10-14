import { useNavigate } from "react-router-dom";
import clsx from "clsx";
import logo from "../../assets/logo.jpg";
import { useReveal } from "../../hooks/useReveal";
import { useLocale } from "../../i18n";

type HeaderProps = {
  isOpen: boolean;
  onToggle: () => void;
  onNavigate: (hash: string) => void;
};

export function Header({ isOpen, onToggle, onNavigate }: HeaderProps) {
  const navigate = useNavigate();
  const { t, toggleLocale } = useLocale();
  const { elementRef, isVisible } = useReveal<HTMLElement>();
  const navItems = [
    { label: t("home"), hash: "#home" },
    { label: t("expertise"), hash: "#services" },
    { label: t("about"), hash: "#about" },
    { label: t("projects"), hash: "#work" },
  ];

  return (
    <header
      ref={elementRef}
      className={clsx("site-header", "reveal", isVisible && "is-visible")}
    >
      <button
        className="brand"
        type="button"
        onClick={() => onNavigate("#home")}
        aria-label={t("goToHome")}
      >
        <img src={logo} alt="" />
      </button>
      <button
        className="menu-button"
        type="button"
        aria-expanded={isOpen}
        aria-controls="site-nav"
        onClick={onToggle}
      >
        <span className="sr-only">{t("toggleMenu")}</span>
        <i />
        <i />
      </button>
      <nav id="site-nav" className={clsx("site-nav", isOpen && "is-open")}>
        {navItems.map((item) => (
          <button key={item.hash} type="button" onClick={() => onNavigate(item.hash)}>
            {item.label}
          </button>
        ))}
        <button
          className="nav-contact"
          type="button"
          onClick={() => navigate("/#contact")}
        >
          {t("connect")} <span aria-hidden="true">↗</span>
        </button>
        <button className="language-button" type="button" onClick={toggleLocale} aria-label={t("languageLabel")}>
          {t("languageName")}
        </button>
      </nav>
    </header>
  );
}
