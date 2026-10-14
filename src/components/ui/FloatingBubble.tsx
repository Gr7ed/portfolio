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
      className="floating-bubble"
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
