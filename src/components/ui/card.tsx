import type { ButtonHTMLAttributes, PropsWithChildren } from "react";

type CardProps = PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>>;

export function Card({ children, className = "", ...props }: CardProps) {
  return (
    <button className={`project-card ${className}`.trim()} {...props}>
      {children}
    </button>
  );
}
