import type { ReactNode } from "react";

type SectionHeadingProps = {
  eyebrow: string;
  title: ReactNode;
  copy?: string;
  light?: boolean;
};

export function SectionHeading({
  eyebrow,
  title,
  copy,
  light = false,
}: SectionHeadingProps) {
  return (
    <div className={`max-w-2xl flex flex-col gap-6 ${light ? "section-heading-light" : ""}`}>
      <p className="text-xs font-bold uppercase tracking-[0.18em] text-(--accent)">{eyebrow}</p>
      <h2 className="mt-3 text-4xl font-semibold leading-[0.98] tracking-[-0.06em] text-(--section-ink) sm:text-5xl lg:text-6xl">
        {title}
      </h2>
      {copy && <p className={`mt-5 max-w-xl text-base leading-7 ${light ? "text-(--muted-inverse)" : "text-(--muted)"}`}>{copy}</p>}
    </div>
  );
}
