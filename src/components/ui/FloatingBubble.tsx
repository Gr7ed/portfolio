import { useEffect, useState } from "react";
import { useLocale } from "../../i18n";

type FloatingBubbleProps = {
  onClick: () => void;
};

export function FloatingBubble({ onClick }: FloatingBubbleProps) {
  const { t } = useLocale();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 240);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (!isVisible) {
    return null;
  }

  return (
    <button
      className="fixed bottom-5 end-5 z-30 grid size-12 place-items-center rounded-full border border-[var(--accent)] bg-[var(--accent)] text-[var(--accent-ink)] shadow-xl shadow-black/15 transition hover:-translate-y-1 hover:bg-[var(--surface)] hover:text-[var(--accent)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)] motion-safe:animate-[bubble-float_3s_ease-in-out_infinite]"
      type="button"
      aria-label={t("backToHome")}
      onClick={onClick}
    >
      <span className="floating-bubble-arrow" aria-hidden="true">
        ↑
      </span>
    </button>
  );
}
