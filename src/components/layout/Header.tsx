import { useNavigate } from "react-router-dom";
import clsx from "clsx";
import logo from "../../assets/logo.jpg";
import { useReveal } from "../../hooks/useReveal";
import { useLocale } from "../../i18n";
import { useTheme } from "../../theme";

type HeaderProps = {
  isOpen: boolean;
  onToggle: () => void;
  onNavigate: (hash: string) => void;
};

export function Header({ isOpen, onToggle, onNavigate }: HeaderProps) {
  const navigate = useNavigate();
  const { t, toggleLocale } = useLocale();
  const { theme, toggleTheme } = useTheme();
  const { elementRef, isVisible } = useReveal<HTMLElement>();
  const navItems = [
    { label: t("home"), hash: "#home" },
    { label: t("expertise"), hash: "#services" },
    { label: t("about"), hash: "#about" },
    { label: t("experience"), hash: "#experience" },
    { label: t("projects"), hash: "#work" },
  ];

  return (
    <header
      ref={elementRef}
      className={clsx(
        "fixed inset-x-0 top-0 z-40 flex items-center justify-between border-b border-(--line) bg-(--header)/85 px-4 py-3 backdrop-blur-xl transition-colors duration-300 sm:px-6 lg:px-8",
        "reveal",
        isVisible && "is-visible",
      )}
    >
      <button
        className="flex items-center gap-3 text-sm font-bold tracking-[0.12em] text-(--ink) focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-(--accent)"
        type="button"
        onClick={() => onNavigate("#home")}
        aria-label={t("goToHome")}
      >
        <img className="size-9 rounded-full border border-(--accent)/50 object-cover" src={logo} alt="" />
      </button>
      <button
        className={clsx("menu-button relative z-50 grid size-10 place-items-center rounded-xl text-(--ink) hover:bg-(--accent)/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--accent) md:hidden", isOpen && "is-open")}
        type="button"
        aria-expanded={isOpen}
        aria-controls="site-nav"
        onClick={onToggle}
      >
        <span className="sr-only">{t("toggleMenu")}</span>
        <span className={clsx("absolute h-0.5 w-6 bg-current transition", isOpen ? "rotate-45" : "-translate-y-1.5")} />
        <span className={clsx("absolute h-0.5 w-6 bg-current transition", isOpen ? "-rotate-45" : "translate-y-1.5")} />
      </button>
      <nav
        id="site-nav"
        className={clsx(
          "fixed inset-0 flex min-h-dvh flex-col items-start gap-6 bg-(--paper) px-8 pt-28 transition duration-300 md:static md:min-h-0 md:flex-row md:items-center md:gap-5 md:bg-transparent md:p-0",
          isOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 pointer-events-none md:pointer-events-auto md:translate-y-0 md:opacity-100",
        )}
      >
        {navItems.map((item) => (
          <button className="text-xl text-(--muted) transition hover:text-(--ink) focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-(--accent) md:text-sm" key={item.hash} type="button" onClick={() => onNavigate(item.hash)}>
            {item.label}
          </button>
        ))}
        <button
          className="rounded-full border border-(--accent) px-4 py-2 text-sm font-bold text-(--accent) transition hover:bg-(--accent)/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-(--accent)"
          type="button"
          onClick={() => navigate("/#connect")}
        >
          {t("connect")} <span aria-hidden="true">↗</span>
        </button>
        <button className="border-b border-(--line) px-1 py-1 text-xs font-bold text-(--accent) focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-(--accent)" type="button" onClick={toggleLocale} aria-label={t("languageLabel")}>
          {t("languageName")}
        </button>
        <button className="grid size-9 place-items-center rounded-full border border-(--line) bg-(--surface) text-(--ink) transition hover:rotate-12 hover:bg-(--accent)/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-(--accent)" type="button" onClick={toggleTheme} aria-label={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}>
          <span aria-hidden="true">{theme === "dark" ? "☼" : "☾"}</span>
        </button>
      </nav>
    </header>
  );
}
