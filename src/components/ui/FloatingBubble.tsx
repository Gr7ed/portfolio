import { useEffect, useState } from "react";

type FloatingBubbleProps = {
  onClick: () => void;
};

export function FloatingBubble({ onClick }: FloatingBubbleProps) {
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
      aria-label="Back to home"
      onClick={onClick}
    >
      <span className="floating-bubble-arrow" aria-hidden="true">
        ↑
      </span>
    </button>
  );
}
