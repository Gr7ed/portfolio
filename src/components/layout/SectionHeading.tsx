import type { ReactNode } from "react";
import clsx from "clsx";

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
    <div className={clsx("section-heading", light && "section-heading-light")}>
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {copy && <p className="section-copy">{copy}</p>}
    </div>
  );
}
