import type { ButtonHTMLAttributes, PropsWithChildren } from "react";
import clsx from "clsx";

type CardProps = PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>>;

export function Card({ children, className = "", ...props }: CardProps) {
  return (
    <button className={clsx("project-card", className)} {...props}>
      {children}
    </button>
  );
}
