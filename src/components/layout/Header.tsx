import { useNavigate } from "react-router-dom";

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

  return (
    <header className="site-header">
      <button
        className="brand"
        type="button"
        onClick={() => onNavigate("#home")}
        aria-label="Go to home"
      >
        <img src="/img/devjane.png" alt="" />
        <span>Suhail Khalil</span>
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
