import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.jpg";
import { useReveal } from "../../hooks/useReveal";

const navItems = [
  { label: "Home", hash: "#home" },
  { label: "Expertise", hash: "#services" },
  { label: "About", hash: "#about" },
  { label: "Projects", hash: "#work" },
];

type HeaderProps = {
  isOpen: boolean;
  onToggle: () => void;
  onNavigate: (hash: string) => void;
};

export function Header({ isOpen, onToggle, onNavigate }: HeaderProps) {
  const navigate = useNavigate();
  const { elementRef, isVisible } = useReveal<HTMLElement>();

  return (
    <header
      ref={elementRef}
      className={`site-header reveal ${isVisible ? "is-visible" : ""}`}
    >
      <button
        className="brand"
        type="button"
        onClick={() => onNavigate("#home")}
        aria-label="Go to home"
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
        <span className="sr-only">Toggle menu</span>
        <i />
        <i />
      </button>
      <nav id="site-nav" className={`site-nav ${isOpen ? "is-open" : ""}`}>
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
          Let&apos;s connect <span aria-hidden="true">↗</span>
        </button>
      </nav>
    </header>
  );
}
